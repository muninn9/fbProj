import React from 'react'
import {mount} from 'react-mounter'
import {MainLayout} from './../imports/ui/layouts/MainLayout.jsx'
import AppContainer from './../imports/ui/containers/AppContainer.jsx'
import Login from './../imports/ui/components/Login.jsx'


FlowRouter.route('/', {
    action() {
        mount(MainLayout, {
            content: (<AppContainer />)
        })
    }
});

FlowRouter.route('/login', {
    action() {
        mount(MainLayout, {
            content: (<Login />)
        })
    }
});