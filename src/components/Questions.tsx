import React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import {FormControlLabel, Grid, Radio, RadioGroup, Stack, TextareaAutosize, TextField} from "@mui/material";
import {formSlice} from "../state/formReducer";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import AddressPassport from "./AddressPassport";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, {Dayjs} from "dayjs";
import BasicSelect from "./BasicSelect";
import BasicInformation, {citizenship} from "./BasicInformation";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ApplicantPassportData from "./ApplicantPassportData";
import PeriodStay from "./PeriodStay";

type PropsType = {
    index: number
}
const Questions = (props: PropsType) => {
    const {setLived, setLivedCount, setDeparture, setConvicted} = formSlice.actions
    const dispatch = useAppDispatch()
    const applicants = useAppSelector(state => state.formReducer.applicants)
    const [value, setValue] = React.useState<Dayjs | null>(
        null,
    );

    const handleChange = (newValue: Dayjs | null) => {
        setValue(newValue);
    };
    return (
        <>
            <Typography variant={"body1"} sx={{mb: 1, mt: 2}}>За последние 5 лет проживали ли Вы в
                странах, отличных
                от страны постоянного проживания, в течение одного года или более?</Typography>
            <Box sx={{minWidth: 120}}>
                <FormControl fullWidth>
                    <RadioGroup
                        sx={{justifyContent: 'flex-start'}}
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onChange={(event) => {
                            dispatch(setLived([String(props.index), event.currentTarget.value]))
                            if (applicants[props.index].lived === "Lived in other countries") {
                                dispatch(setLivedCount([props.index, 0]))
                            }
                            else {
                                dispatch(setLivedCount([props.index, applicants[props.index].livedCount + 1]))
                            }
                        }}
                        value={applicants[props.index].lived}
                    >
                        <FormControlLabel value="No lived in other countries" control={<Radio/>} label="Нет"
                        />
                        <FormControlLabel value="Lived in other countries" control={<Radio/>} label="Да"/>
                    </RadioGroup>
                    <Box>
                        {(() => {
                            const arr = [];
                            for (let i = 0; i < applicants[props.index].livedCount; i++) {
                                arr.push(
                                    <Grid container spacing={2} justifyContent={"flex-start"}>
                                        <Grid item xs={3}>
                                            <Box sx={{minWidth: 120}}>
                                                <FormControl fullWidth>
                                                    <BasicSelect
                                                        value={applicants[props.index].citizenship}
                                                        inputLabel={'Страна'}
                                                        inputLabelId={'citizenship-label-id'}
                                                        callBack={() => {}}
                                                        selectData={citizenship}
                                                    />
                                                </FormControl>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <Box sx={{minWidth: 80}}>
                                                <FormControl fullWidth>
                                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                        <DatePicker
                                                            views={["year"]}
                                                            label="c"
                                                            value={value}
                                                            onChange={handleChange}
                                                            renderInput={(params) => <TextField {...params} />}
                                                        />
                                                    </LocalizationProvider>
                                                </FormControl>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <IconButton aria-label="delete" size="large"
                                                        onClick={() => dispatch(setLivedCount([props.index, applicants[props.index].livedCount + 1]))}>
                                                <AddBoxIcon fontSize="inherit" />
                                            </IconButton>
                                            <IconButton aria-label="delete" size="large"
                                                        onClick={() => dispatch(setLivedCount([props.index, applicants[props.index].livedCount - 1]))}
                                            >
                                                <DeleteIcon fontSize="inherit" />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                );
                            }
                            return arr;
                        })()}
                    </Box>
                </FormControl>
            </Box>
            <Typography variant={"body1"} sx={{mb: 1, mt: 2}}>Депортировали ли Вас когда-либо за пределы
                Сингапура или другой страны?</Typography>
            <Box sx={{minWidth: 120}}>
                <FormControl fullWidth>
                    <RadioGroup
                        value={applicants[props.index].departure}
                        sx={{justifyContent: 'flex-start'}}
                        row
                        aria-labelledby="departure-row-radio-buttons-group-label"
                        name="departure-radio-buttons-group"
                        onChange={event => dispatch(setDeparture([String(props.index), event.currentTarget.value]))}
                    >
                        <FormControlLabel value="No departure" control={<Radio/>} label="Нет"/>
                        <FormControlLabel value="Departure" control={<Radio/>} label="Да"/>
                    </RadioGroup>
                    {applicants[props.index].departure === 'Departure' &&
                        <TextField
                            variant={'outlined'}
                        multiline
                        rows={3}
                            maxRows={20}
                        placeholder="Укажите подробности и дату депортации"
                        style={{ width: '100%' }}
                    />
                    }
                </FormControl>
            </Box>
            <Typography variant={"body1"} sx={{mb: 1, mt: 2}}>Были ли Вы когда-либо осуждены в
                какой-либо стране, включая Сингапур?</Typography>
            <Box sx={{minWidth: 120}}>
                <FormControl fullWidth>
                    <RadioGroup
                        value={applicants[props.index].convicted}
                        sx={{justifyContent: 'flex-start'}}
                        row
                        aria-labelledby="convicted-row-radio-buttons-group-label"
                        name="convicted-radio-buttons-group"
                        onChange={event => dispatch(setConvicted([String(props.index), event.currentTarget.value]))}
                    >
                        <FormControlLabel value="No convicted" control={<Radio/>} label="Нет"/>
                        <FormControlLabel value="Convicted" control={<Radio/>} label="Да"/>
                    </RadioGroup>
                    {applicants[props.index].convicted === 'Convicted' &&
                        <TextField
                            variant={'outlined'}
                            multiline
                            rows={3}
                            maxRows={20}
                            placeholder="Укажите подробности"
                            style={{ width: '100%' }}
                        />
                    }
                </FormControl>
            </Box>
            <Typography variant={"body1"} sx={{mb: 1, mt: 2}}>Получали ли Вы когда-либо отказ во въезде
                в Сингапур?</Typography>
            <Box sx={{minWidth: 120}}>
                <FormControl fullWidth>
                    <RadioGroup
                        sx={{justifyContent: 'flex-start'}}
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio/>} label="Нет"/>
                        <FormControlLabel value="male" control={<Radio/>} label="Да"/>
                    </RadioGroup>
                </FormControl>
            </Box>
            <Typography variant={"body1"} sx={{mb: 1, mt: 2}}>Вы въезжали когда-нибудь в Сингапур,
                используя другое имя и паспорт?</Typography>
            <Box sx={{minWidth: 120}}>
                <FormControl fullWidth>
                    <RadioGroup
                        sx={{justifyContent: 'flex-start'}}
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio/>} label="Нет"/>
                        <FormControlLabel value="male" control={<Radio/>} label="Да"/>
                    </RadioGroup>
                </FormControl>
            </Box>
        </>
    );
};

export default Questions;