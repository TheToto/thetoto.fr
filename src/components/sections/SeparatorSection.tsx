import { Divider } from "@mui/material"
import * as React from "react"

import { SeparatorSectionData } from "../../types"

export const SeparatorSection: React.FC<{ section: SeparatorSectionData }> = ({ section }) => {
    return <Divider sx={{ my: 2 }} />
}
