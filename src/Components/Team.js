import 'bootstrap/dist/css/bootstrap.min.css';
function Team() {
  return (
<>
<div id='team' className='container'>
    <h1 
    data-aos="flip-up"             // Try using a different animation effect
    data-aos-duration="400"
    id='sec2h1' >Our Team</h1>
    <p id='sec4p1'>
    Our devoted team of IT professionals is committed to provide innovative solutions, 
    ensuring the smooth operation and technological advancement of your business.
    </p>
    <div className='row Section4'>
        <div
        data-aos="fade-right"             // Try using a different animation effect
        data-aos-duration="500"
        className='col-sm-3'>
            
            <div class="card">
        <div class="card-info">
        <img class="card-avatar" src={require('../assets/umair.jpg')} alt='background'/>
        <h2 class="card-title">Umair Ishtiaq</h2>
        <div class="card-subtitle">Web and mobile app developer</div>
        </div>
        <ul class="card-social">
        <li class="card-social__item"> 
        <a href="https://www.facebook.com/umair.raja.7946281/" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z"></path>
      </svg>
      </a>
      </li>
      <li class="card-social__item">
      <a href="https://www.instagram.com/umair__raja_/" target="_blank" rel="noopener noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4.32 4.32 0 0 1 12 15.69 4.32 4.32 0 0 1 7.69 11.37M17.5 6.5H17c-1.1 0-2.2.4-3 1L7 11"/>
    </svg>
    </a>
    </li>
    <li class="card-social__item">
    <a href="https://www.linkedin.com/in/umair-ishtiaq/" target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"></path>
      </svg>
      </a>
    </li>
  </ul>
</div>


<br/>

<div class="card">
        <div class="card-info">
        <img class="card-avatar" src={require('../assets/amna.jpg')} alt='background'/>
        <h2 class="card-title">Amna Sumbal</h2>
        <div class="card-subtitle">Computer scientist and ML expert</div>
        </div>
        <ul class="card-social">
        <li class="card-social__item"> 
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z"></path>
      </svg>
      </a>
      </li>
      <li class="card-social__item">
      <a href="https://www.instagram.com/sumbalamna/" target="_blank" rel="noopener noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4.32 4.32 0 0 1 12 15.69 4.32 4.32 0 0 1 7.69 11.37M17.5 6.5H17c-1.1 0-2.2.4-3 1L7 11"/>
    </svg>
    </a>
    </li>
    <li class="card-social__item">
    <a href="https://www.linkedin.com/in/amna-sumbal/" target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"></path>
      </svg>
      </a>
    </li>
  </ul>
</div>


        </div> 
        <div className='col-sm-1'></div>
        <div 
        data-aos="fade-right"             // Try using a different animation effect
        data-aos-duration="800"
        
        className='col-sm-3'>
<div class="card">
        <div class="card-info">
        <img class="card-avatar" src={require('../assets/arham.jpg')} alt='background'/>
        <h2 class="card-title">Arham Khan</h2>
        <div class="card-subtitle">Computer scientist and Editor</div>
        </div>
        <ul class="card-social">
        <li class="card-social__item"> 
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z"></path>
      </svg>
      </a>
      </li>
      <li class="card-social__item">
      <a href="https://www.instagram.com/http.arham/" target="_blank" rel="noopener noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4.32 4.32 0 0 1 12 15.69 4.32 4.32 0 0 1 7.69 11.37M17.5 6.5H17c-1.1 0-2.2.4-3 1L7 11"/>
    </svg>
    </a>
    </li>
    <li class="card-social__item">
    <a href="https://www.linkedin.com/in/arham-khan-846424266/" target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"></path>
      </svg>
      </a>
    </li>
  </ul>
</div>



<br/>


<div class="card">
        <div class="card-info">
        <img class="card-avatar" src={require('../assets/sana.jpg')} alt='background'/>
        <h2 class="card-title">Sana Shaheen</h2>
        <div class="card-subtitle">Computer scientist and ML expert</div>
        </div>
        <ul class="card-social">
        <li class="card-social__item"> 
        <a href="https://www.facebook.com/sana2413" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z"></path>
      </svg>
      </a>
      </li>
      <li class="card-social__item">
      <a href="https://www.instagram.com/sana24__8/" target="_blank" rel="noopener noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4.32 4.32 0 0 1 12 15.69 4.32 4.32 0 0 1 7.69 11.37M17.5 6.5H17c-1.1 0-2.2.4-3 1L7 11"/>
    </svg>
    </a>
    </li>
    <li class="card-social__item">
    <a href="https://www.linkedin.com/in/sana-shaheen?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"></path>
      </svg>
      </a>
    </li>
  </ul>
</div>

        </div>
        <div className='col-sm-1'></div>
        <div 
    data-aos="fade-right"             // Try using a different animation effect
    data-aos-duration="1100"
        
        className='col-sm-3'>
<div class="card">
        <div class="card-info">
        <img class="card-avatar" src={require('../assets/raffay.jpg')} alt='background'/>
        <h2 class="card-title">Abdul Raffay</h2>
        <div class="card-subtitle">Programmer and web developer</div>
        </div>
        <ul class="card-social">
        <li class="card-social__item"> 
        <a href="https://www.facebook.com/Raffay14" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z"></path>
      </svg>
      </a>
      </li>
      <li class="card-social__item">
      <a href="https://www.instagram.com/abd_raffay/" target="_blank" rel="noopener noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4.32 4.32 0 0 1 12 15.69 4.32 4.32 0 0 1 7.69 11.37M17.5 6.5H17c-1.1 0-2.2.4-3 1L7 11"/>
    </svg>
    </a>
    </li>
    <li class="card-social__item">
    <a href="https://www.linkedin.com/in/abd-raffay/" target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"></path>
      </svg>
      </a>
    </li>
  </ul>
</div>



<br/>


<div class="card">
        <div class="card-info">
        <img class="card-avatar" src={require('../assets/Iqra.jpg')} alt='background'/>
        <h2 class="card-title">Iqra Ahmad</h2>
        <div class="card-subtitle">Microsft expert and designer</div>
        </div>
        <ul class="card-social">
        <li class="card-social__item"> 
        <a href="https://www.facebook.com/profile.php?id=100079444471606" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z"></path>
      </svg>
      </a>
      </li>
      <li class="card-social__item">
      <a href="https://www.instagram.com/iqrainsights_/" target="_blank" rel="noopener noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4.32 4.32 0 0 1 12 15.69 4.32 4.32 0 0 1 7.69 11.37M17.5 6.5H17c-1.1 0-2.2.4-3 1L7 11"/>
    </svg>
    </a>
    </li>
    <li class="card-social__item">
    <a href="https://www.linkedin.com/in/iqra-ahmad-hashmi-29277823b/" target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"></path>
      </svg>
      </a>
    </li>
  </ul>
</div>
        </div>
    </div>
    <p id='sec4p1'>
        For any type of IT services feel free to contact us.
    </p>

    <a className="nav-link" href="#help">
    <button id='sec4btn1' className='btn btn-primary' type='button'>
        How can we help you
    </button>

                </a>

    <img 
    data-aos="fade-in"             // Try using a different animation effect
    data-aos-duration="1200"
    class="my-5 mx-auto d-block" src={require('../assets/line.png')} alt='background'/>
</div>

</>
  );
}
export default Team;