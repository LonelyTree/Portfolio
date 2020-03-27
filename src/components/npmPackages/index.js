import React from 'react'
import { LoremMemesum } from '../images'
const Memesum = () => {
	return (
		<div className='project-Wrapper'>
			<div className='name-Wrapper'>
				<h2 className='projectName'>LOREM MEMESUM</h2>
			</div>
			<p className='para'>
				An NPM Package that essentially is a lorem ipsum package, but
				substituted with copypasta memes.
			</p>
			{LoremMemesum()}
		</div>
	)
}

export default Memesum
