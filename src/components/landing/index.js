import React, { Component } from 'react'
import { Welcome } from '../forFun'
import arrow from '../../img/curve_arrow.png'
import NeuroDrome from '../projects/neurodrome'
import Global from '../projects/global'
import Scifi from '../projects/scienceSwitch'
import SafeLa from '../projects/safela'
import Contagion from '../projects/contagion'
import GitLogo from '../../img/GitHub-Mark-120px-plus.png'
import InstaLogo from '../../img/glyph-logo_May2016.png'
import LinkLogo from '../../img/LI-China-In-Bug.png'
import LinkLogoSquare from '../../img/LI-China-In-Square.png'
import ResumeLogo from '../../img/CV.png'
import Logo from '../../img/giraffe.png'
import Resume from '../resume'
import Download from '../../img/alexHughesResume.pdf'
import styled from 'styled-components'
import Modal from 'react-responsive-modal'
import 'normalize.css'
import '../../css/landing101.css'

const LandImg = styled.img`
	&.img__logo {
		width: 18vw;
		margin-left: 3.5vw;
		margin-top: 2vw;
		-webkit-filter: invert(1);
		filter: invert(1);
		opacity: 1;
	}
`

class Landing extends Component {
	state = {
		logo: 'img__logo',
		modal0: false,
		modal1: false,
	}
	contact = () => {
		this.setState({ modal0: !this.state.modal0 })
	}
	resumeView = () => {
		this.setState({ modal1: !this.state.modal1 })
	}
	render() {
		return (
			<div className="landing">
				<Modal
					classNames={{ modal: 'contact_modal' }}
					center={true}
					open={this.state.modal0}
					onClose={this.contact}
				>
					<h2 style={{ fontSize: '3rem' }}>Alex Hughes</h2>
					<p>
						<span style={{ fontWeight: '700', fontSize: '1.4rem' }}>
							Email:{' '}
						</span>
						<a href="mailto:alexhugh121@gmail.com">alexhugh121@gmail.com</a>
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
							style={{
								fontSize: '1.2rem',
								cursor: 'pointer',
								background: '#ff7a00',
								width: '31%',
								margin: '0 auto',
								padding: '0 1vw',
							}}
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
							style={{
								fontSize: '1.2rem',
								cursor: 'pointer',
								background: '#ff7a00',
								padding: '0 1vw',
							}}
							title="Here ya go!"
							download
						>
							Download
						</a>
					</p>
				</Modal>
				<Modal
					classNames={{ modal: 'contact_modal' }}
					center={true}
					open={this.state.modal1}
					onClose={this.resumeView}
				>
					<h2>Resume/CV</h2>
					<Resume />
					<a href={Download} download style={{ textAlign: 'center' }}>
						<p
							style={{
								background: '#ff7a00',
								color: 'white',
								width: '6rem',
								margin: '0 auto',
								padding: '.5rem',
							}}
						>
							Download
						</p>
					</a>
				</Modal>
				{Welcome()}
				<div className="name">
					<p className="location">
						Los Angeles, CA / Portland, OR / New Orleans, LA
					</p>
					<h1>Alex Hughes</h1>
					<p className="underName">Evolution in Life</p>
				</div>
				<div className="quote" id="top">
					<h1 className="philosophy"> - philosophy</h1>
					<p className="proverb">
						"Knowledge belongs neither to the sense nor to the object because it
						continues even on the destruction thereof."
					</p>
					<p className="source">-The Naya-Sutras Bk. III Ch. II </p>
				</div>
				<div className="logo">
					<LandImg
						className={this.state.logo}
						src={Logo}
						alt="Giraffe logo, get it? because I'm tall...Ha...:("
					/>
				</div>
				<div className="sidebar">
					<div className="sidebar-Wrapper">
						<h1 onClick={this.contact} title="Say Hello!" className="contact">
							Contact
						</h1>
						<a
							className="a__linkedIn"
							href="https://www.linkedin.com/in/cahworks/"
						>
							<h1 className="titles">LinkedIn</h1>
						</a>
						<a
							className="a__instagram"
							href="https://www.instagram.com/onhughes/"
						>
							<h1 className="titles">Instagram</h1>
						</a>
						<a className="a__github" href="https://github.com/LonelyTree">
							<h1 className="titles">Github</h1>
						</a>
						<h1 className="titles resumeText" onClick={this.resumeView}>
							Resume / CV
						</h1>
						<div className="icons">
							<a
								className="grid__linkedIn"
								href="https://www.linkedin.com/in/cahworks/"
							>
								<img
									className="icons__software-click icons__software-linkedIn square"
									src={LinkLogoSquare}
									alt="LinkedIn square LOGO"
								/>
								<img
									className="icons__click icons__linkedIn a__icon-linkedIn"
									alt="LinkedIn Logo"
									src={LinkLogo}
								/>
							</a>
							<a
								className="grid__instagram"
								href="https://www.instagram.com/onhughes/"
							>
								<img
									className="icons__click a__icon-instagram"
									alt="Instagram Logo"
									src={InstaLogo}
								/>
							</a>
							<a className="grid__github" href="https://github.com/LonelyTree">
								<img
									className="icons__click a__icon-github"
									alt="GitHub Logo"
									src={GitLogo}
								/>
							</a>
							<img
								onClick={this.resumeView}
								className="icons__click icons__resume"
								alt="Resume/CV Logo"
								src={ResumeLogo}
								style={{ cursor: 'pointer' }}
							/>
						</div>
					</div>
				</div>
				<div className="skills">
					<h3 className="skillsHeader">SKILLS // PROFICIENCIES</h3>
					<p className="skillsList">
						{' '}
						HTML/CSS | JAVASCRIPT | REACT | REDUX | PYTHON | C# | JQUERY |
						MARKDOWN | FIREBASE | NODE.JS | EXPRESS | MONGODB | MONGOOSE |
						TENSORFLOW | UNITY3D | SASS | STYLED-COMPONENTS | EJS | JINJA |
						POSTGRESQL | MYSQL | DOCKER | WATSON API | GOOGLE API | NPM | BASH |
						FLASK | THREE.JS | D3 | UNITY MACHINE-LEARNING AGENTS | PANDAS |
						NUMPY | MATPLOTLIB | BOKEH | APACHE ZEPPELIN | IBM DB2 | GITHUB |
						GIT | VSCODE | SUBLIME | JUPYTER NOTEBOOKS | IBM WATSON STUDIO |
						SLACK | AIRTABLE | TODOIST |
					</p>
				</div>
				<div className="projects">
					<h1 className="header_special">PROJECTS</h1>
					<div>
						<Global />
						<Scifi />
						<Contagion />
						<SafeLa />
					</div>
					<h1 className="header">EXPERIMENTS</h1>
					<NeuroDrome />
					<a href="https://github.com/LonelyTree">
						<h1 className="header">FIND ME ON GITHUB!</h1>
					</a>
					<div className="contact_me">
						<img
							className="contact_arrow"
							src={arrow}
							alt="look to the left for more ways to contact me! :)"
						/>
						<h1 className="contact_header">Alex Hughes</h1>
						<div className="contact_info">
							<a href="mailto:alexhugh121@gmail.com" className="contact_by">
								alexhugh121@gmail.com
							</a>
							<h2 className="contact_by">phone: 985.290.9515</h2>
						</div>
						<a className="jumper" href="#top">
							Go to top
						</a>
					</div>
				</div>
			</div>
		)
	}
}
export default Landing
