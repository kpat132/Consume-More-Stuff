module.exports = {
  isAuthenticated,
  isAuthorized
};

function isAuthenticated(req, res, next) {
  console.log('>>>', req.user)
  if (req.isAuthenticated()) {
    console.log('inside req.isAuth')
    next();
  } else {
    console.log('you aint authenticated')
    res.redirect("/");
  }
}

function isAuthorized(user, param) {
  if (user !== parseInt(param)) {
    throw new Error("User not authorized");
  }
}
