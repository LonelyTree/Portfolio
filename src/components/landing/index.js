import React, { Component } from 'react'
import GitLogo from '../../img/GitHub-Mark-120px-plus.png'
import InstaLogo from '../../img/glyph-logo_May2016.png'
import LinkLogo from '../../img/LI-China-In-Bug.png'
import ResumeLogo from '../../img/CV.png'
import Logo from '../../img/giraffe.png'
import Coder from '../../img/programmedMini.png'
import Photo from '../../img/tree.png'
import Resume from '../resume'
import Download from '../../img/alexHughesResume.pdf'
import styled from 'styled-components'
import Modal from 'react-responsive-modal'
import 'normalize.css'
import '../../css/landing.css'

const LandImg = styled.img`
	&.img__logo {
		width: 19vw;
		margin-left: 6vw;
		margin-top: 5vw;
		filter: invert(1);
		opacity: 1;
	}
	&.img__logo--hide {
		width: 20vw;
		margin-left: 6vw;
		margin-top: 5vw;
		filter: invert(1);
		opacity: 0;
		transition: all 1000ms;
	}
	&.img__logo1 {
		width: 38vw;
		position: absolute;
		left: 64vw;
		top: 8vw;
		filter: invert(1);
		opacity: 1;
		transition: all 1000ms;
	}
	&.img__logo1--hide {
		width: 38vw;
		position: absolute;
		left: 64vw;
		top: 8vw;
		filter: invert(1);
		opacity: 0;
		transition: all 1000ms;
	}
	&.img__logo2 {
		width: 29vw;
		position: absolute;
		left: 64vw;
		top: 0vw;
		filter: invert(1);
		opacity: 1;
		transition: all 1000ms;
	}
	&.img__logo2--hide {
		width: 29vw;
		position: absolute;
		left: 64vw;
		top: 0vw;
		filter: invert(1);
		opacity: 0;
		transition: all 1000ms;
	}
`

class Landing extends Component {
	state = {
		logo: 'img__logo',
		coder: 'img__logo--hide',
		photo: 'img__logo--hide',
		modal0: false,
		modal1: false,
		modal2: false,
	}
	programmingOn = () => {
		this.setState({ logo: 'img__logo--hide', coder: 'img__logo1' })
	}
	programmingOff = () => {
		this.setState({ logo: 'img__logo', coder: 'img__logo1--hide' })
	}
	photoOn = () => {
		this.setState({ photo: 'img__logo2', logo: 'img__logo--hide' })
	}
	photoOff = () => {
		this.setState({ logo: 'img__logo', photo: 'img__logo2--hide' })
	}
	contact = () => {
		this.setState({ modal0: !this.state.modal0 })
	}
	resumeView = () => {
		this.setState({ modal1: !this.state.modal1 })
	}
	photographyView = () => {
		this.setState({ modal2: !this.state.modal2 })
	}
	render() {
		return (
			<div className="landing">
				<div className="grid">
					<h1 onClick={this.contact} title="Say Hello!" className="contact">
						Contact
					</h1>
					<div className="sidebar">
						<a href="https://www.linkedin.com/in/cahworks/">
							<h1 className="titles">LinkedIn</h1>
						</a>
						<a href="https://www.instagram.com/onhughes/">
							<h1 className="titles">Instagram</h1>
						</a>
						<a href="https://github.com/LonelyTree">
							<h1 className="titles">Github</h1>
						</a>
						<h1 className="titles resumeText" onClick={this.resumeView}>
							Resume / CV
						</h1>
						<div className="icons">
							<a href="https://www.linkedin.com/in/cahworks/">
								<img
									className="icons__click icons__linkedIn"
									alt="LinkedIn Logo"
									src={LinkLogo}
								/>
							</a>
							<a href="https://www.instagram.com/onhughes/">
								<img
									className="icons__click"
									alt="Instagram Logo"
									src={InstaLogo}
								/>
							</a>
							<a href="https://github.com/LonelyTree">
								<img className="icons__click" alt="GitHub Logo" src={GitLogo} />
							</a>
							<img
								onClick={this.resumeView}
								className="icons__click icon__resume"
								alt="Resume/CV Logo"
								src={ResumeLogo}
								style={{ cursor: 'pointer' }}
							/>
						</div>
					</div>
					<div className="name">
						<p className="location" style={{ margin: '0 auto' }}>
							Los Angeles, CA / Portland, OR / New Orleans, LA
						</p>
						<h1>Alex Hughes</h1>
						<p
							className="underName"
							style={{ margin: '0 auto', marginLeft: '25vw' }}
						>
							Evolution in Life
						</p>
					</div>
					<div className="quote">
						<h1 className="philosophy"> - philosophy</h1>
						<p className="proverb">
							{' '}
							"Knowledge belongs neither to the sense nor to the object because
							it continues even on the destruction thereof."
						</p>
						<p className="source">-The Naya-Sutras Bk. III Ch. II </p>
					</div>
					<div className="logo">
						<LandImg
							className={this.state.logo}
							src={Logo}
							alt="Giraffe logo, get it? because I'm tall...Ha...:("
						/>
						<LandImg
							className={this.state.coder}
							src={Coder}
							alt="my bianary face!"
						/>
						<LandImg
							className={this.state.photo}
							src={Photo}
							alt="A tree!! Woah!!"
						/>
					</div>
					<div className="buttons">
						<div
							className="categories"
							onMouseOver={this.programmingOn}
							onMouseOut={this.programmingOff}
						>
							<a href="/software" style={{ color: 'white' }}>
								<p className="software">Software</p>
							</a>
						</div>
						<div
							className="categories"
							onMouseOver={this.photoOn}
							onMouseOut={this.photoOff}
						>
							<a onClick={this.photographyView} style={{ color: 'white' }}>
								<p className="photography">Photography</p>
							</a>
						</div>
					</div>
				</div>
				<div className="vertical" />
				<div className="horizontal" />
				<div className="streakWrapper">
					<div className="mainStreak" />
					<div className="accentStreak" />
				</div>
				<Modal
					classNames={{ modal: 'contact' }}
					center
					open={this.state.modal0}
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
					classNames={{ modal: 'contact' }}
					center
					open={this.state.modal1}
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
				<Modal
					classNames={{ modal: 'contact' }}
					center
					open={this.state.modal2}
					onClose={this.photographyView}
				>
					<h2>Photography Page Coming Soon!</h2>
				</Modal>
			</div>
		)
	}
}
export default Landing
