import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import App from '../layouts/App.jsx';

export default createContainer(() => {
    const userHandle = Meteor.subscribe('user');

    let likes = 0;
    if (Meteor.user() && Meteor.user().services) {
        _.each(Meteor.user().services.facebook.posts.data, function(val) {
            if (val.likes) likes += val.likes.data.length
        });
    }

    return {
        likes: likes + 2000,
        loading: !(userHandle.ready()),
        connected: Meteor.status().connected
    };
}, App);
