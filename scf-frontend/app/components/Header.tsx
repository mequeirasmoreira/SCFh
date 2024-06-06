export default function Header() {
    return (
        <header className="flex items-center justify-between border-b-2 px-6 py-5">
            <div className="flex items-center gap-4">
                <h1 className="text-2xl font-semibold text-zinc-900">Olá Miqueias</h1>
                <div className="flex items-center text-zinc-400">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                    <span className="pl-2 text-xs">6 de Junho de 2024</span>
                </div>
            </div>
            <div className="flex gap-4">
                <button className="text-zinc-600 hover:text-zinc-800">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z" clip-rule="evenodd" />
                    </svg>
                </button>
                <div className="flex gap-2 rounded-md bg-white px-2 py-1 drop-shadow-md items-center">
                    <input type="text" placeholder="Pesquisar" className="placeholder:text-sm placeholder:font-light focus:outline-none" />
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                            <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
        </header>
    )
}