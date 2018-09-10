module.exports = {
  "plugins": {
    "local": {
      "browsers": [ "chrome" ]
    },
    "sauce": {
      "disabled": true,
      "browsers": [
        {
          "browserName":  "chrome",
          "platform":     "OS X 10.13"
        },
        {
          "browserName":  "firefox",
          "platform":     "OS X 10.13"
        },
        {
          "browserName":  "microsoftedge",
          "platform":     "Windows 10",
          "version":      ""
        },
        {
          "browserName":  "safari",
          "platform":     "OS X 10.13",
          "version":      "11"
        },
      ]
    }
  }
}
