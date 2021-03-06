import * as React from 'react'
import * as History from 'history'
import * as SocketIoClient from 'socket.io-client'

import 'react-toastify/dist/ReactToastify.min.css';
import CssBaseline from '@material-ui/core/CssBaseline'
import { Account, AccountContext, AccountCtxtComponent } from './models/Account'
import { SocketCtxtComponent } from './SocketContext'
import { resolve, history } from './router'

import TopicsPage from './questions/QuestionsPage'
import BonusPage from './pages/Bonus'
import ForumPage from './answers/AnswersPage'
import config from './config'

import "./App.scss"


class Footer extends React.Component {
    render() {
        return (
            <div></div>
        )
    }
}


interface AppState {
    account: AccountContext,
    component?: React.Component
}


class App extends React.Component {

    state   : AppState
    account : Account
    socket  : SocketIOClient.Socket

    constructor(props: any, context: any) {
        super(props, context)

        this.accountChanged = this.accountChanged.bind(this)
        this.renderLocation = this.renderLocation.bind(this)

        this.account = new Account()
        this.socket = SocketIoClient.connect(config.contentNodeUrl)

        this.state = {
            account: { model: Object.assign({}, this.account), svc: this.account },
        }
    }

    async accountChanged() {
        // Setup account state object w/ particular callbacks

        this.setState({ account: { model: Object.assign({}, this.account), svc: this.account } })
    }

    componentDidMount() {
        this.account.setCallback(this.accountChanged)

        history.listen(this.renderLocation)   // render subsequent URLs
        this.renderLocation(history.location, 'REPLACE')
    }

    renderComponent(component : any) {
        if (!component) {
            console.log("Error trying to set to null component")
            return
        }

        console.log(`Setting component to ${component.type.name}`)
        this.setState({ component })
        window.setTimeout(() => window.scrollTo(0, 0), 200)
    }

    async renderLocation(location : History.Location, action: History.Action) {
        const routes : object[] = this.commonRoutes

        if (this.account.isSignedIn()) {
            routes.concat( this.loggedInRoutes )
        } else {
            routes.concat( this.loggedOutRoutes )
        }

        try {
            const component = await resolve( routes, location)
            this.renderComponent(component)
        } catch (error) {
            const component = await resolve( routes, { ...location, error })
            this.renderComponent(component)
        }
    }


    loggedOutRoutes = [
    ];

    loggedInRoutes = [
    ];

    commonRoutes = [
        { path: '/', action: () => <TopicsPage /> },
        { path: '/topic/:address(.+)', action: (params) => <ForumPage { ...params }/> },
        { path: '/bonus', action: () => <BonusPage />}
    ];

    render() {
        return (
            <AccountCtxtComponent.Provider value={this.state.account}>
                <SocketCtxtComponent.Provider value={this.socket}>
                    <CssBaseline />
                    { this.state.component }
                    { this.props.children }
                    <Footer />
                    <div className="mobile-mask">Please use a Desktop computer to access this dApp.</div>
                </SocketCtxtComponent.Provider>
            </AccountCtxtComponent.Provider>
        )
    }
}

export default App
