/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import Profile from "pages/Profile/Profile.js";
import SearchMentor from "pages/SearchMentor/SearchMentor.js";

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
];
export default dashboardRoutes;
