import Wrapper from "./components/Wrapper";
import Display from "./components/Display";
import Button from "./components/Button";
import Keyboard from "./components/Keyboard";
import CalcProvider from "./context/CalcContext";

const btnValues =[
  ["C","(", ")","/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, "^", "="]
]


function App() {
  return (
    
      
  <CalcProvider>
    <Wrapper>
      <Display />
      <Keyboard>
        {btnValues.flat().map((btn, i) => (
          <Button
            value={btn}
            key={i}
          />
        ))}
      </Keyboard>
    </Wrapper>
  </CalcProvider>
      
  );
}

export default App;
