import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000",
  }),
  tagTypes: ["videos", "video", "relatedVideo"],
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => "/videos",
      providesTags: ["videos"],
    }),

    getVideo: builder.query({
      query: (videoId) => `/videos/${videoId}`,
      providesTags: (result, error, arg) => [{ type: "video", id: arg }],
    }),

    getRelatedVideo: builder.query({
      query: ({ title, id }) => {
        const tags = title.split(" ");
        // /videos?tags_like=vscode&tags_like=tips&ne=id&_limit=5
        const likeSearch =
          tags.map((tag) => `title_like=${tag}`).join("&") + `&id_ne=${id}`;
        const queryString = `/videos?${likeSearch}&_limit=5`;
        return queryString;
      },
      providesTags: (result, error, arg) => [
        { type: "relatedVideo", id: arg.id },
      ],
    }),

    addVideo: builder.mutation({
      query: (data) => ({
        url: "/videos",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["videos"],
    }),

    editVideo: builder.mutation({
      query: ({ id, data }) => ({
        url: `/videos/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "videos",
        { type: "video", id: arg.id },
        { type: "relatedVideo", id: arg.id },
      ],
    }),

    deleteVideo: builder.mutation({
      query: (id) => ({
        url: `videos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["videos"],
    }),
  }),
});

export const {
  useGetVideosQuery,
  useGetVideoQuery,
  useGetRelatedVideoQuery,
  useAddVideoMutation,
  useEditVideoMutation,
  useDeleteVideoMutation,
} = apiSlice;
