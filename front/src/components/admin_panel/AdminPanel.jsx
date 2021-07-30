import React, { Component } from 'react';

import css from './AdminPanel.module.css';

import { Admin, Resource } from 'react-admin';
import { PostList, PostEdit, PostCreate, PostIcon } from './posts';
import restProvider from 'ra-data-simple-rest';

function AdminPanel() {
    return (
        <Admin dataProvider={restProvider('http://localhost:3000')}>
            <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
        </Admin>
    );
}

export default AdminPanel;
