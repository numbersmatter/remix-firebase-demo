import { Disclosure,  } from "@headlessui/react";
import { DesktopNavBar } from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";

export interface UserNav {
  name: string;
  email: string;
  imageUrl: string;
}

const user: UserNav = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

export interface SiteNavLink {
  name: string;
  href: string;
  current: boolean;
}
const navigation: SiteNavLink[] = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "team", current: false },
  { name: "Projects", href: "projects", current: false },
  { name: "Calendar", href: "calendar", current: false },
  { name: "Reports", href: "reports", current: false },
];

export interface UserNavLink {
  name: string;
  href: string;
}
const userNavigation: UserNavLink[] = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];



export default function TopNavBar() {
  return (
    <>
      <Disclosure as="nav" className="bg-indigo-600">
        {({ open }) => (
          <>
            <MobileNavBar
              navigation={navigation}
              userNavigation={userNavigation}
              user={user}
              open={open}
            />

            <DesktopNavBar
              user={user}
              navigation={navigation}
              userNavigation={userNavigation}
            />
          </>
        )}
      </Disclosure>
    </>
  );
}
