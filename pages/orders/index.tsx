import { ReactElement, useState } from "react";
import { Checkbox, Box, FormControl, TextField, Button, Input, InputLabel} from "@mui/material";
import axios from "axios";
import PageContainer from "../../src/components/container/PageContainer";
import FullLayout from "../../src/layouts/full/FullLayout";
import Editor from "../../src/components/editor";
import Image from "../../src/components/Image";
import { Label } from "@mui/icons-material";



export default function ListCart() {
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
        
      </Box>
    </PageContainer>
  );
}

ListCart.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};
