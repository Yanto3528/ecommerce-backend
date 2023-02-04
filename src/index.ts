import { app } from "./app";
import { connectDB } from "./db";

const port = process.env.PORT || 8000;

const main = async () => {
  await connectDB();

  app.listen(port, () => {
    console.log(`Listening on port ${port}`); // eslint-disable-line
  });
};

main();
