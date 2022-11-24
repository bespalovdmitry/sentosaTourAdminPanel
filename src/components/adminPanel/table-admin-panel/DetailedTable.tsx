import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import {DataGridPro, GridCallbackDetails, GridRowParams, MuiEvent} from '@mui/x-data-grid-pro';
import * as React from 'react';
import {ApplicantsDataType} from '../../../models/applicantModel';
import {useState} from 'react';
import {ModalContent} from './ModalContent';

type Props = {
    row: ApplicantsDataType[]
}

export default function DetailedTable(props: Props) {

    const [open, setOpen] = useState(false)
    const [item, setItem] = useState<ApplicantsDataType | undefined>(undefined)

    const handleClose = () => {
        setOpen(false)
    }

    const rawData = props.row

    let detailedRawData = rawData.map((m: ApplicantsDataType, i: number) => {
        return {
            id: i,
            mainApplicantIs: m.mainApplicantIs,
            male: m.male,
            birthDate: m.birthDate,
            citizenship: m.citizenship,
            fullName: m.fullName,
            flightInDate: m.flightInDate,
            flightInNumber: m.flightInNumber,
            flightOutDate: m.flightOutDate,
            flightOutNumber: m.flightOutNumber,
            passportData: m.passportData,
            passportExpire: m.passportExpire,
            passportIssuedBy: m.passportIssuedBy,
            passportNumber: m.passportNumber,
        }
    })
//id - it's an index of array(rawData)
    const func = (id: number) => {
        setOpen(true)
        setItem(rawData[id])
    }

    const columns = [
        {field: 'fullName', headerName: 'Full Name', flex: 1},
        {field: 'male', headerName: 'Gender', flex: 1},
        {field: 'birthDate', headerName: 'Birth Date', flex: 1},
        {field: 'mainApplicantIs', headerName: 'Main applicant is', flex: 1},
        {field: 'citizenship'},
        {field: 'flightInDate'},
        {field: 'flightInNumber'},
        {field: 'flightOutDate'},
        {field: 'flightOutNumber'},
        {field: 'passportData'},
        {field: 'passportExpire'},
        {field: 'passportIssuedBy'},
        {field: 'passportNumber'},
    ];

    return (
        <Stack
            sx={{py: 2, height:'100%', boxSizing: 'border-box'}}
            direction="column"
        >
            <Paper sx={{flex: 1, mx: 'auto', width: '90%', p: 1}}>
                <Stack direction="column" spacing={1} sx={{height: 1}}>
                    <DataGridPro
                        density="compact"
                        columns={columns}
                        rows={detailedRawData}
                        sx={{flex: 1}}
                        hideFooter
                        onRowClick={(params: GridRowParams, event: MuiEvent<React.MouseEvent>, details: GridCallbackDetails) => {
                            func(Number(params.id))
                        }}
                    />
                </Stack>

                <Modal
                    open={open}
                    onClose={handleClose}>
                    <div>
                        <ModalContent item={item}/>
                    </div>
                </Modal>
            </Paper>
        </Stack>
    );
}