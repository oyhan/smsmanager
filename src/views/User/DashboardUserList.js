
import React from 'react';
import { useConnect } from 'dotnetify';
import DataTable from 'components/DataGrid/DataTable';
import { UserModel } from 'models/UserModel';
import { CustomApiAdaptor } from 'infrastructure/DataAdaptor/CustomDataAdaptor';
import { DataManager, RemoteSaveAdaptor, UrlAdaptor } from '@syncfusion/ej2-data';
import { authentication } from 'services/UserService';

export default function DashboardUserList({ users }) {

    const dataManager = new DataManager({
        adaptor: new UrlAdaptor(),
        url: "/api/user/Get",
        headers :[{...authentication()}],

        
    })

    return <DataTable
            edit
            delete
            columns={UserModel.ListProperties}
             data={dataManager}
            />


}