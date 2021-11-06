import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import bohnBot  from '../pics/BohnBot.PNG'
import bohnZone from '../pics/BohnZone.PNG'
import kanyeQuote from '../pics/kanyeQuote.png'
import websitePic from '../pics/website.png'
import { height } from '@mui/system';

const itemData = [
    {
      img: bohnBot,
      title: 'BohnBot',
      author: 'June 2021',
      featured: true,
    },
    {
      img: bohnZone,
      title: <a style={{color:'white'}} href="https://www.thebohnzone.com/good-morning">BohnZone</a>,
      author: 'July 2021',
    },
    {
      img: kanyeQuote,
      title: 'Kanye Quotes',
      author: 'August 2021',
    },
  
  ];

export const ProjectDisplay = () => {
    let projectsHeight = 500;
    let projectsWidth = 500;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        projectsHeight = 400;
        projectsWidth = 350; 
      }
  return (
      <div>
    {/* <ImageList   sx={{ width: projectsWidth, height: projectsHeight }}>
      <ImageListItem key="Subheader" cols={2}>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}`}
            srcSet={`${item.img}`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList> */}
        <div className='grid-container-4'>
                        <div>
                            <p className="neon-project" style={{color:'white'}}>BohnBot<img className='project-img' src={bohnBot} alt='bohnbot'></img></p>
                            <a target="_blank" href="https://www.thebohnzone.com/good-morning" className="neon-project" style={{color:'white'}} rel="noreferrer">BohnZone<img className='project-img' src={bohnZone} alt='bohnzone'></img></a>       
                        </div>
                        <div>
                        <p className="neon-project" style={{color:'white'}}>KanyeQuotes<img className='project-img' src={kanyeQuote} alt='kanyeQuote'></img></p>      
                        <a target="_blank" href="https://www.dillonhowell.com"className="neon-project" style={{color:'white'}} rel="noreferrer">DillonHowell.com<img className='project-img' src={websitePic} alt='kanyeQuote'></img></a>       

                        </div>
                    </div>
    </div>
  );
}