## Run Cloud Functions locally

```bash
npm install
npm start 
```

Now we can run cloud sploit to generate the data.

```bash
node index.js --cloud aws --config ./config.js --json=output.sarif.json --plugin s3Encryption --sarifEndpoint=http://localhost:3000
```