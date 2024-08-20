import React from 'react'
import './Main.css'

function Main() {
  return (
    <>
 <main>
      <img class="mainImg" src="src\Photos\mainImage (1).png" alt="main image" />
      <div class="main">
        <img class="onEarImg" src="src\Photos\onEar (1).png" alt="on ear logo" />
        <h1>Beats 3</h1>
        <h4>Overview</h4>
        <p>
          Enjoy award-winning Beats sound with wireless listening freedom and a
          sleek, streamlined design with comfortable padded earphones,
          delivering first-rate playback.
        </p>
        <div class="shopping-bag-section">
          <img src="src\Iocns\shoppingBag (2).png" alt="shopping bag" />
          <p>Add to Bag</p>
          <span>N399K</span>
        </div>
      </div>
    </main>

    </>
  )
}

export default Main