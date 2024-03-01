import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
<>
<div id='about' className='container'>
    <h1 id='sec2h1'>About us</h1>
    <div className='row Section2'>
        <div className='col-sm-5'>
        
        <img
          data-aos="fade-right"             // Try using a different animation effect
          data-aos-delay="500"
          data-aos-duration="500"
        id='sec2img1' src={require('../assets/sec2img.png')} alt='img' height="450"/>

        </div>
        <div className='col-sm-1'></div>
        <div className='col-sm-6'>
            <section
              data-aos="fade-left"             // Try using a different animation effect
              data-aos-delay="750"
              data-aos-duration="750">
            <h1>About</h1>
            <p id='sec1p1'>
            Welcome to <a className='brand' href="/">TechCraft</a>, your gateway to a world of IT services!
            We specialize in providing tailored solutions, from Microsoft services to coding and professional video/image editing.
            Our user-friendly platform ensures a seamless experience. With a focus on security and responsive customer support,
            we invite you on a journey of innovation and excellence with us. Join <a className='brand' href="/">TechCraft</a> and let's
            redefine the future of IT together!
            </p>

            <p id='sec2p2'>Umair Ishtiaq!</p>
            </section>

        </div>

    </div>
    <img 
      data-aos="fade-in"             // Try using a different animation effect
      data-aos-anchor-placement="center-bottom"                      
      data-aos-delay="1000"
      data-aos-duration="1000"
      class="my-5 mx-auto d-block" src={require('../assets/line.png')} alt='background'/>
</div>
</>
  );
}

export default About;