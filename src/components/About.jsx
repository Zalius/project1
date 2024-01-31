import React from 'react'
import { SiHiveBlockchain, SiStrapi, SiFsecure } from 'react-icons/si'
import { VscServerProcess } from 'react-icons/vsc'
import AboutCard from './AboutCard'

const About = () => {
  return (
    <div className='w-full bg-black text-white text-center'>
      <div className='max-w-[1240px] mx-auto px-4 py-16'>
        <div>
          <h1 className='py-4'>Introduction</h1>
          <p className='py-4 text-xl'>
            Welcome to Aleph Null: Driving Artificial Intelligence for Positive Impact.
            Aleph Null is a pioneering AI research and deployment company dedicated to harnessing
            the power of artificial general intelligence for the betterment of humanity. Our unwavering mission
            is to shape a future where AI technologies drive transformative changes across industries and positively
            impact lives worldwide.
          </p>
          {/* Card Container */}
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            {/* Card */}
            <AboutCard icon={<SiHiveBlockchain size={40} />} heading='Reliable, tamper-proof network' text='Use decentralization, trusted nodes, premium data, and
             cryptographic proofs to connect highly accurate and available
             data/APIs to any smart contract.' />

            <AboutCard icon={<SiStrapi size={40} />} heading='Reliable, tamper-proof network' text='Use decentralization, trusted nodes, premium data, and
             cryptographic proofs to connect highly accurate and available
             data/APIs to any smart contract.' />

            <AboutCard icon={<SiFsecure size={40} />} heading='Reliable, tamper-proof network' text='Use decentralization, trusted nodes, premium data, and
             cryptographic proofs to connect highly accurate and available
             data/APIs to any smart contract.' />

            <AboutCard icon={<VscServerProcess size={40} />} heading='Reliable, tamper-proof network' text='Use decentralization, trusted nodes, premium data, and
             cryptographic proofs to connect highly accurate and available
             data/APIs to any smart contract.' />

            <AboutCard icon={<VscServerProcess size={40} />} heading='Reliable, tamper-proof network' text='Use decentralization, trusted nodes, premium data, and
             cryptographic proofs to connect highly accurate and available
             data/APIs to any smart contract.' />

            <AboutCard icon={<VscServerProcess size={40} />} heading='Reliable, tamper-proof network' text='Use decentralization, trusted nodes, premium data, and
             cryptographic proofs to connect highly accurate and available
             data/APIs to any smart contract.' />

            <AboutCard icon={<VscServerProcess size={40} />} heading='Reliable, tamper-proof network' text='Use decentralization, trusted nodes, premium data, and
             cryptographic proofs to connect highly accurate and available
             data/APIs to any smart contract.' />

            <AboutCard icon={<VscServerProcess size={40} />} heading='Reliable, tamper-proof network' text='Use decentralization, trusted nodes, premium data, and
             cryptographic proofs to connect highly accurate and available
             data/APIs to any smart contract.' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About