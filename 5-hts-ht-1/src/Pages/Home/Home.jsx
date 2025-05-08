import { useState, useEffect } from 'react'
import { Link, data } from 'react-router-dom'

export const Home = () => {
	const [users, setUsers] = useState([])
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(data => setUsers(data))
			.catch(console.log('error'))
	}, [])
	return (
		<div>
			<h1>Home</h1>

			<h2>
				{' '}
				<Link to={'/page-1'}>Page-1</Link>
			</h2>
			<h2>
				{' '}
				<Link to={'/page-2'}>Page-2</Link>
			</h2>
			<h2>
				{' '}
				<Link to={'/page-3'}>Page-3</Link>
			</h2>
		</div>
	)
}
