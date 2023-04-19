import { ReactElement, useState } from "react";
import { Checkbox, Box, FormControl, TextField, Button } from "@mui/material";
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
import axios from "axios";


export default function Home() {
  const [content, setContent] = useState<any>();
  const [title, setTitle] = useState("");
  const handleChange = (e: any) => {
    console.log("e", e);
    setContent(e);
  };
  axios.defaults.baseURL = 'http://10.248.158.167:1112';
  const createPost = () => {
    axios({
      headers: {
        'Accept': '*/*',
        'accept': 'application/json',
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
      },
      method: 'post',
      url: '/posts',
      data: {
        title: title,
        content: content,
      }
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
  });
  }
  return (
    <PageContainer title="Web admin phong thủy" description="Quản lý web phong thủy">
      <Box sx={{border: '2px solid black', padding: '20px', display:'flex', flexDirection: 'column', alignItems: 'center'}}>
        <FormControl sx={{width: "100%"}}>
            <TextField sx={{width: "100%"}}
              id="title-post"
              label="Tiêu đề bài viết"
              placeholder="Write here"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                console.log(event.target.value);
                setTitle(event.target.value);
              }}
            />
        </FormControl>
        <Editor onChange={(e: any) => handleChange(e)} value={content} />
        <Button variant="contained" sx={{marginTop: '20px', border: '1px solid black'}} onClick={createPost}>Tạo bài viết</Button> 
      </Box>
    </PageContainer>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};
