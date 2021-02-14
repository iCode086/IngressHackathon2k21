import React from 'react'
  
const Button = ({text,id}) => {
const onClick = (e) =>{
   alert("Application Rejected "+JSON.stringify({id}))
}
const add =0;
    return (
        <button  onClick ={onClick} style={{backgroundColor: "red"}} className="btn-primary btn-block" value="reject"> <b>{text}</b></button>
           
       
    )
}
export default Button;