import { ApiKeySession, EventsApi } from "klaviyo-api";
import type { NextApiRequest, NextApiResponse } from "next";

const { KLAVIYO_API_KEY = "", EMAIL_TO = "" } = process.env;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(400).send("HTTP method not available on this route");

  const { email, name = "", subject = "", message = "" } = req.body;

  const data = {
    type: "event",
    attributes: {
      metric: {
        data: {
          type: "metric",
          attributes: {
            name: "Form Submitted",
          },
        },
      },
      properties: {
        email,
        name,
        subject,
        message,
      },
      profile: {
        type: "profile",
        attributes: {
          email: EMAIL_TO,
        },
      },
    },
  };

  const session = new ApiKeySession(KLAVIYO_API_KEY);
  const eventsApi = new EventsApi(session);
  eventsApi.createEvent(data);

  res.status(200).json({ info: "sent" });
}
