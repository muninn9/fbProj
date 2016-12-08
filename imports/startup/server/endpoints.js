import bodyParser from 'body-parser';
import { Picker } from 'meteor/meteorhacks:picker';

Picker.middleware(bodyParser.json());

Picker.route('/webhooks/', (params, req, res) => {
    console.log(params);
    console.log(req.body);


    if (
        params.query['hub.mode'] == 'subscribe' &&
        params.query['hub.verify_token'] == '1234'
    ) {
        res.end(params.query['hub.challenge']);
    } else {
        const user = Meteor.users.findOne({"services.facebook.id": req.body.entry[0].uid});
        Meteor.call('addFacebookData', user);
    }
});