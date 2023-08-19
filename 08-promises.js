// Promises

// then e catch
const apiCall = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve('Sucess');
    reject('Error');
  }, 1000)
});

apiCall
  .then((resposta) => {
    console.log(resposta);
  })
  .catch((error) => {
    console.log(error);
  })

// async e await
async function run() {
  try {
    const resposta = await apiCall;
    console.log(resposta);
  } catch (error) {
    console.log(error);
  }
}

run();