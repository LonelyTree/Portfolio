import React from 'react'
import { MixyImages } from '../images'
import {
	Reactiv,
	React_Hooks,
	Material,
	HTML,
	CSS,
	JS,
	Apollo,
	Graphql,
} from '../logos'

const PNMixy = () => {
	return (
		<div className='project-Wrapper'>
			<div className='name-Wrapper'>
				<h2 className='projectName'>Party Night Mixy</h2>
			</div>
			<p className='para'>
				A fun little app for creating new and exciting cocktails with you and
				your friends!
			</p>
			{MixyImages()}
			<div className='utilized'>
				{Reactiv()}
				{React_Hooks()}
				{Material()}
				{HTML()}
				{CSS()}
				{JS()}
				{Apollo()}
				{Graphql()}
			</div>
		</div>
	)
}

export default PNMixy
