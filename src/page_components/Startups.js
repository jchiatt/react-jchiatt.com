import React, { Component } from 'react';
import Footer from '../global/Footer';
import '../services.css';

class Startups extends Component {
	render() {
		return (
			<div>
				<section className="large-pad-top">
	        <div className="container">
	          <h1><strong>Startup Consulting</strong></h1>
	            <h2><strong>Have a startup idea but not sure how to move forward?</strong></h2>
	            <p>You're not alone. Getting from the idea phase to actually having a product that makes you money is no easy task.</p>
	            <p>Over the past 5 years, I've advised numerous startups in order to help their idea to market. I've often played a "CTO for hire" role and helped ideas become software products.</p>
	            <p>Do you have an idea? Are you ready to take the next step forward but aren't sure what that step is?</p>
	            <p>I have two products available to help you take the next step.</p>
	            <h2>Roadmapping Session</h2>
	            <p>A Roadmapping Session is a 1-2 day event where we dive deep into your idea, identify the value you can bring to the market, and develop an actionable path forward. The fee for this is $1,499. To apply, simply send me an email at <a href="mailto:jc@builtbygood.co">jc@builtbygood.co</a></p>
	            <h2>Interactive App Demo</h2>
	            <p>One of the most important parts of starting any business is validating your market. You can spend an incredible amount of time and money building a company around your idea, but if you launch to crickets, it won't matter.</p>
	            <p>My Interactive App Demo includes a 2 hour meeting with me and a clickable, 2-3 screen prototype of your app idea.</p>
	            <p>You can then use this prototype to collect feedback from your potential customers. This is a great, low-cost method of market validation that will drastically reduce the risk of wasting a lot of time and money.</p>
	            <p>The fee for this is $999. To apply, simply send me an email at <a href="mailto:jc@builtbygood.co">jc@builtbygood.co</a></p>
	        </div>
	      </section>
				<Footer />
			</div>
		)
	}
}

export default Startups;