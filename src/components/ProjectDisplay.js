import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import bohnBot  from '../pics/BohnBot.PNG'
import bohnZone from '../pics/BohnZone.PNG'
import kanyeQuote from '../pics/kanyeQuote.png'

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
    let projectsWidth = 600;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        projectsHeight = 400;
        projectsWidth = 350; 
      }
  return (
      <div>
    <ImageList   sx={{ width: projectsWidth, height: projectsHeight }}>
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
    </ImageList>
    </div>
  );
}