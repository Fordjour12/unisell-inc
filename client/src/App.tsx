import reactLogo from './assets/react.svg'

function App() {
	return (
		<div className='App grid place-content-center items-center h-screen'>
			<div className='flex'>
				<a
					href='https://vitejs.dev'
					target='_blank'
					rel='noreferrer'
				>
					<img
						src='/vite.svg'
						className='logo w-20 animate-pulse'
						alt='Vite logo'
					/>
				</a>
				<a
					href='https://reactjs.org'
					target='_blank'
					rel='noreferrer'
				>
					<img
						src={reactLogo}
						className='logo react w-20 animate-spin-slow'
						alt='React logo'
					/>
				</a>
			</div>
			<h1 className='mt-4 text-center text-xl font-bold'>
				{' '}
				Vite + React
			</h1>
		</div>
	)
}

export default App
