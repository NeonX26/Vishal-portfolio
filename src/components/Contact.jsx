import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'
import { motion } from 'motion/react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [error, setError] = useState({})
    const [isSending, setIsSending] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
        console.log(formData)
    }

    const validate = () => {
        const error = {};
        if (!formData.name) {
            error.name = 'Name is required'
        }
        if (!formData.email) {
            error.email = 'Email is required'
        } 
        else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            error.email = 'Email is invalid'
        }
        if (!formData.message) {
            error.message = 'Message is required'
        }
        // setError(error)
        return error
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const validateError = validate()
        if (Object.keys(validateError).length > 0) {
            setError(validateError)
        } else {
            setError({})
            setIsSending(true)

            emailjs
                .send(
                    "service_cldndu8",
                    "template_igkqrkn",
                    formData,
                    "jzLxOLJiV62AxC0Om"
                )
                .then((res) => {
                    console.log('SUCCESS!', res.status, res.text)
                    toast.success('Message sent successfully')
                    setFormData({
                        name: '',
                        email: '',
                        message: ''
                    })
                })
                .catch((err) => {
                    console.log('FAILED...', err)
                    toast.error('Failed to send message')
                })
                .finally(() => {
                    setIsSending(false)
                })
        }
    }

    return(
        <div className='mx-auto max-w-3xl p-4' id='contact'>
            <Toaster />
            <h2 className='my-8 text-center text-4xl font-semibold tracking-tighter'>
                Let's Connect
            </h2>
            <motion.form 
            initial={{opacity:0, }}
            whileInView={{opacity:1}}
            transition={{duration:0.8, delay:1}}
            onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <input type="text" name="name" id="name" 
                    Value={formData.name} 
                    placeholder='Name' 
                    onChange={handleChange}
                    className='mb-8 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 focus:border-gray-400 text-sm focus:outline-none'
                    />
                    {error.name && <motion.p initial={{opacity:0}} whileInView={{opacity:1}} className='text-pink-700 text-sm'>{error.name}</motion.p>}
                </div>
                <div className='mb-4'>
                    <input type="email" name="email" id="email" 
                    Value={formData.email} 
                    placeholder='Email' 
                    onChange={handleChange}
                    className='mb-8 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 focus:border-gray-400 text-sm focus:outline-none'
                    />
                    {error.email && <motion.p initial={{opacity:0}} whileInView={{opacity:1}} className='text-pink-700 text-sm'>{error.email}</motion.p>}
                </div>
                <div className='mb-4'>
                    <textarea 
                    name="message" 
                    id="message" 
                    Value={formData.message} 
                    placeholder='Message' 
                    onChange={handleChange}
                    className='mb-8 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 focus:border-gray-400 text-sm focus:outline-none' rows={4}/>
                    {error.message && <motion.p initial={{opacity:0}} whileInView={{opacity:1}} className='text-pink-700 text-sm'>{error.message}</motion.p>}
                </div>
                <button type='submit' className={`mb-8 w-full rounded bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-yellow-500 ${isSending ? "cursor-not-allowed opacity-50" : ""}`} disabled={isSending}>
                    {isSending ? 'Sending...' : 'Send'}
                </button>
            </motion.form>
        </div>
    )
}

export default Contact