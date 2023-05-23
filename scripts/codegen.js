import { join, resolve } from 'path';
import codegen from '@cosmwasm/ts-codegen';

const contractsDir = resolve(join(__dirname, '../contracts'));
const contracts = [
  {
    name: 'FuzioNativePrediction',
    dir: join(contractsDir, 'fuzio-prediction')
  },
  {
    name: 'FuzioNativeIDO',
    dir: join(contractsDir, 'fuzio-ido')
  },
  {
    name: 'FuzioIDOInfo',
    dir: join(contractsDir, 'fuzio-ido-info')
  }
];

codegen({
  contracts,
  outPath: join(__dirname, '../src'),
  options: {
    bundle: {
      enabled: true,
      bundleFile: 'index.ts',
      scope: 'contracts'
    },
    types: {
      enabled: true,
      aliasExecuteMsg: true
    },
    client: {
      enabled: true,
      execExtendsQuery: true
    },
    messageComposer: {
      enabled: true
    }
  }
})
  .then(() => {
    console.log('✨ Generated Fuzio types package!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
