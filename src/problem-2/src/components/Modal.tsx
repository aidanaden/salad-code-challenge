import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function Modal({ isOpen, setIsOpen, formData, handleConfirm }) {
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const handleClick = () => {
    handleConfirm()
    closeModal()
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 items-center justify-center overflow-y-auto bg-black/70"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-[100vh] align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="generalContainer mx-0 inline-block w-full max-w-sm transform self-center overflow-hidden p-6 text-left align-middle shadow-xl transition-all">
              <Dialog.Title as="h3" className="formTitle">
                Enter OTP
              </Dialog.Title>
              <div className="mt-2">
                <p className="formLabel">
                  {`Enter OTP to confirm your transaction of ${formData.amt} eth to address ${formData.address}.`}
                </p>
              </div>

              <div className="mt-4 flex flex-col gap-y-4">
                <input type="text" className="formField" placeholder="XXXXXX" />
                <button
                  type="button"
                  className="btn mt-2 bg-[#0993EC] hover:bg-[#0993EC]/80"
                  onClick={handleClick}
                >
                  Confirm transaction
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
