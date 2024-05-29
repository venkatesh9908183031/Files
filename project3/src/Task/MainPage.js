import React from 'react';
import{Container,Row,Col} from 'react-bootstrap'

const MainPage = () => {
    return (
       <div className='container'>
       <div className='row'>
       <div className='col'>
       <div className='container'>
        <div class="card">
  <div class="card-header">
    <h1 style={{color:'turquoise'}}>Welcome You All</h1>
  </div>
  </div>
  </div>

</div>
<div className='row'>
<div className='col-7'>
<ul>
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="https://www.altavistainfosolutions.com/About.html">About</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="https://www.maxask.com/nt/?q=Galley#gsc.tab=1&gsc.q=images">Gallery</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="https://www.altavistainfosolutions.com/Contact.html">Contact Us</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " href="https://www.altavistainfosolutions.com/">Home</a>
    <p style={{color:'Greyscale'}}>Here you can know all about of <mark style={{ color:'red'}}>Company</mark>.</p>
  </li>
  </ul>
  </div>
  <div className='col-5'>
  <div class="input-group">
    <div class="input-group-text" id="btnGroupAddon2" style={{color:'royalblue'}}>Google</div>
    <input type="text" class="form-control" placeholder="Search Here" aria-label="Input group example" aria-describedby="btnGroupAddon2"/>
    <button type='button' style={{background:'blue', color:'red'}}>GO</button>
  </div>
</div>
</div>
<div className='row'>
<div className='col'>
<marquee>
  <image className="image-container" style={{overflowX:'auto'}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThvs3KzTZ54bhQ8Wik7iB0X5Z-hOjZGy175wqMBqLkg6cJ6qQ&s" style={{height:'50px', width:'60px', padding:'2px'}} />
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58t62siG1Ykvu7oI8vrBsGJTurGnoy9dBh5rkdDGd3ijP5YQ8&s"  style={{height:'50px', width:'60px', padding:'2px'}}/>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQslCxnqZM0U1JGSL_vb-UkPqBSpXM_iDP46nYkKvUyFOEiK5U&s" style={{height:'50px', width:'60px', padding:'2px'}} />
</image>
</marquee>
</div>
</div>
<div className='row'>
<div className='col'>

<center>
<div class="card" style={{width:'10pxm'}}>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" style={{color:'blue'}}>Thank you</li>
    <li class="list-group-item" style={{color:'orange'}}>Visit Again</li>
    <li class="list-group-item" style={{color:'GrayText'}}>Have A Nice Day!</li>
  </ul>
  <div class="card-footer">
    <h3 style={{color:'hotpink'}}>Bye Bye</h3>
  </div>
</div>
</center>
</div>
</div>
<footer>
<Container>
        <Row>
            <Col className="text-center py-3">
            <p style={{color:'violet'}}>All Rights &copy;Recived</p>
            </Col>
        </Row>
        </Container>
</footer>
</div>
</div> 

    );
};

export default MainPage;
