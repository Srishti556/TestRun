module.exports = {
  'Search Nightwatch on DuckDuckGo': function(browser) {
    browser
      .url('https://duckduckgo.com/')
      .waitForElementVisible('body', 10000)
      .assert.title('DuckDuckGo — Privacy, simplified.')
      .assert.visible('input[name=q]')

      .setValue('input[name=q]', 'nightwatchjs')
      .pause(2000)
      .click('button[type="submit"]')
      .pause(2000)

      .assert.containsText('.zcm__link', 'All')

      .end();
  }
};
