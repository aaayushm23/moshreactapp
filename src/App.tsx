import ListGroup from "./components/ListGroup";
import { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap-grid.css'
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App(){
 const [alertVisible, setAlertVisibility] = useState(false)

  return(
    <div>
      {alertVisible && <Alert onClose={()=>setAlertVisibility(false)}>My Alert</Alert>}
      <Button color = "danger" onClick={() => setAlertVisibility(true)} >
        My Button
      </Button>
    </div>
  )
}

export default App;