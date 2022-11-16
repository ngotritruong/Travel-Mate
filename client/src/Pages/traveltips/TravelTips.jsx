import './traveltips.css'
import React from 'react'
import Tips from '../../components/tips/Tips'
import Footer from '../../components/footer/Footer'
import EmailFeedBack from '../../components/emailFeedback/EmailFeedBack'
import TipHome from '../../components/tipHome/TipHome'
function TravelTips() {
  
  return (
    <div className='travelTipsHome'>     
        <TipHome />
        <div className="travelTipsContainer">
          <div className="travelTipsMain">   
              <Tips />           
          </div>
        </div>
        <div className="homContainer">
        <EmailFeedBack/>
        <Footer />
      </div>
    </div>
  )
}

export default TravelTips