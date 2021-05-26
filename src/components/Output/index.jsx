import React, { useCallback } from 'react'
import * as htmlToImage from 'html-to-image';

export default function Output(props) {
	const { topText, bottomText, randomImage } = props;

	const handleSave = useCallback(
		() => {
			async function SaveImage() {
				try {
					const node = document.querySelector('.meme');
					const getImgUrl = await htmlToImage.toPng(node);

					const img = new Image();
					img.src = getImgUrl;
					const w = window.open("about:blank");
					setTimeout(() => {
						w.document.write(img.outerHTML);
					}, 0);
				}
				catch {
					console.log("Error when save image !");
				}
			};
			SaveImage();
		}, []);

	return (
		<div>
			<div className="meme">
				<img src={randomImage} alt="" />
				<h2 id="dragTop" className="top">{topText}</h2>
				<h2 id="dragBottom" className="bottom">{bottomText}</h2>
			</div>

			<button onClick={handleSave}>Save</button>
		</div>
	)
}

