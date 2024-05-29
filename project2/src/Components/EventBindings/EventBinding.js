import React, { Component } from 'react'
export class EventBinding extends Component{
    showmsg()
    {
        alert('Thanks for click')
    }
    render(){
        return(
            <div>
                <button onClick={()=>this.showmsg()}>Click Me</button>
            </div>
        )
    }
}


EventBinding.propTypes = {}

export default EventBinding