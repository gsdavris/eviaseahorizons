import client from "@/apollo/client";
import { GET_PAGINATED_POSTS } from "@/apollo/queries/posts/get-paginated-posts";

export default async function handler (req, res) {
  // switch the methods
  switch (req.method) {
    case "GET": {
      return;
    }

    case "POST": {
      return getPosts(req, res);
    }

    case "PUT": {
      return; // updatePost(req, res);
    }

    case "DELETE": {
      return; // deletePost(req, res);
    }
  }
}

async function getPosts (req, res) {
  const { first, last, after, before, categoryName, order } = req?.body;
  try {
    const { data, errors } = await client.query({
      query: GET_PAGINATED_POSTS,
      variables: {
        first: first,
        last: last,
        after: after,
        before: before,
        categoryName: categoryName,
        order: order,
      },
    });

    if (data) {
      return res.json(data.posts);
    }
    if (errors) {
      return res.json(errors);
    }
  } catch (error) {
    // return the error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
  res.end();
}
