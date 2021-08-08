import React, { useEffect, useState } from 'react'
import Vid1 from './vid1.mp4'
import Vid2 from './vid2.mp4'
import Vid3 from './vid3.mp4'
import Vid4 from './vid4.mp4'
import Video from './VideoIo'
export default function Ioa() {
    const [sources, setSources] = useState([{ url: Vid1 }, { url: Vid2 }, { url: Vid3 }, { url: Vid4 }]);
    const callback=entries=>{
        entries.forEach(e=>{
           let el=e.target.childNodes[0];
           el.play().then(()=>{
               //if this video is not in viewport then pause it
               if(!el.paused && !e.isIntersecting)
               {
                   el.pause();                
               }
           })
        })
    }
    const observer=new IntersectionObserver(callback,{
        threshold:0.9
    })
    useEffect(() => {
       let elements=document.querySelectorAll(".videos");
        elements.forEach(element => {
            observer.observe(element);
        });
        
    }, [])
    return (
        <div className="video-container">
            <div className='videos'>
                <Video source={sources[0].url} />
            </div>
            <div className='videos'>
                <Video source={sources[1].url} />
            </div><div className='videos'>
                <Video source={sources[2].url} />
            </div><div className='videos'>
                <Video source={sources[3].url} />
            </div>
        </div>
    )
}
