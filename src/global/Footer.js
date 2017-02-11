import React, { Component } from 'react';
import { Link } from 'react-router';

class Footer extends Component {
	render() {
		return (
			<footer>
				<div className="container clearfix">
					<Link to='/' className="link">Home.</Link>
					<Link to='/about' className="link">About.</Link>
					<Link to='/writings' className="link">Writings.</Link>
					<br />
					<form action="https://www.getdrip.com/forms/36890235/submissions" method="post" data-drip-embedded-form="36890235">
        		<input type="email" placeholder="Your email address" name="fields[email]" />
	    			<button type="submit" name="submit" value="Sign Up" data-drip-attribute="sign-up-button">Get my newsletter</button>
					</form>
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