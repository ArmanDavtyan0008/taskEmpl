import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import {  Box, Button, Typography } from "@mui/material";
import { StyledTableCell, StyledTableRow } from "../employee/Employees";

export const UserProfile = ({profileId,setProfileId,taskProfileId,settaskProfileId}) => {
const [datas, setDatas] = React.useState([])
// const [taskData, setTaskData] = React.useState([])

const handleStepBack = ()=> {
    profileId? setProfileId(''): settaskProfileId('') 
}

 useEffect(() => {
   fetch(`https://rocky-temple-83495.herokuapp.com/employees/${profileId}`)
   .then(res => res.json())
   .then(res => {
    if (Array.isArray(res)) {
      setDatas(res);
    }
  })
    .catch(error => console.log(error.message))

   return () => {
    setDatas([])
    console.log('cmp did unmount');
   }
  }
, [profileId])


// useEffect(() => {
//   fetch(`https://rocky-temple-83495.herokuapp.com/tasks?employeeId=${profileId}`)
//   .then(res => res.json())
// .then (res => setTaskData(res))
// }, [])
 
 useEffect(() => {
  console.log(profileId);
 }, [profileId])
 
//  useEffect(() => {
//   console.log(taskData);
// }, [taskData])

  
  return (
    <Box sx={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
    <Button variant='contained' sx={{width:200,height:40, mt:4}} onClick={handleStepBack}> Go Back</Button>
    <Typography variant='h3' sx={{mt:4}}> User  Profile</Typography> 
    <Box> 
    <TableContainer component={Paper}>
        <Table sx={{minWidth:900, mt: 8 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{ width: "20%" }}>ID</StyledTableCell>
              <StyledTableCell sx={{ width: "20%" }}>EMAIL</StyledTableCell>
              <StyledTableCell sx={{ width: "20%" }}>NAME</StyledTableCell>
              <StyledTableCell sx={{ width: "20%" }}>SURNAME </StyledTableCell>
              <StyledTableCell sx={{ width: "20%" }}>POSITION</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datas.map((row) => {
              return (
                <StyledTableRow key={Math.random()}>

                  <StyledTableCell align="left" sx={{ width: "20%" }}>
                    <Typography> {row.id} </Typography>
                  </StyledTableCell>

                  <StyledTableCell align="left" sx={{ width: "20%" }}>
                    <Typography>{row.email}</Typography>
                  </StyledTableCell>

                  <StyledTableCell align="left" sx={{ width: "20%" }}>
                    <Typography>{row.name}</Typography>
                  </StyledTableCell>

                  <StyledTableCell align="left" sx={{ width: "20%" }}>
                    <Typography> {row.surname}</Typography>
                  </StyledTableCell>

                  <StyledTableCell align="left" sx={{ width: "20%" }}>
                      <Typography>{row.position}</Typography>
                  </StyledTableCell>

                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    </Box>
  )
}
