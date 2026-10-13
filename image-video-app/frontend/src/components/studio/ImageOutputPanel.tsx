import { AlertCircle, ImageIcon, Loader2 } from "lucide-react";
import { studioStyles } from "../../styles";
import type { ImageOutputPanelProps } from "../../types";

export function ImageOutputPanel({
  generatedImageUrl,
  imageError,
  imageGenerating,
  onGenerateImage,
}: ImageOutputPanelProps) {
  return (
    <section className={studioStyles.outputPanel} aria-label="Image output">
      <header className={studioStyles.outputHeader}>
        <span className={studioStyles.outputTitle}>Image</span>
        <span className={studioStyles.outputModel}>Soul</span>
      </header>

      <div className={studioStyles.canvasArea}>
        <div className={studioStyles.canvasFrame}>
          {imageGenerating && (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Loader2 className="size-9 animate-spin text-[#6D3DF6]" />
              <p className="mt-3 text-[13px] font-medium text-[#514A44]">
                Creating your image...
              </p>
            </div>
          )}

          {imageError && !imageGenerating && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#FFF1F0]/80">
              <div className={studioStyles.errorBox}>
                <AlertCircle className="size-8 text-[#C53F3F]" />
                <p className={studioStyles.errorTitle}>{imageError}</p>
                <button
                  type="button"
                  className={studioStyles.btnRetry}
                  onClick={() => void onGenerateImage()}
                >
                  Try Again
                </button>
              </div>
            </div>
          )}

          {!imageGenerating && !imageError && !generatedImageUrl && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={studioStyles.emptyCompact}>
                <div className={studioStyles.emptyIcon}>
                  <ImageIcon className="size-5" />
                </div>
                <p className={studioStyles.emptyTitle}>Your image will appear here</p>
              </div>
            </div>
          )}

          {generatedImageUrl && !imageGenerating && (
            <img
              src={generatedImageUrl}
              alt=""
              className={`${studioStyles.media} relative z-[1]`}
            />
          )}
        
        </div>
      </div>     
    </section>  
   );
 }

 export default ImageOutputPanel
