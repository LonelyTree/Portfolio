import React, { Component } from 'react'
import Resume from '../resume'
import GitLogo from '../../img/GitHub-Mark-120px-plus.png'
import InstaLogo from '../../img/glyph-logo_May2016.png'
import LinkLogo from '../../img/LI-China-In-Bug.png'
import ResumeLogo from '../../img/CV.png'
import Logo from '../../img/softwaregiraffe.png'
import Global1 from '../../img/globalMenuMini.png'
import Global2 from '../../img/globalTitleMini.png'
import Contagion1 from '../../img/contagionControlMenuMini.png'
import Contagion2 from '../../img/contagionControlMapMini.png'
import NeuroDrome1 from '../../img/neuroDromeMenu.png'
import NeuroDrome2 from '../../img/neuroDromeGame.png'
import StreetLa1 from '../../img/safeParkingMenu.png'
import StreetLa2 from '../../img/safeParkingSearch.png'
import Download from '../../img/alexHughesResume.pdf'
import styled from 'styled-components'
import Modal from 'react-responsive-modal'
import 'normalize.css'
import '../../css/software.css'

const Img = styled.img`
	&.img__logo {
		width: 19vw;
		margin-left: 6vw;
		margin-top: 5vw;
		opacity: 1;
	}
	&.img__logo--hide {
		width: 20rem;
		position: absolute;
		left: 75rem;
		top: 10rem;
		opacity: 1;
		opacity: 0;
		transition: all 1000ms;
	}
	&.img__logo1 {
		width: 31rem;
		position: absolute;
		left: 68rem;
		top: 9rem;
		opacity: 1;
		transition: all 1000ms;
	}
	&.img__logo1--hide {
		width: 31rem;
		position: absolute;
		left: 68rem;
		top: 9rem;
		opacity: 0;
		transition: all 1000ms;
	}
	&.img__logo2 {
		width: 29rem;
		position: absolute;
		left: 69rem;
		top: 0rem;
		opacity: 1;
		transition: all 1000ms;
	}
	&.img__logo2--hide {
		width: 29rem;
		position: absolute;
		left: 69rem;
		top: 0rem;
		opacity: 0;
		transition: all 1000ms;
	}
`

