import React from "react";
import { Typography } from "@mui/material";

export const Description = () => {
  return (
    <Typography
      variant="h4"
      sx={{ width: { sm: 600, md: 900, lg: 1200, xl: 1500 }, mt: 4 }}
    >
      Welcome Employees and Tasks WebSite{" "}
    </Typography>
  );
};
