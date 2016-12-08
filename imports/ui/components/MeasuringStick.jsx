import React, {Component} from 'react'

export default class MeasuringStick extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="flex-column measuring-stick">
                <div className="flex-column k-mark"><b>3K</b></div>
                <div className="small-mark"></div>
                <div className="small-mark"></div>
                <div className="small-mark"></div>
                <div className="small-mark"></div>
                <div className="small-mark"></div>
                <div className="small-mark"></div>
                <div className="small-mark"></div>
                <div className="small-mark"></div>
                <div className="small-mark"></div>
                <div className="small-mark"></div>
                <div className="flex-column k-mark"><b>2K</b></div>
                <div className="small-mark"></div>
                <div className="small-mark"></div>
                <div className="small-mark"></div>
                <div className="small-mark"></div>
                <div className="small-mark"></div>
                <div className="small-mark"></div>
                <div className="small-mark"></div>
                <div className="small-mark"></div>
                <div className="small-mark"></div>
                <div className="small-mark"></div>
                <div className="flex-column k-mark"><b>1K</b></div>
            </div>
        )
    }
}