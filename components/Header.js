// import Link from 'next/link'
import { Link, Box } from '../uiLibrary'

const linkStyle = {
  marginRight: 15,
  color: 'black',
}

const Header = () => (
    <Box>
        <Link nav bigger underline css={linkStyle} href="/">Home</Link>
        <Link nav href="/about">About</Link>
        {/* <Link href="/about"><img src='https://sc01.alicdn.com/kf/HTB1ImijPFXXXXbsXpXX760XFXXXA/Plsst-Link-small-belt-conveyor-system-for.png_50x50.png'/></Link> */}
    </Box>
)

export default Header