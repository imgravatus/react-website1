
import './App.css';

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Content } from './components/Content'
import Logo from './hamburger-solid.png'

const Nav = [
  { "link": "/", "name": "Home" },
  { "link": "/about", "name": "About" },
  { "link": "/contact", "name": "Contact" }
]

function App() {
  return (
    <div className="App">
      <Header title="React Website" logo={Logo} navigation={Nav} />
      <Content />
      <Footer />
    </div>
  )
}

export default App;
