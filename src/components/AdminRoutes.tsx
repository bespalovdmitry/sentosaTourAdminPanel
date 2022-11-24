import {Navigate, Outlet} from 'react-router-dom';
import React from 'react';
import {useAppSelector} from '../hooks/hooks';

export const AdminRoutes = () => {
    const isAdmin = useAppSelector(state => state.appSlice.user_access_level) === 'admin'

    return (
        isAdmin ? <Outlet/> : <Navigate to={'/'}/>
    )
}