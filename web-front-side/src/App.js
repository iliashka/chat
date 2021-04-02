import React from 'react'
import Container from '@material-ui/core/Container';
import Header from './components/Header/Header';
import { Route } from 'react-router-dom';
import RegisterPage from './components/Register/RegisterPage';
import SingIn from './components/SingIn/SingIn';

function App() {
  return (
    <div className="App">
      <Container maxwidth='md'>
        <Header/>
        <Route path='/Register' render={() => <RegisterPage/>}/>
        <Route path='/SingIn' render={() => <SingIn/>}/>
      </Container>
    </div>
  );
}

export default App;
