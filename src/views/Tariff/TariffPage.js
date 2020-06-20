import React from 'react'
import { BugReport, Person, List, Add } from "@material-ui/icons";
import TariffNew from "./TariffNew";
import CustomTabs from "components/CustomTabs/CustomTabs";
import TariffList from './TariffList';

import { Router, Route, Switch, Redirect, Link } from "react-router-dom";



export default function TariffPage() {

  // const { state } = useConnect("TariffViewModel", {})


  return (

    <Switch>
      {/* <Route path={`${props.match.path}/clients/:customerId`} component={TariffClietns} /> */}


      {/* <Route path={`${props.match.path}/Tariff/edit/:TariffId`} component={TariffEdit} /> */}

      <CustomTabs
        title="تعرفه پیامک"
        headerColor="primary"
        tabs={[

          {
            tabName: "List",
            tabIcon: List,
            tabContent: (
              <TariffList
              //  Tariffs={state.Tariffs}  
              />

            )
          },
          {
            tabName: "New",
            tabIcon: Add,
            tabContent: (
              <TariffNew />
            )
          }

        ]}
      />
    </Switch>


  )


}