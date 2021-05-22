import {
    BrowserRouter,
    Route
} from 'react-router-dom'
import { ChatPage } from '../pages/chatPage'
import { Home } from '../pages/Home'
import { SingIn } from '../pages/SingIn/SingIn'
import { SingUp } from '../pages/SingUp/SingUp'

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/sing-in" exact component={SingIn} />
            <Route path="/sing-up" exact component={SingUp} />
            <Route path="/chat" exact component={ChatPage} />
        </BrowserRouter>
    )
}

export { Routes}