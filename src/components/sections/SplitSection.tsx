import { Grid } from "@mui/material"
import * as React from "react"

import { SplitSectionData } from "../../types"
import { Section } from "../Section"

export const SplitSection: React.FC<{ section: SplitSectionData }> = ({ section }) => {
    return (
        <Grid container>
            {section.items.map((item, i) => (
                <Grid item key={i} xs={12 / section.items.length}>
                    <Section section={item} />
                </Grid>
            ))}
        </Grid>
    )
}
