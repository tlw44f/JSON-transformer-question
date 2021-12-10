const DataFetcher = require('./src/index')
const Validation = require('./test/Validators')

async function run() {
	const result = await DataFetcher.fetch()
	console.log(`Resulting data structure:\n ${JSON.stringify(result, null, 2)}`)

	// Validation.testStep1(result)
	// Validation.testStep2(result)
	// Validation.testStep3(result)
	// Validation.testStep4(result)
	// Validation.testStep5(result)
}

run()
