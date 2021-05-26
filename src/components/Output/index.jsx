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
					<div
						key={text.id}
						id={text.id}
						onMouseDown={() => draggable(text.id)}
						className="content"
					>
						{text.value}
					</div>
				))}
			</div>

			<button onClick={handleSave}>Save</button>
		</div>
	)
}

