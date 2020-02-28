exports.handler = async (event) => {
    const receipts= [
    {
        "issuer": "the issuer",
        "expenseDate": "2020-02-27",
        "description": "a description",
        "amount": "50.00",
        "currency": "EUR",
        "location": "France"
    },
    {
  "issuer": "the issuer",
  "expenseDate": "2020-02-27",
  "description": "a description",
  "amount": "50.00",
  "currency": "EUR",
  "location": "France"
    }
    ];

    const response = {
        statusCode: 200,
        body: JSON.stringify(receipts),
    };
    return response;
};
