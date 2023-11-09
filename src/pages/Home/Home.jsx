import Banner from "../../components/Banner/Banner";
import CategoriesTab from "../../components/CategoriesTab/CategoriesTab";
import GoodFromWe from "../../components/GoodFromWe/GoodFromWe";
import PopularJobs from "../../components/PopularJobs/PopularJobs";

const Home = () => {
    return (
        <div>
            {/* banner  */}
            <Banner></Banner>
            {/* Browse by Category */}
            <CategoriesTab></CategoriesTab>
            {/* Good From we  */}
            <GoodFromWe></GoodFromWe>
            {/* popular jobs  */}
            <PopularJobs></PopularJobs>
            
        </div>
    );
};

export default Home;