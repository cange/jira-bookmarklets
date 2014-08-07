'use strict';

var xingJiraApp;
$.get('../build/main.min.css')
  .success(function (cssResources) {
    run(cssResources);
  }).complete(function () {
    run('');
  })
;
function run(cssResources) {
  // xingJiraApp = new xing.jira.Application(jQuery, cssResources);
  xingJiraApp = new xing.jira.Application(jQuery, cssResources, {layoutName: xing.core.table.layout.SCRUM_LAYOUT});
  xingJiraApp.showPopup();
  var AJS = {};
  AJS.messages = {};
  AJS.messages.success = function () {};
}
