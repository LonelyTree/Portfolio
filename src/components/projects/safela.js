import React from 'react'
import { SafeLAImages } from '../images'
import { Reactiv, DataSet, Basic, SASS } from '../logos'

const SafeLa = () => {
	return (
		<div className="project-Wrapper">
			<div className="name-Wrapper">
				<h2 className="projectName">SAFE_PARKING_LA</h2>
			</div>
			<p className="para">
				We partnered with Safe Parking LA, a coordinating organization for the
				community, which assists homeless families and individuals living in
				their vehicles, to rebuild their website in the course of three days for
				our final Hackathon.
			</p>
			{SafeLAImages()}
			<h4 className="projectTools">Utilized</h4>
			<div className="utilized">
				{Reactiv()}
				{DataSet()}
				{SASS()}
				{Basic()}
			</div>
		</div>
	)
}

export default SafeLa
