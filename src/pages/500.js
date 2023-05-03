import Link from 'next/link'

export default function Custom500() {
    return (
        <div className="min-h-screen">
            <div className="flex flex-col items-center justify-center mt-10">
                <h1 className="font-bold text-xl mb-5">500 - Server-side error occurred</h1>
                <p className="font-normal text-l">Return to home page <Link href="/" className='font-bold underline drop-shadow hover:text-sky-400'>here</Link></p>
            </div>
        </div>
    )
  }