import React from 'react';
import Paper from '@mui/material/Paper';
import {TextField} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import {DatePicker, LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {Dayjs} from 'dayjs';

type Props = {
    formik: any
}


const PassportInfoContent = ({formik}:Props) => {
    return (
        <Paper elevation={3} className={'p-6 w-full'}>
            <h2 className={'font-semibold text-xl text-neutral-700 dark:text-neutral-300 '}>
                Паспортные данные
            </h2>
            <div className={'2xl:flex 2xl:justify-center 2xl:gap-6'}>
                <div className="mt-4 flex gap-6">
                    <>
                        <TextField className={''}
                                   select
                                   label={'Страна'}
                                   {...formik.getFieldProps('passportCountry')}
                                   onChange={e => {
                                       formik.setFieldValue('passportCountry', e.target.value);
                                   }}
                        >
                            <MenuItem value="Россия">Россия</MenuItem>
                            <MenuItem value="Армения">Армения</MenuItem>
                            <MenuItem value="Азербайджан">Азербайджан</MenuItem>
                            <MenuItem value="Беларусь">Беларусь</MenuItem>
                            <MenuItem value="Грузия">Грузия</MenuItem>
                            <MenuItem value="Казахстан">Казахстан</MenuItem>
                            <MenuItem value="Киргизстан">Киргизстан</MenuItem>
                            <MenuItem value="Молдова">Молдова</MenuItem>
                            <MenuItem value="Таджикистан">Таджикистан</MenuItem>
                            <MenuItem value="Туркменистан">Туркменистан</MenuItem>
                            <MenuItem value="Узбекистан">Узбекистан</MenuItem>
                            <MenuItem value="Не гражданин Латвии">негражданин Латвии</MenuItem>
                            <MenuItem value="Не гражданин Эстонии">негражданин Эстонии</MenuItem>
                        </TextField>
                        {formik.errors.passportCountry && formik.touched.passportCountry ?
                            <div className="text-rose-600">{formik.errors.passportCountry}</div> : null}
                    </>
                    <>
                        <TextField
                            label={'Орган выдачи'}
                            className="mt-4"
                            type="text"
                            placeholder={'Уполномоченный орган'}
                            {...formik.getFieldProps('passportIssuedBy')}
                        />
                        {formik.errors.passportIssuedBy && formik.touched.passportIssuedBy ?
                            <div
                                className="text-rose-600">{formik.errors.passportIssuedBy}</div> : null}
                    </>

                    <>
                        <TextField
                            label={'Номер паспорта'}
                            className="mt-4"
                            type="text"
                            placeholder={'Укажите номер паспорта'}
                            {...formik.getFieldProps('passportNumber')}
                        />
                        {formik.errors.passportNumber && formik.touched.passportNumber ?
                            <div className="text-rose-600">{formik.errors.passportNumber}</div> : null}
                    </>
                </div>
                <div className="flex flex-col gap-4 mt-4 sm:flex-row">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            inputFormat="DD/MM/YYYY"
                            label="Дата выдачи"
                            {...formik.getFieldProps('passportData')}
                            renderInput={(params) => <TextField {...params} />}
                            onChange={(date: Dayjs | null, keyboardInputValue?: string | undefined) => {
                                let formattedDate = date && date.format('YYYY-MM-DD')
                                formik.setFieldValue('passportData', formattedDate)
                            }}
                        />
                    </LocalizationProvider>
                    {formik.errors.passportData && formik.touched.passportData ?
                        <div className="text-rose-600">{formik.errors.passportData}</div> : null}

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Дата окончания"
                            {...formik.getFieldProps('passportExpire')}
                            renderInput={(params) => <TextField {...params} />}
                            onChange={(date: Dayjs | null, keyboardInputValue?: string | undefined) => {
                                let formattedDate = date && date.format('YYYY-MM-DD')
                                formik.setFieldValue('passportExpire', formattedDate)
                            }}
                        />
                    </LocalizationProvider>
                    {formik.errors.passportExpire && formik.touched.passportExpire ?
                        <div className="text-rose-600">{formik.errors.passportExpire}</div> : null}

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            inputFormat="DD/MM/YYYY"
                            label="Дата рождения"
                            {...formik.getFieldProps('birthDate')}
                            renderInput={(params) => <TextField {...params} />}
                            onChange={(date: Dayjs | null, keyboardInputValue?: string | undefined) => {
                                let formattedDate = date && date.format('YYYY-MM-DD')
                                formik.setFieldValue('birthDate', formattedDate)
                            }}
                        />
                    </LocalizationProvider>
                    {formik.errors.birthDate && formik.touched.birthDate ?
                        <div className="text-rose-600">{formik.errors.birthDate}</div> : null}
                </div>
            </div>
        </Paper>
    );
};

export default PassportInfoContent;