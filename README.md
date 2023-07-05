# @fuzio/contracts

```sh
npm install @fuzio/contracts
yarn add @fuzio/contracts
pnpm install @fuzio/contracts
```

## Fuzio Network TypeScript Bundle

### Clients

All contracts are scoped under the `contracts` object:

```js
import { contracts } from "@fuzio/contracts"
const { FuzioNativePrediction } = contracts
```

Then each contract will have clients, for example for `FuzioNativePrediction`:

```ts
const {
 FuzioNativePredictionClient,
 FuzioNativePredictionMessageComposer,
 FuzioNativePredictionQueryClient
} = FuzioNativePrediction
```

## Credits

🛠 Built by [Digital Kitchen](https://digitalkitchen.zone/stake), based on [Cosmology ⚛️](https://cosmology.tech/validator) goodness!

Using CosmWasm TS Codegen:

-  [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) for generated CosmWasm contract Typescript classes
