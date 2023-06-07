import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Employees } from "./components/employee/Employees";
import { Tasks } from "./components/tasks/Tasks";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
