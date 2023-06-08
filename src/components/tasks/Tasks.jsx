import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { Buttons } from "../common/Buttons";
import { useDispatch } from "react-redux";
import { changePageName } from "../redux/slicers/pageSlice";
import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import { StyledTableCell, StyledTableRow } from "../employee/Employees";
import { CreateTasks } from "./CreateTasks";
import { UserProfile } from "../common/UserProfile";

export const Tasks = () => {
  const [taskProfileId, settaskProfileId] = useState("");
  const dispatch = useDispatch();
  const [taskUpdatedId, setTaskUpdatedId] = useState("");
  const [isTaskEditing, setIsTaskEditing] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("https://rocky-temple-83495.herokuapp.com/tasks")
      .then((res) => res.json())
      .then((res) => setTasks(res));
    dispatch(
      changePageName({
        secondPage: "employees",
      })
    );
  }, [tasks]);

  const onHandleDelButton = (id) => {
    console.log();
    fetch(`https://rocky-temple-83495.herokuapp.com/tasks/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          console.log("doe");
          const newData = tasks.filter((f) => f.id !== id);
          setTasks(newData);
        }
      })
      .catch((error) => console.error(error.message));
  };

  return taskProfileId ? (
    <UserProfile
      taskProfileId={taskProfileId}
      settaskProfileId={settaskProfileId}
    />
  ) : (
    <div>
      <Buttons />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700, mt: 8 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{ width: "20%" }}> ID </StyledTableCell>
              <StyledTableCell sx={{ width: "20%" }}> NAME </StyledTableCell>
              <StyledTableCell sx={{ width: "20%" }}>
                START DATE
              </StyledTableCell>
              <StyledTableCell sx={{ width: "20%" }}>END DATE</StyledTableCell>
              <StyledTableCell sx={{ width: "20%" }}>
                DESCRIPTION
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((row) => {
              return (
                <StyledTableRow key={Math.random()}>

                  <StyledTableCell align="left" sx={{ width: "20%" }}>
                    <Typography>
                      {row.id}
                      <IconButton onClick={() => settaskProfileId(row.id)}>
                        <Avatar> {row.name? row.name[0].toUpperCase(): ''} </Avatar>
                      </IconButton>{" "}
                    </Typography>
                  </StyledTableCell>

                  <StyledTableCell align="left" sx={{ width: "20%" }}>
                    <Typography>{row.name}</Typography>
                  </StyledTableCell>

                  <StyledTableCell align="left" sx={{ width: "20%" }}>
                    <Typography>{row.startDate}</Typography>
                  </StyledTableCell>

                  <StyledTableCell align="left" sx={{ width: "20%" }}>
                    <Typography> {row.endDate}</Typography>
                  </StyledTableCell>

                  <StyledTableCell align="left" sx={{ width: "20%" }}>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography>{row.description}</Typography>

                      <Box sx={{display:'flex', flexDirection:'flexEnd'}}> 
                      <Button
                        value={row.id}
                        onClick={(e) => {
                          setIsTaskEditing(!isTaskEditing);
                          setTaskUpdatedId(e.target.value);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        value={row.id}
                        onClick={() => {
                          onHandleDelButton(row.id);
                        }}
                      >
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

      <CreateTasks
        isTaskEditing={isTaskEditing}
        setIsTaskEditing={setIsTaskEditing}
        setTaskUpdatedId={setTaskUpdatedId}
        taskUpdatedId={taskUpdatedId}
      />
    </div>
  )
}
