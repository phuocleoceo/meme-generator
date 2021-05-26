import React, { useCallback } from 'react'
import * as htmlToImage from 'html-to-image';
import { draggable } from './draggable';

export default function Output(props) {
	const { contentText, randomImage } = props;

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
					}, 100);
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

				{contentText.map((text) => (
					<h2
						key={text.id}
						className="content"
						id={text.id}
						onMouseEnter={() => draggable(text.id)}
					>
						{text.value}
					</h2>
				))}
			</div>

			<button onClick={handleSave}>Save</button>
		</div>
	)
}

