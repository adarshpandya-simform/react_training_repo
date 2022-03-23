import { AppBar, Typography } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <>
      <AppBar sx={{ padding: 2 }} position="static">
        <Typography variant="h5">Header</Typography>
      </AppBar>
      {children}
    </>
  );
};

export default Layout;
