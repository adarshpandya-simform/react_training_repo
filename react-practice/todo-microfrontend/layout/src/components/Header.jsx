import React from "react";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useTodos } from "add_todo/useTodos";

const Header = () => {
  const { completedTodos } = useTodos();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }} component="div">
            Todos App
          </Typography>
          <Button color="inherit">Completed Todos: {completedTodos}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
