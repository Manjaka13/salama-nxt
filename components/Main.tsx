import React from "react";
import Badge from "components/Badge";
import { v4 as uuidv4 } from "uuid";
import messages from "public/message.json";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(faEnvelope);

const Main = (): JSX.Element => {
	const mappedMessages = messages.map(message => (
		<div
			className="contact f-row-start-center pd-top-10 pd-bottom-10 pointer"
			key={ uuidv4() }
		>
			<div className="image no-select w-40px h-40px br-round mg-left-10 mg-right-10 o-hidden">
				<img className="w-100 h-100" src={ message.avatar } alt={ message.name } />
			</div>
			<div className="content w-60 w-xlg-50">
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
		<div className="main-page f-row w-100 h-100">
			<div className="contact-list w-30 w-lg-40 w-md-100 f-col border o-hidden">
				<div className="user-heading f-row-between-center bg-whitesmoke">
					<div
						className="user-heading__avatar f-row-start-center mg-left-5 pd-5 pointer br-5 tr-200"
					>
						<div className="image no-select w-40px h-40px br-round mg-right-10 o-hidden">
							<img className="w-100 h-100" src="/user.jpg" alt="User badge" />
						</div>
						<h1 className="user-heading__name no-select fs-100">
							Manjaka Rajaonson
						</h1>
					</div>
					<div
						className="unread w-40px h-40px br-round bg-white f-row-center-center mg-right-10 pointer tr-200"
						title="Messages non-lus"
					>
						<Icon icon={ ['fas', 'envelope'] } />
						<Badge content={ 120 } />
					</div>
				</div>
				<div className="contact-list__body o-auto">
					{ mappedMessages }
				</div>
			</div>
			<div className="message-list w-70 w-lg-60 w-md-100 h-100 f-col bg-white">
			</div>
		</div>
	);
};

export default Main;