import dotenv from 'dotenv';
dotenv.config();
import { TwitterApi } from 'twitter-api-v2';

const client = new TwitterApi({
  appKey: process.env.API_KEY,
  appSecret: process.env.API_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_SECRET,
});

const bearer = new TwitterApi(process.env.BEARER_TOKEN);

const twitterClient = client.readWrite; // to write the tweet
const twitterBearer = bearer.readOnly; // to read the tweet

export { twitterClient, twitterBearer };
