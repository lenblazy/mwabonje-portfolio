import PageWrapper from "./ui/PageWrapper";
import Home from "./ui/pages/Home";
import PortfolioDetails from "./ui/pages/PortfolioDetails";
import ServiceDetails from "./ui/pages/ServiceDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router";

const App = () => (
  <PageWrapper>
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="portfolio" element={<PortfolioDetails />} />
        <Route path="service" element={<ServiceDetails />} />
      </Routes>
    </Router>
  </PageWrapper>
);

export default App;
