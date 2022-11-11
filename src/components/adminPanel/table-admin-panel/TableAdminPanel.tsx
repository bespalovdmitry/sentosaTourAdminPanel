import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { DataGridPro, DataGridProProps, GridColumns } from '@mui/x-data-grid-pro';
import {
    randomCreatedDate,
    randomPrice,
    randomCurrency,
    randomCountry,
    randomCity,
    randomEmail,
    randomInt,
    randomAddress,
    randomCommodity,
} from '@mui/x-data-grid-generator';


function DetailPanelContent({ row: rowProp }: { row: Customer }) {
    return (
        <Stack
            sx={{ py: 2, height: '100%', boxSizing: 'border-box' }}
            direction="column"
        >
            <Paper sx={{ flex: 1, mx: 'auto', width: '90%', p: 1 }}>
                <Stack direction="column" spacing={1} sx={{ height: 1 }}>
                    <Typography variant="h6">{`Order #${rowProp.id}`}</Typography>
                    <Grid container>
                        <Grid item md={6}>
                            <Typography variant="body2" color="textSecondary">
                                Customer information
                            </Typography>
                            <Typography variant="body1">{rowProp.customer}</Typography>
                            <Typography variant="body1">{rowProp.email}</Typography>
                        </Grid>
                        <Grid item md={6}>
                            <Typography variant="body2" align="right" color="textSecondary">
                                Shipping address
                            </Typography>
                            <Typography variant="body1" align="right">
                                {rowProp.address}
                            </Typography>
                            <Typography
                                variant="body1"
                                align="right"
                            >{`${rowProp.city}, ${rowProp.country.label}`}</Typography>
                        </Grid>
                    </Grid>
                    <DataGridPro
                        density="compact"
                        columns={[
                            { field: 'name', headerName: 'Product', flex: 1 },
                            {
                                field: 'quantity',
                                headerName: 'Quantity',
                                align: 'center',
                                type: 'number',
                            },
                            { field: 'unitPrice', headerName: 'Unit Price', type: 'number' },
                            {
                                field: 'total',
                                headerName: 'Total',
                                type: 'number',
                                valueGetter: ({ row }) => row.quantity * row.unitPrice,
                            },
                        ]}
                        rows={rowProp.products}
                        sx={{ flex: 1 }}
                        hideFooter
                    />
                </Stack>
            </Paper>
        </Stack>
    );
}

/*//Поля таблицы
applicantsData:[{…}]
email:"ticket1201@gmail.com"
file:[]
fullPrice:60
numberOfApplicants:"1"
service:"Виза с отелем-60"
tel:"+375291099310"
uid:"IhGdGTXxn7"
visa_status:""
visitPurpose:"Туризм"*/
const columns: GridColumns = [
    { field: 'id', headerName: 'Order ID' },
    { field: 'customer', headerName: 'Customer', width: 200 },
    { field: 'date', type: 'date', headerName: 'Placed at' },
    { field: 'currency', headerName: 'Currency' },
    {
        field: 'total',
        type: 'number',
        headerName: 'Total',
        valueGetter: ({ row }) => {
            const subtotal = row.products.reduce(
                (acc: number, product: any) => product.unitPrice * product.quantity,
                0,
            );
            const taxes = subtotal * 0.05;
            return subtotal + taxes;
        },
    },
];

function generateProducts() {
    const quantity = randomInt(1, 5);
    return [...Array(quantity)].map((_, index) => ({
        id: index,
        name: randomCommodity(),
        quantity: randomInt(1, 5),
        unitPrice: randomPrice(1, 1000),
    }));
}

const rows = [
    {
        id: 1,
        customer: 'Matheus',
        email: randomEmail(),
        date: randomCreatedDate(),
        address: randomAddress(),
        country: randomCountry(),
        city: randomCity(),
        currency: randomCurrency(),
        products: generateProducts(),
    },
    {
        id: 2,
        customer: 'Olivier',
        email: randomEmail(),
        date: randomCreatedDate(),
        address: randomAddress(),
        country: randomCountry(),
        city: randomCity(),
        currency: randomCurrency(),
        products: generateProducts(),
    },
    {
        id: 3,
        customer: 'Flavien',
        email: randomEmail(),
        date: randomCreatedDate(),
        address: randomAddress(),
        country: randomCountry(),
        city: randomCity(),
        currency: randomCurrency(),
        products: generateProducts(),
    },
    {
        id: 4,
        customer: 'Danail',
        email: randomEmail(),
        date: randomCreatedDate(),
        address: randomAddress(),
        country: randomCountry(),
        city: randomCity(),
        currency: randomCurrency(),
        products: generateProducts(),
    },
    {
        id: 5,
        customer: 'Alexandre',
        email: randomEmail(),
        date: randomCreatedDate(),
        address: randomAddress(),
        country: randomCountry(),
        city: randomCity(),
        currency: randomCurrency(),
        products: generateProducts(),
    },
    {
        id: 6,
        customer: 'Alexandre',
        email: randomEmail(),
        date: randomCreatedDate(),
        address: randomAddress(),
        country: randomCountry(),
        city: randomCity(),
        currency: randomCurrency(),
        products: generateProducts(),
    },
    {
        id: 7,
        customer: 'Alexandre',
        email: randomEmail(),
        date: randomCreatedDate(),
        address: randomAddress(),
        country: randomCountry(),
        city: randomCity(),
        currency: randomCurrency(),
        products: generateProducts(),
    },
];

type Customer = typeof rows[number];

export default function BasicDetailPanels() {
    const getDetailPanelContent = React.useCallback<
        NonNullable<DataGridProProps['getDetailPanelContent']>
        >(({ row }) => <DetailPanelContent row={row} />, []);

    const getDetailPanelHeight = React.useCallback(() => 400, []);

    return (
        <Box sx={{ width: '100%', height: 400 }}>
            <DataGridPro
                columns={columns}
                rows={rows}
                rowThreshold={0}
                getDetailPanelHeight={getDetailPanelHeight}
                getDetailPanelContent={getDetailPanelContent}
            />
        </Box>
    );
}

//types
export type ApplicantDataType = {
    [index: string]: any
    fullName: string
    male: string
    citizenship: string
    familyStatus: string
    mainApplicantIs: string
    religion: string
    yearIncome: string
    education: string
    position: string

    passportCopyFiles: Array<string>
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
    hasVisaBeforeData: Array<string>
    hasLivedInNonResidenceCountry: string
    hasLivedInNonResidenceCountryData: Array<{country: string, date: string}>
    hasDeported: string
    hasDeportedData: string
    hasConvicted: string
    hasConvictedData: string
    hasVisaReject: string
    hasVisaRejectData: Array<string>
    hasAnotherPassport: string
    hasAnotherPassportData: Array<string>

    photoFiles: Array<string>
    inTicketsFiles: Array<string>
    outTicketsFiles: Array<string>
    additionFiles: Array<string>

    importantDataToCheck: Partial<ImportantDataType>
}

export type ImportantDataType = {
    [index: string]: any
    hasVisaBefore: string
    hasVisaFiles: Array<string>
    hasLivedInNonResidenceCountry: string
    hasLivedInNonResidenceCountryDates: Array<string>

    hasDeported: string
    hasDeportedDescription: string
    hasConvicted: string
    hasConvictedDescription: string
    hasVisaReject: string
    hasVisaRejectFiles: Array<string>
    hasAnotherPassport: string
    hasAnotherPassportFiles: Array<string>
}

