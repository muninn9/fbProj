let userRefs = {};

Meteor.methods({
    storeUser() {
        Object.assign(userRefs, Meteor.user());
        console.log(userRefs);
    }
});

// when a req comes in check database