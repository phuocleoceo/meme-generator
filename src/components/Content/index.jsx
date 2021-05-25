import React, { useState, useEffect } from 'react';

export default function Content(props) {
	const [topText, setTopText] = useState('');
	const [bottomText, setBottomText] = useState('');
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

	function handleTopChange(e) {
		setTopText(e.target.value);
	}

	function handleBottomChange(e) {
		setBottomText(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		const randNum = Math.floor(Math.random() * (allMemeImgs.length - 0) + 0);
		const randMemeImgUrl = allMemeImgs[randNum].url;
		setRandomImage(randMemeImgUrl);
	}

	return (
		<div className="meme-container">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="topText"
					placeholder="Add Top Text"
					value={topText}
					onChange={handleTopChange}
				/>
				<input
					type="text"
					name="bottomText"
					placeholder="Add Bottom Text"
					value={bottomText}
					onChange={handleBottomChange}
				/>
				<button>Change Meme</button>
			</form>
			<div className="meme">
				<img src={randomImage} alt="" />
				<h2 id="dragTop" className="top">{topText}</h2>
				<h2 id="dragBottom" className="bottom">{bottomText}</h2>
			</div>
		</div>
	)
}


