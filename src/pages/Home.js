import React, { useState } from 'react'
import { Fragment } from 'react'
import './home.scss'
import dillon from '../pics/image.png'
import dancer from '../pics/dancer.gif'
import { ProjectDisplay } from '../components/ProjectDisplay'
import { Box } from '@mui/system'
import { Button, Modal } from '@mui/material'
import MailIcon from '@material-ui/icons/Mail';
import CreateIcon from '@material-ui/icons/Create';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';


const style = {
    position: 'absolute',
    borderRadius: '50%',
    
  };

const actions = [
    { icon: <CreateIcon />, name: 'Email' },
  ];
  
export const Home = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
      <Fragment >
          <div className='mobile-contact'> 

        <SpeedDial
          ariaLabel="SpeedDial openIcon example"
          icon={<MailIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={window.open('mailto:dillonleehowell@gmail.com?subject=Hello Dillon&body=Please except my offer of 2 Million Dollars'),
            console.log('hello')}
            />
          ))}
        </SpeedDial>

      </div>
 

               <Modal open={open} onClose={handleClose}>
        <Box sx={style} className='dancingBox'>
            <img src={dancer} style={{ borderRadius: '50%'}} className='dancer' alt='dancingRat'/>
        </Box>
      </Modal>

        <div className='contact-me'>
            <Button variant='outlined' size='large' startIcon={<MailIcon/>}>
                Contact Me
            </Button>
        </div>
                    <div className='grid-container-1'>
                            <div>
                                <h1 className="neon-button" onClick={handleOpen} >Dillon Howell</h1>         
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


