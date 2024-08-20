import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>

<footer>
      <img class="footer-logo" src="src\Photos\beatsLogo (1).png" alt="logo" />

      <ul>
        <li><a href="#">Products</a></li>
        <li><a href="#">Headphones</a></li>
        <li><a href="#">Earphones</a></li>
        <li><a href="#">Earbuds</a></li>
        <li><a href="#">Accessories</a></li>
      </ul>

      <ul>
        <li><a href="#">Support</a></li>
        <li><a href="#">Product Help</a></li>
        <li><a href="#">Register</a></li>
        <li><a href="#">Updates</a></li>
        <li><a href="#">Provides</a></li>
      </ul>

      <div class="footer-subscription">
        <div>
          <input type="email" placeholder="Email" />
          <div class="subscribe-button">
            <img src="src\Iocns\rightArrow (1).png" alt="rightArrow" />
            <p>Subscribe</p>
          </div>
        </div>

        <div>
          <img src="src\Iocns\facebook (3).png" alt="facebook" />
          <img src="src\Iocns\twitter (3).png" alt="twitter" />
          <img src="src\Iocns\instagram (3).png" alt="instagram" />
          <img src="src\Iocns\linkedin (3).png" alt="linkedin" />
        </div>
      </div>

      <img class="arrow-up" src="src\Iocns\upArrow.png" alt="upArrow" />
    </footer>

    </>
  )
}

export default Footer