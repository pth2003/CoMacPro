import { TextField } from "@mui/material";
import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
export const InputWithIcon = ({ icon: Icon, label, ...props }) => {
  return (
    <TextField
      label={label}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <Icon />
            </InputAdornment>
          ),
        },
      }}
    />
  );
};
