import foto from '../assets/foto.jpg'
import foto2 from '../assets/foto2.jpg'

function Card() {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img src={foto2} className="w-10 h-10 rounded-full" />
          <span className="font-semibold">natalia</span>
        </div>
        <button className="bg-blue-500 text-white px-4 py-1 rounded-full">
          Seguir
        </button>
      </div>

      <img src={foto} className="w-full" />

      <div className="p-4">
        <p className="text-sm text-gray-500">❤️ 128 me gusta</p>
        <p><b>Lapnam</b> ¡a lokear!</p>
      </div>
    </div>
  )
}

export default Card