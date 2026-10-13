import { Sparkles } from "lucide-react";
import type { StudioViewProps } from "../../types";
import { studioStyles } from "../../styles";
import ControlPanel from "./ControlPanel";
import ImageOutputPanel from "./ImageOutputPanel";
import VideoOutputPanel from "./VideoOutputPanel";
//import { ImageOutputPanel } from "./ImageOutputPanel";
//import { VideoOutputPanel } from "./VideoOutputPanel";



export type { StudioViewProps };

export function StudioView(props: StudioViewProps) {
  return (
    <div className={studioStyles.app}>
      <header className={studioStyles.header}>
        <div className={studioStyles.headerInner}>
          <div className={studioStyles.headerBrand}>
            <div className={studioStyles.logo}>
              <Sparkles className="size-5" strokeWidth={2.25} />
            </div>
            <span className={studioStyles.brand}>Creative Studio</span>
          </div>
        </div>
      </header>

        <div className={studioStyles.workspace}>
        <ControlPanel
          imagePrompt={props.imagePrompt}
          onImagePromptChange={props.onImagePromptChange}
          videoPrompt={props.videoPrompt}
          onVideoPromptChange={props.onVideoPromptChange}
          generatedImageUrl={props.generatedImageUrl}
          imageGenerating={props.imageGenerating}
          videoGenerating={props.videoGenerating}
          onGenerateImage={props.onGenerateImage}
          onGenerateVideo={props.onGenerateVideo}
        />       
       <div  className={studioStyles.outputsStack}>
            <ImageOutputPanel
            generatedImageUrl={props.generatedImageUrl}
            imageError={props.imageError}
            imageGenerating={props.imageGenerating}
            onGenerateImage={props.onGenerateImage}     
            />

          <VideoOutputPanel
          generatedImageUrl={props.generatedImageUrl}
          generatedVideoUrl={props.generatedVideoUrl}
          videoError={props.videoError}
          onGenerateVideo={props.onGenerateVideo}
          videoGenerating={props.videoGenerating}
        />
        </div> 
      </div>
    </div>
  );
}

export default  StudioView