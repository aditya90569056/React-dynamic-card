import React from 'react'
import {BookmarkIcon} from 'lucide-react';
function cards(info) {
  return (
      
      <div className='card'>
      <div>
          <div className='top'>
           <img src={info.logo} alt='avatar' /> 
          <button>Save <BookmarkIcon size={12}/></button>
        </div>
      
      <div className='center'>
<h3>{info.name}<span>{info.date}</span></h3>
<h2>{info.salary}</h2>
<div className='tag'>
  <h4>Full time</h4>
  <h4>{info.post}</h4>
</div>
      </div>
      </div>
      <div className='bottom'>
      
       
          <h3>{info.perhour}</h3>
          <p>{info.location}</p>
       
        <button>Apply Now</button>
      
      </div>
    </div>
 
    
   
  )
}

export default cards