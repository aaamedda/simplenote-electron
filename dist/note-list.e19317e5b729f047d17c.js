(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1163:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(1),a=n.n(i),c=n(1154);function s(){return r.a.createElement("svg",{className:"icon-feed",xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M2,8.667V12c5.515,0,10,4.485,10,10h3.333C15.333,14.637,9.363,8.667,2,8.667z M2,2v3.333 c9.19,0,16.667,7.477,16.667,16.667H22C22,10.955,13.045,2,2,2z M4.5,17C3.118,17,2,18.12,2,19.5S3.118,22,4.5,22S7,20.88,7,19.5 S5.882,17,4.5,17z"}))}var l,u,d=n(6),p=n.n(d),f=n(2),m=n(11),h=n(12),v=n(15),y=n(49),w=n(125),b=new Map,N=(l=function(e){return e.data.modificationDate},u=w.a,function(e){var t=b.get(e.id),n=l(e);if(void 0===t||n!==t.key){var o={key:n,value:u(e)};b.set(e.id,o),t=o}return t.value}),g=n(805),E=n.n(g),k=n(658),S=n(569),x=function(e,t){var n=t,o=0;return e.forEach((function(e){var t=e.filter,r=e.replacer;n=E()(n,t,r(o++))})),n},O={filter:S.b,replacer:function(e){return function(t){var n=/x/i.test(t);return r.a.createElement(k.a,{checked:n,key:e})}}},C=function(e){return{filter:e,replacer:function(e){return function(t){if(t.length)return r.a.createElement("span",{className:"search-match",key:e},t)}}}};function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"NoteList",(function(){return B})),c.a.displayName="AutoSizer",c.b.displayName="List";var M={comfy:1,condensed:0,expanded:4};function _(e,t){var n=_.canvas||(_.canvas=document.createElement("canvas"));n.width=t;var o=n.getContext("2d");return o.font="16px arial",o.measureText(e).width}var z,q=new Map,A=(z=function(e,t,n){var o=Math.ceil(_(n,e-24)/(e-24));return 42+21*Math.min(M[t],o)},function(e,t){var n=t.noteDisplay,o=t.width;return function(t){var r=t.index,i=e[r],a=N(i).preview,c=e[r].id,s=q.get(c);if(void 0!==s){var l=L(s,4),u=l[0],d=l[1],p=l[2],f=l[3];if(u===o&&d===n&&p===a)return f}var m=z(o,n,a);return q.set(c,[o,n,a,m]),m}}),B=function(e){function t(){var e,n,o,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return o=this,r=(e=I(t)).call.apply(e,[this].concat(a)),n=!r||"object"!==j(r)&&"function"!=typeof r?P(o):r,T(P(n),"handleShortcut",(function(e){var t=e.ctrlKey,o=e.key,r=e.metaKey,i=e.shiftKey,a=t||r;return a&&i&&("ArrowUp"===o||"k"===o)?(n.props.onSelectNote(n.props.nextNote.id),e.stopPropagation(),e.preventDefault(),!1):!a||!i||"ArrowDown"!==o&&"j"!==o||(n.props.onSelectNote(n.props.prevNote.id),e.stopPropagation(),e.preventDefault(),!1)})),T(P(n),"refList",(function(e){return n.list=e})),T(P(n),"toggleShortcuts",(function(e){e?window.addEventListener("keydown",n.handleShortcut,!0):window.removeEventListener("keydown",n.handleShortcut,!0)})),T(P(n),"onPinNote",(function(e){return n.props.onPinNote(e,!e.pinned)})),n}var n,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(t,e),n=t,(i=[{key:"componentDidMount",value:function(){var e=this;this.recomputeHeights=Object(f.debounce)((function(){return e.list&&e.list.recomputeRowHeights()}),70,{maxWait:1e3}),this.toggleShortcuts(!0),window.addEventListener("resize",this.recomputeHeights)}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.closeNote,o=t.filter,r=t.notes,i=t.onSelectNote,a=t.selectedNoteId;e.noteDisplay===this.props.noteDisplay&&e.notes===r&&e.selectedNoteContent===this.props.selectedNoteContent||this.recomputeHeights(),a!==e.selectedNoteId&&i(a),o!==e.filter&&(r.some((function(e){return e.id===a}))||n())}},{key:"componentWillUnmount",value:function(){this.toggleShortcuts(!1),window.removeEventListener("resize",this.recomputeHeights)}},{key:"render",value:function(){var e=this,t=this.props,n=t.filter,i=t.selectedNoteId,a=t.onNoteOpened,l=t.onSelectNote,u=t.onEmptyTrash,d=t.noteDisplay,m=t.showTrash,h=t.notes,v=t.isSmallScreen,y=p()("note-list-items",d),w=function(e,t){var n=t.filter,o=t.noteDisplay,i=t.selectedNoteId,a=t.onNoteOpened,c=t.onSelectNote,l=t.onPinNote,u=t.isSmallScreen;return function(t){var d=t.index,m=t.rowIndex,h=t.key,v=t.style,y=e[void 0===d?m:d],w=N(y),b=w.title,g=w.preview,E=!Object(f.isEmpty)(y.data.publishURL),k=p()("note-list-item",{"note-list-item-selected":!u&&i===y.id,"note-list-item-pinned":y.pinned,"published-note":E}),S=[O,C(n)];return r.a.createElement("div",{key:h,style:v,className:k},r.a.createElement("div",{className:"note-list-item-pinner",tabIndex:"0",onClick:l.bind(null,y)}),r.a.createElement("div",{className:"note-list-item-text theme-color-border",tabIndex:"0",onClick:function(){c(y.id),a()}},r.a.createElement("div",{className:"note-list-item-title"},r.a.createElement("span",null,x(S,b)),E&&r.a.createElement("div",{className:"note-list-item-published-icon"},r.a.createElement(s,null))),"condensed"!==o&&g.trim()&&r.a.createElement("div",{className:"note-list-item-excerpt"},x(S,g))))}}(h,{filter:n,noteDisplay:d,onNoteOpened:a,onSelectNote:l,onPinNote:this.onPinNote,selectedNoteId:i,isSmallScreen:v}),b=0===h.length,g=r.a.createElement("div",{className:"note-list-empty-trash theme-color-border"},r.a.createElement("button",{type:"button",className:"button button-borderless button-danger",onClick:u},"Empty Trash"));return r.a.createElement("div",{className:p()("note-list",{"is-empty":b})},b?r.a.createElement("span",{className:"note-list-placeholder"},"No Notes"):r.a.createElement(o.Fragment,null,r.a.createElement("div",{className:y},r.a.createElement(c.a,null,(function(t){var n=t.height,o=t.width;return r.a.createElement(c.b,{ref:e.refList,estimatedRowSize:42+21*M[d],height:n,noteDisplay:d,notes:e.props.notes,rowCount:e.props.notes.length,rowHeight:"condensed"===d?42:A(e.props.notes,{noteDisplay:d,width:o}),rowRenderer:w,width:o})}))),!!m&&g))}}])&&D(n.prototype,i),a&&D(n,a),t}(o.Component);T(B,"displayName","NoteList"),T(B,"propTypes",{closeNote:a.a.func.isRequired,filter:a.a.string.isRequired,isSmallScreen:a.a.bool.isRequired,notes:a.a.array.isRequired,selectedNoteId:a.a.any,onNoteOpened:a.a.func.isRequired,onSelectNote:a.a.func.isRequired,onPinNote:a.a.func.isRequired,noteDisplay:a.a.string.isRequired,onEmptyTrash:a.a.any.isRequired,showTrash:a.a.bool});var H=h.a.actionCreators,U=H.closeNote,K=H.emptyTrash,J=H.loadAndSelectNote,W=H.pinNote,X=v.tracks.recordEvent;t.default=Object(m.b)((function(e){var t=e.appState,n=e.settings.noteDisplay,o=Object(y.a)(t),r=Math.max(t.previousIndex,0),i=t.note?t.note:o[r],a=Object(f.get)(i,"id",t.selectedNoteId),c=o.findIndex((function(e){return e.id===a})),s=Math.max(0,c-1),l=Math.min(o.length-1,c+1),u=o[s],d=o[l],p=i&&N(i).preview;return{filter:t.filter,nextNote:u,noteDisplay:n,notes:o,prevNote:d,selectedNotePreview:p,selectedNoteContent:Object(f.get)(i,"data.content"),selectedNoteId:a,showTrash:t.showTrash}}),(function(e,t){var n=t.noteBucket;return{closeNote:function(){return e(U())},onEmptyTrash:function(){return e(K({noteBucket:n}))},onSelectNote:function(t){e(J({noteBucket:n,noteId:t})),X("list_note_opened")},onPinNote:function(t,o){return e(W({noteBucket:n,note:t,pin:o}))}}}))(B)},569:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i}));var o={taskNode:".task-list-item",markdownRoot:"[data-markdown-root]"},r=/^(\s*)(-[ \t]+\[[xX\s]?\])/g,i=/^(\s*)(-[ \t]+\[[xX\s]?\])(.+)/gm},658:function(e,t,n){"use strict";var o=n(0),r=n.n(o),i=n(1),a=n.n(i);function c(){return r.a.createElement("svg",{className:"icon-checkmark",xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M11,17.768l-4.884-4.884l1.768-1.768L11,14.232l8.658-8.658C17.823,3.391,15.075,2,12,2C6.477,2,2,6.477,2,12 s4.477,10,10,10s10-4.477,10-10c0-1.528-0.353-2.971-0.966-4.266L11,17.768z"}))}function s(){return r.a.createElement("svg",{className:"icon-circle",xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24"},r.a.createElement("g",{transform:"translate(2 2)"},r.a.createElement("path",{d:"m10 0c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 18.5c-4.694 0-8.5-3.806-8.5-8.5s3.806-8.5 8.5-8.5 8.5 3.806 8.5 8.5-3.806 8.5-8.5 8.5z"})))}var l=function(e){var t=e.checked,n=void 0!==t&&t,o=e.onChange;return r.a.createElement("span",{className:"checkbox",role:"checkbox","aria-checked":n,onClick:o,tabIndex:"0"},r.a.createElement("span",{className:"checkbox__icon","aria-hidden":"true"},n?r.a.createElement(c,null):r.a.createElement(s,null)))};l.propTypes={checked:a.a.bool,onChange:a.a.func};t.a=l}}]);