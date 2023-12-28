
function fetchData() {
  return new Promise((resolve, reject) => {
   
    setTimeout(() => {
     
      const data = { example: 'data' };

      
      reject(new Error('Operation failed')); 
    }, 2000);
  });
}

function handleData() {
  fetchData()
    .then((data) => {
      
      console.log('Data fetched successfully:', data);
    })
    .catch((error) => {
      
      console.error('Error fetching data:', error.message);
    });
}


handleData();
