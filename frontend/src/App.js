import React from 'react';

const endPoint = {
	breeds: `${process.env.REACT_APP_API_URL}/v1/retrievepetswithbreeddata`,
};
const getPetData = async () => {
	const response = await (await fetch(endPoint.breeds)).json();
	return response;
};

function App() {
	const [breeds, setBreeds] = React.useState({});

	const getFetchedData = React.useCallback(async () => {
		const fetchedData = await getPetData();
		setBreeds(fetchedData);
	}, []);

	React.useEffect(() => {
		getFetchedData();
	}, [getFetchedData]);

	React.useEffect(() => {
		console.log('====================================');
		console.log(breeds);
		console.log('====================================');
	}, [breeds]);
	return (
		<div className="App">
			<p
				style={{
					margin: '0 auto',
					display: 'flex',
					justifyContent: 'center',
					padding: '1rem',
				}}
			>
				Use the endpoint provided to bring data from the api, create a component
				to list the data. If time add functionality to select a breed and write
				a test to test ui.
			</p>
		</div>
	);
}

export default App;
