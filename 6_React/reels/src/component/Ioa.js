import React, { useContext, useState } from 'react'
import Vid1 from './vid1.mp4'
import Vid2 from './vid2.mp4'
import Vid3 from './vid3.mp4'
import Vid4 from './vid4.mp4'
import Video from './Video'
export default function Ioa() {
    const [sources, setSources] = useState([{ url: Vid1 }, { url: Vid2 }, { url: Vid3 }, { url: Vid4 }]);

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
