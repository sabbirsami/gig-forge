import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Brand from "./Brand";
import Jobs from "./jobs/Jobs";
import AppSection from "./AppSection";
import PostResume from "./PostResume";
import FindEmployee from "./FindEmployee";
import Features from "./features/Features";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Gig Forge</title>
            </Helmet>
            <Banner />
            <Brand />
            <Jobs />
            <FindEmployee />
            <Features />
            <PostResume />
            <AppSection />
        </div>
    );
};

export default Home;
