export default {
  storage: {
    fileName: 'database.xlsx',
    sheetNames: ['Sheet1', 'Sheet2', 'Sheet3', 'Sheet4'],
  },
  jobs: [
    {
      name: 'supplyMaticOnAave',
      args: ['0.000001'],
    },
    {
      name: 'supplyEthOnCompound',
      args: ['0.000001'],
    },
  ],
};
