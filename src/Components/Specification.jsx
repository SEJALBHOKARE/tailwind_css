import React from 'react'
import './Specification.css'

function Specification() {
  return (
    <>
    <section class="specification">
      <img
        class="specification-logo"
        src="src\Iocns\specsLogo (3).png"
        alt="specs logo"
      />

      <div class="specification-list">
        <div class="specification-list-items">
          <div>
            <img src="src\Iocns\bluetooth (1).png" alt="bluetooth" />
            <p>Connection</p>
            <p>Bluetooth v5.2</p>
          </div>

          <div>
            <img src="src\Iocns\battery (2) copy.png" alt="battery" />
            <p>Battery</p>
            <p>Duration 40h</p>
          </div>

          <div>
            <img src="src\Iocns\charger (1).png" alt="charger" />
            <p>Load</p>
            <p>Fast Charge 4.2-AAC</p>
          </div>

          <div>
            <img src="src\Iocns\mic (1).png" alt="mic" />
            <p>Microphone</p>
            <p>Supports Apple Siri and Google</p>
          </div>
        </div>

        <img
          src="src\Photos\specsImage (1).png"
          alt="specification headphone image"
        />
      </div>
    </section>

    
    
    </>
  )
}

export default Specification