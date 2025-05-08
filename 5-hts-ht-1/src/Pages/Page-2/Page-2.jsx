import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Page2 = () => {
	const navigate = useNavigate()
	const [posts, setPosts] = useState([])
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(data => setPosts(data))
			.catch(console.log('error'))
	}, [])
	return (
		<div>
			<h1>Page-2</h1>
			<button
				onClick={() => {
					navigate(-1)
				}}
			>
				go back
			</button>
			{posts.map(post =>{return(
				<h2>{post.title}</h2>
			)})
			}
		</div>
	)
}
