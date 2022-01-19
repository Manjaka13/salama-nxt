import React from "react";
import Page from "components/Page";
import Login from "components/Login";

/*
	Home page
*/

const Home = (): JSX.Element => {
	return (
		<Page
			title="Salama"
			description="Salama messaging application"
			image="cover.png"
			active={0}
		>
			<>
				<Login />
			</>
		</Page>
	);
};

export default Home;
