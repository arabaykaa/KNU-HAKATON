import { Button, Paper } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { Dropzone } from "src/components";
import { useCreateTextByImageMutation } from "src/store";

export interface Inputs {
    // text: string
    file: FileList | File[] | File
}

export const Home = () => {
    const { handleSubmit, setValue } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data, 'data');

        createTextByImage(data)
    }

    const [createTextByImage] = useCreateTextByImageMutation()

    return (
        <Paper elevation={1} sx={{
            display: "flex", width: "70%", height: "auto", justifyContent: "center",
            padding: "2rem", flexDirection: "column", alignItems: "center"
        }}>
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%", display: "flex", height: "auto", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                {/* <TextareaAutosize {...register("text")} maxLength={1000} style={{ width: "100%", maxWidth: "100%", minWidth: "99%", minHeight: "5rem" }} /> */}
                <Dropzone register={setValue} />
                <Button type="submit" variant="contained" sx={{ width: "100%", padding: "0.5rem" }}>
                    send text/file
                </Button>
            </form>
        </Paper >
    );
};
