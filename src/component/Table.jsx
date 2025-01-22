import React, { useState } from 'react'
import {MuiTable, TableBody, TableCell, TableHead, TableRow , Button} from "@mui/material"
import SingleDrodown from './SingleDrodown'
import MultipleDropdown from './MultipleDropdown'

const Table = () => {
    const [rows , setRows] = useState([{id:1, singleSelect:"", multiSelect:""}])
    const [ singleOptions , setSingleOptions] = useState([ "Option 1" , "Option 2" , "Option 3" ])
    const [ multiOptions , setMultiOptions] = useState([ "Item A" , "Item B" , "Item C" ])

    const addRow=()=>{
      setRows([...rows,{id:rows.length+1,singleSelect:"" , multiSelect:[]}])
    }

    const updateRow =(id ,field , value)=>{
      setRows((prev)=>
        prev.map((row)=> (row.id===id)?{...row, [field]:value}:row)
      )
    }
  return (
    <div>
      <MuiTable>
        <TableHead>
            <TableRow>
                <TableCell> Label 1</TableCell>
                <TableCell> Label 2</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {
                rows.map((row,)=>(
                    <TableRow key={row.id} >
                        <TableCell>
                            <SingleDrodown options={singleOptions.filter((opt)=> !rows.some((r)=> r.singleSelect))} value={row.singleSelect} onChange={(value)=>updateRow(row.id, "singleSelect" , value)}  />
                        </TableCell>
                        <TableCell>
                          <MultipleDropdown options={multiOptions} value={row.multiSelect} onChange={(value)=>updateRow(row.id, "multiSelect" , value)} onAddOption={(newOption)=> setMultiOptions([...multiOptions,newOption])}  />
                        </TableCell>
                    </TableRow>
                ))}
        </TableBody>
        <Button variant='contained' onClick={addRow} >
              ADD  
        </Button>
      </MuiTable>
    </div>
  )
}

export default Table
