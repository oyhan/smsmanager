
import React from 'react';
import { useConnect } from 'dotnetify';
import DataTable from 'components/DataGrid/DataTable';
import { TariffModel } from 'models/TariffModel';
import { CustomApiAdaptor } from 'infrastructure/DataAdaptor/CustomDataAdaptor';
import { DataManager, RemoteSaveAdaptor, UrlAdaptor } from '@syncfusion/ej2-data';
import { authentication } from 'services/UserService';
import {useHistory ,useParams, useLocation} from 'react-router-dom'
import TariffEdit from './TariffEdit';

export default function TariffList() {

    
    

    const dataManager = new DataManager({
        adaptor: new UrlAdaptor(),
        url: `/api/tariff/list`,
        updateUrl  : "/api/tariff/new",
        headers :[{...authentication()}],

        
    })

    return <DataTable
            edit
             dialogTemplate ={(props)=><TariffEdit  {...props}/>}
            delete
            columns={TariffModel.ListProperties}
             data={dataManager}
            />


}