module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    return resizeBy
      .status(403)
      .send({ error: 'You need at least one credit to create a survey' });
  }
  next();
};
