import React from 'react';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import PhotoIcon from '@mui/icons-material/Photo';
import {TextField} from '@mui/material';
import {DatePicker, LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {Dayjs} from 'dayjs';

type Props = {
    formik: any
    openInNewTab: (url: string) => void
}

const PhotoHotelsContent = ({formik, openInNewTab}:Props) => {
    return (
        <Paper elevation={3} className={'p-6 w-max'}>
            <h2 className={'font-semibold text-xl text-neutral-700 dark:text-neutral-300 mb-4'}>
                Фото
            </h2>
            <div className={'flex gap-6 justify-center'}>
                <Paper className={'p-4'}>
                    <h5 className={'font-bold'}>Паспорт:</h5>
                    <div>
                        {formik.values.passportCopyFiles.map((el:string, index:number) => <IconButton
                                onClick={() => openInNewTab(el)} key={index}>
                                <PhotoIcon fontSize={'large'}/>
                            </IconButton>
                        )}
                    </div>
                </Paper>
                <Paper className={'p-4'}>
                    <h5 className={'font-bold'}>Фото на визу:</h5>
                    <div>
                        {formik.values.photoFiles.map((el:string, index:number) => <IconButton
                            onClick={() => openInNewTab(el)} key={index}>
                            <PhotoIcon fontSize={'large'}/>
                        </IconButton>)}
                    </div>
                </Paper>
                <Paper className={'p-4'}>
                    <h5 className={'font-bold'}>Билеты в Сингапур:</h5>
                    <div>
                        {formik.values.inTicketsFiles.map((el:string, i:number) => (
                            <IconButton onClick={() => openInNewTab(el)} key={i}>
                                <PhotoIcon fontSize={'large'}/>
                            </IconButton>
                        ))}
                    </div>
                </Paper>
                <Paper className={'p-4'}>
                    <h5 className={'font-bold'}>Билеты из Сингапура:</h5>
                    <div>
                        {formik.values.outTicketsFiles.map((el:string, i:number) => (
                            <IconButton onClick={() => openInNewTab(el)} key={i}>
                                <PhotoIcon fontSize={'large'}/>
                            </IconButton>
                        ))}
                    </div>
                </Paper>
                {formik.values.bookingHotel.length !== 0 && <Paper className={'p-4'}>
                    <h5 className={'font-bold'}>Бронь отеля:</h5>
                    <div>
                        {formik.values.bookingHotel.map((el:string, i:number) => (
                            <IconButton onClick={() => openInNewTab(el)} key={i}>
                                <PhotoIcon fontSize={'large'}/>
                            </IconButton>
                        ))}
                    </div>
                </Paper>}
            </div>
            <div>
                {!formik.values.bookingHotel.length &&
                    <h2 className={'font-semibold text-xl text-neutral-700 dark:text-neutral-300 mb-4'}>
                        Hotels
                    </h2>}
                {!formik.values.bookingHotel.length && formik.values.hotelsData && formik.values.hotelsData.map((el:{ hotelName: string, arrivalDate: string, departureDate: string, hotelAddress: string, bookingHotel: Array<string> }, elementIndex:number) => {
                    return (
                        <Paper key={elementIndex} className={'p-4 mt-4'}>
                            <h5 className={'font-bold mb-4'}>Отель номер {elementIndex + 1}:</h5>
                            <div className="flex gap-5">
                                <div className={'col-span-2'}>
                                    <TextField
                                        label={'Название отеля'}
                                        className="mt-2"
                                        name={'hotelName'}
                                        placeholder={'Укажите название отеля'}
                                        required
                                        value={el.hotelName}
                                        onChange={(e) => {
                                            const key = e.target.name
                                            const data = formik.values.hotelsData.map(
                                                (el:{ hotelName: string, arrivalDate: string, departureDate: string, hotelAddress: string, bookingHotel: Array<string> }, ind:number) => ind === elementIndex ? ({
                                                    ...el,
                                                    [key]: e.target.value
                                                }) : el);
                                            formik.setFieldValue('hotelsData', data)
                                        }}
                                    />
                                </div>
                                <div className={'col-span-2'}>
                                    <TextField
                                        label={'Полный адрес отеля'}
                                        className="mt-2"
                                        placeholder={'Укажите полный адрес отеля'}
                                        required
                                        name={'hotelAddress'}
                                        value={el.hotelAddress}
                                        onChange={(e) => {
                                            const key = e.target.name
                                            const data = formik.values.hotelsData.map(
                                                (el:{ hotelName: string, arrivalDate: string, departureDate: string, hotelAddress: string, bookingHotel: Array<string> }, ind:number) => ind === elementIndex ? ({
                                                    ...el,
                                                    [key]: e.target.value
                                                }) : el);
                                            formik.setFieldValue('hotelsData', data)
                                        }}
                                    />
                                </div>
                                <div>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            inputFormat="DD/MM/YYYY"
                                            label="Дата заселения"
                                            value={el.arrivalDate}
                                            renderInput={(params) => <TextField {...params} />}
                                            onChange={(date: Dayjs | null, keyboardInputValue?: string | undefined) => {
                                                let formattedDate = date && date.format('YYYY-MM-DD')
                                                const data = formik.values.hotelsData.map(
                                                    (el:{ hotelName: string, arrivalDate: string, departureDate: string, hotelAddress: string, bookingHotel: Array<string> }, ind:number) => ind === elementIndex ? ({
                                                        ...el,
                                                        ['arrivalDate']: formattedDate
                                                    }) : el);
                                                formik.setFieldValue('hotelsData', data)
                                            }}
                                        />
                                    </LocalizationProvider>
                                </div>
                                <div>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            inputFormat="DD/MM/YYYY"
                                            label="Дата выселения"
                                            value={el.departureDate}
                                            renderInput={(params) => <TextField {...params} />}
                                            onChange={(date: Dayjs | null, keyboardInputValue?: string | undefined) => {
                                                let formattedDate = date && date.format('YYYY-MM-DD')
                                                const data = formik.values.hotelsData.map(
                                                    (el:{ hotelName: string, arrivalDate: string, departureDate: string, hotelAddress: string, bookingHotel: Array<string> }, ind:number) => ind === elementIndex ? ({
                                                        ...el,
                                                        ['departureDate']: formattedDate
                                                    }) : el);
                                                formik.setFieldValue('hotelsData', data)
                                            }}
                                        />
                                    </LocalizationProvider>
                                </div>
                            </div>
                            <div className="mt-2">
                                <h5 className={'font-bold'}>Hotel booking:</h5>
                                <div>
                                    {el?.bookingHotel.map((el, i) => (
                                        <IconButton onClick={() => openInNewTab(el)} key={i}>
                                            <PhotoIcon fontSize={'large'}/>
                                        </IconButton>
                                    ))}
                                </div>
                            </div>
                        </Paper>
                    )
                })}
            </div>
            {!!formik.values.additionFiles.length && <div>
                <h2 className={'font-semibold text-xl text-neutral-700 dark:text-neutral-300 mb-4'}>
                    Additional files:
                </h2>
                {formik.values.additionFiles.map((el:string, i:number) => (
                    <IconButton onClick={() => openInNewTab(el)} key={i}>
                        <PhotoIcon fontSize={'large'}/>
                    </IconButton>
                ))}
            </div>}
        </Paper>
    );
};

export default PhotoHotelsContent;