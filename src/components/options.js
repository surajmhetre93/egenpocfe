import React, { Component } from 'react'
import { Button } from 'reactstrap'
import axios from 'axios';
import { API_URL } from "../constants"
import '../App.css';

class Dropdown extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clouds : [],
			domains : [],
            kinds : [],
            ingestion_type : [],
            file_type : [],
            storage_type : [],
            vm_type : [],
            transformation_format : [],
			selectedCloud : '--Choose cloud platform--',
			selectedIndustry : '--Choose Industry--'
		};
		this.changeCloud = this.changeCloud.bind(this);
		this.changeTypeOfData = this.changeTypeOfData.bind(this);
	}
  
	componentDidMount() {
        this.setState({
            clouds : ['AWS', 'GCP', 'Azure']
        })

        this.setState({
            domains: [ 
                {name: 'Healthcare', kinds: ['Electronic health records', 'Administrative', 'Claims', 'Patient / Disease registries', 'Health surveys', 'Clinical trials']},
                {name: 'Retail', kinds: ['Point-of-Sale', 'Loyalty Card', 'Market Research', 'Syndicated']},
                {name: 'Finance', kinds: ['Market Research', 'Claims data', 'Sales']}
            ]
        })

        this.setState({
            ingestion_type: ['Batch', 'Streaming']
		})
		
		this.setState({
			file_type: ['csv', 'flat', 'avro', 'parque', 'tsv', 'SQL Server Backup']
		})
	}
  
	changeCloud(event) {
		this.setState({selectedCloud: event.target.value});
	}

	changeTypeOfData(event) {
		this.setState({selectedIndustry: event.target.value});
		this.setState({kinds : this.state.domains.find(stat => stat.name === event.target.value).kinds});
	}

	generateConfig() {
		axios({
			method: 'post',
			url: API_URL,
			data: {
				"project_id":"cparkar-project-310718",
				"location":"US",
				"bucket_name":"egen-poc-bucket"
			},
			headers: { 
			  "content-type": "application/json"
			}
		}).then(function (response) {
			console.log(response)
		}).catch(function (error) {
			console.log(error)
		});
	}
	
	render() {
		return (
			<div id="container">
				<h2>Choose your process flow</h2>
	
				<div class="custom-select">
					<select placeholder="Cloud Platform" value={this.state.selectedCloud} onChange={this.changeCloud} class="form-select">
						<option>--Choose cloud platform--</option>
						{this.state.clouds.map((e, key) => {
							return <option key={key}>{e}</option>;
						})}
					</select>
				</div>

				<div class="custom-select">
					<select placeholder="Industry" value={this.state.selectedIndustry} onChange={this.changeTypeOfData}>
						<option>--Choose Industry--</option>
						{this.state.domains.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</select>
				</div>
				
				<div class="custom-select">
					<select placeholder="Type of data">
						<option>--Choose type of data--</option>
						{this.state.kinds.map((e, key) => {
							return <option key={key}>{e}</option>;
						})}
					</select>
				</div>

                <div class="custom-select">
					<select placeholder="Type of ingestion">
						<option>--Choose type of ingestion--</option>
						{this.state.ingestion_type.map((e, key) => {
							return <option key={key}>{e}</option>;
						})}
					</select>
				</div>

				<div class="custom-select">
					<select placeholder="Type of File">
						<option>--Choose type of file--</option>
						{this.state.file_type.map((e, key) => {
							return <option key={key}>{e}</option>;
						})}
					</select>
				</div>

				<div class="container">
					<Button onClick = {this.generateConfig}>Submit Process Flow</Button>
				</div>
			</div>
		)
	}
}

export default Dropdown;