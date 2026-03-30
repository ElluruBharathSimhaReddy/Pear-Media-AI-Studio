import React, { useState } from "react";

export default function WorkflowText() {
  const [userPrompt, setUserPrompt] = useState("");
  const [enhancedPrompt, setEnhancedPrompt] = useState("");

  const handleEnhance = () => {
    if (!userPrompt.trim()) return;

    setEnhancedPrompt(
      `A cinematic, high-detail visual of ${userPrompt}, featuring rich textures, dramatic lighting, elegant composition, depth, refined color harmony, premium editorial quality, and a striking artistic mood.`
    );
  };

  return (
    <div>
      <label className="form-label">Enter your simple idea</label>
      <textarea
        className="textarea"
        placeholder="Example: a futuristic city at sunset"
        value={userPrompt}
        onChange={(e) => setUserPrompt(e.target.value)}
      />

      <div className="actions">
        <button className="btn btn-primary" onClick={handleEnhance}>
          Enhance Prompt
        </button>
      </div>

      {enhancedPrompt && (
        <div className="result-box">
          <p className="result-title">Enhanced Prompt</p>
          <textarea
            className="textarea"
            value={enhancedPrompt}
            onChange={(e) => setEnhancedPrompt(e.target.value)}
          />
          <div className="actions">
            <button className="btn btn-primary">Generate Image</button>
            <button className="btn btn-secondary">Approve Prompt</button>
          </div>
        </div>
      )}
    </div>
  );
}