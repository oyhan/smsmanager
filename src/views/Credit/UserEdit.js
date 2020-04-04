
import React, { useState, useEffect } from "react"
import { LogModel } from "models/LogModel"
import CustomGrid from "components/DataGrid/Grid"
import Container from "components/Content/Container"
import { UserModel } from "models/UserModel"
import { InputRenderer } from "infrastructure/FormMaker/InputRenderer"
import GridItem from "components/Grid/GridItem"
import GridContainer from "components/Grid/GridContainer"
import Button from "components/CustomButtons/Button.js";
import WithData from "components/WithDataC/WithData"
import { MainService } from "services/MainService"
import { Urls } from "infrastructure/Helper/urls"
import RTL from "infrastructure/RTL"
import { formExtractor } from "infrastructure/Helper/formExtracor"
import { ShowSnack } from "infrastructure/Helper/Showsnack"







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