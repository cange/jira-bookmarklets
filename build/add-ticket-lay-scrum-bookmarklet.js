javascript:void(function(){var Namespace=function(a){"use strict";return{create:function(b){for(var c,d=a,e=b.split("."),f=e.length,g=0;f>g;g++)c=e[g],d=d[c]=d[c]||{}},is:function(b,c){var d,e,f,g=a,h=!1,i=0;for("object"==typeof b?g=b:c=b,e=c.split("."),d=e.length;d>i;i++){if(f=e[i],!g[f])return h=!1,!1;g=g[f],h=!0}return h}}}(this);String.prototype.truncate=function(a){"use strict";var b=this.length,c="…",d=c.length,e=this;return b>a&&(e=this.substr(0,a-d)+c),e},String.prototype.trimWhitespace=function(){"use strict";return this.replace(/\s+/g," ").split(/\n/).join(" ")},String.prototype.toArray=function(a){"use strict";return a=new RegExp(a||","),this.split(a)},Namespace.create("xing.core.helpers"),xing.core.helpers.isArray=function(a){"use strict";return"[object Array]"===Object.prototype.toString.call(a)},xing.core.helpers.isObject=function(a){"use strict";return"[object Object]"===Object.prototype.toString.call(a)},Namespace.create("xing.core"),xing.core.I18n=function(){"use strict";this.en={messages:{ticketCached:{title:"Ticket print",body:"Ticket is stored! Please navigate to another if you want print one ticket more."}},modal:{collaboratorPrompt:'Please enter your collaborators!\nNote: Separate the names with a comma e.g. "Jeffrey, Walter"',heading:"Print preview",select:"Select another:",action:{addCollaborator:"Collaborators",remove:"Remove ticket form the list",print:"Print",cancel:"Cancel"},ticketCount:"You are printing tickets",pageCount:" on pages"},ticket:{collaborator:{title:"Pairing partner",action:'<button class="aui-button gm-change-collaborators gm-snap-right gm-print-hidden">Collaborators</button>'},component:{title:"Component"},closed:{title:"End date",body:"Day | Time"},created:{title:"Created"},description:{title:"Description"},dueDate:{title:"Due date"},reporter:{title:"Reporter"},storyPoints:{title:"Story Points"},target:{title:"Target"},type:{title:"Type"},start:{title:"Start Progress",body:"Day | Time"}}},this.local=function(a){return this[a||"en"]}},Namespace.create("xing.core"),xing.core.Markup=function(){"use strict";var a=this;a.ticketPanel=function(a){return'<div class="gm-ticket-action-panel gm-print-hidden"><button type="button" class="aui-button js-gm-remove-ticket"><i class="aui-icon aui-icon-small aui-iconfont-remove"></i>'+a+"</button></div>"},a.dialogHeader=function(a){return'<header class="jira-dialog-heading gm-print-hidden"><h2>'+a+"</h2></header>"},a.dialogFooter=function(a,b,c){return'<footer class="buttons-container form-footer gm-print-hidden"><div class="buttons"><label for="gm-select-ticket">'+a+'</label>&nbsp;<button id="gm-select-ticket" class="js-gm-pick-more aui-button" title="'+a+'"><i class="aui-icon aui-icon-small aui-iconfont-add"></i></button><button class="js-gm-print-action aui-button aui-button-primary">'+b+'</button><a class="js-gm-cancel-action aui-button aui-button-link" href="#">'+c+"</a></div></footer>"},a.pageCounter=function(a,b,c,d){return'<div class="gm-page-counter gm-print-hidden">'+a+' <span class="aui-badge">'+b+"</span>"+c+' <span class="aui-badge">'+d+"</span></div>"},a.ticketPreview=function(a,b){return'<div class="form-body"><ul class="gm-output-list">'+a+'<li class="gm-output-item">'+b+"</li></ul></div>"}},Namespace.create("xing.core"),xing.core.Observer=function(){"use strict";var a=this;a._observers=[],a.subscribe=function(b){a._observers.push(b)},a.unsubscribe=function(b){var c=a.observer.indexOf(b);c>=0&&a._observers.splice(c)},a.update=function(){a._observers.forEach(function(a){a.update()})}},Namespace.create("xing.core"),xing.core.Presenter=function(){"use strict";var a=this;a.dashalizer=function(a){return a.toLowerCase().replace(/ /g,"-")},a.getString=function(a){return(a||"").trimWhitespace()},a.getDate=function(a){var b,c,d,e,f="";return a&&(b=new Date(a),c=b.getMonth()+1,c=c>9?c:"0"+c,d=b.getFullYear(),e=b.getDate(),f=d+"-"+c+"-"+e),f},a.getStorageItem=function(a){var b=localStorage.getItem(a)||"";return b.toArray()},a.getElementText=function(a){return a[0]?a.text().trimWhitespace():""}},Namespace.create("xing.core.table"),xing.core.table.Builder=function(){"use strict";var a=this;a._text=function(a){return"text"in a?a.text:""},a._addCssClass=function(a,b){b=" "+(b||"");var c,d=a.options||{},e="cssClass"in d?d.cssClass:"",f="";$.extend(d,{cssClass:e+b})," "===d.cssClass&&delete d.cssClass;for(c in d){var g="cssClass"===c?"class":c,h=d[c]||"";g=g.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),f+=" "+g+'="'+h+'"'}return f},a.row=function(b){var c="";return b.forEach(function(b){c+=a.cell(b)}),"<tr>"+c+"</tr>"},a.cell=function(b){var c=b.cell,d="",e=b.head?"th":"td";return d+=a._cellTitle(c),d+=a._cellBody(c),"<"+e+a._addCssClass(c)+'><div class="gm-inner">'+d+"</div></"+e+">"},a._cellBody=function(b){var c="";if("body"in b){var d=b.body;c="<div"+a._addCssClass(d,"gm-bd")+">"+a._text(d)+"</div>"}return c},a._cellTitle=function(b){var c="";if(b.title){var d=b.title;c="<div"+a._addCssClass(d,"gm-hd")+">"+a._text(d)+"</div>"}return c},a.render=function(b,c){var d="",e=c&&c.layoutName?" gm-"+c.layoutName+"-layout":"";return b.forEach(function(b){d+=a.row(b)}),'<table class="gm-table'+e+'">'+d+"</table>"}},Namespace.create("xing.core.table"),xing.core.table.layout={DEFAULT_LAYOUT:"default",SCRUM_LAYOUT:"scrum",_layouts:{"default":[["number","type","component","target"],[{title:{maxLength:350}}],["collobarators"],["created","dueDate","reporter","start","closed"]],scrum:[["number","type","component","storyPoints"],[{title:{maxLength:150}}],[{description:{maxLength:600}}]]},get:function(a){"use strict";var b=this._layouts[a];return b}},xing.core.table.Map=function(a,b,c){"use strict";var d=this,e=xing.core.table.layout;c=c||e.DEFAULT_LAYOUT,d._mapSwitch=function(c,e){var f;if("string"==typeof e)f=a[e]({data:c,local:b.ticket});else if(xing.core.helpers.isObject(e)){var g=Object.keys(e)[0];e[g].maxLength&&(c[g]=c[g].truncate(e[g].maxLength)),f=a[g]({data:c,local:b.ticket})}else f=d.build(c,e);return f},d.build=function(a,b){b=b||e.get(c);for(var f=[],g=0,h=b.length;h>g;g++)f[g]=d._mapSwitch(a,b[g]);return f}},Namespace.create("xing.core"),xing.core.TicketCache=function(){"use strict";var a=this,b=location.hostname,c=b?".":"local.";a.STORAGE_KEY=b+c+"ticket",a.DEFAULT_COLLABORATOR_KEY=b+c+"default_collaborators",a.default={collaborators:localStorage.getItem(a.DEFAULT_COLLABORATOR_KEY)},a.data={},a.latest={},a.update=function(){a.data=$.extend(a.data,a.latest)},a.get=function(b){var c=localStorage.getItem(a.STORAGE_KEY),d=c&&c[0]?JSON.parse(c):[];return void 0!==b&&d[b]&&(d=[d[b]]),d},a.add=function(b){if(b){var c=a.get(),d=c.concat([b]);localStorage.setItem(a.STORAGE_KEY,JSON.stringify(d))}},a.remove=function(b){if(void 0!==b){var c=a.get();c[0]&&(c.splice(b,1),localStorage.setItem(a.STORAGE_KEY,JSON.stringify(c)))}else localStorage.removeItem(a.STORAGE_KEY);return a.get()},a.getCollaborators=function(b){var c=a.get(b)[0];return c&&c.collaborators||a.default.collaborators},a.updateCollaborators=function(b,c){var d=a.get(),e=d[b];e?(d[b]=a._updateProperty(e,"collaborators",c),localStorage.setItem(a.STORAGE_KEY,JSON.stringify(d))):(a.default.collaborators=c,localStorage.setItem(a.DEFAULT_COLLABORATOR_KEY,c),a._updateProperty(a.latest,"collaborators",c)),a.update()},a._updateProperty=function(a,b,c){return void 0!==a[b]&&(a[b]=c),a}},Namespace.create("xing.jira"),xing.jira.Application=function(a,b){"use strict";var c,d,e,f,g,h=this,i=xing.core;h.initialze=function(a,b){h.layoutName=b&&b.layoutName||"",c=new i.Observer,d=new i.TicketCache,g=new i.table.Builder,f=new i.Markup,e=(new i.I18n).local(),h.tableMap=new i.table.Map(new xing.jira.TableMapCell,e,h.layoutName),h.addStyle(a),h.collectDataFromDom()},h._getContainer=function(a){return a.hasClass("gm-container")&&a||a.parents(".gm-container")},h._clickOutsidePopupHandler=function(a){var b=$(a.target),c=h._getContainer(b);c[0]||h._hidePopup()},h._hidePopup=function(){$("#gm-popup").remove(),$(document).off("click",h._clickOutsidePopupHandler)},h._updateHTML=function(a){$("#gm-popup").remove();var b=h.tableMap.build(d.latest),c={layoutName:h.layoutName},i=g.render(b,c),j="",k=a.length+1,l=Math.ceil(k/2);a.forEach(function(a){var d=a.number,i=b.number;d!==i&&(j+='<li class="gm-output-item">'+g.render(h.tableMap.build(a),c)+f.ticketPanel(e.modal.action.remove)+"</li>")}),$("body").append($('<div id="gm-popup"><section class="gm-container jira-dialog box-shadow">'+f.dialogHeader(e.modal.heading)+'<div class="jira-dialog-content">'+f.pageCounter(e.modal.ticketCount,k,e.modal.pageCount,l)+f.ticketPreview(j,i)+"</div>"+f.dialogFooter(e.modal.select,e.modal.action.print,e.modal.action.cancel)+'</section><div class="aui-blanket gm-print-hidden"></div></div>'))},h.addStyle=function(a){if(!$("#gm-style")[0]&&a){var b=$('<style id="gm-style" type="text/css"></style>');$(document.head).append(b.html(a))}},h.cacheTicketHandler=function(){h.update();var a=d.latest;d.add(a),h._hidePopup(),h._showSuccessMessage()},h._showSuccessMessage=function(){$(".aui-message").remove(),window.AJS&&AJS.messages.success(".aui-page-header-inner",{title:e.messages.ticketCached.title,body:e.messages.ticketCached.body}),setTimeout(function(){$(".aui-message").remove()},5e3)},h.showPopup=function(){$("#gm-popup")[0]||(c.subscribe(this),c.subscribe(d),h.update(d.get()),$("body").on("click",".js-gm-print-action",function(a){a.preventDefault(),window.print(),d.remove(),h._hidePopup()}).on("click",".js-gm-pick-more",function(a){a.preventDefault(),h.cacheTicketHandler()}).on("click",".js-gm-cancel-action",function(a){a.preventDefault(),h._hidePopup()}).on("click",".js-gm-remove-ticket",function(a){a.preventDefault();var b=$(a.target).parents("li"),c=b.index(b);d.remove(c),$("#gm-popup .form-body table").eq(c).remove(),h.update(d.get())}).on("click",".gm-change-collaborators",function(){var a=$(".gm-output-list button").index(this),b=d.getCollaborators(a),c=window.prompt(e.modal.collaboratorPrompt,b||"");null!==c&&(d.updateCollaborators(a,c.trimWhitespace()),h.update())}))},h.update=function(){h._updateHTML(d.get())},h.collectDataFromDom=function(){var a=$("#greenhopper-agile-issue-web-panel dd a"),b=new i.Presenter,e=b.getString($("#type-val img").attr("alt"));d.latest={number:b.getString($("#key-val").text()),description:b.getString($("#description-val").text()),storyPoints:b.getString($("#customfield_10080-val").text()),dueDate:b.getDate($("#due-date time").attr("datetime")),collaborators:d.getCollaborators(),type:e,typeSelector:b.dashalizer(e),reporter:b.getString($("#reporter-val span").text()),created:b.getDate($("#create-date time").attr("datetime")),title:b.getString($("#summary-val").text()),component:b.getString($("#components-field").text()),target:b.getElementText(a)},c.update()},h.initialze(a,b)},Namespace.create("xing.jira.helpers"),xing.jira.helpers.Label=function(){"use strict";var a=this;a.NAMESPACE="aui-lozenge",a.DEFAULT_LABEL_SELECTORS="aui-lozenge aui-lozenge-subtle",a.DEFAULT_TYPES={bug:"error",improvement:"success","new-feature":"complete",task:"moved"},a.AGILE_TYPES={"user-story":"success","technical-story":"success","highlevel-testcase":"current","portability-testcase":"current"},a.getSelector=function(b){var c;return b===!1?"":(c=a._filter(b,a.DEFAULT_TYPES),c+=a._filter(b,a.AGILE_TYPES),a.DEFAULT_LABEL_SELECTORS+(c?" "+c:""))},a._filter=function(b,c){var d="";return Object.keys(c).forEach(function(e){b===e&&(d=a.NAMESPACE+"-"+c[e])}),d}},Namespace.create("xing.jira"),xing.jira.TableMapCell=function(){"use strict";var a=this,b=5;a.labelHelper=new xing.jira.helpers.Label,a.PREFIX="gm-jira-",a._titleBody=function(b,c){return{cell:{options:{cssClass:a.PREFIX+c},title:{text:b.local[c].title},body:{text:b.data[c]}}}},a.number=function(b){return{head:!0,cell:{options:{colspan:2,cssClass:a.PREFIX+"number"},body:{text:b.data.number,options:{title:b.data.number}}}}},a.type=function(b){return{cell:{options:{cssClass:a.PREFIX+"type"},title:{text:b.local.type.title},body:{options:{cssClass:a.labelHelper.getSelector(b.data.typeSelector)},text:b.data.type}}}},a.description=function(c){return{head:!0,cell:{options:{colspan:b,cssClass:a.PREFIX+"description"},body:{text:c.data.description}}}},a.component=function(b){return a._titleBody(b,"component")},a.target=function(b){return a._titleBody(b,"target")},a.title=function(c){return{head:!0,cell:{options:{colspan:b,cssClass:a.PREFIX+"title"},body:{text:c.data.title}}}},a.collobarators=function(c){return{cell:{options:{colspan:b,cssClass:a.PREFIX+"pairing"},title:{text:c.local.collaborator.title},body:{text:c.data.collaborators.split(/,/).join(" ")+c.local.collaborator.action}}}},a.created=function(b){var c="created";return{cell:{options:{cssClass:a.PREFIX+c},title:{text:b.local[c].title},body:{options:{cssClass:a.labelHelper.getSelector()},text:b.data[c]}}}},a.dueDate=function(b){return{cell:{title:{text:b.local.dueDate.title},body:{options:{cssClass:a.labelHelper.getSelector(b.data.dueDate?"bug":!1)},text:b.data.dueDate}}}},a.reporter=function(b){return a._titleBody(b,"reporter")},a.storyPoints=function(b){return{cell:{options:{cssClass:a.PREFIX+"story"},title:{text:b.local.storyPoints.title},body:{text:b.data.storyPoints}}}},a.start=function(a){return{cell:{options:{cssClass:"gm-date-content gm-20"},title:{text:a.local.start.title},body:{text:a.local.start.body}}}},a.closed=function(a){return{cell:{options:{cssClass:"gm-date-content gm-20"},title:{text:a.local.closed.title},body:{text:a.local.closed.body}}}}};var xingJiraApp = new xing.jira.Application("", , { layoutName: xing.core.table.layout.SCRUM_LAYOUT });xingJiraApp.versionTimestamp="2014-02-26 12:18:13 PM";xingJiraApp.version="2.2.0";xingJiraApp.cacheTicketHandler();})();