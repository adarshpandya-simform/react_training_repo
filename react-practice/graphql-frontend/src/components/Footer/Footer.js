import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import "./Footer.css";

// Footer component
const Footer = () => {
  return (
    <div className="footer-container">
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Typography
              variant="body1"
              align="center"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "flex", justifyContent: "center" },
              }}
            >
              &copy; 2022, GQL Media.
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Footer;
