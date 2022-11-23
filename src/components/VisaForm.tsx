import React from 'react';
import {Container, CssBaseline, Divider, Grid, TextField} from "@mui/material";
import {v1} from "uuid";
import BasicSelect from "./BasicSelect";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import BasicTabs from "./BasicTabs";
import {formSlice} from "../state/formSlice";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import Button from "@mui/material/Button";
import { collection, addDoc } from "firebase/firestore";
import {db} from "../firebase/firebase";

export type SelectType = {
    id: string
    select: string
    value: number | string
}
const visaService: SelectType[] = [
    {id: v1(), select: 'Виза с отелем (3-4 рабочих дня) 60 USD', value: 'Виза с отелем (3-4 рабочих дня) 60 USD'},
    {id: v1(), select: 'Виза без отеля (3-4 рабочих дня) 80 USD', value: 'Виза без отеля (3-4 рабочих дня) 80 USD'},
    {
        id: v1(),
        select: 'Срочная виза с отелем (1-2 рабочих дня) 100 USD',
        value: 'Срочная виза с отелем (1-2 рабочих дня) 100 USD'
    },
    {
        id: v1(),
        select: 'Срочная виза без отеля (1-2 рабочих дня) 120 USD',
        value: 'Срочная виза без отеля (1-2 рабочих дня) 120 USD'
    },
]
const applicantCount: SelectType[] = [
    {id: v1(), select: '1', value: 1},
    {id: v1(), select: '2', value: 2},
    {id: v1(), select: '3', value: 3},
    {id: v1(), select: '4', value: 4},
    {id: v1(), select: '5', value: 5},
]
const visit: SelectType[] = [
    {id: v1(), select: 'Туризм', value: 'Туризм'},
    {id: v1(), select: 'Транзит', value: 'Транзит'},
    {id: v1(), select: 'Круиз', value: 'Круиз'},
]


const VisaForm = () => {
    const rootApplicant = useAppSelector(state => state.formReducer)

    const {
        setApplicantCount,
        setEmail,
        setService,
        setPrice,
        setTel,
        setVisit,
        setOrderId,
    } = formSlice.actions
    const dispatch = useAppDispatch()

    const changeApplicantCount = (value: number) => {
        const appId = v1()
        dispatch(setApplicantCount(Number(value)))
        dispatch(setOrderId(appId))
    }
    const changeService = (service: string) => {
        dispatch(setService(service))
        if (service === 'Виза с отелем (3-4 рабочих дня) 60 USD') {
            dispatch(setPrice(60))
        }
        if (service === 'Виза без отеля (3-4 рабочих дня) 80 USD') {
            dispatch(setPrice(80))
        }
        if (service === 'Срочная виза с отелем (1-2 рабочих дня) 100 USD') {
            dispatch(setPrice(100))
        }
        if (service === 'Срочная виза без отеля (1-2 рабочих дня) 120 USD') {
            dispatch(setPrice(120))
        }
    }
    const changeVisit = (visit: string) => {
        dispatch(setVisit(visit))
    }
    const onClickHandler = async () => {
        try {
            const docRef = await addDoc(collection(db, "visaApplications"), {
                applications: rootApplicant
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth={"xl"}>
                <Grid container spacing={2} justifyContent={"flex-end"}>
                    <Grid item xs={4}>
                        <BasicSelect
                            value={rootApplicant.service}
                            inputLabel={'Выберите услугу'}
                            inputLabelId={'service-label-id'}
                            callBack={changeService}
                            selectData={visaService}/>
                    </Grid>
                    <Grid item xs>
                        <BasicSelect
                            value={rootApplicant.applicantCount}
                            inputLabel={'Количество заявителей'}
                            inputLabelId={'applicant-label-id'}
                            callBack={changeApplicantCount}
                            selectData={applicantCount}/>
                    </Grid>
                    <Grid item xs>
                        <BasicSelect
                            value={rootApplicant.visit}
                            inputLabel={'Цель визита'}
                            inputLabelId={'visit-label-id'}
                            callBack={changeVisit}
                            selectData={visit}/>
                    </Grid>
                    <Grid item xs>
                        <Box sx={{minWidth: 120}}>
                            <FormControl fullWidth>
                                <TextField
                                    value={rootApplicant.email}
                                    id="email"
                                    onChange={(event) => dispatch(setEmail(event.currentTarget.value))}
                                    label="Адрес электронной почты"
                                    variant="outlined"
                                    placeholder={'user@mail.com'}/>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs>
                        <Box sx={{minWidth: 120}}>
                            <FormControl fullWidth>
                                <TextField
                                    value={rootApplicant.tel}
                                    id="tel"
                                    label="Контактный номер телефона"
                                    variant="outlined"
                                    onChange={(event) => dispatch(setTel(Number(event.currentTarget.value)))}
                                    placeholder={'79001234567'}/>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs>
                        <Box sx={{minWidth: 120}}>
                            <FormControl fullWidth>
                                <Button
                                    onClick={onClickHandler}
                                >
                                    SEND
                                </Button>
                            </FormControl>
                        </Box>
                    </Grid>
                </Grid>
                <Divider variant={"fullWidth"} sx={{mt: 2, mb: 3}}/>
                <BasicTabs/>
            </Container>

        </React.Fragment>
    );
};

export default VisaForm;