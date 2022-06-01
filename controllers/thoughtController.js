const { User, thoughts, thought } = require("../Models");

module.exports = {
  getThoughts(req, res) {
    thoughts
      .find()
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },

  // I wanna create a post or users that could be cool
  createThoughts(req, res) {
    thoughts
      .create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { thoughts: thought.thoughtId } },
          { runValidators: true, new: true }
        );
      })
      .then((user) =>
        !user
          ? res.status(404).json({
              message:
                "I can't see the username but I'll still create thought.",
            })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // I will retrieve a "thought" aka post
  getSingleThoughts(req, res) {
    thoughts
      .findOne({ _id: req.params.id })
      .select("-__v")
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: "I dont see this" })
          : res.json(thoughts)
      )
      .catch((err) => res.status(500).json(err));
  },
};
