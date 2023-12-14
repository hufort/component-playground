import { Button } from "./components/button"

import "./App.css"

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Button onClick={() => console.log("clicked")}>Default</Button>
        <Button disabled>Disabled</Button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Button variant='outline' onClick={() => console.log("clicked")}>
          Outline
        </Button>
        <Button disabled variant='outline'>
          Disabled
        </Button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Button variant='naked' onClick={() => console.log("clicked")}>
          Naked
        </Button>
        <Button disabled variant='naked'>
          Disabled
        </Button>
      </div>
    </div>
  )
}

export default App
