const API = "http://localhost:3000"
const FAIL= "Generation failed. Try again";

export async function  generateImage(prompt: string):
Promise<{outputUrl:string}  | {error:string} >{
    const  res = await  fetch(`${API}/api/generations/image`,{
           method:'POST',
           headers:{"Content-Type":"application/json"},
           body:JSON.stringify({prompt})

    })

    const data =  await  res.json()

    return   data.outputUrl ? {outputUrl: data.outputUrl} : {error :data.error ?? FAIL}
}



export async function  generateVideo(prompt: string, imageUrl:string):
Promise<{outputUrl:string}  | {error:string} >{
    const  res = await  fetch(`${API}/api/generations/video`,{
           method:'POST',
           headers:{"Content-Type":"application/json"},
           body:JSON.stringify({prompt,imageUrl})

    })

    const data =  await  res.json()

    return   data.outputUrl ? {outputUrl: data.outputUrl} : {error :data.error ?? FAIL}
}