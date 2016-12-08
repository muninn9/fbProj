import React from 'react';
import TestTube from './../components/TestTube.jsx'
import MeasuringStick from './../components/MeasuringStick.jsx'
import Login from './../components/Login.jsx'


export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    getLikes() {
        const {
            likes,
            loading
            } = this.props;

        return loading ? 'Loading' : likes
    }

    render() {
        const {likes} = this.props;
        return (
            <div>
                <h1>Facebook Project</h1>
                <Login />
                <div className="flex-column tube-container">
                    <h1>Likes: {this.getLikes()}</h1>
                    <div className="flex-row">
                        <MeasuringStick />
                        <TestTube likes={likes} />
                    </div>
                </div>
            </div>
        )
    }
}

App.propTypes = {
    connected: React.PropTypes.bool,
    loading: React.PropTypes.bool,
    likes: React.PropTypes.number
};