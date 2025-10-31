import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';
const ProctectedRoute = () => {
    const {user} = useSelector((state) => state.auth);

    if(!user){
        return Navigate('/');
    }
    return <Outlet/>
}

export default ProctectedRoute