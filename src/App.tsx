import { Button } from "./components/button"
import { ICONS } from "./icons"

import "./App.css"

const Row = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      display: "flex",
      alignItems: "start",
      gap: "1rem",
    }}
  >
    {children}
  </div>
)

const sizes = ["xs", "sm", "md", "lg", "xl"] as const
const themes = [
  "default",
  "primary",
  "warning",
  "error",
  "interaction",
] as const

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "3rem",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Row>
          {themes.map((theme) => (
            <Button key={theme} theme={theme}>
              {theme}
            </Button>
          ))}
          <Button disabled>Disabled</Button>
        </Row>
        <Row>
          {themes.map((theme) => (
            <Button key={theme} theme={theme} variant='outline'>
              {theme}
            </Button>
          ))}
          <Button disabled variant='outline'>
            Disabled
          </Button>
        </Row>
        <Row>
          {themes.map((theme) => (
            <Button key={theme} theme={theme} variant='naked'>
              {theme}
            </Button>
          ))}
          <Button disabled variant='naked'>
            Disabled
          </Button>
        </Row>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Row>
          {sizes
            .map((size) => (
              <Button key={size} size={size}>
                {size} button
              </Button>
            ))
            .reverse()}
        </Row>
        <Row>
          {sizes
            .map((size) => (
              <Button key={size} size={size} variant='outline'>
                {size} button
              </Button>
            ))
            .reverse()}
        </Row>
        <Row>
          {sizes
            .map((size) => (
              <Button key={size} size={size} variant='naked'>
                {size} button
              </Button>
            ))
            .reverse()}
        </Row>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Row>
          <Button iconRight='unicorn'>Unicorn</Button>
          <Button iconLeft='sparkle'>Sparkle</Button>
          <Button icon='ghost' />
        </Row>
      </div>
    </div>
  )
}

export default App
