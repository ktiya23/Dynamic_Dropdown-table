import React, { useState } from "react";
import {
  Box,
  Chip,
  MenuItem,
  Select,
  TextField,
  Button,
  Typography,
} from "@mui/material";

const MultipleDropdown = ({ options, value = [], onOptionsChange }) => {
  const [dropdownOptions, setDropdownOptions] = useState(options); // All available options
  const [inputValue, setInputValue] = useState(""); // For custom input
  const [open, setOpen] = useState(false); // To control the dropdown open/close state

  // Handle selection of an existing option
  const handleSelect = (selectedOption) => {
    if (!value.includes(selectedOption)) {
      onOptionsChange([...value, selectedOption]);
    }
  };

  // Handle removing a selected option
  const handleRemove = (option) => {
    onOptionsChange(value.filter((item) => item !== option));
  };

  // Add a new custom option
  const handleAddNewOption = () => {
    if (inputValue && !dropdownOptions.includes(inputValue)) {
      setDropdownOptions([...dropdownOptions, inputValue]); // Add to dropdown options
      handleSelect(inputValue); // Automatically select the newly added option
    }
    setInputValue(""); // Clear input field
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* Selected Chips */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          paddingBottom: 1,
        }}
      >
        {value.map((option) => (
          <Chip
            key={option}
            label={option}
            onDelete={() => handleRemove(option)}
            sx={{ backgroundColor: "#1976d2", color: "#fff" }}
          />
        ))}
      </Box>

      {/* Dropdown */}
      <Select
        multiple
        value={value} // Display selected values
        onChange={(e) => handleSelect(e.target.value)}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        renderValue={(selected) =>
          selected.length ? selected.join(", ") : "Select Skills"
        }
        displayEmpty
        fullWidth
        size="small"
        sx={{
          backgroundColor: "#fff",
          borderRadius: "4px",
        }}
      >
        {/* Dropdown Options */}
        {dropdownOptions.map((option) => (
          <MenuItem
            key={option}
            value={option}
            disabled={value.includes(option)} // Disable if already selected
            onClick={() => handleSelect(option)} // Handle selection
          >
            {option}
          </MenuItem>
        ))}

        {/* Divider & Add Input */}
        <Box
          sx={{
            margin: "8px 16px",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <TextField
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new option"
            size="small"
            fullWidth
          />
          <Button
            onClick={handleAddNewOption}
            variant="contained"
            size="small"
            sx={{
              textTransform: "none",
              backgroundColor: "#1976d2",
              ":hover": { backgroundColor: "#1565c0" },
            }}
          >
            Add Option
          </Button>
        </Box>
      </Select>
    </Box>
  );
};

export default MultipleDropdown;
