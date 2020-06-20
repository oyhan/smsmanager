
import React from 'react';
import { useConnect } from './node_modules/dotnetify';
import DataTable from './node_modules/components/DataGrid/DataTable';
import { SmsModel } from './node_modules/models/SmsModel';
import { CustomApiAdaptor } from './node_modules/infrastructure/DataAdaptor/CustomDataAdaptor';
import { DataManager, RemoteSaveAdaptor, UrlAdaptor } from '@syncfusion/ej2-data';
import { authentication } from './node_modules/services/UserService';
import {useHistory ,useParams, useLocation} from 'react-router-dom'

export default function SmsList({ Smss }) {

    let { Username } = useParams()
    var location = useLocation();
    
    

    const dataManager = new DataManager({
        adaptor: new UrlAdaptor(),
        url: `/api/user/listsms/${location.state.userid}`,
        headers :[{...authentication()}],

        
    })

    return <DataTable
            edit
            delete
            columns={SmsModel.ListProperties}
             data={dataManager}
            />


}