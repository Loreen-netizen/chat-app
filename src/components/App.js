
import {Login} from "./Login"
import {useState} from "react"

function App() {

  const [id,setId] = useState()

  return (
    <div className="App">
      {id}
    <Login setId={setId}/>
    </div>
  );
}

export default App;
