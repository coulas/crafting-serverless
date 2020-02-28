const uuid = require('uuid/v4');
const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient();

exports.handler = async ({ body:{issuer, expenseDate, description, amount, currency, location}}) => {
    console.log(""+issuer+", "+expenseDate+", "+description+", "+amount+", "+currency+", "+location);
    await db.put({
        TableName: "Expenses",
        Item: {
            expenseId:uuid(),
            expenseDate,
            issuer,
            description,
            amount,
            currency,
            location
            }
      }).promise();

    const response = {
        statusCode: 201,
    };
    return response;
};
