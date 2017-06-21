import React, {Component} from 'react';
import cx from 'classnames';
import styles from './navbar.css'; 

import Menu from '../Menu';

class Navbar extends Component {

	render () {

		return <div className={cx(styles['outer'], 'clearfix')}>
			<div className={cx(styles['logo'])}>Startup Jobs India</div>
			<div className={cx(styles['menu'], 'clearfix')}>
				<Menu />
			</div>
		</div>
	}

}

export default Navbar;
