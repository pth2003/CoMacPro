import React from "react";
import Box from "@mui/material/Box";
import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../app/authSlice";
function Login() {
  const [showpassword, setShowpassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleShow = () => {
    setShowpassword(!showpassword);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(loginUser({ username, password }));
  };

  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <Container>
      <Box width={"50%"} mx={"auto"} padding={"60px 0 "}>
        <Typography variant="h3" mb={5}>
          Log In
        </Typography>

        <FormControl fullWidth onSubmit={handleSubmit}>
          <Box>
            <Typography htmlFor="username" mb={1}>
              Email address or username
            </Typography>
            <TextField
              size="small"
              variant="outlined"
              id="username"
              fullWidth
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </Box>
          <Box mb={5}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography htmlFor="password" mb={1}>
                Password
              </Typography>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={1}
                component={"button"}
                sx={{ backgroundColor: "transparent", border: "none" }}
                onClick={handleShow}
              >
                {showpassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                <Typography>{showpassword ? "Hide" : "Show"} </Typography>
              </Box>
            </Box>
            <TextField
              size="small"
              variant="outlined"
              id="password"
              fullWidth
              type={showpassword ? "text" : "password"}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember me"
            />
          </Box>
          <Typography>
            By continuing, you agree to the Term of use and Privacy Policy
          </Typography>
          <Button
            variant="contained"
            sx={{
              py: "10px",
              borderRadius: "50px",
              mt: "8px",
            }}
            onClick={handleSubmit}
          >
            Log in
          </Button>
          <Box sx={{ textAlign: "center", my: "24px" }}>
            <Link component="button" variant="body2">
              Forget your password
            </Link>
            <Box
              my={3}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={1}
            >
              <Typography>Don't have an account?</Typography>
              <Link>Sign up</Link>
            </Box>
          </Box>
        </FormControl>
      </Box>
    </Container>
  );
}

export default Login;
