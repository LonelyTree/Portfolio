import React from 'react'
import { NeuroDromeImages } from '../images'
import {
	Unity,
	MlAgents,
	Reactiv,
	Csharp,
	Python,
	Node,
	Express,
	MongoDB,
	Mongoose,
	Postgres,
	StyledComp,
	SASS,
	HTML,
	CSS,
	JS,
} from '../logos'

const NeuroDrome = () => {
	return (
		<div className="project-Wrapper">
			<div className="name-Wrapper">
				<h2 className="projectName">NEURO_DROME</h2>
			</div>
			<p className="para">
				An experimentation with Artificial Intelligence and Machine Learning.
				Utilizing TensorFlow and Python, train your AI to compete in an arena
				with Unity's AI for the battle of logical domination.
			</p>
			{NeuroDromeImages()}
			<div className="utilized">
				{Unity()} {MlAgents()} {Reactiv()} {Csharp()} {Python()} {Node()}{' '}
				{Express()} {MongoDB()}
				{Mongoose()} {Postgres()} {StyledComp()} {SASS()} {HTML()}
				{CSS()}
				{JS()}
			</div>
		</div>
	)
}

export default NeuroDrome
