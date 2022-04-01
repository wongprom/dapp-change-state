import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef, useState } from 'react'
import Web3 from 'web3'
import { changeStateInput } from '../abi/abis'

// TypScript
declare let window: any

//Truffle outputs post-migrations process
const web3 = new Web3(Web3.givenProvider)
const contractAddr = '0xDce81b193DA8238b27ecfe3EBec0b1522AF0c7ef'
// @ts-ignore
const ChangeState = new web3.eth.Contract(changeStateInput, contractAddr)

const Home: NextPage = () => {
  const [blockchainState, setBlockchainState] = useState(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  // check if a web3 instance is running on port:9545
  const web3Check = new Web3()
  web3Check.setProvider(
    new Web3.providers.WebsocketProvider('ws://localhost:9545')
  )
  web3Check.eth.net
    .isListening()
    .then(() => console.log('connection is successful!'))
    .catch((e) => console.error('Something went wrong : ', e))

  // Read: and get data from our local blockchain
  const handleGetBlockchainState = async (e: any) => {
    e.preventDefault()
    const result = await ChangeState.methods.get().call()
    setBlockchainState(result)
    console.log('result: ', result)
  }
  // Write: send data to our local blockchain
  const handleSet = async (e: any) => {
    if (inputRef === null) return

    e.preventDefault()
    const accounts = await window.ethereum.enable()
    const account = accounts[0]
    const gas = await ChangeState.methods
      .set(inputRef.current?.value)
      .estimateGas()
    const result = await ChangeState.methods.set(inputRef.current?.value).send({
      from: account,
      gas,
    })
    console.log('Result from setting blockchain state : ', result)
    inputRef.current!.value = ''
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
                {blockchainState
                  ? `Blockchain state: ${blockchainState}`
                  : "Click 'Get State'"}
              </p>
              <button
                onClick={(e) => handleGetBlockchainState(e)}
                className="rounded border-0 bg-pink-500 py-2 px-8 text-lg text-white hover:bg-pink-600 focus:outline-none"
              >
                Get State
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
                  ref={inputRef}
                  type="number"
                  id="number-input"
                  name="number-input"
                  className="w-full rounded border border-gray-600 bg-gray-600 bg-opacity-20 py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-pink-500 focus:bg-transparent focus:ring-2 focus:ring-pink-900"
                />
              </div>
              <button
                className="rounded border-0 bg-blue-500 py-2 px-8 text-lg text-white hover:bg-pink-600 focus:outline-none"
                onClick={(e) => handleSet(e)}
              >
                Set State
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
