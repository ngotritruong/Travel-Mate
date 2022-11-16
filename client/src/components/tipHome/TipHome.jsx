import React from 'react'
import './tipHome.css'
import Traveltipimg from '../../Image/traveltipimg.jpg'
function TipHome() {
  return (
    <div className="headerTip">
      <div className="headerTipTitle">
        <span className="headerTipTitleMg">Travel & Advices</span>
        <span className="headerTipTitleLg">TIPS</span>
      </div>
      <img src={Traveltipimg} alt="" className="headerTipImg" />
    </div>
  )
}

export default TipHome
