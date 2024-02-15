import { Box, Typography } from "@mui/material"
import { Home } from "src/widgets"

export const Main = () => {
    return (
        <Box sx={{
            display: "flex", width: "100dvw", justifyContent: "center", flexDirection: "column",
            alignItems: "center", gap: "3rem", boxSizing: "border-box"
        }}>
            <Typography variant="h1" sx={{ fontSize: "3rem" }}>
                TTS KYRGYZ
            </Typography>
            <Home />
        </Box>
    )
}
