import React from 'react';


const MainPage = () => {
    return (
        
        <div className='container'>
        <div class="card">
  <div class="card-header">
    <h1 style={{color:'turquoise'}}>This is my header</h1>
  </div>

</div>
    <div>   <ul class="nav nav-tabs">
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
    <center>
    <p style={{color:'Greyscale'}}>Here you can know all about of <mark style={{color:'red'}}>Company</mark>.</p>
    </center>
  </li>
</ul>
</div> 
<image className="image-container" style={{overflowX:'scroll'}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThvs3KzTZ54bhQ8Wik7iB0X5Z-hOjZGy175wqMBqLkg6cJ6qQ&s" style={{height:'20px', width:'30px', padding:'2px'}} />
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58t62siG1Ykvu7oI8vrBsGJTurGnoy9dBh5rkdDGd3ijP5YQ8&s"  style={{height:'20px', width:'30px', padding:'2px'}}/>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQslCxnqZM0U1JGSL_vb-UkPqBSpXM_iDP46nYkKvUyFOEiK5U&s" style={{height:'20px', width:'30px', padding:'2px'}} />
</image>

</div>
    );
};

export default MainPage;
