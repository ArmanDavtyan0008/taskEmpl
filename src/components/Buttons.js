import { Box, Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Buttons = () => {
  const selectedName = useSelector(state => state.page)
  return (
    <Box sx= {{display:'flex', justifyContent:'center', alignItems:'center', width:{sm:300,md:900,lg:1200, xl:1500},  mt:6 }} > 
    <Link to="/">
    <Button variant='contained'sx={{width:{sm:50,md:150,lg:200, xl:250}, mr:2}}> {
      selectedName.currentPage === "home"? "Employees": "Go Back" }</Button>
  </Link>
  <Link to="/tasks">
      <Button variant='contained' sx={{width:{sm:50,md:150,lg:200, xl:250}, ml:2}}>{selectedName.secongPage === 'tasks'? "Employees" : "Tasks"}</Button>
    </Link>
    </Box>
  )
}
