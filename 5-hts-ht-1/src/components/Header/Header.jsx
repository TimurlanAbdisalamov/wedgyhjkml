import React from 'react'
import { Link } from 'react-router-dom'

import './header.scss'

export const Header = () => {
	return (
		<header>
			<div className='container'>
				<Link to={'/'}>
					<h1>My site</h1>
				</Link>
				<nav>
					<Link to={'/'}>Home</Link>
					<Link to={'/page-1'}>Page-1</Link>
					<Link to={'/page-2'}>Page-2</Link>
					<Link to={'/page-3'}>Page-3</Link>
				</nav>
			</div>
		</header>
	)
}
