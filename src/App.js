import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from './components/layout/About';
import Contact from './components/layout/Contact';
import Footer from "./components/layout/Footer";
import Home from './components/layout/Home';
import Navbar from "./components/layout/Navbar";
import Work from './components/layout/Work';

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">  
        <Navbar />
          < main className="container mx-auto px-3 pb-12">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/work' element={<Work />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              {/* <Route path='/notfound' element={<NotFound />} /> */}
              {/* <Route path='/*' element={<NotFound />} /> */}
            </Routes>
          </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
