const entrypoints = [
	"./src/index.ts",
	"./src/FuzioIDOInfo.client",
	"./src/FuzioIDOInfo.message-composer.ts",
	"./src/FuzioIDOInfo.msg-builder",
	"./src/FuzioIDOInfo.types",
	"./src/FuzioNativeIDO.client",
	"./src/FuzioNativeIDO.message-composer.ts",
	"./src/FuzioNativeIDO.msg-builder",
	"./src/FuzioNativeIDO.types",
	"./src/FuzioNativePrediction.client",
	"./src/FuzioNativePrediction.message-composer.ts",
	"./src/FuzioNativePrediction.msg-builder",
	"./src/FuzioNativePrediction.types",
	"./src/FuzioPool.client",
	"./src/FuzioPool.message-composer.ts",
	"./src/FuzioPool.msg-builder",
	"./src/FuzioPool.types",
	"./src/FuzioPoolList.client",
	"./src/FuzioPoolList.message-composer.ts",
	"./src/FuzioPoolList.msg-builder",
	"./src/FuzioPoolList.types",
	"./src/FuzioStaking.client",
	"./src/FuzioStaking.message-composer.ts",
	"./src/FuzioStaking.msg-builder",
	"./src/FuzioStaking.types"
]

const build = async () => {
	const { outputs, success, logs } = await Bun.build({
		entrypoints,
		outdir: "./main",
		target: "bun",
		format: "esm",
		splitting: true,
		minify: true,
		external: ["type-fest", "protobufjs"]
	})

	if (!success) {
		console.error("Build Failed!")
		for (const message of logs) {
			// Bun will pretty print the message object
			console.error(message)
		}
	}

	if (success) {
		console.info("Build Successful!")
		for (const message of logs) {
			// Bun will pretty print the message object
			console.log(message)
		}
	}
}

build()
