import SchoolIcon from "@mui/icons-material/School"
import WorkIcon from "@mui/icons-material/Work"
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator,
} from "@mui/lab"
import { Box, Chip, Paper, SxProps, Theme, Typography } from "@mui/material"
import * as React from "react"

import { TimelineSectionData } from "../../types"
import { Markdown } from "../misc/Markdown"

const arrowStyle = (right: boolean | undefined, shadow: boolean = true): SxProps<Theme> => ({
    position: "relative",
    "&::before": {
        backgroundColor: "background.paper",
        content: '""',
        display: "block",
        position: "absolute",
        width: 12,
        height: 12,
        left: right ? undefined : -6,
        right: right ? -6 : undefined,
        top: 14,
        transform: "rotate(45deg)",
        boxShadow: shadow ? 3 : undefined,
    },
})

export const TimelineSection: React.FC<{ section: TimelineSectionData }> = ({ section }) => {
    return (
        // TODO: Left aligned without opposite content for XS breakpoint
        <Timeline>
            {[...section.items].reverse().map((item, i) => (
                <TimelineItem key={i} position={item.isSchool ? "left" : "right"}>
                    <TimelineOppositeContent>
                        <Typography variant="body1">{item.year}</Typography>
                        <Typography variant="body2">{item.place}</Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color={item.isSchool ? "secondary" : "primary"}>
                            {item.isSchool ? <SchoolIcon fontSize="small" /> : <WorkIcon fontSize="small" />}
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Box sx={arrowStyle(item.isSchool)}>
                            <Paper
                                elevation={2}
                                sx={{
                                    padding: "6px 16px",
                                    ...arrowStyle(item.isSchool, false),
                                }}>
                                {item.chip && (
                                    <Chip
                                        size="small"
                                        color={item.isSchool ? "secondary" : "primary"}
                                        variant="outlined"
                                        label={item.chip}
                                    />
                                )}
                                <Typography variant="h6">{item.title}</Typography>
                                {item.description && <Markdown>{item.description}</Markdown>}
                            </Paper>
                        </Box>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    )
}
