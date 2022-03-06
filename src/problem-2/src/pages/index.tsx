import Head from 'next/head'
import Form from 'components/Form'
import Modal from 'components/Modal'
import SuccessToast from 'components/SuccessToast'
import { useState } from 'react'

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({})

  const onSubmit = (data) => {
    console.log(data)
    setFormData(data)
    setIsSubmitting(true)
  }

  const executeConfirm = () => {
    setIsSubmitted(true)
    setTimeout(() => {
      console.log('setting submitted n submitting to false!')
      setIsSubmitted(false)
      setIsSubmitting(false)
    }, 3000)
  }

  return (
    <div className="flex h-[100vh] w-[100wh] justify-center">
      <Form
        isConfirmed={isSubmitted}
        isSubmitting={isSubmitting}
        onSubmit={onSubmit}
      />
      <Modal
        isOpen={isSubmitting}
        setIsOpen={setIsSubmitting}
        formData={formData}
        handleConfirm={executeConfirm}
      />
      <SuccessToast isOpen={isSubmitted} onClose={setIsSubmitted} />
    </div>
  )
}
