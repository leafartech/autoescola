import Link from "next/link";

export default function Contact() {
    return (
        <div className="bg-zinc-100 border-y border-zinc-300 w-full flex gap-6 flex-col items-start sm:items-center py-12 px-4 sm:px-0">
            <h3 className="text-2xl">Contato</h3>
            <div className="w-full flex flex-col items-start sm:justify-center sm:flex-row gap-4 sm:gap-24">
                <div className="flex flex-col">
                    <h5 className="text-gray-600">Instagram:</h5>
                    <p className="text-gray-600">@autoescola.tropical.pg</p>
                </div>
                <div className="flex flex-col">
                    <h5 className="text-gray-600">Whatsapp:</h5>
                    <p className="text-gray-600">(XXX) 9 XXXX-XXXX</p>
                </div>
                <div className="flex flex-col">
                    <h5 className="text-gray-600">Email:</h5>
                    <p className="text-gray-600">exemplo@hotmail.com</p>
                </div>
            </div>
        </div>
    )
}