import React from "react"
import { PropType } from "./Types";
import { BaseModel } from "./BaseModel";
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
// import { CreditService } from "services/CreditService";
import { formExtractor } from "infrastructure/Helper/formExtracor";
import { MainService } from "services/MainService";
import { Urls } from "infrastructure/Helper/urls";



export class CreditModel {

    static get Title() {
        return "ثبت نام";
    }

    static get Icon() {
        return <OpenInNewIcon />;
    }

    static get properties() {

        return new Promise((resolve) => resolve([

            { Name: "UserId", Type: PropType.Text, DisplayName: "نام کاربری", Required: true },

            { Name: "Amount", Type: PropType.Text, DisplayName: "مبلغ(تومان)", Required: true },
            { Name: "Description", Type: PropType.TextArea, DisplayName: "توضیحات", Required: true },


        ]))
    }

   
    static get NewProperties() {

        return MainService.Get(Urls.User.GetAll).then(response => {
            const dtSource = response.map(u=> ({text:u.Username,value : u.Id}));
            console.log('dtSource: ', dtSource);


            return [
                { Name: "UserId", Type: PropType.Select, DataSource: dtSource, DisplayName: "نام کاربری", Required: true , autocompelete: 'off' },

                { Name: "Amount", Type: PropType.Text, DisplayName: "مبلغ(تومان)", Required: true, autocompelete: 'off' },
                { Name: "AmountBySms", Type: PropType.Text, DisplayName: "تعداد پیامک", Required: true , autocompelete: 'off' },
                { Name: "Description", Type: PropType.TextArea, DisplayName: "توضیحات", Required: true },


            ]

        })
        return new Promise((resolve) => resolve([




        ]))
    }
    static get EditProperties() {

        return MainService.Get(Urls.User.GetAll).then(response => {
            const dtSource = response.map(u=> ({text:u.UserName,value : u.Id}));
            console.log('dtSource: ', dtSource);


            return [
                { Name: "UserId", Type: PropType.Select, DataSource: dtSource, DisplayName: "نام کاربری", Required: true },


                { Name: "Amount", Type: PropType.Text, DisplayName: "مبلغ(تومان)", Required: true },
                { Name: "Description", Type: PropType.TextArea, DisplayName: "توضیحات", Required: true },


            ]

        })

    }
    static list() {
        return MainService.Get(Urls.Credit.GetAll).then((response) => {
            console.log("reponse from get all");
            console.log(response);
            return response;
        });
    }


    static handleSubmit(event) {
        event.preventDefault();
        // let { from } = this.props.location.state || { from: { pathname: "/" } };

        var postdata = formExtractor(event.target);
        return MainService.New("/api/credit/AddCredit", postdata);
        //     if (postdata.CreditName === "ali" && postdata.passWord === '123') {
        //         console.log("ok");
        //          CreditService.singin({Name:"admin",isAuthenticated :true});
        //          return Promise.resolve({ redirect: undefined, message: "عملیات  با موفقیت انجام شد" });
        //     // return CreditService.New(postdata)
        //     //     .then((response) => {
        //     //         console.log("response");
        //     //         console.log(response);

        //     //         // CreditService.singin(response);
        //     //         return Promise.resolve({ redirect: "/", message: "عملیات  با موفقیت انجام شد" });
        //     //     }, () => Promise.reject("ok"))


        //     return Promise.resolve({ redirect: "/border", message: "عملیات  با موفقیت انجام شد" });

        //     return Promise.resolve({ message: 'admin loged in !', redirect: "/" })

        // }


        return Promise.resolve({ redirect: "/border", message: "عملیات  با موفقیت انجام نشد" });

        // return Promise.reject("error")

    }
}
