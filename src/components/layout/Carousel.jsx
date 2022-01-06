import React from 'react'

function Carousel() {
  return (
    <div class="w-full carousel">
      <div id="slide1" class="relative w-full pt-20 carousel-item">
        <img src="https://picsum.photos/id/500/800/300" class="w-full" alt='Sample 1'/> 
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="/components/carousel#slide4" class="btn btn-circle">❮</a> 
          <a href="/components/carousel#slide2" class="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide2" class="relative w-full pt-20 carousel-item">
        <img src="https://picsum.photos/id/501/800/300" class="w-full" alt='Sample 2'/> 
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="/components/carousel#slide1" class="btn btn-circle">❮</a> 
          <a href="/components/carousel#slide3" class="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide3" class="relative w-full pt-20 carousel-item">
        <img src="https://picsum.photos/id/502/800/300" class="w-full" alt='Sample 3'/> 
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="/components/carousel#slide2" class="btn btn-circle">❮</a> 
          <a href="/components/carousel#slide4" class="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide4" class="relative w-full pt-20 carousel-item">
        <img src="https://picsum.photos/id/503/800/300" class="w-full" alt='Sample 4'/> 
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="/components/carousel#slide3" class="btn btn-circle">❮</a> 
          <a href="/components/carousel#slide1" class="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  )
}

export default Carousel
