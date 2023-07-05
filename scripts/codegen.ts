import { join, resolve } from "path"
import codegen from "@cosmwasm/ts-codegen"

const contractsDir = resolve(join(import.meta.dir, "../contracts"))
const contracts = [
	{
		name: "FuzioNativePrediction",
		dir: join(contractsDir, "fuzio-prediction")
	},
	{
		name: "FuzioNativeIDO",
		dir: join(contractsDir, "fuzio-ido")
	},
	{
		name: "FuzioIDOInfo",
		dir: join(contractsDir, "fuzio-ido-info")
	},
	{
		name: "FuzioPool",
		dir: join(contractsDir, "fuzio-pool")
	},
	{
		name: "FuzioPoolList",
		dir: join(contractsDir, "fuzio-pool-list")
	},
	{
		name: "FuzioStaking",
		dir: join(contractsDir, "fuzio-staking")
	}
]

codegen({
	contracts,
	outPath: join(import.meta.dir, "../src"),
	options: {
		bundle: {
			enabled: true,
			bundleFile: "index.ts",
			scope: "contracts"
		},
		types: {
			enabled: true,
			aliasExecuteMsg: true,
			aliasEntryPoints: true
		},
		client: {
			enabled: true,
			execExtendsQuery: true
		},
		messageComposer: {
			enabled: true
		},
		msgBuilder: {
			enabled: true
		}
	}
})
	.then(() => {
		console.log("✨ Generated Fuzio types package!")
	})
	.catch((e) => {
		console.error(e)
		process.exit(1)
	})
