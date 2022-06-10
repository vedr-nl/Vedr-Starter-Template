import { createClient } from "contentful";

let client;

export const getClient = async () => {
  if (client && client.getEntry()) {
    return client;
  }
  client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
    resolveLinks: true,
  });
  return client;
};

export const getEntries = async (obj) => {
  const c = await getClient();
  return c.getEntries(obj);
};

export const getEntryByField = async (key, value, type) => {
  const fieldKey = `fields.${key}`;
  const data = await getEntries({
    content_type: type,
    [fieldKey]: value,
    include: 10,
  });

  return data;
};