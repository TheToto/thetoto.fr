import { useTheme } from "@emotion/react"
import { Box, Divider, Link, Paper, Stack, ThemeProvider, Tooltip, Typography } from "@mui/material"
import * as React from "react"

import { darkTheme } from "../../theme"
import { LeftPaneData } from "../../types"
import { Markdown } from "../misc/Markdown"

export const LeftPaneSection: React.FC<{ section: LeftPaneData }> = ({ section }) => {
    const theme = useTheme()
    const [copied, setCopied] = React.useState<number>(0)

    return (
        <ThemeProvider theme={darkTheme}>
            {/* Why need a paper to get dark theme colors */}
            <Paper elevation={0} sx={{ bgcolor: "transparent", height: 1, overflow: "hidden" }}>
                <Stack alignItems="center" height="1">
                    <Stack sx={{ textAlign: "right" }} height="1" width="0.6" justifyContent="center">
                        <Link
                            sx={{ width: 0.7, alignSelf: "end", "& > img": { width: 1, height: 1 }, mb: 2 }}
                            target="_blank"
                            href={section.avatar_url}>
                            <Box
                                sx={{ boxShadow: 24, maxHeight: 400, maxWidth: 400 }}
                                component="img"
                                src={section.avatar_thumb}
                            />
                        </Link>
                        <Typography variant="h5">
                            {section.firstname} '{section.pseudo}' {section.lastname},
                        </Typography>
                        <Markdown color="text.secondary">{section.short_bio_md}</Markdown>
                        <Divider sx={{ borderColor: "common.white", my: 2 }} />
                        <Stack direction="row" justifyContent="end">
                            {section.links.map((link) => (
                                <Link
                                    key={link.url}
                                    href={link.url}
                                    target="_blank"
                                    underline="none"
                                    sx={{
                                        color: "text.primary",
                                        "& :hover": { color: "text.secondary" },
                                    }}>
                                    {link.icon ? (
                                        <Box
                                            sx={{ fontSize: "36px", marginRight: "20px" }}
                                            className={"nf " + link.icon}></Box>
                                    ) : (
                                        link.name
                                    )}
                                </Link>
                            ))}
                        </Stack>
                        <Divider sx={{ borderColor: "common.white", my: 2 }} />
                        <Typography>
                            {"Email : "}
                            <Tooltip
                                title={
                                    copied
                                        ? Array(copied - 1)
                                              .fill("Re")
                                              .join("-") +
                                          (copied > 1 ? "-" : "") +
                                          "Copié !"
                                        : "Cliquer pour copier"
                                }
                                onClick={(e) => {
                                    navigator.clipboard.writeText(section.email)
                                    setCopied((old) => old + 1)
                                }}>
                                <span>{section.email}</span>
                            </Tooltip>
                        </Typography>
                    </Stack>
                </Stack>
            </Paper>
        </ThemeProvider>
    )
}
