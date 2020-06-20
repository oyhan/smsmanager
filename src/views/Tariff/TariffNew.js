
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







export const TariffNew = (props) => {

    
    
    // var [cols, setCols] = useState([]);

    const { data, onSubmit } = props;
    

    const footer =
        <Button type="submit" color="primary">Register</Button>



    // useEffect(() => {

    //     TariffModel.properties.then(items => setCols(items))
    // }
    //     , [])



    return (
        // <form onSubmit={TariffModel.handleSubmit} >
        <form onSubmit={onSubmit} >
            {/* <Container title={TariffModel.Title} description={"Add a new customer"} footer={footer} > */}

            <GridContainer>


                {

                    data.map((item, key) => {

                        return (
                            <GridItem key={key} xs={12} sm={12} md={4}>

                                <InputRenderer  {...item} />
                            </GridItem>
                        )

                    })
                }
            </GridContainer>


            {footer}

            {/* </Container> */}
        </form>

    )
}

// export default <WithData  Component={ TariffNew}  dataSource= {TariffModel.NewProperties}  componentSubmit={TariffModel.handleSubmit}/>;

export default WithData({Component : TariffNew ,dataSource : TariffModel.NewProperties ,onSubmit  : TariffModel.handleSubmit });