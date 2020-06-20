import React from "react"
import { PropType } from "./Types";
import { BaseModel } from "./BaseModel";
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { UserService } from "services/UserService";
import { formExtractor } from "infrastructure/Helper/formExtracor";
import { MainService } from "services/MainService";
import { Urls } from "infrastructure/Helper/urls";



export class SmsModel {

    static get Title() {
        return "ثبت نام";
    }

    static get Icon() {
        return <OpenInNewIcon />;
    }

    static get properties() {

        return new Promise((resolve) => resolve([

            { Name: "DeliveryStatus", Type: PropType.Text, DisplayName: "وضعیت تحویل", Required: true },
            { Name: "Content", Type: PropType.Text, DisplayName: "محتوا", Required: true },
            { Name: "IsSent", Type: PropType.Text, DisplayName: "ارسال شده", Required: true },

            { Name: "Recipient", Type: PropType.Text, DisplayName: "گیرنده", Required: true },
            { Name: "MessageId", Type: PropType.Text, DisplayName: "شناسه", Required: true },
            { Name: "SmsCount", Type: PropType.Text, DisplayName: "تعداد پیامک", Required: true },
            { Name: "Description", Type: PropType.Text, DisplayName: "توضیحات", Required: true },


        ]))
    }

    static get ListProperties() {

        return [

            
            { Name: "DeliveryStatus", Type: PropType.Text, DisplayName: "وضعیت تحویل", Required: true },
            { Name: "Content", Type: PropType.Text, DisplayName: "محتوا", Required: true },
            { Name: "IsSent", Type: PropType.CheckBox, DisplayName: "ارسال شده", Required: true },

            { Name: "Recipient", Type: PropType.Text, DisplayName: "گیرنده", Required: true },
            { Name: "MessageId", Type: PropType.Text, DisplayName: "شناسه", Required: true },
            { Name: "SmsCount", Type: PropType.Text, DisplayName: "تعداد پیامک", Required: true },
            { Name: "Description", Type: PropType.Text, DisplayName: "توضیحات", Required: true },
        ]
    }


    static get NewProperties() {

        // return MainService.Get(Urls.Sms.GetRoles).then(response => {
        //     const dtSource = response.map(item =>  ({ text: item.Name, value: item.Name }));



        // })
        return new Promise((resolve) => resolve([


            { Name: "Smsname", Type: PropType.Text, DisplayName: "نام کاربری", Required: true },

            { Name: "Password", Type: PropType.Password, DisplayName: "کلمه عبور", Required: true },
            { Name: "InitialBallance", Type: PropType.Text, DisplayName: "اعتبار اولیه", Required: true },
            { Name: "IsActive", Type: PropType.CheckBox, DisplayName: "فعال", Required: true },
        ]))
    }
    static get EditProperties() {

        return new Promise((resolve) => resolve([


            { Name: "Smsname", Type: PropType.Text, DisplayName: "نام کاربری", Required: true },

            { Name: "Password", Type: PropType.Password, DisplayName: "کلمه عبور", Required: true },
            { Name: "InitialBallance", Type: PropType.Text, DisplayName: "اعتبار اولیه", Required: true },
            { Name: "IsActive", Type: PropType.CheckBox, DisplayName: "فعال", Required: true },
        ]))

    }
    static list() {
        return MainService.Get(Urls.Sms.GetAll).then((response) => {
            
            
            return response;
        });
    }


    static handleSubmit(event) {
        event.preventDefault();
        // let { from } = this.props.location.state || { from: { pathname: "/" } };

        var postdata = formExtractor(event.target);
        return MainService.New("/api/account/RegisterSms", postdata);
        //     if (postdata.SmsName === "ali" && postdata.passWord === '123') {
        //         
        //          SmsService.singin({Name:"admin",isAuthenticated :true});
        //          return Promise.resolve({ redirect: undefined, message: "عملیات  با موفقیت انجام شد" });
        //     // return SmsService.New(postdata)
        //     //     .then((response) => {
        //     //         
        //     //         

        //     //         // SmsService.singin(response);
        //     //         return Promise.resolve({ redirect: "/", message: "عملیات  با موفقیت انجام شد" });
        //     //     }, () => Promise.reject("ok"))


        //     return Promise.resolve({ redirect: "/border", message: "عملیات  با موفقیت انجام شد" });

        //     return Promise.resolve({ message: 'admin loged in !', redirect: "/" })

        // }


        return Promise.resolve({ redirect: "/border", message: "عملیات  با موفقیت انجام نشد" });

        // return Promise.reject("error")

    }
}
