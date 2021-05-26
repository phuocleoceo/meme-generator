import React, { useCallback, useRef } from 'react'
import * as htmlToImage from 'html-to-image';
import Draggable from 'react-draggable';

export default function Output(props) {
	const { contentText, randomImage } = props;
	const memeFrame = useRef(null);

	const handleSave = useCallback(
		() => {
			async function SaveImage() {
				try {
					const node = memeFrame.current;
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
			<div className="meme" ref={memeFrame}>
				<img src={randomImage} alt="" />

				{contentText.map((text) => (
					<Draggable key={text.id}>
						<div>{text.value}</div>
					</Draggable>
				))}

			</div>

			<button onClick={handleSave}>Save</button>
		</div>
	)
}

