const withAuth = (req, res, next) => {
<<<<<<< HEAD
    if(!req.session.user_id){
        res.redirect('/login');
    } else {
        next();
    }
}

module.exports = withAuth;
=======
    if (!req.session.user_id) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  
>>>>>>> 3739e302b596547686e8581ba0b1c27b14b7aa58
