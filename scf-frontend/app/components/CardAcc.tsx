export default function CardAcc() {
    return (
        <>
            <div>
                <div className="w-fit rounded-md bg-white px-5 py-4 drop-shadow-md">
                    <div className="mb-4 flex items-center justify-between border-b-[1px] pb-3">
                        <span className="text-lg font-bold text-zinc-800">R$ 240,59</span>
                        <span className="text-zinc-400">Saldo total</span>
                    </div>
                    <div className="mb-4 flex w-full justify-between gap-8 rounded-md bg-teal-600 p-4">
                        <div className="flex flex-col text-white">
                            <span className="mb-1 font-semibold">Tipo da Conta</span>
                            <span className="mb-2 text-xl font-bold">Cartão de Crédito</span>
                            <span className="text-sm">**** **** **** 4598</span>
                        </div>
                        <div className="flex flex-col items-end justify-between">
                            <div>
                                <svg width="39" height="24" viewBox="0 0 39 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="27" cy="12" r="12" fill="#FF9F00" />
                                    <circle cx="12" cy="12" r="12" fill="#FF0015" />
                                    <path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M19.5 21.368C22.2434 19.1689 24 15.7896 24 12C24 8.21039 22.2434 4.83112 19.5 2.63196C16.7566 4.83112 15 8.21039 15 12C15 15.7896 16.7566 19.1689 19.5 21.368Z" fill="#FF5F00" />
                                </svg>
                            </div>
                            <span className="text-lg font-semibold text-white">R$2.500,00</span>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <button className="flex items-center text-zinc-400">
                            <div className="h-full flex items-center justify-center">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 12L6 8L10 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg> 
                            </div>
                            Previous
                        </button>
                        <div>
                            span
                        </div>
                        <button className="flex items-center text-zinc-900">
                            Next
                            <div className="h-full flex items-center justify-center">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 4L10 8L6 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg> 
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}