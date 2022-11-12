import Profile from "pages/Profile/Profile.js";
import SearchMentor from "pages/SearchMentor/SearchMentor.js";
import CreateSlot from "pages/CreateSlot/CreateSlot.js";

const dashboardRoutes = [
  {
    path: "/profile",
    name: "Profile",
    icon: "nc-icon nc-chart-pie-35",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/search-mentor",
    name: "Search Mentor",
    icon: "nc-icon nc-chart-pie-35",
    component: SearchMentor,
    layout: "/admin",
  },
  {
    path: "/create-slot",
    name: "Create slot of Mentor",
    icon: "nc-icon nc-chart-pie-35",
    component: CreateSlot,
    layout: "/admin",
  },
];
export default dashboardRoutes;
