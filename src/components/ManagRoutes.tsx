import {Navigate, Outlet} from 'react-router-dom';
import React from 'react';
import {useAppSelector} from '../hooks/hooks';

export const ManagRoutes = () => {
    const user = useAppSelector(state => state.appSlice.user_access_level) === 'manag'

    return (
        user ? <Outlet/> : <Navigate to={'/login'}/>
    )
}