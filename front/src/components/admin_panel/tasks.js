// in tasks.js
import * as React from "react";
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput } from 'react-admin';
import BookIcon from '@material-ui/icons/Book';
export const PostIcon = BookIcon;

export const PostList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" /> // TODO: автоинкрементирование
            <TextField source="Название" />
            <DateField source="Условие" />
            <TextField source="Исходная информация" /> // ToDo: Переписать на английский
            <TextField source="Выходная информация" />
            <EditButton basePath="/tasks" />
        </Datagrid>
    </List>
);

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="Название" />
            <TextInput multiline source="Условие"/>
            <TextInput source="Исходная информация" />
            <TextField source="Выходная информация" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = (props) => (
    <Create title="Создать задание" {...props}>
        <SimpleForm>
            <TextInput source="Название" />
            <TextInput multiline source="Условие"/>
            <TextInput source="Исходная информация" />
            <TextField source="Выходная информация" />
        </SimpleForm>
    </Create>
);