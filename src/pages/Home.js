import React from 'react'
import { Fragment } from 'react'
import './home.scss'
import dillon from '../pics/image.png'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid'
import { ProjectDisplay } from '../components/ProjectDisplay'

const useStyles = makeStyles({
    img:{
        height:'40rem',
        width:'auto'
    }
  });

export const Home = () => {
    const classes = useStyles();
    let isMobile = false;
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        isMobile = true;
       }

    return(
      <Fragment>
            {/* Modify Gap Mobile */}
            <Grid container marginTop='5rem' gap={60} justifyContent="center" alignItems="flex-start">
                    <Grid>
                        <h1 className="neon-button" >Dillon Howell</h1>         
                    </Grid>      
                    <Grid>
                        <img className={classes.img} src={dillon} style={{display:'flex', justifyContent:'center'}}  alt='me'/>
                    </Grid>
               </Grid> 
            <Grid container marginTop='-2rem' gap={60} justifyContent="center" alignItems="flex-start">
               <Grid item >
                    <p className="neon-header">Skill Set</p>
                    <Grid container marginTop='-6rem' spacing={5} justifyContent="center" alignItems="center">
                        <Grid item xs={6}>
                            <p className="neon-text" style={{color:'rgb(235, 210, 52)'}}>JavaScript</p>
                            <p className="neon-text" style={{color:'rgb(92, 244, 255)'}}>React</p>    
                            <p className="neon-text" style={{color:'rgb(5, 143, 255)'}}>Python</p>    
                            <p className="neon-text" style={{color:'rgb(255, 134, 5)'}}>Java</p>    
                            <p className="neon-text" style={{color:'rgb(82, 160, 255)'}}>CSS</p>    
                            <p className="neon-text" style={{color:'rgb(82, 197, 255)'}}>C</p>    
                            <p className="neon-text" style={{color:'rgb(82, 197, 255)'}}>C++</p>    
                            <p className="neon-text" style={{color:'rgb(255, 166, 82)'}}>AWS</p>    
                        </Grid>
                        <Grid item xs={6}>
                        <p className="neon-text" style={{color:'white'}}>Proficient</p>    
                        <p className="neon-text" style={{color:'white'}}>Proficient</p>    
                        <p className="neon-text" style={{color:'white'}}>Proficient</p>                              
                        <p className="neon-text" style={{color:'white'}}>Intermediate</p>                              
                        <p className="neon-text" style={{color:'white'}}>Intermediate</p>                              
                        <p className="neon-text" style={{color:'white'}}>Intermediate</p>                              
                        <p className="neon-text" style={{color:'white'}}>Intermediate</p>                              
                        <p className="neon-text" style={{color:'white'}}>Intermediate</p>                              
                        </Grid>
                        
                    </Grid>
                </Grid>
                <Grid item >
                <p className="neon-header">Projects</p>
                    <Grid container marginTop='0rem'   justifyContent="center" alignItems="flex-start">
                        <Grid item >
                            <ProjectDisplay/>
                        </Grid>
                        </Grid>
                </Grid>

            </Grid>
      </Fragment>
    )
}


