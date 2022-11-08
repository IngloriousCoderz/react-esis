function fetchCharacter(id) {
  return fetch(`https://swapi.dev/api/people/${id}/`) //
    .then((response) => response.json())
    .then((body) => console.log(body))
    .catch((error) => console.error(error))
    .finally(() => console.log("Finito"));
}

async function fetchCharacter(id) {
  try {
    const response = await fetch(`https://swapi.dev/api/people/${id}/`);
    const body = await response.json();
    // console.log(body);
    // console.log(response.status);
    // await 42
    return body;
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Finito");
  }
}

fetchCharacter("1").then(console.log);

fetchCharacters("1", "2", "3").then(console.log);

async function fetchCharacters(...ids) {
  // for (const id of ids) {
  //   await fetchCharacter(id)
  // }
  const results = await Promise.all(ids.map(fetchCharacter));
  return results;
}
