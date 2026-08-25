import { useState } from "react";
import { DropdownMenu } from "radix-ui";

import menuButton from "~/assets/img/PK Menu button-2.jpg";
import menuBackground from "~/assets/img/Menu Bar background.webp"
import menuCross from "~/assets/img/Orange Cross Plus sign.png"

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return <div className="w-fit" onBlur={() => setOpen(false)}>
        <DropdownMenu.Root modal={false}>
            <DropdownMenu.Trigger>
                <img className="cursor-pointer" src={menuButton}></img>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                
                <DropdownMenu.Content sideOffset={-37}>
                    <div className="bg-contain h-screen aspect-[403/1080]"  style={{
                        backgroundImage: "url(" + menuBackground + ")"
                    }}>
                        <div className="mt-0 m-2 mr-[6vh] flex flex-col gap-1 sm:gap-3 place-content-start">
                            <div className="mt-10">
                                <DropdownMenu.Item>
                                    <a href="/">
                                        <div className="flex flex-row place-content-between">
                                            <p className="text-white text-lg font-bold underline font-[Resagokr]">Home</p>
                                            <img className="h-[1.75rem]" src={menuCross}></img>
                                        </div>
                                    </a>
                                </DropdownMenu.Item>
                            </div>
                            <DropdownMenu.Item>
                                <a href="/">
                                    <div className="flex flex-row place-content-between">
                                        <p className="text-white text-lg font-bold underline font-[Resagokr]">Shop</p>
                                        <img className="h-[1.75rem]" src={menuCross}></img>
                                    </div>
                                </a>
                            </DropdownMenu.Item>
                            {/*///// shop sub-items /////*/}
                            <div className="ml-8">
                                <div className="-mt-1">
                                    <DropdownMenu.Item>
                                        <a href="/">
                                            <div className="flex flex-row place-content-between">
                                                <p className="text-white text-lg leading-5 font-bold underline font-[Resagokr]">PK Perfumes Signature Scents</p>
                                            </div>
                                        </a>
                                    </DropdownMenu.Item>
                                </div>
                                <div className="mt-0">
                                    <DropdownMenu.Item>
                                        <a href="/">
                                            <div className="flex flex-row place-content-between">
                                                <p className="text-white text-lg font-bold underline font-[Resagokr]">PK Asia Collection</p>
                                            </div>
                                        </a>
                                    </DropdownMenu.Item>
                                </div>
                                <div className="mt-0">
                                    <DropdownMenu.Item>
                                        <a href="/">
                                            <div className="flex flex-row place-content-between">
                                                <p className="text-white text-lg font-bold underline font-[Resagokr]">PK Privé Collection</p>
                                            </div>
                                        </a>
                                    </DropdownMenu.Item>
                                </div>
                                <div className="mt-0">
                                    <DropdownMenu.Item>
                                        <a href="/">
                                            <div className="flex flex-row place-content-between">
                                                <p className="text-white text-lg font-bold underline font-[Resagokr]">PK DECO Collection</p>
                                            </div>
                                        </a>
                                    </DropdownMenu.Item>
                                </div>
                            </div>
                            {/*/////////////////////////////////*/}
                            <DropdownMenu.Item>
                                <a href="/">
                                    <div className="flex flex-row place-content-between">
                                        <p className="text-white text-lg font-bold underline font-[Resagokr]">Scentsual Branding by PK</p>
                                        <img className="h-[1.75rem]" src={menuCross}></img>
                                    </div>
                                </a>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item>
                                <a href="/">
                                    <div className="flex flex-row place-content-between">
                                        <p className="text-white text-lg font-bold underline font-[Resagokr] leading-5">Private Label /<br></br>Bespoke Perfumes</p>
                                        <img className="h-[1.75rem] self-center" src={menuCross}></img>
                                    </div>
                                </a>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item>
                                <a href="/">
                                    <div className="flex flex-row place-content-between">
                                        <p className="text-white text-lg font-bold underline font-[Resagokr] leading-5">Learning Perfumery /<br></br>Workshops</p>
                                        <img className="h-[1.75rem] self-center" src={menuCross}></img>
                                    </div>
                                </a>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item>
                                <a href="/">
                                    <div className="flex flex-row place-content-between">
                                        <p className="text-white text-lg font-bold underline font-[Resagokr]">About PK Perfumes</p>
                                        <img className="h-[1.75rem]" src={menuCross}></img>
                                    </div>
                                </a>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item>
                                <a href="/">
                                    <div className="flex flex-row place-content-between">
                                        <p className="text-white text-lg font-bold underline font-[Resagokr]">Retailers Worldwide</p>
                                        <img className="h-[1.75rem]" src={menuCross}></img>
                                    </div>
                                </a>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item>
                                <a href="/">
                                    <div className="flex flex-row place-content-between">
                                        <p className="text-white text-lg font-bold underline font-[Resagokr]">Contact Us</p>
                                        <img className="h-[1.75rem]" src={menuCross}></img>
                                    </div>
                                </a>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item>
                                <a href="/">
                                    <div className="flex flex-row place-content-between">
                                        <p className="text-white text-lg font-bold underline font-[Resagokr]">Search</p>
                                        <img className="h-[1.75rem]" src={menuCross}></img>
                                    </div>
                                </a>
                            </DropdownMenu.Item>
                            <div className="mt-8">
                                <DropdownMenu.Item>
                                    <a href="/">
                                        <div className="flex flex-row place-content-between">
                                            <p className="text-white text-lg font-bold underline font-[Resagokr]">Shipping and terms</p>
                                            <img className="h-[1.75rem]" src={menuCross}></img>
                                        </div>
                                    </a>
                                </DropdownMenu.Item>
                            </div>
                        </div>
                    </div>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    </div>;
}