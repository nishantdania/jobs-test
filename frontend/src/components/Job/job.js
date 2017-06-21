import React, {Component} from 'react';
import cx from 'classnames';
import styles from './job.css'; 

class Job extends Component {

	render () {

		const { job, style } = this.props;

		return <a className={cx(styles['container'])} style={style} href={job.link} target='_blank' rel="noopener noreferrer" >
			<li className={cx(styles['outer'], 'clearfix')}>
				<div className={cx(styles['left-content'])}>
					<div className={cx(styles['role'])}>
						{job.role}
					</div>
					<div className={cx(styles['company'])}>
						{job.company}
					</div>
				</div>
				<div className={cx(styles['right-content'])}>
					<span className={cx(styles['location'])}>{job.location}</span>
				</div>
			</li>
		</a>
	}

}

export default Job;
