import React from 'react';
import PageWrapper from './components/PageWrapper';
import Home from './components/pages/Home';
import PortfolioDetails from './components/pages/PortfolioDetails';
import ServiceDetails from './components/pages/ServiceDetails';
import { BrowserRouter as Router, Routes, Route } from "react-router";


const App = () => (
	<PageWrapper >
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