import React from "react"
import { PropType } from "./Types";
import { BaseModel } from "./BaseModel";
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { UserService } from "services/UserService";
import { formExtractor } from "infrastructure/Helper/formExtracor";
import { MainService } from "services/MainService";
import { Urls } from "infrastructure/Helper/urls";



export class UserModel {

    static get Title() {
        return "ثبت نام";
    }

    static get Icon() {
        return <OpenInNewIcon />;
    }

    static get properties() {

        return new Promise((resolve) => resolve([

            { Name: "Username", Type: PropType.Text, DisplayName: "نام کاربری", Required: true },

            { Name: "Ballance", Type: PropType.Text, DisplayName: "اعتبار(تومان)", Required: true },
            { Name: "SmsBallance", Type: PropType.Text, DisplayName: "موجودی پیامک", Required: true },
            { Name: "IsActive", Type: PropType.Swith, DisplayName: "فعال", Required: true },


        ]))
    }

    static get ListProperties() {

        return [

            { Name: "Id", Type: PropType.Text, DisplayName: "Id", Required: true  },
            { Name: "Username", Type: PropType.Text, DisplayName: "نام کاربری", Required: true  },
            { Name: "SmsBallance", Type: PropType.Text, DisplayName: "موجودی پیامک", Required: true },

            { Name: "Ballance",Format : 'N', Type: PropType.Text, DisplayName: "اعتبار(تومان)", Required: true },
            { Name: "SentSms",Format : 'N', Type: PropType.Text, DisplayName: "ارسال شده", Required: true },
            { Name: "IsActive", Type: PropType.Swith, DisplayName: "فعال", Required: true },


        ]
    }


    static get NewProperties() {

        // return MainService.Get(Urls.User.GetRoles).then(response => {
        //     const dtSource = response.map(item =>  ({ text: item.Name, value: item.Name }));



        // })
        return new Promise((resolve) => resolve([


            { Name: "Username", Type: PropType.Text, DisplayName: "نام کاربری", Required: true },

            { Name: "Password", Type: PropType.Password, DisplayName: "کلمه عبور", Required: true },
            { Name: "InitialBallance", Type: PropType.Text, DisplayName: "اعتبار اولیه", Required: true },
            { Name: "IsActive", Type: PropType.CheckBox, DisplayName: "فعال", Required: true },
        ]))
    }
    static get EditProperties() {

        return new Promise((resolve) => resolve([


            { Name: "Username", Type: PropType.Text, DisplayName: "نام کاربری", Required: true },

            { Name: "Password", Type: PropType.Password, DisplayName: "کلمه عبور", Required: true },
            { Name: "InitialBallance", Type: PropType.Text, DisplayName: "اعتبار اولیه", Required: true },
            { Name: "IsActive", Type: PropType.CheckBox, DisplayName: "فعال", Required: true },
        ]))

    }
    static list() {
        return MainService.Get(Urls.User.GetAll).then((response) => {
            console.log("reponse from get all");
            console.log(response);
            return response;
        });
    }


    static handleSubmit(event) {
        event.preventDefault();
        // let { from } = this.props.location.state || { from: { pathname: "/" } };

        var postdata = formExtractor(event.target);
        return MainService.New("/api/account/RegisterUser", postdata);
        //     if (postdata.userName === "ali" && postdata.passWord === '123') {
        //         console.log("ok");
        //          UserService.singin({Name:"admin",isAuthenticated :true});
        //          return Promise.resolve({ redirect: undefined, message: "عملیات  با موفقیت انجام شد" });
        //     // return UserService.New(postdata)
        //     //     .then((response) => {
        //     //         console.log("response");
        //     //         console.log(response);

        //     //         // UserService.singin(response);
        //     //         return Promise.resolve({ redirect: "/", message: "عملیات  با موفقیت انجام شد" });
        //     //     }, () => Promise.reject("ok"))


        //     return Promise.resolve({ redirect: "/border", message: "عملیات  با موفقیت انجام شد" });

        //     return Promise.resolve({ message: 'admin loged in !', redirect: "/" })

        // }


        return Promise.resolve({ redirect: "/border", message: "عملیات  با موفقیت انجام نشد" });

        // return Promise.reject("error")

    }
}
