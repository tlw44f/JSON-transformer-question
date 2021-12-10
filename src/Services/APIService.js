class APIService {
	static fetchShopData() {
		return Promise.resolve({
			shopName: 'A Test Company',
			shopStatus: 'LIVE',
			companyCode: 'TESTCODE',
			customerRecords: [
				{
					customerEmail: 'customer1@test.com',
					VIN: 'TestVIN1',
					serviceDate: '2020-12-12T17:00:00.000Z'
				},
				{
					customerEmail: 'customer2@test.com',
					VIN: 'TestVIN2',
					serviceDate: '2020-12-21T17:00:00.000Z'
				},
				{
					customerEmail: 'customer3@test.com',
					VIN: 'TestVIN3',
					serviceDate: '2020-11-17T17:00:00.000Z'
				},
				{
					customerEmail: 'customer4@test.com',
					VIN: 'TestVIN4',
					serviceDate: '2020-11-07T17:00:00.000Z'
				}
			]
		})
	}
}
module.exports = APIService
