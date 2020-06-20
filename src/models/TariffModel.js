import React from "react"
import { PropType } from "./Types";
import { BaseModel } from "./BaseModel";
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { UserService } from "services/UserService";
import { formExtractor } from "infrastructure/Helper/formExtracor";
import { MainService } from "services/MainService";
import { Urls } from "infrastructure/Helper/urls";



export class TariffModel {

    static get Title() {
        return "ثبت نام";
    }

    static get Icon() {
        return <OpenInNewIcon />;
    }

    static get properties() {

        return new Promise((resolve) => resolve([

            { Name: "Rate", Type: PropType.Text, DisplayName: "مبلغ", Required: true },
            { Name: "StartTime", Type: PropType.DateTime, DisplayName: "تاریخ اعمال", Required: true },
            


        ]))
    }

    static get ListProperties() {

        return [

            
          
            { Name: "Id", Type: PropType.Text, Required: true },
            { Name: "Rate", Type: PropType.Text, DisplayName: "مبلغ", Required: true },
            { Name: "StartTime", Type: PropType.DateTime, DisplayName: "تاریخ اعمال", Required: true },
            
        ]
    }


    static get NewProperties() {

        // return MainService.Get(Urls.Tariff.GetRoles).then(response => {
        //     const dtSource = response.map(item =>  ({ text: item.Name, value: item.Name }));



        // })
        return new Promise((resolve) => resolve([


           
            { Name: "Rate", Type: PropType.Text, DisplayName: "مبلغ", Required: true },
            { Name: "Day", Type: PropType.Text, DisplayName: " روز", Required: true },
            { Name: "Month", Type: PropType.Text, DisplayName: "ماه", Required: true },
            { Name: "Year", Type: PropType.Text, DisplayName: "سال", Required: true },
            
        ]))
    }
    static get EditProperties() {

        return new Promise((resolve) => resolve([


            { Name: "Rate", Type: PropType.Text, DisplayName: "مبلغ", Required: true },
            { Name: "Day", Type: PropType.Text, DisplayName: " روز", Required: true },
            { Name: "Month", Type: PropType.Text, DisplayName: "ماه", Required: true },
            { Name: "Year", Type: PropType.Text, DisplayName: "سال", Required: true },
        ]))

    }
    static list() {
        return MainService.Get(Urls.Tariff.GetAll).then((response) => {
            
            
            return response;
        });
    }


    static handleSubmit(event) {
        event.preventDefault();
      

        var postdata = formExtractor(event.target);
        return MainService.New("/api/tariff/new", postdata);
       


       

    }
}
