import { Link, Typography } from "@mui/material"
import { Variant as TypographyVariant } from "@mui/material/styles/createTypography"
import ReactMarkdown from "react-markdown"

/**
 * react-markdown wrapper that use MaterialUI components.
 */
export const Markdown: React.FC<{ children: string; variant?: TypographyVariant; color?: string }> = ({
    children,
    variant,
    color,
}) => {
    return (
        <ReactMarkdown
            children={children}
            components={{
                h1: ({ children, ...props }) => (
                    <Typography {...props} variant="h1">
                        {children}
                    </Typography>
                ),
                h2: ({ children, ...props }) => (
                    <Typography {...props} variant="h2">
                        {children}
                    </Typography>
                ),
                h3: ({ children, ...props }) => (
                    <Typography {...props} variant="h3">
                        {children}
                    </Typography>
                ),
                h4: ({ children, ...props }) => (
                    <Typography {...props} variant="h4">
                        {children}
                    </Typography>
                ),
                h5: ({ children, ...props }) => (
                    <Typography {...props} variant="h5">
                        {children}
                    </Typography>
                ),
                p: ({ children, ...props }) => (
                    <Typography {...props} color={color} variant={variant ?? "body2"}>
                        {children}
                    </Typography>
                ),
                a: ({ children, ...props }) => (
                    <Link target="_blank" {...props}>
                        {children}
                    </Link>
                ),
            }}
        />
    )
}
