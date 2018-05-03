import React from 'react';
import { Link } from "react-router-dom";
import '../../assets/css/Header.css';
import logo from '../../assets/images/logo/logo.png';


class Header extends React.Component  {
	

	constructor(props) {
        super(props);
        this.toggleClass= this.toggleClass.bind(this);
        this.state = {
            active: false,
        };
    }

   toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };
	
	handleClickOutside = (e) => {
		if (e.target !== this.refs.menuBtn) {
		    this.setState({active:false});
		}
	};

	componentWillMount() {
		window.addEventListener("click", this.handleClickOutside, false);
	}

	componentWillUnMount() {
		window.removeEventListener("click", this.handleClickOutside, false);
	}
	render(){
	return(
			<header>
				<div className="container">
					<div className="logo">
						<img src={logo} alt="logo"/>
					</div>
					<nav className={this.state.active ? 'toggled': null}>
						<ul>
							<li>
						          <Link to="/">Home</Link>
						        </li>
						        <li>
						          <Link to="/villas">Villas</Link>
						        </li>
						         <li>
						          <Link to="/services">Services</Link>
						        </li>
						        <li>
						          <Link to="/contact">Contact</Link>
						        </li>
						</ul>
					</nav>
					<div className={this.state.active ? 'navigation-toggle toggled': 'navigation-toggle'} onClick={this.toggleClass} ref="menuBtn" >
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</header>
			);
		}

	}


export default Header;

