import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {FormControlLabel, Grid, Radio, RadioGroup, Stack, TextField} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import BasicSelect from "./BasicSelect";
import {Dayjs} from "dayjs";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import Button from "@mui/material/Button";
import {useAppSelector} from "../hooks/hooks";
import BasicInformation, {citizenship} from "./BasicInformation";
import ApplicantPassportData from "./ApplicantPassportData";
import AddressPassport from "./AddressPassport";
import PeriodStay from "./PeriodStay";
import Questions from "./Questions";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [date, setDate] = React.useState<Dayjs | null>(null);
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const applicantCount = useAppSelector(state => state.formReducer.applicantCount)
    return (
        <Box sx={{width: '100%'}}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    return (
                    {(() => {
                        const arr = [];
                        for (let i = 0; i < applicantCount; i++) {
                            arr.push(
                                <Tab label={`Заявитель ${i + 1}`} {...a11yProps(0)} />
                            );
                        }
                        return arr;
                    })()}
                    )
                </Tabs>
            </Box>
            {(() => {
                const arr = [];
                for (let i = 0; i < applicantCount; i++) {
                    arr.push(
                        <TabPanel value={value} index={i}>
                            <Typography variant={"h4"} sx={{mb: 1}}>1. Основные сведения</Typography>
                            <BasicInformation index={i} />
                            <Typography variant={"h5"} sx={{mb: 1, mt: 2}}>Паспортные данные</Typography>
                            <ApplicantPassportData index={i}/>
                            <Typography variant={"h5"} sx={{mb: 1, mt: 2}}>Адрес места жительства по
                                паспорту</Typography>
                            <AddressPassport index={i} />
                            <Typography variant={"h5"} sx={{mb: 1, mt: 2}}>Пребывание в Сингапуре</Typography>
                            <PeriodStay index={i} />
                            <Questions index={i} />
                            <Typography variant={"h5"} sx={{mb: 1, mt: 2}}>ФАЙЛЫ ДЛЯ ЗАГРУЗКИ</Typography>
                            <Grid container spacing={1} justifyContent={"flex-start"}>
                                <Grid item xs={6}>
                                    <Box sx={{minWidth: 120}}>
                                        <Typography variant={"body1"} sx={{mb: 1, mt: 2}}>Копия паспорта (со сроком
                                            окончания действия не менее 6 месяцев)</Typography>
                                        <Stack direction="row" alignItems="center" spacing={2}>
                                            <Button variant="contained" component="label">
                                                Выбрать файл
                                                <input hidden accept="image/*" multiple type="file"/>
                                            </Button>
                                        </Stack>
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box sx={{minWidth: 120}}>
                                        <Typography variant={"body1"} sx={{mb: 1, mt: 2}}>Цветная фотография студийного
                                            качества</Typography>
                                        <Stack direction="row" alignItems="center" spacing={2}>
                                            <Button variant="contained" component="label">
                                                Выбрать файл
                                                <input hidden accept="image/*" multiple type="file"/>
                                            </Button>
                                        </Stack>
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box sx={{minWidth: 120}}>
                                        <Typography variant={"body1"} sx={{mb: 1, mt: 2}}>Билеты/круиз в
                                            Сингапур</Typography>
                                        <Stack direction="row" alignItems="center" spacing={2}>
                                            <Button variant="contained" component="label">
                                                Выбрать файл
                                                <input hidden accept="image/*" multiple type="file"/>
                                            </Button>
                                        </Stack>
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box sx={{minWidth: 120}}>
                                        <Typography variant={"body1"} sx={{mb: 1, mt: 2}}>Билеты/круиз из
                                            Сингапура</Typography>
                                        <Stack direction="row" alignItems="center" spacing={2}>
                                            <Button variant="contained" component="label">
                                                Выбрать файл
                                                <input hidden accept="image/*" multiple type="file"/>
                                            </Button>
                                        </Stack>
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box sx={{minWidth: 120}}>
                                        <Typography variant={"body1"} sx={{mb: 1, mt: 2}}>Дополнительные
                                            документы</Typography>
                                        <Stack direction="row" alignItems="center" spacing={2}>
                                            <Button variant="contained" component="label">
                                                Выбрать файл
                                                <input hidden accept="image/*" multiple type="file"/>
                                            </Button>
                                        </Stack>
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box sx={{minWidth: 120}}>
                                        <Typography variant={"body1"} sx={{mb: 1, mt: 2}}>Дополнительные
                                            документы</Typography>
                                        <Stack direction="row" alignItems="center" spacing={2}>
                                            <Button variant="contained" component="label">
                                                Выбрать файл
                                                <input hidden accept="image/*" multiple type="file"/>
                                            </Button>
                                        </Stack>
                                    </Box>
                                </Grid>
                            </Grid>
                        </TabPanel>
                    );
                }
                return arr;
            })()}

        </Box>
    )
}