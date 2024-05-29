import React, { Component } from 'react'

export class Form2 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:'',email:'',mobile:''
    }
  }
  changehandler=(e)=>{
    this.setState({[e.target.name]:e.target.value})
    }
   
    submithandler=(e)=>{
        e.preventDefault()
        console.log(this.state)
    }
    render() {
        const{name,email,mobile}=this.state
    return (
      <div>
        <form onSubmit={this.submithandler}>
            Name:<input type="text" name="name" defaultValue={name} onChange={this.namehandler}/>
            <br/>
            Email:<input type="text" name="email" defaultValue={email} onChange={this.emailhandler}/>
            <br/>
            Mobile:<input type="text" name="mobile" defaultValue={mobile} onChange={this.mobilehandler}/>
            <br/>
            <button type="submit" > Submit</button>
        </form>
      </div>
    )
  }
}

export default Form2