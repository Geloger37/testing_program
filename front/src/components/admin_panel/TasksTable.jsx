import DataGrid, {Column, Editing, FilterRow, Form, Lookup, Paging} from "devextreme-react/data-grid";
import {Item} from "devextreme-react/form";
import { useState } from "react";
// import {data} from './membersdata.js';

function TasksTable() {

    let data = [
        {
            idContest:1,
            nameTask:"Hello world!"
        },
        {
            idContest:2,
            nameTask:"А+Б"
        },
        {
            idContest:3,
            nameTask:"А*Б"
        },
        {
            idContest:4,
            nameTask:"А/Б"
        } 
    ];
    
    return (
                <DataGrid
                    id={'gridContainer'}
                    dataSource={data}
                    keyExpr={'idContest'}
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


                    <Column dataField={'idContest'} caption={'id'} width={0} visible={false}/>
                    <Column dataField={'nameTask'} caption={'Название задачи'}/>
                    
                </DataGrid>
    );
};

export default TasksTable;