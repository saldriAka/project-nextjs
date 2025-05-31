
import { Button } from '@/components/ui/button';
import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      <div className="bg-purple-950 md:bg-red-600 lg:bg-green-900 border-violet-500 border-b-2">
        <div className="md:flex justify-between container mx-auto py-5">
          <h1 className="text-base text-white font-bold text-center">
            Hello world
          </h1>
          <ul className="flex text-white space-x-10 justify-center mt-5 sm:mt-0">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/news">News</Link></li>
            <li>Portfolio</li>
            <li>Career</li>
            <li>
              <Button asChild variant="outline">
                <Link href="/login" className='text-black'>Login</Link>
              </Button>
            </li>
          </ul>
        </div>
        
      </div>
      <div className="w-2/4 mx-auto my-5 border-2 border-gray-200 min-w-96 p-5 bg-yellow-200 rounded-xl">
        <h3 className="text-center text-3xl mb-3">Halo Semua</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odit expedita vel nihil harum error dignissimos sed debitis. Eaque et eligendi eos nam excepturi, ipsum non voluptas possimus illum deserunt.
      </div>
      <h3 className="text-center text-3xl mb-3">Portfolio</h3>
      <div className="w-4/6 mx-auto my-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 ">
        <div className="grid-items">01</div>
        <div className="grid-items">02</div>
        <div className="grid-items">03</div>
        <div className="rounded-md h-40 border-gray-400 border-2 bg-slate-100 flex justify-center items-center ">04</div>
        <div className="rounded-md h-40 border-gray-400 border-2 bg-slate-100 flex justify-center items-center ">05</div>
        <div className="rounded-md h-40 border-gray-400 border-2 bg-slate-100 flex justify-center items-center ">06</div>
      </div>

      <div className="lg:flex justify-between items-center container">
        <div className=" border-gray-400 border-2">A</div>
        <div className=" border-gray-400 border-2">B</div>
        <div className=" border-gray-400 border-2">C</div>
      </div>

      <div className="p-4 text-white text-center font-bold">
        <div className="bg-red-500 sm:bg-orange-500 md:bg-yellow-500 lg:bg-green-500 xl:bg-blue-500 2xl:bg-purple-500 p-10 rounded">
          <p>
            Breakpoint Aktif:
            <span className="block sm:hidden">📱 <strong>default (mobile)</strong></span>
            <span className="hidden sm:block md:hidden">📱 <strong>sm ≥ 640px</strong></span>
            <span className="hidden md:block lg:hidden">💻 <strong>md ≥ 768px</strong></span>
            <span className="hidden lg:block xl:hidden">🖥️ <strong>lg ≥ 1024px</strong></span>
            <span className="hidden xl:block 2xl:hidden">🖥️ <strong>xl ≥ 1280px</strong></span>
            <span className="hidden 2xl:block">🖥️ <strong>2xl ≥ 1536px</strong></span>
          </p>
        </div>
      </div>


    </>
  
  );
}