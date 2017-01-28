import React, { Component } from 'react';
import { Link } from 'react-router';

class Footer extends Component {
	render() {
		return (
			<footer>
				<div className="container clearfix">
					<Link to='/about'>About</Link>
					<Link to='/writings'>Writings</Link>
				</div>
			</footer>
		)
	}
}

/********************
TODO:
1. Add contact link
2. Integrate newsletter signup with MailChimp or Drip

********************/

export default Footer;