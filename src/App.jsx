import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './layout/LandingPage';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Support from './pages/Support';

function App() {
	return (
		<Router>
			<Routes>
				<Route element={<LandingPage />}>
					<Route path='/' element={<Home />} />
					<Route path='/pricing' element={<Pricing />} />
					<Route path='/support' element={<Support />} />
				</Route>
			</Routes>
		</Router>
	)
}

export default App
