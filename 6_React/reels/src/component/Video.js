import React from 'react'

import './Video.css'
import ReactDOM from 'react-dom';
function Video(props) {
    const handleMute =(e)=>{
    const handleMute = (e)=>{
        e.preventDefault();
        e.target.muted = !e.target.muted
        e.target.muted = !e.target.muted;
    }
    const handleAutoScroll= (e)=>{
        let next = ReactDOM.findDOMNode(e.target).parentNode.nextSibling;
        if(next)
        {
            next.scrollIntoView({behaviour:'smooth'});
            e.target.muted = true;
        }
    }
    return (
        <>
        <video className='video-styles' onClick={handleMute} controls muted='muted' type='video/mp4'>
            <source src={props.source} type='video/webm'/>
        </video>
        <video onEnded={handleAutoScroll} src={props.source} className='video-styles' onClick={handleMute} muted='muted' type='video/mp4' ></video>
        </>
    )
}
}
export default Video