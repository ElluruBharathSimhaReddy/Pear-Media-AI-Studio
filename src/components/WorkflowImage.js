import React, { useState } from "react";

export default function WorkflowImage() {
  const [fileName, setFileName] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);
    setImagePreview(URL.createObjectURL(file));
  };

  return (
    <div>
      <div className="upload-box">
        <label className="form-label">Upload reference image</label>

        <label className="custom-upload-btn">
          Select Image
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </label>

        <div className="file-note">
          {fileName ? `Selected: ${fileName}` : "No image selected yet"}
        </div>
      </div>

      {imagePreview && (
        <div className="result-box">
          <p className="result-title">Image Preview</p>
          <img src={imagePreview} alt="Preview" className="preview-image" />

          <div className="actions">
            <button className="btn btn-primary">Analyze Image</button>
            <button className="btn btn-secondary">Generate Variation</button>
          </div>

          <ul className="analysis-list">
            <li>Main subject: identified from uploaded image</li>
            <li>Lighting: soft cinematic glow</li>
            <li>Style: premium digital artwork</li>
            <li>Palette: blue, violet, and neon tones</li>
          </ul>
        </div>
      )}
    </div>
  );
}