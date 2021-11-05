import React from 'react'
import { Fragment } from 'react'
import './home.scss'
import dillon from '../pics/image.png'
import { ProjectDisplay } from '../components/ProjectDisplay'


export const Home = () => {

    return(
      <Fragment >
                    <div className='grid-container-1'>
                            <div>
                                <h1 className="neon-button" >Dillon Howell</h1>         
                            </div>      
                            <div >
                                <img src={dillon} className='dillon-pic'  alt='me'/>
                            </div>
                    </div> 



            <div className='grid-container-2'>
               <div>
                    <p className="neon-header">Skill Set</p>

                    <div className='grid-container-3'>
                        <div>
                            <p className="neon-text" style={{color:'rgb(235, 210, 52)'}}>JavaScript</p>
                            <p className="neon-text" style={{color:'rgb(92, 244, 255)'}}>React</p>    
                            <p className="neon-text" style={{color:'rgb(5, 143, 255)'}}>Python</p>    
                            <p className="neon-text" style={{color:'rgb(255, 134, 5)'}}>Java</p>    
                            <p className="neon-text" style={{color:'rgb(82, 160, 255)'}}>CSS</p>    
                            <p className="neon-text" style={{color:'rgb(82, 197, 255)'}}>C</p>    
                            <p className="neon-text" style={{color:'rgb(82, 197, 255)'}}>C++</p>    
                            <p className="neon-text" style={{color:'rgb(255, 166, 82)'}}>AWS</p>    
                        </div>
                        <div>
                            <p className="neon-text" style={{color:'white'}}>Proficient</p>    
                            <p className="neon-text" style={{color:'white'}}>Proficient</p>    
                            <p className="neon-text" style={{color:'white'}}>Proficient</p>                              
                            <p className="neon-text" style={{color:'white'}}>Intermediate</p>                              
                            <p className="neon-text" style={{color:'white'}}>Intermediate</p>                              
                            <p className="neon-text" style={{color:'white'}}>Intermediate</p>                              
                            <p className="neon-text" style={{color:'white'}}>Intermediate</p>                              
                            <p className="neon-text" style={{color:'white'}}>Intermediate</p>                              
                        </div>
                        
                    </div>
           
                </div>
                <div>
                    <p className="neon-header">Projects</p>      
                    <div className='project-display'>          
                    <ProjectDisplay  />                  
                    </div>             
                </div>

            </div>
      </Fragment>
    )
}


