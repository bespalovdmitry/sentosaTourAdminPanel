import * as React from "react"
import {ApplicantsDataType} from "../../../models/applicantModel";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import DialogContentText from '@mui/material/DialogContentText';
import Card from '@mui/material/Card';
import Box from "@mui/material/Box";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


type Props = {
    item: ApplicantsDataType | undefined
    descriptionElementRef: any
}
export const ModalContent = (props: Props) => {
    const {item} = props;
    console.log(item)

    let stringifyItem = JSON.stringify(item)
    let style = {
        backgroundColor: 'white'
    }

    return (
        // <div style={style}>
        //   {
        //     item &&
        //       <Paper sx={{mb: 3}}>
        //         <Typography>Full name: {item.fullName}</Typography>
        //         <Typography>Gender: {item.male}</Typography>
        //         <Typography>Citizenship: {item.citizenship}</Typography>
        //         <Typography>Marital status: {item.familyStatus}</Typography>
        //       </Paper>
        //   }
        // </div>
        <>

            <DialogTitle id="scroll-dialog-title">{item?.fullName}</DialogTitle>
            <DialogContent dividers>
                <DialogContentText
                    id="scroll-dialog-description"
                    ref={props.descriptionElementRef}
                    tabIndex={-1}
                >
                    <Card sx={{display: 'flex'}}>
                        <Box sx={{display: 'flex', flexDirection: 'column'}}>
                            <CardContent sx={{flex: '1 0 auto'}}>
                                <Typography component="div" variant="h5">
                                    Live From Space
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    Mac Miller
                                </Typography>
                            </CardContent>
                            <CardMedia
                                component="img"
                                sx={{width: 151}}
                                image="/static/images/cards/live-from-space.jpg"
                                alt="Live from space album cover"
                            />
                        </Box>
                    </Card>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => {
                }}>Cancel</Button>
                <Button onClick={() => {
                }}>Subscribe</Button>
            </DialogActions>
        </>
    );
}