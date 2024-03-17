import Navbar from "./Sections/Navbar";
import Card from "./Components/Card";
import ContainerFlex, { ContainerBasis1, ContainerBasis3 } from "./Sections/Container";
import Border from "./Sections/Border";
import Button from "./Components/Button";
export default function App() {
  return (
    <div>
      <Navbar Title="Imrane Sarsri" />
      <ContainerFlex>

        <ContainerBasis3>

          <Card
            Title="title Number One"
            Description="I Want to learn reactJs.. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam sequi, "
          />
          <Card
            Title="title Number Two"
            Description="provident mollitia consequuntur vitae vero, veniam itaque! Quis, laborum."
          />
          <Card
            Title=" title Number Three"
            Description="facilis voluptatibus facere ex quasi cupiditate sit hic laborum veritatis suscipit, "
          />
        </ContainerBasis3>
        <ContainerBasis1>
          <Border>
            <Button>
              <h1>wecome</h1>
              <p>My button</p>
            </Button>
            <Button>
              <p>Lorem Lorem Lorem</p>
            </Button>
            <Button>
              <ul>
                <li>Imrane</li>
                <li>Sarsri</li>
                <li>20</li>
              </ul>
            </Button>
          </Border>
        </ContainerBasis1>
      </ContainerFlex>
    </div>
  )
}