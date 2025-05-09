import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
// import Navbar from "./components/Navbar";
import About from "./pages/About";
import DevOpsProjects from "./pages/DevOpsProjects";
import CloudProjects from "./pages/CloudProjects";
import DataEngProjects from "./pages/DataProjects";
// import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<About />} />
      <Route path="/devopsprojects" element={<DevOpsProjects />} />
      <Route path="/cloudprojects" element={<CloudProjects />} />
      <Route path="/dataprojects" element={<DataEngProjects />} />
    </Route>
  </Routes>
</Router>
  //   <Router>
  //     <Routes>
  //       <Route element={<Layout />}>
  //       <Route path="/" element={<About />} />
  //       <Route path="/devopsprojects" element={<DevOpsProjects />} />
  //       <Route path="/cloudprojects" element={<CloudProjects />} />
  //       <Route path="/dataprojects" element={<DataEngProjects />} />
  // {/* <Route path="/contact" element={<Contact />} /> */}
  //         {/* other routes... */}
  //       </Route>
  //     </Routes>
  //   </Router>
  );
}

export default App;
{/* <Navbar /> */}
{/* <Routes>
  <Route path="/" element={<About />} />
  <Route path="/devopsprojects" element={<DevOpsProjects />} />
  <Route path="/cloudprojects" element={<CloudProjects />} />
  <Route path="/dataprojects" element={<DataEngProjects />} />
  {/* <Route path="/contact" element={<Contact />} /> */}
{/* </Routes> */}