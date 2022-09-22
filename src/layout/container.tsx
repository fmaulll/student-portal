import { FC, useEffect, useState } from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { ReactComponent as DashboardIcon } from "../assets/icons/Dashboard.svg";
import { ReactComponent as AssessmentIcon } from "../assets/icons/Assessment.svg";
import { ReactComponent as ArticleIcon } from "../assets/icons/Article.svg";
import { ReactComponent as CalendarIcon } from "../assets/icons/Calendar.svg";
import { ReactComponent as AnnouncementIcon } from "../assets/icons/Announcement.svg";
import { useAppDispatch, useAppSelector } from "../hooks";
import { doGetProfileInfo } from "../containers/ApiServices";
import { studentActions } from "../store/student-slice";
import { useNavigate } from "react-router-dom";
import ModalLoader from "../components/ModalLoader";

export interface Props {
  children: any;
}

const menus = [
  {
    id: 1,
    title: "Dashboard",
    value: "dashboard",
    icon: <DashboardIcon />,
    url: "/dashboard",
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
  const [showSidebar, setShowSidebar] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const studentProfileInfo = useAppSelector(
    (state) => state.student.profileInfo
  );

  const studentId = useAppSelector((state) => state.student.studentId);

  const logoutHandler = () => {
    localStorage.removeItem("studentId");
    navigate("/");
  };

  useEffect(() => {
    if (
      window.location.pathname === "/" ||
      window.location.pathname === "/login"
    ) {
      setShowSidebar(false);
    } else {
      setIsOpen(true)
      dispatch(studentActions.getStudentId());
      setShowSidebar(true);
      doGetProfileInfo(studentId)
        .then((res) => {
          if (res?.status === 200) {
            dispatch(
              studentActions.getProfileInfo({
                firstName: res?.data.firstName,
                lastName: res?.data.lastName,
                email: res?.data.email,
              })
            );
            setTimeout(()=>{
              setIsOpen(false)
            },2000)
          }
        })
        .catch((err) => {
          alert(err);
        });
    }
  }, [dispatch, window.location.pathname]);

  return (
    <div>
      {showSidebar ? (
        <Grid container>
          <Grid item container xs={!matches ? 2 : 12}>
            {!matches && (
              <Grid item xs={2} sx={{ position: "fixed" }}>
                <Sidebar
                  items={menus}
                  profile={{
                    name:
                      studentProfileInfo.firstName +
                      " " +
                      studentProfileInfo.lastName,
                    email: studentProfileInfo.email,
                  }}
                  onClick={logoutHandler}
                />
              </Grid>
            )}
            {matches && (
              <Grid item xs={12}>
                <Header
                  profile={{
                    name:
                      studentProfileInfo.firstName +
                      " " +
                      studentProfileInfo.lastName,
                    email: studentProfileInfo.email,
                  }}
                  items={menus}
                />
              </Grid>
            )}
          </Grid>
          <Grid
            item
            xs={!matches ? 10 : 12}
            sx={{
              minHeight: !matches ? "100vh" : "calc(100vh-100px)",
              backgroundColor: "#f4f7fb",
              zIndex: -1,
            }}
          >
            {children}
          </Grid>
        </Grid>
      ) : (
        <div style={{ height: "100vh", background: "#f4f7fb" }}>{children}</div>
      )}
      <ModalLoader isOpen={isOpen} />
    </div>
  );
};

export default Container;
