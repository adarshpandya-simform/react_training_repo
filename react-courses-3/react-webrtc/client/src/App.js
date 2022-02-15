import { AppBar, Typography } from "@material-ui/core";
import { Notifications, Options, VideoPlayer } from "./components";
import { getAppStyles } from "./theme/theme";
import "./App.css";

// App component which renders whole layout with
// VideoPlayer and Notification/Option component
const App = () => {
  const classes = getAppStyles();

  return (
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center">
          Video Chat App!
        </Typography>
      </AppBar>
      {/* video player */}
      <VideoPlayer />
      {/* options -> notifications */}
      <Options>
        {/* rendering notification component */}
        <Notifications />
      </Options>
    </div>
  );
};

export default App;
