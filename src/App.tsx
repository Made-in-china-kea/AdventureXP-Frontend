import { Route, Routes } from "react-router-dom";
import Login from "./security/Login";
import Logout from "./security/Logout";
import ReservationForm from "./components/common/reservationForm";
import Layout from "./Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<h1>This is the homepage</h1>} />

        <Route path="/reservation" element={<ReservationForm />} />

        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<h2>Not Found</h2>} />
      </Routes>
    </Layout>
  );
}

export default App;
