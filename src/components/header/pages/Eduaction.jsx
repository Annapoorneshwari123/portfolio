import React from 'react'

function Eduaction() {
    const educationData=[
        {
            stream:'Bachelor of Computer Application',
            college:'Ramanashree Academy of Management',
            location:'Banglore',
            cgpa:81,
            year:'2021-2024'
        },
        {
            stream:'PUC(Commerce)',
            college:'Sarada Vilas PU College',
            location:'Mysore',
            cgpa:85,
            year:'2019-2020'
        }
    ]
   
    
  return (
    <div className='m-3 p-3'>
          <h1 className='main-heading'>EDUCATION</h1>
       <div className='d-flex align-items-center gap-5 p-5 text-white ' style={{width:'100%'}}>
       {
            educationData.map((item,index)=>(
              
                 <div key={index} className='p-4 shadow border mb-3 rounded' style={{backgroundColor:'#c18feb',width:'100%'}}>
          <h2 className=''>{item.stream}</h2>
          <h5>{item.college}</h5>
          <button className="btn cardbtn">{item.location}</button>
          <p><b>percent:</b> {item.cgpa}%</p>
          <p><b>Year:</b> {item.year}</p>
        </div>
            ))
         }
       </div>
    </div>
  )
}

export default Eduaction