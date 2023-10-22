import { Routes, Route } from 'react-router-dom';
import { About, AddCard, Archive, Cards, Contacts, Home, Login, NotFound, Payments, Purse, Services, Transfers } from './pages';
import Layout from './components/Layout';
import RequireLogin from './hoc/RequireLogin';

function App() {
  return (
     <Routes>
        <Route path="/" element={ <Layout/> }>
            <Route index="/" element={ <Home />}/>
            <Route path="purse" element={ 
              <RequireLogin>
                <Purse />
              </RequireLogin>
            }/>
            <Route path="services" element={ <Services />}/>
            <Route path="archive" element={ <Archive />}/>
            <Route path="login" element={ <Login />}/>
            <Route path="*" element={ <NotFound />}/>
            <Route path="transfers" element={ <Transfers />}/>
            <Route path="payments" element={ <Payments />}/>
            <Route path="cards" element={ 
              <RequireLogin>
                <Cards />
                </RequireLogin>
              }/>
            <Route path="about" element={ <About />}/>
            <Route path="contacts" element={ <Contacts />}/>
            <Route path="addcard" element={ <AddCard />}/>
        </Route>
      </Routes>
      
  );
}

export default App;
