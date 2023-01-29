import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-1_1f50X6YaQ",
  ClientId: "7u9fsqihbpegtj1m5u53tlqusl",
};

export default new CognitoUserPool(poolData);

