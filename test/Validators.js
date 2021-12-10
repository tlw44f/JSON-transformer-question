const expectedKeys = ['companyCode', 'customerEmail', 'serviceDate', 'shopName', 'shopStatus', 'VIN']
class Validation {
	static testStep1(output) {
		console.assert(Array.isArray(output), 'Function returns an array')
		console.assert(output.length > 0, 'Array should not be empty')
	}
	static testStep2(output) {
		console.assert(
			output.every((record) => Object.keys(record).every((key) => expectedKeys.includes(key))),
			'Each record contains only the required keys'
		)
		console.assert(
			output.every((record) => expectedKeys.every((key) => record.hasOwnProperty(key))),
			'Each record contains all of the required keys'
		)
		// Not a great test but at least we check to see if values are being assigned
		console.assert(
			output.every((record) => Object.values(record).every((value) => typeof value === 'string')),
			'Each record contains values as strings'
		)
	}
	static testStep3(output) {
		output.forEach((record) =>
			console.assert(
				!OptOutService.isInOptOutList(record.customerEmail),
				`${record.customerEmail} has opted out of the list!`
			)
		)
	}

	static testStep4(output) {
		const t = new Date().setDate(new Date().getDate() - 30)
		output.forEach((record) =>
			console.assert(
				t < Date.parse(record.serviceDate),
				`Each record is within the last 30 days. Received ${record.serviceDate} in \n${JSON.stringify(record, null, 2)}`
			)
		)
	}

	static testStep5(output) {
		output.forEach((record) => {
			Object.keys(record).forEach((key, index) =>
				console.assert(
					expectedKeys.indexOf(key) === index,
					`Expected key "${key}" to be in the ${expectedKeys.indexOf(key)} spot of the object`
				)
			)
		})
	}
}

module.exports = Validation
