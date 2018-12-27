// show object spread works, i.e. babel works
const faker = require('faker');
function generateData(length = 10) {
  return Array.from({ length }, () => ({
    id: faker.random.uuid(),
    name: faker.name.findName(),
    age: faker.random.number({ min: 12, max: 80 }),
  }));
}

export function handler(event, context, callback) {
  const { count = 10 } = event.queryStringParameters;

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(generateData(count)),
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });
}
