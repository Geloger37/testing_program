import DataGrid, {Column, Editing, FilterRow, Form, Lookup, Paging} from "devextreme-react/data-grid";
import {Item} from "devextreme-react/form";
import { useState } from "react";
// import {data} from './membersdata.js';

function MembersTable() {

    let data = [
        {
            idMember:1,
            FIO:"Иванов И. И.",
            idContest:1,
            email:"ivanov@gmail.com"
        },
        {
            idMember:2,
            FIO:"Петров П. П.",
            idContest:3,
            email:"petrov@gmail.com"
        },
        {
            idMember:3,
            FIO:"Смирнов С. С.",
            idContest:1,
            email:"smirnov@gmail.com"
        } 
    ];
    
    let contests = [
        {
            idContest:1,
            nameContest:"Олимпиада"
        },
        {
            idContest:2,
            nameContest:"Соревнование"
        },
        {
            idContest:3,
            nameContest:"Тренировка"
        } 
    ];

    return (
                <DataGrid
                    id={'gridContainer'}
                    dataSource={data}
                    keyExpr={'idMember'}
                    allowColumnReordering={true}
                    showBorders={true}
                    // onEditingStart={this.onEditingStart}
                    // onInitNewRow={this.onInitNewRow}
                    // onRowInserting={this.onRowInserting}
                    // onRowInserted={this.onRowInserted}
                    // onRowUpdating={this.onRowUpdating}
                    // onRowUpdated={this.onRowUpdated}
                    // onRowRemoving={this.onRowRemoving}
                    // onRowRemoved={this.onRowRemoved}
                    >
                    
                    <FilterRow visible={true}/>
                    <Paging enabled={true}/>
                    <Editing
                        mode={'row'}
                        allowUpdating={true}
                        allowDeleting={true}
                        allowAdding={true}
                        useIcons={true}/>
 

                    <Column dataField={'idMember'} caption={'id'} width={0} visible={false}/>
                    <Column dataField={'FIO'} caption={'ФИО участника'}/>
                    <Column dataField={'idContest'} caption={'Соревнование'}>
                        <Lookup dataSource={contests} valueExpr={'idContest'} displayExpr={'nameContest'}/>
                    </Column>
                    <Column dataField={'email'} caption={'Логин'}/>
                </DataGrid>
    );
};

export default MembersTable;