import React from 'react'
import { GlobalImages } from '../images'
import {
	HTML,
	CSS,
	JS,
	MongoDB,
	StyledComp,
	Nasa,
	Node,
	JQuery,
	Reactiv,
	ReactGlobe,
	Express,
	Mongoose,
	VirtualSky,
	SASS,
} from '../logos'

const Global = () => {
	return (
		<div className="project-Wrapper">
			<div className="name-Wrapper">
				<h2 className="projectName">GLOBAL</h2>
			</div>
			<p className="para">
				The night sky calls out to you in this global night sky viewer.
				Utilizing the Las Cumbres Observatory API, we are able to traverse to
				any point in the world and observe the heavens.
			</p>
			{GlobalImages()}
			<div className="utilized">
				{Reactiv()}
				{StyledComp()}
				{SASS()}
				{ReactGlobe()}
				{VirtualSky()}
				{Nasa()}
				{Node()}
				{Express()}
				{MongoDB()}
				{Mongoose()}
				{JQuery()}
				{HTML()}
				{CSS()}
				{JS()}
			</div>
		</div>
	)
}
export default Global
