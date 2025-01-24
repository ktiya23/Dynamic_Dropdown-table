import React from "react";
import { MenuItem, Select, Box } from "@mui/material";

const SingleDropdown = ({ options, value, onChange }) => {
  return (
    <Box>
      <Select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        displayEmpty
        fullWidth
        size="small"
        sx={{
          backgroundColor: "#fff",
          borderRadius: "4px",
        }}
      >
        <MenuItem value="" disabled>
          Select a Role
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default SingleDropdown;
