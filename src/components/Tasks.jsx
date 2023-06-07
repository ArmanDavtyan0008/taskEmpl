import React, {useEffect} from 'react'
import { Buttons } from './Buttons'
import { useDispatch, useSelector } from 'react-redux'
import { changePageName } from './redux/slicers/pageSlice'


export const Tasks = () => {
  const dispatch = useDispatch()

  useEffect(() => {
  dispatch(changePageName({
    secondPage: 'employees'
  }))
  }, [])

  return (
    <div> <Buttons/> </div>
  )
}
