import { FC } from "react";
import { Button, Paper, TextareaAutosize } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import Dropzone from "./components/drop-zone-example";

type Inputs = {
  text: string
  file: File | File[] | string
}

const Home: FC = () => {
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <Paper elevation={1} sx={{
      display: "flex", width: "70%", height: "auto", justifyContent: "center",
      padding: "2rem", flexDirection: "column", alignItems: "center"
    }}>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%", display: "flex", height: "auto", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
        <TextareaAutosize {...register("text")} maxLength={1000} style={{ width: "100%", maxWidth: "100%", minWidth: "100%", minHeight: "5rem" }} />
        <Dropzone {...register('file')} />
        <Button variant="contained" sx={{ width: "100%", padding: "0.5rem" }}>
          send text/file
        </Button>
      </form>
    </Paper >
  );
};

export default Home;
