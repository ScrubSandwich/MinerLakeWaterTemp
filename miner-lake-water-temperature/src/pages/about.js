import React, { Component } from 'react';
import QRCode from '../img/QRCode.jpg';
import PayPalBadge from '../img/PayPal.png';
import PayPalLogo from '../img/PayPalLogo.png';
import BitcoinLogo from '../img/BitcoinLogo.png';

class about extends Component {
  render() {
    return (
      <div>
				<div>
		    	<div className='border'>
          	<h1>About</h1>
          	<p>Water Temperature is taken every 30 minutes using a DS18B20 temperature sensor approximately 6 inches down from the surface of the water.</p>
			  	</div>
		  	</div>
		    <div>
		    	<div className='border'>
          	<h1>Credits</h1>
          	<p>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p>
			  	</div>
		  	</div>
				<div>
				<div className='border'>
					<h1>Donate</h1>

					<div className=''>
						<img src={PayPalLogo} alt="PayPal Logo" width="300" height="80" />
					</div>
					<div className="donate paypal">
						<div className="center">
							<p>You can donate via PayPal <a target="https://www.paypal.com/paypalme/scrubsandwich" href="https://www.paypal.com/paypalme/scrubsandwich">here.</a>
							</p>									
						</div>
					</div>					

					<div className=''>
						<img src={BitcoinLogo} alt="Bitcoin Logo" width="300" height="60" />
					</div>
					<div className="donate">
						<p>You can donate by sending Bitcoin to the following address:</p>
						<code><strong>35JAGEtPTjh2KwZYm15BwYBXwyQhnnwfds</strong></code>
						<p>Bitcoin Address QR Code:</p>
						<div className="center">
							<a target="./QRCode.jpg" href="./QRCode.jpg">
								<img src={QRCode} alt="Bitcoin QR Code" width="150" height="150" />
							</a>
						</div>
					</div>
					</div>
				</div>
				<p className='invisible'>
					Filler text that does not do anything, and is colored white to move the footer lower on the page. You should not be reading this.
				</p>
				<p className='invisible'>
					Again, Filler text that does not do anything, and is colored white to move the footer lower on the page. You should not be reading this.
				</p>
				<div className='footer'>
					<a target="https://www.paypal.com/paypalme/scrubsandwich" href="https://www.paypal.com/paypalme/scrubsandwich">
								<img src={PayPalBadge} alt="PayPal Logo" width="90" height="50" />
					</a>
					&copy; 2020 Jacob Miecznikowski
				</div>
      </div>
    )
  }
}

export default about
