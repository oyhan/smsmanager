
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







const UserNew = (props) => {


    
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