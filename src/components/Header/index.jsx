import React from 'react';

export default function Header() {
	function GetDateTime() {
		const d = new Date();
		return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
	}

	const dt = GetDateTime();

	return (
		<header>
			<h2>{dt}</h2>
			<h1>Meme Generator</h1>
		</header>
	)
}
