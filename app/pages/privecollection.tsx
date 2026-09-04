import background from "~/assets/home/background.png";

import Banner from "~/components/banner";
import Navbar from "~/components/navbar";

const bannerImages = Object.values(import.meta.glob("~/assets/banners/test/*.webp", { eager: true, query: "?url", import: "default" }));

export default function PriveCollection() {
    return (<div>
		<title>Prive Collection - PK Perfumes</title>
		<meta property="og:title" content="Prive Collection - PK Perfumes" />

		<div className="z-99 absolute fixed w-screen">
				<Banner images={bannerImages}></Banner>
				<Navbar></Navbar>
		</div>

		<div className="h-[300vh] bg-size-[300vw_auto] md:bg-contain bg-repeat-y" style={{
			backgroundImage: "url(" + background + ")"
		}}>
			<Banner images={bannerImages}></Banner>


        </div>
    </div>);
}