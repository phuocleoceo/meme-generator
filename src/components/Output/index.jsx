import React, { useCallback, useRef } from 'react'
import * as htmlToImage from 'html-to-image';
import Draggable from 'react-draggable';
import download from 'downloadjs';

export default function Output(props) {
	const { contentText, randomImage } = props;
	const memeFrame = useRef(null);

	const handleOpenInNewTab = useCallback(
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
					alert("Error when handling image !");
				}
			};
			SaveImage();
		}, []);

	const handleDownLoad = useCallback(
		() => {
			async function DownloadImage() {
				try {
					const node = memeFrame.current;
					const getImgUrl = await htmlToImage.toPng(node);
					await download(getImgUrl, "my-meme.png", "image/png");
				}
				catch {
					alert("Error when handling image !");
				}
			};
			DownloadImage();
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

			<button onClick={handleOpenInNewTab}>Open In New Tab</button>
			<button onClick={handleDownLoad}>Download</button>
		</div>
	)
}

