
import React, { useEffect, useState } from 'react';
import { useConnect } from './node_modules/dotnetify';
import DataTable from './node_modules/components/DataGrid/DataTable';
import { UserModel } from './node_modules/models/UserModel';
import { CustomApiAdaptor } from './node_modules/infrastructure/DataAdaptor/CustomDataAdaptor';
import { DataManager, RemoteSaveAdaptor, UrlAdaptor } from '@syncfusion/ej2-data';
import { authentication } from './node_modules/services/UserService';
import { ContextMenu } from '@syncfusion/ej2-react-grids';
import { useHistory ,Switch } from 'react-router-dom'
import SmsList from './node_modules/views/User/SmsList';
import { PrivateRoute } from './node_modules/infrastructure/privateRout';
export default function DashboardUserList() {



    const dataSource = new DataManager({
        adaptor: new UrlAdaptor(),
        url: "/api/user/Get",
        headers: [{ ...authentication() }],


    })
    console.log("dashboard userlist executed");
    var history = useHistory();
    const contextMenuClick = (args) => {
        
        if (args.item.id === 'messages') {
            var username = args.rowInfo.rowData.Username;
            var userId = args.rowInfo.rowData.Id;
            
            history.push(`/user/${username}/smslist`, { userid: userId })
        }
        if (args.item.id === 'transactions') {
            var username = args.rowInfo.rowData.Username;
            var userId = args.rowInfo.rowData.Id;
            
            history.push(`/user/${username}/transactions`, { userid: userId })
        }

    }
    const menuItems = [{ text: 'لیست پیامک ها', id: 'messages' } ,{ text: 'لیست تراکنش ها', id: 'transactions' }];
    return (
        <React.Fragment>


            <DataTable
                edit
                services={[ContextMenu]}
                delete
                gridConfig={{ contextMenuItems: menuItems, contextMenuClick: contextMenuClick }}
                columns={UserModel.ListProperties}
                data={dataSource}
            />
        </React.Fragment>
    )


}