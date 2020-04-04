
import React, { useState, useEffect } from "react"
import { LogModel } from "views/Credit/node_modules/models/LogModel"
import CustomGrid from "views/Credit/node_modules/components/DataGrid/Grid"
import Container from "views/Credit/node_modules/components/Content/Container"
import { UserModel } from "views/Credit/node_modules/models/UserModel"
import { InputRenderer } from "views/Credit/node_modules/infrastructure/FormMaker/InputRenderer"
import GridItem from "views/Credit/node_modules/components/Grid/GridItem"
import GridContainer from "views/Credit/node_modules/components/Grid/GridContainer"
import Button from "views/Credit/node_modules/components/CustomButtons/Button.js.js";
import WithData from "views/Credit/node_modules/components/WithDataC/WithData"
import { MainService } from "views/Credit/node_modules/services/MainService"
import { Urls } from "views/Credit/node_modules/infrastructure/Helper/urls"
import RTL from "views/Credit/node_modules/infrastructure/RTL"
import { formExtractor } from "views/Credit/node_modules/infrastructure/Helper/formExtracor"
import { ShowSnack } from "views/Credit/node_modules/infrastructure/Helper/Showsnack"







const UserEdit = (props) => {



    var entity = undefined;
    if (props.location.state)
        entity = props.location.state;
        
    var [cols, setCols] = useState([]);
    console.log('entity: ', entity);
    const { data, onSubmit } = props;


    const footer =
        <Button type="submit" color="primary">ثبت</Button>



    useEffect(() => {



        UserModel.EditProperties.then(items => setCols(items));

    }
        , [])

    const submit = (event)=> {
        event.preventDefault();
        
        var formObject = formExtractor(event.target)
        
        MainService.New(Urls.User.Edit,formObject).then(respons=>
            props.history.push("/admin/User")
        ,error => {
            ShowSnack.Error(error);

        })
    }

    return (
        <form onSubmit={submit}>
            <Container title="ویرایش" footer={footer} >
                <GridContainer>


                    {

                        cols.map((item, key) => {
                            item.DefaultValue = entity[item.Name];

                            return (
                                <GridItem key={key} xs={12} sm={12} md={4}>

                                    <InputRenderer  {...item} />
                                </GridItem>
                            )

                        })
                    }
                </GridContainer>
            </Container>
        </form>

    )
}
// export default React.memo(UserEdit);
export default WithData({Component : UserEdit ,dataSource : UserModel.EditProperties ,onSubmit  : UserModel.handleSubmit });