import { Box, SxProps } from "@mui/system"

export const NFIcon: React.FC<{
    className: string
    fontSize?: "small" | "medium" | "big"
    color?: string
    sx?: SxProps
}> = ({ className, fontSize = "small", color, sx }) => {
    return (
        <Box
            display="inline"
            className={"nf " + className}
            color={color}
            fontSize={fontSize === "small" ? 24 : fontSize === "big" ? 42 : 36}
            sx={sx}
        />
    )
}
