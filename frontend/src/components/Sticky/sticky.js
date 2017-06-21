import React, {Component} from 'react';
import cx from 'classnames';
import styles from './sticky.css'; 

import Navbar from '../Navbar';

const SCROLL_STICKY = 0;

class Sticky extends Component {

	state = {
		sticky: false
	}

	componentDidMount () {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount () {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll = () => {
		var scroll = document.body.scrollTop;
		if(scroll > SCROLL_STICKY && !this.state.sticky) {
			this.setState({
				sticky: true
			});			
		}
		else if(scroll <= SCROLL_STICKY && this.state.sticky) {
			this.setState({
				sticky: false 
			});
		}
	}

	render () {

		const { sticky } = this.state;

		return <div className={cx(styles['outer'])}>
			<div className={cx(styles['animate'], {[styles['sticky']]: sticky})}>
				<Navbar />
			</div>	
		</div>
	}

}

export default Sticky;
