"use client"

import login from '@/actions/auth'
import React from 'react'

export default function LoginForm() {

    const handleSubmit = async (formData) => {
        const res = await login(formData)
        if (res && res.message) {
            alert(res.message)
        }
    }

    
    return (
        <form
            action={handleSubmit}
            className='flex flex-col gap-5'
        >
            <label>
                Email
            </label>
            <input className='border rounded' type='text' id='email' name='email' />
            <label>
                Password
            </label>
            <input className='border rounded' type='password' id='password' name='password' />
            <button
                className='px-2 py-4 text-white bg-green-500'
                type='submit'
            >
                Login
            </button>
        </form>
    )
}
