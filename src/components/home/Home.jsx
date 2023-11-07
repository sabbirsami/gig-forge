import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Brand from "./Brand";
import Jobs from "./jobs/Jobs";
import AppSection from "./AppSection";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Gig Forge</title>
            </Helmet>
            <Banner />
            <Brand />
            <Jobs />
            <AppSection />
        </div>
    );
};

export default Home;
