
export default function App() {
  
const FaqItem =()=>{
    return(
        <div className="faq-item">
             <div className="faq-item-header"> Sample Question  </div>
             <div className="faq-item-body"> 
                 <div className="faq-item-body-content">  
                         Lorem Ipsum is simply dummy text of the printing and typesetting indus publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                     
                 </div>
             </div>
        </div>
       
        
    )
    
}
       
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
