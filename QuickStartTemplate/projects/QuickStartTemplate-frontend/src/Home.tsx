// Home.tsx - Professional Clean Light UI

<<<<<<< HEAD


import React, { useState } from 'react'
import { useWallet } from '@txnlab/use-wallet-react'
import { AiOutlineSend, AiOutlineStar, AiOutlineDeploymentUnit } from 'react-icons/ai'
import { BsArrowUpRightCircle, BsWallet2 } from 'react-icons/bs'
=======
import { useWallet } from '@txnlab/use-wallet-react'
import React, { useState } from 'react'
import { AiOutlineDeploymentUnit, AiOutlineSend, AiOutlineStar, AiOutlineWallet } from 'react-icons/ai'
import { BsArrowUpRightCircle, BsWallet2 } from 'react-icons/bs'

// Frontend modals
import AppCalls from './components/AppCalls'
>>>>>>> refs/remotes/origin/main
import ConnectWallet from './components/ConnectWallet'
import NFTmint from './components/NFTmint'
import Tokenmint from './components/Tokenmint'
<<<<<<< HEAD
import AppCalls from './components/AppCalls'
=======
import Transact from './components/Transact'
>>>>>>> refs/remotes/origin/main

interface HomeProps {}

const cardBase = 'rounded-xl shadow-md hover:shadow-lg transition border border-gray-200 bg-white'
const iconStyle = 'text-3xl text-gray-700'

