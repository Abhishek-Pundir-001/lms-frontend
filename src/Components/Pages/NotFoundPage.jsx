import { useNavigate } from "react-router-dom";


function NotFoundPage() {
  const navigate = useNavigate()
  return (
    <div className="flex h-screen bg-slate-900 justify-center items-center">
      <div className="text-center space-y-4">
        <h1 className="text-white text-6xl tracking-widest font-serif">Not Found 404</h1>
        <button onClick={() => navigate(-1)} className="px-4 py-2 border-2 rounded-lg border-orange-600 font-mono font-semibold text-yellow-50 animate-bounce">Go Back</button>
      </div>
    </div>

  )
}
export default NotFoundPage;