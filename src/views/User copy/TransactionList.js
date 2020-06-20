
import React from 'react';
import { useConnect } from './node_modules/dotnetify';
import DataTable from './node_modules/components/DataGrid/DataTable';
import { TransactionModel } from './node_modules/models/TransactionModel';
import { CustomApiAdaptor } from './node_modules/infrastructure/DataAdaptor/CustomDataAdaptor';
import { DataManager, RemoteSaveAdaptor, UrlAdaptor } from '@syncfusion/ej2-data';
import { authentication } from './node_modules/services/UserService';
import {useHistory ,useParams, useLocation} from 'react-router-dom'

export default function TransactionList({ Transactions }) {

    let { Username } = useParams()
    var location = useLocation();
    
    

    const dataManager = new DataManager({
        adaptor: new UrlAdaptor(),
        url: `/api/user/ListTransactions/${location.state.userid}`,
        headers :[{...authentication()}],

        
    })

    return <DataTable
            edit
            delete
            columns={TransactionModel.ListProperties}
             data={dataManager}
            />


}   