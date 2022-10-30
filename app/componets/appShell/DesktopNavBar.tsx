import { Disclosure, } from "@headlessui/react";
import {  BellIcon,  } from '@heroicons/react/24/outline'
import { classNames } from "~/utils/stylingFuncs";
import type { SiteNavLink, UserNav, UserNavLink } from "./TopNavBar";
import { NavLink } from "@remix-run/react";




export interface DesktopNavBarParams{
  navigation: SiteNavLink[],
  userNavigation: UserNavLink[],
  user: UserNav
} 

export function DesktopNavBar(props: DesktopNavBarParams){
  const { navigation, userNavigation, user} = props

  return (
    <Disclosure.Panel className="md:hidden">
    <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
      {navigation.map((item) => (
        <Disclosure.Button
          key={item.name}
          as="a"
          href={item.href}
          className={classNames(
            item.current
              ? 'bg-indigo-700 text-white'
              : 'text-black hover:bg-indigo-500 hover:bg-opacity-75',
            'block px-5  py-2 rounded-md text-base font-medium'
          )}
          aria-current={item.current ? 'page' : undefined}
        >
          {item.name}
        </Disclosure.Button>
      ))}
    </div>
    <div className="border-t border-indigo-700 pt-4 pb-3">
      <div className="flex items-center px-5">
        <div className="flex-shrink-0">
          <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
        </div>
        <div className="ml-3">
          <div className="text-base font-medium text-white">{user.name}</div>
          <div className="text-sm font-medium text-indigo-300">{user.email}</div>
        </div>
        <button
          type="button"
          className="ml-auto flex-shrink-0 rounded-full bg-indigo-600 p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
        >
          <span className="sr-only">View notifications</span>
          <BellIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="mt-3 space-y-1 px-2">
        {userNavigation.map((item) => (
          <Disclosure.Button
            key={item.name}
            as="a"
            href={item.href}
            className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
          >
            {item.name}
          </Disclosure.Button>
        ))}
      </div>
    </div>
  </Disclosure.Panel>

  )
}