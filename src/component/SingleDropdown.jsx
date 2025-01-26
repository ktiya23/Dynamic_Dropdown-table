import React from "react";
import { MenuItem, Select, Box, Typography } from "@mui/material";

const SingleDropdown = ({ options, value, onChange }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1, // Spacing between elements
        width: "100%",
        maxWidth: "300px", // Fix the width for a cleaner UI
        margin: "auto",
      }}
    >
      {/* Label for Selected Role */}
      {value && (
        <Typography
          variant="subtitle2"
          sx={{
            marginBottom: 0.5,
            color: "#555", // Subtle color for text
            fontSize: "14px",
          }}
        >
          Selected Role: <strong>{value}</strong>
        </Typography>
      )}

      {/* Dropdown Component */}
      <Select
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        displayEmpty
        fullWidth
        size="small"
        sx={{
          backgroundColor: "#f9f9f9",
          borderRadius: "6px",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          border: "1px solid #ddd",
          "& .MuiSelect-select": {
            padding: "8px 12px", // Adjust padding for compact size
          },
          "&:hover": {
            borderColor: "#aaa",
          },
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
