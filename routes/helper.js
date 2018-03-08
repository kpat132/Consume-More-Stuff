module.exports = {
  isAuthenticated,
  isAuthorized
};

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/");
  }
}

function isAuthorized(user, param) {
  if (user !== parseInt(param)) {
    throw new Error("User not authorized");
  }
}
