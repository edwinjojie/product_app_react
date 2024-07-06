import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Add = () => {
  return (
        <Box 
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
      <TextField
        
        id="outlined-required"
        label="Product Name"
        defaultValue=""
     
      />
      </div>
      <div>
      <TextField
        
        id="outlined-required"
        label="Description"
        defaultValue=""
      />
      </div>
      <div>
      <TextField
        id="outlined-required"
        label="Price"
        type="number"
        defaultValue=""

      />
      </div>
      <div>
      <TextField
        id="outlined-required"
        label="Category"
        defaultValue=""
      
      />
      </div>
      <Button variant="contained">ADD</Button>
      </Box>
   
  )
}

export default Add