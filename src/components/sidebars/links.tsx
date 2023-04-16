import { CgProfile, CgMoreO } from "solid-icons/cg";
import { IoNotificationsCircleOutline } from "solid-icons/io";
import { RiMapCompassDiscoverLine } from "solid-icons/ri";
import { AiOutlineHome } from "solid-icons/ai";

const size = 24;

export const links = [{
    name: "Home",
    href: "/",
    icon: () => <AiOutlineHome size={size} />
}, {
    name: "Profile",
    href: "/profile",
    icon: () => <CgProfile size={size} />
}, {
    name: "More",
    href: "/more",
    icon: () => <CgMoreO size={size} />
}, {
    name: "Login",
    href: "/login",
    icon: () => <IoNotificationsCircleOutline size={size} />
}, {
    name: "Register",
    href: "/register",
    icon: () => <RiMapCompassDiscoverLine size={size} />
}, 
]