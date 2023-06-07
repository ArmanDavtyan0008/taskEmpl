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
import { Box, Typography } from "@mui/material";
import { Buttons } from "../Buttons";
import { useDispatch } from "react-redux";
import { changePageName } from "../redux/slicers/pageSlice";
import { CreateEmployee } from "./CreateEmployee";

export const Employees = () => {
  const [data, setData] = React.useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changePageName("employees"));
    fetch("https://rocky-temple-83495.herokuapp.com/employees")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [data]);
  return (
    <Box sx={{overflow:'auto'}}>
      <Buttons />
      <Typography variant="h4"  sx= {{mt:4}}> Employees </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700, mt: 8 }} aria-label="customized table">
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
            {data.map((row) => {
              return (
                <StyledTableRow key={Math.random()}>
                  <StyledTableCell align="left" sx={{ width: "20%" }}>
                    <Typography> {row.id}</Typography>
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

      <CreateEmployee />
      <Box sx={{height:500}}> </Box>
    </Box>
  );
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
