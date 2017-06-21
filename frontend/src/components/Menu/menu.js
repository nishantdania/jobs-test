import React, {Component} from 'react';
import cx from 'classnames';
import styles from './menu.css'; 

import Button from '../Button';

class Menu extends Component {

	render () {
		return <ul className={cx(styles['outer'])}>
			<li>Sign In</li>
			<li>
				<div>
					<Button text='Go Pro' />
				</div>
			</li>
		</ul>
	}

}

export default Menu;
