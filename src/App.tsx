import DarkModeIcon from "@mui/icons-material/DarkMode"
import LightModeIcon from "@mui/icons-material/LightMode"
import { Box, CssBaseline, Fab, ThemeProvider } from "@mui/material"
import { useState } from "react"

import { Section } from "./components/Section"
import { darkTheme, lightTheme } from "./theme"
import { ImportSectionData } from "./types"

export const App = () => {
    const [dark, setDarkTheme] = useState<boolean>(false)
    const theme = dark ? darkTheme : lightTheme
    const section: ImportSectionData = { type: "import", import: "index.json5" }

    return (
        <ThemeProvider theme={theme}>
            {/* Hardcode global transitions... */}
            <style>{`* { transition: ${theme.transitions.create(["color", "background-color"])} }`}</style>
            <CssBaseline />
            <Box height="100vh" width="100vw">
                <Section section={section} />
            </Box>
            <Fab
                color="default"
                size="small"
                sx={{ position: "absolute", bottom: 10, left: 10 }}
                onClick={() => setDarkTheme((b) => !b)}>
                {dark ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
            </Fab>
        </ThemeProvider>
    )
}
