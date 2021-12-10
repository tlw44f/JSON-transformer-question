class OptOutService {
	/**
	 * @param {string} email
	 * @returns {boolean} true/false
	 */
	static isInOptOutList(email) {
		const optOutList = [
			'optOut1@test.net',
			'optOut2@test.net',
			'optOut3@test.net',
			'optOut4@test.net',
			'optOut5@test.net',
			'optOut6@test.net',
			'customer2@test.com'
		]

		return optOutList.includes(email.toLowerCase())
	}
}
module.exports = OptOutService
