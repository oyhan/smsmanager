import React from 'react'
import { BugReport, Person, List, Add } from "@material-ui/icons";
import UserNew from "./UserNew";
import CustomTabs from "views/Credit/node_modules/components/CustomTabs/CustomTabs";
import UserList from './UserList';

import { Router, Route, Switch, Redirect, Link } from "react-router-dom";
import ConsoleLogs from 'views/Credit/node_modules/views/ConsoleLogs/ConsoleLogs';
import UserEdit from './UserEdit';



export default function UserPage(props) {
  console.log('UserPage props: ', props);


  return (

    <Switch>
      {/* <Route path={`${props.match.path}/clients/:customerId`} component={UserClietns} /> */}


      <Route path={`${props.match.path}/User/edit/:UserId`} component={UserEdit} />

      <CustomTabs
        title="Users"
        headerColor="primary"
        tabs={[
          {
            tabName: "List",
            tabIcon: List,
            tabContent: (
              <UserList {...props} />

            )
          },
          {
            tabName: "New",
            tabIcon: Add,
            tabContent: (
              <UserNew />
            )
          }

        ]}
      />
    </Switch>


  )


}