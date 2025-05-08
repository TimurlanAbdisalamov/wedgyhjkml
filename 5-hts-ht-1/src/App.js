import { Home } from './Pages/Home/Home'
import { Page1 } from './Pages/Page-1/Page-1'
import { Page2 } from './Pages/Page-2/Page-2'
import { Page3 } from './Pages/Page-3/Page-3'
import { Header } from './components/Header/Header'
import { Details } from './Pages/Details/Details'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import './app.scss'
function App() {
	return (
		<BrowserRouter>
			<Header />
			<div className='container'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/page-1' element={<Page1 />} />
					<Route path='/page-2' element={<Page2 />} />
					<Route path='/page-3' element={<Page3 />} />
					<Route path='/detail/:id' element={<Details />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