class Software extends Component {
	state = {
		logo: 'img__logo',
		modal0: false,
		modal1: false,
		modal2: false,
		modal3: false,
		modal4: false,
		modal5: false,
		modal6: false,
	}
	modal0 = () => {
		this.setState({ modal0: !this.state.modal0 })
	}
	modal1 = () => {
		this.setState({ modal1: !this.state.modal1 })
	}
	modal2 = () => {
		this.setState({ modal2: !this.state.modal2 })
	}
	modal3 = () => {
		this.setState({ modal3: !this.state.modal3 })
	}
	modal4 = () => {
		this.setState({ modal4: !this.state.modal4 })
	}
	contact = () => {
		this.setState({ modal5: !this.state.modal5 })
	}
	resumeView = () => {
		this.setState({ modal6: !this.state.modal6 })
	}
	render() {
		return (
			<div className="tech">
				<div className="hackish" />
				<div className="vertical__software" />
				<div className="ray__software-0" />
				<div className="ray__software-1" />
				<div className="ray__software-2" />
				<div className="ray__software-3" />
				<div className="grid__software">
					<h1
						onClick={this.contact}
						title="Say Hello!"
						className="contact__software"
					>
						Contact
						<div className="redbar-contact" />
					</h1>
					<div className="sidebar__software">
						<a href="https://www.linkedin.com/in/cahworks/">
							<h1 className="titles__software">LinkedIn</h1>
						</a>
						<a href="https://www.instagram.com/onhughes/">
							<h1 className="titles__software">Instagram</h1>
						</a>
						<a href="https://github.com/LonelyTree">
							<h1 className="titles__software">Github</h1>
						</a>
						<h1
							className="titles__software resumeText__software"
							onClick={this.resumeView}
						>
							Resume / CV
						</h1>
						<div className="icons__software">
							<a href="https://www.linkedin.com/in/cahworks/">
								<img
									className="icons__software-click icons__software-linkedIn"
									alt="LinkedIn Logo"
									src={LinkLogo}
								/>
							</a>
							<a href="https://www.instagram.com/onhughes/">
								<img
									className="icons__software-click"
									alt="Instagram Logo"
									src={InstaLogo}
								/>
							</a>
							<a href="https://github.com/LonelyTree">
								<img
									className="icons__software-click"
									alt="GitHub Logo"
									src={GitLogo}
								/>
							</a>
							<img
								onClick={this.resumeView}
								className="icons__software-click icons__software-resume"
								alt="Resume/CV Logo"
								src={ResumeLogo}
								style={{ cursor: 'pointer' }}
							/>
						</div>
					</div>
					<div className="logo__software">
						<Img className={this.state.logo} src={Logo} alt="giraffe logo" />
					</div>
					<div className="skills">
						<h3 className="skillsHeader">SKILLS // PROFICIENCIES</h3>
						<p className="skillsList">
							{' '}
							HTML/CSS | JAVASCRIPT | REACT | REDUX | PYTHON | C# | NODE.JS |
							JQUERY | MONGODB | MONGOOSE | TENSORFLOW | UNITY | SASS |
							STYLED-COMPONENTS | EXPRESS | EJS | JINJA | POSTGRESQL | DOCKER |
							| WATSON API | GOOGLE API | NPM | BASH | FLASK | THREE.JS | D3 |
							UNITY MACHINE LEARNING AGENTS | GITHUB | GIT | VSCODE | SUBLIME
						</p>
					</div>
					<div className="projects">
						<h1 className="header">On Coding</h1>
						<div>
							<h3 onClick={this.modal0} className="element">
								<span className="elementFlicker">//--EVOLUTION_IN_LIFE</span>
							</h3>
						</div>
						<h1 className="header">Projects</h1>
						<div>
							<h3 onClick={this.modal1} className="element">
								<span className="elementFlicker">//-------------GLOBAL</span>
							</h3>
							<h3 onClick={this.modal2} className="element">
								<span className="elementFlicker">//--CONTAGION_CONTROL</span>
							</h3>
							<h3 onClick={this.modal3} className="element">
								<span className="elementFlicker">//----------STREET_LA</span>
							</h3>
						</div>
						<h1 className="header">Experiments</h1>
						<div>
							<h3 onClick={this.modal4} className="element">
								<span className="elementFlicker">//--------NEURO_DROME</span>
							</h3>
						</div>
						<a href="https://github.com/LonelyTree">
							<h1 className="header">Find me on GitHub!</h1>
						</a>
					</div>
				</div>
				<Modal
					classNames={{ modal: 'modal' }}
					center
					open={this.state.modal0}
					onClose={this.modal0}
				>
					<h2>Thesis</h2>
					<p>
						<span style={{ fontWeight: '700' }}>
							Organic organisms, the mathematical prescision of the formation of
							elements, or the common thought.{' '}
						</span>
						From a young age, these are things that have and continue to
						fascinate me. Like organic growth and evolution, programs made by
						people are a return to the abstraction of a basic principle of
						on/off: to exist, or not exist. I dedicate my focus and time to each
						obstacle, each new chance to grow so that I can get closer to
						understanding the vast possibilities of what we are able to do with
						the technologies and inventions of today.
					</p>
				</Modal>
				<Modal
					classNames={{ modal: 'modal' }}
					center
					open={this.state.modal1}
					onClose={this.modal1}
				>
					<h2>GLOBAL</h2>
					<p>
						The night sky calls out to you in this global night sky viewer.
						Utilizing the Las Cumbres Observatory API, we are able to traverse
						to any point in the world and observe the heavens.
					</p>
					<h4>Utilized</h4>
					<ul>
						<li>React/React-Dom/React-Router</li>
						<li>Styled-Components</li>
						<li>React-Globe</li>
						<li>Virtual-Sky API</li>
						<li>NASA API</li>
						<li>Node.js</li>
						<li>Express</li>
						<li>MongoDB</li>
						<li>Mongoose</li>
						<li>jQuery</li>
					</ul>
					<div className="imgholder">
						<div className="img1">
							<img
								className="imgsrc"
								src={Global1}
								alt="A picture of the project"
							/>
							<a href="https://github.com/LonelyTree/GLOBAL">
								<p className="linked">GITHUB</p>
							</a>
						</div>
						<div className="img2">
							<img
								className="imgsrc"
								src={Global2}
								alt="A picture of the project"
							/>
							<a href="#">
								<p className="linked">LIVE</p>
							</a>
						</div>
					</div>
				</Modal>
				<Modal
					classNames={{ modal: 'modal' }}
					center
					open={this.state.modal2}
					onClose={this.modal2}
				>
					<h2>//CONTAGION_CONTROL</h2>
					<p>
						Study and contain a lethal contagion that has struck one of the
						worlds most densly populated cities. Utilize the military,
						government, and public to strategically calm, investigate, and
						quarantine the infected. But be weary: a cascade of fear and death
						awaits should you make the wrong decision.
					</p>
					<h4>Utilized</h4>
					<ul>
						<li>Google Maps API</li>
						<li>jQuery</li>
						<li>HTML/CSS/Javascript</li>
					</ul>
					<div className="imgholder">
						<div className="img1">
							<img
								className="imgsrc"
								src={Contagion1}
								alt="A picture of the project"
							/>
							<a href="https://github.com/LonelyTree/Contagion-Control">
								<p className="linked">GITHUB</p>
							</a>
						</div>
						<div className="img2">
							<img
								className="imgsrc"
								src={Contagion2}
								alt="A picture of the project"
							/>
							<a href="#">
								<p className="linked">LIVE</p>
							</a>
						</div>
					</div>
				</Modal>
				<Modal
					classNames={{ modal: 'modal' }}
					center
					open={this.state.modal3}
					onClose={this.modal3}
				>
					<h2>SAFE PARKING LA</h2>
					<p>
						We partnered with Safe Parking LA, a coordinating organization for
						the community which assists homeless families and individuals living
						in their vehicles, to rebuild their website in the course of three
						days for our final Hackathon.
					</p>
					<h4>Utilized</h4>
					<ul>
						<li>React/React-Dom/React-Router</li>
						<li>Safe Park LA - Data</li>
						<li>HTML/CSS/Jasvascript</li>
					</ul>
					<div className="imgholder">
						<div className="img1">
							<img
								className="imgsrc"
								src={StreetLa1}
								alt="A picture of the project"
							/>
							<a href="https://github.com/LonelyTree/Safe-Parking-LA">
								<p className="linked">GITHUB</p>
							</a>
						</div>
						<div className="img2">
							<img
								className="imgsrc"
								src={StreetLa2}
								alt="A picture of the project"
							/>
							<a href="#">
								<p className="linked">LIVE</p>
							</a>
						</div>
					</div>
				</Modal>
				<Modal
					classNames={{ modal: 'modal' }}
					center
					open={this.state.modal4}
					onClose={this.modal4}
				>
					<h2>NEURO_DROME</h2>
					<p>
						An experimentation with Artificial Intelligence and Machine
						Learning. Utilizing TensorFlow and Python, train your AI to compete
						in an arena with Unity's AI for the battle of logical domination.
					</p>
					<h4>Utilized</h4>
					<ul>
						<li>Unity 3D</li>
						<li>Unity Machine Learning Agents</li>
						<li>React/React-Dom/React-Router</li>
						<li>C#</li>
						<li>Python</li>
						<li>Node.js</li>
						<li>Express</li>
						<li>MongoDB</li>
						<li>Mongoose</li>
						<li>Postgres</li>
						<li>Styled-Components</li>
					</ul>
					<div className="imgholder">
						<div className="img1">
							<img
								className="imgsrc"
								src={NeuroDrome1}
								alt="A picture of the project"
							/>
							<a href="https://github.com/LonelyTree/NEURO_DROME">
								<p className="linked">GITHUB</p>
							</a>
						</div>
						<div className="img2">
							<img
								className="imgsrc"
								src={NeuroDrome2}
								alt="A picture of the project"
							/>
							<a href="#">
								<p className="linked">LIVE</p>
							</a>
						</div>
					</div>
				</Modal>
				<Modal
					classNames={{ modal: 'contact' }}
					center
					open={this.state.modal5}
					onClose={this.contact}
				>
					<h2 style={{ fontSize: '3rem' }}>Alex Hughes</h2>
					<p>
						<span style={{ fontWeight: '700', fontSize: '1.4rem' }}>
							Email:{' '}
						</span>
						alexhugh121@gmail.com
					</p>
					<p>
						<span style={{ fontWeight: '700', fontSize: '1.4rem' }}>
							Cell:{' '}
						</span>
						985.29O.9515
					</p>
					<hr />
					<p
						style={{
							textAlign: 'center',
							lineHeight: '1.5rem',
							margin: '0 auto',
						}}
					>
						<div
							style={{
								fontWeight: '700',
								fontSize: '1.4rem',
								marginBottom: '.5rem',
							}}
						>
							Resume / CV
						</div>
						<div
							style={{ fontSize: '1.2rem', cursor: 'pointer' }}
							onClick={this.resumeView}
							title="Experience!"
						>
							View
						</div>
						<div style={{ fontSize: '1rem ' }}>
							<strong>-OR-</strong>
						</div>
						<a
							href={Download}
							style={{ fontSize: '1.2rem' }}
							title="Here ya go!"
							download
						>
							Download
						</a>
					</p>
				</Modal>
				<Modal
					classNames={{ modal: 'modal' }}
					center
					open={this.state.modal6}
					onClose={this.resumeView}
				>
					<h2>Resume/CV</h2>
					<Resume />
					<a href={Download} download style={{ textAlign: 'center' }}>
						<p
							style={{
								background: 'black',
								color: 'white',
								width: '6rem',
								margin: '0 auto',
								padding: '.5rem',
								borderRadius: '.5rem',
							}}
						>
							Download
						</p>
					</a>
				</Modal>
			</div>
		)
	}
}
export default Software
