 import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";
const { post, postImg } = styles;
import {TPost} from "@customTypes/post"
import { useAppSelector } from "@store/hooks";
export default function Post({title,description,image }:TPost){
  const { accessToken , user } = useAppSelector((state) => state.auth);
  const {records}=useAppSelector((state) => state.posts)
  return (
    <div className={post}>
      <div className={postImg}>
        <img src={image}   width="300px" height="300px"     alt={title} />
      </div>
      <div className="d-flex justify-content-around align-items-center">
          <div>
                <h2>{title}</h2>
                <h3>{description}</h3>
          </div>
        <div>
          {accessToken && user.id === records.user_id && <>
        <FontAwesomeIcon fontSize="19px" icon={faPenToSquare} />
        <FontAwesomeIcon
              fontSize="19px"
              color="red"
              icon={faTrash}
              style={{marginLeft:"5"}}
              onClick={() => {}}
            />
         </> }
        </div>
        </div>
    </div>
  );
};

