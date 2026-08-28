import background from "~/assets/home/background.png";

import Banner from "~/components/banner";
import Navbar from "~/components/navbar";

export default function SignatureCollection() {
    let bannerImages = Object.keys(import.meta.glob("~/assets/banners/*.jpg"));

    return (<div>
		<title>Signature Collection - PK Perfumes</title>
		<meta property="og:title" content="Signature Collection - PK Perfumes" />

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