import {test, expect} from '@playwright/test';

test.describe.serial('API Testing booker.herokuapp.spec', ()=>{
    
    const APIurl:string='https://restful-booker.herokuapp.com';
    let bookingID:number;
    let authToken:string;

        //=============================================Post Request API==================================================
        test('Post Request API', async ({request})=>{
        //Generating token for authentication
        const authHeaders = {
            'Content-Type': 'application/json'
        }

        const authdata = {
            "username" : "admin",
            "password" : "password123"
        }
        const authAPI=await request.post(`${APIurl}/auth`, {headers:authHeaders, data:authdata});
        const token=await authAPI.json();
        authToken=token.token;
        expect(authToken).not.toBeNull();
        console.log('token for authentication: ', authToken);
        
        const headersData={
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

        const postData={
            "firstname" : "Jim",
            "lastname" : "Brown",
            "totalprice" : 111,
            "depositpaid" : true,
                "bookingdates" : {
                "checkin" : "2018-01-01",
                "checkout" : "2019-01-01"
                },
            "additionalneeds" : "Breakfast"
        }

        const postAPI=await request.post(`${APIurl}/booking`, {headers:headersData, data:postData});
        //console.log(postAPI);

        const postAPIStatusCode:number=postAPI.status();
        console.log('postAPI status code: ', postAPIStatusCode);

        const postAPIStatusText:string=postAPI.statusText();
        console.log('postAPI status text: ', postAPIStatusText);

        const postAPIjsonData:any=await postAPI.json();
        console.log('postAPI JSON data: ', postAPIjsonData);

        const postAPIbody=await postAPI.body();
        console.log('postAPI body: ', postAPIbody);

        const postAPIheaders=postAPI.headers();
        console.log('postAPI headers: ', postAPIheaders);

        const postAPIstatus:boolean=postAPI.ok();
        console.log('postAPI ok: ', postAPIstatus);

        const postAPItext:string=await postAPI.text();
        console.log('postAPI texts: ', postAPItext);

        const postAPIurl:string=postAPI.url();
        console.log('postAPI url: ', postAPIurl);

        bookingID=postAPIjsonData.bookingid;
        console.log('bookingid: ', bookingID);
        expect(bookingID).not.toBeNull();
        
        //------------------------------------------------------validation----------------------------------------------
        expect(postAPIStatusText).toBe('OK');
        expect(postAPIjsonData.booking).toHaveProperty('firstname', 'Jim');
        expect(postAPIjsonData.booking.bookingdates).toHaveProperty("checkin", "2018-01-01");
        expect(postAPIbody.length).toBeGreaterThan(5);
        expect(postAPIheaders).toHaveProperty('server', 'Heroku');
        expect(postAPIstatus).toBeTruthy();
        expect(postAPItext).toContain('bookingid');
        expect(postAPIurl).toEqual(`${APIurl}/booking`);
        })

        //=============================================Get Request API==================================================
        test('Get Request API', async ({request})=>{

        const getAPI=await request.get(`${APIurl}/booking/${bookingID}`);
        //console.log(getAPI);

        const getAPIStatusCode:number=getAPI.status();
        console.log('getAPI status code: ', getAPIStatusCode);

        const getAPIStatusText:string=getAPI.statusText();
        console.log('getAPI status text: ', getAPIStatusText);

        const getAPIjsonData:any=await getAPI.json();
        console.log('getAPI JSON data: ', getAPIjsonData);

        const getAPIbody=await getAPI.body();
        console.log('getAPI body: ', getAPIbody);

        const getAPIheaders=getAPI.headers();
        console.log('getAPI headers: ', getAPIheaders);

        const getAPIstatus:boolean=getAPI.ok();
        console.log('getAPI ok: ', getAPIstatus);

        const getAPItext:string=await getAPI.text();
        console.log('getAPI texts: ', getAPItext);

        const getAPIurl:string=getAPI.url();
        console.log('getAPI url: ', getAPIurl);

        //------------------------------------------------------validation----------------------------------------------
        expect(getAPIStatusCode).toEqual(200);
        expect(getAPIStatusText).toBe('OK');
        expect(getAPIjsonData).toHaveProperty('additionalneeds', 'Breakfast');
        expect(getAPIjsonData.bookingdates).toHaveProperty('checkin');
        expect(getAPIbody.length).toBeGreaterThan(5);
        expect(getAPIheaders).toHaveProperty('server');
        expect(getAPIstatus).toBeTruthy();
        expect(getAPItext).toContain('firstname');
        expect(getAPIurl).toEqual(`${APIurl}/booking/${bookingID}`);
        })

        //=============================================Put Request API==================================================
        test('Put Request API', async ({request})=>{

        const headersData={
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Cookie': `token=${authToken}`
        }

        const putData={
            "firstname" : "Jeevan",
            "lastname" : "L P",
            "totalprice" : 2709,
            "depositpaid" : false,
                "bookingdates" : {
                "checkin" : "2001-09-27",
                "checkout" : "2026-11-09"
                },
            "additionalneeds" : "Lunch"
        }

        const putAPI=await request.put(`${APIurl}/booking/${bookingID}`, {headers:headersData, data:putData});
        //console.log(putAPI);

        const putAPIStatusCode:number=putAPI.status();
        console.log('putAPI status code: ', putAPIStatusCode);

        const putAPIStatusText:string=putAPI.statusText();
        console.log('putAPI status text: ', putAPIStatusText);

        const putAPIjsonData:any=await putAPI.json();
        console.log('putAPI JSON data: ', putAPIjsonData);

        const putAPIbody=await putAPI.body();
        console.log('putAPI body: ', putAPIbody);

        const putAPIheaders=putAPI.headers();
        console.log('putAPI headers: ', putAPIheaders);

        const putAPIstatus:boolean=putAPI.ok();
        console.log('putAPI ok: ', putAPIstatus);

        const putAPItext:string=await putAPI.text();
        console.log('putAPI texts: ', putAPItext);

        const putAPIurl:string=putAPI.url();
        console.log('putAPI url: ', putAPIurl);

        //------------------------------------------------------validation----------------------------------------------
        expect(putAPIStatusCode).toEqual(200);
        expect(putAPIStatusText).toBe('OK');
        expect(putAPIjsonData).toHaveProperty('firstname', 'Jeevan');
        expect(putAPIjsonData.bookingdates).toHaveProperty("checkin", "2001-09-27");
        expect(putAPIbody.length).toBeGreaterThan(5);
        expect(putAPIheaders).toHaveProperty('server', 'Heroku');
        expect(putAPIstatus).toBeTruthy();
        expect(putAPItext).toContain('2709');
        expect(putAPIurl).toEqual(`${APIurl}/booking/${bookingID}`);
    })

        //=============================================Patch Request API==================================================
        test('Patch Request API', async ({request})=>{

            const headersData={
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Cookie': `token=${authToken}`
            }

            const patchData={
                "firstname" : "Appu",
                "lastname" : "A J"
            }

            const patchAPI=await request.patch(`${APIurl}/booking/${bookingID}}`, {headers:headersData, data:patchData});
            //console.log(patchAPI);

            const patchAPIStatusCode:number=patchAPI.status();
            console.log('patchAPI status code: ', patchAPIStatusCode);

            const patchAPIjsonData:any=await patchAPI.json();
            console.log('patchAPI JSON data: ', patchAPIjsonData);

            const patchAPIurl:string=patchAPI.url();
            console.log('patchAPI url: ', patchAPIurl);

            //------------------------------------------------------validation----------------------------------------------
            expect(patchAPIStatusCode).toEqual(200);
            expect(patchAPIjsonData).toHaveProperty('firstname', 'Appu');
            expect(patchAPIurl).toEqual(`${APIurl}/booking/${bookingID}%7D`);
        })

        //=============================================Patch Request API==================================================
        test('Delete Request API', async ({request})=>{

            const headersData={
                'Content-Type': 'application/json', 
                'Cookie': `token=${authToken}`
            }
            const deleteAPI=await request.delete(`${APIurl}/booking/${bookingID}`, {headers:headersData});
            //console.log(deleteAPI);

            const deleteAPIStatusCode:number=deleteAPI.status();
            console.log('deleteAPI status code: ', deleteAPIStatusCode);

            const deleteAPIStatusText:string=deleteAPI.statusText();
            console.log('deleteAPI status text: ', deleteAPIStatusText);

            const deleteAPIurl:string=deleteAPI.url();
            console.log('deleteAPI url: ', deleteAPIurl);

            //------------------------------------------------------validation----------------------------------------------
            expect(deleteAPIStatusCode).toEqual(201);
            expect(deleteAPIStatusText).toBe('Created');
            expect(deleteAPIurl).toEqual(`${APIurl}/booking/${bookingID}`);
        })

        //=============================================Updated Get Request API==================================================
        test("Updated Get Request API", async({request})=>{

            const updatedGetAPI=await request.get(`${APIurl}/booking/${bookingID}`);
            const updatedGetAPIStatusCode:number=updatedGetAPI.status();
            console.log('updatedGetAPI status code: ', updatedGetAPIStatusCode);

            const updatedGetAPIStatusText:string=updatedGetAPI.statusText();
            console.log('updatedGetAPI status text: ', updatedGetAPIStatusText);

            const updatedGetAPIUrl:string=updatedGetAPI.url();
            console.log('updatedGetAPI url: ', updatedGetAPIUrl);   
            
            //------------------------------------------------------validation----------------------------------------------
            expect(updatedGetAPIStatusCode).toEqual(404);
            expect(updatedGetAPIStatusText).toBe('Not Found');
            expect(updatedGetAPIUrl).toEqual(`${APIurl}/booking/${bookingID}`);
        })
})