import React, {Component} from 'react';
import cx from 'classnames';
import styles from './emailWidget.css'; 

class EmailWidget extends Component {

	render () {

		return <div className={cx(styles['outer'])}>
			<span>
				<img alt='' className={cx(styles['icon'])} src='../assets/mail.svg' />
			</span>
			<span>Subscribe to the email list and unlock more jobs</span>
			<span>
				<input placeholder='johndoe@email.com' />
			</span>
			<span tabIndex='0' className={cx(styles['go'])}>
				Subscribe	
			</span>
		</div> 
	}

}

export default EmailWidget;
