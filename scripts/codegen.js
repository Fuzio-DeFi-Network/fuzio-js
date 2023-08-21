import codegen from "@cosmwasm/ts-codegen"
import { join, resolve } from "node:path"

// eslint-disable-next-line unicorn/prefer-module
const contractsDirectory = resolve(join(__dirname, "../contracts"))
const contracts = [
	{
		dir: join(contractsDirectory, "fuzio-prediction"),
		name: "FuzioNativePrediction"
	},
	{
		dir: join(contractsDirectory, "fuzio-ido"),
		name: "FuzioNativeIDO"
	},
	{
		dir: join(contractsDirectory, "fuzio-ido-info"),
		name: "FuzioIDOInfo"
	},
	{
		dir: join(contractsDirectory, "fuzio-pool"),
		name: "FuzioPool"
	},
	{
		dir: join(contractsDirectory, "fuzio-pool-list"),
		name: "FuzioPoolList"
	},
	{
		dir: join(contractsDirectory, "fuzio-staking"),
		name: "FuzioStaking"
	},
	{
		dir: join(contractsDirectory, "cw20-base"),
		name: "CW20"
	}
]

codegen({
	contracts,
	options: {
		bundle: {
			bundleFile: "index.ts",
			enabled: true,
			scope: "contracts"
		},
		client: {
			enabled: true,
			execExtendsQuery: false
		},
		messageBuilder: {
			enabled: true
		},
		messageComposer: {
			enabled: true
		},
		reactQuery: {
			// camelize: true,
			enabled: false,
			// mutations: true,
			// queryFactory: true,
			// queryKeys: true,
			// version: "v4"
		},
		types: {
			aliasEntryPoints: true,
			aliasExecuteMsg: true,
			enabled: true
		}
	},
	// eslint-disable-next-line unicorn/prefer-module
	outPath: join(__dirname, "../src")
})
	.then(() => {
		// eslint-disable-next-line no-console
		console.log("✨ Generated Fuzio types package!")
	})
	.catch((error) => {
		// eslint-disable-next-line no-console
		console.error(error)
		throw new Error(error)
	})
