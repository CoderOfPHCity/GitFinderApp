import React from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from './Components/Layouts/Navbar';
import About from './Components/About';
import Home from './Components/Pages/Home'
import Notfound from './Components/Pages/Notfound'


function App() {
  return (    
  <Router>
      < div className='flex flex-col justify-between h-screen'>
        <Navbar />
      
        <main className='container mx-auto px-3 pb-12'>


          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/notfound' element={<Notfound />} />
            <Route path='/*' element={<Notfound />} />
          
          </Routes>
        </main>
      </div>
  </Router>
 
  );
}

export default App;
   