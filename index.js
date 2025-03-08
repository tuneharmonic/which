const core = require('@actions/core');
const io = require('@actions/io');

async function run() {
    try {
        const command = core.getInput('command');
        console.log(`Finding command: ${command}`);
    
        const path = await io.which(command, true);
    
        console.log(`Found command: ${command} at path: ${path}`);
        core.setOutput('path', path);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();