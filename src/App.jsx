import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import HomeCard from "./components/HomeCard";
import JobListings from "./components/JobListings";
import ViewAllJobs from "./components/ViewAllJobs";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero title="Test title" subtitle="This is the subtitle" />
      <HomeCard />
      <JobListings />
      <ViewAllJobs />
 

    



      
    </>
  );
};

export default App;
