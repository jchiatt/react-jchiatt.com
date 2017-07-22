import React, { Component } from 'react';
import { Link } from 'react-router';

class Footer extends Component {
	render() {
		return (
			<footer>
				<div className="container clearfix">
					<div className="footer-link">
            <Link to='/writings' className="link">Writings.</Link>
          </div>
          <div className="footer-link">
            <Link to="/roadmapping" className="link">Roadmapping</Link>
          </div>
          <div className="footer-link">
            <a href="mailto:jc@jchiatt.com">Get in touch.</a>
          </div>
          <div className="footer-link">
  		     <a href="http://eepurl.com/cOz_aP">Get my newsletter.</a>
          </div>
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
