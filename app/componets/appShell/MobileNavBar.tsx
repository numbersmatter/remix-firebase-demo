import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import type { SiteNavLink, UserNav, UserNavLink } from "./TopNavBar";
import { classNames } from "~/utils/stylingFuncs";
import { NavLink } from "@remix-run/react";

export interface MobileNavBarParams {
  navigation: SiteNavLink[];
  userNavigation: UserNavLink[];
  user: UserNav;
  open: boolean;
}

const activeStyle = 'bg-indigo-700 text-white px-3 py-2 ml-3 rounded-md text-sm font-medium'

const notActiveStyle = 'text-black ml-3 hover:bg-indigo-500 hover:text-white hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium'

export default function MobileNavBar(params: MobileNavBarParams) {
  const { navigation, userNavigation, user, open } = params;

  return (
    <div className="mx-auto max-w-7xl  px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              className="h-8 w-8"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"
              alt="Your Company"
            />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {/* <ul> */}
                  <NavLink
                    // key={item.name}
                    to={`/`}
                    className={({ isActive }) =>
                    isActive ? activeStyle : notActiveStyle
                  }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    // key={item.name}
                    to={`/artist`}
                    className={({ isActive }) =>
                    isActive ? activeStyle : notActiveStyle
                  }
                  >
                    Find Artist
                  </NavLink>
              {/* </ul> */}
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="ml-4 flex items-center md:ml-6">
            <button
              type="button"
              className="rounded-full bg-indigo-600 p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="flex max-w-xs items-center rounded-full bg-indigo-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src={user.imageUrl}
                    alt=""
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {userNavigation.map((item) => (
                    <Menu.Item key={item.name}>
                      {({ active }) => (
                        <a
                          href={item.href}
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          {item.name}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
          {/* Mobile menu button */}
          <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-indigo-600 p-2 text-indigo-200 hover:bg-indigo-500 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
            <span className="sr-only">Open main menu</span>
            {open ? (
              <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            )}
          </Disclosure.Button>
        </div>
      </div>
    </div>
  );
}
