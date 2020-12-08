import * as util from 'util';

exports.hello = async (event) => {
  console.log('recieved', util.inspect(recieved));

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({ message: 'Authenticated call!' }),
  };
};
