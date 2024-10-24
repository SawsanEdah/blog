import styles from "@pages/Error/styles.module.css"
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useRouteError,isRouteErrorResponse } from "react-router-dom";

const {notFound}=styles;
export default function Error() {
  const error=useRouteError();
  let errorstatusText:string;
  let errorstatus:number;

  if(isRouteErrorResponse(error)){
    errorstatus=error.status
    errorstatusText=error.statusText
  }else{
    errorstatus=404
    errorstatusText="Page Not Found"
  }
  return (
    <Container className={notFound}>
        <h1>{errorstatus}</h1>
        <p>Page {errorstatusText}</p>
        <Link to="/" replace={true}>
      
        How about going back to safety</Link>

    </Container>
  )
}
