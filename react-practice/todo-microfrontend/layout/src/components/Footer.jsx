import React from "react";
import { AppBar, Typography, Box, Toolbar, Button } from "@mui/material";
import { useTodos } from "add_todo/useTodos";

const Footer = () => {
  const { incompleteTodos } = useTodos();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }} variant="body1">
            &copy; 2021, Todos Media
          </Typography>
          <Button color="inherit">Incompleted Todos: {incompleteTodos}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Footer;
