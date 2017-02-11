import React, { Component } from 'react';
import { Link } from 'react-router';
import Footer from '../global/Footer';

class ThankYou extends Component {
	render() {
		return (
			<div>
				<section>
					<div className="container">
						<h1><Link to="/about" className="link">J.C. Hiatt</Link> | Software Consulting</h1>
						<hr />
						<p>Thanks for signing up for my newsletter! I'll see you there soon!</p>
					</div>
				</section>
				<Footer />
			</div>
		)
	}
}

export default ThankYou;