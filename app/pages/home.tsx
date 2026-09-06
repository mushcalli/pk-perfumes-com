import background from "~/assets/home/background.png";
import maderas from "~/assets/home/Maderas Feature Photo.jpg";
import bar1 from "~/assets/bugs/Beaded Headband 2.png";
import bar2 from "~/assets/bugs/Leaf vein 1.jpg";
import portrait from "~/assets/home/PK in Santa Fe Portrait.jpg";
import bar3 from "~/assets/bugs/Feather design.webp";
import collection1 from "~/assets/home/PK Logo Asia Collection image small.jpg";
import collection2 from "~/assets/home/PK Prive single Logo on Green.jpg";
import collection3 from "~/assets/home/Signature Collection pic.jpg";
import horses from "~/assets/home/Elmer Yazzie Horses.png";

import Banner from "~/components/banner";
import Navbar from "~/components/navbar";
import EmblaCarousel from "~/components/emblacarousel";
import { Link } from "react-router";

const bannerImages = Object.values(import.meta.glob("~/assets/banners/test/*.webp", { eager: true, query: "?url", import: "default" }));
const carouselImages = Object.values(import.meta.glob("~/assets/home/quotes-slideshow/*.jpg", { eager: true, query: "?url", import: "default" }));

export default function Home() {
	return (<div>
		<title>Home - PK Perfumes</title>
		<meta property="og:title" content="Home - PK Perfumes" />

		<div className="z-99 absolute fixed w-screen">
				<Banner images={bannerImages}></Banner>
				<Navbar></Navbar>
		</div>

		<div className="bg-size-[300vw_auto] md:bg-contain bg-repeat-y" style={{
			backgroundImage: "url(" + background + ")"
		}}>
			<Banner images={bannerImages}></Banner>

			<div className="py-10 xl:py-20 flex flex-col items-center"> {/* main content area */}
				<div className="m-5 xl:mt-10 xl:mx-30 xl:mb-30">
					<EmblaCarousel images={carouselImages}></EmblaCarousel>
				</div>
				<img className="mx-10 md:mx-70 mb-5" src={maderas}></img>

				<div> {/*////////                            TODO: populate using shopify api or something idk                                   ////////*/}
					<p className="text-center text-2xl xl:text-7xl text-gray-300 font-[Resagokr] font-bold">Featured Product Headline</p>
					<p className="mx-1 xl:mt-4 xl:mx-80 text-center text-sm xl:text-2xl text-gray-300 font-[Resagokr] font-bold">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque, libero ut tincidunt vulputate, magna mi tincidunt felis,
						quis vulputate lorem odio non nisi. Nunc euismod nec nulla eu auctor. Praesent nulla ipsum, tincidunt id dui semper, iaculis gravida
						lorem. Vestibulum dictum eget lectus ac porttitor. Aenean et vulputate orci. In in cursus turpis, eu dignissim augue. Duis dapibus
						ipsum nunc, a congue nibh vehicula laoreet. Aliquam tristique dui est, in vulputate libero posuere a.
					</p>
				</div>

				<img className="mx-2 my-10 xl:mx-6 xl:my-30" src={bar1}></img>
				<img className="mx-4 xl:mx-80" src={bar2}></img>
				<p className="mx-4 my-3 xl:mx-80 xl:my-10 text-center text-sm xl:text-4xl text-gray-300 font-[Resagokr] font-bold">
					PK Perfumes loves using natural raw materials, -- we also use
					many single molecule aroma materials, and we even make
					some of our own captive raw material molecules!
					We use whatever it takes to make you
					amazingly beautiful Perfumes!
				</p>
				<div className="my-10 mx-5 sm:mx-15 xl:my-40 xl:mx-40 flex flex-col sm:flex-row gap-4 sm:gap-10 xl:gap-25">
					<img className="aspect-square min-w-0 h-full" src={portrait}></img>
					<p className="text-sm sm:max-w-[40svw] lg:text-2xl xl:text-5xl text-gray-300 font-[Resagokr] font-bold">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque, libero ut tincidunt vulputate, magna mi tincidunt felis,
						quis vulputate lorem odio non nisi. Nunc euismod nec nulla eu auctor. Praesent nulla ipsum, tincidunt id dui semper, iaculis gravida
						lorem. Vestibulum dictum eget lectus ac porttitor. Aenean et vulputate orci. In in cursus turpis, eu dignissim augue. Duis dapibus
						ipsum nunc, a congue nibh vehicula laoreet. Aliquam tristique dui est, in vulputate libero posuere a.
					</p>
				</div>
				<img className="mx-20 mb-10 md:mb-20 md:mx-100 min-w-0" src={bar3}></img>
				<p className="text-center text-2xl xl:text-6xl text-gray-300 font-[Resagokr] font-bold">Shop for your Fragrances</p>
				<div className="my-6 mx-5 sm:mx-15 xl:my-20 xl:mx-40 flex flex-row place-content-center gap-4 xl:gap-20">
					<Link className="aspect-square min-w-0 h-full" to="/asia-collection">
						<img src={collection1}></img>
					</Link>
					<Link className="aspect-square min-w-0 h-full" to="/prive-collection">
						<img src={collection2}></img>
					</Link>
					<Link className="aspect-square min-w-0 h-full" to="/signature-collection">
						<img src={collection3}></img>
					</Link>
				</div>
				<img className="mx-20 my-10 md:mx-80 md:my-40 min-w-0" src={horses}></img>
			</div>
		</div>
	</div>);
}
