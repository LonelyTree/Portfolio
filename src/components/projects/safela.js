import React from 'react'
import { SafeLAImages } from '../images'
import { Reactiv, DataSet, HTML, CSS, JS, SASS } from '../logos'

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
			<div className="utilized">
				{Reactiv()}
				{SASS()}
				{HTML()}
				{CSS()}
				{JS()}
				{DataSet()}
			</div>
		</div>
	)
}

export default SafeLa
