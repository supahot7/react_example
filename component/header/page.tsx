import LinkRoutes from '@/utils/constant'
import Link from 'next/link'
import React from 'react'

const header = () => {
    return (
        <div className='w-full flex flex-row justify-between p-6 bg-blue-500 text-white'>
            <Link href={'/'} className='text-xl font-bold'>React example</Link>
            <div className='flex flex-row gap-4'>
                <Link href={LinkRoutes.home}>Inicio</Link>
                <Link href={LinkRoutes.example_home}>Ejemplos</Link>
            </div>
        </div>
    )
}
export default header