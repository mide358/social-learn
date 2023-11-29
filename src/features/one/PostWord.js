import React from 'react';
import { useGetPostQuery } from '../api/apiSlice';

function PostWord() {
  const { data, isLoading, error } = useGetPostQuery();

  return (
    <div>
      {error ? (
        <>OOps error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.title}</h3>
        </>
      ) : null}
    </div>
  );
}

export default PostWord;
