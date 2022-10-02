import type {} from "@mui/lab/themeAugmentation"
import { createTheme } from "@mui/material"

export const lightTheme = createTheme({
    palette: {
        background: {
            default: "#eee",
        },
    },
})

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
})
