import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-1_GL8k7Cpzf",
  ClientId: "38ia9urj460d5gsq4o3aietnnd",
};

export default new CognitoUserPool(poolData);
