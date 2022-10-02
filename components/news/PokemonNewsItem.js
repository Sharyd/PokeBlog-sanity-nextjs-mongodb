import React, { useState, useEffect } from "react";
import classes from "./PokemonNewsItem.module.css";
import Image from "next/image";
import { HiHeart } from "react-icons/hi";
import { BiCommentDots } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { urlFor } from "../../sanity";
import CommentList from "./CommentsList";
import { useNotification } from "../../hooks/useNotification";
import CommentsForm from "../forms/CommentsForm";
import Notification from "../ui/Notification";

const PokemonNewsItem = ({ post }) => {
  console.log(post);
  const [favourite, setFavourite] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadedMessages, setLoadedMessages] = useState(false);
  const { _id: id } = post;

  const { setRequestStatus, notification, setError } = useNotification();

  useEffect(() => {
    if (loadedMessages || showComments) {
      setIsLoading(true);
      fetch("/api/comments/" + id)
        .then((res) => res.json())
        .then((data) => {
          setComments(data.comments);
          setIsLoading(false);
        });
    }
  }, [loadedMessages, showComments, id]);

  function addCommentHandler(commentData) {
    setRequestStatus("pending");
    fetch("/api/comments/" + id, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return res.json().then((data) => {
          throw new Error(data.message || "Something went wrong!");
        });
      })
      .then((data) => {
        setRequestStatus("success");
        setLoadedMessages(true);
      })
      .catch((err) => {
        setRequestStatus("error");
        setError(err.message);
      });
  }

  let content;

  if (showComments && !isLoading) {
    content = <CommentList items={comments} />;
  }

  if (showComments && isLoading) {
    content = <p className="center">Loading...</p>;
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const addHandlerFavourite = () => {
    setFavourite((prev) => !prev);
  };
  const handleCommentsForm = () => {
    setShowComments((prev) => !prev);
  };

  const setClassFavourite = `${classes.iconHeart} ${
    favourite ? classes.activeHeart : ""
  }`;
  const setClassComments = `${classes.icon} ${
    showComments ? classes.activeComments : ""
  }`;

  const src = urlFor(post.mainImage.asset._ref).url();

  return (
    <>
      <article className={classes.container}>
        <div className={classes.header}>
          <h3>{post.title}</h3>
        </div>
        <div className={classes.mainContent}>
          <div className={classes.imgContainer}>
            <Image
              loader={() => src}
              src={src}
              alt="post image"
              width={600}
              height={350}
            />
          </div>
          <div className={classes.postBy}>
            <p>Post by {post.author}</p>
            <p>{formattedDate}</p>
          </div>
          <aside className={classes.aside}>
            {post.body.map((text) =>
              text.children.map((text) => <p key={text._key}>{text.text}</p>)
            )}
          </aside>
        </div>
        <div className={classes.icons}>
          <div className={classes.iconContainer}>
            <HiHeart
              className={`${classes.icon} ${setClassFavourite}`}
              onClick={addHandlerFavourite}
            />
            <BiCommentDots
              className={setClassComments}
              onClick={handleCommentsForm}
            />
          </div>
          <div className={classes.iconContainer}>
            <span>Share this:</span>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <BsFacebook
                className={classes.icon}
                style={{ color: "#4267B2" }}
              />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <BsTwitter
                className={classes.icon}
                style={{ color: "#1DA1F2" }}
              />
            </a>
            <a
              href="https://outlook.office365.com"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineMail
                className={classes.icon}
                style={{ color: "#5EF38C" }}
              />
            </a>
          </div>
        </div>
        {showComments && <CommentsForm onAddComment={addCommentHandler} />}
        {content}
      </article>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </>
  );
};

export default PokemonNewsItem;
