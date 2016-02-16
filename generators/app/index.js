'use strict'
var yeoman = require('yeoman-generator')
var chalk = require('chalk')
var yosay = require('yosay')

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async()

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the mind-blowing ' + chalk.red('generator-zewo') + ' generator!'
    ))

    var prompts = [{
      name: 'applicationName',
      message: 'What\'s the name of your next awesome Zewo application?',
      default: 'zewo-server'
    }]

    this.prompt(prompts, function (props) {
      this.props = props
      this.applicationName = props.applicationName
      // To access props later use this.props.applicationName;

      done()
    }.bind(this))
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('Package.swift'),
      this.destinationPath(this.applicationName + '/Package.swift')
    )
    this.fs.copy(
      this.templatePath('main.swift'),
      this.destinationPath(this.applicationName + '/Source/main.swift')
    )
  },

  install: function () {
  }
})
