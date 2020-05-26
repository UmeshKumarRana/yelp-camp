var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://images.unsplash.com/photo-1444124818704-4d89a495bbae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quod placeat quis, ipsa in dignissimos magnam velit facilis doloremque. Laborum obcaecati fuga corporis? Rerum non, animi, quis quos incidunt esse nostrum facilis neque quo velit repellat expedita veniam fugiat officia magnam aspernatur. Temporibus blanditiis inventore reprehenderit doloribus reiciendis. Sit nemo cum natus veritatis repellat molestias autem eius placeat, animi illum dolores a, possimus ut quis dolorem dicta officiis voluptas voluptates, ad distinctio? Alias ex aliquam voluptas deserunt recusandae! Sed, quisquam. Laboriosam dolorem, dolorum et repellat laborum deserunt atque voluptatem eaque doloribus id consectetur est inventore maiores quidem, adipisci rerum accusantium."
        
    },
    {
        name: "Desert Mesa",
        image: "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quod placeat quis, ipsa in dignissimos magnam velit facilis doloremque. Laborum obcaecati fuga corporis? Rerum non, animi, quis quos incidunt esse nostrum facilis neque quo velit repellat expedita veniam fugiat officia magnam aspernatur. Temporibus blanditiis inventore reprehenderit doloribus reiciendis. Sit nemo cum natus veritatis repellat molestias autem eius placeat, animi illum dolores a, possimus ut quis dolorem dicta officiis voluptas voluptates, ad distinctio? Alias ex aliquam voluptas deserunt recusandae! Sed, quisquam. Laboriosam dolorem, dolorum et repellat laborum deserunt atque voluptatem eaque doloribus id consectetur est inventore maiores quidem, adipisci rerum accusantium."
    },
    {
        name: "Canyon Floor",
        image: "https://images.unsplash.com/photo-1506535995048-638aa1b62b77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quod placeat quis, ipsa in dignissimos magnam velit facilis doloremque. Laborum obcaecati fuga corporis? Rerum non, animi, quis quos incidunt esse nostrum facilis neque quo velit repellat expedita veniam fugiat officia magnam aspernatur. Temporibus blanditiis inventore reprehenderit doloribus reiciendis. Sit nemo cum natus veritatis repellat molestias autem eius placeat, animi illum dolores a, possimus ut quis dolorem dicta officiis voluptas voluptates, ad distinctio? Alias ex aliquam voluptas deserunt recusandae! Sed, quisquam. Laboriosam dolorem, dolorum et repellat laborum deserunt atque voluptatem eaque doloribus id consectetur est inventore maiores quidem, adipisci rerum accusantium."
    }
]

function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){   //this will remove all the campgrounds stored in the database
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds");
        //remove all comments
        Comment.remove({}, function(err,){
            if(err){
                console.log(err);
            }
            console.log("removed comments!")
            //add a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    } else {
                        console.log("added a campground");
                        //create a comment
                        Comment.create({
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created");
                            }
                        });
                    }
                });
            });
        });
    });
}

module.exports = seedDB;


