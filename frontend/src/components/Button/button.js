import React, {Component} from 'react';
import cx from 'classnames';
import styles from './button.css'; 

class Button  extends Component {

	render () {

		const { text } = this.props;

		return <div className={cx(styles['outer'])}>
			{text}
		</div> 
	}

}

export default Button;
