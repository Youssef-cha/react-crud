import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

const App = () => {
  const addjob = async (newJob) => {
    return await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
  };

  const updateJob = async (newJob) => {
    return await fetch(`/api/jobs/${newJob.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    })

  }

  const deleteJob = async (id) => {
    return await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addjob} />} />
        <Route
          loader={jobLoader}
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
        />
        <Route
          element={<EditJobPage updateJobSubmit={updateJob} />}
          path="/edit-job/:id"
          loader={jobLoader}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
