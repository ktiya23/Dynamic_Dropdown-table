import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Box,
  Typography,
  TextField,
} from "@mui/material";
import SingleDropdown from "./SingleDropdown";
import MultipleDropdown from "./MultipleDropdown";

const DynamicTable = () => {
  const [rows, setRows] = useState([{ id: 1, singleSelect: "", multiSelect: [] }]);
  const [singleOptions, setSingleOptions] = useState(["Manager", "Developer", "Designer","Intern"]);
  const [multiOptions, setMultiOptions] = useState(["React", "JavaScript", "Node.js","MongoDb",]);

  // Add new row
  const addRow = (e) => {
    setRows([...rows, { id: rows.length + 1, singleSelect: "", multiSelect: [] }]);
  };

  // Update row data
  const updateRow = (id, field, value) => {
    setRows((prev) =>
      prev.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  return (
    <Box
      sx={{
        padding: "16px",
        maxWidth: "800px",
        margin: "0 auto",
        marginTop:"50px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <Typography variant="h5" gutterBottom textAlign="center" color="#333">
        Employee Skill Management
      </Typography>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#1976d2" }}>
            <TableCell sx={{ color: "#fff", fontWeight: "bold", textAlign:"center",  fontSize:"20px" }}>Role</TableCell>
            <TableCell sx={{ color: "#fff", fontWeight: "bold",textAlign:"center", fontSize:"20px" }}>Skills</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {/* Role Dropdown */}
              <TableCell>
                <SingleDropdown
                  options={singleOptions.filter(
                    (opt) => !rows.some((r) => r.singleSelect === opt)
                  )}
                  value={row.singleSelect}
                  onChange={(value) => updateRow(row.id, "singleSelect", value)}
                />
                <TextField
                  value={row.singleSelect || ""}
                  variant="outlined"
                  size="small"
                  sx={{ marginTop: "8px", width: "100%" }}
                  disabled
                />
              </TableCell>

              {/* Skills Dropdown */}
              <TableCell>
                <MultipleDropdown
                  options={multiOptions}
                  value={row.multiSelect}
                  onChange={(value) => updateRow(row.id, "multiSelect", value)}
                  onAddOption={(newOption) => {
                    setMultiOptions((prev) => [...prev, newOption]);
                    updateRow(row.id, "multiSelect", [...row.multiSelect, newOption]);
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        variant="contained"
        onClick={addRow}
        sx={{
          marginTop: "16px",
          backgroundColor: "#1976d2",
          ":hover": { backgroundColor: "#1565c0" },
        }}
      >
        Add Row
      </Button>
    </Box>
  );
};

export default DynamicTable;
