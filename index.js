
const https= require('https');

//getStock('USD');

function getStock(stockName){
<<<<<<< HEAD
    
=======
    try {
>>>>>>> 9b0ffdfbf71be44a9e27c18b554b26a54353cdac
        const request = https.get(`https://wwwdoviz.com/api/v1/currencies/${stockName}/latest`, response => {
            //check if the service is working or not 
            /*   console.log(response.statusCode);
        if (response.statusCode===200){
            console.log("Service is Working Properly");
        }
*/
            //const blast the error
            let body = '';
            // Read the repsonse
            response.on('data', data => {
                body += data.toString();

            });

            // Parse the data
            response.on('end', () => {
                const stock = JSON.parse(body);
                // Read the properties
                //   console.dir(stock);

                // Print to Screen
                //  console.log(`${stockName}(${stock.code})=>> Selling: ${stock.selling}     Buying: ${stock.buying}`);
                printStock(stockName, stock.code, stock.selling, stock.buying);
            });

            

            });
    request.on("error", error => console.error(`the problem is with${error.message}`));
    
    
}

function printStock(stockName, stockCode,selling, buying){
    console.log(`${stockName}(${stockCode})=>> Selling: ${selling}     Buying: ${buying}`);
    
}

const stockNames=['USD','EUR'];

stockNames.forEach(stock=>{
    getStock(stock);
});

