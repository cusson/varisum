import { Container } from '@material-ui/core'
import React,{lazy, Suspense} from 'react'
import ChooseUs from './chooseUs/ChooseUs'
import Bar from './descrBar/Bar'
import {makeStyles} from '@material-ui/core/styles'
import HomeContainer from './Houses/HomeContainer'
// import ThreeDots from './loaders/ThreeDots'
import  { Facebook } from "react-content-loader";
const Featured = lazy(()=> import('./featureHouse/Featured'));

const useStyles = makeStyles({
    root: {},
    loader: {
        display: "flex",
        justifyContent:"center"
    }
})

const FaceBook = () => <Facebook />

const Home = () => {
    const classes = useStyles()

    React.useEffect(() => {
        window.scrollTo(0, 0);
      });

    return (
        <>
            <Container >
                <Suspense className={classes.loader} fallback={<FaceBook />}>
                   <Featured /> 
                </Suspense>
                
                <Bar />
                <HomeContainer />
                <ChooseUs />
            </Container>
        </>
    )
}

export default Home
