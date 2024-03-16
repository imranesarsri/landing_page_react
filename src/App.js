import Navbar from "./Sections/Navbar";
import Card from "./Components/Card";
import CardButton from "./Components/CardButton";
export default function App() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row" style={{ width: '80%', margin: '20px auto' }}>
        <div className="basis-3/4">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="basis-1/4">
          <CardButton />
        </div>
      </div>
    </div>
  )
}