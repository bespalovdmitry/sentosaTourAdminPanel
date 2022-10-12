import React from 'react';
import {Grid, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import BasicSelect from "./BasicSelect";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {Dayjs} from "dayjs";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {formSlice} from "../state/formReducer";
import {SelectType} from "./VisaForm";
import {v1} from "uuid";

type PropsType = {
    index: number
}

export const countryAuthority: SelectType[] = [
    {id: v1(), select: 'Россия', value: 'Россия'},
    {id: v1(), select: 'Казахстан', value: 'Казахстан'},
    {id: v1(), select: 'Белоруссия', value: 'Белоруссия'},
]
const ApplicantPassportData = (props: PropsType) => {
    const applicants = useAppSelector(state => state.formReducer.applicants)
    const {setPassportNumber, setPassportAuthority, setDateIssue, setDateExpiry, setDateBirth} = formSlice.actions
    const dispatch = useAppDispatch()

    const changePassportAuthority = (passportAuthority: string) => {
        dispatch(setPassportAuthority([String(props.index), passportAuthority]))
    }
    return (
        <Grid container spacing={2} justifyContent={"flex-start"}>
            <Grid item xs={2}>
                <Box sx={{minWidth: 120}}>
                    <FormControl fullWidth>
                        <TextField id="passportNumber"
                                   label="Номер паспорта"
                                   variant="outlined"
                                   placeholder={'12098890'}
                                   onChange={event => dispatch(setPassportNumber([String(props.index), event.currentTarget.value]))}
                                   value={applicants[props.index].passportNumber}
                        />
                    </FormControl>
                </Box>
            </Grid>
            <Grid item xs={2}>
                <Box sx={{minWidth: 120}}>
                    <FormControl fullWidth>
                        <TextField id="authority" label="Орган выдавший паспорт" variant="outlined"
                                   placeholder={'MVD20986'}
                                   onChange={event => dispatch(setPassportAuthority([String(props.index), event.currentTarget.value]))}
                                   value={applicants[props.index].passportAuthority}
                        />
                    </FormControl>
                </Box>
            </Grid>
            <Grid item xs={2}>
                <Box sx={{minWidth: 120}}>
                    <FormControl fullWidth>
                        <BasicSelect
                            value={applicants[props.index].passportAuthority}
                            inputLabel={'Страна выдачи'}
                            inputLabelId={'citizenship-label-id'}
                            callBack={changePassportAuthority}
                            selectData={countryAuthority}/>
                    </FormControl>
                </Box>
            </Grid>
            <Grid item xs={2}>
                <Box sx={{minWidth: 120}}>
                    <FormControl fullWidth>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                inputFormat="MM/DD/YYYY"
                                label="Дата выдачи"
                                value={applicants[props.index].dateIssue}
                                onChange={(newValue) => {
                                    if (newValue) {
                                        return (dispatch(setDateIssue([String(props.index), newValue.toString()])))
                                    }
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </FormControl>
                </Box>
            </Grid>
            <Grid item xs={2}>
                <Box sx={{minWidth: 120}}>
                    <FormControl fullWidth>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Дата окончания"
                                value={applicants[props.index].dateExpiry}
                                onChange={(newValue) => {
                                    if (newValue) {
                                        return (dispatch(setDateExpiry([String(props.index), newValue.toString()])))
                                    }
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </FormControl>
                </Box>
            </Grid>
            <Grid item xs={2}>
                <Box sx={{minWidth: 120}}>
                    <FormControl fullWidth>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Дата рождения"
                                value={applicants[props.index].dateBirth}
                                onChange={(newValue) => {
                                    if (newValue) {
                                        return dispatch(setDateBirth([String(props.index), newValue.toString()]))
                                    }
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </FormControl>
                </Box>
            </Grid>
        </Grid>
    );
};

export default ApplicantPassportData;