const Home: React.FC<HomeProps> = () => {
  const [openWalletModal, setOpenWalletModal] = useState<boolean>(false)
  const [openPaymentModal, setOpenPaymentModal] = useState<boolean>(false)
  const [openMintModal, setOpenMintModal] = useState<boolean>(false)
  const [openTokenModal, setOpenTokenModal] = useState<boolean>(false)
  const [openAppCallsModal, setOpenAppCallsModal] = useState<boolean>(false)


  const { activeAddress } = useWallet()


  return (
<<<<<<< HEAD
  <div className="min-h-screen bg-[#f3ede1] text-[#222] flex flex-col font-sans">
      {/* ---------------- Navbar ---------------- */}
  <nav className="w-full bg-[#f3ede1]/90 border-b border-[#e8cc53] px-6 py-4 flex items-center justify-between backdrop-blur-md z-10 shadow-sm">
    <div className="flex items-center gap-3">
          {/* Logo */}
          <span className="inline-block w-10 h-10">
            {/* You can replace this with your logo.svg if desired */}
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="24" fill="url(#paint0_linear)" />
              <path d="M34 24c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10z" fill="#fff" fillOpacity=".1" />
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#959d9eff" />
                  <stop offset="1" stopColor="#b8e41cff" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <h1 className="text-3xl font-black text-[#b31165] tracking-tight drop-shadow-sm">ThriveHive</h1>
        </div>
        <button
          className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#b31165] hover:bg-[#e8cc53] hover:text-[#b31165] text-sm font-bold text-white transition shadow-md border border-[#b31165]/30"
=======
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 font-inter">
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 shadow-sm sticky top-0 z-20">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-indigo-600 text-white text-sm font-semibold">
            A
          </div>
          <div className="font-semibold text-gray-800 tracking-wide">Algorand dApp Template</div>
        </div>

        <button
>>>>>>> refs/remotes/origin/main
          onClick={() => setOpenWalletModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition"
        >
<<<<<<< HEAD
          <span className="text-lg text-[#e8cc53]">
            <BsWallet2 />
          </span>
          <span>{activeAddress ? 'Wallet Connected' : 'Connect Wallet'}</span>
        </button>
      </nav>

      {/* ---------------- Hero Section ---------------- */}
  <header className="relative flex flex-col items-center justify-center text-center py-20 px-4 sm:py-32 overflow-hidden">
        {/* Decorative Bee SVG */}
  <span className="absolute left-2 top-8 sm:left-16 sm:top-16 w-16 h-16 opacity-90 animate-bounce-slow pointer-events-none select-none drop-shadow-lg">
          {/* Bee SVG */}
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="32" cy="48" rx="12" ry="6" fill="#fde68a" />
            <ellipse cx="32" cy="48" rx="8" ry="4" fill="#fbbf24" />
            <ellipse cx="32" cy="48" rx="4" ry="2" fill="#fff" />
            <ellipse cx="32" cy="32" rx="14" ry="18" fill="#fbbf24" />
            <ellipse cx="32" cy="32" rx="10" ry="14" fill="#fffde4" />
            <ellipse cx="32" cy="32" rx="7" ry="10" fill="#fbbf24" />
            <rect x="28" y="18" width="8" height="28" rx="4" fill="#262626" />
            <ellipse cx="24" cy="20" rx="4" ry="8" fill="#bae6fd" />
            <ellipse cx="40" cy="20" rx="4" ry="8" fill="#bae6fd" />
            <circle cx="32" cy="16" r="4" fill="#262626" />
            <ellipse cx="30" cy="14" rx="1.5" ry="2.5" fill="#fff" />
            <ellipse cx="34" cy="14" rx="1.5" ry="2.5" fill="#fff" />
          </svg>
        </span>
        {/* Decorative Beehive SVG */}
    <span className="absolute right-2 bottom-8 sm:right-16 sm:bottom-16 w-20 h-20 opacity-80 animate-float pointer-events-none select-none drop-shadow-lg">
          {/* Beehive SVG */}
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="40" cy="60" rx="24" ry="12" fill="#fbbf24" />
            <ellipse cx="40" cy="48" rx="20" ry="10" fill="#fde68a" />
            <ellipse cx="40" cy="36" rx="16" ry="8" fill="#fbbf24" />
            <ellipse cx="40" cy="26" rx="12" ry="6" fill="#fde68a" />
            <ellipse cx="40" cy="18" rx="8" ry="4" fill="#fbbf24" />
            <ellipse cx="40" cy="60" rx="6" ry="3" fill="#262626" />
          </svg>
        </span>
        <h2 className="text-5xl sm:text-7xl font-black text-[#87634c] mb-6 drop-shadow-xl tracking-tight">
          Welcome to ThriveHive
        </h2>

        <p className="text-xl sm:text-2xl text-[#b31165] max-w-2xl mx-auto mb-10 font-semibold">
         Together We Thrive <br className="hidden sm:inline" />

        ThriveHive Celebrates Fitness Professionals  <br className="hidden sm:inline" />


          <br className="hidden sm:inline" />
          Connect Your Wallet To Begin Your Journey!
        </p>

        <button
          className="inline-block px-10 py-4 rounded-full bg-[#e8cc53] text-[#b31165] font-extrabold text-xl shadow-xl hover:scale-105 hover:bg-[#b31165] hover:text-[#e8cc53] hover:shadow-2xl transition-transform duration-200 border-2 border-[#b31165]"
          onClick={() => setOpenWalletModal(true)}
        >
          {activeAddress ? 'Wallet Connected' : 'Get Started – Connect Wallet'}
        </button>
  </header>
      {/* ---------------- Features Grid ---------------- */}
  <main className="flex-1 px-4 pb-16">
        {activeAddress ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-8">
            {/* Send Payment */}
            <div className="p-8 bg-white/90 rounded-3xl border border-[#b31165]/10 hover:shadow-lg hover:border-[#b31165]/40 transition group relative overflow-hidden shadow-sm">
              <span className="text-5xl mb-4 text-[#b31165] group-hover:scale-110 transition-transform">
                <AiOutlineSend />
              </span>
              <h3 className="text-2xl font-extrabold mb-2 text-[#87634c]">Accept & Send Payment</h3>
              <p className="text-base text-[#b31165]/80 mb-6">
                Accept tips, rewards, and payment in Algo or USDC directly in your wallet              </p>
              <button
                className="w-full py-3 rounded-xl bg-[#b31165] hover:bg-[#e8cc53] hover:text-[#b31165] text-white font-bold shadow transition border border-[#b31165]/30"
=======
          <BsWallet2 className="text-white" />
          {activeAddress ? 'Wallet Linked' : 'Connect Wallet'}
        </button>
      </nav>

      {/* Hero */}
      <header className="flex flex-col items-center text-center py-16 px-6">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-full px-4 py-1 text-sm font-medium mb-5">
          <AiOutlineWallet />
          <span>Algorand Universal Actions</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Build Faster with a Universal dApp Surface
        </h1>
        <p className="text-gray-600 max-w-xl mb-8">
          Trigger common Algorand actions — payments, NFT minting, token creation, and contract calls — from a clean, unified interface.
        </p>

        {!activeAddress && (
          <button
            onClick={() => setOpenWalletModal(true)}
            className="px-6 py-3 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 shadow-md transition"
          >
            Connect Wallet to Get Started
          </button>
        )}
      </header>

      {/* Features */}
      <main id="features" className="flex-1 flex flex-col items-center px-6 pb-16">
        {activeAddress ? (
          <div className="w-full max-w-5xl">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">Available Actions</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <button
                className={`${cardBase} flex flex-col items-start gap-3 p-5`}
>>>>>>> refs/remotes/origin/main
                onClick={() => setOpenPaymentModal(true)}
              >
                <div className="p-3 rounded-lg bg-indigo-100 text-indigo-700">
                  <AiOutlineSend className={iconStyle} />
                </div>
                <div>
                  <p className="text-base font-medium text-gray-900">Send Payment</p>
                  <p className="text-sm text-gray-500">Transfer ALGO or assets.</p>
                </div>
              </button>

<<<<<<< HEAD
            {/* Mint NFT */}
            <div className="p-8 bg-white/90 rounded-3xl border border-[#e8cc53]/30 hover:shadow-lg hover:border-[#e8cc53]/60 transition group relative overflow-hidden shadow-sm">
              <span className="text-5xl mb-4 text-[#e8cc53] group-hover:scale-110 transition-transform">
                <AiOutlineStar />
              </span>
              <h3 className="text-2xl font-extrabold mb-2 text-[#87634c]">Mint NFT</h3>
              <p className="text-base text-[#b31165]/80 mb-6">
                Upload an image and mint it as an NFT on Algorand to send to your clients.
              </p>
              <button
                className="w-full py-3 rounded-xl bg-[#e8cc53] hover:bg-[#b31165] hover:text-[#e8cc53] text-[#b31165] font-bold shadow transition border border-[#e8cc53]/30"
=======
              <button
                className={`${cardBase} flex flex-col items-start gap-3 p-5`}
>>>>>>> refs/remotes/origin/main
                onClick={() => setOpenMintModal(true)}
              >
                <div className="p-3 rounded-lg bg-pink-100 text-pink-700">
                  <AiOutlineStar className={iconStyle} />
                </div>
                <div>
                  <p className="text-base font-medium text-gray-900">Mint NFT</p>
                  <p className="text-sm text-gray-500">Create a simple NFT collection.</p>
                </div>
              </button>

<<<<<<< HEAD
            {/* Create Token */}
            <div className="p-8 bg-white/90 rounded-3xl border border-[#b31165]/10 hover:shadow-lg hover:border-[#b31165]/40 transition group relative overflow-hidden shadow-sm">
              <span className="text-5xl mb-4 text-[#b31165] group-hover:scale-110 transition-transform">
                <BsArrowUpRightCircle />
              </span>
              <h3 className="text-2xl font-extrabold mb-2 text-[#87634c]">Create Token (ASA)</h3>
              <p className="text-base text-[#b31165]/80 mb-6">
                Create your own token for loyalty points, rewards, or in-app currency on Algorand
              </p>
              <button
                className="w-full py-3 rounded-xl bg-[#b31165] hover:bg-[#e8cc53] hover:text-[#b31165] text-white font-bold shadow transition border border-[#b31165]/30"
=======
              <button
                className={`${cardBase} flex flex-col items-start gap-3 p-5`}
>>>>>>> refs/remotes/origin/main
                onClick={() => setOpenTokenModal(true)}
              >
                <div className="p-3 rounded-lg bg-emerald-100 text-emerald-700">
                  <BsArrowUpRightCircle className={iconStyle} />
                </div>
                <div>
                  <p className="text-base font-medium text-gray-900">Create Token</p>
                  <p className="text-sm text-gray-500">Spin up a new ASA instantly.</p>
                </div>
              </button>

<<<<<<< HEAD
            {/* Contract Interactions */}
            <div className="p-8 bg-white/90 rounded-3xl border border-[#e8cc53]/30 hover:shadow-lg hover:border-[#e8cc53]/60 transition group relative overflow-hidden shadow-sm">
              <span className="text-5xl mb-4 text-[#e8cc53] group-hover:scale-110 transition-transform">
                <AiOutlineDeploymentUnit />
              </span>
              <h3 className="text-2xl font-extrabold mb-2 text-[#87634c]">Contract Interactions</h3>
              <p className="text-base text-[#b31165]/80 mb-6">
                Create contracts for client interaction, subscriptions, and more
              </p>
              <button
                className="w-full py-3 rounded-xl bg-[#e8cc53] hover:bg-[#b31165] hover:text-[#e8cc53] text-[#b31165] font-bold shadow transition border border-[#e8cc53]/30"
=======
              <button
                className={`${cardBase} flex flex-col items-start gap-3 p-5`}
>>>>>>> refs/remotes/origin/main
                onClick={() => setOpenAppCallsModal(true)}
              >
                <div className="p-3 rounded-lg bg-blue-100 text-blue-700">
                  <AiOutlineDeploymentUnit className={iconStyle} />
                </div>
                <div>
                  <p className="text-base font-medium text-gray-900">Contract Interactions</p>
                  <p className="text-sm text-gray-500">Call ARC-4 or app methods.</p>
                </div>
              </button>
            </div>
          </div>
        ) : (
<<<<<<< HEAD
          <div className="text-center text-[#b31165]/80 mt-20">
            <p className="text-xl font-semibold">⚡ Connect your wallet first to unlock the features below.</p>
=======
          <div className="text-center mt-8 text-gray-600">
            <p>Connect your wallet to access all actions.</p>
>>>>>>> refs/remotes/origin/main
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full py-5 text-center text-sm text-gray-500 border-t border-gray-200 bg-white">
        © {new Date().getFullYear()} Algorand Universal dApp Template. Built for clarity & speed.
      </footer>

      {/* Modals */}
      <ConnectWallet openModal={openWalletModal} closeModal={() => setOpenWalletModal(false)} />
      <Transact openModal={openPaymentModal} setModalState={setOpenPaymentModal} />
      <NFTmint openModal={openMintModal} setModalState={setOpenMintModal} />
      <Tokenmint openModal={openTokenModal} setModalState={setOpenTokenModal} />
      <AppCalls openModal={openAppCallsModal} setModalState={setOpenAppCallsModal} />
      {/* Custom Animations for bee and beehive */}
      <style>{`
        @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-16px); } }
        .animate-bounce-slow { animation: bounce-slow 3.5s infinite; }
        @keyframes float { 0%, 100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-10px) scale(1.05); } }
        .animate-float { animation: float 4.5s ease-in-out infinite; }
        html { font-family: 'Inter', 'Nunito', 'Segoe UI', 'Arial', sans-serif; }
      `}</style>
    </div>
  )
}

export default Home
