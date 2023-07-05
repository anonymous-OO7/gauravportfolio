import React from "react";
import "../detailscard/detailscard.css";

const DetailsCard = (props)=> {


    const src = props.src;

    const title = props.title;
    const about =  props.details != null ? props.details : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaeratdoloribus vitae fugit enim repudiandae" ; 


    return(


       <div class="card" >

        <div class="imgbox">
            <img
            class="card_image"
            src = {src}
            />
        </div>



       <div class="content">
         {/* <h2 style={{color:"beige"}} >{title}</h2> */}
         <p class="description_content" style={{ color:"black" }}>
           {about}
         </p>
       </div>


     </div>
    )
}

export default DetailsCard;