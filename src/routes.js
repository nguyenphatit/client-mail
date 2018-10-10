import React from 'react';
import Dashboard from './containers/dashboard/DashboardContainer';
import ComposeContainer from './containers/compose/ComposeContainer';
import InboxContainer from './containers/inbox/InboxContainer';
import DraftsContainer from './containers/drafts/DraftsContainer';
import TrashContainer from './containers/trash/Trash';
import SpamContainer from './containers/spam/SpamContainer';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Dashboard><InboxContainer /></Dashboard>
    }, {
        path: '/compose',
        exact: true,
        main: () => <Dashboard><ComposeContainer /></Dashboard>
    }, {
        path: '/drafts',
        exact: true,
        main: () => <Dashboard><DraftsContainer /></Dashboard>
    }, {
        path: '/trash',
        exact: true,
        main: () => <Dashboard><TrashContainer /></Dashboard>
    }, {
        path: '/spam',
        exact: true,
        main: () => <Dashboard><SpamContainer /></Dashboard>
    },
    //  {
    //     path: '/signup',
    //     exact: false,
    //     main: () => <SignupContainer />
    // }, {
    //     path: '/login',
    //     exact: false,
    //     main: () => <LoginContainer />
    // }, {
    //     path: '/simple',
    //     exact: false,
    //     main: () => <SimpleFormExample />
    // }, {
    //     path: '',
    //     exact: false,
    //     main: () => <NotFound />
    // }
]

export default routes;