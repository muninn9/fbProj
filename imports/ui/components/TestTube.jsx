import React, {Component} from 'react'
import MeasuringStick from './MeasuringStick.jsx'
import hearts from '/imports/lib/heart-rows.jsx'


export default class TestTube extends Component {
    constructor(props) {
        super(props);

        this.getHearts = ()=> {
            const likes = this.props.likes;
            let i = 0, k = 0, domHearts = [], t = 0;
            if(likes <= 1000) t = 250;
            if(likes > 1000 && likes <= 1500) t = 137;
            if(likes > 1500 && likes <= 2600) t = 117;
            if(likes > 2600 && likes <= 2900) t = 100;
            if(likes > 2900 && likes <= 2933) t = 97.76;
            if(likes > 2933 && likes <= 2950) t = 95.16;
            if(likes > 2950) t = 93.75;

            if (this.props.likes > 0) {
                while(i < likes){
                    domHearts.push(hearts[k]);
                    i += t;
                    k++
                }
                return domHearts;
            }

        };

        this.hearts = this.getHearts();
    }


    getSizes() {
        const size = this.getSize() + 'px', rotation = 'rotate(' + this.getRotation() + 'deg)';
        return {width: size, height: size, transform: rotation}
    };


    render() {
        return (
            <div className="flex-column test-tube">
                {this.hearts}
            </div>

        )
    }
}
//{this.heartRows}

/*
 this.getRotation = () => {
 return Math.round(Math.random() * 120 + 300)
 };

 this.getSize = () => {
 return Math.round(Math.random() * 20 + 20)
 };

 this.sizes = [
 {width: '20px', height: '20px'},
 {width: '30px', height: '30px'},
 {width: '40px', height: '40px'}
 ];

 this.getSizes = () => {
 /!*let heightWidth = this.sizes[Math.round(Math.random() * 3)];
 if (heightWidth) {
 const rotation = {transform: 'rotate(' + this.rotate() + 'deg)'};
 heightWidth['transform'] = rotation.transform;
 }*!/
 const size = this.getSize(), rotation = 'rotate(' + this.getRotation() + 'deg)';


 return {width: size, height: size, transform: rotation}
 };

 this.getKey = () => {
 return Math.round(Math.random() * 2000000)
 };

 this.heartRow = () => {
 let heartRow = [], heartsPerRow = 4;
 for (let h = 0; h < heartsPerRow; h++) {
 heartRow.push(<div key={this.getKey()} className='flex-column heart' style={this.getSizes()}><img
 src="/like.svg" height="100%"/></div>);
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

 this.heartRows = this.getHeartRows()*/



//////////////////////////////////////////////////////////////////////


/*let totalWidth = 0, circleMap = [[]], cr = 0, k = 0, padding = 20;
for (let i = 0; i < hearts.length; i++) {
    let bottom = '20px';
    if (parseInt(totalWidth) > 155 - padding) {
        k = 0;
        totalWidth = 0;
        circleMap.push([]);
        cr++;
    }

    if (cr > 0) {
        circleMap.forEach((row) => {
            if (row[k] && row[k].height) bottom = parseInt(bottom) + parseInt(row[k].height) + 5 + 'px'
        })
    }

    hearts[i].props.style['left'] = totalWidth;
    hearts[i].props.style['bottom'] = bottom;
    circleMap[cr].push({height: hearts[i].props.style.height});
    totalWidth = parseInt(totalWidth) + parseInt(hearts[i].props.style.width) + 5 + 'px';
    k++;
    console.log(hearts[i]);
}*/
