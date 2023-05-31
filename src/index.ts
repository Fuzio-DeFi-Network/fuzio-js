import { Elysia } from "elysia"
import cron from "./utils/cron"
import { CosmWasmClient, SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate"
import { contracts } from "@fuzio/contracts"
import { getStatus } from "./query/getStatus"
import { closeRound } from "./tx/endRound"
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing"
import { swagger } from "@elysiajs/swagger"
import { GasPrice } from "@cosmjs/stargate"
import { Decimal } from "@cosmjs/math"

const signer = await DirectSecp256k1HdWallet.fromMnemonic(process.env.MNEMONIC ?? "", {
	prefix: "sei"
})

const signerAccount = await signer.getAccounts()

const signingCosmwasmClient = await SigningCosmWasmClient.connectWithSigner(
	"https://sei.kingnodes.com",
	signer,
	{ gasPrice: new GasPrice(Decimal.fromAtomics("25000", 6), "usei") }
)

const {
	FuzioNativePrediction: { FuzioNativePredictionClient }
} = contracts

const client = new FuzioNativePredictionClient(
	signingCosmwasmClient,
	signerAccount[0].address,
	"sei14n07r30dhcxnym2p2mahcd9my2nqfeq55a0jwdpph59cgumhhj4smp4974"
)

const app = new Elysia()
	.get(
		"/",
		() => `
                                  _____________
                           __,---'::.-  -::_ _ '-----.___      ______
                       _,-'::_  ::-  -  -. _   ::-::_   .'--,'   :: .:'-._
                    -'_ ::   _  ::_ .:   :: - _ .:   ::- _/ ::   ,-. ::. '-._
                _,-'   ::-  ::        ::-  _ ::  -  ::     |  .: ((|))      ::'
        ___,---'   ::    ::    ;::   ::     :.- _ ::._  :: | :    '_____::..--'
    ,-""  ::  ::.   ,------.  (.  ::  |  ::  ::  ,-- :. _  :'. ::  |       '-._
   '     ::   '   _._.:_  :.)___,-------------._ :: ____'-._ '._ ::'--...___; ;
 ;:::. ,--'--"""""      /  /                     |. |     ''-----''''---------'
;  '::;              _ /.:/_,                    _|.:|_,
|    ;             ='-//||--"                  ='-//||--"
'   .|               ''  ''                     ''  ''
 |::'|
  |   |    🦎🦎🦎 Congratulations, you found this service. Much love from the Fuzio team <3 🦎🦎🦎
   '..:'.
     '.  '--.____
       '-:______ '-._
                '---'
`
	)
	.get("/status", async () => await getStatus(client))
	.use(
		swagger({
			documentation: {
				info: {
					title: "Fuzio Prediction Service",
					version: "1.0.0",
					description: "API Routes for the Fuzio Prediction game",
					contact: { name: "Telegram", url: "https://fuzio.network/social/telegram" }
				}
			}
		})
	)
	.use(
		cron({
			name: "Close Round",
			pattern: "*/5 * * * * *",
			async run() {
				await closeRound(client)
			}
		})
	)
	.listen(3000)

console.log(`🦎 Fuzio Service Runner started at ${app.server?.hostname}:${app.server?.port}`)
console.log(`
                                  _____________
                           __,---'::.-  -::_ _ '-----.___      ______
                       _,-'::_  ::-  -  -. _   ::-::_   .'--,'   :: .:'-._
                    -'_ ::   _  ::_ .:   :: - _ .:   ::- _/ ::   ,-. ::. '-._
                _,-'   ::-  ::        ::-  _ ::  -  ::     |  .: ((|))      ::'
        ___,---'   ::    ::    ;::   ::     :.- _ ::._  :: | :    '_____::..--'
    ,-""  ::  ::.   ,------.  (.  ::  |  ::  ::  ,-- :. _  :'. ::  |       '-._
   '     ::   '   _._.:_  :.)___,-------------._ :: ____'-._ '._ ::'--...___; ;
 ;:::. ,--'--"""""      /  /                     |. |     ''-----''''---------'
;  '::;              _ /.:/_,                    _|.:|_,
|    ;             ='-//||--"                  ='-//||--"
'   .|               ''  ''                     ''  ''
 |::'|
  |   |
   '..:'.
     '.  '--.____
       '-:______ '-._
                '---'
`)
