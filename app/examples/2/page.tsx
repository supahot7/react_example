
import UserCard, { IUserProperties } from '@/component/UserCard';
import UserForm from '@/component/UserForm';
import { Metadata } from 'next';
import React, { ChangeEvent, useState } from 'react'

export const metadata:Metadata = {
    title: 'Ejemplo 2'
}

const Example2 = () => {
    return <UserForm/>
}
export default Example2