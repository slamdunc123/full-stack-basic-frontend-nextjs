import React, { useContext } from 'react';
import Tests from '../components/Tests/Tests';
import { AuthContext } from '../context/authContext';

const TestsPage = () => {
	const { user } = useContext(AuthContext);

	if (!user) return <>Please log in</>;
	return <Tests />;
};

export default TestsPage;
