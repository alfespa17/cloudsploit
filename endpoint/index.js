const functions = require('@google-cloud/functions-framework');

const responseBody = {
  "status": "ok"
}

const responseBodyError = {
  "status": "error"
}

/**
 * Responds to an HTTP request using data from the request body parsed according
 * to the "content-type" header.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
functions.http('helloHttp', (req, res) => {
  
  if (req.headers['content-type'] === "application/json" && req.method === "POST") {
    let body = req.body

    console.log("Processing Request!")
    console.log(`Tool: ${body.runs[0].tool.driver.name}`)
    console.log(`Version: ${body.runs[0].tool.driver.name}`)
    console.log(`Information Uri: ${body.runs[0].tool.driver.informationUri}`)
  
    body.runs[0].results.forEach(element => {
      console.log("*******************")
      console.log(`Level: ${element.level}`)
      console.log(`Message: ${element.message.text}`)
      console.log(`artifactLocation: ${element.locations[0].physicalLocation.artifactLocation.uri}`)
    });
    res.status(201).send(JSON.stringify(responseBody))
  } else {
    res.status(400).send(JSON.stringify(responseBodyError))
  }
  
});