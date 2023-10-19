import { Routes, Route } from 'react-router-dom';
import { Archive, Home, Login, NotFound, Purse, Services } from './pages';
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
        </Route>
      </Routes>
      
  );
}

export default App;
