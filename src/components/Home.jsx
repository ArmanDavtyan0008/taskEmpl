import React, { useEffect } from 'react'
import { Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { changePageName } from './redux/slicers/pageSlice'

export const Home = () => {
  // const [currentPage, setCurrentPage] = useState('home')
  const dispatch = useDispatch()
  const page = useSelector(state => state.page)
  useEffect(() => {
    dispatch(changePageName('home'))
  }, [page])
  
  return (
    <Box sx= {{display:'flex', justifyContent:'center', alignItems:'center', width:{sm:300,md:900,lg:1200, xl:1500},  mt:6 }} > 
    <Link to={page.currentPage ==='home'? '/employees': '/'}>
    <Button variant='contained'sx={{width:{sm:50,md:150,lg:200, xl:250}, mr:2}} >Employees</Button>
  </Link>
  <Link to={page.secondPage === 'tasks'? '/tasks': '/employees'}>
      <Button variant='contained' sx={{width:{sm:50,md:150,lg:200, xl:250}, ml:2}}> {page.secondPage === 'tasks' ? "Tasks" : "Employees"}</Button>
    </Link>
    </Box>
  )
}
