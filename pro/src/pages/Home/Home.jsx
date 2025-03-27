import React, { useState } from 'react'
import './Home.css'
import Header from '../../component/Header/Header'
import ExploreMenu from '../../component/ExploreMenu/ExploreMenu'
import Fooddisplay from '../../component/Fooddisplay/Fooddisplay'
import AppDownolod from '../../component/AppDownolod/AppDownolod'


const Home = () => {

    const[category,setCategory] =useState('All')

  return (
    <div>
    <Header/>
    <ExploreMenu category={category} setCategory={setCategory}/>
    <Fooddisplay category={category}/>
    <AppDownolod/>
    </div>
  )
}

export default Home