import { Box } from "@mui/material";
import Header from "../../components/global/Header";
import PieChart from "../../components/global/PieChart";

export default function Pie() {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
}
