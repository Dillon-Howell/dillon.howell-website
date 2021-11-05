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
      rows: 2,
      cols: 2,
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
  return (
      <div >
    <ImageList sx={{ width: 600, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
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