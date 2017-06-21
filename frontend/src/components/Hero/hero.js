import React, {Component} from 'react';
import cx from 'classnames';
import styles from './hero.css'; 
import {Motion, spring} from 'react-motion';

class Hero extends Component {

	render () {
		return <div className={cx(styles['outer'])} >
			<h1>Discover jobs in Indian startups</h1>
			<Motion defaultStyle={{x: 100}} style={{x: spring(300, {stiffness: 300, damping: 50})}}>
				{value => <span className={cx(styles['count'])}>{Math.floor(value.x)}</span>}
			</Motion>
			<h2>+ jobs for web developers, designers, product managers, mobile app developers and devops engineers</h2>
		</div>
	}

}

export default Hero;
