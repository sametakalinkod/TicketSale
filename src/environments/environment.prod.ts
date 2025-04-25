export const environment = {
    production: true,
    // apiUrl: 'https://dev.veboni.com/services/',
    //  hubUrl: 'https://apphub.veboni.com/serverHub',
    baseUrl: window.location.origin + '/delphinaquaserenity',
    apiUrl: 'https://betaapi.veboni.com/services/',
    hubUrl: 'https://hubbeta.veboni.com/serverHub',
    elasticSearchEndpoint: 'http://localhost:5010/services/elastic',
    appName: 'veboni',
    env: 'dev',
    apiEndpoint: '#{apiEndpoint}#',
    versionCheckUrl: 'https://adminbeta.veboni.com/version.json',
    appVersion: require('../../package.json').version,
}
