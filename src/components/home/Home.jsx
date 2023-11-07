import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Brand from "./Brand";
import Jobs from "./jobs/Jobs";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Gig Forge</title>
            </Helmet>
            <Banner />
            <Brand />
            <Jobs />
        </div>
    );
};

export default Home;
