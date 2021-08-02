import * as core from '@actions/core'
const createMatrix = (platform) => {
    switch(platform){
        default:
            core.setOutput('matrix', `{\"platform\":[\"${platform}-latest\"]}`)
            break;
    }
}
const platform = core.getInput('os');
createMatrix(platform)
