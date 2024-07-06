
import {useState} from "react";

const  FaqAccordion=({data})=>{

    const FaqItem =( {question, answer})=>{
        const [show,setShow ]=useState(false)
       
        const toggleShow =()=>{
        setShow(!show)
        }
    
    return(
        <div className={`faq-item ${show ? "active" : ""}`}>
             <div className="faq-item-header" onClick={toggleShow}> {question} </div>
             <div className="faq-item-body"> 
                 <div className="faq-item-body-content">  
                     {answer}
                 </div>
             </div>
        </div>
    )
    }

    return(
        <>
            <div className="faq-accordian">
              <h2> FAQs</h2>
                {data.map((item)=>(
                    <FaqItem  key={item.id} question={item.question} answer={item.answer} />))}
          </div>
        
        </>
    )
}

const data=[
        {id:1, question:"What is react", answer:"React is a  front-end JavaScript library for building user interfaces or UI componrents"},
        {id:2, question:"What are the benifits of React", answer:"Some of the benefits of React are:it is fasr,scalable, modular, easy to debug, and supports server-side rendering."},
        {id:3, question:"What are the main concept of React ,?", answer:"Some of the main concepts  of react are: components, props, state, hooks, lifecycle method, and  JSX "},
    ]
    
export default function App() {
  
  return (
      <>
          <div className="App">
              < FaqAccordion  data={data}/>
          </div>
     </>
  )
    
}
    
       


