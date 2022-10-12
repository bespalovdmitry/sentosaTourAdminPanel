import React from 'react';
import {Grid, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {formSlice} from "../state/formReducer";

type PropsType = {
    index: number
}

const PeriodStay = (props: PropsType) => {
    const applicants = useAppSelector(state => state.formReducer.applicants)
    const {setFlightTo, setFlightOut, setArrivalDate, setDepartureDate} = formSlice.actions
    const dispatch = useAppDispatch()
    return (
        <Grid container spacing={1} justifyContent={"flex-start"}>
            <Grid item xs={3}>
                <Box sx={{minWidth: 120}}>
                    <FormControl fullWidth>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Дата прибытия"
                                value={applicants[props.index].arrivalDate}
                                onChange={(newValue) => {
                                    dispatch(setArrivalDate([String(props.index), newValue]))
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </FormControl>
                </Box>
            </Grid>
            <Grid item xs={3}>
                <Box sx={{minWidth: 120}}>
                    <FormControl fullWidth>
                        <TextField id="name" label="Номер рейса в Сингапур" variant="outlined"
                                   placeholder={'TR001'}
                                   onChange={event => dispatch(setFlightTo([String(props.index), event.currentTarget.value]))}
                                   value={applicants[props.index].flightTo}
                        />
                    </FormControl>
                </Box>
            </Grid>
            <Grid item xs={3}>
                <Box sx={{minWidth: 120}}>
                    <FormControl fullWidth>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Дата убытия"
                                value={applicants[props.index].departureDate}
                                onChange={(newValue) => {
                                    dispatch(setDepartureDate([String(props.index), newValue]))
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </FormControl>
                </Box>
            </Grid>
            <Grid item xs={3}>
                <Box sx={{minWidth: 120}}>
                    <FormControl fullWidth>
                        <TextField id="name" label="Номер рейса из Сингапура" variant="outlined"
                                   placeholder={'TR002'}
                                   onChange={event => dispatch(setFlightOut([String(props.index), event.currentTarget.value]))}
                                   value={applicants[props.index].flightOut}
                        />
                    </FormControl>
                </Box>
            </Grid>
        </Grid>
    );
};

export default PeriodStay;