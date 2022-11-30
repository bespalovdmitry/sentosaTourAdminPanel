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
import {YesNoToBool} from '../../../utils/YesNoToBool';


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
                                <div className="flex flex-col gap-4 mt-4 sm:flex-row">
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
                        <div>
                            <h2 className={'font-semibold text-xl text-neutral-700 dark:text-neutral-300 mb-4'}>
                                Residence
                            </h2>
                            <div>
                                <>
                                    <TextField
                                        select
                                        label={'Страна'}
                                        className="mt-4"
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
                                        className="mt-4"
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
                        </div>
                        <div>
                            <h2 className={'font-semibold text-xl text-neutral-700 dark:text-neutral-300 mb-4'}>
                                Прилет/Вылет
                            </h2>
                            <div>
                                <>
                                    <TextField select label={'Страна вылета'} className="mt-4"
                                               {...formik.getFieldProps('fliesFrom')}
                                    >
                                        <MenuItem value="">Выберите страну</MenuItem>
                                        <MenuItem value="AF">Afghanistan</MenuItem>
                                        <MenuItem value="AX">Aland Islands</MenuItem>
                                        <MenuItem value="AL">Albania</MenuItem>
                                        <MenuItem value="DZ">Algeria</MenuItem>
                                        <MenuItem value="AS">American Samoa</MenuItem>
                                        <MenuItem value="AD">Andorra</MenuItem>
                                        <MenuItem value="AO">Angola</MenuItem>
                                        <MenuItem value="AI">Anguilla</MenuItem>
                                        <MenuItem value="AQ">Antarctica</MenuItem>
                                        <MenuItem value="AG">Antigua and Barbuda</MenuItem>
                                        <MenuItem value="AR">Argentina</MenuItem>
                                        <MenuItem value="AM">Armenia</MenuItem>
                                        <MenuItem value="AW">Aruba</MenuItem>
                                        <MenuItem value="AU">Australia</MenuItem>
                                        <MenuItem value="AT">Austria</MenuItem>
                                        <MenuItem value="AZ">Azerbaijan</MenuItem>
                                        <MenuItem value="BS">Bahamas</MenuItem>
                                        <MenuItem value="BH">Bahrain</MenuItem>
                                        <MenuItem value="BD">Bangladesh</MenuItem>
                                        <MenuItem value="BB">Barbados</MenuItem>
                                        <MenuItem value="BY">Belarus</MenuItem>
                                        <MenuItem value="BE">Belgium</MenuItem>
                                        <MenuItem value="BZ">Belize</MenuItem>
                                        <MenuItem value="BJ">Benin</MenuItem>
                                        <MenuItem value="BM">Bermuda</MenuItem>
                                        <MenuItem value="BT">Bhutan</MenuItem>
                                        <MenuItem value="BO">Bolivia</MenuItem>
                                        <MenuItem value="BQ">Bonaire, Sint Eustatius and Saba</MenuItem>
                                        <MenuItem value="BA">Bosnia and Herzegovina</MenuItem>
                                        <MenuItem value="BW">Botswana</MenuItem>
                                        <MenuItem value="BV">Bouvet Island</MenuItem>
                                        <MenuItem value="BR">Brazil</MenuItem>
                                        <MenuItem value="IO">British Indian Ocean Territory</MenuItem>
                                        <MenuItem value="BN">Brunei Darussalam</MenuItem>
                                        <MenuItem value="BG">Bulgaria</MenuItem>
                                        <MenuItem value="BF">Burkina Faso</MenuItem>
                                        <MenuItem value="BI">Burundi</MenuItem>
                                        <MenuItem value="KH">Cambodia</MenuItem>
                                        <MenuItem value="CM">Cameroon</MenuItem>
                                        <MenuItem value="CA">Canada</MenuItem>
                                        <MenuItem value="CV">Cape Verde</MenuItem>
                                        <MenuItem value="KY">Cayman Islands</MenuItem>
                                        <MenuItem value="CF">Central African Republic</MenuItem>
                                        <MenuItem value="TD">Chad</MenuItem>
                                        <MenuItem value="CL">Chile</MenuItem>
                                        <MenuItem value="CN">China</MenuItem>MenuItem
                                        <MenuItem value="CX">Christmas Island</MenuItem>
                                        <MenuItem value="CC">Cocos (Keeling) Islands</MenuItem>
                                        <MenuItem value="CO">Colombia</MenuItem>
                                        <MenuItem value="KM">Comoros</MenuItem>
                                        <MenuItem value="CG">Congo</MenuItem>
                                        <MenuItem value="CD">Congo, Democratic Republic of the Congo</MenuItem>
                                        <MenuItem value="CK">Cook Islands</MenuItem>
                                        <MenuItem value="CR">Costa Rica</MenuItem>
                                        <MenuItem value="CI">Cote D'Ivoire</MenuItem>
                                        <MenuItem value="HR">Croatia</MenuItem>
                                        <MenuItem value="CU">Cuba</MenuItem>
                                        <MenuItem value="CW">Curacao</MenuItem>
                                        <MenuItem value="CY">Cyprus</MenuItem>
                                        <MenuItem value="CZ">Czech Republic</MenuItem>
                                        <MenuItem value="DK">Denmark</MenuItem>
                                        <MenuItem value="DJ">Djibouti</MenuItem>
                                        <MenuItem value="DM">Dominica</MenuItem>
                                        <MenuItem value="DO">Dominican Republic</MenuItem>
                                        <MenuItem value="EC">Ecuador</MenuItem>
                                        <MenuItem value="EG">Egypt</MenuItem>
                                        <MenuItem value="SV">El Salvador</MenuItem>
                                        <MenuItem value="GQ">Equatorial Guinea</MenuItem>
                                        <MenuItem value="ER">Eritrea</MenuItem>
                                        <MenuItem value="EE">Estonia</MenuItem>
                                        <MenuItem value="ET">Ethiopia</MenuItem>
                                        <MenuItem value="FK">Falkland Islands (Malvinas)</MenuItem>
                                        <MenuItem value="FO">Faroe Islands</MenuItem>
                                        <MenuItem value="FJ">Fiji</MenuItem>
                                        <MenuItem value="FI">Finland</MenuItem>
                                        <MenuItem value="FR">France</MenuItem>
                                        <MenuItem value="GF">French Guiana</MenuItem>
                                        <MenuItem value="PF">French Polynesia</MenuItem>
                                        <MenuItem value="TF">French Southern Territories</MenuItem>
                                        <MenuItem value="GA">Gabon</MenuItem>
                                        <MenuItem value="GM">Gambia</MenuItem>
                                        <MenuItem value="GE">Georgia</MenuItem>
                                        <MenuItem value="DE">Germany</MenuItem>
                                        <MenuItem value="GH">Ghana</MenuItem>
                                        <MenuItem value="GI">Gibraltar</MenuItem>
                                        <MenuItem value="GR">Greece</MenuItem>
                                        <MenuItem value="GL">Greenland</MenuItem>
                                        <MenuItem value="GD">Grenada</MenuItem>
                                        <MenuItem value="GP">Guadeloupe</MenuItem>
                                        <MenuItem value="GU">Guam</MenuItem>
                                        <MenuItem value="GT">Guatemala</MenuItem>
                                        <MenuItem value="GG">Guernsey</MenuItem>
                                        <MenuItem value="GN">Guinea</MenuItem>
                                        <MenuItem value="GW">Guinea-Bissau</MenuItem>
                                        <MenuItem value="GY">Guyana</MenuItem>
                                        <MenuItem value="HT">Haiti</MenuItem>
                                        <MenuItem value="HM">Heard Island and Mcdonald Islands</MenuItem>
                                        <MenuItem value="VA">Holy See (Vatican City State)</MenuItem>
                                        <MenuItem value="HN">Honduras</MenuItem>
                                        <MenuItem value="HK">Hong Kong</MenuItem>
                                        <MenuItem value="HU">Hungary</MenuItem>
                                        <MenuItem value="IS">Iceland</MenuItem>
                                        <MenuItem value="IN">India</MenuItem>
                                        <MenuItem value="ID">Indonesia</MenuItem>
                                        <MenuItem value="IR">Iran, Islamic Republic of</MenuItem>
                                        <MenuItem value="IQ">Iraq</MenuItem>
                                        <MenuItem value="IE">Ireland</MenuItem>
                                        <MenuItem value="IM">Isle of Man</MenuItem>
                                        <MenuItem value="IL">Israel</MenuItem>
                                        <MenuItem value="IT">Italy</MenuItem>
                                        <MenuItem value="JM">Jamaica</MenuItem>
                                        <MenuItem value="JP">Japan</MenuItem>
                                        <MenuItem value="JE">Jersey</MenuItem>
                                        <MenuItem value="JO">Jordan</MenuItem>
                                        <MenuItem value="KZ">Kazakhstan</MenuItem>
                                        <MenuItem value="KE">Kenya</MenuItem>
                                        <MenuItem value="KI">Kiribati</MenuItem>
                                        <MenuItem value="KP">Korea, Democratic People's Republic of</MenuItem>
                                        <MenuItem value="KR">Korea, Republic of</MenuItem>
                                        <MenuItem value="XK">Kosovo</MenuItem>
                                        <MenuItem value="KW">Kuwait</MenuItem>
                                        <MenuItem value="KG">Kyrgyzstan</MenuItem>
                                        <MenuItem value="LA">Lao People's Democratic Republic</MenuItem>
                                        <MenuItem value="LV">Latvia</MenuItem>
                                        <MenuItem value="LB">Lebanon</MenuItem>
                                        <MenuItem value="LS">Lesotho</MenuItem>
                                        <MenuItem value="LR">Liberia</MenuItem>
                                        <MenuItem value="LY">Libyan Arab Jamahiriya</MenuItem>
                                        <MenuItem value="LI">Liechtenstein</MenuItem>
                                        <MenuItem value="LT">Lithuania</MenuItem>
                                        <MenuItem value="LU">Luxembourg</MenuItem>
                                        <MenuItem value="MO">Macao</MenuItem>
                                        <MenuItem value="MK">Macedonia, the Former Yugoslav Republic of</MenuItem>
                                        <MenuItem value="MG">Madagascar</MenuItem>
                                        <MenuItem value="MW">Malawi</MenuItem>
                                        <MenuItem value="MY">Malaysia</MenuItem>
                                        <MenuItem value="MV">Maldives</MenuItem>
                                        <MenuItem value="ML">Mali</MenuItem>
                                        <MenuItem value="MT">Malta</MenuItem>
                                        <MenuItem value="MH">Marshall Islands</MenuItem>
                                        <MenuItem value="MQ">Martinique</MenuItem>
                                        <MenuItem value="MR">Mauritania</MenuItem>
                                        <MenuItem value="MU">Mauritius</MenuItem>
                                        <MenuItem value="YT">Mayotte</MenuItem>
                                        <MenuItem value="MX">Mexico</MenuItem>
                                        <MenuItem value="FM">Micronesia, Federated States of</MenuItem>
                                        <MenuItem value="MD">Moldova, Republic of</MenuItem>
                                        <MenuItem value="MC">Monaco</MenuItem>
                                        <MenuItem value="MN">Mongolia</MenuItem>
                                        <MenuItem value="ME">Montenegro</MenuItem>
                                        <MenuItem value="MS">Montserrat</MenuItem>
                                        <MenuItem value="MA">Morocco</MenuItem>
                                        <MenuItem value="MZ">Mozambique</MenuItem>
                                        <MenuItem value="MM">Myanmar</MenuItem>
                                        <MenuItem value="NA">Namibia</MenuItem>
                                        <MenuItem value="NR">Nauru</MenuItem>
                                        <MenuItem value="NP">Nepal</MenuItem>
                                        <MenuItem value="NL">Netherlands</MenuItem>
                                        <MenuItem value="AN">Netherlands Antilles</MenuItem>
                                        <MenuItem value="NC">New Caledonia</MenuItem>
                                        <MenuItem value="NZ">New Zealand</MenuItem>
                                        <MenuItem value="NI">Nicaragua</MenuItem>
                                        <MenuItem value="NE">Niger</MenuItem>
                                        <MenuItem value="NG">Nigeria</MenuItem>
                                        <MenuItem value="NU">Niue</MenuItem>
                                        <MenuItem value="NF">Norfolk Island</MenuItem>
                                        <MenuItem value="MP">Northern Mariana Islands</MenuItem>
                                        <MenuItem value="NO">Norway</MenuItem>
                                        <MenuItem value="OM">Oman</MenuItem>
                                        <MenuItem value="PK">Pakistan</MenuItem>
                                        <MenuItem value="PW">Palau</MenuItem>
                                        <MenuItem value="PS">Palestinian Territory, Occupied</MenuItem>
                                        <MenuItem value="PA">Panama</MenuItem>
                                        <MenuItem value="PG">Papua New Guinea</MenuItem>
                                        <MenuItem value="PY">Paraguay</MenuItem>
                                        <MenuItem value="PE">Peru</MenuItem>
                                        <MenuItem value="PH">Philippines</MenuItem>
                                        <MenuItem value="PN">Pitcairn</MenuItem>
                                        <MenuItem value="PL">Poland</MenuItem>
                                        <MenuItem value="PT">Portugal</MenuItem>
                                        <MenuItem value="PR">Puerto Rico</MenuItem>
                                        <MenuItem value="QA">Qatar</MenuItem>
                                        <MenuItem value="RE">Reunion</MenuItem>
                                        <MenuItem value="RO">Romania</MenuItem>
                                        <MenuItem value="RU">Russian Federation</MenuItem>
                                        <MenuItem value="RW">Rwanda</MenuItem>
                                        <MenuItem value="BL">Saint Barthelemy</MenuItem>
                                        <MenuItem value="SH">Saint Helena</MenuItem>
                                        <MenuItem value="KN">Saint Kitts and Nevis</MenuItem>
                                        <MenuItem value="LC">Saint Lucia</MenuItem>
                                        <MenuItem value="MF">Saint Martin</MenuItem>
                                        <MenuItem value="PM">Saint Pierre and Miquelon</MenuItem>
                                        <MenuItem value="VC">Saint Vincent and the Grenadines</MenuItem>
                                        <MenuItem value="WS">Samoa</MenuItem>
                                        <MenuItem value="SM">San Marino</MenuItem>
                                        <MenuItem value="ST">Sao Tome and Principe</MenuItem>
                                        <MenuItem value="SA">Saudi Arabia</MenuItem>
                                        <MenuItem value="SN">Senegal</MenuItem>
                                        <MenuItem value="RS">Serbia</MenuItem>
                                        <MenuItem value="CS">Serbia and Montenegro</MenuItem>
                                        <MenuItem value="SC">Seychelles</MenuItem>
                                        <MenuItem value="SL">Sierra Leone</MenuItem>
                                        <MenuItem value="SG">Singapore</MenuItem>
                                        <MenuItem value="SX">Sint Maarten</MenuItem>
                                        <MenuItem value="SK">Slovakia</MenuItem>
                                        <MenuItem value="SI">Slovenia</MenuItem>
                                        <MenuItem value="SB">Solomon Islands</MenuItem>
                                        <MenuItem value="SO">Somalia</MenuItem>
                                        <MenuItem value="ZA">South Africa</MenuItem>
                                        <MenuItem value="GS">South Georgia and the South Sandwich Islands</MenuItem>
                                        <MenuItem value="SS">South Sudan</MenuItem>
                                        <MenuItem value="ES">Spain</MenuItem>
                                        <MenuItem value="LK">Sri Lanka</MenuItem>
                                        <MenuItem value="SD">Sudan</MenuItem>
                                        <MenuItem value="SR">Suriname</MenuItem>
                                        <MenuItem value="SJ">Svalbard and Jan Mayen</MenuItem>
                                        <MenuItem value="SZ">Swaziland</MenuItem>
                                        <MenuItem value="SE">Sweden</MenuItem>
                                        <MenuItem value="CH">Switzerland</MenuItem>
                                        <MenuItem value="SY">Syrian Arab Republic</MenuItem>
                                        <MenuItem value="TW">Taiwan, Province of China</MenuItem>
                                        <MenuItem value="TJ">Tajikistan</MenuItem>
                                        <MenuItem value="TZ">Tanzania, United Republic of</MenuItem>
                                        <MenuItem value="TH">Thailand</MenuItem>
                                        <MenuItem value="TL">Timor-Leste</MenuItem>
                                        <MenuItem value="TG">Togo</MenuItem>
                                        <MenuItem value="TK">Tokelau</MenuItem>
                                        <MenuItem value="TO">Tonga</MenuItem>
                                        <MenuItem value="TT">Trinidad and Tobago</MenuItem>
                                        <MenuItem value="TN">Tunisia</MenuItem>
                                        <MenuItem value="TR">Turkey</MenuItem>
                                        <MenuItem value="TM">Turkmenistan</MenuItem>
                                        <MenuItem value="TC">Turks and Caicos Islands</MenuItem>
                                        <MenuItem value="TV">Tuvalu</MenuItem>
                                        <MenuItem value="UG">Uganda</MenuItem>
                                        <MenuItem value="UA">Ukraine</MenuItem>
                                        <MenuItem value="AE">United Arab Emirates</MenuItem>
                                        <MenuItem value="GB">United Kingdom</MenuItem>
                                        <MenuItem value="US">United States</MenuItem>
                                        <MenuItem value="UM">United States Minor Outlying Islands</MenuItem>
                                        <MenuItem value="UY">Uruguay</MenuItem>
                                        <MenuItem value="UZ">Uzbekistan</MenuItem>
                                        <MenuItem value="VU">Vanuatu</MenuItem>
                                        <MenuItem value="VE">Venezuela</MenuItem>
                                        <MenuItem value="VN">Viet Nam</MenuItem>
                                        <MenuItem value="VG">Virgin Islands, British</MenuItem>
                                        <MenuItem value="VI">Virgin Islands, U.s.</MenuItem>
                                        <MenuItem value="WF">Wallis and Futuna</MenuItem>
                                        <MenuItem value="EH">Western Sahara</MenuItem>
                                        <MenuItem value="YE">Yemen</MenuItem>
                                        <MenuItem value="ZM">Zambia</MenuItem>
                                        <MenuItem value="ZW">Zimbabwe</MenuItem>
                                    </TextField>
                                    {formik.errors.fliesFrom && formik.touched.fliesFrom ?
                                        <div className="text-rose-600">{formik.errors.fliesFrom}</div> : null}
                                </>

                                <>
                                    <TextField
                                        label={'Номер рейса в Сингапур'}
                                        className="mt-4"
                                        placeholder="TR001"
                                        {...formik.getFieldProps('flightInNumber')}
                                    />
                                    {formik.errors.flightInNumber && formik.touched.flightInNumber ?
                                        <div className="text-rose-600">{formik.errors.flightInNumber}</div> : null}
                                </>
                                <>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            inputFormat="DD/MM/YYYY"
                                            label="Дата прилета"
                                            {...formik.getFieldProps('flightInDate')}
                                            renderInput={(params) => <TextField {...params} />}
                                            onChange={date => formik.setFieldValue('flightInDate', date)}
                                        />
                                    </LocalizationProvider>
                                    {formik.errors.flightInDate && formik.touched.flightInDate ?
                                        <div className="text-rose-600">{formik.errors.flightInDate}</div> : null}
                                </>

                                <>
                                    <TextField
                                        label={'Номер рейса из Сингапура'}
                                        className="mt-4"
                                        placeholder="TR002"
                                        {...formik.getFieldProps('flightOutNumber')}

                                    />
                                    {formik.errors.flightOutNumber && formik.touched.flightOutNumber ?
                                        <div className="text-rose-600">{formik.errors.flightOutNumber}</div> : null}
                                </>
                                <>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            inputFormat="DD/MM/YYYY"
                                            label="Дата вылета"
                                            {...formik.getFieldProps('flightOutDate')}
                                            renderInput={(params) => <TextField {...params} />}
                                            onChange={date => formik.setFieldValue('flightOutDate', date)}
                                        />
                                    </LocalizationProvider>
                                    {formik.errors.flightOutDate && formik.touched.flightOutDate ?
                                        <div className="text-rose-600">{formik.errors.flightOutDate}</div> : null}
                                </>
                            </div>
                        </div>
                        <div>
                            <h2 className={'font-semibold text-xl text-neutral-700 dark:text-neutral-300 mb-4'}>
                                Законы/прошлые визы
                            </h2>
                            <div>
                                <>
                                    <TextField
                                        label={'Виза ранее'}
                                        className="mt-4"
                                        placeholder="TR002"
                                        {...formik.getFieldProps('hasVisaBefore')}
                                    />
                                    {formik.errors.hasVisaBefore && formik.touched.hasVisaBefore ?
                                        <div className="text-rose-600">{formik.errors.hasVisaBefore}</div> : null}
                                </>
                                {YesNoToBool(formik.values.hasVisaBefore) && <>
                                    {formik.values.hasVisaBeforeData.map((el) => (<img src={el} alt="visas"/>))}
                                </>}
                            </div>
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