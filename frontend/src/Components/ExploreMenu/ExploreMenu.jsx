import React, { useEffect, useRef } from 'react'
import "./ExploreMenu.css"
import {menu_list} from "../../assets/assets"

const ExploreMenu = ({category,setCategory}) => {

  const menuRef=useRef();

const handleWheel=(event)=>{
  event.preventDefault();
  menuRef.current.scrollLeft+=event.deltaY
}

useEffect(()=>{
  menuRef.current.addEventListener("wheel",handleWheel);
},[])

  return (
    <div className='explore-menu' id="explore-menu">
        <h1>Explore your Cravings</h1>
        <p className='explore-menu-text'>lorem impsuConsequat nostrud culpa amet laboris fugiat est eiusmod excepteur aliqua aliquip. Ut voluptate cillum in magna cillum sint cupidatat enim in eiusmod tempor. Quis sunt in et esse aute mollit magna ea eiusmod esse ipsum.</p>
        <div className='explore-menu-list' ref={menuRef}>
            {menu_list.map((item,index)=>{
                return(
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=""/>
                            <p>{item.menu_name}</p>
                        </div>
                )
            })}
        </div>
        <hr/>
    </div>
    
  )
}

export default ExploreMenu