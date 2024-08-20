import BannerPage from "../BannerPage/BannerPage";
import CategoriesList from "../CategoriesList/CategoriesList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";


const Home = () => {
    return (
        <div>
            <BannerPage></BannerPage>
            <CategoriesList></CategoriesList>
           <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;