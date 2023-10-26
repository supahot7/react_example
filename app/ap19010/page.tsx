import Image from "next/image";
import React from "react";
import BkbImage from '@/public/bkb.jpg';
import SHowImage from '@/public/70s.jpg'
import MisImage from '@/public/misfits.jpg'

const TopPage = () =>{
    return(
        <div>
            <div className='grid grid-cols-5 grid-rows-5'>
            <div className='bg-red-500 p-10 row-span-5 col-span-3'>
                <h1>Puesto 1</h1>
                <h2>Breaking Bad</h2>
                <Image src={BkbImage} alt={'Image of breaking bad'}/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nulla. Voluptas delectus nesciunt nulla ut, fugiat unde pariatur aperiam accusantium enim asperiores vitae sed neque facere eveniet, officia quis nobis!</p>
                </div>
            <div className='bg-blue-500 p-10 row-span-3 col-span-2'>
                <h1>Puesto 2</h1>
                <h2>That 70's show</h2>
                <Image src={SHowImage} alt={'Image of 70 show'}/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, beatae est iste, reprehenderit eius velit, unde magni dolor eum non consectetur distinctio sunt adipisci exercitationem dignissimos natus corporis totam. Odio!</p>
                </div>
            <div className='bg-green-500 p-10 row-span-2 col-span-2'>
                <h1>Puesto 3</h1>
                <h2>Misfits</h2>
                <Image src={MisImage} alt={'Image of misfists'}/>
                </div>
            </div>
        </div>
    )
}

export default TopPage