import React, {ReactNode} from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

type PropsType = {
    isOpen: boolean
    title: string
    description: ReactNode
    actionName: string
    onClose: () => void
    onSuccess: () => void
}

const InformModal = ({title, description, onClose, onSuccess, isOpen, actionName}:PropsType) => {

    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog onClose={handleClose} open={isOpen}>
            <div className={'m-7 flex flex-col w-[400px]'}>
                <DialogTitle variant={'h5'}>{title}</DialogTitle>
                <Typography>{description}</Typography>
                <div className={'flex justify-between mt-8'}>
                    <Button onClick={onClose} variant={'outlined'}>Close</Button>
                    <Button onClick={onSuccess} variant={'contained'}>{actionName}</Button>
                </div>
            </div>
        </Dialog>
    );
};

export default InformModal;
