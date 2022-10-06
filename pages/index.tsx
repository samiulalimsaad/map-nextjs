import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import type { NextPage } from "next";
import NavBar from "../components/NavBar";

const Home: NextPage = () => {
    return (
        <>
            <NavBar />
            <Container maxWidth="lg">
                <Box
                    sx={{
                        my: 4,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Typography variant="h4" component="h1" gutterBottom>
                        MUI v5 + Next.js with TypeScript example
                    </Typography>
                </Box>
            </Container>
        </>
    );
};

export default Home;
