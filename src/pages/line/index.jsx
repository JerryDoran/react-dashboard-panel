import { Box } from "@mui/material";
import Header from "../../components/global/Header";
import LineChart from "../../components/global/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
