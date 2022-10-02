import FavoriteIcon from "@mui/icons-material/Favorite"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import StarIcon from "@mui/icons-material/Star"
import StarBorderIcon from "@mui/icons-material/StarBorder"
import StarHalfIcon from "@mui/icons-material/StarHalf"
import {
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Paper,
    Tooltip,
} from "@mui/material"
import { Box } from "@mui/system"
import * as React from "react"

import { SkillSectionData } from "../../types"
import { NFIcon } from "../misc/NerdFontIcon"

export const SkillSection: React.FC<{ section: SkillSectionData }> = ({ section }) => {
    return (
        <Paper>
            <List dense>
                {section.items.map((item, i) => (
                    <React.Fragment key={i}>
                        <ListItem>
                            {item.icons && (
                                <ListItemIcon sx={{ color: "text.primary" }}>
                                    {item.icons.map((icon, j) => (
                                        <Tooltip key={j} title={item.hints![j]}>
                                            <Box>
                                                <NFIcon fontSize="big" className={icon} />
                                            </Box>
                                        </Tooltip>
                                    ))}
                                </ListItemIcon>
                            )}
                            {item.text && <ListItemText>{item.text}</ListItemText>}
                            <ListItemSecondaryAction>
                                {Array(5)
                                    .fill(0)
                                    .map((_, i) =>
                                        Math.floor(item.count) <= i ? (
                                            Math.ceil(item.count) <= i ? (
                                                item.heart ? (
                                                    <FavoriteBorderIcon key={i} />
                                                ) : (
                                                    <StarBorderIcon key={i} />
                                                )
                                            ) : item.heart ? (
                                                // TODO, half heart
                                                <FavoriteBorderIcon key={i} />
                                            ) : (
                                                <StarHalfIcon key={i} />
                                            )
                                        ) : item.heart ? (
                                            <FavoriteIcon key={i} />
                                        ) : (
                                            <StarIcon key={i} />
                                        )
                                    )}
                            </ListItemSecondaryAction>
                        </ListItem>
                        {i !== section.items.length - 1 && <Divider />}
                    </React.Fragment>
                ))}
            </List>
        </Paper>
    )
}
