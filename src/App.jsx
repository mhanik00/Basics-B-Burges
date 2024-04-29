
import Bestsell from './components/Bestsell'
import Foodlist from './components/Foodlist'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div>
     <Navbar/>
     <Header/>
     <Foodlist/>
     <Bestsell/>
     <Footer/>
    </div>
  )
}
