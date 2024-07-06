import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const Dashboard = () => {
    const [rows,setRows]=useState([])
  useEffect(()=>{axios.get('https://fakestoreapi.com/products').then((res)=>{
    setRows(res.data)
  })},[])
  return (
    <>
        {rows && rows.map((row)=>(
         <Card sx={{ minWidth: 275 }} key={row.id}>
      <CardContent>
        
        <Typography variant="h5" sx={{fontSize:20}} textAlign={'left'} >
          Product Name:{row.title}
        </Typography>
        <br></br>
        <Typography variant="h5" sx={{fontSize:20}} textAlign={'left'} name='description'>
          Description:{row.description}
        </Typography>
        <br></br>
        <Typography variant="h5" sx={{fontSize:20}} textAlign={'left'}name='price'>
          Price:{row.price}
        </Typography>
        <br></br>
        <Typography variant="h5" sx={{fontSize:20}} textAlign={'left'} name='category'>
          Category:{row.category}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>))
    }
    </>
  )
}

export default Dashboard