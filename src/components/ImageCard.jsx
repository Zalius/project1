import React from 'react'

const ImageCard = (props) => {
    return (
        <div className="p-2 rounded-lg shadow-xl lg:flex lg:max-w-lg border">
            <img
                className="object-cover w-full lg:w-40 lg:h-40"
                src={props.src}
                alt="image"
            />
            <div className="pl-2">
                <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                    {props.title}
                </h4>
                <p className="mb-2 leading-normal">
                    {props.text}
                </p>
                <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                    Read more
                </button>
            </div>
        </div>


    )
}

export default ImageCard