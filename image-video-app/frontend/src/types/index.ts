export  type  StudioState = {
    imagePrompt:string;
    videoPrompt:string;
    generatedImageUrl:string | null;
    generatedVideoUrl: string | null;
    imageError:string | null;
    videoError:string | null;
    imageGenerating:boolean;
    videoGenerating:boolean;
}

export  type  StudioViewProps = StudioState & {
    onImagePromptChange:  (value: string) => void;
    onVideoPromptChange:  (value: string) => void;
    onGenerateImage:  () =>  void;
    onGenerateVideo:  () =>  void;
}

export  type ControlPanelProps =  Pick<
        StudioViewProps,
       | "imagePrompt"
       | "onImagePromptChange"
       | "videoPrompt"
       | "onVideoPromptChange"
       | "generatedImageUrl"
       | "imageGenerating"
       | "videoGenerating"
       | "onGenerateImage"
       | "onGenerateVideo"
        >;

        export  type ImageOutputPanelProps=Pick<
        StudioViewProps,
        | "generatedImageUrl"
        | "imageError"
        | "imageGenerating"
        | "onGenerateImage" 
        >

        export type VideoOutputPanelProps = Pick<
         StudioViewProps,
        | "generatedImageUrl"
        |  "generatedVideoUrl"
        | "videoError"
        | "videoGenerating"
        | "onGenerateVideo"  
        >;
  