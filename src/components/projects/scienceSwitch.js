import React from 'react'
import { ScifiImages } from '../images'
import {
	Reactiv,
	React_Hooks,
	SASS,
	Basic,
	Confetti,
	React_Spring,
} from '../logos'

const Scifi = () => {
	return (
		<div className="project-Wrapper">
			<div className="name-Wrapper">
				<h2 className="projectName">SCIENTIFIC_SWITCHEROO</h2>
			</div>
			<p className="para">
				A classical logic puzzle, Scientific Switcheroo is a fun and challenging
				game. Fill the bucket up, transfer the water. Try to get 4mm in less
				than 7 clicks!
			</p>
			{ScifiImages()}
			<h4 className="projectTools">Utilized</h4>
			<div className="utilized">
				{Reactiv()}
				{React_Hooks()}
				{React_Spring()}
				{Confetti()}
				{SASS()}
				{Basic()}
			</div>
		</div>
	)
}

export default Scifi
