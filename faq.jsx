
import {useState} from "react";
export default function App() {
  
const FaqItem =()=>{
    const [show,setShow ]=useState(false)
    const toggleShow =()=>{
        setShow(!show)
    } 
    return(
        <div className={`faq-item ${show ? "active" : ""}`}>
             <div className="faq-item-header" onClick={toggleShow}> Sample Question  </div>
             <div className="faq-item-body"> 
                 <div className="faq-item-body-content">  
                         Lorem Ipsurtm is simply dummy text of the printing and typesetting indus publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                     
                 </div>
             </div>
        </div>
       
        
    )
    
}
    const data=[
        {id:1, question:"What is react", answer:"React is a  front-end JavaScript library for building user interfaces or UI componrents"},
        {id:2, question:"What are the benifits of React", answer:"Some of the benefits of React are:it is fasr,scalable, modular, easy to debug, and supports server-side rendering."},
        {id:3, question:"What are the main concept of React ,?", answer:"Some of the main concepts  of react are: components, props, state, hooks, lifecycle method, and  JSX "},
    ]
       
  return (
      <>
          <div className="faq-accordian">
              <h2> FAQs</h2>
              < FaqItem />
              < FaqItem />
              < FaqItem />
              < FaqItem />
          </div>
     </>
  )
}
