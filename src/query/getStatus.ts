import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate"
import { FuzioNativePredictionQueryClient } from "@fuzio/contracts/types/FuzioNativePrediction.client"

export const getStatus = async (queryClient: FuzioNativePredictionQueryClient) => {
	// const fetchStatus = async () => {

	// 	return status
	// }

	const status = await queryClient.status()
	return status

	// queryClient.finishedRound()

	// fetchStatus()
}