import React from 'react'
import { BugReport, Person, List, Add } from "@material-ui/icons";
import UserNew from "./UserNew";
import CustomTabs from "components/CustomTabs/CustomTabs";
import UserList from './UserList';

import { Router, Route, Switch, Redirect, Link } from "react-router-dom";
import ConsoleLogs from 'views/ConsoleLogs/ConsoleLogs';
import UserEdit from './UserEdit';
import DashboardUserList from './DashboardUserList';
import { useConnect } from 'dotnetify';



export default function UserPage() {
  
  // const { state } = useConnect("UserViewModel", {})


  return (

    <Switch>
      {/* <Route path={`${props.match.path}/clients/:customerId`} component={UserClietns} /> */}


      {/* <Route path={`${props.match.path}/User/edit/:UserId`} component={UserEdit} /> */}

      <CustomTabs
        title="Users"
        headerColor="primary"
        tabs={[
         
          {
            tabName: "List",
            tabIcon: List,
            tabContent: (
              <DashboardUserList
              //  users={state.Users}  
               />

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