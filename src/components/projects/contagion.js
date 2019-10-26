import React from 'react'
import { ContagionImages } from '../images'
import { JQuery, Gmaps, HTML, JS, CSS } from '../logos'

const Contagion = () => {
	return (
		<div className="project-Wrapper">
			<div className="name-Wrapper">
				<h2 className="projectName">CONTAGION_CONTROL</h2>
			</div>
			<p className="para">
				Study and contain a lethal contagion that has struck one of the world's
				most densly populated cities. Utilize the military, government, and
				public to strategically calm, investigate, and quarantine the infected.
				But be wary: a cascade of fear and death awaits should you make the
				wrong decision.
			</p>
			{ContagionImages()}
			<div className="utilized">
				{Gmaps()}
				{JQuery()}
				{HTML()}
				{CSS()}
				{JS()}
			</div>
		</div>
	)
}

export default Contagion
