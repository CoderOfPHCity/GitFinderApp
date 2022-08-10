import React from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from './Components/Layouts/Navbar';
import About from './Components/About';
import Home from './Components/Pages/Home'
import User from './Components/Pages/User';
import Notfound from './Components/Pages/Notfound'
import {Gitprovider} from './Components/Context/Usercontext'
import {Alertsprovider} from './Components/Context/Alerts/Alerts'
import Alertuser from './Components/Layouts/Alertsuser';
import Footer from './Components/Layouts/Footer/Footer';


function App() {
  return (   
    
  <Gitprovider> 
    <Alertsprovider>
  <Router>
      < div className='flex flex-col justify-between h-screen'>
        <Navbar />
        
      
        <main className='container mx-auto px-3 pb-12'>

            <Alertuser />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/User/:login' element={<User />} />
            <Route path='/notfound' element={<Notfound />} />
            <Route path='/*' element={<Notfound />} />
          
          </Routes>
        </main>
        <Footer />
      </div>
  </Router>
  </Alertsprovider>  
 </Gitprovider>
  );
  
}

export default App;
   