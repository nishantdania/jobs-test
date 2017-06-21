import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Hero from './components/Hero';
import Sticky from './components/Sticky';
import JobList from './components/JobList';
import Filters from './components/Filters';
import Footer from './components/Footer';

class App extends Component {

	state = {
		jobs : []
	}

	componentDidMount () {
		var instance = axios.create({
			baseURL: 'http://localhost:1337',
			timeout: 1000,
		});
		instance.get('/jobs')
		.then(response => {
			this.setState({jobs : response.data});
		})
		.catch(function (error) {
			console.log(error);
		});	
	}

  render() {

		const {jobs} = this.state;

    return (
      <div className="App">
				<Sticky />
				<Hero />
				<Filters />
				<JobList jobs={jobs} />
				<Footer />
      </div>
    );
  }
}

export default App;
