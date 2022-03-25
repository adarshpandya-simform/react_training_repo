import { DisplayTodo, InputTodo } from "./components";
import { Paper, Typography } from "@mui/material";
import { useDarkMode } from "./hooks";
import "./App.css";

// App component : renders: InputTodo and DisplayTodo
const App = () => {
  const { mode } = useDarkMode();

  return (
    <Paper className={`app-container ${mode}-paper`} elevation={5}>
      <Typography align="center" sx={{ padding: 1 }} variant="h4">
        Todo App
      </Typography>
      <InputTodo />
      <DisplayTodo />
    </Paper>
  );
};

export default App;
