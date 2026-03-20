import {createClient} from "@sanity/client";

const client = createClient({
  projectId: "958pip7i",
  dataset: "production",
  useCdn: false, // `false` if you want to fetch data from the latest version
  apiVersion: "2022-03-07"
});

export default client;
