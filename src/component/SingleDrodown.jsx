import { MenuItem, Select } from '@mui/material'
import React from 'react'

const SingleDrodown = ({options , value , onChange}) => {
  return (
    <Select value={value} onChange={(e)=> onChange(e.target.value)} >
        <MenuItem value="" disabled>
            Select an option 
        </MenuItem>
        {
            options.map((option)=>(
                <MenuItem key={option}>{option}</MenuItem>
            ))
        }
    </Select>
  )
}

export default SingleDrodown
