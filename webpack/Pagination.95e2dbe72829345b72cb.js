"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6037],{5291:function(e,a,t){t.r(a),t.d(a,{default:function(){return o}});var n=t(9894),r=t(5982),s=t(8785);var c=e=>{let{payload:a,nextPage:t,loading:n,currentPage:r,perPage:s}=e,c=0;return a&&(c=a.numCourses-r*s,(e=>{document.querySelector('[data-template="courses-list"]').insertAdjacentHTML("beforeend",e)})(a.table),c<=0)?"":((e,a,t,n)=>'\n    <button\n      class="btn-large btn-white relative"\n      type="button"\n      data-name="LOAD_MORE"\n      data-detail=\'{ "page": '.concat(e,', "perPage": ').concat(n,' }\'\n      data-track-click="{{ ts.event(\'LISTING_CLICK\') }}"\n      data-track-props=\'{ "type": "Load More Courses", "page": "').concat(e,'" }\'\n    >\n      <span class="').concat(a?"invisible":"",'">\n        <span class="small-up-hidden">Load more</span>\n\n        <span class="hidden small-up-inline-block">\n          ').concat(t>n?"Load the next ".concat(n," courses of ").concat(t):"Load the next ".concat(t," courses"),"\n        </span>\n      </span>\n      ").concat(a?'<span class="absolute top left width-100 padding-vert-small">Loading...</span>':"","\n    </button>\n  "))(t,n,c,s)};const l=["Political Science","Law","Theoretical Computer Science","Science","Environmental Science","Course Development","Test Prep","K12","Visual Arts"];var o=e=>{switch(e.name){case"load:PAGINATION_MODULE":{var a;const e=(null===(a=window.CC.data)||void 0===a?void 0:a.udemy)||!1;if(e){if("subject"===e.type&&l.includes(e.term))return;(0,s.Z)("GET_UDEMY_COURSES",{parameters:{term:e.term}})}break}case"request:GET_UDEMY_COURSES_SUCCESS":document.querySelector('[data-template="courses-list"]').insertAdjacentHTML("beforeend",e.detail.json.tableRows);break;case"click:LOAD_MORE":var t,o;(0,n.IW)({queryObject:{...(0,n.y0)().queryObject,page:[e.detail.page]}}),(0,s.Z)("COURSES/LIST",{parameters:{...(0,n.y0)().queryObject,perPage:null!==(t=e.detail.perPage)&&void 0!==t?t:50}}),(0,n.sY)("loadmore",c({loading:!0,nextPage:e.detail.page,perPage:null!==(o=e.detail.perPage)&&void 0!==o?o:50}));break;case"request:COURSES/LIST_PAGE_SUCCESS":(0,n.sY)("loadmore",c({loading:!1,nextPage:parseInt(e.detail.originalParameters.page[0],10)+1,payload:e.detail.json,currentPage:parseInt(e.detail.originalParameters.page[0],10),perPage:e.detail.originalParameters.perPage})),(0,n.IW)({deferred:{images:[].slice.call(document.querySelectorAll("[data-src]"))}}),(0,r.W)("load","IMAGES")}}}}]);