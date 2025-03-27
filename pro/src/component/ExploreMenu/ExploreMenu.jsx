// import React from 'react'
// import './ExploreMenu.css'
// import { menu_list } from '../../assets/assets'

// const ExploreMenu = ({category,setCategory}) => {
//   return (
//     <div className='explore-menu' id='explore-menu'>
//         <h1>Explore our menu</h1>
//         <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, iusto voluptate, facere voluptas rem laudantium minima ratione fugit debitis neque </p>
//          <div className="explore-menu-list">
//             {menu_list.map((item,index)=>{
//                 return(
//                     <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
//                       <img className={category===item.menu_name?"Active":""} src={item.menu_image} alt="" />
//                       <p>{item.menu_name}</p>
//                     </div>
//                 )
//             })}
//          </div>
//          <hr />
//     </div>
//   )
// }

// export default ExploreMenu

import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, iusto
        voluptate, facere voluptas rem laudantium minima ratione fugit debitis
        neque
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory(prev => (prev === item.menu_name ? "All" : item.menu_name))
              }
              key={index}
              className={`explore-menu-list-item ${category === item.menu_name ? "active" : ""}`}
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt={item.menu_name}
              />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
