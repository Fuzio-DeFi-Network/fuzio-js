import { Elysia } from "elysia"
import cron from "./utils/cron"
import { CosmWasmClient, SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate"
import { contracts } from "@fuzio/contracts"
import { getStatus } from "./query/getStatus"
import { closeRound } from "./query/endRound"
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing"
import { swagger } from "@elysiajs/swagger"
import { GasPrice } from "@cosmjs/stargate"
import { Decimal } from "@cosmjs/math"

const signer = await DirectSecp256k1HdWallet.fromMnemonic(process.env.MNEMONIC ?? "", {
	prefix: "sei"
})

const signerAccount = await signer.getAccounts()

const signingCosmwasmClient = await SigningCosmWasmClient.connectWithSigner(
	"https://sei-testnet-rpc.orbitalcommand.io/",
	signer,
	{ gasPrice: new GasPrice(Decimal.fromAtomics("25000", 6), "usei") }
)

const {
	FuzioNativePrediction: { FuzioNativePredictionClient }
} = contracts

const client = new FuzioNativePredictionClient(
	signingCosmwasmClient,
	signerAccount[0].address,
	"sei1rzcalhgvcljxxsdhqkpr04437edr3fz6vlhpvlgh7sdzuh9px9rs60l060"
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
	.use(swagger())
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
