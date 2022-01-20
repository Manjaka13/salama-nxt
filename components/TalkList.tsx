import React from "react";
import { v4 as uuidv4 } from "uuid";
import messages from "public/message.json";

const TalkList = (): JSX.Element => {
	const mappedMessages = messages.map(message => (
		<div
			className="contact f-row-start-center pd-top-10 pd-bottom-10 pointer"
			key={ uuidv4() }
		>
			<div className="image no-select w-40px h-40px br-round mg-left-10 mg-right-10 o-hidden">
				<img className="w-100 h-100" src={ message.avatar } alt={ message.name } />
			</div>
			<div className="w-60 w-xlg-50">
				<p
					className={ "name no-select fs-100 w-100 o-hidden" + (message.read ? '' : ' bold black') }
				>
					{ message.name.length > 17 ? message.name.substring(0, 16) : message.name }
				</p>
				<p
					className={ "message no-select " + (message.read ? '' : 'bold black') + " fs-90 pd-top-5 w-100 o-hidden" }
				>
					{ message.content }
				</p>
			</div>
			<p
				className={ "date no-select fs-100 h-40px f-row-end-end pd-right-10" + (message.read ? '' : ' bold black') }
			>
				{ message.date }
			</p>
		</div>
	));

	return (
		<div className="talk-list o-auto">
			{ mappedMessages }
		</div>
	);
};

export default TalkList;