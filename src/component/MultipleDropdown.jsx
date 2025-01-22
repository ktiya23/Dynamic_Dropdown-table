import { Autocomplete, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const MultipleDropdown = ({ options, value, onChange, onAddOption }) => {
  const [newOption, setNewOption] = useState("");
  return (
    <div>
      <Autocomplete
        multiple
        options={options}
        value={value}
        onChange={(e, newValue) => onChange(newValue)}
        renderInput={(params) => <TextField {...params} label="Select Items" />}
      />

      <div style={{ marginTop: "8px" }}>
        <TextField
          value={newOption}
          onChange={(e) => setNewOption(e.target.value)}
          placeholder="Add new item"
        />
        <Button
          variant="contained"
          onClick={() => {
            onAddOption(newOption);
            setNewOption("");
          }}
          disabled={!newOption.trim()}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default MultipleDropdown;
