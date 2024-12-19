import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <>
        <Hero title='title' subtitle="subtitle" />
        <HomeCard />
        <JobListings isHome={true} />
        <ViewAllJobs />
    </>
  );
};

export default HomePage;
