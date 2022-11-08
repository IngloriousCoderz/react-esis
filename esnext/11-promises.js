setTimeout(() => {
  console.log("finito!");
}, 1000);

console.log("sto ancora lavorando");
{
  $.getJSON(
    url,
    (response) => {},
    (error) => {}
  );

  // callback hell

  $.getJSON(
    url1,
    (response1) => {
      console.log(response1.body);
      $.getJSON(
        url2,
        (response2) => {
          console.log(response2.body);
          $.getJSON(
            url3,
            (response3) => {
              console.log(response3.body);
            },
            (error3) => {
              console.error(error3);
            }
          );
        },
        (error2) => {
          console.error(error2);
        }
      );
    },
    (error1) => {
      console.error(error1);
    }
  );
}

{
  // flat version
  const handleSuccess3 = (response3) => {
    console.log(response3.body);
  };

  const handleError3 = (error3) => {
    console.error(error3);
  };

  const handleSuccess2 = (response2) => {
    console.log(response2.body);
    $.getJSON(url3, handleSuccess3, handleError3);
  };

  const handleError2 = (error2) => {
    console.error(error2);
  };

  const handleSuccess1 = (response1) => {
    console.log(response1.body);
    $.getJSON(url2, handleSuccess2, handleError2);
  };

  const handleError1 = (error1) => {
    console.error(error1);
  };

  $.getJSON(url1, handleSuccess1, handleError1);
}

{
  // promises
  const promise = $.getJSON(url);

  promise.then((response) => {
    console.log(response.body);
  });

  promise.catch((error) => {
    console.error(error);
  });

  promise.finally(() => {});

  $.getJSON(url)
    .then((response) => {
      console.log(response.body);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {});

  $.getJSON(url1)
    .then((response1) => {
      console.log(response1.body);
      $.getJSON(url2)
        .then((response2) => {
          console.log(response2.body);
          $.getJSON(url3)
            .then((response3) => {
              console.log(response3.body);
            })
            .catch((error3) => {
              console.error(error3);
            });
        })
        .catch((error2) => {
          console.error(error2);
        });
    })
    .catch((error1) => {
      console.error(error1);
    });

  $.getJSON(url1)
    .then((response1) => {
      console.log(response1.body);
      return $.getJSON(url2);
    })
    .then((response2) => {
      console.log(response2.body);
      return $.getJSON(url3);
    })
    .then((response3) => {
      console.log(response3.body);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {});
}

{
  const promise = new Promise((resolve, reject) => {
    resolve(42);
  });

  promise.then((number) => {
    console.log(number);
    return "Finito!";
  });
}

{
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(42);
    }, 1000);
  });

  promise
    .then(console.log)
    .catch(console.error)
    .then(() => console.log("Finito!"));
}

{
  Promise.resolve(42);
  Promise.reject(42);

  const promise = Promise.all(promseArray);
  promise.then((results) => console.log(results));
}

{
  const ids = ["1", "2", "3"];

  Promise.all(ids.map(fetchCharacter)).then(console.log);

  function fetchCharacter(id) {
    return fetch(`https://swapi.dev/api/people/${id}/`).then((response) =>
      response.json()
    );
  }

  Promise.allSettled()
  Promise.race([fetchCharacter('1'), new Promise((, reject) => setTimeout(reject, 3000))])
}
