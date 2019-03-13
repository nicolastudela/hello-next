import Link from 'next/link'

export const StyledLink = (props) => {
    const { nav, bigger, underline, className, ...other } = props

    const customStyle = (theme) => {
        let style
        if (nav) {
            style = {
                color: theme.colors.success,
                fontSize: 20
            }
        }
        if (bigger) {
            style = {...style, fontSize: 30}
        }

        return style
    }

    const custom = (nav || bigger)
    //const content = (<a style={{textDecoration: underline ? 'underline' : 'none'}}>{ (custom) ? (<span className={className} css={customStyle}>{props.children}</span>) : props.children}</a>)
    const content = custom ? (<a style={{textDecoration: underline ? 'underline' : 'none'}}><span className={className} css={customStyle}>{props.children}</span></a>) : <a style={{textDecoration: underline ? 'underline' : 'none'}}>{props.children}</a>

    return <Link {...other} passHref>{content}</Link>
}