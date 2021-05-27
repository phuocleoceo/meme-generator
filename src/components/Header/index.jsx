import React from 'react';

export default function Header() {
	function GetDateTime() {
		const d = new Date();
		return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
	}

	const dt = GetDateTime();

	return (
		<header>
			<h2>Meme Generator {dt}</h2>
		</header>
	)
}
