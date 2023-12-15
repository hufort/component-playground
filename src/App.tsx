import "./App.css"
import { Button } from "./Button"

function App() {
  return (
    <div
      style={{
        padding: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "start",
      }}>
        <h2>Sizes</h2>
        <Row>
          <Button size="xl">X-Large</Button>
          <Button size="lg">Large</Button>
          <Button>Medium</Button>
          <Button size="sm">Small</Button>
          <Button size="xs">X-Small</Button>
        </Row>

        <h2>Themes</h2>
        <Row>
          <Button>Default</Button>
          <Button theme="interaction">Interaction</Button>
          <Button theme="create">Create</Button>
          <Button theme="destroy">Destroy</Button>
          <Button disabled>Disabled</Button>
        </Row>

        <h2>Variants</h2>
        <Row>
          <Button variant="outline">Default</Button>
          <Button theme="interaction" variant="outline">Interaction</Button>
          <Button theme="create" variant="outline">Create</Button>
          <Button theme="destroy" variant="outline">Destroy</Button>
          <Button disabled variant="outline">Disabled</Button>
        </Row>

        <Row>
          <Button variant="ghost">Default</Button>
          <Button theme="interaction" variant="ghost">Interaction</Button>
          <Button theme="create" variant="ghost">Create</Button>
          <Button theme="destroy" variant="ghost">Destroy</Button>
          <Button disabled variant="ghost">Disabled</Button>
        </Row>

        <h2>Combinations</h2>
        <Row>
          <Button size="xl">X-Large</Button>
          <Button size="lg">Large</Button>
          <Button>Medium</Button>
          <Button disabled>Medium</Button>
          <Button size="sm">Small</Button>
          <Button size="xs">X-Small</Button>
        </Row>
        <Row>
          <Button theme="interaction" size="xl">X-Large</Button>
          <Button theme="interaction" size="lg">Large</Button>
          <Button theme="interaction">Medium</Button>
          <Button theme="interaction" disabled>Disabled</Button>
          <Button theme="interaction" size="sm">Small</Button>
          <Button theme="interaction" size="xs">X-Small</Button>
        </Row>
        <Row>
          <Button theme="create" size="xl">X-Large</Button>
          <Button theme="create" size="lg">Large</Button>
          <Button theme="create">Medium</Button>
          <Button theme="create" disabled>Disabled</Button>
          <Button theme="create" size="sm">Small</Button>
          <Button theme="create" size="xs">X-Small</Button>
        </Row>
        <Row>
          <Button theme="destroy" size="xl">X-Large</Button>
          <Button theme="destroy" size="lg">Large</Button>
          <Button theme="destroy">Medium</Button>
          <Button theme="destroy" disabled>Disabled</Button>
          <Button theme="destroy" size="sm">Small</Button>
          <Button theme="destroy" size="xs">X-Small</Button>
        </Row>
        <Row>
          <Button variant="outline" size="xl">X-Large</Button>
          <Button variant="outline" size="lg">Large</Button>
          <Button variant="outline">Medium</Button>
          <Button variant="outline" disabled>Disabled</Button>
          <Button variant="outline" size="sm">Small</Button>
          <Button variant="outline" size="xs">X-Small</Button>
        </Row>
        <Row>
          <Button variant="outline" theme="interaction" size="xl">X-Large</Button>
          <Button variant="outline" theme="interaction" size="lg">Large</Button>
          <Button variant="outline" theme="interaction">Medium</Button>
          <Button variant="outline" theme="interaction" disabled>Disabled</Button>
          <Button variant="outline" theme="interaction" size="sm">Small</Button>
          <Button variant="outline" theme="interaction" size="xs">X-Small</Button>
        </Row>
        <Row>
          <Button variant="outline" theme="create" size="xl">X-Large</Button>
          <Button variant="outline" theme="create" size="lg">Large</Button>
          <Button variant="outline" theme="create">Medium</Button>
          <Button variant="outline" theme="create" disabled>Disabled</Button>
          <Button variant="outline" theme="create" size="sm">Small</Button>
          <Button variant="outline" theme="create" size="xs">X-Small</Button>
        </Row>
        <Row>
          <Button variant="outline" theme="destroy" size="xl">X-Large</Button>
          <Button variant="outline" theme="destroy" size="lg">Large</Button>
          <Button variant="outline" theme="destroy">Medium</Button>
          <Button variant="outline" theme="destroy" disabled>Disabled</Button>
          <Button variant="outline" theme="destroy" size="sm">Small</Button>
          <Button variant="outline" theme="destroy" size="xs">X-Small</Button>
        </Row>
        <Row>
          <Button variant="ghost" size="xl">X-Large</Button>
          <Button variant="ghost" size="lg">Large</Button>
          <Button variant="ghost">Medium</Button>
          <Button variant="ghost" disabled>Disabled</Button>
          <Button variant="ghost" size="sm">Small</Button>
          <Button variant="ghost" size="xs">X-Small</Button>
        </Row>
        <Row>
          <Button variant="ghost" theme="interaction" size="xl">X-Large</Button>
          <Button variant="ghost" theme="interaction" size="lg">Large</Button>
          <Button variant="ghost" theme="interaction">Medium</Button>
          <Button variant="ghost" theme="interaction" disabled>Disabled</Button>
          <Button variant="ghost" theme="interaction" size="sm">Small</Button>
          <Button variant="ghost" theme="interaction" size="xs">X-Small</Button>
        </Row>
        <Row>
          <Button variant="ghost" theme="create" size="xl">X-Large</Button>
          <Button variant="ghost" theme="create" size="lg">Large</Button>
          <Button variant="ghost" theme="create">Medium</Button>
          <Button variant="ghost" theme="create" disabled>Disabled</Button>
          <Button variant="ghost" theme="create" size="sm">Small</Button>
          <Button variant="ghost" theme="create" size="xs">X-Small</Button>
        </Row>
        <Row>
          <Button variant="ghost" theme="destroy" size="xl">X-Large</Button>
          <Button variant="ghost" theme="destroy" size="lg">Large</Button>
          <Button variant="ghost" theme="destroy">Medium</Button>
          <Button variant="ghost" theme="destroy" disabled>Disabled</Button>
          <Button variant="ghost" theme="destroy" size="sm">Small</Button>
          <Button variant="ghost" theme="destroy" size="xs">X-Small</Button>
        </Row>

        <h2>Other examples</h2>
        <Row>
          <Button iconLeft="🚙">Drive</Button>
          <Button iconRight="↗️">External</Button>
          <Button icon="🖨️" title="Print" />
          <Button type="submit">Submit</Button>
          <Button type="reset">Reset</Button>
        </Row>
        <Row>
          <Button onClick={() => alert("Alert!")}>Alert</Button>
          <Button onClick={() => alert("Disabled alert!")} disabled>Alert</Button>
        </Row>
      </div>
    </div>
  )
}

function Row(props) {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        alignItems: "start",
      }}
      {...props}
    />
  )
}

export default App
