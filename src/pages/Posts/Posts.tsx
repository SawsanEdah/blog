



import { Container, Row, Col, Button} from "react-bootstrap";
import Post from "@components/posts/Post"
import { useAppSelector,useAppDispatch } from "@store/hooks";
import { useEffect } from "react";
import { actGetPosts } from "@store/posts/postsSlice";
import { Link } from "react-router-dom";


export default function Posts(){
  const {records}=useAppSelector(state => state.posts);
  const dispatch=useAppDispatch();
  useEffect(()=>{
   
      dispatch(actGetPosts())
   
   
  },[dispatch])


  const postsList=records.length >0?
    records.map((record)=> 
      <Col key={record.id} xs={12} md={6} className="d-flex justify-content-center mb-5 mt-2">
          <Post {...record}/>
        </Col>
    )
  : "there are no posts"
  return (
    <Container>
     <Link to="add"><Button>New Post</Button></Link>
      <Row>
      
        {postsList}
      </Row>
    </Container>
  );
};


