import * as React from 'react'
import {ApplicantDataType} from '../../../../models/applicantModel';
import {useAppDispatch, useAppSelector} from '../../../../hooks/hooks';
import {useFormik} from 'formik';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import DialogContentText from '@mui/material/DialogContentText';
import BasicInfoContent from './BasicInfoContent';
import PassportInfoContent from './PassportInfoContent';
import ResidenceInfoContent from './ResidenceInfoContent';
import FlightInfoContent from './FlightInfoContent';
import LawsInfoContent from './LawsInfoContent';
import PhotoHotelsContent from './PhotoHotelsContent';
import {sendChangedApplicationTC} from '../../../../state/adminPanelSlice';


type Props = {
    applicationID: number
    applicantDataID: number | undefined
    descriptionElementRef: ((instance: (HTMLSpanElement | null)) => void) | React.RefObject<HTMLSpanElement> | null | undefined
    onClose: () => void
}

export const ModalContent = (props: Props) => {
    const dispatch = useAppDispatch()
    const {applicationID, applicantDataID, onClose} = props;
    const applicantsData = useAppSelector(state => state.adminPanelSlice[applicationID].applicantsData[applicantDataID!])

    const item = {...applicantsData}


    const openInNewTab = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const formik = useFormik({
        initialValues: {
            ...item
        } as ApplicantDataType,
        onSubmit: async (ApplicantData: ApplicantDataType) => {
          let res:any = await dispatch(sendChangedApplicationTC({applicationID, applicantDataID, ApplicantData}))
            if(res?.payload?.applicationID){
                onClose()
            }
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
                    <form className="mt-6 mb-4 flex flex-col gap-8 items-center" onSubmit={formik.handleSubmit}>
                        <BasicInfoContent formik={formik}/>
                        <PassportInfoContent formik={formik}/>
                        <ResidenceInfoContent formik={formik}/>
                        <FlightInfoContent formik={formik}/>
                        <LawsInfoContent formik={formik} openInNewTab={openInNewTab}/>
                        <PhotoHotelsContent formik={formik} openInNewTab={openInNewTab}/>
                        <DialogActions className={'flex gap-10 self-end'}>
                            <Button onClick={onClose}>
                                Cancel
                            </Button>
                            <Button type={'submit'} variant={'contained'}>
                                Confirm
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContentText>
            </DialogContent>
        </>
    );
}