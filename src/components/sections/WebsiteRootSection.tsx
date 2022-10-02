import { Container, Grid, Paper, useTheme } from "@mui/material"
import * as React from "react"

import { WebsiteRootData } from "../../types"
import { Section } from "../Section"

export const WebsiteRootSection: React.FC<{ section: WebsiteRootData }> = ({ section }) => {
    const [fullscreen, setFullscreen] = React.useState<boolean>(false)
    const theme = useTheme()
    return (
        <Grid container sx={{ height: "100vh" }}>
            <Grid
                item
                xs={12}
                lg={fullscreen ? false : 4}
                sx={{
                    position: "relative",
                    height: 1,
                    backgroundColor: "#202020",
                    backgroundImage: `url(/images/bg.jpg)`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                <Section section={section.leftPane} />
            </Grid>
            <Grid
                item
                xs={12}
                lg={fullscreen ? 12 : 8}
                component={Paper}
                elevation={8}
                sx={{
                    backgroundColor: "background.default",
                    height: { lg: 1 },
                    overflow: { lg: "auto" },
                    zIndex: 1,
                }}>
                <Container>
                    {section.content.map((item, i) => (
                        <Section key={i} section={item} />
                    ))}
                </Container>
            </Grid>
        </Grid>
    )
}
