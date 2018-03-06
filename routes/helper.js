

module.exports = {
  isAuthenticated,
}

function isAuthenticated (req, res, next) {
  console.log('isAuth', req.user)
  if(req.isAuthenticated()) { next();}
  else { res.redirect('/'); }
}
