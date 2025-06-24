import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import InvestNow from "./InvestNow";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="invest" element={<InvestNow />} />
        {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
