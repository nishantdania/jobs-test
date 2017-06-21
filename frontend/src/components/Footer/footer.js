import React, {Component} from 'react';
import cx from 'classnames';
import styles from './footer.css'; 

class Footer extends Component {

	render () {

		return <div className={cx(styles['outer'])}>
			<div className={cx(styles['suggestions'])}>
				Got any suggestions to make this service better ? &nbsp; 
				<a href='https://goo.gl/forms/jQcDOe75HwEyE4jm1' target='_blank' rel="noopener noreferrer">
					<span className={cx(styles['suggestion-link'])}>
						Let me know
					</span>
				</a>
			</div>
			<span className={cx(styles['love'])}>
				Coded with
				<img draggable="false" className={cx(styles['emoji'])} alt="❤" src="https://s.w.org/images/core/emoji/2.3/svg/2764.svg"/>
				in India
			</span>
		</div> 
	}

}

export default Footer;
