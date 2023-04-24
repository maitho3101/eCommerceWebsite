import { ReactElement, useState } from "react";
import { Checkbox, Box, FormControl, TextField, Button, Input, InputLabel} from "@mui/material";
import axios from "axios";
import PageContainer from "../../../src/components/container/PageContainer";
import FullLayout from "../../../src/layouts/full/FullLayout";
import Editor from "../../../src/components/editor";
import Image from "../../../src/components/Image";
import { Label } from "@mui/icons-material";



export default function CreateItem() {
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
          <p>Tên sản phẩm</p>
          <TextField/>
          <p>Ảnh sản phẩm</p>
          <Input

              type="file"
              name="myImage"
            />    
          <Box>
            <p>Ảnh demo</p>
            <Image src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"></Image>
          </Box>
          <p>Giá tiền 1 đơn vị (VNĐ)</p>
          <TextField/>    
          <p>Giới thiệu sản phẩm</p>
          <Editor onChange={(e: any) => handleChange(e)} value={content} />
        </FormControl>
        <Button variant="contained" sx={{marginTop: '20px', border: '1px solid black'}} onClick={createPost}>Thêm sản phẩm</Button> 
      </Box>
    </PageContainer>
  );
}

CreateItem.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};
