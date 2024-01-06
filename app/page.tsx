import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react';
import Gif from '../public/Gif.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='relative isolate pt-14 dark:bg-gray-900'>


        <div className='py-12 sm:py-20 lg:pb-40'>
          <div className='mx-auto max-w-7xl px-6 lg;px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h1 className='text-4xl font-bold tracking-tight sm:text-6xl'>
                Chat with Anyone, anywhere!
              </h1>
              <p className='mt-6 text-xl leading-6 text-gray-600 dark:text-gray-300'>
                You speak your language, they speak their language.{" "}
                <span className='text-indigo-600 dark:text-indigo-500'>
                  Let AI handle the translation
                </span>
              </p>
              <div className='mt-10 flex items-center justify-center gap-x-6'>
                <Link 
                href="/chat" 
                className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white dark:text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                  Get started
                </Link>
                <Link href="/pricing" className='rounded-md flex border border-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 dark:text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                  View Pricing <span aria-hidden="true"><ArrowRight size={16} strokeWidth={1} /></span>
                </Link>
              </div>
            </div>

            <div className='mt-16 flow-root sm:mt-24'>
              <div className='m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:m-4 lg:rounded-2xl lg:p-4'>
                <Image unoptimized
                 src={Gif}
                 alt="App screenshot"
                 width={2432}
                 height={14442}
                 className='rounded-md shadow-2xl ring-1 ring-gray-900/10'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
