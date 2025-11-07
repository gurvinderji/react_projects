import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Teacher from "./components/Teacher";
import Holidays from "./components/Holidays";
import ContactUs from "./components/ContactUs";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teachers" element={<Teacher />} />
        <Route path="/holidays" element={<Holidays />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
