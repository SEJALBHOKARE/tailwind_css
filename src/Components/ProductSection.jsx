import React from 'react'
import './ProductSection.css'

function ProductSection() {
  return (
    <>
      <section class="product">
      <img class="product-logo" src="src\Iocns\productLogo (1).png" alt="logo" />

      <div class="product-items">
        <div class="product-card">
          <img class="product-img" src="src\Photos\black (1).png" alt="black" />
          <div class="product-info">
            <p>
              Black <br />
              <span>N299K</span>
            </p>

            <div>
              <img src="src\Iocns\shoppingBag (2).png" alt="shopping bag" />
            </div>
          </div>
        </div>

        <div class="product-card">
          <img
            class="product-img"
            src="src\Photos\redBlack (1).png"
            alt="red black"
          />
          <div class="product-info">
            <p>
              Red Black <br />
              <span>N299K</span>
            </p>

            <div>
              <img src="src\Iocns\shoppingBag (2).png" alt="shopping bag" />
            </div>
          </div>
        </div>

        <div class="product-card">
          <img
            class="product-img"
            src="src\Photos\nightBlack (1).png"
            alt="Night Black"
          />
          <div class="product-info">
            <p>
              Night Black <br />
              <span>N299K</span>
            </p>

            <div>
              <img src="src\Iocns\shoppingBag (2).png" alt="shopping bag" />
            </div>
          </div>
        </div>

        <div class="product-card">
          <img class="product-img" src="src\Photos\blue (1).png" alt="blue" />
          <div class="product-info">
            <p>
              Blue <br />
              <span>N299K</span>
            </p>

            <div>
              <img src="src\Iocns\shoppingBag (2).png" alt="shopping bag" />
            </div>
          </div>
        </div>

        
      </div>
    </section>
    
    </>
  )
}

export default ProductSection