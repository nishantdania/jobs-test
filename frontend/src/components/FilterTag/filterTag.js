import React, {Component} from 'react';
import cx from 'classnames';
import styles from './filterTag.css'; 

class FilterTag extends Component {

	handleClick = (key) => {
		console.log(key);
	}

	render () {
	
		const {filter, active, id, handler} = this.props;

		return <li className={cx(styles['outer'], {[styles['active']]: active})}
						onClick={() => handler(id)}>
			{filter.name}
		</li>	
	}

}

export default FilterTag;
