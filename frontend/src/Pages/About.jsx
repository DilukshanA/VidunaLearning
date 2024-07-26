import React from 'react'
import './CSS/About.css'
import vision_icon from '../Components/Assets/vision_icon.png'
import mission_icon from '../Components/Assets/mission_icon.png'

const About = () => {
  return (
    <div onClick={window.scrollTo(0,0)} className='about'>

      <div className="about-left">
        <div>
        <h1>So,</h1>
        <h1 className='about-left-line-2'>Here <h1 className='about-left-line-2-color'>We're</h1> </h1>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur. Congue vulputate mauris ut turpis tortor. Est sed posuere facilisi ullamcorper sit risus neque tortor vestibulum. Vel magna orci in nisl. Malesuada nisl placerat tincidunt arcu. Tortor risus quisq</p>
      </div>

      <div className="about-right">

        <div className="about-vision">

          <div className="about-vision-left">
            <img src={vision_icon} alt=''/>
          </div>

          <div className="about-vision-right">
            <h1>Our Vision</h1>
            <p>To create a society with educated and intelligent people enriched with kindness and empathy.</p>

          </div>

        </div>

        <div className="about-mission">

          <div className="about-mission-left">
          <img src={mission_icon} alt=''/>

          </div>

          <div className="about-mission-right">
            <h1>Our Mission</h1>
            <p>To guide the children of the nation to succeed in life through education by nurturing them with knowledge and good attitudes.</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default About