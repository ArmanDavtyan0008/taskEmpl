import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import { Buttons } from "../common/Buttons";
import { useDispatch } from "react-redux";
import { changePageName } from "../redux/slicers/pageSlice";
import { CreateEmployee } from "./CreateEmployee";
import { UserProfile } from "../common/UserProfile";

export const Employees = () => {
  const [profileId, setProfileId] = React.useState();
  const [isEditingMode, setisEditingMode] = React.useState(false);
  const [name, setName] = React.useState("");
  const [data, setData] = React.useState([]);
  const [updatedId, setUpdatedId] = React.useState("");
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(changePageName("employees"));
    fetch("https://rocky-temple-83495.herokuapp.com/employees")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [data]);

  const onHandleDelButton = (id) => {
    console.log();
    fetch(`https://rocky-temple-83495.herokuapp.com/employees/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          const newData = data.filter((f) => f.id !== id);
          setData(newData);
        }
      })
      .catch((error) => console.error(error.message));
  };
  return profileId ?
    <UserProfile profileId={profileId} setProfileId={setProfileId} />
   : 
    <Box sx={{ overflow: "auto" }} >
      <Buttons />
      <Typography align="center" variant="h4" sx={{ mt: 4 }}>
        EMPLOYEES
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ mt: 8,minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{ width: "10%" }}>ID</StyledTableCell>
              <StyledTableCell sx={{ width: "25%" }}>EMAIL</StyledTableCell>
              <StyledTableCell sx={{ width: "10%" }}>NAME</StyledTableCell>
              <StyledTableCell sx={{ width: "20%" }}>SURNAME </StyledTableCell>
              <StyledTableCell sx={{ width: "30%" }}>POSITION</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => {
              return (
                <StyledTableRow key={Math.random()}>
                  <StyledTableCell align="left" sx={{ width: "19%" }}>
                    <Typography>
                      {row.id}
                      <IconButton onClick={() => setProfileId(row.id)}>
                        <Avatar>{row.email?.[0].toUpperCase()} </Avatar>
                      </IconButton>
                    </Typography>
                  </StyledTableCell>

                  <StyledTableCell align="left" sx={{ width: "19%" }}>
                    <Typography>{row.email}</Typography>
                  </StyledTableCell>

                  <StyledTableCell align="left" sx={{ width: "19%" }}>
                    <Typography>{row.name}</Typography>
                  </StyledTableCell>

                  <StyledTableCell align="left" sx={{ width: "19%" }}>
                    <Typography> {row.surname}</Typography>
                  </StyledTableCell>

                  <StyledTableCell align="left" sx={{ width: "25%" }}>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography>{row.position}</Typography>
                      <Box sx={{display:'flex', flexDirection:'flexEnd'}}> 
                      <Button
                        value={row.id}
                        onClick={(e) => {
                          setUpdatedId(e.target.value);
                          setisEditingMode(!isEditingMode);
                          console.log(updatedId);
                        }}
                      >
                        Edit
                      </Button>
                      <Button  onClick={() => onHandleDelButton(row.id)}>
                        Del
                      </Button>
                      </Box>
                    </Box>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <CreateEmployee
        isEditingMode={isEditingMode}
        setisEditingMode={setisEditingMode}
        updatedId={updatedId}
        setUpdatedId={setUpdatedId}
      />
      <Box sx={{ height: 500 }}> </Box>
    </Box>
}

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
