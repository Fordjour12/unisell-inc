import reactLogo from './assets/react.svg'
import Header from './components/ui/Header'

function App() {
	return (
		<div className='grid grid-cols-[500px,1fr]'>
			<aside>
				<Header />
			</aside>
			<div>body</div>
		</div>
	)
}

export default App
