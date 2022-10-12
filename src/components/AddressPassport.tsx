import React from 'react';
import {Grid, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import BasicSelect from "./BasicSelect";
import {citizenship} from "./BasicInformation";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {formSlice} from "../state/formReducer";
import {SelectType} from "./VisaForm";
import {v1} from "uuid";

type PropsType = {
    index: number
}

export const countries: SelectType[] = [
    {id: v1(), select: 'Россия', value: 'Россия'},
    {id: v1(), select: 'Казахстан', value: 'Казахстан'},
    {id: v1(), select: 'Белоруссия', value: 'Белоруссия'},
]
const AddressPassport = (props: PropsType) => {
    const applicants = useAppSelector(state => state.formReducer.applicants)
    const dispatch = useAppDispatch()
    const {setAddress, setCity, setPostCode, setCountry} = formSlice.actions
    const changeCountry = (country: string) => {
        dispatch(setCountry([String(props.index), country]))
    }
    return (
        <Grid container spacing={1} justifyContent={"flex-start"}>
            <Grid item xs={4}>
                <Box sx={{minWidth: 120}}>
                    <FormControl fullWidth>
                        <TextField id="homeAddress" label="Адрес" variant="outlined"
                                   placeholder={'Name st., House, Apt'}
                                   onChange={event => dispatch(setAddress([String(props.index), event.currentTarget.value]))}
                                   value={applicants[props.index].homeAddress}
                        />
                    </FormControl>
                </Box>
            </Grid>
            <Grid item xs={3}>
                <Box sx={{minWidth: 120}}>
                    <FormControl fullWidth>
                        <TextField id="name" label="Город" variant="outlined"
                                   placeholder={'Moscow'}
                                   onChange={event => dispatch(setCity([String(props.index), event.currentTarget.value]))}
                                   value={applicants[props.index].city}
                        />
                    </FormControl>
                </Box>
            </Grid>
            <Grid item xs={3}>
                <Box sx={{minWidth: 120}}>
                    <FormControl fullWidth>
                        <BasicSelect
                            value={applicants[props.index].country}
                            inputLabel={'Страна'}
                            inputLabelId={'citizenship-label-id'}
                            callBack={changeCountry}
                            selectData={countries}/>
                    </FormControl>
                </Box>
            </Grid>
            <Grid item xs={2}>
                <Box sx={{minWidth: 120}}>
                    <FormControl fullWidth>
                        <TextField id="name" label="Индекс" variant="outlined"
                                   placeholder={'100200'}
                                   onChange={event => dispatch(setPostCode([props.index, Number(event.currentTarget.value)]))}
                                   value={applicants[props.index].postCode}
                        />
                    </FormControl>
                </Box>
            </Grid>
        </Grid>
    );
};

export default AddressPassport;