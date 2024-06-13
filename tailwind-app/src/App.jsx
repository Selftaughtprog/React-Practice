import Card from "./components/card"

function App() {

  return (
    <div className="flex justify-center gap-2 items-center h-screen">
      <Card username = "harsh" btnText = "Click Here" />
      <Card username = "smit"/>
    </div>
  )
}

export default App
