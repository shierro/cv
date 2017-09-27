// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('nav') // Header
      .assert.elementPresent('main') // Main content
      .assert.elementPresent('aside') // Drawer
      .assert.elementPresent('.employment')
      .assert.containsText('.toolbar__title', 'Employment')
      .assert.elementCount('img', 1)
      .assert.elementCount('.drawer__nav-list li', 6)
      .end()
  }
}
