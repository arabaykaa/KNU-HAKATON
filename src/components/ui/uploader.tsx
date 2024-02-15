import { DropzoneArea } from "mui-file-dropzone";
import { FC } from "react";

export interface UploaderProps {
  onUpload: (file: File[]) => void;
}

const Uploader: FC<UploaderProps> = ({ onUpload }) => {
  const handleUpload = (files: File[]) => {
    onUpload(files);
  };

  return (
    <>
      <DropzoneArea
        filesLimit={1}
        showPreviewsInDropzone={false}
        dropzoneText={"Drag & Drop, Upload or Paste image"}
        showAlerts={false}
        onChange={handleUpload}
      />
    </>
  );
};

export default Uploader;
