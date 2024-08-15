"use server"

import { revalidatePath } from "next/cache";
import path from "path"
import fs from "fs"
import { notFound, redirect } from 'next/navigation'


export async function create(formData) {

    const newData = {
        id: Math.floor(Math.random() * 100),
        title: formData.get('title'),
        content: formData.get('content')
    }

    if (!(newData.title && newData.content)) {
        return { message: 'Empty Fields' }
    }
    // Resolve the path to your JSON file
    const filePath = path.resolve(process.cwd(), 'src/data/data.json');

    // Step 1: Read the JSON file
    try {
        const data = await fs.promises.readFile(filePath, 'utf8');

        // Step 2: Parse the JSON data
        const jsonData = JSON.parse(data);

        // Step 3: Modify the JSON data (assuming it's an array)
        jsonData.push(newData);

        // Step 4: Convert the updated data back to JSON
        const updatedJsonData = JSON.stringify(jsonData, null, 2);

        // Step 5: Write the modified data back to the file
        await fs.promises.writeFile(filePath, updatedJsonData, 'utf8');

        console.log('Data successfully appended to the JSON file!');
    } catch (err) {
        console.error('Error handling the JSON file:', err);
    }

    revalidatePath('/blog/create');
    redirect('/blog')


}