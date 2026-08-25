import Banner from "~/components/banner";
import Navbar from "~/components/navbar";

import background from "~/assets/home/background.png";

export default function Home() {
	return <div>
		<title>Home - PK Perfumes</title>
		<meta property="og:title" content="Home - PK Perfumes" />

		<div className="h-[400vh] bg-size-[300vw_auto] md:bg-contain bg-repeat-y" style={{
			backgroundImage: "url(" + background + ")"
		}}>
			<div className="absolute fixed w-screen">
				<Banner></Banner>
				<Navbar></Navbar>
			</div>

			<div className="flex flex-col items-center">
				<p className="top-0 text-white text-2x">sdgdfg</p>
			</div>
		</div>
	</div>;
}
