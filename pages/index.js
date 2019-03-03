import 'semantic-ui-css/semantic.min.css'

import React from 'react'
import { useAsync } from 'react-async'
import axios from 'axios'
import { Grid, Header, Segment } from 'semantic-ui-react'

const fetchFromApi = async () => {
	const { data } = await axios.get('/api')
	return data
}

const Home = () => {
	const { isLoading, data } = useAsync({ promiseFn: fetchFromApi })
	return (
		<Segment textAlign="center" vertical>
			<Grid centered columns={2}>
				<Grid.Column>
					<Header as="h2" textAlign="center">
						Hackathon Starter
					</Header>
					<Segment>{isLoading ? 'Still loading' : data}</Segment>
				</Grid.Column>
			</Grid>
		</Segment>
	)
}

export default Home
