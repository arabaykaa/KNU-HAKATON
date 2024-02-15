import React, { useState } from "react";
import Button from "@mui/material/Button";
import Uploader from "src/components/ui/uploader";

const Dropzone: React.FC = () => {
  const [files, setFiles] = useState<any[]>([]);

  const handleSave = () => {
    // Saving files to state for further use and closing Modal.
    console.log(files);
    setFiles(files);
  };

  const handleOnChange = (files: File[]) => {
    // Saving files to state for further use and closing Modal.
    console.log(files);
    setFiles(files);
  };

  return (
    <div>
      <Button onClick={handleSave}>Добавить файлы</Button>
      <Uploader onUpload={handleOnChange} />
    </div>
  );
};

export default Dropzone;
