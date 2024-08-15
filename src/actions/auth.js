"use server"

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function login(formData) {
    const data = {
        email: formData.get('email'),
        password: formData.get('password')
    }
    // database call to check if this user exist
    // verify if password matches
    // create 


    console.log(formData.email)
    if (data.email == "test@example.com" && data.password == "password") {
        await createSession();
        revalidatePath('/login')
        redirect('/')
    }

    return { message: "Invalid Credentials" }

}


async function createSession() {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    const session = Math.random().toString(36).slice(2, 7)

    
    cookies().set('session', session, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: 'lax',
        path: '/'
    })
}