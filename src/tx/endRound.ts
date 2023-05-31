import { FuzioNativePredictionClient } from "@fuzio/contracts/types/FuzioNativePrediction.client"

export const closeRound = async (client: FuzioNativePredictionClient) => {
	const status = await client.status()
	// const players = await client.getUsersPerRound({ roundId: status.bidding_round?.id ?? "0" })

	// const playerList = players.round_users
	const liveRoundremainTime = Number(status.live_round?.close_time) - Number(status.current_time)

	// const roundRestartAnywayTimer =
	// 	Number(status.live_round?.close_time) + 500000000000 - Number(status.current_time)
	// console.log(roundRestartAnywayTimer)

	// if (
	// 	status.live_round &&
	// 	Number(status.live_round?.close_time) + 500000000000 <= Number(status.current_time)
	// ) {
	// 	console.log("Waiting for longer than 5 minutes")
	// 	await client.closeRound("auto", `Fuzio | Closed Round ${status.live_round.id}`)
	// 	console.log(`=== Closed Round ${status.live_round.id} ===`)
	// } else {
	// 	if (playerList.length >= 2) {
	if (status.live_round && Number(status.live_round?.close_time) <= Number(status.current_time)) {
		await client.closeRound("auto", `Fuzio | Closed Round ${status.live_round.id}`)
		console.log(`=== Closed Round ${status.live_round.id} ===`)
	} else {
		console.log(`=== Current Round did not finish yet. ===`)
		console.log("Remaining Time:", Number(liveRoundremainTime / 1e9).toFixed(2))
	}
	// } else {
	// 	console.log(`=== Not Enough Players ===`)
	// 	console.log(`Waiting for ${2 - playerList.length} Players`)
	// }
}
