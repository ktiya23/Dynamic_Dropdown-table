import React, { useState } from "react";
import {
  Box,
  Chip,
  MenuItem,
  Select,
  TextField,
  Button,
} from "@mui/material";

const MultipleDropdown = ({ options, value = [], onOptionsChange }) => {
  const [dropdownOptions, setDropdownOptions] = useState(options); // All dropdown options
  const [inputValue, setInputValue] = useState(""); // Input field value
  const [open, setOpen] = useState(false); // Dropdown open state

  // Handle adding a selected option
  const handleSelect = (selectedOption) => {
    if (!value.includes(selectedOption)) {
      onOptionsChange([...value, selectedOption]); // Add to selected values
    }
    setInputValue(""); // Clear the input field
  };

  // Handle removing a selected option
  const handleRemove = (option) => {
    onOptionsChange(value.filter((item) => item !== option));
  };

  // Add a custom new option
  const handleAddNewOption = () => {
    if (inputValue && !dropdownOptions.includes(inputValue)) {
      setDropdownOptions([...dropdownOptions, inputValue]); // Add to dropdown options
      onOptionsChange([...value, inputValue]); // Add to selected values
    }
    setInputValue(""); // Clear the input field
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
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        value={[]} // Always show empty value to avoid conflicts
        renderValue={() => null} // Prevent default rendering of value
        displayEmpty
        fullWidth
        size="small"
        sx={{
          backgroundColor: "#fff",
          borderRadius: "4px",
        }}
      >
        {/* Existing Options */}
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

        {/* Add New Option */}
        <Box
          sx={{
            margin: "8px 16px",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <TextField
            value={inputValue} // Controlled input
            onChange={(e) => setInputValue(e.target.value)} // Update input value
            placeholder="Add a new skill"
            size="small"
            fullWidth
          />
          <Button
            onClick={handleAddNewOption} // Add new option
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
