import GroupList from "./pages/GroupList";
import Main from "./pages/Main";
import StudentInformation from "./pages/StudentInformation";
import Arrears from "./pages/Arrears";
import Events from "./pages/Events";
import Grade from "./pages/Grade";
import Meetings from "./pages/Meetings";
import Schedule from "./pages/Schedule";
import Teachers from "./pages/Teachers";
import Divisions from "./pages/Divisions";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/groupList" element={<GroupList />} />
        <Route path="/studentInformation" element={<StudentInformation />} />
        <Route path="/arrears" element={<Arrears />} />
        <Route path="/events" element={<Events />} />
        <Route path="/grade" element={<Grade />} />
        <Route path="/meetings" element={<Meetings />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/divisions" element={<Divisions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
