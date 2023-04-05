import React from 'react'
import './Body.css';
function handleScroll() {
    const im1 = document.querySelector('#image1');
    const im2 = document.querySelector('#image2');
    const scrolled = window.scrollY;

    im1.style.marginTop = `${90 - scrolled * 0.3}px`;
    im2.style.marginTop = `${-179 + scrolled * 0.35}px`;


}


window.addEventListener('scroll', handleScroll);
function Body() {
  return (
    <div id='bodybar'>
    <div id='capr'>
      <p>Silicon</p>
      <div>
      <p1>Multipurpose Business/</p1>
      </div>
      <div>
      <p2>Technology Template</p2>
      </div>
      <div id='switcher'>
      <img src='/images/switcher.svg' />
      </div>
    </div>
    <div id='image1'>
      <img src='/images/screens01 (1).png' />
    </div>
    <div id='image2'>
    <img src='/images/screens02.png' />
    </div>
    
    </div>
  )
}

export default Body
