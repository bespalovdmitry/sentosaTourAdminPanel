import * as React from 'react'
import {ApplicantDataType} from '../../../models/applicantModel';
import {TextField} from '@mui/material';
import {useAppSelector} from '../../../hooks/hooks';
import {Field, useFormik} from 'formik';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import DialogContentText from '@mui/material/DialogContentText';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import {DatePicker, LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';


type Props = {
    applicationID: number
    applicantDataID: number | undefined
    descriptionElementRef: any
    onClose: () => void
}

type FormikErrorType = Partial<{
    fullName: string
    male: string
    citizenship: string
    familyStatus: string
    mainApplicantIs: string
    religion: string
    yearIncome: string
    education: string
    position: string

    passportCopyFiles: string
    passportCountry: string
    passportIssuedBy: string
    passportNumber: string
    passportData: string
    passportExpire: string
    birthDate: string

    residenceCountry: string
    residenceCity: string
    residenceAddress: string
    residenceIndex: string

    fliesFrom: string
    flightInNumber: string
    flightInDate: string
    flightOutNumber: string
    flightOutDate: string

    hasVisaBefore: string
    hasVisaBeforeData: string
    hasLivedInNonResidenceCountry: string
    hasLivedInNonResidenceCountryData: string
    hasDeported: string
    hasDeportedData: string
    hasConvicted: string
    hasConvictedData: string
    hasVisaReject: string
    hasVisaRejectData: string
    hasAnotherPassport: string
    hasAnotherPassportData: string

    photoFiles: string
    inTicketsFiles: string
    outTicketsFiles: string
    additionFiles: string
    bookingHotel: string
    hotelsData: string
}>

export const ModalContent = (props: Props) => {
    const {applicationID, applicantDataID, onClose} = props;
    const applicantsData = useAppSelector(state => state.adminPanelSlice[applicationID].applicantsData[applicantDataID!])
    const item = {...applicantsData}


    //console.log(item)


    const onBlurHandler = (fieldName: string, value: string) => {
        /* dispatch(updateApplicantField({fieldName, value, index}));
         formik.handleBlur(e)*/
    }
    const formik = useFormik({
        initialValues: {
            ...item
        } as ApplicantDataType,
        onSubmit: async (values: any) => {
            console.log(values)
            //let res = await dispatch(filedCheckTC(values))
        }
    })


    return (
        <>
            <DialogTitle id="scroll-dialog-title">{item?.fullName}</DialogTitle>
            <DialogContent dividers>
                <DialogContentText
                    id="scroll-dialog-description"
                    ref={props.descriptionElementRef}
                >
                    <form className="mt-6 mb-4 flex flex-col gap-8" onSubmit={formik.handleSubmit}>
                        <div>
                            <h2 className={'font-semibold text-xl text-neutral-700 dark:text-neutral-300 mb-4'}>
                                Основная информация
                            </h2>
                            <div className={'flex flex-row gap-6'}>
                                <>
                                    <TextField
                                        fullWidth
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
                                        fullWidth
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
                                        fullWidth
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
                                        fullWidth
                                        select
                                        label={'Семейное положение'}
                                        className={formik.errors.familyStatus && formik.touched.familyStatus ? 'border-rose-600' : ''}
                                        {...formik.getFieldProps('familyStatus')}
                                        onBlur={(e) => {
                                            onBlurHandler(e.currentTarget.name, e.currentTarget.value)
                                        }}
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
                        </div>
                        <div>
                            <h2 className={'font-semibold text-xl text-neutral-700 dark:text-neutral-300 '}>
                                Паспортные данные
                            </h2>
                            <div>
                                <div className="mt-4">
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
                                <div className="flex flex-col justify-between align-top gap-2 sm:flex-row">
                                    <div className="basis-1/2 mt-4">
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker
                                                inputFormat="DD/MM/YYYY"
                                                label="Дата выдачи"
                                                {...formik.getFieldProps('passportData')}
                                                renderInput={(params) => <TextField {...params} />}
                                                onChange={date => formik.setFieldValue('passportData', date)}
                                            />
                                        </LocalizationProvider>
                                        {formik.errors.passportData && formik.touched.passportData ?
                                            <div className="text-rose-600">{formik.errors.passportData}</div> : null}
                                    </div>
                                    <div className="basis-1/2 mt-4">
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker
                                                label="Дата окончания"
                                                {...formik.getFieldProps('passportExpire')}
                                                renderInput={(params) => <TextField {...params} />}
                                                onChange={date => formik.setFieldValue('passportExpire', date)}
                                            />
                                        </LocalizationProvider>
                                        {formik.errors.passportExpire && formik.touched.passportExpire ?
                                            <div className="text-rose-600">{formik.errors.passportExpire}</div> : null}
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            inputFormat="DD/MM/YYYY"
                                            label="Дата рождения"
                                            {...formik.getFieldProps('birthDate')}
                                            renderInput={(params) => <TextField {...params} />}
                                            onChange={date => formik.setFieldValue('birthDate', date)}
                                        />
                                    </LocalizationProvider>
                                    {formik.errors.birthDate && formik.touched.birthDate ?
                                        <div className="text-rose-600">{formik.errors.birthDate}</div> : null}
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className={'font-semibold text-xl text-neutral-700 dark:text-neutral-300 mb-6'}>
                                Образование/доходы
                            </h2>
                            <div className={'flex gap-4'}>
                                <>
                                    <TextField select className={''}
                                            label={'Вероисповедание'}
                                            {...formik.getFieldProps('religion')}
                                    >
                                        <MenuItem value="">Выберите вероисповедание</MenuItem>
                                        <MenuItem value="Христианство">Христианство</MenuItem>
                                        <MenuItem value="Мусульманство">Мусульманство</MenuItem>
                                        <MenuItem value="Буддизм">Буддизм</MenuItem>
                                        <MenuItem value="Индуизм">Индуизм</MenuItem>
                                        <MenuItem value="Неверующий">Неверующий</MenuItem>
                                    </TextField>
                                    {formik.errors.religion && formik.touched.religion ?
                                        <div className="text-rose-600">{formik.errors.religion}</div> : null}
                                </>
                                <>

                                        <TextField
                                            label={'Годовой доход в S$'}
                                            placeholder="SGD24000"
                                            {...formik.getFieldProps('yearIncome')}
                                        />
                                        {formik.errors.yearIncome && formik.touched.yearIncome ?
                                            <div className="text-rose-600">{formik.errors.yearIncome}</div> : null}


                                        <TextField
                                            select
                                            label={'Образование'}
                                            className={''}
                                                {...formik.getFieldProps('education')}

                                        >
                                            <MenuItem value="">Укажите образование</MenuItem>
                                            <MenuItem value="Без образования">Без образования</MenuItem>
                                            <MenuItem value="Начальная школа">Начальная школа</MenuItem>
                                            <MenuItem value="Средняя школа">Средняя школа</MenuItem>
                                            <MenuItem value="Техникум">Техникум</MenuItem>
                                            <MenuItem value="Высшее">Высшее</MenuItem>
                                            <MenuItem value="Магистратура">Магистратура</MenuItem>
                                        </TextField>
                                        {formik.errors.education && formik.touched.education ?
                                            <div className="text-rose-600">{formik.errors.education}</div> : null}

                                </>
                                <>
                                    <TextField
                                        select
                                        placeholder={'Должность'}
                                        className={''}
                                            {...formik.getFieldProps('position')}
                                        label={'Должность'}
                                    >
                                        <MenuItem value="">Укажите должность</MenuItem>
                                        <MenuItem value="Безработный">Безработный</MenuItem>
                                        <MenuItem value="Бизнесмен">Бизнесмен</MenuItem>
                                        <MenuItem value="Домохозяйка">Домохозяйка</MenuItem>
                                        <MenuItem value="Пенсионер">Пенсионер</MenuItem>
                                        <MenuItem value="Ребёнок/Младенец">Ребёнок/Младенец</MenuItem>
                                        <MenuItem value="Сотрудник офиса">Сотрудник офиса</MenuItem>
                                        <MenuItem value="Специалист">Специалист</MenuItem>
                                        <MenuItem value="Студент/Ученик">Студент/Ученик</MenuItem>
                                    </TextField>
                                    {formik.errors.position && formik.touched.position ?
                                        <div className="text-rose-600">{formik.errors.position}</div> : null}
                                </>
                            </div>
                        </div>
                        <DialogActions>
                            <Button onClick={onClose}>
                                Cancel
                            </Button>
                            <Button type={'submit'}>
                                Confirm
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContentText>
            </DialogContent>

        </>
    );
}