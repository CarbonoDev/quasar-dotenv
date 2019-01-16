const { config, parse } = require('dotenv')

const defaultOptions = {
    encoding: 'utf8',
    examplePath: process.cwd()
}
module.exports = {
    config: function (options = {}) {

        const configOptions = { ...defaultOptions, ...options }
        const parsedEnv = config(configOptions)
        const quasarEnv = {}
        for (const key in parsedEnv) {
            if (parsedEnv.hasOwnProperty(key)) {
                quasarEnv[key] = JSON.stringify(parsedEnv[key])
            }
        }

        const fs = require('fs')
        const path = require('path')
        const encoding = configOptions.encoding
        const baseEnvPath = path.resolve(configOptions.examplePath, '.env.example')
        const baseEnvBuffer = fs.readFileSync(baseEnvPath, { encoding })
        const baseEnv = parse(baseEnvBuffer)
        for (const key in baseEnv) {
            if (baseEnv.hasOwnProperty(key)) {
                quasarEnv[key] = JSON.stringify(process.env[key])
            }
        }

        return quasarEnv
    }
}