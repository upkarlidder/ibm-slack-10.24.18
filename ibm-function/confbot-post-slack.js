var https = require('https');

function postSlack(result) {
    const urlChatPost = result.urlChatPost;
    const channel = result.channel;
    const botUserToken = result.botUserToken;
    const auth = "Bearer " + botUserToken;

    const data = {
        "attachments": buildAttachments(result.tracks),
        "channel": channel
    }

    var post_options = {
        host: 'slack.com',
        path: '/api/chat.postMessage',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': auth
        }
    };

    // Set up the request
    var post_req = https.request(post_options, function (res) {
        console.log(`STATUS: ${res.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            console.log('Response: ' + chunk);
        });

        res.on('error', function (chunk) {
            console.log('Response: ' + chunk);
        });

        res.on('end', () => {
            console.log('No more data in response.');
        });
    });

    // post the data
    post_req.write(JSON.stringify(data));
    post_req.end();
    return (result);
}

function buildAttachments(result) {
    var attachments = [];

    let docs = result.docs;
    docs.forEach(function (doc) {
        var curr_talk = {
            "fallback": "Required plain-text summary of the attachment.",
            "author_name": doc.author,
            "title": doc.title,
            "text": doc.desc,
            "footer": "IBM Watson",
            "footer_icon": "https://www.add-for.com/wp-content/uploads/2017/12/TESI-06-IBM-Watson-Logo.png",
            "ts": 123456789
        }
        attachments.push(curr_talk);
    })
    return (attachments);
}


function main(args) {
    return new Promise(function (resolve, reject) {
        postSlack(args);
        resolve({});
    })
}