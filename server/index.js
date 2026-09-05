import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, ServerRouter, UNSAFE_withComponentProps, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { DropdownMenu } from "radix-ui";
import useEmblaCarousel from "embla-carousel-react";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/@react-router/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = /* @__PURE__ */ __exportAll({
	default: () => handleRequest,
	streamTimeout: () => streamTimeout
});
var streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
	if (request.method.toUpperCase() === "HEAD") return new Response(null, {
		status: responseStatusCode,
		headers: responseHeaders
	});
	return new Promise((resolve, reject) => {
		let shellRendered = false;
		let userAgent = request.headers.get("user-agent");
		let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
		let timeoutId = setTimeout(() => abort(), 6e3);
		const { pipe, abort } = renderToPipeableStream(/* @__PURE__ */ jsx(ServerRouter, {
			context: routerContext,
			url: request.url
		}), {
			[readyOption]() {
				shellRendered = true;
				const body = new PassThrough({ final(callback) {
					clearTimeout(timeoutId);
					timeoutId = void 0;
					callback();
				} });
				const stream = createReadableStreamFromReadable(body);
				responseHeaders.set("Content-Type", "text/html");
				pipe(body);
				resolve(new Response(stream, {
					headers: responseHeaders,
					status: responseStatusCode
				}));
			},
			onShellError(error) {
				reject(error);
			},
			onError(error) {
				responseStatusCode = 500;
				if (shellRendered) console.error(error);
			}
		});
	});
}
//#endregion
//#region app/root.tsx
var root_exports = /* @__PURE__ */ __exportAll({
	ErrorBoundary: () => ErrorBoundary,
	Layout: () => Layout,
	default: () => root_default,
	links: () => links
});
var links = () => [
	{
		rel: "preconnect",
		href: "https://fonts.googleapis.com"
	},
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous"
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=circle,chevron_left,chevron_right"
	},
	{
		rel: "icon",
		type: "image/png",
		href: "/public/favicon.png"
	}
];
function Layout({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsxs("head", { children: [
			/* @__PURE__ */ jsx("base", { href: "/" }),
			/* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
			/* @__PURE__ */ jsx("meta", {
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			}),
			/* @__PURE__ */ jsx(Meta, {}),
			/* @__PURE__ */ jsx(Links, {})
		] }), /* @__PURE__ */ jsxs("body", { children: [
			children,
			/* @__PURE__ */ jsx(ScrollRestoration, {}),
			/* @__PURE__ */ jsx(Scripts, {})
		] })]
	});
}
var root_default = UNSAFE_withComponentProps(function App() {
	return /* @__PURE__ */ jsx(Outlet, {});
});
var ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary({ error }) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack;
	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
	}
	return /* @__PURE__ */ jsxs("main", {
		className: "pt-16 p-4 container mx-auto",
		children: [
			/* @__PURE__ */ jsx("h1", { children: message }),
			/* @__PURE__ */ jsx("p", { children: details }),
			stack
		]
	});
});
//#endregion
//#region app/assets/banners/test/Brugmansia PK header small.webp?url
var Brugmansia_PK_header_small_default = "/assets/Brugmansia%20PK%20header%20small-CGD6b-ZI.webp";
//#endregion
//#region app/assets/banners/test/Cherry Blossom PK Header Small.webp?url
var Cherry_Blossom_PK_Header_Small_default = "/assets/Cherry%20Blossom%20PK%20Header%20Small-CC1-KM_J.webp";
//#endregion
//#region app/assets/banners/test/Clouds and Rocks PK header small.webp?url
var Clouds_and_Rocks_PK_header_small_default = "/assets/Clouds%20and%20Rocks%20PK%20header%20small-q5cWed0O.webp";
//#endregion
//#region app/assets/banners/test/Forest Pano PK Header small.webp?url
var Forest_Pano_PK_Header_small_default = "/assets/Forest%20Pano%20PK%20Header%20small-rs3Mji0W.webp";
//#endregion
//#region app/assets/banners/test/Kyoto Golden Temple PK  header small3.webp?url
var Kyoto_Golden_Temple_PK__header_small3_default = "/assets/Kyoto%20Golden%20Temple%20PK%20%20header%20small3-EMoLWGwc.webp";
//#endregion
//#region app/assets/banners/test/Lavender and bees PK Header small.webp?url
var Lavender_and_bees_PK_Header_small_default = "/assets/Lavender%20and%20bees%20PK%20Header%20small-CTisxWcj.webp";
//#endregion
//#region app/assets/banners/test/Leaf vein PK header small.webp?url
var Leaf_vein_PK_header_small_default = "/assets/Leaf%20vein%20PK%20header%20small-FCo2xJlX.webp";
//#endregion
//#region app/assets/banners/test/Menifee Forest 2 PK header small.webp?url
var Menifee_Forest_2_PK_header_small_default = "/assets/Menifee%20Forest%202%20PK%20header%20small-DI3eM7-z.webp";
//#endregion
//#region app/assets/banners/test/Menifee Forest 3 PK header small.webp?url
var Menifee_Forest_3_PK_header_small_default = "/assets/Menifee%20Forest%203%20PK%20header%20small-DqBlK2jd.webp";
//#endregion
//#region app/assets/banners/test/Misty Mountain PK header small.webp?url
var Misty_Mountain_PK_header_small_default = "/assets/Misty%20Mountain%20PK%20header%20small-RGVymOLp.webp";
//#endregion
//#region app/assets/banners/test/Misty Mountain PK header small2.webp?url
var Misty_Mountain_PK_header_small2_default = "/assets/Misty%20Mountain%20PK%20header%20small2-DxBNMrET.webp";
//#endregion
//#region app/assets/banners/test/Weeds Header.webp?url
var Weeds_Header_default = "/assets/Weeds%20Header-jX5Dc6yT.webp";
//#endregion
//#region app/assets/banners/test/Weeds Header2.webp?url
var Weeds_Header2_default = "/assets/Weeds%20Header2-DoAN2Pw5.webp";
//#endregion
//#region app/assets/banners/test/Wet Branch small PK header.webp?url
var Wet_Branch_small_PK_header_default = "/assets/Wet%20Branch%20small%20PK%20header-D5wjY4TW.webp";
//#endregion
//#region app/assets/banners/test/Wet Grass PK Header.webp?url
var Wet_Grass_PK_Header_default = "/assets/Wet%20Grass%20PK%20Header-CNpBCeHG.webp";
//#endregion
//#region app/assets/banners/test/Wet leaves small PK Header.webp?url
var Wet_leaves_small_PK_Header_default = "/assets/Wet%20leaves%20small%20PK%20Header-CR-wT1Ul.webp";
//#endregion
//#region app/assets/banners/test/Wild Forest PK Header small.webp?url
var Wild_Forest_PK_Header_small_default = "/assets/Wild%20Forest%20PK%20Header%20small-DYLh1XeC.webp";
//#endregion
//#region app/assets/home/quotes-slideshow/1-Perfumers are missionaries of the Beautiful.jpg?url
var _1_Perfumers_are_missionaries_of_the_Beautiful_default = "/assets/1-Perfumers%20are%20missionaries%20of%20the%20Beautiful-B0u-tfEK.jpg";
//#endregion
//#region app/assets/home/quotes-slideshow/10-Perfumers are missionaries of the Beautiful 3.jpg?url
var _10_Perfumers_are_missionaries_of_the_Beautiful_3_default = "/assets/10-Perfumers%20are%20missionaries%20of%20the%20Beautiful%203-JPMUG-kx.jpg";
//#endregion
//#region app/assets/home/quotes-slideshow/11-Perfumers decorate Time and Space.jpg?url
var _11_Perfumers_decorate_Time_and_Space_default = "/assets/11-Perfumers%20decorate%20Time%20and%20Space-BiGAlatJ.jpg";
//#endregion
//#region app/assets/home/quotes-slideshow/2--Decorate Time and Space.jpg?url
var _2__Decorate_Time_and_Space_default = "/assets/2--Decorate%20Time%20and%20Space-Q5WLmIHj.jpg";
//#endregion
//#region app/assets/home/quotes-slideshow/3-Perfume Begins - SF Garden and Cherry blossoms.jpg?url
var _3_Perfume_Begins___SF_Garden_and_Cherry_blossoms_default = "/assets/3-Perfume%20Begins%20-%20SF%20Garden%20and%20Cherry%20blossoms-C_cioSZP.jpg";
//#endregion
//#region app/assets/home/quotes-slideshow/4-Perfumers are missionaries of the Beautiful 2.jpg?url
var _4_Perfumers_are_missionaries_of_the_Beautiful_2_default = "/assets/4-Perfumers%20are%20missionaries%20of%20the%20Beautiful%202-Bfh2mzn3.jpg";
//#endregion
//#region app/assets/home/quotes-slideshow/5-Little by little -Monument Valley Poem.jpg?url
var _5_Little_by_little__Monument_Valley_Poem_default = "/assets/5-Little%20by%20little%20-Monument%20Valley%20Poem-CbeVbs4Z.jpg";
//#endregion
//#region app/assets/home/quotes-slideshow/6-Perfume is  -PrambananTemple, Yogyakarta scenic.jpg?url
var _6_Perfume_is___PrambananTemple__Yogyakarta_scenic_default = "/assets/6-Perfume%20is%20%20-PrambananTemple_%20Yogyakarta%20scenic-gY1Ni-PX.jpg";
//#endregion
//#region app/assets/home/quotes-slideshow/7-Perfume Begins where - Temple Cherryblossom Woodcut.jpg?url
var _7_Perfume_Begins_where___Temple_Cherryblossom_Woodcut_default = "/assets/7-Perfume%20Begins%20where%20-%20Temple%20Cherryblossom%20Woodcut-B7JyLBDv.jpg";
//#endregion
//#region app/assets/home/quotes-slideshow/8-Perfume decorate Time and Space 3.jpg?url
var _8_Perfume_decorate_Time_and_Space_3_default = "/assets/8-Perfume%20decorate%20Time%20and%20Space%203-kNjq8pLJ.jpg";
//#endregion
//#region app/assets/home/quotes-slideshow/9-Perfume takes us 2.jpg?url
var _9_Perfume_takes_us_2_default = "/assets/9-Perfume%20takes%20us%202-DcekryZN.jpg";
//#endregion
//#region app/assets/home/background.png
var background_default = "/assets/background-B1tJ_0M1.png";
//#endregion
//#region app/assets/home/Maderas Feature Photo.jpg
var Maderas_Feature_Photo_default = "/assets/Maderas%20Feature%20Photo-Ddfgw1bx.jpg";
//#endregion
//#region app/assets/bugs/Beaded Headband 2.png
var Beaded_Headband_2_default = "/assets/Beaded%20Headband%202-B-ki-fRb.png";
//#endregion
//#region app/assets/bugs/Leaf vein 1.jpg
var Leaf_vein_1_default = "/assets/Leaf%20vein%201-BTLc96h_.jpg";
//#endregion
//#region app/assets/home/PK in Santa Fe Portrait.jpg
var PK_in_Santa_Fe_Portrait_default = "/assets/PK%20in%20Santa%20Fe%20Portrait-91ns7Vaw.jpg";
//#endregion
//#region app/assets/bugs/Feather design.webp
var Feather_design_default = "/assets/Feather%20design-HdVPGkto.webp";
//#endregion
//#region app/assets/home/PK Logo Asia Collection image small.jpg
var PK_Logo_Asia_Collection_image_small_default = "/assets/PK%20Logo%20Asia%20Collection%20image%20small-4mD0tfkB.jpg";
//#endregion
//#region app/assets/home/PK Prive single Logo on Green.jpg
var PK_Prive_single_Logo_on_Green_default = "/assets/PK%20Prive%20single%20Logo%20on%20Green-DnaNEmYO.jpg";
//#endregion
//#region app/assets/home/Signature Collection pic.jpg
var Signature_Collection_pic_default = "/assets/Signature%20Collection%20pic-BQDDwd3q.jpg";
//#endregion
//#region app/assets/home/Elmer Yazzie Horses.png
var Elmer_Yazzie_Horses_default = "/assets/Elmer%20Yazzie%20Horses-Bb08CmaK.png";
//#endregion
//#region app/components/banner.tsx
function Banner({ images }) {
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
	return /* @__PURE__ */ jsx("div", {
		className: "top-0",
		children: /* @__PURE__ */ jsx("img", {
			className: "object-cover w-svw aspect-[1980/600] sm:aspect-[1980/278] lg:aspect-auto",
			src: source
		})
	});
}
//#endregion
//#region app/assets/PK Menu button-2.jpg
var PK_Menu_button_2_default = "/assets/PK%20Menu%20button-2-4tfzW3pH.jpg";
//#endregion
//#region app/assets/Menu Bar background.webp
var Menu_Bar_background_default = "/assets/Menu%20Bar%20background-D-VcpkNw.webp";
//#endregion
//#region app/assets/Orange Cross Plus sign.png
var Orange_Cross_Plus_sign_default = "/assets/Orange%20Cross%20Plus%20sign-DuXuLp-j.png";
//#endregion
//#region app/components/navbar.tsx
function Navbar() {
	const [open, setOpen] = useState(false);
	const [visible, setVisible] = useState(true);
	return /* @__PURE__ */ jsx("div", {
		className: "w-fit",
		children: /* @__PURE__ */ jsxs(DropdownMenu.Root, {
			modal: false,
			onOpenChange: (open) => setVisible(!open),
			children: [/* @__PURE__ */ jsx(DropdownMenu.Trigger, { children: /* @__PURE__ */ jsx("img", {
				className: "cursor-pointer -z-1",
				src: PK_Menu_button_2_default,
				style: { visibility: visible ? "visible" : "hidden" }
			}) }), /* @__PURE__ */ jsx(DropdownMenu.Portal, { children: /* @__PURE__ */ jsx(DropdownMenu.Content, {
				sideOffset: -37,
				children: /* @__PURE__ */ jsx("div", {
					className: "bg-contain h-screen aspect-[403/1080]",
					style: { backgroundImage: "url(" + Menu_Bar_background_default + ")" },
					children: /* @__PURE__ */ jsxs("div", {
						className: "mt-0 m-2 mr-[6vh] flex flex-col gap-1 sm:gap-3 place-content-start",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "mt-10",
								children: /* @__PURE__ */ jsx(DropdownMenu.Item, { children: /* @__PURE__ */ jsx("a", {
									href: "/",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex flex-row place-content-between",
										children: [/* @__PURE__ */ jsx("p", {
											className: "text-white text-lg font-bold underline font-[Resagokr]",
											children: "Home"
										}), /* @__PURE__ */ jsx("img", {
											className: "h-[1.75rem]",
											src: Orange_Cross_Plus_sign_default
										})]
									})
								}) })
							}),
							/* @__PURE__ */ jsx(DropdownMenu.Label, { children: /* @__PURE__ */ jsxs("div", {
								className: "flex flex-row place-content-between",
								children: [/* @__PURE__ */ jsx("p", {
									className: "text-white text-lg font-bold underline font-[Resagokr]",
									children: "Shop"
								}), /* @__PURE__ */ jsx("img", {
									className: "h-[1.75rem]",
									src: Orange_Cross_Plus_sign_default
								})]
							}) }),
							/* @__PURE__ */ jsxs("div", {
								className: "ml-8",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "-mt-1",
										children: /* @__PURE__ */ jsx(DropdownMenu.Item, { children: /* @__PURE__ */ jsx("a", {
											href: "/signature-collection",
											children: /* @__PURE__ */ jsx("div", {
												className: "flex flex-row place-content-between",
												children: /* @__PURE__ */ jsx("p", {
													className: "text-white text-lg leading-5 font-bold underline font-[Resagokr]",
													children: "PK Perfumes Signature Scents"
												})
											})
										}) })
									}),
									/* @__PURE__ */ jsx("div", {
										className: "mt-1",
										children: /* @__PURE__ */ jsx(DropdownMenu.Item, { children: /* @__PURE__ */ jsx("a", {
											href: "/asia-collection",
											children: /* @__PURE__ */ jsx("div", {
												className: "flex flex-row place-content-between",
												children: /* @__PURE__ */ jsx("p", {
													className: "text-white text-lg font-bold underline font-[Resagokr]",
													children: "PK Asia Collection"
												})
											})
										}) })
									}),
									/* @__PURE__ */ jsx("div", {
										className: "mt-1",
										children: /* @__PURE__ */ jsx(DropdownMenu.Item, { children: /* @__PURE__ */ jsx("a", {
											href: "/prive-collection",
											children: /* @__PURE__ */ jsx("div", {
												className: "flex flex-row place-content-between",
												children: /* @__PURE__ */ jsx("p", {
													className: "text-white text-lg font-bold underline font-[Resagokr]",
													children: "PK Privé Collection"
												})
											})
										}) })
									}),
									/* @__PURE__ */ jsx("div", {
										className: "mt-1",
										children: /* @__PURE__ */ jsx(DropdownMenu.Item, { children: /* @__PURE__ */ jsx("a", {
											href: "/deco-collection",
											children: /* @__PURE__ */ jsx("div", {
												className: "flex flex-row place-content-between",
												children: /* @__PURE__ */ jsx("p", {
													className: "text-white text-lg font-bold underline font-[Resagokr]",
													children: "PK DECO Collection"
												})
											})
										}) })
									})
								]
							}),
							/* @__PURE__ */ jsx(DropdownMenu.Item, { children: /* @__PURE__ */ jsx("a", {
								href: "/scentsual-branding",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex flex-row place-content-between",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-white text-lg font-bold underline font-[Resagokr]",
										children: "Scentsual Branding by PK"
									}), /* @__PURE__ */ jsx("img", {
										className: "h-[1.75rem]",
										src: Orange_Cross_Plus_sign_default
									})]
								})
							}) }),
							/* @__PURE__ */ jsx(DropdownMenu.Item, { children: /* @__PURE__ */ jsx("a", {
								href: "/private-label",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex flex-row place-content-between",
									children: [/* @__PURE__ */ jsxs("p", {
										className: "text-white text-lg font-bold underline font-[Resagokr] leading-5",
										children: [
											"Private Label /",
											/* @__PURE__ */ jsx("br", {}),
											"Bespoke Perfumes"
										]
									}), /* @__PURE__ */ jsx("img", {
										className: "h-[1.75rem] self-center",
										src: Orange_Cross_Plus_sign_default
									})]
								})
							}) }),
							/* @__PURE__ */ jsx(DropdownMenu.Item, { children: /* @__PURE__ */ jsx("a", {
								href: "/workshops",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex flex-row place-content-between",
									children: [/* @__PURE__ */ jsxs("p", {
										className: "text-white text-lg font-bold underline font-[Resagokr] leading-5",
										children: [
											"Learning Perfumery /",
											/* @__PURE__ */ jsx("br", {}),
											"Workshops"
										]
									}), /* @__PURE__ */ jsx("img", {
										className: "h-[1.75rem] self-center",
										src: Orange_Cross_Plus_sign_default
									})]
								})
							}) }),
							/* @__PURE__ */ jsx(DropdownMenu.Item, { children: /* @__PURE__ */ jsx("a", {
								href: "/about",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex flex-row place-content-between",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-white text-lg font-bold underline font-[Resagokr]",
										children: "About PK Perfumes"
									}), /* @__PURE__ */ jsx("img", {
										className: "h-[1.75rem]",
										src: Orange_Cross_Plus_sign_default
									})]
								})
							}) }),
							/* @__PURE__ */ jsx(DropdownMenu.Item, { children: /* @__PURE__ */ jsx("a", {
								href: "/retail",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex flex-row place-content-between",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-white text-lg font-bold underline font-[Resagokr]",
										children: "Retailers Worldwide"
									}), /* @__PURE__ */ jsx("img", {
										className: "h-[1.75rem]",
										src: Orange_Cross_Plus_sign_default
									})]
								})
							}) }),
							/* @__PURE__ */ jsx(DropdownMenu.Item, { children: /* @__PURE__ */ jsx("a", {
								href: "/contact-us",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex flex-row place-content-between",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-white text-lg font-bold underline font-[Resagokr]",
										children: "Contact Us"
									}), /* @__PURE__ */ jsx("img", {
										className: "h-[1.75rem]",
										src: Orange_Cross_Plus_sign_default
									})]
								})
							}) }),
							/* @__PURE__ */ jsx(DropdownMenu.Item, { children: /* @__PURE__ */ jsxs("a", {
								href: "/search",
								children: [" ", /* @__PURE__ */ jsxs("div", {
									className: "flex flex-row place-content-between",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-white text-lg font-bold underline font-[Resagokr]",
										children: "Search"
									}), /* @__PURE__ */ jsx("img", {
										className: "h-[1.75rem]",
										src: Orange_Cross_Plus_sign_default
									})]
								})]
							}) }),
							/* @__PURE__ */ jsx("div", {
								className: "mt-8",
								children: /* @__PURE__ */ jsx(DropdownMenu.Item, { children: /* @__PURE__ */ jsx("a", {
									href: "/terms",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex flex-row place-content-between",
										children: [/* @__PURE__ */ jsx("p", {
											className: "text-white text-lg font-bold underline font-[Resagokr]",
											children: "Shipping and terms"
										}), /* @__PURE__ */ jsx("img", {
											className: "h-[1.75rem]",
											src: Orange_Cross_Plus_sign_default
										})]
									})
								}) })
							})
						]
					})
				})
			}) })]
		})
	});
}
//#endregion
//#region app/components/materialsymbol.tsx
function MSymbol({ type = "", color = "", fill = false, opsz = 24 }) {
	return /* @__PURE__ */ jsx("span", {
		className: "material-symbols-outlined text-" + color,
		style: {
			fontVariationSettings: "'FILL' " + (fill ? "1" : "0") + ", 'wght' 400, 'GRAD' 0, 'opsz' " + opsz.toString(),
			fontSize: opsz
		},
		children: type
	});
}
//#endregion
//#region app/components/emblacarousel.tsx
function EmblaCarousel({ images }) {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
	const [scrollSnaps, setScrollSnaps] = useState([]);
	const [selectedSnap, setSelectedSnap] = useState(0);
	const scrollTo = (i) => emblaApi?.scrollTo(i);
	const setupSnaps = (emblaApi) => setScrollSnaps(emblaApi.scrollSnapList());
	const setActiveSnap = (emblaApi) => setSelectedSnap(emblaApi.selectedScrollSnap());
	useEffect(() => {
		if (!emblaApi) return;
		setupSnaps(emblaApi);
		setActiveSnap(emblaApi);
		emblaApi.on("reInit", setupSnaps);
		emblaApi.on("reInit", setActiveSnap);
		emblaApi.on("select", setActiveSnap);
	}, [emblaApi]);
	return /* @__PURE__ */ jsxs("div", {
		className: "embla",
		children: [/* @__PURE__ */ jsx("div", {
			className: "embla__viewport",
			ref: emblaRef,
			children: /* @__PURE__ */ jsx("div", {
				className: "embla__container",
				children: images.map((source, i) => /* @__PURE__ */ jsx("img", {
					className: "embla__slide",
					src: source
				}, i))
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-row place-content-between",
			children: [
				/* @__PURE__ */ jsxs("button", {
					className: "embla__prev cursor-pointer",
					onClick: () => emblaApi?.scrollPrev(),
					children: [/* @__PURE__ */ jsx(MSymbol, {
						type: "chevron_left",
						color: "white",
						opsz: 40
					}), /* @__PURE__ */ jsx("p", {
						className: "visually-hidden",
						children: "slideshow previous"
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "embla__dots mb-2 flex gap-1 sm:gap-2",
					children: scrollSnaps.map((_, index) => /* @__PURE__ */ jsx("button", {
						className: "cursor-pointer " + "embla__dot".concat(index === selectedSnap ? " embla__dot--selected" : ""),
						onClick: () => scrollTo(index),
						children: /* @__PURE__ */ jsx(MSymbol, {
							type: "circle",
							fill: index === selectedSnap,
							color: "white",
							opsz: 10
						})
					}, index))
				}),
				/* @__PURE__ */ jsxs("button", {
					className: "embla__next cursor-pointer",
					onClick: () => emblaApi?.scrollNext(),
					children: [/* @__PURE__ */ jsx(MSymbol, {
						type: "chevron_right",
						color: "white",
						opsz: 40
					}), /* @__PURE__ */ jsx("p", {
						className: "visually-hidden",
						children: "slideshow next"
					})]
				})
			]
		})]
	});
}
//#endregion
//#region app/pages/home.tsx
var home_exports = /* @__PURE__ */ __exportAll({ default: () => home_default });
var bannerImages$3 = Object.values([
	Brugmansia_PK_header_small_default,
	Cherry_Blossom_PK_Header_Small_default,
	Clouds_and_Rocks_PK_header_small_default,
	Forest_Pano_PK_Header_small_default,
	Kyoto_Golden_Temple_PK__header_small3_default,
	Lavender_and_bees_PK_Header_small_default,
	Leaf_vein_PK_header_small_default,
	Menifee_Forest_2_PK_header_small_default,
	Menifee_Forest_3_PK_header_small_default,
	Misty_Mountain_PK_header_small_default,
	Misty_Mountain_PK_header_small2_default,
	Weeds_Header_default,
	Weeds_Header2_default,
	Wet_Branch_small_PK_header_default,
	Wet_Grass_PK_Header_default,
	Wet_leaves_small_PK_Header_default,
	Wild_Forest_PK_Header_small_default
]);
var carouselImages = Object.values([
	_1_Perfumers_are_missionaries_of_the_Beautiful_default,
	_10_Perfumers_are_missionaries_of_the_Beautiful_3_default,
	_11_Perfumers_decorate_Time_and_Space_default,
	_2__Decorate_Time_and_Space_default,
	_3_Perfume_Begins___SF_Garden_and_Cherry_blossoms_default,
	_4_Perfumers_are_missionaries_of_the_Beautiful_2_default,
	_5_Little_by_little__Monument_Valley_Poem_default,
	_6_Perfume_is___PrambananTemple__Yogyakarta_scenic_default,
	_7_Perfume_Begins_where___Temple_Cherryblossom_Woodcut_default,
	_8_Perfume_decorate_Time_and_Space_3_default,
	_9_Perfume_takes_us_2_default
]);
var home_default = UNSAFE_withComponentProps(function Home() {
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsx("title", { children: "Home - PK Perfumes" }),
		/* @__PURE__ */ jsx("meta", {
			property: "og:title",
			content: "Home - PK Perfumes"
		}),
		/* @__PURE__ */ jsxs("div", {
			className: "z-99 absolute fixed w-screen",
			children: [/* @__PURE__ */ jsx(Banner, { images: bannerImages$3 }), /* @__PURE__ */ jsx(Navbar, {})]
		}),
		/* @__PURE__ */ jsxs("div", {
			className: "bg-size-[300vw_auto] md:bg-contain bg-repeat-y",
			style: { backgroundImage: "url(" + background_default + ")" },
			children: [/* @__PURE__ */ jsx(Banner, { images: bannerImages$3 }), /* @__PURE__ */ jsxs("div", {
				className: "py-10 xl:py-20 flex flex-col items-center",
				children: [
					" ",
					/* @__PURE__ */ jsx("div", {
						className: "m-5 xl:mt-10 xl:mx-30 xl:mb-30",
						children: /* @__PURE__ */ jsx(EmblaCarousel, { images: carouselImages })
					}),
					/* @__PURE__ */ jsx("img", {
						className: "mx-10 md:mx-70 mb-5",
						src: Maderas_Feature_Photo_default
					}),
					/* @__PURE__ */ jsxs("div", { children: [
						" ",
						/* @__PURE__ */ jsx("p", {
							className: "text-center text-2xl xl:text-7xl text-gray-300 font-[Resagokr] font-bold",
							children: "Featured Product Headline"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mx-1 xl:mt-4 xl:mx-80 text-center text-sm xl:text-2xl text-gray-300 font-[Resagokr] font-bold",
							children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque, libero ut tincidunt vulputate, magna mi tincidunt felis, quis vulputate lorem odio non nisi. Nunc euismod nec nulla eu auctor. Praesent nulla ipsum, tincidunt id dui semper, iaculis gravida lorem. Vestibulum dictum eget lectus ac porttitor. Aenean et vulputate orci. In in cursus turpis, eu dignissim augue. Duis dapibus ipsum nunc, a congue nibh vehicula laoreet. Aliquam tristique dui est, in vulputate libero posuere a."
						})
					] }),
					/* @__PURE__ */ jsx("img", {
						className: "mx-2 my-10 xl:mx-6 xl:my-30",
						src: Beaded_Headband_2_default
					}),
					/* @__PURE__ */ jsx("img", {
						className: "mx-4 xl:mx-80",
						src: Leaf_vein_1_default
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mx-4 my-3 xl:mx-80 xl:my-10 text-center text-sm xl:text-4xl text-gray-300 font-[Resagokr] font-bold",
						children: "PK Perfumes loves using natural raw materials, -- we also use many single molecule aroma materials, and we even make some of our own captive raw material molecules! We use whatever it takes to make you amazingly beautiful Perfumes!"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "my-10 mx-5 sm:mx-15 xl:my-40 xl:mx-40 flex flex-col sm:flex-row gap-4 sm:gap-10 xl:gap-25",
						children: [/* @__PURE__ */ jsx("img", {
							className: "aspect-square min-w-0 h-full",
							src: PK_in_Santa_Fe_Portrait_default
						}), /* @__PURE__ */ jsx("p", {
							className: "text-sm sm:max-w-[40svw] lg:text-2xl xl:text-5xl text-gray-300 font-[Resagokr] font-bold",
							children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque, libero ut tincidunt vulputate, magna mi tincidunt felis, quis vulputate lorem odio non nisi. Nunc euismod nec nulla eu auctor. Praesent nulla ipsum, tincidunt id dui semper, iaculis gravida lorem. Vestibulum dictum eget lectus ac porttitor. Aenean et vulputate orci. In in cursus turpis, eu dignissim augue. Duis dapibus ipsum nunc, a congue nibh vehicula laoreet. Aliquam tristique dui est, in vulputate libero posuere a."
						})]
					}),
					/* @__PURE__ */ jsx("img", {
						className: "mx-20 mb-10 md:mb-20 md:mx-100 min-w-0",
						src: Feather_design_default
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-center text-2xl xl:text-6xl text-gray-300 font-[Resagokr] font-bold",
						children: "Shop for your Fragrances"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "my-6 mx-5 sm:mx-15 xl:my-20 xl:mx-40 flex flex-row place-content-center gap-4 xl:gap-20",
						children: [
							/* @__PURE__ */ jsx("a", {
								className: "aspect-square min-w-0 h-full",
								href: "/asia-collection",
								children: /* @__PURE__ */ jsx("img", { src: PK_Logo_Asia_Collection_image_small_default })
							}),
							/* @__PURE__ */ jsx("a", {
								className: "aspect-square min-w-0 h-full",
								href: "/prive-collection",
								children: /* @__PURE__ */ jsx("img", { src: PK_Prive_single_Logo_on_Green_default })
							}),
							/* @__PURE__ */ jsx("a", {
								className: "aspect-square min-w-0 h-full",
								href: "/signature-collection",
								children: /* @__PURE__ */ jsx("img", { src: Signature_Collection_pic_default })
							})
						]
					}),
					/* @__PURE__ */ jsx("img", {
						className: "mx-20 my-10 md:mx-80 md:my-40 min-w-0",
						src: Elmer_Yazzie_Horses_default
					})
				]
			})]
		})
	] });
});
//#endregion
//#region app/pages/asiacollection.tsx
var asiacollection_exports = /* @__PURE__ */ __exportAll({ default: () => asiacollection_default });
var bannerImages$2 = Object.values([
	Brugmansia_PK_header_small_default,
	Cherry_Blossom_PK_Header_Small_default,
	Clouds_and_Rocks_PK_header_small_default,
	Forest_Pano_PK_Header_small_default,
	Kyoto_Golden_Temple_PK__header_small3_default,
	Lavender_and_bees_PK_Header_small_default,
	Leaf_vein_PK_header_small_default,
	Menifee_Forest_2_PK_header_small_default,
	Menifee_Forest_3_PK_header_small_default,
	Misty_Mountain_PK_header_small_default,
	Misty_Mountain_PK_header_small2_default,
	Weeds_Header_default,
	Weeds_Header2_default,
	Wet_Branch_small_PK_header_default,
	Wet_Grass_PK_Header_default,
	Wet_leaves_small_PK_Header_default,
	Wild_Forest_PK_Header_small_default
]);
var asiacollection_default = UNSAFE_withComponentProps(function AsiaCollection() {
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsx("title", { children: "Asia Collection - PK Perfumes" }),
		/* @__PURE__ */ jsx("meta", {
			property: "og:title",
			content: "Asia Collection - PK Perfumes"
		}),
		/* @__PURE__ */ jsxs("div", {
			className: "z-99 absolute fixed w-screen",
			children: [/* @__PURE__ */ jsx(Banner, { images: bannerImages$2 }), /* @__PURE__ */ jsx(Navbar, {})]
		}),
		/* @__PURE__ */ jsx("div", {
			className: "h-[300vh] bg-size-[300vw_auto] md:bg-contain bg-repeat-y",
			style: { backgroundImage: "url(" + background_default + ")" },
			children: /* @__PURE__ */ jsx(Banner, { images: bannerImages$2 })
		})
	] });
});
//#endregion
//#region app/pages/privecollection.tsx
var privecollection_exports = /* @__PURE__ */ __exportAll({ default: () => privecollection_default });
var bannerImages$1 = Object.values([
	Brugmansia_PK_header_small_default,
	Cherry_Blossom_PK_Header_Small_default,
	Clouds_and_Rocks_PK_header_small_default,
	Forest_Pano_PK_Header_small_default,
	Kyoto_Golden_Temple_PK__header_small3_default,
	Lavender_and_bees_PK_Header_small_default,
	Leaf_vein_PK_header_small_default,
	Menifee_Forest_2_PK_header_small_default,
	Menifee_Forest_3_PK_header_small_default,
	Misty_Mountain_PK_header_small_default,
	Misty_Mountain_PK_header_small2_default,
	Weeds_Header_default,
	Weeds_Header2_default,
	Wet_Branch_small_PK_header_default,
	Wet_Grass_PK_Header_default,
	Wet_leaves_small_PK_Header_default,
	Wild_Forest_PK_Header_small_default
]);
var privecollection_default = UNSAFE_withComponentProps(function PriveCollection() {
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsx("title", { children: "Prive Collection - PK Perfumes" }),
		/* @__PURE__ */ jsx("meta", {
			property: "og:title",
			content: "Prive Collection - PK Perfumes"
		}),
		/* @__PURE__ */ jsxs("div", {
			className: "z-99 absolute fixed w-screen",
			children: [/* @__PURE__ */ jsx(Banner, { images: bannerImages$1 }), /* @__PURE__ */ jsx(Navbar, {})]
		}),
		/* @__PURE__ */ jsx("div", {
			className: "h-[300vh] bg-size-[300vw_auto] md:bg-contain bg-repeat-y",
			style: { backgroundImage: "url(" + background_default + ")" },
			children: /* @__PURE__ */ jsx(Banner, { images: bannerImages$1 })
		})
	] });
});
//#endregion
//#region app/pages/signaturecollection.tsx
var signaturecollection_exports = /* @__PURE__ */ __exportAll({ default: () => signaturecollection_default });
var bannerImages = Object.values([
	Brugmansia_PK_header_small_default,
	Cherry_Blossom_PK_Header_Small_default,
	Clouds_and_Rocks_PK_header_small_default,
	Forest_Pano_PK_Header_small_default,
	Kyoto_Golden_Temple_PK__header_small3_default,
	Lavender_and_bees_PK_Header_small_default,
	Leaf_vein_PK_header_small_default,
	Menifee_Forest_2_PK_header_small_default,
	Menifee_Forest_3_PK_header_small_default,
	Misty_Mountain_PK_header_small_default,
	Misty_Mountain_PK_header_small2_default,
	Weeds_Header_default,
	Weeds_Header2_default,
	Wet_Branch_small_PK_header_default,
	Wet_Grass_PK_Header_default,
	Wet_leaves_small_PK_Header_default,
	Wild_Forest_PK_Header_small_default
]);
var signaturecollection_default = UNSAFE_withComponentProps(function SignatureCollection() {
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsx("title", { children: "Signature Collection - PK Perfumes" }),
		/* @__PURE__ */ jsx("meta", {
			property: "og:title",
			content: "Signature Collection - PK Perfumes"
		}),
		/* @__PURE__ */ jsxs("div", {
			className: "z-99 absolute fixed w-screen",
			children: [/* @__PURE__ */ jsx(Banner, { images: bannerImages }), /* @__PURE__ */ jsx(Navbar, {})]
		}),
		/* @__PURE__ */ jsx("div", {
			className: "h-[300vh] bg-size-[300vw_auto] md:bg-contain bg-repeat-y",
			style: { backgroundImage: "url(" + background_default + ")" },
			children: /* @__PURE__ */ jsx(Banner, { images: bannerImages })
		})
	] });
});
//#endregion
//#region \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/assets/entry.client-gPLFlPfi.js",
		"imports": [
			"/assets/jsx-runtime-9DXhWUXR.js",
			"/assets/react-dom-Ckb1OqoU.js",
			"/assets/errorBoundaries-BAoyOSvd.js"
		],
		"css": []
	},
	"routes": {
		"root": {
			"id": "root",
			"parentId": void 0,
			"path": "",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": true,
			"module": "/assets/root-Dv58zR1s.js",
			"imports": [
				"/assets/jsx-runtime-9DXhWUXR.js",
				"/assets/react-dom-Ckb1OqoU.js",
				"/assets/errorBoundaries-BAoyOSvd.js"
			],
			"css": ["/assets/root-C5fZ2n7J.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"pages/home": {
			"id": "pages/home",
			"parentId": "root",
			"path": void 0,
			"index": true,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/home-r6DFcFsQ.js",
			"imports": [
				"/assets/jsx-runtime-9DXhWUXR.js",
				"/assets/navbar-CSIomvMj.js",
				"/assets/react-dom-Ckb1OqoU.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"pages/asiacollection": {
			"id": "pages/asiacollection",
			"parentId": "root",
			"path": "/asia-collection",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/asiacollection-C1e3rkVH.js",
			"imports": [
				"/assets/jsx-runtime-9DXhWUXR.js",
				"/assets/navbar-CSIomvMj.js",
				"/assets/react-dom-Ckb1OqoU.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"pages/privecollection": {
			"id": "pages/privecollection",
			"parentId": "root",
			"path": "/prive-collection",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/privecollection-b7wJNtCH.js",
			"imports": [
				"/assets/jsx-runtime-9DXhWUXR.js",
				"/assets/navbar-CSIomvMj.js",
				"/assets/react-dom-Ckb1OqoU.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"pages/signaturecollection": {
			"id": "pages/signaturecollection",
			"parentId": "root",
			"path": "/signature-collection",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/signaturecollection-yvJ9jmEO.js",
			"imports": [
				"/assets/jsx-runtime-9DXhWUXR.js",
				"/assets/navbar-CSIomvMj.js",
				"/assets/react-dom-Ckb1OqoU.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-08b1d795.js",
	"version": "08b1d795",
	"sri": void 0
};
//#endregion
//#region \0virtual:react-router/server-build
var assetsBuildDirectory = "build\\client";
var basename = "/";
var future = {
	"unstable_enableNodeReadableStream": false,
	"unstable_optimizeDeps": false
};
var ssr = true;
var isSpaMode = false;
var prerender = [];
var routeDiscovery = {
	"mode": "lazy",
	"manifestPath": "/__manifest"
};
var publicPath = "/";
var entry = { module: entry_server_node_exports };
var routes = {
	"root": {
		id: "root",
		parentId: void 0,
		path: "",
		index: void 0,
		caseSensitive: void 0,
		module: root_exports
	},
	"pages/home": {
		id: "pages/home",
		parentId: "root",
		path: void 0,
		index: true,
		caseSensitive: void 0,
		module: home_exports
	},
	"pages/asiacollection": {
		id: "pages/asiacollection",
		parentId: "root",
		path: "/asia-collection",
		index: void 0,
		caseSensitive: void 0,
		module: asiacollection_exports
	},
	"pages/privecollection": {
		id: "pages/privecollection",
		parentId: "root",
		path: "/prive-collection",
		index: void 0,
		caseSensitive: void 0,
		module: privecollection_exports
	},
	"pages/signaturecollection": {
		id: "pages/signaturecollection",
		parentId: "root",
		path: "/signature-collection",
		index: void 0,
		caseSensitive: void 0,
		module: signaturecollection_exports
	}
};
var allowedActionOrigins = false;
//#endregion
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };
