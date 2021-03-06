
import React, { useEffect, useState } from 'react';
import { useConnect } from 'dotnetify';
import DataTable from 'components/DataGrid/DataTable';
import { UserModel } from 'models/UserModel';
import { CustomApiAdaptor } from 'infrastructure/DataAdaptor/CustomDataAdaptor';
import { DataManager, RemoteSaveAdaptor, UrlAdaptor } from '@syncfusion/ej2-data';
import { authentication } from 'services/UserService';
import { ContextMenu } from '@syncfusion/ej2-react-grids';
import { useHistory ,Switch } from 'react-router-dom'
import SmsList from 'views/User/SmsList';
import { PrivateRoute } from 'infrastructure/privateRout';
export default function DashboardUserList() {



    const dataSource = new DataManager({
        adaptor: new UrlAdaptor(),
        url: "/api/user/Get",
        headers: [{ ...authentication() }],


    })
    
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