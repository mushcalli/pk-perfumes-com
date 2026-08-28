let images = {};

export default function Banner({ images }: { images: string[] }) {
	let len = images.length;
	let i = Math.floor(Math.random() * len);
	let source = "";
	for (const path of images) {
		if (i <= 0) {
			source = path;
			break;
		}

		i--;
	}

	return <div className="top-0">
		<img className="object-cover h-[8rem] w-svw sm:h-auto" src={source}></img>
	</div>;
}