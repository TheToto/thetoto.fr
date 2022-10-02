import { Box, CircularProgress } from "@mui/material"
import * as React from "react"

import JSON5 from "json5"

import { ImportSectionData, SectionData } from "../../types"
import { Section } from "../Section"

export const ImportSection: React.FC<{ section: ImportSectionData }> = ({ section }) => {
    const [childSection, setSection] = React.useState<SectionData | SectionData[]>()

    React.useEffect(() => {
        fetch("/data/" + section.import)
            .then((v) => {
                if (v.status === 200) return v.text().then((text) => JSON5.parse(text))
                else throw new Error(v.statusText)
            })
            .catch((e) => ({ type: "error", md: `Erreur de chargement de la section :\\\n ${e}` }))
            .then(setSection)
    }, [section])

    if (childSection !== undefined) {
        if (Array.isArray(childSection))
            return (
                <>
                    {childSection.map((item, i) => (
                        <Section key={i} section={item} />
                    ))}
                </>
            )
        return <Section section={childSection} />
    }
    return (
        <Box width={1} height={1} display="flex" justifyContent="center" alignItems="center">
            <CircularProgress />
        </Box>
    )
}
