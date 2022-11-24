import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import {useAppDispatch, useAppSelector} from '../hooks/hooks';
import {useNavigate} from 'react-router-dom';
import {useAuth} from '../hooks/use-auth';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {setLevel} from '../state/appSlice';

export default function ButtonAppBar() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const {isAuth} = useAuth();
    const isAdmin = useAppSelector(state => state.appSlice.user_access_level) === 'admin'

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    {isAuth && (
                        <>
                            <Button
                                color="inherit"
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MenuIcon/>
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                                sx={{left: 10, top: 10}}
                            >
                                <MenuItem onClick={() => {
                                    handleClose()
                                    navigate('/visa')
                                }}>Visa</MenuItem>
                                {isAdmin && <MenuItem onClick={() => {
                                    handleClose()
                                    navigate('/panel')
                                }}>Admin panel</MenuItem>}
                            </Menu>
                        </>
                    )}

                    <Typography variant="h6" component="div" sx={{flexGrow: 1, cursor: 'default', textAlign:'center'}}>
                        Sentosa Tour Admin Panel
                    </Typography>
                    {isAuth
                        ? <Button color="inherit" onClick={() => {
                            dispatch(setLevel({level: null}))
                        }}>Logout</Button>
                        : <Button color="inherit" onClick={() => navigate('/')}>Login</Button>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
}
