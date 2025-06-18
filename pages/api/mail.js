import { v4 } from "uuid";
import client from "@/apollo/client";
import { SEND_MESSAGE } from "@/apollo/mutations/send-message";

export default async function handler (req, res) {
  // switch the methods
  switch (req.method) {
    case "GET": {
      return;
    }

    case "POST": {
      return sendEmail(req, res);
    }

    case "PUT": {
      return; // updatePost(req, res);
    }

    case "DELETE": {
      return; // deletePost(req, res);
    }
  }
}

async function sendEmail (req, res) {
  const { firstName, lastName, company, phoneNumber, email, message } =
    req?.body;

  try {
    const { data, errors } = await client.query({
      query: SEND_MESSAGE,
      variables: {
        input: {
          subject: `New message from ${firstName + " " + lastName}`,
          body: `New message from: ${firstName + " " + lastName
            } <br> Company: ${company} <br> Phone Number: ${phoneNumber} <br> Email: ${email} <br> Message: ${message}`,
          clientMutationId: v4(), // Generate a unique id
        },
      },
    });

    if (data) {
      return res.json(data.sendEmail);
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
