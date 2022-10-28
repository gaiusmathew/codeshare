import { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
    Bars3Icon,
    BellIcon,
    XMarkIcon,
    MoonIcon,
    SunIcon,
    ShareIcon,
} from '@heroicons/react/24/outline';

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const navigation = [
    // { name: 'Save Code', href: '#', current: true },
    { name: 'Share', href: '#', current: false },
];

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ');
}

export default function Header() {
    const [darkMode, switchTheme] = useState(false);

    return (
        <>
            <Disclosure as='nav' className='bg-gray-800'>
                {({ open }) => (
                    <>
                        <div className='mx-auto px-4 sm:px-6 lg:px-8'>
                            <div className='flex h-16 items-center justify-between'>
                                <div className='flex items-center'>
                                    <div className='flex-shrink-0'>
                                        <img
                                            className='h-8 w-8'
                                            src='/images/logo.png'
                                            alt='Code Share'
                                        />
                                    </div>
                                    <div className='ml-2 font-bold text-white text-2xl'>
                                        CodeShare
                                    </div>
                                </div>
                                <div className='hidden md:block'>
                                    <div className='ml-4 flex items-center md:ml-6'>
                                        <button
                                            type='button'
                                            className='rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                                        >
                                            {darkMode ? (
                                                <MoonIcon
                                                    className='h-6 w-6 text-white'
                                                    aria-hidden='true'
                                                    onClick={() =>
                                                        switchTheme(false)
                                                    }
                                                />
                                            ) : (
                                                <SunIcon
                                                    className='h-6 w-6 text-[#14b8a6]'
                                                    aria-hidden='true'
                                                    onClick={() =>
                                                        switchTheme(true)
                                                    }
                                                />
                                            )}
                                        </button>

                                        <div className='ml-10 flex items-baseline space-x-4'>
                                            {navigation.map(item => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className='bg-[#5271ff] text-white hover:bg-gray-700 hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium inline-flex align-middle'
                                                    aria-current={
                                                        item.current
                                                            ? 'page'
                                                            : undefined
                                                    }
                                                >
                                                    {item.name}
                                                    <ShareIcon
                                                        className='block h-5 w-5 ml-1'
                                                        aria-hidden='true'
                                                    />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className='-mr-2 flex md:hidden'>
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className='inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                                        <span className='sr-only'>
                                            Open main menu
                                        </span>
                                        {open ? (
                                            <XMarkIcon
                                                className='block h-6 w-6'
                                                aria-hidden='true'
                                            />
                                        ) : (
                                            <Bars3Icon
                                                className='block h-6 w-6'
                                                aria-hidden='true'
                                            />
                                        )}
                                    </Disclosure.Button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </Disclosure>
        </>
    );
}
