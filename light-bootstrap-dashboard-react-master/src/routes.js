import Profile from "pages/Profile/Profile.js";
import SearchMentor from "pages/SearchMentor/SearchMentor.js";
import CreateSlot from "pages/CreateSlot/CreateSlot.js";
import ViewSlot from "pages/ViewSchedule/ViewSchedule.js";
import ListRequestMentee from "pages/ListRequestMetee/ListRequestMentee.js";

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
    name: "Create slot",
    icon: "nc-icon nc-chart-pie-35",
    component: CreateSlot,
    layout: "/admin",
  },
  {
    path: "/view-slot",
    name: "View Slot",
    icon: "nc-icon nc-chart-pie-35",
    component: ViewSlot,
    layout: "/admin",
  },
  {
    path: "/list-request-mentee",
    name: "List request mentee",
    icon: "nc-icon nc-chart-pie-35",
    component: ListRequestMentee,
    layout: "/admin",
  },
];
export default dashboardRoutes;
