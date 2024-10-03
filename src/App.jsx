import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./user/login";
import Signup from "./user/signup";
import AddCases from "./pages/addCases";
import Dashboard from "./pages/dashboard";
import AllCases from "./pages/allCases";
import CreateNotice from "./pages/createNotice";
import NoticeList from "./pages/noticeList";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Dashboard */}
          <Route path="/" element={<Dashboard />} />

          {/* Cases */}
          <Route path="/case-list" element={<AllCases />} />
          <Route path="/add-cases" element={<AddCases />} />
          <Route path="/add-cases/:id" element={<AddCases />} />  {/* Edit Case */}

          {/* Notice */}
          <Route path="/notice-list" element={<NoticeList />} />
          <Route path="/create-notice/:id" element={<CreateNotice />} /> {/* Creating notice from case id */}


        </Routes>
      </Router>
    </div>
  )
}

export default App
