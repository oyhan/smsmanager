
import React, { useState, useEffect } from "react"
import { LogModel } from "models/LogModel"
import CustomGrid from "components/DataGrid/Grid"
import Container from "components/Content/Container"
import { CreditModel } from "models/CreditModel"
import { InputRenderer } from "infrastructure/FormMaker/InputRenderer"
import GridItem from "components/Grid/GridItem"
import GridContainer from "components/Grid/GridContainer"
import Button from "components/CustomButtons/Button.js";
import WithData from "components/WithDataC/WithData"







const CreditNew = (props) => {



    // var [cols, setCols] = useState([]);

    const { data, onSubmit } = props;


    const footer =
        <Button type="submit" color="primary">ثبت</Button>



    // useEffect(() => {

    //     CreditModel.properties.then(items => setCols(items))
    // }
    //     , [])

    const [state,setState] = useState({amountBySms :"" , amount :""});



    const handlechangeAmountBySms =  (e)=> {
        

        setState({amountBySms : e.target.value , amount : props.SmsTariff * e.target.value }) 

    }

    const handlechangeAmount =  (e)=> {

        setState({amountBySms : Math.floor(e.target.value / props.SmsTariff) , amount :  e.target.value }) 

    }

    return (
        // <form onSubmit={CreditModel.handleSubmit} >
        <form onSubmit={onSubmit} >
            {/* <Container title={CreditModel.Title} description={"Add a new customer"} footer={footer} > */}

            <GridContainer>


                {

                    data.map((item, key) => {
                        if (item.Name == 'AmountBySms') {
                            return (
                                <GridItem key={key} xs={12} sm={12} md={12}>

                                    <InputRenderer onChange={handlechangeAmountBySms} value={state.amountBySms} {...item} />
                                </GridItem>
                            )
                        }
                        if (item.Name == 'Amount') {
                            return (
                                <GridItem key={key} xs={12} sm={12} md={12}>

                                    <InputRenderer onChange={handlechangeAmount} value={state.amount} {...item} />
                                </GridItem>
                            )
                        }
                        return (
                            <GridItem key={key} xs={12} sm={12} md={12}>

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

// export default <WithData  Component={ CreditNew}  dataSource= {CreditModel.NewProperties}  componentSubmit={CreditModel.handleSubmit}/>;

export default WithData({ Component: CreditNew, dataSource: CreditModel.NewProperties, onSubmit: CreditModel.handleSubmit });