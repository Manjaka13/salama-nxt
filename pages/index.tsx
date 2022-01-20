import React from "react";
import Page from "components/Page";
import Loading from "components/Loading";

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
				<Loading />
			</>
		</Page>
	);
};

export default Home;
