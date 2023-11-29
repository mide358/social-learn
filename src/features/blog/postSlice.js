import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { sub } from 'date-fns';

const POST_URL = 'http://localhost:3030/posts';

const initialState = {
  posts: [],
  status: 'idle',
  error: null,
};

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (thunkAPI) => {
    try {
      const config = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await axios.get(POST_URL, config);
      console.log(response.data);

      return response.data;
    } catch (error) {
      console.log(error.response);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const addPosts = createAsyncThunk('posts/addPosts', async (thunkAPI) => {
  try {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.post(POST_URL, config);
    console.log(response);

    return response.data;
  } catch (error) {
    console.log(error.response);
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    postUpdate(state, action) {
      const { postId, title, content } = action.payload;
      const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
    addReaction(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reations[reaction]++;
      }
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';

        // state.posts = state.posts.push(action.payload);
        let min = 1;
        const loadedPosts = action.payload.map((post) => {
          post.date = sub(new Date(), { minutes: min++ }).toISOString();
          post.reactions = {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          };
          return post;
        });

        state.posts = state.posts.concat(loadedPosts);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const postSelector = (state) => state.posts;
// export const statusSelector = (state) => state.posts.status;
// export const errorSelector = (state) => state.posts.error;

export const { postAdded, postUpdate, reactionAdded } = postSlice.actions;
export default postSlice.reducer;
