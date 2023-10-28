import {useEffect} from 'react'
import Skill from './skill';

const Skills = () => {



    useEffect(()=> {
        const sr =  ScrollReveal({
          origin: 'center',
          distance: '0px',
          duration:1000,
          reset:true,
        });
        sr.reveal('.zoom-in2', {
            scale:0.5,
            opacity:0.5
        });
      },[])
    

    
  return (
    <div className='relative flex flex-col items-center justify-center pb-[5rem]'>
        {/* <div style={bg} className='title flex w-full justify-center mb-[5rem]'>
            <h2  className='text-3xl font-black bg-white w-fit px-10 '>Skills</h2>
        </div> */}
        
        <div className='bg-[#F7F7F8] absolute w-full h-1/2 bottom-1/2 translate-y-1/3'></div>

        
        <div   className='z-40 h-auto bg-background-gray  w-[88%] rounded-lg shadow-2xl p-2 ' >
            

            <div className=' bg-white rounded-md border-[3px] border-opacity-70 border-[#FFBF00] w-full h-fit flex md:flex-row flex-col  flex-wrap px-[6%] py-[50px]  '>

                <div className=' w-full'>
                
                    <div className=' relative  h-fit w-full text-center  '>
                            <span className='z-10  absolute top-1/2  left-1/2 -translate-y-1/2 -translate-x-1/2 text-3xl font-extrabold font-Comic text-[#E8E8E8]'>Skills</span>
                            <h2 className='z-20 relative font-semibold text-[34px]'>My Skills</h2>

                    </div>
                    <p className=' text-black mb-8 mt-5 w-full text-center '>Here is my skills to represent my Expertise</p>

                </div>

                <div className='w-full  h- md:gap-[7%] flex gap-7  flex-col md:grid md:grid-cols-2 p-5 '>

                    <Skill title={"HTML"} value={100} />
                    <Skill title={"Css"} value={80}/>
                    <Skill title={"JS"} value={80}/>
                    <Skill title={"React"} value={60}/>
                    <Skill title={"Express.js"} value={20}/>

    
                </div>
            
            </div>

        </div>
    </div>
  )
}

export default Skills