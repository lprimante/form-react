import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Cadastro from './paginas/Cadastro'
import Home from './paginas/Home'
import Navbar from './componentes/nav/Nav'

function App(props) {
    return (
        <Switch>
            <div>
                <Navbar />
                <Route exact path="/" component={Home} />
                <Route path='/cadastro' component={Cadastro}/>
            </div> 
        </Switch>
    )
}

export default App
        
    


