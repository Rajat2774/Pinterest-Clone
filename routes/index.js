var express = require('express');
var router = express.Router();
const userModel=require('./users');
const postModeel=require('./post');

const passport=require('passport');
const localStrategy=require("passport-local");
passport.use(new localStrategy(userModel.authenticate()));
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Home page');
});

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.get('/login', function(req, res, next) {
  res.render('login',{error:req.flash('error')});
});

router.get('/feed', function(req, res, next) {
  res.render('feed');
});


router.get("/profile",isLoggedIn, async function(req,res){
  const user=await userModel.findOne({
    username:req.session.passport.user
  })
  console.log(user);
  res.render('profile',{user});
})

router.post('/register',async function(req,res){
  const { username, fullname, email } = req.body;
  let userData = new userModel({ username, fullname, email });

  userModel.register(userData,req.body.password)
  .then(function(){
    passport.authenticate("local")(req,res,function(){
      res.redirect("/profile");
    })
  })
  
})


router.post("/login",passport.authenticate("local",{
  successRedirect:"/profile",
  failureRedirect:"/login",
  failureFlash:true,
}),function(req,res){
})

router.get("/logout",function(req,res){
  req.logout(function(err){
    if(err){
      return next(err);
    }
    res.redirect("/login");
  });
})

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/login");
}

module.exports = router;
