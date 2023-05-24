import { useState } from "react";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons";
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          {" "}
          Hello<span> MyName</span>{" "}
        </Alert>
      )}
      <Buttons onClick={() => setAlertVisibility(true)} color="secondary">
        Primary Button
      </Buttons>
    </div>
  );
}
export default App;
