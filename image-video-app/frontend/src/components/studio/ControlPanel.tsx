import { Film, ImageIcon,Loader2,Sparkles, VideoIcon } from "lucide-react";
import { studioStyles } from "../../styles";
import type { ControlPanelProps } from "../../types";
import {
  IMAGE_PROMPT_SUGGESTIONS,
  MOTION_PROMPT_SUGGESTIONS,
} from "./promptSuggestions";

export function ControlPanel({
  imagePrompt,
  onImagePromptChange,
  videoPrompt,
  onVideoPromptChange,
  generatedImageUrl,
  imageGenerating,
  videoGenerating,
  onGenerateImage,
  onGenerateVideo,
}: ControlPanelProps){

    const  canImage = !imageGenerating && Boolean(imagePrompt.trim())
    const  canVideo= !videoGenerating   &&  Boolean(generatedImageUrl) &&  Boolean(videoPrompt.trim())

    return (
        <aside className={studioStyles.controlPanel}>
      <div>
        <h2 className={studioStyles.panelTitle}>Create</h2>
        <p className={studioStyles.panelDesc}>
          Generate a still image, then animate it with Higgsfield.
        </p>
      </div>

      <div className={studioStyles.sectionHeader}>
          <ImageIcon className="size-4" />
          <span>Image</span>
        </div>  

         <p className={studioStyles.suggestLabel}>Try a prompt</p>
        <div className={studioStyles.suggestList}>
          {IMAGE_PROMPT_SUGGESTIONS.map((item) => (
            <button
              key={item.label}
              type="button"
              disabled={imageGenerating}
              className={studioStyles.suggestBtn}
              onClick={() => onImagePromptChange(item.prompt)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <label className={studioStyles.label} htmlFor="image-prompt">
        Image prompt
      </label>
      <textarea
        id="image-prompt"
        value={imagePrompt}
        onChange={(e) => onImagePromptChange(e.target.value)}
        disabled={imageGenerating}
        placeholder="Cinematic product shot, warm light, shallow depth of field..."
        className={studioStyles.textarea}
      />
      
     <button
        type="button"
        className={studioStyles.btnPrimaryFull}
        disabled={!canImage}
        onClick={() => void onGenerateImage()}
      >
        {imageGenerating ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            <span>Generating image...</span>
          </>
        ) : (
          <>
            <Sparkles className="size-4" />
            <span>Generate image</span>
          </>
        )}
      </button>
      
      <div className={studioStyles.divider} />

      <div className={studioStyles.sectionHeader}>
        <VideoIcon className="size-4 text-[#6D3DF6]" />
        Video
      </div>


      <div className={studioStyles.sourceBlock}>
        <p className={studioStyles.sourceLabel}>Source</p>
        {generatedImageUrl ? (
          <>
            <div className={studioStyles.sourceThumb}>
              <img
                src={generatedImageUrl}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <p className={`${studioStyles.sourceHint} mt-2`}>Using your generated image.</p>
          </>
        ) : (
          <p className={studioStyles.sourceHint}>
            Generate an image above to unlock video.
          </p>
        )}
      </div>

      <p className={studioStyles.suggestLabel}>Motion prompt samples</p>
      <div className={studioStyles.suggestList}>
        {MOTION_PROMPT_SUGGESTIONS.map((item) => (
          <button
            key={item.label}
            type="button"
            disabled={videoGenerating || !generatedImageUrl}
            className={studioStyles.suggestBtn}
            onClick={() => onVideoPromptChange(item.prompt)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <label className={studioStyles.label} htmlFor="video-prompt">
        Video prompt
      </label>
      <textarea
        id="video-prompt"
        value={videoPrompt}
        onChange={(e) => onVideoPromptChange(e.target.value)}
        disabled={videoGenerating || !generatedImageUrl}
        placeholder="Slow push-in, gentle parallax, soft bokeh in the background..."
        className={studioStyles.textarea}
      />

      <div className="mt-3">
        <span className={studioStyles.pillModel}>
          <Film className="size-3.5" />
          Kling
        </span>
      </div>

      <button
        type="button"
        className={studioStyles.btnPrimaryFull}
        disabled={!canVideo}
        onClick={() => void onGenerateVideo()}
      >
        {videoGenerating ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            <span>Generating video...</span>
          </>
        ) : (
          <>
            <Film className="size-4" />
            <span>Generate video</span>
          </>
        )}
      </button>

      </aside>
    );
}

export default  ControlPanel