import { FuzioNativePredictionClient } from "@fuzio/contracts/types/FuzioNativePrediction.client"

export const closeRound = async (client: FuzioNativePredictionClient) => {
	const status = await client.status()

	const liveRoundremainTime = Number(status.live_round?.close_time) - Number(status.current_time)

	if (status.live_round && status.live_round?.close_time <= status.current_time) {
		const tx = await client.closeRound("auto", `Fuzio | Closed Round ${status.live_round.id}`)
		console.log(`=== Closed Round ${status.live_round.id} ===`)
	} else {
		console.log(`=== Current Round did not finish yet. ===`)
		console.log("Remaining Time:", liveRoundremainTime / 1e9)
	}
}
