import Programmer from "../utils/Programmer"
const Home = () => {
  return (
    <main className="flex justify-between items-center w-full">
      <div className="p-6">
        <h1 className="text-6xl text-center leading-relaxed font-extrabold hover:text-violet-500">Desarrollador & Diseñador Web</h1>
      </div>
      <div className="w-3/4">
        <Programmer />
      </div>
    </main>
  )
}

export default Home