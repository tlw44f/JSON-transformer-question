Step 1: Fetch the data from the APIService fetchData function (returns a promise)  
Step 2: Return the array of customerRecords, apply all root properties to the record objects

- e.g. [{ customerEmail, VIN, serviceDate, shopName, shopStatus, companyCode}, ...]

Step 3. Remove customers that are in an 'opt out' list using the OptOutService isInOptOutList function  
Step 4: Return only service records done within last 30 days  
Step 5. Alphabetize all contents of array objects

Sample input json:

```
{
shopName: 'A Test Company',
shopStatus: 'LIVE',
companyCode: 'TESTCODE',
customerRecords: [
{
customerEmail: 'customer1@test.com',
VIN: 'TestVIN1',
serviceDate: "2019-06-12T17:00:00.000Z"
},
{
customerEmail: 'customer2@test.com',
VIN: 'TestVIN2',
serviceDate: "2019-06-21T17:00:00.000Z"
},
{
customerEmail: 'customer3@test.com',
VIN: 'TestVIN3',
serviceDate: "2019-06-17T17:00:00.000Z"
},
{
customerEmail: 'customer4@test.com',
VIN: 'TestVIN4',
serviceDate: "2019-03-07T17:00:00.000Z"
}
]
}

Sample output json (Exercise 1):
[
{
customerEmail: 'customer1@test.com',
VIN: 'TestVIN1',
serviceDate: "2019-06-12T17:00:00.000Z",
shopName: 'A Test Company',
shopStatus: 'LIVE',
companyCode: 'TESTCODE'
},
{
customerEmail: 'customer2@test.com',
VIN: 'TestVIN2',
serviceDate: "2019-06-21T17:00:00.000Z",
shopName: 'A Test Company',
shopStatus: 'LIVE',
companyCode: 'TESTCODE'
},
{
customerEmail: 'customer3@test.com',
VIN: 'TestVIN3',
serviceDate: "2019-06-17T17:00:00.000Z",
shopName: 'A Test Company',
shopStatus: 'LIVE',
companyCode: 'TESTCODE'
},
{
customerEmail: 'customer4@test.com',
VIN: 'TestVIN4',
serviceDate: "2019-03-07T17:00:00.000Z",
shopName: 'A Test Company',
shopStatus: 'LIVE',
companyCode: 'TESTCODE'
}
]
```
