import React from 'react'


const getKey= ()=> {
    return Math.round(Math.random() * 2000000)
};

const getRotation = ()=> {
    return 'rotate(' + Math.round(Math.random() * 120 + 300) + 'deg)'
};

export default hearts = [
        <div className="heart small" style={{left:'54px', bottom:'6px', transform:getRotation()}}><img src="/like.svg" height="100%" /></div>,
        <div className="heart medium" style={{left:'84px', bottom:'11px', transform:getRotation()}}><img src="/like.svg" height="100%" /></div>,
        <div className="heart medium" style={{left: '18px', bottom: '23px', transform:getRotation()}}><img src="/like.svg" height="100%" /></div>,
        <div className="heart small" style={{left:'63px', bottom:'35px', height:'20px', width:'20px', transform:getRotation()}}><img src="/like.svg" height="100%" /></div>,
        <div className="heart medium" style={{left:'7px', bottom:'67px', transform:getRotation()}}><img src="/like.svg" height="100%" /></div>,
        <div className="heart medium" style={{left: '51px', bottom: '61px', transform:getRotation()}}><img src="/like.svg" height="100%" /></div>,
        <div className="heart large" style={{padding: '12px', bottom: '52px', left:'95px', transform:getRotation()}}><img src="/like.svg" height="100%" /></div>,
        <div className="heart medium" style={{left: '4px', bottom:'114px', transform:getRotation()}}><img src="/like.svg" height="100%" /></div>,
        <div className="heart large" style={{padding: '12px', bottom:'106px', left:'49px', transform:getRotation()}}><img src="/like.svg" height="100%" /></div>,
        <div className="heart small" style={{left:'101px', bottom:'157px', transform:getRotation()}}><img src="/like.svg" height="100%" /></div>,
        <div className="heart medium" style={{left: '116px', bottom:'118px', transform:getRotation()}}><img src="/like.svg" height="100%" /></div>,
        <div className="heart large" style={{padding: '12px', bottom: '160px', left:'7px', transform:getRotation()}}><img src="/like.svg" height="100%" /></div>,
        <div className="heart medium" style={{bottom:'182px', left:'70px', transform:getRotation()}}><img src="/like.svg" height="100%" /></div>,
        <div className="heart medium" style={{left:'115px', bottom:'183px', transform:getRotation()}}><img src="/like.svg" height="100%" /></div>,
        <div className="heart large" style={{padding: '12px', bottom:'228px', left:'94px', transform:getRotation()}}><img src="/like.svg" height="100%" /></div>,
        <div className="heart medium" style={{bottom:'224px', left:'48px', transform:getRotation()}}><img src="/like.svg" height="100%" /></div>,
        <div className="heart small" style={{bottom:'227px', left:'12px', transform:getRotation()}}><img src="/like.svg" height="100%" /></div>,
        <div className="heart medium" style={{bottom:'258px', left:'7px', transform:getRotation()}}><img src="/like.svg" height="100%" /></div>,
        <div className="heart large" style={{padding: '12px', bottom:'278px', left:'47px', transform:getRotation()}}><img src="/like.svg" height="100%" /></div>,
        <div className="heart medium" style={{bottom: '296px', left:'112px', transform:getRotation()}}><img src="/like.svg" height="100%" /></div>,
        <div className="heart large" style={{padding: '12px', bottom:'340px', left:'79px', transform:getRotation()}}><img src="/like.svg" height="100%" /></div>,
        <div className="heart small" style={{bottom:'306px', left:'14px', transform:getRotation()}}><img src="/like.svg" height="100%" /></div>,
        <div className="heart large" style={{padding: '12px', bottom:'339px', left:'11px', transform:getRotation()}}><img src="/like.svg" height="100%" /></div>,
        <div className="heart medium" style={{bottom:'404px', left:'6px', transform:getRotation()}}><img src="/like.svg" height="100%" /></div>,
        <div className="heart medium" style={{bottom:'395px', left:'53px', transform:getRotation()}}><img src="/like.svg" height="100%" /></div>,
        <div className="heart large" style={{padding: '12px', bottom:'411px', left:'93px', transform:getRotation()}}><img src="/like.svg" height="100%" /></div>,
        <div className="heart small" style={{bottom:'385px', left:'134px', transform:getRotation()}}><img src="/like.svg" height="100%" /></div>,
        <div className="heart small" style={{bottom:'443px', left:'61px', transform:getRotation()}}><img src="/like.svg" height="100%" /></div>,
        <div className="heart medium" style={{bottom:'449px', left:'17px', transform:getRotation()}}><img src="/like.svg" height="100%" /></div>,
        <div className="heart small" style={{bottom:'477px', left:'61px', transform:getRotation()}}><img src="/like.svg" height="100%" /></div>,
        <div className="heart small" style={{bottom:'474px', left:'93px', transform:getRotation()}}><img src="/like.svg" height="100%" /></div>,
        <div className="heart small" style={{bottom:'474px', left:'127px', transform:getRotation()}}><img src="/like.svg" height="100%" /></div>,

];