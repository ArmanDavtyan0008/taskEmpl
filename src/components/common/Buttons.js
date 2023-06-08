import React from "react";
import { Box, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { buttonStyles } from "./buttonStyles";

export const Buttons = () => {
  const selectedName = useSelector((state) => state.page);
  return (
    <Box sx={{ ...buttonStyles.mainBox }}>
      <Link to="/">
        <Button variant="contained" sx={{ ...buttonStyles.linkOne }}>
          {selectedName.currentPage === "home" ? "Employees" : "Go Back"}
        </Button>
      </Link>

      <Link to="/tasks">
        <Button variant="contained" sx={{ ...buttonStyles.linkTwo }}>
          {selectedName.secongPage === "tasks" ? "Employees" : "Tasks"}
        </Button>
      </Link>
    </Box>
  );
};
