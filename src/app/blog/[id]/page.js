import React from 'react'
import data from '@/data/data.json'
import { notFound } from 'next/navigation';

async function getEntry(data, id) {
    await new Promise(resolve => setTimeout(resolve, 3000))
    const entry = data.filter((entry) => id == entry.id)[0];
    if (!entry) {
        notFound()
    }
    return entry;
}

export default async function ViewBlog({ params }) {

    const id = params.id;
    const entry = await getEntry(data, id);



    return (
        <>
            <main
                className='container flex flex-col gap-5 px-5 py-10 mx-auto'
            >
                <h1
                    className='text-2xl font-bold'>
                    {entry && entry.title}
                </h1>
                <p>
                    {entry && entry.content}
                </p>
            </main>
        </>
    )
}
