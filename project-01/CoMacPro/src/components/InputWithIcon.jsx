import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
export const InputWithIcon = ({
  icon: Icon,
  label,
  placehoder,
  showDivider,
  ...props
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      gap="6px"
      position="relative"
      sx={{
        "&::after": {
          content: '""',
          display: showDivider ? "block" : "none",
          position: "absolute",
          right: 20,
          top: 20,
          bottom: 0,
          borderRight: { md: "2px solid #000", xs: "none" },
          borderTop: { xs: "1px solid #000", md: "none" },
          height: { md: "30%", xs: "1px" },
          width: { md: "30%", xs: "1px" },
        },
      }}
    >
      <Icon />
      <Box>
        <Typography
          variant="body1"
          component="label"
          sx={{ mb: "4px", display: "block" }}
        >
          {label}
        </Typography>
        <TextField
          {...props}
          size="small"
          placeholder={placehoder}
          variant="standard"
          slotProps={{
            input: {
              disableUnderline: true,
            },
          }}
        />
      </Box>
    </Box>
  );
};
