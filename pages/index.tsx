import { ReactElement, useState } from "react";
import { Grid, Box } from "@mui/material";
import PageContainer from "../src/components/container/PageContainer";
// components
import SalesOverview from "../src/components/dashboard/SalesOverview";
import YearlyBreakup from "../src/components/dashboard/YearlyBreakup";
import RecentTransactions from "../src/components/dashboard/RecentTransactions";
import ProductPerformance from "../src/components/dashboard/ProductPerformance";
import Blog from "../src/components/dashboard/Blog";
import MonthlyEarnings from "../src/components/dashboard/MonthlyEarnings";
import FullLayout from "../src/layouts/full/FullLayout";
import Editor from "../src/components/editor";



export default function Home() {
  const [content, setContent] = useState<any>();
  const handleChange = (e: any) => {
    console.log("e", e);
    setContent(e);
  };
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Editor onChange={(e: any) => handleChange(e)} value={content} />
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Box>
    </PageContainer>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};
