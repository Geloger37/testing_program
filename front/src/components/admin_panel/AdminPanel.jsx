import React, { Component } from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Content from './components/Content';

import css from './AdminPanel.module.css';

function AdminPanel() {
    return (
      <div>
        <Header props={css}/>
        <SideBar />
        <Content />
      </div>
    );
}

export default AdminPanel;
