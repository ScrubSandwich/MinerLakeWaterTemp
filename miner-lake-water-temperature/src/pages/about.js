import React, { Component } from 'react';
import QRCode from '../img/QRCode.jpg';

class about extends Component {
  render() {
    return (
      <div>
		<div>
		  <div className='border'>
            <h2>Credits</h2>
          </div>
		  <p>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p>
		</div>
		<div>
		  <div className='border'>
		    <h2>Donate</h2>
		  </div>
		  <h3>Bitcoin</h3>
		        <div className="donate">
				  <p>Send Bitcoin here:</p>
				  <div className="center">
					<a target="_blank" href="./QRCode.jpg">
					  <img src={QRCode} alt="Bitcoin QR Code" width="300" height="300" />
					</a>
				  </div>
				  <code><strong>35JAGEtPTjh2KwZYm15BwYBXwyQhnnwfds</strong></code>
				</div> 
		</div>
		<p className='invisible'>
		  Filler text that does not do anything, and is colored white to move the footer lower on the page. You should not be reading this.
		</p>
		<p className='invisible'>
		  Again, Filler text that does not do anything, and is colored white to move the footer lower on the page. You should not be reading this.
		</p>
		<p className='invisible'>
		  Again, Filler text that does not do anything, and is colored white to move the footer lower on the page. You should not be reading this.
		</p>
		<div className='footer'>&copy; 2020 Jacob Miecznikowski</div>
      </div>
    )
  }
}

export default about
