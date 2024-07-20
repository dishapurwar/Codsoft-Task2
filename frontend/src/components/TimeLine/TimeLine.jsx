import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Work } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#fff",
      secondary: "#aaa",
    },
  },
});

const TimeLine = ({ timelines = [] }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="bg-tertiary py-20">
        {/* <h3 className="text-center text-white bg-purple-900 py-4 px-8 flex items-center justify-center rounded-full animate-projectHeadingAnimation relative transform -translate-y-1/2">
          <Work className="mr-4" /> Timeline
        </h3> */}
        <div className="p-5">
          <Timeline position="alternate">
            {timelines.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  align="right"
                  variant="body2"
                  color="text.secondary"
                >
                  {item.date.toString().split("T")[0]}
                </TimelineOppositeContent>

                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="primary">
                    <Work />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <div
                    style={{
                      background: "rgba(255, 255, 255, 0.1)",
                      borderRadius: "10px",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      padding: "10px",
                    }}
                  >
                    <Typography variant="h6" color="text.primary">
                      {item.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.primary">
                      {item.company}
                    </Typography>
                    <Typography color="text.secondary">
                      {item.description}
                    </Typography>
                    <ul>
                      {item.points.map((point, idx) => (
                        <li key={idx} style={{ color: darkTheme.palette.text.secondary }}>
                          <Typography variant="body2">{point}</Typography>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default TimeLine;
