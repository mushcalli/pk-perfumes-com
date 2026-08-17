import type { Route } from "./+types/home";

import background from "/app/assets/home/background.png";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "PK Perfumes" },
    { name: "description", content: "Welcome to PK Perfumes!" },
  ];
}

export default function Home() {
  return <div className="h-screen" style={{
    backgroundImage: "url(" + background + ")"
    }}>
  </div>;
}
