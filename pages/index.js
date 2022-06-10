import Meta from '../components/common/Meta/Meta'

// importing components
import Landing from "./../components/home/Landing/landing"

export default function Home() {
  return (
    <div className="min-h-screen bg-theme text-gray-50">
      <Meta />
      <main>
        <Landing />
      </main>
    </div>
  )
}
