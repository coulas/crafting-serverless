exports.handler = async ({issuer, expenseDate, description, amount, currency, location}) => {
    const receipt = {
        issuer,
        expenseDate,
        description,
        amount,
        currency,
        location
    };
    const response = {
        statusCode: 200,
        body: JSON.stringify(receipt),
    };
    return response;
};