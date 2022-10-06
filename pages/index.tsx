import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import type { NextPage } from "next";
import MyMap from "../components/Map";
import NavBar from "../components/NavBar";

const Home: NextPage = () => {
    return (
        <>
            <NavBar />
            <Container maxWidth="lg">
                <Box>
                    <MyMap />
                </Box>
            </Container>
        </>
    );
};

export default Home;
