import React, { useState, useEffect } from 'react';
import Output from '../Output';

export default function Content(props) {
	const [newText, setNewText] = useState('');
	const [contentText, setContentText] = useState([]);
	const [randomImage, setRandomImage] = useState('https://i.imgflip.com/43a45p.png');
	const [allMemeImgs, setAllMemeImgs] = useState([]);

	useEffect(() => {
		async function fetchImage() {
			const response = await fetch("https://api.imgflip.com/get_memes");
			const responseJSON = await response.json();
			setAllMemeImgs(responseJSON.data.memes);
		};

		fetchImage();
	}, [])

	function handleNewText(e) {
		setNewText(e.target.value);
	}

	function handleAddNewText(e) {
		e.preventDefault();
		const newContentTextItem = {
			id: contentText.length + 1,
			value: newText
		};
		const newContentText = [...contentText];
		newContentText.push(newContentTextItem);
		setContentText(newContentText);
		setNewText('');
	}

	function handleResetContentText() {
		setContentText([]);
	}

	function handleChangeMeme(e) {
		e.preventDefault();
		const randNum = Math.floor(Math.random() * (allMemeImgs.length - 0) + 0);
		const randMemeImgUrl = allMemeImgs[randNum].url;
		setRandomImage(randMemeImgUrl);
	}

	return (
		<div className="meme-container">
			<form onSubmit={handleAddNewText}>
				<input
					type="text"
					name="contentText"
					placeholder="Type text here..."
					value={newText}
					onChange={handleNewText}
				/>
				<button type="submit">Add Text</button>
				<button onClick={handleResetContentText}>Reset Text</button>
				<button onClick={handleChangeMeme}>Change Meme</button>
			</form>
			<Output contentText={contentText} randomImage={randomImage} />
		</div>
	)
}


