import styled from 'styled-components'
import VideoList from './VideoList'

const Contents = styled.div`
	display: flex;
	width: 100vw;
	height: 100vh;
`

function App() {

	return (
		<Contents>
			<VideoList />
		</Contents>
	)
}

export default App
