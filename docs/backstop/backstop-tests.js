const backstop = require('backstopjs');
const fs = require('fs');
const Path = require('path');

const command = process.argv[2];
const testId = process.argv[3];

const config = {
    "id": "ias-bootstrap",
    "viewports": [
        {
            "label": "minimal",
            "width": 800,
            "height": 600
        }
    ],
    "onBeforeScript": "puppet/onBefore.js",
    "onReadyScript": "puppet/onReady.js",
    "misMatchThreshold": 0.0000000001,
    "paths": {
        "bitmaps_reference": "backstop/data/bitmaps_reference",
        "bitmaps_test": "backstop/data/bitmaps_test",
        "engine_scripts": "backstop/data/engine_scripts",
        "html_report": "backstop/data/html_report",
        "ci_report": "backstop/data/ci_report"
    },
    "report": [
        "browser"
    ],
    "engine": "puppeteer",
    "engineOptions": {
        "args": [
            "--no-sandbox"
        ]
    },
    "asyncCaptureLimit": 5,
    "asyncCompareLimit": 50,
    "debug": false,
    "debugWindow": false
};

if (testId) {
    backstop(command, {
        config: Object.assign(config, require(`./tests/${testId}.json`))
    });
} else {
    console.log('Running all tests...');

    let allScenarios = [];

    fs.readdirSync('./backstop/tests')
        .filter(item => Path.extname(item) === '.json')
        .forEach(fileName => {
            const testId = Path.basename(fileName, '.json');
            allScenarios = allScenarios.concat(require(`./tests/${testId}.json`).scenarios);
        });

    backstop(command, {
        config: Object.assign(config, {
            scenarios: allScenarios
        })
    });
}
