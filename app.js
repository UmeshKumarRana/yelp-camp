var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    flash       = require("connect-flash"),
    passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    Campground  = require("./models/campground"),
    seedDB      = require("./seeds"),
    User        = require("./models/user")
    Comment     = require("./models/comment");

//requiring routes
var commentRoutes    = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes       = require("./routes/index");

mongoose.connect("mongodb://localhost/yelp_camp", {   // this will create the yelp_camp database for us inside of mangoDB
    useNewUrlParser: true,
    useUnifiedTopology: true
});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs")
app.use(express.static(__dirname + "/public"));  //for allowing the express to see the public directory  firname refers to the directory that this script was running
app.use(methodOverride("_method"));
app.use(flash());
// console.log(__dirname);
// seedDB(); //seed the database  || //executing the seed.js file

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){  //this will call the funciton in every single route
    res.locals.currentUser = req.user;  // inbuilt method to pass {currentUser: req.user} in all the templates and this is a middleware
    // res.locals.message = req.flash("error");
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);  //these tells our app to use those three route files that we've required
app.use("/campgrounds/:id/comments", commentRoutes);

//creating and saving new campground
// Campground.create(
//     {
//         name: "Granite Hill",
//         image: "https://pixabay.com/get/52e3d5404957a514f1dc84609620367d1c3ed9e04e5074417c2a7bd1974bc5_340.jpg",
//         description: "This is a huge granite hill, no bathrooms. No water. Beautiful granite!"
//     }, 
//     function(err, campground){
//         if(err){
//             console.log(err);
//         } else {
//             console.log("NEWLY CREATED CAMPGROUND: ");
//             console.log(campground);
//         }
// });

app.listen(3000, function(){
    console.log("The YelpCamp Server Has Started!");
});