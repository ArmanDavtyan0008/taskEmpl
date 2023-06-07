import React from 'react'
import { Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <Box sx= {{display:'flex', justifyContent:'center', alignItems:'center', width:{sm:300,md:900,lg:1200, xl:1500},  mt:6 }} > 
    <Link to="/employees">
    <Button variant='contained'sx={{width:{sm:50,md:150,lg:200, xl:250}, mr:2}}>Employees</Button>
  </Link>
  <Link to="/tasks">
      <Button variant='contained' sx={{width:{sm:50,md:150,lg:200, xl:250}, ml:2}}>Tasks</Button>
    </Link>
    </Box>
  )
}
