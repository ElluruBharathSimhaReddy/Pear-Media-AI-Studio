import React from "react";
import "./App.css";
import WorkflowText from "./components/WorkflowText";
import WorkflowImage from "./components/WorkflowImage";

function App() {
  return (
    <div className="app">
      <div className="background-shape shape-one"></div>
      <div className="background-shape shape-two"></div>

      <header className="hero">
        <div className="hero-badge">Pear Media Assignment</div>
        <h1>Pear Media AI Studio</h1>
        <p>
          Transform simple ideas into polished prompts and create stylish image
          variations with a sleek interactive interface.
        </p>
      </header>

      <main className="dashboard">
        <section className="glass-card">
          <div className="card-header">
            <div>
              <span className="card-tag">Workflow A</span>
              <h2>Text to Image</h2>
            </div>
            <div className="card-icon">✍️</div>
          </div>
          <WorkflowText />
        </section>

        <section className="glass-card">
          <div className="card-header">
            <div>
              <span className="card-tag">Workflow B</span>
              <h2>Image to Variations</h2>
            </div>
            <div className="card-icon">🖼️</div>
          </div>
          <WorkflowImage />
        </section>
      </main>
    </div>
  );
}

export default App;