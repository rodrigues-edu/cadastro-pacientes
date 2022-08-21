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
};

module.exports.obterPaciente = async (event) => {
    const { pacienteId } = event.pathParameters;
    const paciente = pacientes.find((paciente) => paciente.id == pacienteId);

    if (paciente === undefined) {
        return {
            statusCode: 404,
            body: JSON.stringify({error: 'Paciente não existe'}, null, 2),
        }
    }

    return {
        statusCode: 200,
        body: JSON.stringify(paciente, null, 2),
    };
};
