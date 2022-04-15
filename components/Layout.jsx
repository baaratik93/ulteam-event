
import Header from './CmpHeader'
import Footer from './CmpFooter'
function Layout(props) {
	return <div>
				<Header></Header>
				{props.children}
				<Footer></Footer>
			</div>
}

export default Layout