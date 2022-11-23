import * as React from 'react';
import Box from '@mui/material/Box';
import {DataGridPro, DataGridProProps} from '@mui/x-data-grid-pro';
import {Row} from "../AdminPanel";
import DetailedTable from "./DetailedTable";

type Props = {rows:Row[]}

export default function TableForAdminPanel(props: Props) {
  const columns = [
    {field: 'applicantsData'},
    {field: 'email'},
    {field: 'file'},
    {field: 'fullPrice'},
    {field: 'numberOfApplicants'},
    {field: 'service'},
    {field: 'phone'},
    {field: 'visaStatus'},
    {field: 'visitPurpose'},
    {field: 'uid'},
    ];

  const {rows} = props
  const getDetailPanelHeight = React.useCallback(() => 400, []);

  const getDetailPanelContent = React.useCallback<
    NonNullable<DataGridProProps['getDetailPanelContent']>
    >(({ row }) => <DetailedTable row={row.applicantsData}/>, []);

  return (
    <Box sx={{width: '90%', height: 600, marginLeft: '50px'}}>
      <DataGridPro
        columns={columns}
        rows={rows}
        getDetailPanelHeight={getDetailPanelHeight}
        getDetailPanelContent={getDetailPanelContent}
      />
    </Box>
  );
}
