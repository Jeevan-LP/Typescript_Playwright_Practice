import {test, expect} from '@playwright/test';

test('Ping - HealthCheck', async ({request})=>{

    test.setTimeout(0);
    while(true){
        const start=Date.now();
        const pingAPI=await request.get('https://restful-booker.herokuapp.com/ping');
        const end=Date.now();
        const responseTime=end-start;

        if(responseTime>1000){
            throw new Error(`API response time is greater than 1000 ms. Exceeds response Time: ${responseTime} ms`);
        }

        else{
        console.log(`Ping API Response Time: ${responseTime} ms`);
        console.log(`Ping API Status: ${pingAPI.statusText()} ${pingAPI.status()}`);
        expect(pingAPI.status()).toEqual(201);
        }
    }
})