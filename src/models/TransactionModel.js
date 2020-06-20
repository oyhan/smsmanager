import React from "react"
import { PropType } from "./Types";
import { BaseModel } from "./BaseModel";
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { UserService } from "services/UserService";
import { formExtractor } from "infrastructure/Helper/formExtracor";
import { MainService } from "services/MainService";
import { Urls } from "infrastructure/Helper/urls";



export class TransactionModel {

    static get Title() {
        return "ثبت نام";
    }

    static get Icon() {
        return <OpenInNewIcon />;
    }

    static get properties() {

        return new Promise((resolve) => resolve([

            { Name: "Amount", Type: PropType.Text, DisplayName: "مبلغ", Required: true },
            { Name: "SmsBallance", Type: PropType.Text, DisplayName: "مجودی پیامک", Required: true },
            { Name: "Description", Type: PropType.Text, DisplayName: "توضیحات", Required: true },

            { Name: "CurrentBallance", Type: PropType.Text, DisplayName: "موجودی", Required: true },
            { Name: "IsSms", Type: PropType.CheckBox, DisplayName: "ارسال پیامک", Required: true },
           


        ]))
    }

    static get ListProperties() {

        return [

            
         
            { Name: "Amount", Type: PropType.Text, DisplayName: "مبلغ", Required: true },
            { Name: "SmsBallance", Type: PropType.Text, DisplayName: "مجودی پیامک", Required: true },
            { Name: "Description", Type: PropType.Text, DisplayName: "توضیحات", Required: true },

            { Name: "CurrentBallance", Type: PropType.Text, DisplayName: "موجودی", Required: true },
            { Name: "IsSms", Type: PropType.CheckBox, DisplayName: "ارسال پیامک", Required: true },
        ]
    }


    static get NewProperties() {

        // return MainService.Get(Urls.Transaction.GetRoles).then(response => {
        //     const dtSource = response.map(item =>  ({ text: item.Name, value: item.Name }));



        // })
        return new Promise((resolve) => resolve([


            { Name: "Amount", Type: PropType.Text, DisplayName: "مبلغ", Required: true },
            { Name: "SmsBallance", Type: PropType.Text, DisplayName: "مجودی پیامک", Required: true },
            { Name: "Description", Type: PropType.Text, DisplayName: "توضیحات", Required: true },

            { Name: "CurrentBallance", Type: PropType.Text, DisplayName: "موجودی", Required: true },
            { Name: "IsSms", Type: PropType.CheckBox, DisplayName: "ارسال پیامک", Required: true },
        ]))
    }
    static get EditProperties() {

        return new Promise((resolve) => resolve([


            { Name: "Transactionname", Type: PropType.Text, DisplayName: "نام کاربری", Required: true },

            { Name: "Password", Type: PropType.Password, DisplayName: "کلمه عبور", Required: true },
            { Name: "InitialBallance", Type: PropType.Text, DisplayName: "اعتبار اولیه", Required: true },
            { Name: "IsActive", Type: PropType.CheckBox, DisplayName: "فعال", Required: true },
        ]))

    }
    static list() {
        return MainService.Get(Urls.Transaction.GetAll).then((response) => {
            
            
            return response;
        });
    }


    static handleSubmit(event) {
        event.preventDefault();
        // let { from } = this.props.location.state || { from: { pathname: "/" } };

        var postdata = formExtractor(event.target);
        return MainService.New("/api/account/RegisterTransaction", postdata);
        //     if (postdata.TransactionName === "ali" && postdata.passWord === '123') {
        //         
        //          TransactionService.singin({Name:"admin",isAuthenticated :true});
        //          return Promise.resolve({ redirect: undefined, message: "عملیات  با موفقیت انجام شد" });
        //     // return TransactionService.New(postdata)
        //     //     .then((response) => {
        //     //         
        //     //         

        //     //         // TransactionService.singin(response);
        //     //         return Promise.resolve({ redirect: "/", message: "عملیات  با موفقیت انجام شد" });
        //     //     }, () => Promise.reject("ok"))


        //     return Promise.resolve({ redirect: "/border", message: "عملیات  با موفقیت انجام شد" });

        //     return Promise.resolve({ message: 'admin loged in !', redirect: "/" })

        // }


        return Promise.resolve({ redirect: "/border", message: "عملیات  با موفقیت انجام نشد" });

        // return Promise.reject("error")

    }
}
