import React from "react";
// import { useSelector } from "react-redux/es/exports";
import { HiPlusCircle, HiMinusCircle, HiCheckCircle } from "react-icons/hi";
import styles from "./book.module.css";
import { useDispatch } from "react-redux";
import {
  addToFinishedList,
  addToReadingList,
  removeFromReadingList,
} from "../../redux/slices/bookSlice";
const SingleBook = (props) => {
  const { title, author, coverImageUrl, synopsis, id } = props.book;
  const dispatch = useDispatch();
  return (
    <div className="card d-flex mb-3 p-3" style={{ position: "relative" }}>
      <div className="row">
        <div className="col-md-3">
          <img className="img-fluid" src={coverImageUrl} alt="" />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6>{author}</h6>
            <p className="card-text">{synopsis.slice(0, 500)} ...</p>
          </div>
        </div>
      </div>
      <div className={styles.control_icons}>
        <HiMinusCircle
          onClick={(e) => dispatch(removeFromReadingList(id))}
          title="Remove from list"
          className={styles.minus_icon}
        />
        <HiPlusCircle
          onClick={(e) => dispatch(addToReadingList(props.book))}
          title="Add to Reading"
          className={styles.plus_icon}
        />
        <HiCheckCircle
          onClick={(e) => dispatch(addToFinishedList(props.book))}
          title="Mark as Finish"
          className={styles.check_icon}
        />
      </div>
    </div>
  );
};

export default SingleBook;
