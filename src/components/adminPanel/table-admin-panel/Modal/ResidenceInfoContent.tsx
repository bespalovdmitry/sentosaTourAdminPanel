import React from 'react';
import Paper from '@mui/material/Paper';
import {TextField} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

type Props = {
    formik: any
}

const ResidenceInfoContent = ({formik}:Props) => {
    return (
        <Paper elevation={3} className={'p-6 w-full'}>
            <h2 className={'font-semibold text-xl text-neutral-700 dark:text-neutral-300 mb-4'}>
                Прописка
            </h2>
            <div className={'flex justify-center gap-6'}>
                <>
                    <TextField
                        select
                        label={'Страна'}
                        className={'mt-4 w-[200px]'}
                        {...formik.getFieldProps('residenceCountry')}
                    >
                        <MenuItem value="">Выберите страну</MenuItem>
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
                    {formik.errors.residenceCountry && formik.touched.residenceCountry ?
                        <div className="text-rose-600">{formik.errors.residenceCountry}</div> : null}
                </>
                <>
                    <TextField
                        className={'mt-4 w-[300px]'}
                        label={'Город'}
                        {...formik.getFieldProps('residenceCity')}
                        autoComplete={'none'}
                    />
                    {formik.errors.residenceCity && formik.touched.residenceCity ?
                        <div className="text-rose-600">{formik.errors.residenceCity}</div> : null}
                </>
                <>
                    <TextField
                        label={'Адрес'}
                        fullWidth
                        className="mt-4"
                        placeholder="Улица, дом, квартира"
                        {...formik.getFieldProps('residenceAddress')}
                        autoComplete={'none'}
                    />
                    {formik.errors.residenceAddress && formik.touched.residenceAddress ?
                        <div className="text-rose-600">{formik.errors.residenceAddress}</div> : null}
                </>
                <>
                    <TextField
                        label={'Индекс'}
                        className="mt-4"
                        type="text"
                        placeholder="220120"
                        {...formik.getFieldProps('residenceIndex')}
                    />
                    {formik.errors.residenceIndex && formik.touched.residenceIndex ?
                        <div className="text-rose-600">{formik.errors.residenceIndex}</div> : null}
                </>
            </div>
        </Paper>
    );
};

export default ResidenceInfoContent;