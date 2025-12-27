import Link from "next/link";
import {
  HomeIcon,
  BookSearchIcon,
  FilmIcon,
  MessageCircleIcon,
  BellIcon,
  User2Icon,
  MapPinIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const menu = [
  {
    id: "home",
    href: "/",
    label: "Anasayfa",
    icon: <HomeIcon />,
  },
  {
    id: "discover",
    href: "/discover",
    label: "Keşfet",
    icon: <BookSearchIcon />,
  },
  {
    id: "reels",
    href: "/reels",
    label: "Reels",
    icon: <FilmIcon />,
  },
  {
    id: "messages",
    href: "/messages",
    label: "Mesajlar",
    icon: <MessageCircleIcon />,
  },
  {
    id: "notifications",
    href: "/notifications",
    label: "Bildirimler",
    icon: <BellIcon />,
  },
  {
    id: "profile",
    href: "/profile",
    label: "Profil",
    icon: <User2Icon />,
  },
];

export default function Sidebar() {
  return (
    <nav className="bg-white lg:h-full lg:min-h-screen lg:w-xs lg:border-r lg:border-gray-50 px-4 py-4">
      <Link href="/" className="block mx-auto text-center">
        <h1 className="flex flex-wrap items-center justify-center space-x-2 px-4">
          <MapPinIcon className="text-blue-500" />
          <span className="text-2xl font-bold text-blue-500">{"Meydan"}</span>
        </h1>
      </Link>
      <ul className="mt-5 space-y-5">
        {menu.map((item, index) => (
          <li key={item.id}>
            <Link
              className={cn(
                "flex flex-wrap items-center space-x-2 text-lg py-4 px-4 rounded-lg transition-all duration-100 hover:bg-blue-50 hover:text-blue-600 hover:font-semibold",
                index === 0
                  ? "bg-blue-50 text-blue-600 font-semibold"
                  : "text-gray-500"
              )}
              href={item.href}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
