import { useState } from "react";
import { Link } from "react-router";
import { DropdownMenu } from "radix-ui";

import menuButton from "~/assets/PK Menu button-2.jpg";
import menuBackground from "~/assets/Menu Bar background.webp"
import menuCross from "~/assets/Orange Cross Plus sign.png"

export default function Navbar() {
    const [open, setOpen] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(true);

    return <div className="w-fit">
        <DropdownMenu.Root modal={false} onOpenChange={(open: boolean) => setVisible(!open)}>
            <DropdownMenu.Trigger>
                <img className="cursor-pointer -z-1" src={menuButton} style={{
                    visibility: (visible) ? "visible" : "hidden"
                }}></img>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content sideOffset={-37}>
                    <div className="bg-contain h-screen aspect-[403/1080]"  style={{
                        backgroundImage: "url(" + menuBackground + ")"
                    }}>
                        <div className="mt-0 m-2 mr-[6vh] flex flex-col gap-1 sm:gap-3 place-content-start">
                            <div className="mt-10">
                                <DropdownMenu.Item>
                                    <Link to="/">
                                        <div className="flex flex-row place-content-between">
                                            <p className="text-white text-lg font-bold underline font-[Resagokr]">Home</p>
                                            <img className="h-[1.75rem]" src={menuCross}></img>
                                        </div>
                                    </Link>
                                </DropdownMenu.Item>
                            </div>
                            <DropdownMenu.Label>
                                <div className="flex flex-row place-content-between">
                                    <p className="text-white text-lg font-bold underline font-[Resagokr]">Shop</p>
                                    <img className="h-[1.75rem]" src={menuCross}></img>
                                </div>
                            </DropdownMenu.Label>
                            {/*///// shop sub-items /////*/}
                            <div className="ml-8">
                                <div className="-mt-1">
                                    <DropdownMenu.Item>
                                        <Link to="/signature-collection">
                                            <div className="flex flex-row place-content-between">
                                                <p className="text-white text-lg leading-5 font-bold underline font-[Resagokr]">PK Perfumes Signature Scents</p>
                                            </div>
                                        </Link>
                                    </DropdownMenu.Item>
                                </div>
                                <div className="mt-1">
                                    <DropdownMenu.Item>
                                        <Link to="/asia-collection">
                                            <div className="flex flex-row place-content-between">
                                                <p className="text-white text-lg font-bold underline font-[Resagokr]">PK Asia Collection</p>
                                            </div>
                                        </Link>
                                    </DropdownMenu.Item>
                                </div>
                                <div className="mt-1">
                                    <DropdownMenu.Item>
                                        <Link to="/prive-collection">
                                            <div className="flex flex-row place-content-between">
                                                <p className="text-white text-lg font-bold underline font-[Resagokr]">PK Privé Collection</p>
                                            </div>
                                        </Link>
                                    </DropdownMenu.Item>
                                </div>
                                <div className="mt-1">
                                    <DropdownMenu.Item>
                                        <Link to="/deco-collection">
                                            <div className="flex flex-row place-content-between">
                                                <p className="text-white text-lg font-bold underline font-[Resagokr]">PK DECO Collection</p>
                                            </div>
                                        </Link>
                                    </DropdownMenu.Item>
                                </div>
                            </div>
                            {/*/////////////////////////////////*/}
                            <DropdownMenu.Item>
                                <Link to="/scentsual-branding">
                                    <div className="flex flex-row place-content-between">
                                        <p className="text-white text-lg font-bold underline font-[Resagokr]">Scentsual Branding by PK</p>
                                        <img className="h-[1.75rem]" src={menuCross}></img>
                                    </div>
                                </Link>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item>
                                <Link to="/private-label">
                                    <div className="flex flex-row place-content-between">
                                        <p className="text-white text-lg font-bold underline font-[Resagokr] leading-5">Private Label /<br></br>Bespoke Perfumes</p>
                                        <img className="h-[1.75rem] self-center" src={menuCross}></img>
                                    </div>
                                </Link>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item>
                                <Link to="/workshops">
                                    <div className="flex flex-row place-content-between">
                                        <p className="text-white text-lg font-bold underline font-[Resagokr] leading-5">Learning Perfumery /<br></br>Workshops</p>
                                        <img className="h-[1.75rem] self-center" src={menuCross}></img>
                                    </div>
                                </Link>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item>
                                <Link to="/about">
                                    <div className="flex flex-row place-content-between">
                                        <p className="text-white text-lg font-bold underline font-[Resagokr]">About PK Perfumes</p>
                                        <img className="h-[1.75rem]" src={menuCross}></img>
                                    </div>
                                </Link>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item>
                                <Link to="/retail">
                                    <div className="flex flex-row place-content-between">
                                        <p className="text-white text-lg font-bold underline font-[Resagokr]">Retailers Worldwide</p>
                                        <img className="h-[1.75rem]" src={menuCross}></img>
                                    </div>
                                </Link>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item>
                                <Link to="/contact-us">
                                    <div className="flex flex-row place-content-between">
                                        <p className="text-white text-lg font-bold underline font-[Resagokr]">Contact Us</p>
                                        <img className="h-[1.75rem]" src={menuCross}></img>
                                    </div>
                                </Link>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item>
                                <Link to="/search"> {/* may make into a modal instead of a link idk */}
                                    <div className="flex flex-row place-content-between">
                                        <p className="text-white text-lg font-bold underline font-[Resagokr]">Search</p>
                                        <img className="h-[1.75rem]" src={menuCross}></img>
                                    </div>
                                </Link>
                            </DropdownMenu.Item>
                            <div className="mt-8">
                                <DropdownMenu.Item>
                                    <Link to="/terms">
                                        <div className="flex flex-row place-content-between">
                                            <p className="text-white text-lg font-bold underline font-[Resagokr]">Shipping and terms</p>
                                            <img className="h-[1.75rem]" src={menuCross}></img>
                                        </div>
                                    </Link>
                                </DropdownMenu.Item>
                            </div>
                        </div>
                    </div>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    </div>;
}