import { Grid, Typography, Paper } from "@material-ui/core";
import { useContext } from "react";
import { SocketContext } from "../context/SocketContext";
import { getVideoStyles } from "../theme/theme";

// VideoPlayer component for rendering video
const VideoPlayer = () => {
  // extracting state and helpers from context
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);
  // getting all styles
  const classes = getVideoStyles();

  return (
    <Grid container className={classes.gridContainer}>
      {/* our own video */}
      {/* conditionally rendering own call */}
      {stream && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {name || "Name"}
            </Typography>
            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              className={classes.video}
            />
          </Grid>
        </Paper>
      )}

      {/* user's video */}
      {/* conditionally rendering user's video */}
      {callAccepted && !callEnded && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {call.name || "Name"}
            </Typography>
            <video
              playsInline
              ref={userVideo}
              autoPlay
              className={classes.video}
            />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;
