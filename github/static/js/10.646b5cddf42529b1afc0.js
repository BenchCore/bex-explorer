(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{puFQ:function(t,e,a){"use strict";a.r(e);var n=a("14Xm"),s=a.n(n),r=a("D3Ub"),c=a.n(r),o=a("3RCc"),i={data:function(){return{blocks:null}},created:function(){var t=this;this.$on("paginatorChanged",function(e){return t.changePage(e)})},beforeRouteEnter:function(t,e,a){var n=this;return c()(s.a.mark(function e(){var r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.paginate(t.params.page);case 2:r=e.sent,a(function(t){return t.setBlocks(r)});case 4:case"end":return e.stop()}},e,n)}))()},beforeRouteUpdate:function(t,e,a){var n=this;return c()(s.a.mark(function e(){var r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.blocks=null,e.next=3,o.a.paginate(t.params.page);case 3:r=e.sent,n.setBlocks(r),a();case 6:case"end":return e.stop()}},e,n)}))()},methods:{setBlocks:function(t){t&&(this.blocks=t)},changePage:function(t){this.$router.push({name:"blocks",params:{page:t}})}}},u=a("KHd+"),l=Object(u.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"max-w-2xl mx-auto md:pt-5"},[a("content-header",[t._v(t._s(t.$t("Blocks")))]),t._v(" "),a("section",{staticClass:"page-section py-10"},[a("div",{staticClass:"hidden sm:block"},[a("table-blocks",{attrs:{blocks:t.blocks}})],1),t._v(" "),a("div",{staticClass:"sm:hidden"},[a("table-blocks-mobile",{attrs:{blocks:t.blocks}})],1),t._v(" "),t.blocks?a("paginator",{attrs:{start:+this.$route.params.page}}):t._e()],1)],1)},[],!1,null,null,null);e.default=l.exports}}]);
//# sourceMappingURL=10.646b5cddf42529b1afc0.js.map