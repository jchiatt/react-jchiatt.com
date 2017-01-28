import React, { Component } from 'react';
import Footer from './global/Footer';

class About extends Component {
	render() {
		return (
			<div>
				<header>
					<h1>About</h1>
				</header>
				<div className="about">
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

export default About;