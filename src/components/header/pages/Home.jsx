import React, { useEffect, useState } from 'react'
import { Header, Section } from '../Header'


function Home() {
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

const fullname='Annnapoorneshwari M'
const [name,setname]=useState('');
const [isDeleting, setIsDeleting] = useState(false);
const [index, setIndex] = useState(0);

useEffect(() => {
  const speed = isDeleting ? 100 : 150; // Deleting is faster
  const interval = setInterval(() => {
    if (!isDeleting) {
      setname(fullname.substring(0, index + 1));
      setIndex((prev) => prev + 1);
      if (index + 1 === fullname.length) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      }
    } else {
      setname(fullname.substring(0, index - 1));
      setIndex((prev) => prev - 1);
      if (index - 1 === 0) {
        setIsDeleting(false);
      }
    }
  }, speed);

  return () => clearInterval(interval);
}, [index, isDeleting]);


  return (
    
    <>
    
    <main>
      <Section id="home" className='mt-0 p-0'>
      <div className='d-flex align-items-center justify-content-around home'>
      <div className="left">
        <h1 className='heading'>HELLO,<br /><span>
        I'm  {name}
        </span>
        </h1>
        <p className='subtitle'>Frontend Developer</p>
        <button className="btn btn">Contact</button>
       </div>
       <div className="right">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/011/153/368/small_2x/3d-website-developer-working-on-laptop-illustration-png.png" alt="profile" width='700px'/>
       </div>
      </div>
      
    </Section>

    <Section id="about" className='m-3 p-3'>
        <h1 className='main-heading '>ABOUT ME</h1>
        
        <div className='p-5'>
        <p className='para'>I am a Computer Science Graduate Student at Banglore University. Always strive to bring 100% to the work I do. I have Learned and worked on technologies like HTML5, CSS,JavaScript, Reactjs,MySql during my bachelor's. I am passionate about developing  applications that solve real-world problems impacting millions of users.</p>
        <ul>
        <li><b>Languages:</b> JavaScript, C++, HTML/CSS</li>
        <li><b>Frameworks:</b> Bootstrap, MUI, Reactjs</li>
        </ul>
        <p className='para'>Looking for an opportunity to work in a challenging position combining my skills in Software Engineering, which provides professional development, interesting experiences and personal growth.</p>
        </div>
        <hr />
    </Section>

    <Section id="education" className='m-3 p-3'>
          <h1 className='main-heading'>EDUCATION</h1>
       <div className='d-flex align-items-center gap-5 p-5 text-white ' style={{width:'100%'}}>
       {
            educationData.map((item,index)=>(
              
                 <div key={index} className='p-4 shadow border mb-3 ' style={{backgroundColor:'#37a690',width:'100%',borderRadius:'20px'}}>
          <h2 className=''>{item.stream}</h2>
          <h5>{item.college}</h5>
          <button className="btn cardbtn">{item.location}</button>
          <p><b>percent:</b> {item.cgpa}%</p>
          <p><b>Year:</b> {item.year}</p>
        </div>
            ))
         }
       </div>
       <hr />

    </Section>

    <Section id="project" className='m-3 p-3'>
        <h1 className='main-heading '>PROJECTS</h1>
        
        <div className='p-5'>
       
        </div>
        <hr />
    </Section>
    </main>
    </>
  )
}

export default Home