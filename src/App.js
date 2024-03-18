import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
export default function App() {
  return (
    <>
      <Navbar Title="This title of navbar" Content="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Card
        Title={'Noteworthy technology acquisitions 2021'}
        Description={'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'}
      />
      <Card
        Title={''}
        Description={'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'}
      />
    </>
  )
}