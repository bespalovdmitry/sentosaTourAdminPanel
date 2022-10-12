import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {SelectType} from "./VisaForm";

type PropsType = {
    inputLabel: string
    inputLabelId: string
    selectData: SelectType[]
    callBack: (value: any) => void
    value?: string | number
}
export default function BasicSelect(props: PropsType) {
    const handleChange = (event: SelectChangeEvent<string> | SelectChangeEvent<number>) => {
        props.callBack(event.target.value)
    };
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id={props.inputLabelId}>{props.inputLabel}</InputLabel>
                <Select
                    label={props.inputLabel}
                    value={String(props.value)}
                    onChange={handleChange}
                >
                    {props.selectData.map(el => <MenuItem key={el.id} value={el.value}>{el.select}</MenuItem>)}
                </Select>
            </FormControl>
        </Box>
    );
}
