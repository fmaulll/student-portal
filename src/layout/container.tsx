import { FC } from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { ReactComponent as DashboardIcon } from "../assets/icons/Dashboard.svg";
import { ReactComponent as AssessmentIcon } from "../assets/icons/Assessment.svg";
import { ReactComponent as ArticleIcon } from "../assets/icons/Article.svg";
import { ReactComponent as CalendarIcon } from "../assets/icons/Calendar.svg";
import { ReactComponent as AnnouncementIcon } from "../assets/icons/Announcement.svg";
import { ReactComponent as AccountIcon } from "../assets/icons/Account.svg";
import { ReactComponent as LogoutIcon } from "../assets/icons/Logout.svg";

export interface Props {
  children: any;
}

const menus = [
  {
    id: 1,
    title: "Dashboard",
    value: "dashboard",
    icon: <DashboardIcon />,
    url: "/",
  },
  {
    id: 2,
    title: "Courses",
    value: "courses",
    icon: <ArticleIcon />,
    url: "/courses",
  },
  {
    id: 3,
    title: "Score",
    value: "score",
    icon: <AssessmentIcon />,
    url: "/score",
  },
  {
    id: 4,
    title: "Schedule",
    value: "schedule",
    icon: <CalendarIcon />,
    url: "/schedule",
  },
  {
    id: 5,
    title: "Announcement",
    value: "announcement",
    icon: <AnnouncementIcon />,
    url: "/announcement",
  },
];

const Container: FC<Props> = ({ children }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <Grid container>
        {!matches && (
          <Grid item xs={2}>
            <Sidebar items={menus} />
          </Grid>
        )}
        {matches && (
          <Grid item xs={12}>
            <Header items={menus} />
          </Grid>
        )}
        <Grid
          item
          xs={!matches ? 10 : 12}
          style={{
            height: !matches ? "100vh" : "calc(100vh-100px)",
            backgroundColor: "#FFFFFF",
          }}
        >
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

export default Container;
