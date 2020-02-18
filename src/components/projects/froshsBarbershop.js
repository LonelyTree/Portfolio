import React from 'react'
import { FroshsBarbershopImages } from '../images'
import { Reactiv, React_Spring, HTML, JS, CSS, SASS } from '../logos'

const BarberShop = () => {
	return (
		<div className='project-Wrapper'>
			<div className='name-Wrapper'>
				<h2 className='projectName'>FROSH'S_BARBERSHOP</h2>
			</div>
			<p className='para'>
				The main page for a family run barber shop. I created the logo using
				Canva and Adobe Photoshop as well as Adobe Illustrator. The page is
				styled with React Springs and SASS. Utilizing unSplash for royalty free
				images I was able to capture the essence of this quaint, but immensely
				popular barbershop.
			</p>
			{FroshsBarbershopImages()}
			<div className='utilized'>
				{Reactiv()}
				{React_Spring()}
				{SASS()}
				{HTML()}
				{CSS()}
				{JS()}
			</div>
		</div>
	)
}

export default BarberShop
