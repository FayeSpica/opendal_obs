"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[4813],{6456:(e,t,n)=>{n.d(t,{A:()=>r});n(758);var s=n(8328),i=n(6393),a=n(6070);function r(e){const{metadata:t}=e,{previousPage:n,nextPage:r}=t;return(0,a.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,a.jsx)(i.A,{permalink:n,title:(0,a.jsx)(s.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),r&&(0,a.jsx)(i.A,{permalink:r,title:(0,a.jsx)(s.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},8149:(e,t,n)=>{n.d(t,{A:()=>r});n(758);var s=n(5356),i=n(9047),a=n(6070);function r(e){let{items:t,component:n=i.A}=e;return(0,a.jsx)(a.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,a.jsx)(s.in,{content:t,children:(0,a.jsx)(n,{children:(0,a.jsx)(t,{})})},t.metadata.permalink)}))})}},6141:(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});n(758);var s=n(3526),i=n(8328),a=n(295),r=n(7189),l=n(4847),o=n(6070);function c(){const{selectMessage:e}=(0,l.W)();return t=>e(t,(0,i.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function d(e){const t=c();return(0,i.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}var g=n(6381),u=n(965),h=n(6456),p=n(3556),m=n(8149),x=n(505),b=n(2230);function j(e){let{tag:t}=e;const n=d(t);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.be,{title:n,description:t.description}),(0,o.jsx)(p.A,{tag:"blog_tags_posts"})]})}function f(e){let{tag:t,items:n,sidebar:s,listMetadata:a}=e;const r=d(t);return(0,o.jsxs)(u.A,{sidebar:s,children:[t.unlisted&&(0,o.jsx)(x.A,{}),(0,o.jsxs)("header",{className:"margin-bottom--xl",children:[(0,o.jsx)(b.A,{as:"h1",children:r}),t.description&&(0,o.jsx)("p",{children:t.description}),(0,o.jsx)(g.A,{href:t.allTagsPath,children:(0,o.jsx)(i.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,o.jsx)(m.A,{items:n}),(0,o.jsx)(h.A,{metadata:a})]})}function A(e){return(0,o.jsxs)(a.e3,{className:(0,s.A)(r.G.wrapper.blogPages,r.G.page.blogTagPostListPage),children:[(0,o.jsx)(j,{...e}),(0,o.jsx)(f,{...e})]})}},505:(e,t,n)=>{n.d(t,{A:()=>c});n(758);var s=n(3526),i=n(2122),a=n(7189),r=n(5100),l=n(6070);function o(e){let{className:t}=e;return(0,l.jsx)(r.A,{type:"caution",title:(0,l.jsx)(i.Rc,{}),className:(0,s.A)(t,a.G.common.unlistedBanner),children:(0,l.jsx)(i.Uh,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.AE,{}),(0,l.jsx)(o,{...e})]})}},2122:(e,t,n)=>{n.d(t,{AE:()=>o,Rc:()=>r,TT:()=>d,Uh:()=>l,Yh:()=>c});n(758);var s=n(8328),i=n(2451),a=n(6070);function r(){return(0,a.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,a.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,a.jsx)(i.A,{children:(0,a.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,a.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,a.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}}}]);