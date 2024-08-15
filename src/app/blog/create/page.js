"use client"

import { create } from '@/actions/blog';
import React from 'react'

export default function CreateBlog() {

    async function submitAction(formData) {
        const res = await create(formData);
        if (res.message) {
            alert(res.message)
        }
    }

    return (
        <>

            <main
                className='container px-5 py-10 mx-auto'
            >
                <h1
                    className='text-2xl font-bold'
                >
                    Create a Blog Post
                </h1>
                <form
                    action={submitAction}
                    className='flex flex-col gap-5'
                >
                    <label htmlFor='title'>Title</label>
                    <input className='border rounded' id='title' name='title' type='text' />
                    <label htmlFor='content'>Content</label>
                    <textarea className='border rounded' id='content' name='content'></textarea>
                    <button
                        className='px-2 py-4 text-white bg-green-500'
                    >
                        Submit
                    </button>
                </form>

            </main>
        </>
    )
}
