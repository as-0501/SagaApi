const url = 'https://reactnative.dev/movies.json';

function* getDataFromApi() {
  const response = yield fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: '',
  });

  //console.log(response);
  const data = yield response.status === 200 ? response.json() : [];
  console.log('----> data', data);
  return data;
}

export const ApiCall = {
  getDataFromApi,
};
