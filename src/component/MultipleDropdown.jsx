import React, { useState } from "react";
import { Autocomplete, Button, TextField, Box } from "@mui/material";

const MultipleDropdown = ({ options, value, onChange, onAddOption }) => {
  const [newOption, setNewOption] = useState("");

  return (
    <Box>
      {/* Multi-select Dropdown */}
      <Autocomplete
        multiple
        options={options}
        value={value}
        onChange={(e, newValue) => onChange(newValue)}
        renderInput={(params) => <TextField {...params} label="Select Skills" />}
        fullWidth
        sx={{
          backgroundColor: "#fff",
          borderRadius: "4px",
        }}
      />

      {/* Add New Skill Input */}
      <Box sx={{ display: "flex", gap: "8px", marginTop: "8px" }}>
        <TextField
          value={newOption}
          onChange={(e) => setNewOption(e.target.value)}
          placeholder="Add new skill"
          fullWidth
          size="small"
          sx={{
            backgroundColor: "#fff",
          }}
        />
        <Button
          variant="contained"
          onClick={() => {
            if (newOption.trim()) {
              onAddOption(newOption.trim());
              setNewOption("");
            }
          }}
          disabled={!newOption.trim()}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default MultipleDropdown;
