import 'bootstrap/dist/css/bootstrap.min.css';
function Services() {
  return (
<>
<div id='services' className='container'>
    <h1 
    data-aos="flip-up"             // Try using a different animation effect
    data-aos-duration="400"
    id='sec2h1' >Our Services</h1>
    <p id='sec4p1'>
        We try to provide Quality services to our customers including:
    </p>
    <div className='row Section4'>
        <div
        data-aos="fade-right"             // Try using a different animation effect
        data-aos-duration="500"
        className='col-sm-3'>
        <p>Web Development</p>
        <p>Graphic & logo Designing</p>
        </div>
        <div className='col-sm-1'></div>
        <div 
        data-aos="fade-right"             // Try using a different animation effect
        data-aos-duration="800"
        
        className='col-sm-3'>
        <p>Mobile Apps Development</p>
        <p>Microsoft Services</p>
        </div>
        <div className='col-sm-1'></div>
        <div 
    data-aos="fade-right"             // Try using a different animation effect
    data-aos-duration="1100"
        
        className='col-sm-3'>
        <p>Programming Services</p>
        <p>Photo/Video Editing</p>
        </div>
    </div>
    <p id='sec4p1'>
        For any other requirments feel free to contact us withuot any hesitation.
    </p>
    <button id='sec4btn1' className='btn btn-primary' type='button'>
        Contact us
    </button>
    <img 
    data-aos="fade-in"             // Try using a different animation effect
    data-aos-duration="1200"
    class="my-5 mx-auto d-block" src={require('../assets/line.png')} alt='background'/>
</div>
</>
  );
}
export default Services;