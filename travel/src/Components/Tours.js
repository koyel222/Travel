import React from 'react'

import Box from './Box.js'

 const Tours = ({tours,removetours}) => {
  return (
    <div className='container'>
        <div>
            <h2 className='title'>Plan With Koyel</h2>

        </div>
        <div className='cards'>
            {
              tours.map((tours)=>{
                return <Box {...tours} removetours={removetours}></Box>
              })

            }
        </div>
    </div>
  )
}
export default Tours