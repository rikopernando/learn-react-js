import React, {Component} from 'react'

class Header extends Component {
	render(){
		return (			

			<header className="main-header">

			<a href="index2.html" className="logo">

			<span className="logo-mini"><b>A</b>LT</span>

			<span className="logo-lg"><b>AdminIII</b>LTE</span>
			</a>

			<nav className="navbar navbar-static-top">

			<a href="https://www.google.co.id/" className="sidebar-toggle" data-toggle="push-menu" role="button">
			<span className="sr-only">Toggle navigation</span>
			</a>

			<div className="navbar-custom-menu">
			<ul className="nav navbar-nav">

			<li className="dropdown user user-menu">
			<a href="https://www.google.co.id/" className="dropdown-toggle" data-toggle="dropdown">
			<img src="adminlte/dist/img/user2-160x160.jpg" className="user-image" alt="User Image"/>
			<span className="hidden-xs">Alexander Pierce</span>
			</a>
			<ul className="dropdown-menu">

			<li className="user-header">
			<img src="adminlte/dist/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>

			<p>
			Alexander Pierce - Web Developer
			<small>Member since Nov. 2012</small>
			</p>
			</li>

			<li className="user-body">
			<div className="row">
			<div className="col-xs-4 text-center">
			<a href="https://www.google.co.id/">Followers</a>
			</div>
			<div className="col-xs-4 text-center">
			<a href="https://www.google.co.id/">Sales</a>
			</div>
			<div className="col-xs-4 text-center">
			<a href="https://www.google.co.id/">Friends</a>
			</div>
			</div>

			</li>

			<li className="user-footer">
			<div className="pull-left">
			<a href="https://www.google.co.id/" className="btn btn-default btn-flat">Profile</a>
			</div>
			<div className="pull-right">
			<a href="https://www.google.co.id/" className="btn btn-default btn-flat">Sign out</a>
			</div>
			</li>
			</ul>
			</li>
			</ul>
			</div>
			</nav>
			</header>
			)		
	}

}

export default Header