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
        padding: "24px",
        maxWidth: "800px",
        margin: "0 auto",
        marginTop: "50px",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        textAlign="center"
        color="#333"
        fontWeight="bold"
        mb={2}
      >
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
                fontSize: "16px",
              }}
            >
              Role
            </TableCell>
            <TableCell
              sx={{
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "16px",
              }}
            >
              Skills & Proficiency
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} sx={{ backgroundColor: "#f9f9f9" }}>
              <TableCell sx={{ textAlign: "center" }}>
                <SingleDropdown
                  options={singleOptions.filter(
                    (opt) => !rows.some((r) => r.singleSelect === opt)
                  )}
                  value={row.singleSelect}
                  onChange={(value) => updateRow(row.id, "singleSelect", value)}
                />
              </TableCell>

              <TableCell>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <MultipleDropdown
                    options={multiOptions}
                    value={row.multiSelect}
                    onOptionsChange={(value) =>
                      updateRow(row.id, "multiSelect", value)
                    }
                  />

                  {/* Loop through each selected skill and render its proficiency */}
                  {row.multiSelect.map((skill) => (
                    <Box key={skill} sx={{ marginTop: "8px" }}>
                      {/* Proficiency heading for each skill */}
                      <Typography variant="body2" color="#555">
                        {skill} Proficiency:
                      </Typography>

                      {/* Slider for each skill's proficiency */}
                      <Slider
                        value={row.proficiency[skill] || 50}
                        onChange={(e, newValue) =>
                          updateProficiency(row.id, skill, newValue)
                        }
                        step={1}
                        marks
                        min={0}
                        max={10}
                        valueLabelDisplay="auto"
                        sx={{
                          width: "50%",
                          color: "#1976d2",
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box textAlign="center">
        <Button
          variant="contained"
          onClick={addRow}
          sx={{
            marginTop: "20px",
            backgroundColor: "#1976d2",
            ":hover": { backgroundColor: "#1565c0" },
            padding: "10px 20px",
            fontWeight: "bold",
          }}
        >
          Add Row
        </Button>
      </Box>
    </Box>
  );
};

export default DynamicTable;
