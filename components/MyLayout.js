import Header from './Header'
import { Box } from '../uiLibrary'
import { themeGet } from 'styled-system'

// const layoutStyle = {
//   margin: 20,
//   padding: 20,
//   border: '1px solid #DDD'
// }

const Layout = props => {  return (<Box {...props} {...{ 
      color: props.isUserLogged ? 'success' : '',
      width: 3/4,
      m: 'auto'
}} />) }

const MyLayout = (props) => (
  <>
    <Layout {...props}>
      <Header />
      {props.children}
    </Layout>
  </>
)

export default MyLayout
