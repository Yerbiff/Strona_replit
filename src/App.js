import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Footer from './components/Footer/Footer';
import { Route } from 'react-router-dom';
import Oferta from './components/Oferta/Oferta';
import Cennik from './components/Cennik/Cennik';
import Home from './components/Home/Home';
import React, { useState } from 'react';
import NavBar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Router>
			<GlobalStyle />
			<NavBar toggle={toggle} />
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Route
				path="/oferta"
				exact
				component={Oferta}
			/>
			<Route
				path="/"
				exact
				component={Home}
			/>
			<Route
				path="/cennik"
				exact
				component={Cennik}
			/>
			{/* <Route path="/agencja-social-media-wroclaw" exact component={Wroclaw} />
			<Route path="/agencja-social-media-bydgoszcz" exact component={Bydgoszcz} />
			<Route path="/agencja-social-media-lublin" exact component={Lublin} />
			<Route path="/agencja-social-media-zielona-gora" exact component={ZielonaGora} />
			<Route path="/agencja-social-media-lodz" exact component={Lodz} />
			<Route path="/agencja-social-media-krakow" exact component={Krakow} />
			<Route path="/agencja-social-media-warszawa" exact component={Warszawa} />
			<Route path="/agencja-social-media-opole" exact component={Opole} />
			<Route path="/agencja-social-media-rzeszow" exact component={Rzeszow} />
			<Route path="/agencja-social-media-bialystok" exact component={Bialystok} />
			<Route path="/agencja-social-media-gdansk" exact component={Gdansk} />
			<Route path="/agencja-social-media-katowice" exact component={Katowice} />
			<Route path="/agencja-social-media-kielce" exact component={Kielce} />
			<Route path="/agencja-social-media-olsztyn" exact component={Olsztyn} />
			<Route path="/agencja-social-media-poznan" exact component={Poznan} />
			<Route path="/agencja-social-media-szczecin" exact component={Szczecin} />			 */}
			<Footer />
		</Router>
	);
}

export default App;
