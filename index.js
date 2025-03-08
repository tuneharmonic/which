const core = require('@actions/core');
const io = require('@actions/io');

async function run() {
    try {
        const command = core.getInput('command', { required: true });
        console.log(`Finding command: ${command}`);

        const failOnNotFound = core.getBooleanInput('fail-on-not-found')
    
        const path = await io.which(command, failOnNotFound);

        if (path) {
            console.log(`Found command: ${command} at path: ${path}`);
        }
        else {
            console.warn(`Unable to find command: ${command}. Setting path as an empty string and continuing.`);
        }
    
        core.setOutput('path', path);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();