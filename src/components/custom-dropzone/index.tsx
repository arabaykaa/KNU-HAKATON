/* eslint-disable @typescript-eslint/no-explicit-any */
import { DropzoneArea } from "mui-file-dropzone";
import { Box } from "@mui/material";
import { UseFormSetValue } from "react-hook-form";
import { Inputs } from "src/widgets/home";
import classes from "./styles.module.css"

interface IProps {
    register: UseFormSetValue<Inputs>
}

export const Dropzone = ({ register }: IProps) => {
    return (
        <Box sx={{ width: "100%", padding: "1rem" }}>
            <DropzoneArea
                filesLimit={1}
                showPreviewsInDropzone={false}
                dropzoneText={"Drag & Drop, Upload or Paste image"}
                showAlerts={false}
                onChange={(e) => {
                    register("file", e[0])
                }}
                dropzoneClass={classes.container}
            />
        </Box>
    );
};
