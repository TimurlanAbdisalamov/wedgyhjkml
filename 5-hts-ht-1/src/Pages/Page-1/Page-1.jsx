import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Page1 = () => {
	const [users, setUsers] = useState([])
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(data => setUsers(data))
			.catch(console.log('error'))
	}, [])
	const navigate = useNavigate()
	return (
		<div>
			<h1>Page-1</h1>
			<button
				onClick={() => {
					navigate(-1)
				}}
			>
				go back
			</button>
			{users.map(user => {
				return (
					<h2>
						<Link to={`/detail/${user.id}`}>{user.username}</Link>
					</h2>
				)
			})}
		</div>
	)
}
