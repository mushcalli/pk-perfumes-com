let images = {};

export default function Banner({imagePool = "normal"}) {
	switch (imagePool) {
		default:
			images = import.meta.glob("~/assets/img/banners/*.jpg");
			break;
	}

	let len = Object.keys(images).length;
	let i = Math.floor(Math.random() * len);
	let img = "";
	for (const path in images) {
		if (i <= 0) {
			img = path;
			break;
		}

		i--;
	}

	return <div className="top-0">
		<img className="object-cover h-[8rem] w-svw sm:h-auto" src={img}></img>
	</div>;
}