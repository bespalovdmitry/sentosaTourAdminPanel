import * as React from 'react';
import Box from '@mui/material/Box';
import {DataGridPro, DataGridProProps} from '@mui/x-data-grid-pro';
import {Row} from '../AdminPanel';
import DetailedTable from './DetailedTable';

type Props = { rows: Row[] }

export default function TableForAdminPanel(props: Props) {
    const columns = [
        {field: 'appDate', headerName: 'Date', minWidth: 200},
        {field: 'email', headerName: 'Email', flex: 1, minWidth: 220},
        {field: 'file', headerName: 'Files', flex: 1},
        {field: 'fullPrice', headerName: 'Service Price', flex: 1},
        {field: 'numberOfApplicants', headerName: 'Applicants', flex: 1},
        {field: 'service', headerName: 'Service', flex: 1},
        {field: 'phone', headerName: 'Phone', flex: 1},
        {field: 'visaStatus', headerName: 'Visa Status', flex: 1},
        {field: 'visitPurpose', headerName: 'Visit purpose', flex: 1},
        {field: 'uid', flex: 1},
    ];

    const {rows} = props
    const getDetailPanelHeight = React.useCallback(() => 400, []);

    const getDetailPanelContent = React.useCallback<NonNullable<DataGridProProps['getDetailPanelContent']>>(({row}) =>
        <DetailedTable row={row.applicantsData}/>, []);

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
                disableSelectionOnClick
                pagination
            />
        </Box>
    );
}
