import React from 'react'
import './AppDownolod.css'
import { assets } from '../../assets/assets'

const AppDownolod = () => {
  return (
    <div className='app-downoload' id='app-downoload'>
        <p>For Better Experience Download <br />Tomato App</p>
        <div className="app-downoload-platfour">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownolod