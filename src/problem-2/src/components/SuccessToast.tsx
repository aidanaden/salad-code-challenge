import { Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function SuccessToast({ isOpen, onClose }) {
  return (
    <Transition
      appear
      show={isOpen}
      as={Fragment}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        id="toast-success"
        className="absolute bottom-5 mb-4 flex w-full max-w-xs
      items-center rounded-lg bg-[#202231] p-4 text-gray-400 shadow"
        role="alert"
      >
        <div
          className="dark: inline-flex h-8 w-8 flex-shrink-0
      items-center justify-center rounded-lg bg-green-700
      text-[#7CFF6B]"
        >
          <svg
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="ml-3 text-sm font-normal">Transaction confirmed.</div>
        <button
          type="button"
          className="dark: dark: dark: bg-[gray-800]
        -mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8
        rounded-lg p-1.5 text-gray-500
        transition duration-200 focus:ring-2
        focus:ring-gray-300 hover:bg-[#414A6C] hover:text-white"
          data-collapse-toggle="toast-success"
          aria-label="Close"
          onClick={() => onClose(false)}
        >
          <span className="sr-only">Close</span>
          <svg
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </Transition>
  )
}
