import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRef } from 'react'

const Home: NextPage = () => {
  // const inputRef = useRef<HTMLInputElement["value"]>(0)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleSetBlockChainState = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (inputRef.current?.value) {
      //Set block chain state
      console.log('inputRef.current?.value ', inputRef.current.value)
      inputRef.current.value = ''
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>DApp change state</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <section className="body-font bg-gray-900 text-gray-400">
          <div className="container mx-auto flex flex-wrap items-center px-5 py-24">
            <div className="pr-0 md:w-1/2 md:pr-16 lg:w-3/5 lg:pr-0">
              <h1 className="title-font text-3xl font-medium text-white">
                Get state from block chain
              </h1>
              <p className="mt-4 mb-4 leading-relaxed">
                Display state from block chain here
              </p>
              <button className="rounded border-0 bg-pink-500 py-2 px-8 text-lg text-white hover:bg-pink-600 focus:outline-none">
                Get state
              </button>
            </div>
            <div className="mt-10 flex w-full flex-col rounded-lg bg-gray-800 bg-opacity-50 p-8 md:ml-auto md:mt-0 md:w-1/2 lg:w-2/6">
              <h2 className="title-font mb-5 text-lg font-medium text-white">
                Set state on block chain
              </h2>
              <div className="relative mb-4">
                <label
                  htmlFor="number-input"
                  className="text-sm leading-7 text-gray-400"
                >
                  Type a number
                </label>
                <input
                  // value={inputRef}
                  ref={inputRef}
                  type="number"
                  id="number-input"
                  name="number-input"
                  className="w-full rounded border border-gray-600 bg-gray-600 bg-opacity-20 py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-pink-500 focus:bg-transparent focus:ring-2 focus:ring-pink-900"
                />
              </div>
              {/* <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="text-sm leading-7 text-gray-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded border border-gray-600 bg-gray-600 bg-opacity-20 py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-pink-500 focus:bg-transparent focus:ring-2 focus:ring-pink-900"
                />
              </div> */}
              <button
                className="rounded border-0 bg-pink-500 py-2 px-8 text-lg text-white hover:bg-pink-600 focus:outline-none"
                onClick={(e) => handleSetBlockChainState(e)}
              >
                Set State
              </button>
              <p className="mt-3 text-xs">Some fancy text</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <p>footer</p>
      </footer>
    </div>
  )
}

export default Home
