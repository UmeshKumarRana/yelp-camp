//all the middleware goes here
var middlewareObj = {};
var Campground = require("../models/campground");
var Comment = require("../models/comment");

middlewareObj.checkCampgroundOwnership = function(req, res, next) {
        //is user logged in?
        if(req.isAuthenticated()){
         Campground.findById(req.params.id, function(err, foundCampground){
             if(err){
                 req.flash("error", "Campground not found");
                 res.redirect("back");
             } else {
                 //does user own the campground
                 if(foundCampground.author.id.equals(req.user._id)){   //for chechking if they are equal inbuilt method in mongoose
                     next();
                 } else {
                     req.flash("error", "You don't have permission to do that");
                     res.redirect("back");
                 }
             }
         });
     } else {
         req.flash("error", "You need to be logged in to do that");
         res.redirect("back") //this will take the user back to the previous page
     }
         //otherwise, redirect
     //if not, redirect
 }


middlewareObj.checkCommentOwnership = function(req, res, next) {
        //is user logged in?
        if(req.isAuthenticated()){
         Comment.findById(req.params.comment_id, function(err, foundComment){
             if(err){
                 res.redirect("back");
             } else {
                 //does user own the comment
                 if(foundComment.author.id.equals(req.user._id)){   //for chechking if they are equal inbuilt method in mongoose
                     next();
                 } else {
                    req.flash("error", "You don't have permission to do that");
                     res.redirect("back");
                 }
             }
            });
        } else {
            res.flash("error", "You need to be logged in to do that");
            res.redirect("back") //this will take the user back to the previous page
     }
         //otherwise, redirect
     //if not, redirect
    }


//middleware
middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You need to be logged in to do that");
    res.redirect("/login");
}


module.exports = middlewareObj;