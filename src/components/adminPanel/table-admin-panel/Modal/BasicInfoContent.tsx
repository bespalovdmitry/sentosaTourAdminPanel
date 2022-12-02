import React from 'react';
import Paper from '@mui/material/Paper';
import {TextField} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';


type Props = {
    formik: any
}

const BasicInfoContent = ({formik}:Props) => {
    return (
        <Paper elevation={3} className={'p-6 w-full'}>
            <h2 className={'font-semibold text-xl text-neutral-700 dark:text-neutral-300 mb-4'}>
                Основная информация
            </h2>
            <div className={'flex gap-6 flex-wrap justify-center'}>
                <>
                    <TextField
                        label={'Ваше полное имя'}
                        className={formik.errors.fullName && formik.touched.fullName ? 'border-rose-600' : ''}
                        type="text"
                        placeholder="Ivan Ivanov"
                        {...formik.getFieldProps('fullName')}

                    />
                    {formik.errors.fullName && formik.touched.fullName ?
                        <div className="text-rose-600">{formik.errors.fullName}</div> : null}
                </>
                <>
                    <TextField
                        select
                        label={'Пол'}
                        className={formik.errors.male && formik.touched.male ? 'border-rose-600' : ''}
                        {...formik.getFieldProps('male')}
                    >
                        <MenuItem value="">Выберите пол</MenuItem>
                        <MenuItem value="Мужской">Мужской</MenuItem>
                        <MenuItem value="Женский">Женский</MenuItem>
                    </TextField>
                    {formik.errors.male && formik.touched.male ?
                        <div className="text-rose-600">{formik.errors.male}</div> : null}
                </>
                <>
                    <TextField
                        select
                        label={'Гражданство'}
                        className={formik.errors.citizenship && formik.touched.citizenship ? 'border-rose-600' : ''}
                        {...formik.getFieldProps('citizenship')}
                    >
                        <MenuItem value="">Укажите гражданство</MenuItem>
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
                    {formik.errors.citizenship && formik.touched.citizenship ?
                        <div className="text-rose-600">{formik.errors.citizenship}</div> : null}
                </>
                <>
                    <TextField
                        select
                        label={'Семейное положение'}
                        className={formik.errors.familyStatus && formik.touched.familyStatus ? 'border-rose-600' : ''}
                        {...formik.getFieldProps('familyStatus')}
                    >
                        <MenuItem value="">Укажите семейное положение</MenuItem>
                        <MenuItem value="Женат/замужем">Женат/замужем</MenuItem>
                        <MenuItem value="Не замужем/не женат">Не замужем/не женат</MenuItem>
                        <MenuItem value="Живу раздельно с супругой (-ом)">Живу раздельно с супругой
                            (-ом)</MenuItem>
                        <MenuItem value="Вдовец/вдова">Вдовец/вдова</MenuItem>
                        <MenuItem value="Разведен(а)">Разведен(а)</MenuItem>
                    </TextField>
                    {formik.errors.familyStatus && formik.touched.familyStatus ?
                        <div className="text-rose-600">{formik.errors.familyStatus}</div> : null}
                </>
                <>
                    {formik.values.mainApplicantIs !== 'первый заявитель' && <TextField
                        select
                        label={'Заявитель приходится Вам'}
                        className={formik.errors.mainApplicantIs && formik.touched.mainApplicantIs ? 'border-rose-600 mt-4' : 'mt-4'}
                        {...formik.getFieldProps('mainApplicantIs')}
                    >
                        <MenuItem value=""></MenuItem>
                        <MenuItem value="Деловой партнер">Деловой партнер</MenuItem>
                        <MenuItem value="Друг/подруга">Друг/подруга</MenuItem>
                        <MenuItem value="Коллега">Коллега</MenuItem>
                        <MenuItem value="Ребенок">Ребенок</MenuItem>
                        <MenuItem value="Родитель">Родитель</MenuItem>
                        <MenuItem value="Сестра/Брат">Сестра/Брат</MenuItem>
                        <MenuItem value="Сожитель">Сожитель</MenuItem>
                        <MenuItem value="Супруг/Супруга">Супруг/Супруга</MenuItem>
                    </TextField>}
                    {formik.errors.mainApplicantIs && formik.touched.mainApplicantIs ?
                        <div className="text-rose-600">{formik.errors.mainApplicantIs}</div> : null}
                </>
            </div>
        </Paper>
    );
};

export default BasicInfoContent;