'use strict';

const pacientes = [
    {id: 1, nome: "Eduardo", dataNascimento: '1982-08-28'},
    {id: 2, nome: "Dayane", dataNascimento: '2005-08-30'},
    {id: 3, nome: "Neuza", dataNascimento: '1967-09-11'}
]

module.exports.listarPacientes = async (event) => {
    console.log(event)
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
          pacientes
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
