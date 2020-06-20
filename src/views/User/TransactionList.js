
import React from 'react';
import { useConnect } from 'dotnetify';
import DataTable from 'components/DataGrid/DataTable';
import { TransactionModel } from 'models/TransactionModel';
import { CustomApiAdaptor } from 'infrastructure/DataAdaptor/CustomDataAdaptor';
import { DataManager, RemoteSaveAdaptor, UrlAdaptor } from '@syncfusion/ej2-data';
import { authentication } from 'services/UserService';
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