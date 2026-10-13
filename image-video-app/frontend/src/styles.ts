/** Creative workstation - warm palette, no shadow */

export const studioStyles = {
  app: "h-screen overflow-hidden bg-white text-[#17120F] antialiased",

  header: "flex h-16 shrink-0 items-center border-b border-[#EBE1D6] bg-white px-8",
  headerInner: "flex w-full items-center justify-between",
  headerBrand: "flex items-center gap-3",
  logo:
    "flex size-10 items-center justify-center rounded-[12px] bg-[#6D3DF6] text-white shadow-[0_8px_22px_rgba(109,61,246,0.22)]",
  brand:
    "text-[18px] font-semibold tracking-[-0.02em] text-[#17120F]",

  workspace:
    "grid h-[calc(100vh-64px)] min-h-0 grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-6 bg-[#FFFDF9] px-6 py-5 max-[900px]:grid-cols-1",

  controlPanel:
    "flex min-h-0 flex-col overflow-y-auto rounded-[22px] border border-[#EBE1D6] bg-white p-5 shadow-[0_12px_40px_rgba(40,25,10,0.055)]",
  panelTitle:
    "text-[22px] font-semibold tracking-[-0.025em] text-[#17120F]",
  panelDesc: "mt-1 text-[14px] leading-6 text-[#6D6259]",

  sectionHeader:
    "mt-6 flex items-center gap-2 text-[15px] font-semibold text-[#17120F] first:mt-0",
  suggestLabel: "mt-4 text-[12px] font-semibold uppercase tracking-wide text-[#94877D]",
  suggestList: "mt-2 flex flex-col gap-1.5",
  suggestBtn:
    "rounded-[10px] border border-[#EBE1D6] bg-[#FFFDF9] px-3 py-2 text-left text-[13px] font-medium leading-snug text-[#514A44] transition hover:border-[#D9CCFF] hover:bg-[#F2EDFF] hover:text-[#17120F] disabled:opacity-45",

  label: "mt-3 text-[13px] font-semibold text-[#282420]",
  textarea:
    "mt-2 min-h-[100px] w-full resize-none rounded-[14px] border border-[#EBE1D6] bg-[#FFFDFB] px-4 py-3 text-[15px] leading-6 text-[#17120F] outline-none placeholder:text-[#A69C93] focus:border-[#8FAEFF] focus:ring-4 focus:ring-[#6D3DF6]/[0.07] disabled:opacity-50",

  pillModel:
    "inline-flex h-8 items-center gap-1.5 rounded-[9px] border border-[#D9CCFF] bg-[#F2EDFF] px-3 text-[13px] font-semibold text-[#6D3DF6]",
  pillMeta:
    "inline-flex h-8 items-center rounded-[9px] border border-[#E6DED6] bg-[#FFFDF9] px-3 text-[13px] font-medium text-[#514A44]",

  btnPrimaryFull:
    "mt-4 inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-[12px] bg-[#6D3DF6] px-5 text-[15px] font-semibold text-white shadow-[0_8px_22px_rgba(109,61,246,0.20)] transition hover:bg-[#5C2FE0] disabled:cursor-not-allowed disabled:bg-[#D0CEFA] disabled:shadow-none",

  divider: "my-6 h-px bg-[#F0E8DE]",

  sourceBlock: "mt-3 rounded-[12px] border border-[#EBE1D6] bg-[#FFFDF9] p-3",
  sourceLabel: "text-[12px] font-semibold uppercase tracking-wide text-[#94877D]",
  sourceHint: "mt-1 text-[13px] leading-6 text-[#6D6259]",
  sourceThumb:
    "mt-2 aspect-video w-[110px] overflow-hidden rounded-[10px] border border-[#EBE1D6] bg-[#FFF8EF]",

  outputsStack:
    "flex min-h-0 flex-1 flex-col gap-4",

  outputPanel:
    "flex min-h-0 flex-1 flex-col overflow-hidden rounded-[22px] border border-[#EBE1D6] bg-white shadow-[0_14px_45px_rgba(40,25,10,0.055)]",
  outputHeader:
    "flex h-11 shrink-0 items-center justify-between border-b border-[#F0E8DE] px-4",
  outputTitle: "text-[15px] font-semibold text-[#17120F]",
  outputModel: "text-[12px] font-medium text-[#6D6259]",

  canvasArea:
    "relative flex min-h-0 flex-1 items-center justify-center bg-[#FFF8EF] p-3",
  canvasFrame:
    "relative flex h-full w-full items-center justify-center overflow-hidden rounded-[14px] bg-[#FFF8EB]",

  emptyCompact: "flex flex-col items-center px-4 text-center",
  emptyIcon:
    "flex size-11 items-center justify-center rounded-[12px] bg-[#F2EDFF] text-[#6D3DF6]",
  emptyTitle: "mt-3 text-[15px] font-semibold text-[#17120F]",
  emptyBody: "mt-1 text-[13px] leading-5 text-[#6D6259]",

  media: "max-h-full max-w-full object-contain",

  readyBadge:
    "absolute left-3 top-3 rounded-[8px] border border-[#D9CCFF] bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-[#6D3DF6] shadow-sm",

  videoOverlay:
    "absolute inset-0 flex items-center justify-center bg-white/65 backdrop-blur-[2px]",
  overlayCard:
    "rounded-[14px] border border-[#EBE1D6] bg-white/95 px-5 py-4 text-center shadow-[0_14px_40px_rgba(40,25,10,0.10)]",

  errorBox:
    "flex flex-col items-center px-4 text-center",
  errorTitle: "mt-2 text-[15px] font-semibold text-[#C53F3F]",
  btnRetry:
    "mt-3 inline-flex h-9 items-center rounded-[10px] border border-[#D0D0C2] bg-white px-4 text-[13px] font-medium text-[#514A44] hover:bg-[#FFF8EF]",
} as const;
