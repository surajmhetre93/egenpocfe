import React, { Component, useState } from 'react'
import { Button } from 'reactstrap'
import axios from 'axios';
import { API_URL } from "../constants"
import '../App.css';
import ReactDOM from 'react-dom';

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
			selectedIndustry : '--Choose Industry--',
			bucket_url: '',
			show:false
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
		}).then((response) => {
			this.setState({bucket_url: response.data['url']});
			this.setState({show:true})
		}).catch((error) => {
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

				<div>
					<Button onClick = {this.generateConfig.bind(this)} variant="primary" className="custom-btn">Submit Process Flow</Button>
				</div>
				
				<div class="bucket-link">
					{
						this.state.show? <span>Goto <a href={this.state.bucket_url} target="_blank">{this.state.bucket_url}</a> to upload csv data</span> : null
					}
          		</div>
			</div>
		)
	}
}

export default Dropdown;