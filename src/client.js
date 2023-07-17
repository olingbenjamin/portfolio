/* eslint-disable no-undef */
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
    projectId:import.meta.env.VITE_REACT_APP_SANITY_PROJECT_ID,
    dataset:'production',
    useCdn:true,
    apiVersion:'2023-11-07',
    token:import.meta.env.VITE_REACT_APP_SANITY_TOKEN
})

const builder = imageUrlBuilder(client)
function urlFor(source){
    return builder.image(source)
}

export {urlFor,client}