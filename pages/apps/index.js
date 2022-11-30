// importing components
import Meta from "../../components/common/Meta/Meta"
import Apps from "../../components/home/Apps/Apps"

export default function AnantApps() {
  return (
    <div className="min-h-screen bg-theme text-gray-50">
      <Meta title="Our Apps | Project aNANt" extraKeywords={"apps, databases, applications"}/>
      <main>
        <Apps />
      </main>
    </div>
  )
}
