// Home.tsx
// Main landing UI: shows navbar, hero text, and feature cards.
// This file only handles layout and modals — safe place to customize design.



import React, { useState } from 'react'
import { useWallet } from '@txnlab/use-wallet-react'
import { AiOutlineSend, AiOutlineStar, AiOutlineDeploymentUnit } from 'react-icons/ai'
import { BsArrowUpRightCircle, BsWallet2 } from 'react-icons/bs'
import ConnectWallet from './components/ConnectWallet'
import Transact from './components/Transact'
import NFTmint from './components/NFTmint'
import Tokenmint from './components/Tokenmint'
import AppCalls from './components/AppCalls'

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [openWalletModal, setOpenWalletModal] = useState<boolean>(false)
  const [openPaymentModal, setOpenPaymentModal] = useState<boolean>(false)
  const [openMintModal, setOpenMintModal] = useState<boolean>(false)
  const [openTokenModal, setOpenTokenModal] = useState<boolean>(false)
  const [openAppCallsModal, setOpenAppCallsModal] = useState<boolean>(false)


  const { activeAddress } = useWallet()


  return (
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
                  <stop stopColor="#06b6d4" />
                  <stop offset="1" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <h1 className="text-3xl font-black text-[#b31165] tracking-tight drop-shadow-sm">Algorand dApp Gateway</h1>
        </div>
        <button
          className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#b31165] hover:bg-[#e8cc53] hover:text-[#b31165] text-sm font-bold text-white transition shadow-md border border-[#b31165]/30"
          onClick={() => setOpenWalletModal(true)}
        >
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
          Incentivizes, Showcases, Celebrates & Inspires Fitness Professionals;

          Together We Thrive, Together We Inspire Our Community .<br className="hidden sm:inline" />
          Connect your wallet to Begin Your Journey!
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
              <h3 className="text-2xl font-extrabold mb-2 text-[#87634c]">Send Payment</h3>
              <p className="text-base text-[#b31165]/80 mb-6">
                Try sending 1 ALGO to any address on TestNet. This helps you understand wallet transactions.
              </p>
              <button
                className="w-full py-3 rounded-xl bg-[#b31165] hover:bg-[#e8cc53] hover:text-[#b31165] text-white font-bold shadow transition border border-[#b31165]/30"
                onClick={() => setOpenPaymentModal(true)}
              >
                Open
              </button>
            </div>

            {/* Mint NFT */}
            <div className="p-8 bg-white/90 rounded-3xl border border-[#e8cc53]/30 hover:shadow-lg hover:border-[#e8cc53]/60 transition group relative overflow-hidden shadow-sm">
              <span className="text-5xl mb-4 text-[#e8cc53] group-hover:scale-110 transition-transform">
                <AiOutlineStar />
              </span>
              <h3 className="text-2xl font-extrabold mb-2 text-[#87634c]">Mint NFT</h3>
              <p className="text-base text-[#b31165]/80 mb-6">
                Upload an image and mint it as an NFT on Algorand with IPFS metadata stored via Pinata.
              </p>
              <button
                className="w-full py-3 rounded-xl bg-[#e8cc53] hover:bg-[#b31165] hover:text-[#e8cc53] text-[#b31165] font-bold shadow transition border border-[#e8cc53]/30"
                onClick={() => setOpenMintModal(true)}
              >
                Open
              </button>
            </div>

            {/* Create Token */}
            <div className="p-8 bg-white/90 rounded-3xl border border-[#b31165]/10 hover:shadow-lg hover:border-[#b31165]/40 transition group relative overflow-hidden shadow-sm">
              <span className="text-5xl mb-4 text-[#b31165] group-hover:scale-110 transition-transform">
                <BsArrowUpRightCircle />
              </span>
              <h3 className="text-2xl font-extrabold mb-2 text-[#87634c]">Create Token (ASA)</h3>
              <p className="text-base text-[#b31165]/80 mb-6">
                Spin up your own Algorand Standard Asset (ASA) in seconds. Perfect for testing token creation.
              </p>
              <button
                className="w-full py-3 rounded-xl bg-[#b31165] hover:bg-[#e8cc53] hover:text-[#b31165] text-white font-bold shadow transition border border-[#b31165]/30"
                onClick={() => setOpenTokenModal(true)}
              >
                Open
              </button>
            </div>

            {/* Contract Interactions */}
            <div className="p-8 bg-white/90 rounded-3xl border border-[#e8cc53]/30 hover:shadow-lg hover:border-[#e8cc53]/60 transition group relative overflow-hidden shadow-sm">
              <span className="text-5xl mb-4 text-[#e8cc53] group-hover:scale-110 transition-transform">
                <AiOutlineDeploymentUnit />
              </span>
              <h3 className="text-2xl font-extrabold mb-2 text-[#87634c]">Contract Interactions</h3>
              <p className="text-base text-[#b31165]/80 mb-6">
                Interact with a simple Algorand smart contract to see how stateful dApps work on chain.
              </p>
              <button
                className="w-full py-3 rounded-xl bg-[#e8cc53] hover:bg-[#b31165] hover:text-[#e8cc53] text-[#b31165] font-bold shadow transition border border-[#e8cc53]/30"
                onClick={() => setOpenAppCallsModal(true)}
              >
                Open
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center text-[#b31165]/80 mt-20">
            <p className="text-xl font-semibold">⚡ Connect your wallet first to unlock the features below.</p>
          </div>
        )}
      </main>

      {/* ---------------- Modals ---------------- */}
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
