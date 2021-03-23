
import './App.css';

import { Header } from './components/Header'
import { Footer } from './components/Footer'
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
      <Footer />
    </div>
  )
}

export default App;
