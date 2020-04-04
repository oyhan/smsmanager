
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







export const UserNew = (props) => {


    
    // var [cols, setCols] = useState([]);

    const { data, onSubmit } = props;
    

    const footer =
        <Button type="submit" color="primary">Register</Button>



    // useEffect(() => {

    //     UserModel.properties.then(items => setCols(items))
    // }
    //     , [])



    return (
        // <form onSubmit={UserModel.handleSubmit} >
        <form onSubmit={onSubmit} >
            {/* <Container title={UserModel.Title} description={"Add a new customer"} footer={footer} > */}

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

// export default <WithData  Component={ UserNew}  dataSource= {UserModel.NewProperties}  componentSubmit={UserModel.handleSubmit}/>;

export default WithData({Component : UserNew ,dataSource : UserModel.NewProperties ,onSubmit  : UserModel.handleSubmit });