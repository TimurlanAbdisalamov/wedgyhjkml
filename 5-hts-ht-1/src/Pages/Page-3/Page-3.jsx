import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Page3 = () => {
	const navigate = useNavigate()
	const [albums, setAlbums] = useState([])
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/albums')
			.then(response => response.json())
			.then(data => setAlbums(data))
			.catch(console.log('error'))
	}, [])
	return (
		<div>
			<h1>Page-3</h1>
			<button
				onClick={() => {
					navigate(-1)
				}}
			>
				go back
			</button>
			{albums.map(album => {
				return <h2>{album.title}</h2>
			})}
		</div>
	)
}
