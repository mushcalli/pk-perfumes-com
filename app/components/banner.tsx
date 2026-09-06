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
		<img className="object-cover w-svw aspect-[1980/600] sm:aspect-[1980/278] lg:aspect-auto" src={source}></img>
	</div>;
}