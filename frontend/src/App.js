import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Nav from "./components/Nav";
import Input from "./routes/Input";


function App() {
  return (
    <>
    <Router>
      <h1>App</h1>
      <Nav/>
      <Routes>
        <Route path="/input" element={<Input />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
