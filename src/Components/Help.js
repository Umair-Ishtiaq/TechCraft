import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Help=()=> {
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7656xql', 
    'template_gn72xih', form.current, 
    'OasNrOtYjeTi2WxDF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
        
      });
      e.target.reset()
  };
  return (
    <>
      <div id='help' className='Section1 container'>
        <h1 id='sec2h1'>How can we help you(●'◡'●)!</h1>
        <div className='Section5 row'>
          <div className='col-sm-6'>
            <form 
                    data-aos="flip-right"             // Try using a different animation effect
                    data-aos-anchor-placement="center-bottom"                      
                    data-aos-delay="500"
                    data-aos-duration="500"
            ref={form}
            onSubmit={sendEmail}>
            <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
              />
              <br/>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
              />
              <br />

              <label htmlFor="selectOption">Select Option:</label>
              <select
                id="selectOption"
                name="selectOption"
                required
              >
                <option value="">Select an option</option>
                <option value="Web Development">Web Development</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="Programming Solution">Programming Solution</option>
                <option value="Graphics & Logo Design">Graphics & Logo Design</option>
                <option value="Microsoft Services">Microsoft Services</option>
                <option value="Photo/Video Editing">Photo/Video Editing</option>
              </select>

              <br />

              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
              <br />

              <button type="submit">Submit</button>
            </form>
          </div>
          <div className='col-sm-1'></div>
          <div 
            data-aos="fade-left"             // Try using a different animation effect
            data-aos-anchor-placement="center-bottom"                      
            data-aos-delay="600"
            data-aos-duration="600"
            className='col-sm-5'>
            <img
              id='sec1img1'
              src={require('../assets/sec5img.png')}
              alt='background'
              height="500"
            />
          </div>
        </div>
      </div>
      <img class="my-5 mx-auto d-block" src={require('../assets/line.png')} alt='background'/>
    </>
  );
}
export default Help;