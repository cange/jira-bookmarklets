javascript:void(function(){var Namespace=function(a){"use strict";return{create:function(b){for(var c,d=a,e=b.split("."),f=e.length,g=0;f>g;g++)c=e[g],d=d[c]=d[c]||{}},is:function(b,c){var d,e,f,g=a,h=!1,i=0;for("object"==typeof b?g=b:c=b,e=c.split("."),d=e.length;d>i;i++){if(f=e[i],!g[f])return h=!1,!1;g=g[f],h=!0}return h}}}(this);String.prototype.truncate=function(a){"use strict";var b=this.length,c="…",d=c.length,e=this;return b>a&&(e=this.substr(0,a-d)+c),e},String.prototype.trimWhitespace=function(){"use strict";return this.replace(/\s+/g," ").split(/\n/).join(" ")},String.prototype.toArray=function(a){"use strict";return a=new RegExp(a||","),this.split(a)},Namespace.create("xing.core.helpers"),xing.core.helpers.isArray=function(a){"use strict";return"[object Array]"===Object.prototype.toString.call(a)},xing.core.helpers.isObject=function(a){"use strict";return"[object Object]"===Object.prototype.toString.call(a)},Namespace.create("xing.core"),xing.core.I18n=function(){"use strict";this.en={messages:{ticketCached:{title:"Ticket print",body:"Ticket is stored! Please navigate to another if you want print one ticket more."}},modal:{collaboratorPrompt:'Please enter your collaborators!\nNote: Separate the names with a comma e.g. "Jeffrey, Walter"',heading:"Print preview",select:"Select another:",action:{addCollaborator:"Collaborators",remove:"Remove ticket form the list",print:"Print",cancel:"Cancel"},ticketCount:"You are printing tickets",pageCount:" on pages"},ticket:{collaborator:{title:"Pairing partner",action:'<button class="aui-button gm-change-collaborators gm-print-hidden">Collaborators</button>'},component:{title:"Component"},closed:{title:"End date",body:"Day | Time"},created:{title:"Created"},description:{title:"Description"},dueDate:{title:"Due date"},reporter:{title:"Reporter"},storyPoints:{title:"Story Points"},target:{title:"Target"},type:{title:"Type"},start:{title:"Start Progress",body:"Day | Time"}}},this.local=function(a){return this[a||"en"]}},Namespace.create("xing.core"),xing.core.Markup=function(){"use strict";var a=this;a.ticketPanel=function(a){return'<div class="gm-ticket-action-panel gm-print-hidden"><button type="button" class="aui-button js-gm-remove-ticket"><i class="aui-icon aui-icon-small aui-iconfont-remove"></i>'+a+"</button></div>"},a.dialogHeader=function(a){return'<header class="jira-dialog-heading gm-print-hidden"><h2>'+a+"</h2></header>"},a.dialogFooter=function(a,b,c){return'<footer class="buttons-container form-footer gm-print-hidden"><div class="buttons"><label for="gm-select-ticket">'+a+'</label>&nbsp;<button id="gm-select-ticket" class="js-gm-pick-more aui-button" title="'+a+'"><i class="aui-icon aui-icon-small aui-iconfont-add"></i></button><button class="js-gm-print-action aui-button aui-button-primary">'+b+'</button><a class="js-gm-cancel-action aui-button aui-button-link" href="#">'+c+"</a></div></footer>"},a.pageCounter=function(a,b,c,d){return'<div class="gm-page-counter gm-print-hidden">'+a+' <span class="aui-badge">'+b+"</span>"+c+' <span class="aui-badge">'+d+"</span></div>"},a.ticketPreview=function(a,b){return'<div class="form-body"><ul class="gm-output-list"><li class="gm-output-item is-current">'+b+"</li>"+a+"</ul></div>"}},Namespace.create("xing.core"),xing.core.Observer=function(){"use strict";var a=this;a._observers=[],a.subscribe=function(b){a._observers.push(b)},a.unsubscribe=function(b){var c=a.observer.indexOf(b);c>=0&&a._observers.splice(c)},a.update=function(){a._observers.forEach(function(a){a.update()})}},Namespace.create("xing.core"),xing.core.Presenter=function(){"use strict";var a=this;a.dashalizer=function(a){return a.toLowerCase().replace(/ /g,"-")},a.getString=function(a){return(a||"").trimWhitespace()},a.getDate=function(a){var b,c,d,e,f="";return a&&(b=new Date(a),c=b.getMonth()+1,c=c>9?c:"0"+c,d=b.getFullYear(),e=b.getDate(),f=d+"-"+c+"-"+e),f},a.getStorageItem=function(a){var b=localStorage.getItem(a)||"";return b.toArray()},a.getElementText=function(a){return a[0]?a.text().trimWhitespace():""}},Namespace.create("xing.core.table"),xing.core.table.Builder=function(){"use strict";var a=this;a._text=function(a){return"text"in a?a.text:""},a._addCssClass=function(a,b){b=" "+(b||"");var c,d=a.options||{},e="cssClass"in d?d.cssClass:"",f="";$.extend(d,{cssClass:e+b})," "===d.cssClass&&delete d.cssClass;for(c in d){var g="cssClass"===c?"class":c,h=d[c]||"";g=g.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),f+=" "+g+'="'+h+'"'}return f},a.row=function(b){var c="";return b.forEach(function(b){c+=a.cell(b)}),"<tr>"+c+"</tr>"},a.cell=function(b){var c=b.cell,d="",e=b.head?"th":"td";return d+=a._cellTitle(c),d+=a._cellBody(c),"<"+e+a._addCssClass(c)+'><div class="gm-inner">'+d+"</div></"+e+">"},a._cellBody=function(b){var c="";if("body"in b){var d=b.body;c="<div"+a._addCssClass(d,"gm-bd")+">"+a._text(d)+"</div>"}return c},a._cellTitle=function(b){var c="";if(b.title){var d=b.title;c="<div"+a._addCssClass(d,"gm-hd")+">"+a._text(d)+"</div>"}return c},a.render=function(b,c){var d="",e=c&&c.layoutName?" gm-"+c.layoutName+"-layout":"";return b.forEach(function(b){d+=a.row(b)}),'<table class="gm-table'+e+'">'+d+"</table>"}},Namespace.create("xing.core.table"),xing.core.table.layout={DEFAULT_LAYOUT:"default",SCRUM_LAYOUT:"scrum",_layouts:{"default":[["number","type","component","target"],[{title:{maxLength:350}}],["collobarators"],["created","dueDate","reporter","start","closed"]],scrum:[["number","type","component","storyPoints"],[{title:{maxLength:80}}],["description"]]},get:function(a){"use strict";var b=this._layouts[a];return b}},xing.core.table.Map=function(a,b,c){"use strict";var d=this,e=xing.core.table.layout;c=c||e.DEFAULT_LAYOUT,d._mapSwitch=function(c,e){var f;if("string"==typeof e)f=a[e]({data:c,local:b.ticket});else if(xing.core.helpers.isObject(e)){var g=Object.keys(e)[0];e[g].maxLength&&(c[g]=c[g].truncate(e[g].maxLength)),f=a[g]({data:c,local:b.ticket})}else f=d.build(c,e);return f},d.build=function(a,b){b=b||e.get(c);for(var f=[],g=0,h=b.length;h>g;g++)f[g]=d._mapSwitch(a,b[g]);return f}},Namespace.create("xing.core"),xing.core.TicketCache=function(a){"use strict";var b=this,c=location.hostname,d=c?".":"local.";b.STORAGE_KEY=c+d+"ticket",b.DEFAULT_COLLABORATOR_KEY=c+d+"default_collaborators",b.default={collaborators:localStorage.getItem(b.DEFAULT_COLLABORATOR_KEY)||""},b.data={},b.latest={},b.update=function(){b.data=a.extend(b.data,b.latest)},b.get=function(a){var c=localStorage.getItem(b.STORAGE_KEY),d=c&&c[0]?JSON.parse(c):[];return void 0!==a&&d[a]&&(d=[d[a]]),d},b.add=function(a){if(a){var c=b.get(),d=c.concat([a]);localStorage.setItem(b.STORAGE_KEY,JSON.stringify(d))}},b.remove=function(a){if(void 0!==a){var c=b.get();c[0]&&(c.splice(a,1),localStorage.setItem(b.STORAGE_KEY,JSON.stringify(c)))}else localStorage.removeItem(b.STORAGE_KEY);return b.get()},b.getCollaborators=function(a){var c=b.get(a)[0];return c&&c.collaborators||b.default.collaborators},b.updateCollaborators=function(a,c){var d=b.get(),e=d[a];c=c||"",e?(d[a]=b._updateProperty(e,"collaborators",c),localStorage.setItem(b.STORAGE_KEY,JSON.stringify(d))):(b.default.collaborators=c,localStorage.setItem(b.DEFAULT_COLLABORATOR_KEY,c),b._updateProperty(b.latest,"collaborators",c)),b.update()},b._updateProperty=function(a,b,c){return void 0!==a[b]&&(a[b]=c),a}},Namespace.create("xing.jira"),xing.jira.Application=function(a,b,c){"use strict";var d,e,f,g,h,i=this,j=xing.core;i.initialze=function(b,c){i.layoutName=c&&c.layoutName||"",d=new j.Observer,e=new j.TicketCache(a),h=new j.table.Builder,g=new j.Markup,f=(new j.I18n).local(),i.tableMap=new j.table.Map(new xing.jira.TableMapCell,f,i.layoutName),i.addStyle(b),i.collectDataFromDom()},i._getContainer=function(a){return a.hasClass("gm-container")&&a||a.parents(".gm-container")},i._clickOutsidePopupHandler=function(b){var c=a(b.target),d=i._getContainer(c);d[0]||i._hidePopup()},i._hidePopup=function(){a("#gm-popup").remove(),a(document).off("click",i._clickOutsidePopupHandler)},i._updateHTML=function(b){a("#gm-popup").remove();var c=i.tableMap.build(e.latest),d={layoutName:i.layoutName},j=h.render(c,d),k="",l=b.length+1,m=Math.ceil(l/2);b.forEach(function(a){var b=a.number,e=c.number;b!==e&&(k+='<li class="gm-output-item">'+h.render(i.tableMap.build(a),d)+g.ticketPanel(f.modal.action.remove)+"</li>")}),a("body").append(a('<div id="gm-popup"><section class="gm-container jira-dialog box-shadow">'+g.dialogHeader(f.modal.heading)+'<div class="jira-dialog-content">'+g.pageCounter(f.modal.ticketCount,l,f.modal.pageCount,m)+g.ticketPreview(k,j)+"</div>"+g.dialogFooter(f.modal.select,f.modal.action.print,f.modal.action.cancel)+'</section><div class="aui-blanket gm-print-hidden"></div></div>'))},i.addStyle=function(b){if(!a("#gm-style")[0]&&b){var c=a('<style id="gm-style" type="text/css"></style>');a(document.head).append(c.html(b))}},i.cacheTicketHandler=function(){i.update();var a=e.latest;e.add(a),i._hidePopup(),i._showSuccessMessage()},i._showSuccessMessage=function(){a(".aui-message").remove(),window.AJS&&AJS.messages.success(".aui-page-header-inner",{title:f.messages.ticketCached.title,body:f.messages.ticketCached.body}),setTimeout(function(){a(".aui-message").remove()},5e3)},i.showPopup=function(){a("#gm-popup")[0]||(d.subscribe(this),d.subscribe(e),i.update(e.get()),a("body").on("click",".js-gm-print-action",function(a){a.preventDefault(),window.print(),e.remove(),i._hidePopup()}).on("click",".js-gm-pick-more",function(a){a.preventDefault(),i.cacheTicketHandler()}).on("click",".js-gm-cancel-action",function(a){a.preventDefault(),i._hidePopup()}).on("click",".js-gm-remove-ticket",function(b){b.preventDefault();var c=a(b.target).parents("li"),d=c.index(c);e.remove(d),a("#gm-popup .form-body table").eq(d).remove(),i.update(e.get())}).on("click",".gm-change-collaborators",function(){var b,c,d=a(".gm-output-list button").index(this)-1;b=a(this).parents(".is-current")?e.getCollaborators():e.getCollaborators(d),c=window.prompt(f.modal.collaboratorPrompt,b||""),null!==c&&(e.updateCollaborators(d,c.trimWhitespace()),i.update())}))},i.update=function(){i._updateHTML(e.get())},i.collectDataFromDom=function(){var b=a("#greenhopper-agile-issue-web-panel dd a"),c=new j.Presenter,f=c.getString(a("#type-val img").attr("alt"));e.latest={number:c.getString(a("#key-val").text()),description:c.getString(a("#description-val").html()),storyPoints:c.getString(a("#customfield_12470-val").text()),dueDate:c.getDate(a("#due-date time").attr("datetime")),collaborators:e.getCollaborators(),type:f,typeSelector:c.dashalizer(f),reporter:c.getString(a("#reporter-val span").text()),created:c.getDate(a("#create-date time").attr("datetime")),title:c.getString(a("#summary-val").text()),component:c.getString(a("#components-field").text()),target:c.getElementText(b)},d.update()},i.initialze(b,c)},Namespace.create("xing.jira.helpers"),xing.jira.helpers.Label=function(){"use strict";var a=this;a.NAMESPACE="aui-lozenge",a.DEFAULT_LABEL_SELECTORS="aui-lozenge aui-lozenge-subtle",a.DEFAULT_TYPES={bug:"error",improvement:"success","new-feature":"complete",task:"moved"},a.AGILE_TYPES={"user-story":"success","technical-story":"success","highlevel-testcase":"current","portability-testcase":"current"},a.getSelector=function(b){var c;return b===!1?"":(c=a._filter(b,a.DEFAULT_TYPES),c+=a._filter(b,a.AGILE_TYPES),a.DEFAULT_LABEL_SELECTORS+(c?" "+c:""))},a._filter=function(b,c){var d="";return Object.keys(c).forEach(function(e){b===e&&(d=a.NAMESPACE+"-"+c[e])}),d}},Namespace.create("xing.jira"),xing.jira.TableMapCell=function(){"use strict";var a=this,b=5;a.labelHelper=new xing.jira.helpers.Label,a.PREFIX="gm-jira-",a._titleBody=function(b,c){return{cell:{options:{cssClass:a.PREFIX+c},title:{text:b.local[c].title},body:{text:b.data[c]}}}},a.number=function(b){return{head:!0,cell:{options:{colspan:2,cssClass:a.PREFIX+"number"},body:{text:b.data.number,options:{title:b.data.number}}}}},a.type=function(b){return{cell:{options:{cssClass:a.PREFIX+"type"},title:{text:b.local.type.title},body:{options:{cssClass:a.labelHelper.getSelector(b.data.typeSelector)},text:b.data.type}}}},a.description=function(c){return{head:!0,cell:{options:{colspan:b,cssClass:a.PREFIX+"description"},body:{text:c.data.description}}}},a.component=function(b){return a._titleBody(b,"component")},a.target=function(b){return a._titleBody(b,"target")},a.title=function(c){return{head:!0,cell:{options:{colspan:b,cssClass:a.PREFIX+"title"},body:{text:c.data.title}}}},a.collobarators=function(c){return{cell:{options:{colspan:b,cssClass:a.PREFIX+"pairing"},title:{text:c.local.collaborator.title},body:{text:c.data.collaborators.split(/,/).join(" ")+c.local.collaborator.action}}}},a.created=function(b){var c="created";return{cell:{options:{cssClass:a.PREFIX+c},title:{text:b.local[c].title},body:{options:{cssClass:a.labelHelper.getSelector()},text:b.data[c]}}}},a.dueDate=function(b){return{cell:{title:{text:b.local.dueDate.title},body:{options:{cssClass:a.labelHelper.getSelector(b.data.dueDate?"bug":!1)},text:b.data.dueDate}}}},a.reporter=function(b){return a._titleBody(b,"reporter")},a.storyPoints=function(b){return{cell:{options:{cssClass:a.PREFIX+"story"},title:{text:b.local.storyPoints.title},body:{text:b.data.storyPoints}}}},a.start=function(a){return{cell:{options:{cssClass:"gm-date-content"},title:{text:a.local.start.title},body:{text:a.local.start.body}}}},a.closed=function(a){return{cell:{options:{cssClass:"gm-date-content"},title:{text:a.local.closed.title},body:{text:a.local.closed.body}}}}};var xingJiraApp = new xing.jira.Application(jQuery, '.gm-jira-number,.gm-jira-title .gm-bd,.gm-scrum-layout .gm-jira-description .gm-bd{text-align:left}.gm-jira-story{text-align:center}.gm-jira-pairing .gm-hd,.gm-jira-story .gm-hd{float:left}.gm-jira-story .gm-bd,.gm-change-collaborators{float:right}.gm-jira-title .gm-bd,.gm-scrum-layout .gm-jira-description .gm-bd{-o-hyphens:auto;-ms-hyphens:auto;-moz-hyphens:auto;-webkit-hyphens:auto;hyphens:auto}.gm-scrum-layout .gm-jira-description .gm-bd{font-size:1rem}.gm-jira-number .gm-bd,.gm-jira-story .gm-bd{font-size:2.1rem}.gm-jira-title .gm-bd{font-size:1.8rem}@media print{.gm-print-hidden{display:none}}.gm-table,.gm-table th,.gm-table td{border:1px solid #ccc}.gm-table{border-collapse:collapse;font:8.5pt helvetica,arial,sans-serif;line-height:1.3334em;padding-bottom:2mm;width:100%}.gm-table td{vertical-align:top}.gm-hd{color:#707070;text-align:left;text-transform:uppercase}.gm-page-counter{font-size:0.8rem;color:#707070;position:absolute;right:0.5rem;top:22px}.gm-output-item:nth-child(odd):before,.gm-output-item:nth-child(even):after{color:#ccc;display:block;font-size:0.8rem;padding:0.2rem 0;text-align:center}.gm-output-list{counter-reset:page-counter;margin:0;padding:0}.gm-output-item{-o-box-sizing:border-box;-ms-box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;page-break-inside:avoid;position:relative}.gm-output-item:nth-child(odd){margin-bottom:0.4rem;counter-increment:page-counter}.gm-output-item:nth-child(odd):before{content:"Begin of page " counter(page-counter)}.gm-output-item:nth-child(even):after{border-bottom:2px dashed #ccc;content:"End of page " counter(page-counter)}.gm-inner{padding:2mm 3mm}.gm-jira-number{min-width:30%}.gm-jira-number .gm-bd{word-break:break-all}.gm-jira-title .gm-bd{line-height:1em}.gm-jira-title .gm-inner{height:7cm;overflow:hidden;padding-bottom:0}.gm-jira-pairing .gm-inner{overflow:hidden}.gm-jira-pairing .gm-hd{padding-right:3mm}.gm-jira-pairing .gm-bd{overflow:hidden}.gm-jira-story .gm-bd{display:inline-block;font-weight:bold;line-height:1em}.gm-jira-qa .gm-bd{border-radius:2rem;border:1px solid #ccc;height:40px;margin:auto;width:40px}.gm-date-content{width:20%}.gm-date-content .gm-hd{padding:0 0 1px;text-align:center}.gm-date-content .gm-bd{color:#ccc;text-align:center;text-transform:uppercase}.gm-date-content .gm-inner{min-height:1.2cm}.gm-scrum-layout .gm-jira-title .gm-inner{height:1.8cm}.gm-scrum-layout .gm-jira-description{overflow:hidden}.gm-scrum-layout .gm-jira-description .gm-inner{height:7.6cm}.gm-scrum-layout .gm-jira-description .gm-bd{font-weight:normal;line-height:1.3334em}.global .aui-message{left:50%;margin-left:-220px;position:absolute;top:20px;z-index:101}@media print{.gm-output-item{height:12.2cm}.gm-output-item:nth-child(even){border-bottom:none}.gm-output-item:before,.gm-output-item:after{display:none !important}html,body{background-color:white}#page{display:none}.gm-container{border-radius:0 !important;box-shadow:none !important;left:0;margin:0;max-height:none;padding:0;position:absolute;top:0;width:100%}.gm-container.jira-dialog{border:none;margin:0;padding:0}.gm-container .form-body{padding:0 !important}}@media screen{.gm-ticket-action-panel{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;align-items:right;background-color:#f5f5f5;border-top:1px solid #ccc;bottom:1px;justify-content:center;left:1px;opacity:0;padding:0.4rem 0;position:absolute;right:1px;text-align:center}.gm-output-item:hover .gm-ticket-action-panel{opacity:1}.gm-output-item:nth-child(even) .gm-ticket-action-panel{bottom:1.7rem}.gm-output-item:not(.is-current){color:#707070}.gm-container{left:50%;margin-left:-9cm;margin-top:5%;top:0;width:18.9cm}.gm-container .form-body{height:460px;padding:2mm !important}}');xingJiraApp.versionTimestamp="2014-08-07 4:18:15 PM";xingJiraApp.version="2.2.3";xingJiraApp.showPopup();})();