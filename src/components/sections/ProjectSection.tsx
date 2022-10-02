import { Masonry } from "@mui/lab"
import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Fab, Typography } from "@mui/material"
import * as React from "react"

import { ProjectSectionData } from "../../types"
import { Markdown } from "../misc/Markdown"
import { NFIcon } from "../misc/NerdFontIcon"

const ProjectCard: React.FC<{ item: ProjectSectionData["items"][number] }> = ({ item }) => {
    const [hovered, setHovered] = React.useState<boolean>(false)
    return (
        <Card elevation={hovered ? 12 : 2} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            {item.img && (
                <Box
                    sx={{
                        position: "relative",
                        backgroundImage: `url(${item.img})`,
                        backgroundSize: "100% 100%",
                        objectFit: "fill",
                    }}>
                    <CardMedia
                        sx={{
                            objectFit: "contain",
                            backdropFilter: "blur(40px)",
                        }}
                        component="img"
                        alt={item.name}
                        height="200"
                        image={item.img}
                    />
                    <Box sx={{ position: "absolute", bottom: 6, left: 6 }}>
                        {item.icons?.map((icon) => (
                            <NFIcon
                                sx={{ textShadow: "black 0px 0px 10px, black 0px 0px 12px" }}
                                color="common.white"
                                className={icon}
                                fontSize="big"
                            />
                        ))}
                    </Box>
                </Box>
            )}
            {item.floating && (
                <Box position="relative">
                    <Fab
                        sx={{ position: "absolute", top: -20, right: 20 }}
                        size="small"
                        target="_blank"
                        color="secondary"
                        title={item.floating.name}
                        href={item.floating.url}>
                        {item.floating.icon && <NFIcon className={item.floating.icon} />}
                    </Fab>
                </Box>
            )}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.img === undefined && item.icons.map((icon) => <NFIcon className={icon} />)} {item.name}
                </Typography>
                <Markdown color="text.secondary">{item.description}</Markdown>
            </CardContent>
            {item.links && (
                <>
                    <Divider />
                    <CardActions>
                        {item.links.map((link, i) => (
                            <Button
                                key={i}
                                size="small"
                                href={link.url}
                                target="_blank"
                                startIcon={link.icon ? <NFIcon className={link.icon} /> : undefined}>
                                {link.name}
                            </Button>
                        ))}
                    </CardActions>
                </>
            )}
        </Card>
    )
}

export const ProjectSection: React.FC<{ section: ProjectSectionData }> = ({ section }) => {
    return (
        <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 2, xl: 3 }} spacing={2}>
            {section.items.map((item, i) => (
                <ProjectCard key={i} item={item} />
            ))}
        </Masonry>
    )
}
