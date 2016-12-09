import { Meteor } from 'meteor/meteor';
var graph = require('fbgraph');
Future = Npm.require('fibers/future');

Meteor.methods({
   'addFacebookData'(user) {
       console.log('addFacebookData called');
       const future = new Future();
       if (!user) user = Meteor.user();

       console.log(user);
       graph.setAccessToken(user.services.facebook.accessToken);

       var options = {
           timeout:  3000
           , pool:     { maxSockets:  Infinity }
           , headers:  { connection:  "keep-alive" }
       };

       var params = { fields: "id,name,posts{likes},likes.limit(3000),friends" };

       graph
           .setOptions(options)
           .get("me", params, Meteor.bindEnvironment(function (err, res) {
               Meteor.users.update({_id: user._id}, {$set:{
                   "services.facebook.posts": res.posts,
                   "services.facebook.likes": res.likes,
                   "services.facebook.friends": res.friends
               }});
               if (res) future.return(res);
           }));

       return future.wait()
   }
});