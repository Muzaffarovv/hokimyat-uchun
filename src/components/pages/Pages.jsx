import React from 'react'
import Header from '../common/header/Header'
import { BrowserRouter as Router, Switch,} from 'react-router-dom'

const Pages = () => {
    return (
        <> 
        <Router>
        <Header />
        <Switch>
            {/*<Route path='/about'>
                <About />
                </Route>*/}
        </Switch>
    </Router>
        </>
    ) 
}

export default Pages