import React, { Component } from 'react';
import Footer from './global/Footer';

class Home extends Component {
	render() {
		return (
			<div>
				<header>
					<h1>J.C. Hiatt</h1>
					<h2>Software Consulting for Startups &amp; Creatives</h2>
				</header>
				<div className="home">
					<div className="container">
						<h3>Lorem ipsum dolor</h3>
						<p>Vel a vestibulum vestibulum vitae volutpat nascetur vestibulum donec facilisi magna urna parturient fermentum.</p>
						<h3>Lorem ipsum dolor</h3>
						<p>Vel a vestibulum vestibulum vitae volutpat nascetur vestibulum donec facilisi magna urna parturient fermentum.</p>
						<h3>Lorem ipsum dolor</h3>
						<p>Vel a vestibulum vestibulum vitae volutpat nascetur vestibulum donec facilisi magna urna parturient fermentum.</p>
						<h3>Lorem ipsum dolor</h3>
						<p>Vel a vestibulum vestibulum vitae volutpat nascetur vestibulum donec facilisi magna urna parturient fermentum.</p>
					</div>
				</div>
				<Footer />
			</div>

		)
	}
}

export default Home;