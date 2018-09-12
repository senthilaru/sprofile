import React from 'react';
import 'video.js/dist/video-js.min.css';
import Video from 'video.js';

export default class VideoBox extends React.Component {
    render(){
        return (
            <div>
                <video id="my-video" 
                    className="video-js" 
                    controls
                    preload="auto"
                    width="640"
                    height="264"
                    src="http://localhost:8443/"
                    type="video/mpeg"                    
                >

                </video>
            </div>
        );
    }
}