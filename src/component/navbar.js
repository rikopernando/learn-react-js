	import React, {Component} from 'react'

	class Header extends Component {
		render(){
			return (		
				<aside className="main-sidebar">

				<section className="sidebar">

				<div className="user-panel">
				<div className="pull-left image">
				<img src="adminlte/dist/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>
				</div>
				<div className="pull-left info">
				<p>Riko Pernando</p>
				</div>
				</div>


				<ul className="sidebar-menu" data-widget="tree">
				<li className="header">MAIN NAVIGATION</li>
				<li className="active treeview">
				<a href="https://www.google.co.id/">
				<i className="fa fa-dashboard"></i> <span>Dashboard</span>
				<span className="pull-right-container">
				<i className="fa fa-angle-left pull-right"></i>
				</span>
				</a>
				<ul className="treeview-menu">
				<li className="active"><a href="index.html"><i className="fa fa-circle-o"></i> Dashboard v1</a></li>
				<li><a href="index2.html"><i className="fa fa-circle-o"></i> Dashboard v2</a></li> 
				</ul>
				</li>

				<li><a href="https://adminlte.io/docs"><i className="fa fa-book"></i> <span>Documentation</span></a></li>

				</ul>
				</section>

				</aside>
				)		
		}

	}

	export default Header