import { AlertCircle, Loader2, VideoIcon } from "lucide-react";
import { studioStyles } from "../../styles";
import type { VideoOutputPanelProps } from "../../types";
import { VideoPlayer } from "./VideoPlayer";

export function VideoOutputPanel({
  generatedImageUrl,
  generatedVideoUrl,
  videoError,
  videoGenerating,
  onGenerateVideo,
}: VideoOutputPanelProps) {
  return (

<section className={studioStyles.outputPanel} aria-label="Video output">
  <header className={studioStyles.outputHeader}>
    <span className={studioStyles.outputTitle}>Video</span>
    <span className={studioStyles.outputModel}>Kling</span>
  </header>
  <div className={studioStyles.canvasArea}>
    <div className={studioStyles.canvasFrame}>
      {!generatedImageUrl && !videoGenerating && !generatedVideoUrl && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={studioStyles.emptyCompact}>
            <div className={studioStyles.emptyIcon}>
              <VideoIcon className="size-5" />
            </div>
            <p className={studioStyles.emptyTitle}>Ready for motion</p>
          </div>
        </div>
      )}

      {generatedVideoUrl && !videoGenerating && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <VideoPlayer url={generatedVideoUrl} />
        </div>
      )}

      {!generatedVideoUrl && generatedImageUrl && (
        <>
          <img
            src={generatedImageUrl}
            alt=""
            className={`${studioStyles.media} relative z-[1] filter brightness-50`}
          />
          <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center text-center p-4">
            <VideoIcon className="size-8 text-white mb-2" />
            <p className="text-white font-medium text-[15px]">
              Ready for motion
            </p>
          </div>
        </>
      )}

      {videoGenerating && (
        <div className="absolute inset-0 z-[3] flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm">
          <Loader2 className="size-9 animate-spin text-[#6D3DF6]" />
          <p className="mt-3 text-[13px] font-medium text-white">
            Animating video...
          </p>
        </div>
      )}

      {videoError && !videoGenerating && (
        <div className="absolute inset-0 z-[4] flex items-center justify-center bg-[#FFF1F0]/80">
          <div className={studioStyles.errorBox}>
            <AlertCircle className="size-8 text-[#C53F3F]" />
            <p className={studioStyles.errorTitle}>{videoError}</p>
            <button
              type="button"
              className={studioStyles.btnRetry}
              onClick={() => void onGenerateVideo()}
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </div>
  </div>
</section>
  )
}

export default VideoOutputPanel;