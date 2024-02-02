import React from "react"
import ReactDOM from "react-dom/client"

function ExampleComponent() {
  return (
    <div>
      <h1>Example!!</h1>
      <p>Example</p>
    </div>
  )
}

const root = React.createRoot(document.querySelector("#app"))
root.Render(<ExampleComponent />)
