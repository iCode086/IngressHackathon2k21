import React from 'react'
  
const Button2 = ({text,id}) => {
const onClick = (e) =>{
   alert("Application Accepted"+JSON.stringify({id}))
}

    return (
        <button  onClick ={onClick} style={{backgroundColor: "green"}} className="btn-primary btn-block" value="reject"> <b>{text}</b></button>
            
       
    )
}
export default Button2;