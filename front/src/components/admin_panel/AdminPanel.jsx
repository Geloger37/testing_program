import React, { Component } from 'react';

import css from './AdminPanel.module.css';

import { Admin, Resource } from 'react-admin';
import { PostList, PostEdit, PostCreate, PostIcon } from './tasks';
import restProvider from 'ra-data-simple-rest';
import {ParticipantsCreate, ParticipantsEdit, ParticipantsIcon, ParticipantsList} from "./participants";

function AdminPanel() {
    return (
        <Admin dataProvider={restProvider('http://localhost:3000')}>
            <Resource name="tasks" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
            <Resource name="participants" list={ParticipantsList} edit={ParticipantsEdit} create={ParticipantsCreate} icon={ParticipantsIcon} />
        </Admin>
    );
}

export default AdminPanel;
