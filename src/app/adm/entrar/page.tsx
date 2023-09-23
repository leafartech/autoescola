'use client'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import axios from 'axios'

const UserLoginSchema = z.object({
    email: z.string().nonempty('O e-mail é obrigatório').email('Formato de e-mail inválido').toLowerCase(),
    password: z.string().min(6, 'A senha precisa ter no míniomo 6 caracteres')
})

type CreateUserFormData = z.infer<typeof UserLoginSchema>

export default function Entrar() {
    const [messages, setMessages] = useState('')

    const { register, handleSubmit, formState: { errors } } = useForm<CreateUserFormData>({
        resolver: zodResolver(UserLoginSchema)
    })

    async function formSubmit(data: {email: string, password: string}) {
        await axios.post('/api/user', {data}).then((res) => {
            console.log(res.data)
        }).catch(e => console.log(e))
        
    }   

    return (
        <div className="bg-my/10 min-h-screen w-full flex justify-center items-center">
            <form className="w-full max-w-sm border border-gray-300 px-8 py-12 rounded-md flex flex-col gap-3 bg-white shadow-2xl" onSubmit={handleSubmit(formSubmit)}>
                <h2 className="text-2xl font-semibold mb-4 text-center">Painel administrativo</h2>
                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-sm font-medium">Email:</label>
                    <input type="text" {...register('email')} placeholder="exemplo@hotmail.com" id="email" className="outline-none border rounded border-gray-200 py-1 px-2 text-gray-600 text-sm" />
                    {errors.email && <span className="text-sm text-red-400">{errors.email.message}</span>}
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-sm font-medium">Senha:</label>
                    <input type="password" {...register('password')} placeholder="*******" id="email" className="outline-none border rounded border-gray-200 py-1 px-2 text-gray-600 text-sm" />
                    {errors.password && <span className="text-sm text-red-400">{errors.password.message}</span>}
                </div>
                <button className="bg-my py-2 rounded text-white w-full text-center font-medium">Entrar</button>
            </form>
        </div>
    )
}