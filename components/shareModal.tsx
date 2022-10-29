import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { DocumentDuplicateIcon } from '@heroicons/react/24/outline';

export default function ShareModal(props: any) {
    const [open, setOpen] = useState(props.isOpen);

    const cancelButtonRef = useRef(null);

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as='div'
                className='relative z-10'
                initialFocus={cancelButtonRef}
                onClose={setOpen}
            >
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
                </Transition.Child>

                <div className='fixed inset-0 z-10 overflow-y-auto'>
                    <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                            enterTo='opacity-100 translate-y-0 sm:scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                        >
                            <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                                <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                                    <div className='sm:flex sm:items-start'>
                                        <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                                            <Dialog.Title
                                                as='h3'
                                                className='text-lg font-medium leading-6 text-gray-900'
                                            >
                                                Share Code
                                            </Dialog.Title>
                                            <div className='mt-4'>
                                                <p className='text-sm text-gray-700'>
                                                    Anyone with access to this
                                                    URL will see your code in
                                                    real time.
                                                </p>
                                            </div>
                                            <div className='mt-4'>
                                                <p className='text-sm text-gray-500'>
                                                    Share this URL
                                                </p>
                                            </div>
                                            <div className='mt-4 inline-flex'>
                                                <input
                                                    type='text'
                                                    placeholder=''
                                                    className='border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none'
                                                />
                                                <DocumentDuplicateIcon
                                                    className='block h-6 w-6 ml-2 mt-2 cursor-pointer'
                                                    aria-hidden='true'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-gray-50 px-4 py-3 sm:px-6'>
                                    <button
                                        type='button'
                                        className='inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm'
                                        onClick={() => setOpen(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
