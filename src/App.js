import Header from './components/header/Header';
import React, { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './screens/homeScreen/HomeScreen'
import { Container } from 'react-bootstrap';
import './_app.scss'
import LoginScreen from './screens/loginScreen/LoginScreen';


import { BrowserRouter as Router } from 'react-router-dom'
import { Switch,Route, Redirect } from 'react-router'


const Layout = ({ children }) => {

  const [sidebar, toggleSidebar] = useState(false);
  const handleToggleSidebar = () => toggleSidebar(value => !value)
  return (
    <>
      <div className="App">
        <Header handleToggleSidebar={handleToggleSidebar} />

        <div className="app__container">
          <Sidebar
            sidebar={sidebar}
            toggleSidebar={toggleSidebar}
          />

          <Container fluid className="app__main ">
            {children}
          </Container>
        </div>
      </div>
    </>
  )
}

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Layout >
              <HomeScreen />
            </Layout>
          </Route>


          <Route exact path='/auth'>
            <LoginScreen />
          </Route>


          <Route exact path='/search'>
            <Layout >
              <h1>search page</h1>
            </Layout>
          </Route>


          <Route>
            <Redirect to="/"/>
          </Route>
        </Switch>

      </Router>
    </>
  );
}

export default App;
