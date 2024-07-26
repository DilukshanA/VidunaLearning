import React from 'react'
import './CSS/Contact.css'
import contact_image from '../Components/Assets/contact_image.svg'
import whatsapp_icon from '../Components/Assets/whatsapp_icon.png'
import telegram_icon from '../Components/Assets/telegram_icon.png'

const Contact = () => {
  return (
    <div onClick={window.scrollTo(0,0)} className='contact'>
      <div className="contact-top">

        <h1>Please send us a message over here to contact us for more information</h1>
        <p>Follow our social media handles to stay up to date with the latest news and updates</p>
        <hr/>

      </div>
      <div className="contact-bottom">
        <div className="contact-bottom-left">
          <h1>Office</h1>
          <p>Viduna Institute of Higher Education
          214, koggala Kade Junction, Galle</p>
          <span className='contact-bottom-left-mail'>support@vidunalearing.lk</span>
          <span>074 867 32 56</span>
          <div className="contact-bottom-left-social-icon">
            <img className='contact-bottom-left-whatsapp' src={whatsapp_icon} alt=''/>
            <img className='contact-bottom-left-telegram' src={telegram_icon} alt=''/>

          </div>
        </div>

        <div className="contact-bottom-right">
          <img src={contact_image} alt=''/>

        </div>

      </div>
    </div>
  )
}

export default Contact