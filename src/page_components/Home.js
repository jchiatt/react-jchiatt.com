import React, { Component } from 'react';
import { Link } from 'react-router';
import Footer from '../global/Footer';

class Home extends Component {
	render() {
		return (
			<div className="home">
				<section>
					<div className="container">
						<h1>J.C. Hiatt | Software Consulting for Non-Technical Founders</h1>
						<hr />
							<p>I help non-technical founders plan, build, and scale their tech startups.</p>
					</div>
				</section>
				<Footer />
			</div>
		)
	}
}

export default Home;
