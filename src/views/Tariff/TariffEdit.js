
import React, { useState, useEffect } from "react"
import { LogModel } from "models/LogModel"
import CustomGrid from "components/DataGrid/Grid"
import Container from "components/Content/Container"
import { TariffModel } from "models/TariffModel"
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
import AppLoader from "components/AppLoader/AppLoader"







const TariffEdit = (props) => {






    const [entity, setEntity] = useState(null);

    var [cols, setCols] = useState([]);




    const footer =
        <Button type="submit" color="primary">ثبت</Button>



    useEffect(() => {


        MainService.Get("/api/tariff/get/" + props.Id).then(response => {
            setEntity(response);
        })

        TariffModel.EditProperties.then(items => setCols(items));

    }
        , [])

    const submit = (event) => {
        event.preventDefault();

        var formObject = formExtractor(event.target)

        MainService.New(Urls.Tariff.Edit, formObject).then(respons =>
            props.history.push("/admin/Tariff")
            , error => {
                ShowSnack.Error(error);

            })
    }

    return (

        <RTL>
            <form onSubmit={submit}>
                <Container title="ویرایش" footer={footer} >
                    <GridContainer>


                        {

                            cols.map((item, key) => {
                                item.DefaultValue = props[item.Name];


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
        </RTL>


    )
}
export default TariffEdit;
// export default React.memo(TariffEdit);
// export default WithData({Component : TariffEdit ,dataSource : TariffModel.EditProperties ,onSubmit  : TariffModel.handleSubmit });