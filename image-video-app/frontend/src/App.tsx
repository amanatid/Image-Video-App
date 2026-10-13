import StudioView from "./components/studio/StudioView"
import { useStudio } from "./hooks/useStudio"


function App() {
  

  return (
        <StudioView {...useStudio()}/>
  )
}

export default App
