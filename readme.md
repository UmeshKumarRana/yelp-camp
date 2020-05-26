#YelpCamp

##alphaFlamingo

* This application is about the capmgrounds.
* This is made using HTML, CSS, Javascript, NodeJS, Express and mongo database.
* For styling the pages, Bootstrap 3 is used.
* For icons, font awesome icons are used.
* The various packages used in making the app can be found in package.json file(inside dependecies section).
* seeds.js file is added so each time you run the app, everything you added later through the web page will be removed and you will only see the campgrounds that are created by the seed file each time. So take care of it.


##For running the app in the development mode:

*Use "node app.js" in terminal and open http://localhost:3000 to view it in the browser.
*If you use "nodemon" to run the app then the server will restart automatically if you make edits and then save.

##Note:
* This app is also hosted online on Heroku.
* To view the app enter the url https://aqueous-sea-65338.herokuapp.com in the browser.

##The Various Steps Involved in making the app are:

##Initial Setup
* Adding Landing Page that lists all campgrounds
*Add Campgrounds Page that lists all campgrounds

Each Campground has:
    *Name
    *Image

#Layout and Basic Styling
* Create our header and footer partials
* Add in Bootstrap

#Creating New Campgrounds
* Setup new campground POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled formm

#Style the campgrounds page
* Add a better header/title
* Make campgrounds display in a grid

#Style the Navbar and Form
* Add a navbar to all templates
* Style the new camground form

#Add Mongoose
* Install and configure mongoose
* Setup campground model
* Use campground model inside of our routes!

#Show Page
* Review the TESTful routes we've seen so far
* Add description to our campground model
* Add db.collection.drop()
* Add a show route/template

#Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly!

#Add Seeds File
* Add a seeds.js file
* Run the seeds file every time the server starts

#Add the Comment model!
* Make our errors go away!
* Display comments on campground show page

#Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

#Style Show Page
* Add sidebar to show page
* Display comments nicely

##Finish Styling Show Page
* Add public directory
* Add custom stylesheet

##Auth Pt. 1 - Add User Model
* Install all packages needed for auth
* Define User model

##Auth Pt. 2 - Register
* Configure Passport
* Add register routes
* Add register template

##Auth Pt. 3 - Login
* Add login routes
* Add login template

##Auth Pt. 4 - Logout/Navbar
* Add logout route
* Prevent user from adding a comment if not signed in
* Add links to navbar
* Show/hide auth links correctly

##Auth Pt. 5 - Show/Hide Links
* Show/hide auth links in navbar correctly

##Refactor The Routes
* Use Express router to reorganize all routes

##Users + Comments
* Associate users and comments
* Save author's name to a comment automatically

##Users + Campgrounds
* Prevent an anauthenticated user from creating a campground
* Save username+id to newly created campground

##Editing Campgrounds
* Add Method-Override
* Add Edit Route for Campgrounds
* Add Link to Edit Page
* Add Update Route
* Fix $set problem

##Deleting Campgrounds
* Add Destroy Route
* Add Delete button

##Authorization
* User can only edit his/her campgrounds
* User can only delete his/her campgrounds
* Hide/Show edit and delete buttons

##Edting Comments
* Add Edit route for comments
* Add Edit button
* Add Update route

<!-- /campgrounds/:id/edit
/campgrounds/:id/comments/:comment_id/edit -->

##Deleting Comments
* Add Destroy route
* Add Delete button

Campground Destroy Route: /campgrounds/:id
Comment Destroy Route: /campgrounds/:id/comments/:comment_id

##Authoriztion Part 2: Comments
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/Show edit and delete buttons
* Refactor Middleware

##Adding in Flash
* Demo working version
* Install and configure connect-flash
* Add bootstrap alerts to header

##styling the landing page

INDEX   /campgrounds
NEW     /campgrounds/new
CREATE  /campgrounds
SHOW    /campgrounds/:id

NEW     campgrounds/:id/comments/new    GET
CREATE  campgrounds/:id/comments        POST





