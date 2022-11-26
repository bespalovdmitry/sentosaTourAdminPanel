import * as React from 'react';
import Box from '@mui/material/Box';
import {DataGridPro, DataGridProProps} from '@mui/x-data-grid-pro';
import {Row} from '../AdminPanel';
import DetailedTable from './DetailedTable';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {useState} from 'react';

type Props = { rows: Row[] }
/*const commonModalState = {
    _id: '',
    cardsPack_id: '',
    name: '',
    private: false as boolean | undefined,
    question: '',
    answer: '',
    title: '',
    packCover: '',
    questionURL: '',
    answerURL: '',
    openAddPackModal: false as boolean | undefined,
    openEditPackModal: false as boolean | undefined,
    openDelPackModal: false as boolean | undefined,
    openAddCardModal: false as boolean | undefined,
    openEditCardModal: false as boolean | undefined,
    openDelCardModal: false
}
type CommonModalStateType = typeof commonModalState*/


export default function TableForAdminPanel({rows}: Props) {
   /* const [modalData, setModalData] = useState<CommonModalStateType>(commonModalState)
    const openDeletePackModal = (_id: string, name: string) => {
        setModalData({...modalData, _id, name, title: 'Delete Pack', openDelPackModal: true})
    }*/

    const columns = [
        {field: 'appDate', headerName: 'Date', flex: 1, minWidth: 140},
        {field: 'email', headerName: 'Email', flex: 1, minWidth: 220},
        {field: 'file', headerName: 'Files', flex: 1},
        {field: 'fullPrice', headerName: 'Service Price', flex: 1},
        {field: 'numberOfApplicants', headerName: 'Applicants', flex: 1},
        {field: 'service', headerName: 'Service', flex: 1},
        {field: 'phone', headerName: 'Phone', flex: 1},
        {field: 'visaStatus', headerName: 'Visa Status', flex: 1},
        {field: 'visitPurpose', headerName: 'Visit purpose', flex: 1},
        {field: 'uid', flex: 1},
    /* {filed: 'actions',  headerName: 'Actions', flex:1,
         renderCell: (params) => (
             <>
                     <IconButton onClick={() => openDeletePackModal(params.row._id, params.row.name)}>
                         <DeleteOutlineIcon/>
                     </IconButton>
             </>
         ),
        }*/
    ];

    const getDetailPanelHeight = React.useCallback(() => 300, []);

    const getDetailPanelContent = React.useCallback<NonNullable<DataGridProProps['getDetailPanelContent']>>(({row}) =>
        <DetailedTable row={row.applicantsData}/>, []);

    const setRowColor = (serviceName: string) => {
        return (serviceName === 'Срочная виза без отеля-120') || (serviceName === 'Срочная виза с отелем-100') ? 'bg-orange-100' : '';
    }

    return (
        <Box sx={{width: '90%', height: '80vh', margin: '0 auto'}}>
            <DataGridPro
                initialState={{
                    sorting: {
                        sortModel: [{field: 'appDate', sort: 'desc'}]
                    }
                }}
                pageSize={90}
                columns={columns}
                rows={rows}
                getDetailPanelHeight={getDetailPanelHeight}
                getDetailPanelContent={getDetailPanelContent}
                getRowClassName={(params) => `${setRowColor(params.row.service)}`}
                disableSelectionOnClick
                pagination
            />
        </Box>
    );
}
