import React from 'react'
import { } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import ImageCard from './ImageCard'
import bg1 from '../assets/aur.jpg'
import bg2 from '../assets/Bioshock.jpg'
import bg3 from '../assets/earth.jpg'
import bg4 from '../assets/solitude.jpg'


function Cards() {
    return (
        <div className='bg-black text-white p-1'>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 rounded-lg shadow-md">
            <ImageCard src={bg1} title="Horizontal Card" text="react tailwind css horizontal card with image It is a long
                    established fact that a reader will be distracted by the
                    readable content."/>
            <ImageCard src={bg2} title="Horizontal Card" text="react tailwind css horizontal card with image It is a long
                    established fact that a reader will be distracted by the
                    readable content."/>

            <ImageCard src={bg3} title="Horizontal Card" text="react tailwind css horizontal card with image It is a long
                    established fact that a reader will be distracted by the
                    readable content."/>

            <ImageCard src={bg4} title="Horizontal Card" text="react tailwind css horizontal card with image It is a long
                    established fact that a reader will be distracted by the
                    readable content."/>
            </div>
        </div>


    )
}

export default Cards

{/* <main>
<ImageCard imgSrc={bgImage}>
    <h3 className='text-xl font-bold mb-2'>Test123</h3>
    <p>
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore
        et dolore magna aliqua.
    </p>
    <div className='space-x-4 mt-4'>
        <button className='btn'>
        </button>

    </div>
</ImageCard>
</main> */}

{/* <div className='bg-black text-white'>
<div {...props} className='relative max-w-xs overflow-hidden rounded-2xl shadow-lg group'>
    <img src={imgSrc} alt="" className='transition-transform group-hover:scale-110 duration-200'/>
    <div className='absolute inset-0 flex  items-end bg-gradient-to-t to-transparent'>
        <div className='p-4'>{children}</div>
    </div>
</div>
</div> */}