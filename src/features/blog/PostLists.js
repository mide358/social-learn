import { useDispatch, useSelector } from 'react-redux';
import { postSelector, fetchPosts } from './postSlice';
import { useGetPostQuery } from '../api/apiSlice';
import { useEffect } from 'react';
import PostCard from './PostCard';

export const PostLists = () => {
  const { posts, status, error } = useSelector(postSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  let postContent;
  if (status === 'loading') {
    postContent = (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else if (status === 'succeeded') {
    postContent = posts.map((item) => {
      return <PostCard posts={item} key={item.id} />;
    });
  } else if (status === 'failed') {
    postContent = (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }

  return <div>{postContent}</div>;
};
