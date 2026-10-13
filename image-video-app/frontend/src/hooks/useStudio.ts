import { useCallback, useState } from "react";
import  type { StudioState, StudioViewProps }  from "../types";
import  *  as api  from  '../api/client'

const  intialStudioState: StudioState  = {
     imagePrompt: "",
     videoPrompt:"",
     generatedImageUrl:null,
     generatedVideoUrl:null,
     imageError:null,
     videoError:null,
     imageGenerating:false,
     videoGenerating:false
}

export function  useStudio()  : StudioViewProps{
    const [studioState,  setStudioState] = useState<StudioState>(intialStudioState)
    
    const  updateStudioState = useCallback((next: Partial<StudioState>)=>{
           setStudioState((prev)=>({...prev, ...next}))
    },[])

    const  onGenerateImage = useCallback(async()=>{
          
           if( studioState.imageGenerating ||  !studioState.imagePrompt.trim())  return
           
           updateStudioState({
                  imageGenerating:true,
                  imageError:null,
                  generatedImageUrl:null,
                  generatedVideoUrl:null,
                  videoError:null
           })

         const  result = await  api.generateImage(studioState.imagePrompt.trim())

         updateStudioState({
            imageGenerating:false,
            generatedImageUrl:"outputUrl"  in result ? result.outputUrl : null,
            imageError:  "outputUrl"  in result  ?  null : result.error 
        })

    },[studioState.imageGenerating, studioState.imagePrompt,updateStudioState])

   
   const  onGenerateVideo = useCallback(async()=>{
          
           if( studioState.videoGenerating ||  
               !studioState.videoPrompt.trim() ||  
               !studioState.generatedImageUrl) 
                return
           
           updateStudioState({
                  videoGenerating:true,
                  generatedVideoUrl:null,
                  videoError:null
           })

         const  result = await  api.generateVideo(studioState.imagePrompt.trim(),studioState.generatedImageUrl)

         updateStudioState({
            videoGenerating:false,
            generatedVideoUrl:"outputUrl"  in result ? result.outputUrl : null,
            imageError:  "outputUrl"  in result  ?  null : result.error 
        })

    },[studioState.videoGenerating, studioState.videoPrompt,updateStudioState, studioState.generatedImageUrl])

    return {
        ...studioState,
        onImagePromptChange: (imagePrompt) => updateStudioState({imagePrompt}),
        onVideoPromptChange:(videoPrompt)=>updateStudioState({videoPrompt}),
        onGenerateImage,
        onGenerateVideo
    }
}
