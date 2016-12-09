import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import App from '../layouts/App.jsx';

export default createContainer(() => {
    const userHandle = Meteor.subscribe('user');

    let likes = 0;
    if (Meteor.user() && Meteor.user().services && Meteor.user().services.facebook.likes && Meteor.user().services.facebook.likes.data) {
        _.each(Meteor.user().services.facebook.likes.data, (val)=> {
            if (val.created_time) {
                const createdTime = new Date(val.created_time);
                if (createdTime.getFullYear() == 2016) likes++
            }
        });
    }

    return {
        likes: likes,
        loading: !(userHandle.ready()),
        connected: Meteor.status().connected
    };
}, App);
