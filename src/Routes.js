import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import Main from './components/layout/main/Main'
import history from './history'
import About from './views/about/About'
import Contact from './views/contact/Contact'


import Home from './views/Home'
import HouseDetail from './views/Houses/HouseDetail'
import HouseList from './views/Houses/HouseList'

const Routes = () => {
    return (
        <>
            <Router history={history}>
                <Main>
                    <Switch>
                        <Route path="/about" exact component={About}/>
                        <Route path="/contact" exact component={Contact}/>
                        <Route path="/property" exact component={HouseList}/>
                        <Route path="/property/:id" exact component={HouseDetail}/>
                        <Route path="/" exact component={Home} />
                    </Switch>
                </Main>
            </Router>
        </>
    )
}

export default Routes
