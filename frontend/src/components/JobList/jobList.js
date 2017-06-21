import React, {Component} from 'react';
import Job from '../Job';
import {TransitionMotion, spring, presets} from 'react-motion';

import EmailWidget from '../EmailWidget';

class JobList extends Component {

	state = {
		showEmailSubscription: true 
	}

//
//  Animation code block starts
//
	getDefaultStyles = () => {
    return this.props.jobs.map((job, index) => 
			({data: job, 
				style: {
					height: 70,
					opacity: 0.5,
				},
				key: `${index}`}
			));
	}

	getStyles = () => {
		const {jobs} = this.props;

		return jobs.map((job, index) => {
			return {
				data: job,
				key: `${index}`,
				style: {
					height: spring(80, presets.gentle),
          opacity: spring(1, presets.stiff),
				}
			}
		}); 
	}

	willEnter = () => {
		return {
			height: 70,
      opacity: 0.7,
		};
	}

//
//  Animation code block ends 
//

	render () {
		return <div>
			<TransitionMotion
				defaultStyles={this.getDefaultStyles()}
				styles={this.getStyles()}
				willEnter={this.willEnter}>
					{styles =>
						<ul> 
							{styles.map(({key, style, data}) =>
								<Job key={key} job={data} style={style}/>
							)}
						</ul>
					}					
			</TransitionMotion>
			<EmailWidget />
		</div>
	}
}

export default JobList;
