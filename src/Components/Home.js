import React,{useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
    useEffect(() => {
        AOS.init();
      }, []);  
return (
<>
<div id="home" className='Section1 container'>
    <div className='row'>
        <div className='col-sm-6'
            data-aos="fade-right"
            data-aos-anchor-placement="center-bottom"                      
            data-aos-delay="500"
            data-aos-duration="500">
            <h1 id='sec1h1'>
                Welcome To,
                TechCraft
            </h1>
            <p id='sec1p1'>
                Crafting Tomorrow's Technology Today
            </p>

            

            <a href='#help'><button type="button" class="button">
  <div class="button-top">Contact us</div>
  <div class="button-bottom"></div>
  <div class="button-base"></div>
</button></a>
        </div>
        <div className='col-sm-6'
                      data-aos="fade-left"             // Try using a different animation effect
                      data-aos-delay="800"
                      data-aos-duration="800">
        
        <img id='sec1img1' src={require('../assets/bg1.png')} alt='background'/>

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
