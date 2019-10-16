import React from 'react'
import Contagion1 from '../../img/contagionControlMapMini.png'
import Contagion2 from '../../img/contagionControlMenuMini.png'
import Global1 from '../../img/globalMenuMini.png'
import Global2 from '../../img/globalTitleMini.png'
import Neuro1 from '../../img/neuroDromeGameMini.png'
import Neuro2 from '../../img/neuroDromeMenuMini.png'
import SafeLa1 from '../../img/safeParkingMenuMini.png'
import SafeLa2 from '../../img/safeParkingSearchMini.png'
import Scifi1 from '../../img/scifiMenu.png'
import Scifi2 from '../../img/scifiAction.png'

export const GlobalImages = () => {
	return (
		<div className="imgholder">
			<div className="img1">
				<img
					className="imgsrc"
					src={Global1}
					rel="preload"
					name="Global1"
					alt="Global Main Menu"
				/>
				<a href="https://github.com/LonelyTree/GLOBAL">
					<p className="linked">GITHUB</p>
				</a>
			</div>
			<div className="img2">
				<img
					className="imgsrc"
					src={Global2}
					rel="preload"
					alt="Global Main Page"
				/>
				<a href="https://lonelytree.github.io/GLOBAL/">
					<p className="linked">LIVE</p>
				</a>
			</div>
		</div>
	)
}

export const ContagionImages = () => {
	return (
		<div className="imgholder">
			<div className="img1">
				<img className="imgsrc" src={Contagion1} alt="Contagion Main Map" />
				<a href="https://github.com/LonelyTree/Contagion-Control">
					<p className="linked">GITHUB</p>
				</a>
			</div>
			<div className="img2">
				<img
					className="imgsrc"
					src={Contagion2}
					alt="Contagion in depth menu"
				/>
				<a href="https://lonelytree.github.io/Contagion-Control/">
					<p className="linked">LIVE</p>
				</a>
			</div>
		</div>
	)
}
export const NeuroDromeImages = () => {
	return (
		<div className="imgholder">
			<div className="img1">
				<img className="imgsrc" src={Neuro1} alt="Neuro Drome arena" />
				<a href="https://github.com/LonelyTree/NEURO_DROME">
					<p className="linked">GITHUB</p>
				</a>
			</div>
			<div className="img2">
				<img className="imgsrc" src={Neuro2} alt="Neuro Drome Main Page" />
				<a href="https://lonelytree.github.io/NEURO_DROME/">
					<p className="linked">LIVE</p>
				</a>
			</div>
		</div>
	)
}
export const SafeLAImages = () => {
	return (
		<div className="imgholder">
			<div className="img1">
				<img className="imgsrc" src={SafeLa1} alt="Safe Parking Menu" />
				<a href="https://github.com/LonelyTree/Safe-Parking-LA">
					<p className="linked">GITHUB</p>
				</a>
			</div>
			<div className="img2">
				<img
					className="imgsrc"
					src={SafeLa2}
					alt="Safe Parking Search Function"
				/>
				<a href="https://lonelytree.github.io/Safe-Parking-LA/">
					<p className="linked">LIVE</p>
				</a>
			</div>
		</div>
	)
}
export const ScifiImages = () => {
	return (
		<div className="imgholder">
			<div className="img1">
				<img className="imgsrc" src={Scifi1} alt="Scientific Switcheroo Menu" />
				<a href="https://github.com/LonelyTree/Scientific-Switcheroo/tree/master">
					<p className="linked">GITHUB</p>
				</a>
			</div>
			<div className="img2">
				<img className="imgsrc" src={Scifi2} alt="Scientific Switcheroo Game" />
				<a href="https://lonelytree.github.io/Scientific-Switcheroo/">
					<p className="linked">LIVE</p>
				</a>
			</div>
		</div>
	)
}
