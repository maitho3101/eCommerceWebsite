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
import Image from "../src/components/Image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from "react";

interface Post {
  image: string,
  title: string,
  author: string,
  type: Number,
  content: string,
  id: Number,
}


export default function Home() {
  const [content, setContent] = useState<any>();
  const [title, setTitle] = useState("");
  const [listPosts, setListPost] = useState<Post[]>([]);
  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://10.248.158.167:1112/posts',
    }).then((res) => {
      setListPost(res.data.content)
    }, (err) => {
      console.log(err)
    })
  },[])
  const handleChange = (e: any) => {
    console.log("e", e);
    setContent(e);
  };
  axios.defaults.baseURL = 'http://10.248.158.167:1112';
  
  const ListPosts = () => {

    const redirect = (id: any) => {
      
    }

    const ListPostComponents = (props:any) => {
      const ListPostsContent = listPosts.map((post) => {
          return (
            <Box>
              <Box sx={{display: "flex", flexDirection: "row", width: "100%", height: "5%"}}>
                <p>{post.title}</p>
                <Box>
                </Box>
              </Box>
            </Box>
              
          )
      })
      return (
        <Box
          className="list-posts-detail flex-col one-third-row full-height"
        >
          {ListPostsContent}
        </Box>
      )
    }
    

    return (
      <Box
        className="list-posts-content flex-row full-width full-height"
        sx={{
          height: "150px",
          marginTop: "40px",
          backgroundColor: "red",
        }}
      >
        <ListPostComponents></ListPostComponents>
      </Box>
    );
  }




  return (
    <PageContainer title="Web admin phong thủy" description="Quản lý web phong thủy">
      <Box sx={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
        <ListPosts></ListPosts>
      </Box>
    </PageContainer>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};
