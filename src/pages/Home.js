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
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import "firebase/firestore";
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { collection, addDoc } from "firebase/firestore"; 

const app = initializeApp({
  apiKey: "AIzaSyDMgozCsU7O90DeS5C45Bnba3zWTrAQioM",
  authDomain: "dillonhowellcom.firebaseapp.com",
  databaseURL: "https://dillonhowellcom-default-rtdb.firebaseio.com",
  projectId: "dillonhowellcom",
  storageBucket: "dillonhowellcom.appspot.com",
  messagingSenderId: "616775924429",
  appId: "1:616775924429:web:ad91f8b948e47d09d5c784",
  measurementId: "G-26HRH0PLH9"
});


const db = getFirestore();

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
    const [openEmail, setOpenEmail] = useState(false)
    const handleEmailOpen = () => setOpenEmail(true);
    const handleEmailClose = () => setOpenEmail(false);
    const [emailValue, setEmailValue] = useState("");
    const [nameValue, setNameValue] = useState("");
    const [aboutValue, setAboutValue] = useState("");


    const handleEmailSubmit = async () => {
        setOpenEmail(false)

        const contactRef = await addDoc(collection(db, "contacts"),{
          email: emailValue,
          name: nameValue,
          about: aboutValue,
        })

    }

    return(
      <Fragment >
          <div className='mobile-contact'> 

        <SpeedDial
          ariaLabel="SpeedDial openIcon example"
          icon={<MailIcon openIcon={<CreateIcon />} />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={handleEmailOpen}
            />
          ))}
        </SpeedDial>

      </div>
      <Dialog open={openEmail} onClose={handleEmailClose}>
        <DialogTitle>Let's talk</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Get in contact with me by entering your info below.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            fullWidth
            variant="standard"
            onChange={(e) => setNameValue(e.target.value)}
          />     <TextField
          autoFocus
          margin="dense"
          type="email"
          label="Email Address"
          fullWidth
          variant="standard"
          onChange={(e) => setEmailValue(e.target.value)}
        />     <TextField
        autoFocus
        margin="dense"
        label="About"
        fullWidth
        variant="standard"
        onChange={(e) => setAboutValue(e.target.value)}
      />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEmailClose}>Cancel</Button>
          <Button onClick={handleEmailSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>

               <Modal open={open} onClose={handleClose}>
        <Box sx={style} className='dancingBox'>
            <img src={dancer} style={{ borderRadius: '50%'}} className='dancer' alt='dancingRat'/>
        </Box>
      </Modal>

        <div className='contact-me'>
            <Button variant='outlined' onClick={handleEmailOpen} size='large' startIcon={<MailIcon/>}>
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
                            <p className="neon-text" style={{color:'rgb(235, 210, 52)'}}>JavaScript<p style={{color:'white'}}>Proficient</p></p>
                            <p className="neon-text" style={{color:'rgb(92, 244, 255)'}}>React<p style={{color:'white'}}>Proficient</p></p>    
                            <p className="neon-text" style={{color:'rgb(5, 143, 255)'}}>Python<p style={{color:'white'}}>Proficient</p></p>    
                            <p className="neon-text" style={{color:'rgb(255, 134, 5)'}}>Java<p style={{color:'white'}}>Intermediate</p></p>         
                        </div>
                        <div>
                            <p className="neon-text" style={{color:'rgb(82, 160, 255)'}}>CSS<p style={{color:'white'}}>Intermediate</p></p>     
                            <p className="neon-text" style={{color:'rgb(82, 197, 255)'}}>C<p style={{color:'white'}}>Intermediate</p></p>     
                            <p className="neon-text" style={{color:'rgb(82, 197, 255)'}}>C++<p style={{color:'white'}}>Intermediate</p></p>        
                            <p className="neon-text" style={{color:'rgb(255, 166, 82)'}}>AWS<p style={{color:'white'}}>Intermediate</p></p> 
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


