import React from 'react';
import {FormControlLabel, Grid, InputAdornment, Radio, RadioGroup, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import BasicSelect from "./BasicSelect";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {formSlice} from "../state/formReducer";
import {SelectType} from "./VisaForm";
import {v1} from "uuid";

type PropsType = {
    index: number
}

export const citizenship: SelectType[] = [
    {id: v1(), select: 'Россия', value: 'Россия'},
    {id: v1(), select: 'Казахстан', value: 'Казахстан'},
    {id: v1(), select: 'Белоруссия', value: 'Белоруссия'},
]
const maritalStatus: SelectType[] = [
    {id: v1(), select: 'Женат/замужем', value: 'Женат/замужем'},
    {id: v1(), select: 'Не замужем/не женат', value: 'Не замужем/не женат'},
    {id: v1(), select: 'Живу раздельно с супругой (-ом)', value: 'Живу раздельно с супругой (-ом)'},
    {id: v1(), select: 'Вдовец/вдова', value: 'Вдовец/вдова'},
    {id: v1(), select: 'Разведен(а)', value: 'Разведен(а)'},
]
const educationLevel: SelectType[] = [
    {id: v1(), select: 'Без образования', value: 'Без образования'},
    {id: v1(), select: 'Начальная школа', value: 'Начальная школа'},
    {id: v1(), select: 'Средняя школа', value: 'Средняя школа'},
    {id: v1(), select: 'Техникум', value: 'Техникум'},
    {id: v1(), select: 'Высшее', value: 'Высшее'},
    {id: v1(), select: 'Магистратура', value: 'Магистратура'},
]
const position: SelectType[] = [
    {id: v1(), select: 'Безработный', value: 'Безработный'},
    {id: v1(), select: 'Бизнесмен', value: 'Бизнесмен'},
    {id: v1(), select: 'Домохозяйка', value: 'Домохозяйка'},
    {id: v1(), select: 'Пенсионер', value: 'Пенсионер'},
    {id: v1(), select: 'Ребёнок/Младенец', value: 'Ребёнок/Младенец'},
    {id: v1(), select: 'Сотрудник офиса', value: 'Сотрудник офиса'},
    {id: v1(), select: 'Специалист', value: 'Специалист'},
    {id: v1(), select: 'Студент/Ученик', value: 'Студент/Ученик'},
]
const religion: SelectType[] = [
    {id: v1(), select: 'Христианство', value: 'Христианство'},
    {id: v1(), select: 'Мусульманство', value: 'Мусульманство'},
    {id: v1(), select: 'Буддизм', value: 'Буддизм'},
    {id: v1(), select: 'Индуизм', value: 'Индуизм'},
    {id: v1(), select: 'Неверующий', value: 'Неверующий'},
]

const BasicInformation = (props: PropsType) => {
    const applicants = useAppSelector(state => state.formReducer.applicants)
    const {setName, setGender, setCitizenship, setMaritalStatus, setEducation, setPosition, setIncome, setReligion} = formSlice.actions
    const dispatch = useAppDispatch()
    const changeCitizenship = (citizenship: string) => {
        dispatch(setCitizenship([String(props.index), citizenship]))
    }
    const changeMarital = (marital: string) => {
        dispatch(setMaritalStatus([String(props.index), marital]))
    }
    const changeEducation = (education: string) => {
        dispatch(setEducation([String(props.index), education]))
    }
    const changePosition = (position: string) => {
        dispatch(setPosition([String(props.index), position]))
    }
    const changeReligion = (religion: string) => {
        dispatch(setReligion([String(props.index), religion]))
    }
    return (
        <Grid container spacing={2} justifyContent={"flex-start"}>
            <Grid item xs={4}>
                <Box sx={{minWidth: 120}}>
                    <FormControl fullWidth>
                        <TextField
                            value={applicants[props.index].name}
                            id="name"
                            label="Полное имя"
                            variant="outlined"
                            placeholder={'IVANOV IVAN'}
                            onChange={event => dispatch(setName([String(props.index), event.currentTarget.value]))}
                        />
                    </FormControl>
                </Box>
            </Grid>
            <Grid item xs={2} sx={{alignSelf: 'center'}}>
                <Box sx={{minWidth: 120}}>
                    <FormControl fullWidth>
                        <RadioGroup
                            value={applicants[props.index].gender}
                            sx={{justifyContent: 'space-around'}}
                            row
                            aria-labelledby="gender-radio-buttons-group-label"
                            name="gender-row-radio-buttons-group"
                            onChange={(event) => dispatch(setGender([String(props.index), event.currentTarget.value]))}
                        >
                            <FormControlLabel value="female" control={<Radio/>} label="Жен"/>
                            <FormControlLabel value="male" control={<Radio/>} label="Муж"/>
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Grid>
            <Grid item xs={3}>
                <Box sx={{minWidth: 120}}>
                    <FormControl fullWidth>
                        <BasicSelect
                            value={applicants[props.index].citizenship}
                            inputLabel={'Гражданство'}
                            inputLabelId={'citizenship-label-id'}
                            callBack={changeCitizenship}
                            selectData={citizenship}
                        />
                    </FormControl>
                </Box>
            </Grid>
            <Grid item xs={3}>
                <Box sx={{minWidth: 120}}>
                    <FormControl fullWidth>
                        <BasicSelect
                            value={applicants[props.index].maritalStatus}
                            inputLabel={'Семейное положение'}
                            inputLabelId={'marital-status-label-id'}
                            callBack={changeMarital}
                            selectData={maritalStatus}/>
                    </FormControl>
                </Box>
            </Grid>
            <Grid item xs={3}>
                <Box sx={{minWidth: 120}}>
                    <FormControl fullWidth>
                        <BasicSelect
                            value={applicants[props.index].education}
                            inputLabel={'Образование'}
                            inputLabelId={'education-label-id'}
                            callBack={changeEducation}
                            selectData={educationLevel}/>
                    </FormControl>
                </Box>
            </Grid>
            <Grid item xs={3}>
                <Box sx={{minWidth: 120}}>
                    <FormControl fullWidth>
                        <BasicSelect
                            value={applicants[props.index].position}
                            inputLabel={'Занимаемая должность'}
                            inputLabelId={'position-status-label-id'}
                            callBack={changePosition}
                            selectData={position}/>
                    </FormControl>
                </Box>
            </Grid>
            <Grid item xs={3}>
                <Box sx={{minWidth: 120}}>
                    <FormControl fullWidth>
                        <TextField id="income"
                                   label="Годовой доход в S$"
                                   variant="outlined"
                                   placeholder={'24000'}
                                   onChange={event => dispatch(setIncome([props.index, Number(event.currentTarget.value)]))}
                                   value={applicants[props.index].income}
                                   InputProps={{
                                       startAdornment: <InputAdornment position="start">SGD</InputAdornment>,
                                   }}
                        />
                    </FormControl>
                </Box>
            </Grid>
            <Grid item xs={3}>
                <Box sx={{minWidth: 120}}>
                    <FormControl fullWidth>
                        <BasicSelect
                            value={applicants[props.index].religion}
                            inputLabel={'Вероисповедание'}
                            inputLabelId={'religion-label-id'}
                            callBack={changeReligion}
                            selectData={religion}/>
                    </FormControl>
                </Box>
            </Grid>
        </Grid>
    );
};

export default BasicInformation;