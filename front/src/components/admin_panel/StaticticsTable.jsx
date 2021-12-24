import DataGrid, {Column, Editing, FilterRow, Form, Lookup, Paging} from "devextreme-react/data-grid";
import {Item} from "devextreme-react/form";
import { useState } from "react";

function StatisticsTable() {

    let data = [
        {
            id:1,
            nameContest:"Test1",
            date:"19.12.2021",
            length:10,
            members: 25,
            winner:"Петров Д. Д."
        },
        {
            id:2,
            nameContest:"Test2",
            date:"25.09.2021",
            length:5,
            members: 100,
            winner:"Смирнов Д. Д."
        },{
            id:3,
            nameContest:"Test3",
            date:"06.03.2020",
            length:15,
            members: 10,
            winner:"Алексеев Д. Д."
        },

    ];
    
    return (
                <DataGrid
                    id={'gridContainer'}
                    dataSource={data}
                    keyExpr={'id'}
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
                    {/* <Editing
                        mode={'form'}
                        editRowKey={false}
                        allowUpdating={false}
                        allowDeleting={false}
                        allowAdding={false}
                        useIcons={true}>
                        <Form>
                            <Item dataField="FIO"/>
                        </Form>
                    </Editing>  */}

                    <Column dataField={'id'} caption={'id'} width={0} visible={false}/>
                    <Column dataField={'nameContest'} caption={'Название соревнования'} />
                    <Column dataField={'date'} caption={'Дата проведения'} />
                    <Column dataField={'length'} caption={'Длительность (часы)'} />
                    <Column dataField={'members'} caption={'Количество участников'} />
                    <Column dataField={'winner'} caption={'Выигравший'}/>
                </DataGrid>
    );
};

export default StatisticsTable;