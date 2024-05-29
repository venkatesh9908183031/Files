import React from 'react'

const ScrollableImages = () => {
    return (
        <div style={{ overflowX: 'scroll'}}>
            <img src='https://www.pixelstalk.net/wp-content/uploads/2016/08/Best-Nature-Full-HD-Images-For-Desktop.jpg' style={{height:'10px', width:'20px'}} />
            <br/>
            <img src='https://www.thewowstyle.com/wp-content/uploads/2015/01/images-of-nature-4.jpg' style={{height:'10px', width:'20px'}} />

        </div>
    )
}

export default ScrollableImages

