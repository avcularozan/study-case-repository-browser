import Header from '../components/Header'

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <Header />
      <div className="app-body">{children}</div>
    </div>
  )
}

export default Layout
