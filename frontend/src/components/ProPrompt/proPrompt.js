import React, {Component} from 'react';
import cx from 'classnames';
import styles from './proPrompt.css'; 

class ProPrompt extends Component {

	render () {

		const { featureName, hide} = this.props;

		return <div className={cx(styles['outer'], 'clearfix')}>
			<span className={cx(styles['error-icon'])}>
				<img alt='' src='../assets/error.svg'/>
			</span>
			<span className={cx(styles['message'])}>
				{featureName} is a Pro feature. Unlock all features by going Pro for just &#8377;200.
			</span>
			<span 
				onClick={() => hide()} 
				className={cx(styles['hide'])}>
					X
			</span>			
		</div> 
	}

}

export default ProPrompt;
