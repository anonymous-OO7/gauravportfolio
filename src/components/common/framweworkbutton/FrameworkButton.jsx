import React from "react";
import '../framweworkbutton/frameworkbuttoncss.css'

const FrameworkButton = (props) => {

    console.log(props)


    const name = props.frameworkname ? props.frameworkname :"framework"

    return(

        <div className="framework_button">
         <text className="framework_text">{name}</text>
        
      </div>
    )
}


export default FrameworkButton