import { useControls } from "react-zoom-pan-pinch"
import { Plus, Minus, X } from "lucide-react"

const ControlsZoom = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className="absolute top-3 right-3 rounded-4xl p-1 bg-slate-900/60 text-white flex items-center gap-1 backdrop-blur-3xl z-30">
      <button type="button" className="btn btn-xs btn-ghost btn-circle" onClick={() => zoomIn()}>
        <Plus size={18} />
      </button>
      <button type="button" className="btn btn-xs btn-ghost btn-circle" onClick={() => zoomOut()}>
        <Minus size={18} />
      </button>
      <button type="button" className="btn btn-xs btn-ghost btn-circle" onClick={() => resetTransform()}>
        <X size={18} />
      </button>
    </div>
  )
}

export default ControlsZoom