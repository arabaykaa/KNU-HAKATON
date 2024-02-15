import React, { useState } from "react";
import { Box } from "@mui/material";
import Uploader from "src/components/ui/uploader";

interface IProps {
  register: unknown
}

const Dropzone: React.FC = ({ register }: IProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [files, setFiles] = useState<any[]>([]);

  // const handleSave = () => {
  //   // Saving files to state for further use and closing Modal.
  //   // console.log(files);
  //   setFiles(files);
  // };

  const handleOnChange = (files: File[]) => {
    // Saving files to state for further use and closing Modal.
    // console.log(files);
    setFiles(files);
  };

  return (
    <Box sx={{ width: "100%", padding: "1rem" }}>
      {/* <Button onClick={handleSave}>Добавить файлы</Button> */}
      <Uploader onUpload={handleOnChange} />
    </Box>
  );
};

export default Dropzone;
