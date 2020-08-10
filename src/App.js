import React from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
  Link,
} from 'react-router-dom';
import Header from './Header.js';
import SearchPage from './SearchPage/SearchPage.js';
import DetailPage from './DetailPage/DetailPage.js'

class App extends React.Component {
  render() { 
    return (
      <>
      <div>
            <Router>
                <header>
                  <Header />
                  <nav>
                    <Link className="navLinks" to="/?search=&searchBy=pokemon&page=1">Home</Link>
                    <Link className="navLinks" to="/detail">Detail</Link>
                  </nav>
                </header>
                <Switch>
                    <Route 
                        path="/" 
                        exact
                        render={(routerProps) => <SearchPage {...routerProps} />} 
                    />
                    <Route 
                        path="/detail/:myPokeId" 
                        exact
                        render={(routerProps) => <DetailPage {...routerProps} />} 
                    />
                </Switch>
            </Router>
        </div>
        </>
    )
}
}
 
export default App;