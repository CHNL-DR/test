const core = require('@actions/core');
const github = require('@actions/github');

// Some change...


async function run() {
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
}

// Another change
run().catch(console.error);

