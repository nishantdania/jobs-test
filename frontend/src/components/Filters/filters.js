import React, {Component} from 'react';
import cx from 'classnames';
import styles from './filters.css'; 

import FilterTag from '../FilterTag';
import filterSet from './filterSet';
import ProPrompt from '../ProPrompt';

class Filters extends Component {

	state = {
		selected: 0,
		showProPrompt: false
	}

	handler = (id) => {
		this.setState({
			showProPrompt: true
		});
		return;
		this.setState({
			selected: id
		});
	}

	hidePrompt = () => {
		this.setState({
			showProPrompt: false		
		});
	}

	render () {
		
		const {selected, showProPrompt} = this.state;

		return <div>
				<ul className={cx(styles['outer'])}>
				{filterSet.map((filter, index) =>
					<FilterTag 
						active={index === selected} 
						key={index} 
						filter={filter}
						id={index} 
						handler={this.handler}/>
				)}
				</ul>
				{showProPrompt ? 
					<ProPrompt 
						featureName='Filters'
						hide={this.hidePrompt}
					/> : null}
			</div>
	}

}

export default Filters;
