// export default function Footer() {
//   return <section className="footer"></section>;
// }
import { Link, useNavigate } from "react-router-dom";
import { Box, Typography, List, ListItem, Container } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      sx={{
        width: "100%",
        zIndex: 1000,
        backgroundColor: "white",
        boxShadow: "2px 0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5" onClick={() => navigate("/")}>
            XII Physics
          </Typography>
          <List
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
            }}
          >
            <ListItem>
              <Link to={"course"} style={{ textDecoration: "underline" }}>
                Learn
              </Link>
            </ListItem>
            <ListItem>
              <Link to={"quiz"} style={{ textDecoration: "underline" }}>
                Practice
              </Link>
            </ListItem>
            <ListItem>
              <Link to={"result"} style={{ textDecoration: "underline" }}>
                Activity
              </Link>
            </ListItem>
            <ListItem>
              <Link to={"login"} style={{ textDecoration: "underline" }}>
                Login
              </Link>
            </ListItem>
            <ListItem>
              <Link to={"sign-up"} style={{ textDecoration: "underline" }}>
                SignUp
              </Link>
            </ListItem>
          </List>
        </Box>
        <Typography variant="body2" align="center">
          Copyright © {new Date().getFullYear()} -XII Physics- All rights
          reserved
        </Typography>
        {/* <Button onClick={scrollToTop} sx={{ mt: 1 }}>
          <KeyboardArrowUpIcon />
        </Button> */}
      </Container>
    </Box>
  );
};

export default Footer;
