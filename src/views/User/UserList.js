import React, { Fragment, useState } from 'react'
import { UserModel } from 'models/UserModel';
import CustomGrid from 'components/DataGrid/Grid';
import { CommandColumn } from '@syncfusion/ej2-react-grids';
import { Redirect } from "react-router-dom";

import Button from "components/CustomButtons/Button.js";
// import UserPage from '../UserPage';
import { createBrowserHistory } from "history";
import UserEdit from './UserEdit';






export default function UserList(props) {
   



    const prop= props;
    const openEditPage = (args) => {
        const id = args.rowData.Id;
        props.match.params.data = args.rowData;
       
        props.history.push(`${props.match.path}/User/edit/${id}`,args.rowData);
    }
    return (
        // customerId && <Redirect to={`${props.match.path}/clients/${customerId}`} /> ||
        <Fragment>

            <CustomGrid
                edit
                delete
                gridService={[CommandColumn]}
                // addCol={
                //     ([
                //         <ColumnDirective width={130} template={showClientBtn}></ColumnDirective>,

                //         // <ColumnDirective width={130} commands={commands} ></ColumnDirective>


                //     ])
                // }
                // dialogTemplate ={(props)=><UserEdit  {...props}/>}

                onDoubleClick={openEditPage}
                // dialogEdit
              
                model={UserModel} />
        </Fragment>


    )

}