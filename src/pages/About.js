import React from 'react'
import pic from '../imgs/MuffinAboutUs.jpg'

function About() {
  return (
    <div>
      <div id="aboutPage" className="text-center"> 
        <div>
          <h1>ABOUT US</h1>
          <div>
            <img alt="candle muffin" src={ pic }></img>
          </div>
        </div>

        <div className="about-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Morbi pulvinar, odio et posuere elementum, erat enim blandit ante, quis hendrerit lorem eros sed quam.
        Phasellus mollis et dolor a dapibus. Mauris aliquet lacus neque, scelerisque ultrices dolor vestibulum eget.
        Aliquam suscipit maximus semper. Sed porta gravida diam, quis imperdiet quam gravida non. Etiam ligula orci,
        cursus id faucibus at, scelerisque sit amet elit. Nullam bibendum sodales diam vitae cursus.

        Donec a cursus enim. Sed ante risus, finibus quis finibus id, ultrices sit amet risus. Ut sit amet turpis posuere,
        commodo felis non, egestas leo. Sed a vehicula diam, vitae sollicitudin nunc. Aenean finibus vulputate luctus.
        Curabitur pretium tellus sit amet dictum mattis. Integer at porttitor est, eget ultricies tellus. Aliquam commodo tempus orci,
        et placerat nisi posuere gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Ut feugiat turpis sed nunc commodo ullamcorper. Proin elit nibh, dictum sed volutpat id, imperdiet eget leo.
        Integer elementum purus odio, ornare condimentum eros tempor at. In fringilla, elit molestie fermentum placerat,
        lacus nisl interdum purus, in pellentesque nibh nisi sit amet purus. Fusce finibus semper viverra.
        Suspendisse lacinia purus at risus porttitor dictum ut sit amet dui.
        </div>
      </div>
    </div>
  )
}
export default About