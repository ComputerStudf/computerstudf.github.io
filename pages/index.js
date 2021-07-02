import Head from "next/head";
import { Container } from "../components/Container";
import { Home } from "../components/Home";
import { Footer } from "../components/Footer";

const Index = () => {
    return (
        <>
            <Head>
                <title>Computer Studf</title>
            </Head>
            <Container>
                <Home />
                <Footer />
            </Container>
        </>
    );
};

export default Index;
