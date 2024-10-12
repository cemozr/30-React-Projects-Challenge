import React, { ChangeEvent, useState } from "react";

type File = MediaSource | Blob | null;

export const ProjectTen = () => {
  const [file, setFile] = useState<File>(null);
  const fileChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    const selectedFile: File =
      e.currentTarget.files && e.currentTarget.files[0];
    setFile(selectedFile);
    return;
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Image Uploader</h1>
      <input type="file" accept="image/*" onChange={fileChangeHandler} />
      {file && (
        <img
          style={{ width: "20rem", margin: "1rem" }}
          src={URL.createObjectURL(file)}
        />
      )}
    </div>
  );
};
