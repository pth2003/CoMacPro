import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export const InputValidate = () => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [touched, setTouched] = useState(false);
  const handleEmailChange = (e) => {
    setValue(e.target.value);
    setTouched(true);
  };
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid || value === "") {
      alert("Email không hợp lệ, vui lòng nhập lại");
    } else {
      alert(` Chào mừng quay trở lại ${value}!!!`);
    }
  };
  useEffect(() => {
    if (touched) {
      setIsValid(validateEmail(value));
    }
  }, [value, touched]);
  return (
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
        <Typography variant="h4">Đăng nhập </Typography>
        <Box
          component={"div"}
          sx={{ display: "flex", flexDirection: "column", mb: 3 }}
        >
          <Typography component={"label"}>Nhập email</Typography>
          <TextField
            variant="outlined"
            size="small"
            onChange={handleEmailChange}
            value={value}
            placeholder="example@gmail.com"
            error={!isValid}
            helperText={!isValid ? "Email không hợp lệ" : ""}
          ></TextField>
        </Box>
        <Box
          component={"div"}
          sx={{ display: "flex", flexDirection: "column", mb: 3 }}
        >
          <Typography component={"label"}>Nhập mật khẩu</Typography>
          <TextField
            variant="outlined"
            size="small"
            type="password"
          ></TextField>
        </Box>
        <Button variant="contained" type="submit">
          Đăng nhập
        </Button>
      </Box>
    </Container>
  );
};
