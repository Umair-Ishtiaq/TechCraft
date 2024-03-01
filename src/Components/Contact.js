import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <>
      <div id='contact' className='Section1 container'>
        <h1 id='sec2h1'>Contact us!</h1>

        <div className='row contact'>
          <div className='col-sm-4 '>
            <p>umairishtiaq04@gmail.com</p>
            <p>
            +92 316 8795376
            </p>
            <p>
              <FontAwesomeIcon icon={faInstagram} />
            Tech_Craft
            </p>
          </div>
          <div className='col-sm-5'>
            <img id='sec1img1' src={require('../assets/sec5img.png')} alt='background' height="500" />
          </div>
        </div>
      </div>
      <img class="my-5 mx-auto d-block" src={require('../assets/line.png')} alt='background'/>
    </>
  );
}

export default Contact;
