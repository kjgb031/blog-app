import React from 'react'
import data from '@/data/data.json'


async function getData() {
    await new Promise(resolve => setTimeout(resolve, 3000));
    return data;
}

export default async function ListBlog() {

    const data = await getData();


    return (
        <>
            <h1
                className='text-2xl'
            >
                ListBlog
            </h1>

            <div>
                {data && data.map(entry => {
                    return (<p>
                        {entry.title}

                    </p>)
                })}

            </div>
        </>
    )
}
