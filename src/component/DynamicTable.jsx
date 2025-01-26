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
  Slider,
} from "@mui/material";
import SingleDropdown from "./SingleDropdown";
import MultipleDropdown from "./MultipleDropdown";

const DynamicTable = () => {
  const [rows, setRows] = useState([
    { id: 1, singleSelect: "", multiSelect: [], proficiency: {} },
  ]);
  const [singleOptions, setSingleOptions] = useState([
    "Manager",
    "Developer",
    "Designer",
    "Intern",
  ]);
  const [multiOptions, setMultiOptions] = useState([
    "React",
    "JavaScript",
    "Node.js",
    "MongoDB",
  ]);

  // Add a new row
  const addRow = () => {
    setRows([
      ...rows,
      { id: rows.length + 1, singleSelect: "", multiSelect: [], proficiency: {} },
    ]);
  };

  // Update a specific row's data
  const updateRow = (id, field, value) => {
    setRows((prev) =>
      prev.map((row) =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );
  };

  // Update proficiency for a skill
  const updateProficiency = (rowId, skill, value) => {
    setRows((prev) =>
      prev.map((row) =>
        row.id === rowId
          ? {
              ...row,
              proficiency: {
                ...row.proficiency,
                [skill]: value,
              },
            }
          : row
      )
    );
  };

  return (
    <Box
      sx={{
        padding: "16px",
        maxWidth: "1000px",
        margin: "0 auto",
        marginTop: "50px",
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
            <TableCell
              sx={{
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "20px",
              }}
            >
              Role
            </TableCell>
            <TableCell
              sx={{
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "20px",
              }}
            >
              Skills
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <SingleDropdown
                  options={singleOptions.filter(
                    (opt) => !rows.some((r) => r.singleSelect === opt)
                  )}
                  value={row.singleSelect}
                  onChange={(value) => updateRow(row.id, "singleSelect", value)}
                />
              </TableCell>

              <TableCell>
                <MultipleDropdown
                  options={multiOptions}
                  value={row.multiSelect}
                  onOptionsChange={(value) =>
                    updateRow(row.id, "multiSelect", value)
                  }
                />

                {row.multiSelect.map((skill) => (
                  <Box key={skill} sx={{ marginTop: "16px" }}>
                    <Typography>{skill} Proficiency:</Typography>
                    <Slider
                      value={row.proficiency[skill] || 50}
                      onChange={(e, newValue) =>
                        updateProficiency(row.id, skill, newValue)
                      }
                      step={10}
                      marks
                      min={0}
                      max={100}
                      valueLabelDisplay="auto"
                      sx={{ width: "80%" }}
                    />
                  </Box>
                ))}
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
