import React, {useState, useEffect} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './card.css'
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Title from '../Title/Title'

export default function MediaCard() {
  const [setLocal, setLocalStorage] = useState([]);
  useEffect(() => {
    let massiv1 = JSON.parse(localStorage.getItem('massiv'))
    setLocalStorage(massiv1) 
  }, []);

  let massiv = JSON.parse(localStorage.getItem('massiv'))
  function StorageLocal(lang){
    for(let i = 0; i < massiv.length; i++){
      if(massiv[i].lang === lang){
        massiv[i].progress = 50
        massiv[i].level = "Level 2"
      }
    }
    localStorage.setItem('massiv', JSON.stringify(massiv))
  }

  function CircularProgressWithLabel(props) {
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" {...props} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary">
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
    );
  }

  CircularProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
  };

  return (
    <div className='row g-0'>
      <Title />
      {
        (setLocal.length > 0) && setLocal.map((item, index) => {
          return (
            <div className="col-md-4 col-12 my-4 px-3">
              <Link onClick={() => StorageLocal(item.lang)} to='/LearnMore' className='no-link-style' state={item}>
                <Card sx={{ maxWidth: 345, minHeight: 200, display: 'flex', borderRadius: '20px', marginLeft: '50px' }} className='Card_lang'>
                  <CardContent className='text-center'>
                    <CardMedia 
                      className='media_card'
                      sx={{ maxHeight: 100, minHeight: 80, borderRadius: '50%' }}
                      image={item.flag}
                      title={item.name}
                    />
                    <Typography gutterBottom variant="h5" component="div" className='mt-1 Typography'>
                      {item.name}
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography className='content_info Typography' variant="body2" color="text.secondary">
                      {item.info}
                    </Typography>
                    <Typography className='text-end mt-4 Typography'>
                      {item.level}
                    </Typography>
                  </CardContent>
                  <CardActions className='Card_progress'>
                    <CircularProgressWithLabel value={item.progress} />
                  </CardActions>
                </Card>
              </Link>
            </div>
          )
        })
      }
    </div>
  );
}
