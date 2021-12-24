import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import DataGrid, {Column, Editing, FilterRow, Form, Lookup, Paging} from "devextreme-react/data-grid";
import {Item} from "devextreme-react/form";
import { useState } from "react";
import DataSource from 'devextreme/data/data_source';
// import {data} from './membersdata.js';

function ContestsTable() {

    let data = [
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
    const [cnt, setCnt] = useState(1);
    
    return (
                <DataGrid
                    id={'gridContainer'}
                    dataSource={new DataSource(
                        {
                          loadMode: 'raw',
                          dataSource: data,
                          
                          load : function (loadOptions) {
                            return data
                          },
                          insert: function(values) {
                            // setData([data, {idContest:cnt+1, nameContest:values.nameContest}]);
                            data.concat([{idContest:cnt+1, nameContest:values.nameContest}]);
                            setCnt(cnt+1);
                          },
                          update: function(key, values) {
                            return data
                          },
                          remove: function(key) {
                          }
                        } ) }
                    keyExpr={'idContest'}
                    allowColumnReordering={true}
                    showBorders={true}
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
                    <Column dataField={'nameContest'} caption={'Имя соревнования'}/>
                </DataGrid>
    );
};

export default ContestsTable;