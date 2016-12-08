import React, {Component} from 'react'

export default class Login extends Component {

    constructor() {
        super();

        this.state = {
            subscription: {
                user: Meteor.subscribe('user')
            }
        }
    }

    login(ev) {
        //ev.preventDefault();
        Meteor.loginWithFacebook({
            requestPermissions: ['user_friends', 'public_profile', 'email', 'user_likes', 'user_posts']
        }, (err) => {
            if (err) {
                console.log(err)
            } else {
                Meteor.call('addFacebookData', (err, res)=> {});
            }
        });
    }

    render() {
        return (
            <div>
                <button className="btn" onClick={this.login.bind(this)}>Login</button>
            </div>
        )
    }
}