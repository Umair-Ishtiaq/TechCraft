import 'bootstrap/dist/css/bootstrap.min.css';

function Vission() {
  return (
<>
<div className='container'>
    <h1 id='sec2h1'
      data-aos="flip-up"             // Try using a different animation effect
      data-aos-duration="550">
        Vision and Mission Statments
    </h1>
    <div className='row Section3'>
        <div 
          data-aos="flip-right"             // Try using a different animation effect
          data-aos-delay="600"
          data-aos-duration="600"
        className='col-sm-5'>
        <h1 id='sec3h1'>Our Vision</h1>
            <p id='sec3p1'>
            We dream of a future where technology makes everything better. 
            We want to be the go-to team for making IT simple and powerful. 
            Our vision is to help businesses and individuals succeed by providing 
            customized services that go beyond expectations.
            We're always learning and keeping things super secure to stay on top of the latest tech trends.
            </p>
        </div>
        <div className='col-sm-1'></div>
        <div
          data-aos="flip-left"             // Try using a different animation effect
          data-aos-duration="600"        
          className='col-sm-5'>
            <h1 id='sec3h1'>Our Mission</h1>
            <p id='sec3p1'>
            We're on a mission to make tech easy and tailored just for you. 
            We want to empower businesses and people by providing simple, user-friendly 
            IT solutions that truly work. Our commitment is to keep things straightforward, 
            secure, and always up-to-date. Join us in our mission to bring hassle-free 
            and effective technology into your life.
            </p>
        </div>

    </div>
    <img 
      data-aos="fade-in"             // Try using a different animation effect
      data-aos-duration="800"
    class="my-5 mx-auto d-block" src={require('../assets/line.png')} alt='background'/>
</div>
</>
  );
}

export default Vission;