import React, { useState } from 'react'

 const Box = ({id,name,info,price,image,removetours}) => {
    const[readmore,setreadmore]=useState(false);
    const description=readmore?(info):(`${info.substring(0,200)}...`)

    function clickhandler(){
      setreadmore(!readmore)
    }
    
  return (
    <div className='card'>
        <img src={image} alt='image' className='image'></img>
        <div className='tour-info'>
        <div className='tour-details'>
            <h2 className='tour-price'>{price}</h2>
            <h2 className='tour-name'>{name}</h2>

        </div>
        <div className='description'>
            <p>{description}</p>
            <span onClick={clickhandler} className='read-more'>{readmore? "showless":"Readmore"}</span>
        </div>
        </div>
        <button onClick={()=>{removetours(id)}} className='btn-red'>Not Interested</button>
    </div>

  )
}
export default Box