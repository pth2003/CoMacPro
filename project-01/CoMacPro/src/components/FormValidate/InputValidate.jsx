import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PageLoading from "../Loading/PageLoading";
import { useDispatch, useSelector } from "react-redux";
import { loginAuth } from "../../redux/slice/authSlice";
import { Navigate, useNavigate } from "react-router-dom";

export const InputValidate = () => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [touched, setTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const handleEmailChange = (e) => {
  //   setValue(e.target.value);
  //   setTouched(true);
  // };
  // const validateEmail = (email) => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(email);
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(loginAuth({ username, password }));
    if (loginAuth.fulfilled.match(result)) {
      navigate("/");
    }

    // if (!isValid || value === "") {
    //   alert("Email không hợp lệ, vui lòng nhập lại");
    // } else {
    //   alert(` Chào mừng quay trở lại ${value}!!!`);
    // }
  };
  // useEffect(() => {
  //   if (touched) {
  //     setIsValid(validateEmail(value));
  //   }
  // }, [value, touched]);
  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <>
      {loading && <PageLoading />}
      <Container
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component={"form"}
          sx={{ border: "1px solid #000", padding: "100px 50px" }}
          onSubmit={handleSubmit}
        >
          <Typography variant="h4" sx={{ mb: 3 }}>
            Đăng nhập
          </Typography>
          <Box
            component={"div"}
            sx={{ display: "flex", flexDirection: "column", mb: 3 }}
          >
            <Typography component={"label"}>
              Nhập email hoặc username
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              // onChange={handleEmailChange}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              placeholder="example@gmail.com"
              // error={!isValid}

              // helperText={!isValid ? "Email không hợp lệ" : ""}
            ></TextField>
          </Box>
          <Box
            component={"div"}
            sx={{ display: "flex", flexDirection: "column", mb: 3 }}
          >
            <Typography component={"label"}>Nhập mật khẩu</Typography>
            <OutlinedInput
              size="small"
              type={showPassword ? "text" : "password"}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}{" "}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Box>
          <Button variant="contained" type="submit">
            Đăng nhập
          </Button>
          {error && <p style={{ color: "red" }}>{error.message}</p>}
        </Box>
      </Container>
    </>
  );
};
