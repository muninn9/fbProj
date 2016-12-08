import { Meteor } from 'meteor/meteor';

const service = Meteor.settings.private.oAuth.facebook;

Meteor.startup(() => {

    ServiceConfiguration.configurations.remove({
        service: 'facebook'
    });

    ServiceConfiguration.configurations.insert(service);
});
