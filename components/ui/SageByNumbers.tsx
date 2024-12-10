import SageChart from './SageChart'

export default function SageByNumbers() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center py-16">
      <h2 className="text-5xl md:text-6xl font-black text-white mb-12 text-center shadow-text">
        SAGE by the Numbers
      </h2>
      <SageChart />
    </div>
  )
}

