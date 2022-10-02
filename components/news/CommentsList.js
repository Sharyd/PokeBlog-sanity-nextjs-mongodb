import classes from "./CommentsList.module.css";

function CommentList(props) {
  const { items } = props;

  return (
    <>
      {items.length === 0 && <p>No comments yet!</p>}
      <ul className={classes.comments}>
        {items.map((item) => (
          <li key={item._id}>
            <p>{item.text}</p>
            <span>
              by <address>{item.name}</address>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CommentList;
