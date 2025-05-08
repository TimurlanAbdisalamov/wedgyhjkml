import React, { useEffect, useState } from 'react'
import { data, useNavigate, useParams } from 'react-router-dom'

export const Details = () => {
	const [user, setUser] = useState({})
	const params = useParams()
	const navigate = useNavigate()
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
			.then(response => response.json())
			.then(data => setUser(data))
	}, [])

	return (
		<div>
			<h2>{user.name}</h2>
			<h3>{user.email}</h3>
			<h3>{user.username}</h3>
			<button
				onClick={() => {
					navigate(-1)
				}}
			>
				go back
			</button>
		</div>
	)
}
