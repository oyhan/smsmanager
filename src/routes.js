/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons

import { Note, Person, Money } from "@material-ui/icons";
import Logs from "views/ConsoleLogs/Logs";
import UserPage from "views/User/UserPage";
import CreditNew from "views/Credit/CreditNew";
import Dashboard from "views/Dashboard/Dashboard";

const dashboardRoutes = [
  
 
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "داشبورد",
    icon:Note ,
    component: Dashboard,
    layout: "/admin"
  },
  // {
  //   path: "/users",
  //   name: "Users",
  //   rtlName: "کاربران",
  //   icon:Person ,
  //   component: UserPage,
  //   layout: "/admin"
  // }, 
  // {
  //   path: "/credit",
  //   name: "Credit",
  //   rtlName: "شارژ کاربر",
  //   icon:Money ,
  //   component: CreditNew,
  //   layout: "/admin"
  // },
  // {
  //   path: "/rtl-page",
  //   name: "RTL Support",
  //   rtlName: "پشتیبانی از راست به چپ",
  //   icon: Language,
  //   component: RTLPage,
  //   layout: "/rtl"
  // },
  // {
  //   path: "/upgrade-to-pro",
  //   name: "Upgrade To PRO",
  //   rtlName: "التطور للاحترافية",
  //   icon: Unarchive,
  //   component: UpgradeToPro,
  //   layout: "/admin"
  // }
];

export default dashboardRoutes;
