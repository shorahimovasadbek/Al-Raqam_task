import React, {useState, useEffect} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './completed.css'
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Title from '../Title/Title'

export default function Completed() {
  let disabled_link = document.getElementById('.disabled_link')
  const [setLocal, setLocalStorage] = useState([]);
  useEffect(() => {
    let massiv1 = JSON.parse(localStorage.getItem('massiv'))
    let massiv2 = []
    for(let i = 0; i<massiv1.length; i++){
      if(massiv1[i].progress > 50){
        massiv2.push(massiv1[i])
      }
    }
    setLocalStorage(massiv2) 
  }, [JSON.parse(localStorage.getItem('massiv'))]);


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
            <div className="col-4 my-4 px-3">
              <Link to='/LearnMore' className='no-link-style' state={item}>
                <Card sx={{ maxWidth: 345, height: 200, display: 'flex', borderRadius: '20px' }} className='Card_lang'>
                  <CardContent className='text-center'>
                    <CardMedia
                      sx={{ height: 100, width: 100, borderRadius: '50%' }}
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

