chrome.runtime.onMessage.addListener(
  function(results, _, sendResponse) {
    // TODO: This is super unsafe because the instance currently accepts requests from all IPv4s.
    fetch("http://ec2-3-134-244-173.us-east-2.compute.amazonaws.com:5000/fbeac", {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(results)
    });
    sendResponse({count: results.length});
  }
)