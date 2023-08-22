const express = require('express')
const axios = require('axios')


const app = express()

app.get("/numbers",async(req,res)=>{
    const urls = req.query.url
    console.log(typeof urls)
    let list = []
    if(typeof urls === "string"){
        list[0]=urls
        console.log(urls)
    }
    else{
        urls.forEach((url)=>{
            list.push(url)
        })
    }
    const validUrls = [
        "http://20.244.56.144/numbers/fibo",
        "http://20.244.56.144/numbers/primes",
        "http://20.244.56.144/numbers/odd",
        "http://20.244.56.144/numbers/rand"
    ]
    let total = []
    list.forEach((url)=>{
        console.log(validUrls.includes(url))
        if(validUrls.includes(url)){
            axios({
                url: url,
                method: "GET",
              })
                .then((response) => {
                //   console.log(response.data.numbers);
                  const data = response.data.numbers
                  data.forEach((e)=>{
                    total.push(e)
                  })
             
                //   const uniqueArray = total.filter((value) => {
                //     return !total.includes(value - 1);
                //   });
                //   console.log("uniq ",uniqueArray); // [1, 2, 3, 4]
                  console.log("tot",total);
                })
                .catch((error) => {
                  res.send(error);
                });
            
        }
    })
    
    console.log("cbsdc", total)
    res.send(urls)
})


const port = 8080
app.listen(port,()=>{
    console.log(`Server running at ${port}`)
})