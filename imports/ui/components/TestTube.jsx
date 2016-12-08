import React, {Component} from 'react'
import MeasuringStick from './MeasuringStick.jsx'




export default class TestTube extends Component {
    constructor(props) {
        super(props);

        this.getRotation = () => {
            return Math.round(Math.random() * 120 + 300)
        };

        this.getSize = () => {
            return Math.round(Math.random() * 20 + 20)
        };

        this.sizes = [
            {width:'20px', height:'20px'},
            {width:'30px', height:'30px'},
            {width:'40px', height:'40px'}
        ];

        this.getSizes = () => {
            /*let heightWidth = this.sizes[Math.round(Math.random() * 3)];
            if (heightWidth) {
                const rotation = {transform: 'rotate(' + this.rotate() + 'deg)'};
                heightWidth['transform'] = rotation.transform;
            }*/
            const size = this.getSize(), rotation = 'rotate(' + this.getRotation() + 'deg)';


            return {width: size, height: size, transform: rotation}
        };

        this.getKey = () => {
            return Math.round(Math.random() * 2000000)
        };

        this.heartRow = () => {
            let heartRow = [], heartsPerRow = 4;
            for (let h = 0; h < heartsPerRow; h++) {
                heartRow.push(<div key={this.getKey()} className='flex-column heart' style={this.getSizes()}><img src="/like.svg" height="100%" /></div>);
            }

            return heartRow
        };

        this.getHeartRows = () => {
            let heartRows = [], i = this.props.likes;
            while (i > 0) {
                heartRows.push(<div key={this.getKey()} className='flex-row heart-row'>{this.heartRow()}</div>);
                i -= 375;
            }

            return heartRows
        };

        this.heartRows = this.getHeartRows()
    }

    render() {
        return (
            <div className="flex-column test-tube">
                {this.heartRows}
            </div>

        )
    }
}
