import { useDispatch, useSelector } from 'react-redux';
// import { postSelector, fetchPosts } from './postSlice';
import { useGetPostQuery } from '../api/apiSlice';
import { useEffect } from 'react';
// import PostCard from './PostCard';

export const Posting = () => {
  const { data, isLoading, error } = useGetPostQuery();

  let postContent;

  postContent = data.map((item) => {
    return <div data={item} key={item.id} />;
  });

  return (
    <div>
      {error ? (
        <>OOps error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        data.map((data) => {
          <>
            <h3>{data.title}</h3>
          </>;
        })
      ) : null}
    </div>
  );
};
