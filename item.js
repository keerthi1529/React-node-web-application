import React, { useState } from 'react';
import './Item.css';
function Item(props){
    const [isClicked, setIsClicked]=useState(false)
   return(
    <div className='mains-div'>
       <div className='main-inner'>  
          <div className='companyname-div'>
              <div className='headn'> Company Name</div>
                  {props.companyname}
          </div>
          <div>
             <div className='headn'>  Name </div> 
             {props.name}
          </div>
          <div>
             <div className='headn'>  City </div> 
             {props.cityname}
           </div>
          <div>
             <div className='headn'>  Website </div> 
              {props.website}
          </div>
          <button className='but' onClick={()=>setIsClicked(!isClicked)}>
             View details
          </button>
       </div>
         {isClicked && 
        <div className="details-main">
            <div className='user-div'>
               <div>
                  <div className='headn'>  Username </div> 
                  {props.username}
               </div>
               <div>
                  <div className='headn'>  Email </div> 
                  {props.email}
               </div>
               <div>
                  <div className='headn'>  Phone </div> 
                  {props.phone}
               </div>
               <div>
                  <div className='headn'>  Address </div> 
                  <div>
                     <div className='add'>Street:{props.street} </div> 
                     <div className='add'>Suite:{props.suite} </div> 
                     <div className='add'>Zipcode:{props.zipcode} </div> 
                  </div>
               </div>
               <div>
                  <div className='headn'>  Geo-Location </div> 
                  <div className='add'>Latitude:{props.geo.lat} </div> 
                  <div className='add'>Longitude:{props.geo.lng} </div> 
               </div>
          </div>
          <div className='company-div'>
              <div className='headn'> Company:  </div>
              <div className='comp-inner'>
                 <div >
                    <div className='headn'>  CatchPhrase</div> 
                      {props.catchPhrase}
                </div>
                <div>
                   <div className='headn'>BS</div> 
                     {props.bs}
                </div>
              </div> 
           </div> 
        </div>}
    </div>
   )
}
export default Item;