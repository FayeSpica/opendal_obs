"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[6155],{5356:(e,t,a)=>{a.d(t,{in:()=>c,OU:()=>y,Ki:()=>k,kJ:()=>x,x:()=>i,e7:()=>d,J_:()=>f,Gx:()=>_});var s=a(758),n=a(8270),r=a(9362),l=a(6070);function i(){const e=(0,r.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}const o=s.createContext(null);function c(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const r=function(e){let{content:t,isBlogPostPage:a}=e;return(0,s.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return(0,l.jsx)(o.Provider,{value:r,children:t})}function d(){const e=(0,s.useContext)(o);if(null===e)throw new n.dV("BlogPostProvider");return e}var u=a(2314),m=a(5449);const h=e=>new Date(e).toISOString();function g(e){const t=e.map(j);return{author:1===t.length?t[0]:t}}function p(e,t,a){return e?{image:v({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function x(e){const{siteConfig:t}=(0,m.A)(),{withBaseUrl:a}=(0,u.hH)(),{metadata:{blogDescription:s,blogTitle:n,permalink:r}}=e,l=`${t.url}${r}`;return{"@context":"https://schema.org","@type":"Blog","@id":l,mainEntityOfPage:l,headline:n,description:s,blogPost:e.items.map((e=>function(e,t,a){const{assets:s,frontMatter:n,metadata:r}=e,{date:l,title:i,description:o,lastUpdatedAt:c}=r,d=s.image??n.image,u=n.keywords??[],m=`${t.url}${r.permalink}`,x=c?h(c):void 0;return{"@type":"BlogPosting","@id":m,mainEntityOfPage:m,url:m,headline:i,name:i,description:o,datePublished:l,...x?{dateModified:x}:{},...g(r.authors),...p(d,a,i),...u?{keywords:u}:{}}}(e.content,t,a)))}}function f(){const e=i(),{assets:t,metadata:a}=d(),{siteConfig:s}=(0,m.A)(),{withBaseUrl:n}=(0,u.hH)(),{date:r,title:l,description:o,frontMatter:c,lastUpdatedAt:x}=a,f=t.image??c.image,j=c.keywords??[],v=x?h(x):void 0,b=`${s.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":b,mainEntityOfPage:b,url:b,headline:l,name:l,description:o,datePublished:r,...v?{dateModified:v}:{},...g(a.authors),...p(f,n,l),...j?{keywords:j}:{},isPartOf:{"@type":"Blog","@id":`${s.url}${e.blogBasePath}`,name:e.blogTitle}}}function j(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function v(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}var b=a(5557),A=a(6381),N=a(9280),w=a(1739);function _(e){const{pathname:t}=(0,b.zy)();return(0,s.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,w.ys)(e.permalink,t))}(e,t)))),[e,t])}function k(e){const t=(0,N.$z)(e,(e=>`${new Date(e.date).getFullYear()}`)),a=Object.entries(t);return a.reverse(),a}function y(e){let{items:t,ulClassName:a,liClassName:s,linkClassName:n,linkActiveClassName:r}=e;return(0,l.jsx)("ul",{className:a,children:t.map((e=>(0,l.jsx)("li",{className:s,children:(0,l.jsx)(A.A,{isNavLink:!0,to:e.permalink,className:n,activeClassName:r,children:e.title})},e.permalink)))})}},965:(e,t,a)=>{a.d(t,{A:()=>T});var s=a(758),n=a(3526),r=a(4203),l=a(4751),i=a(8328),o=a(5356),c=a(484),d=a(2230),u=a(6070);function m(e){let{year:t,yearGroupHeadingClassName:a,children:s}=e;return(0,u.jsxs)("div",{role:"group",children:[(0,u.jsx)(d.A,{as:"h3",className:a,children:t}),s]})}function h(e){let{items:t,yearGroupHeadingClassName:a,ListComponent:s}=e;if((0,c.p)().blog.sidebar.groupByYear){const e=(0,o.Ki)(t);return(0,u.jsx)(u.Fragment,{children:e.map((e=>{let[t,n]=e;return(0,u.jsx)(m,{year:t,yearGroupHeadingClassName:a,children:(0,u.jsx)(s,{items:n})},t)}))})}return(0,u.jsx)(s,{items:t})}const g=(0,s.memo)(h),p="sidebar_gBQ4",x="sidebarItemTitle_sFqA",f="sidebarItemList_GrSo",j="sidebarItem_rPLS",v="sidebarItemLink_XgkD",b="sidebarItemLinkActive_j5og",A="yearGroupHeading_rIyo",N=e=>{let{items:t}=e;return(0,u.jsx)(o.OU,{items:t,ulClassName:(0,n.A)(f,"clean-list"),liClassName:j,linkClassName:v,linkActiveClassName:b})};function w(e){let{sidebar:t}=e;const a=(0,o.Gx)(t.items);return(0,u.jsx)("aside",{className:"col col--3",children:(0,u.jsxs)("nav",{className:(0,n.A)(p,"thin-scrollbar"),"aria-label":(0,i.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,u.jsx)("div",{className:(0,n.A)(x,"margin-bottom--md"),children:t.title}),(0,u.jsx)(g,{items:a,ListComponent:N,yearGroupHeadingClassName:A})]})})}const _=(0,s.memo)(w);var k=a(3118);const y="yearGroupHeading_cq9g",U=e=>{let{items:t}=e;return(0,u.jsx)(o.OU,{items:t,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"})};function C(e){let{sidebar:t}=e;const a=(0,o.Gx)(t.items);return(0,u.jsx)(g,{items:a,ListComponent:U,yearGroupHeadingClassName:y})}function M(e){return(0,u.jsx)(k.GX,{component:C,props:e})}const P=(0,s.memo)(M);function B(e){let{sidebar:t}=e;const a=(0,l.l)();return t?.items.length?"mobile"===a?(0,u.jsx)(P,{sidebar:t}):(0,u.jsx)(_,{sidebar:t}):null}function T(e){const{sidebar:t,toc:a,children:s,...l}=e,i=t&&t.items.length>0;return(0,u.jsx)(r.A,{...l,children:(0,u.jsx)("div",{className:"container margin-vert--lg",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)(B,{sidebar:t}),(0,u.jsx)("main",{className:(0,n.A)("col",{"col--7":i,"col--9 col--offset-1":!i}),children:s}),a&&(0,u.jsx)("div",{className:"col col--2",children:a})]})})})}},9047:(e,t,a)=>{a.d(t,{A:()=>z});a(758);var s=a(3526),n=a(5356),r=a(6070);function l(e){let{children:t,className:a}=e;return(0,r.jsx)("article",{className:a,children:t})}var i=a(6381);const o={title:"title_baV2"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:l}=(0,n.e7)(),{permalink:c,title:d}=a,u=l?"h1":"h2";return(0,r.jsx)(u,{className:(0,s.A)(o.title,t),children:l?d:(0,r.jsx)(i.A,{to:c,children:d})})}var d=a(8328),u=a(4847),m=a(3924);const h={container:"container_NGf5"};function g(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,u.W)();return t=>{const a=Math.ceil(t);return e(a,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,r.jsx)(r.Fragment,{children:a(t)})}function p(e){let{date:t,formattedDate:a}=e;return(0,r.jsx)("time",{dateTime:t,children:a})}function x(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function f(e){let{className:t}=e;const{metadata:a}=(0,n.e7)(),{date:l,readingTime:i}=a,o=(0,m.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,s.A)(h.container,"margin-vert--md",t),children:[(0,r.jsx)(p,{date:l,formattedDate:(c=l,o.format(new Date(c)))}),void 0!==i&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{}),(0,r.jsx)(g,{readingTime:i})]})]});var c}const j="githubSvg_ue1x";const v="xSvg_awOn";const b=function(e){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,r.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,r.jsx)("path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"}),(0,r.jsx)("path",{d:"M3.6 9h16.8"}),(0,r.jsx)("path",{d:"M3.6 15h16.8"}),(0,r.jsx)("path",{d:"M11.5 3a17 17 0 0 0 0 18"}),(0,r.jsx)("path",{d:"M12.5 3a17 17 0 0 1 0 18"})]})},A={authorSocials:"authorSocials_d2pO",authorSocialLink:"authorSocialLink_SNsV",authorSocialIcon:"authorSocialIcon_z4R3"},N={twitter:{Icon:function(e){return(0,r.jsx)("svg",{viewBox:"0 0 256 209",width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",...e,children:(0,r.jsx)("path",{d:"M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45",fill:"#55acee"})})},label:"Twitter"},github:{Icon:function(e){return(0,r.jsx)("svg",{viewBox:"0 0 256 250",width:"1em",height:"1em",...e,className:(0,s.A)(e.className,j),xmlns:"http://www.w3.org/2000/svg",style:{"--dark":"#000","--light":"#fff"},preserveAspectRatio:"xMidYMid",children:(0,r.jsx)("path",{d:"M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"})})},label:"GitHub"},stackoverflow:{Icon:function(e){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 169.61 200",width:"1em",height:"1em",...e,children:[(0,r.jsx)("path",{d:"M140.44 178.38v-48.65h21.61V200H0v-70.27h21.61v48.65z",fill:"#bcbbbb"}),(0,r.jsx)("path",{d:"M124.24 140.54l4.32-16.22-86.97-17.83-3.78 17.83zM49.7 82.16L130.72 120l7.56-16.22-81.02-37.83zm22.68-40l68.06 57.3 11.35-13.51-68.6-57.3-11.35 13.51zM116.14 0l-14.59 10.81 53.48 71.89 14.58-10.81zM37.81 162.16h86.43v-16.21H37.81z",fill:"#f48024"})]})},label:"Stack Overflow"},linkedin:{Icon:function(e){return(0,r.jsx)("svg",{width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 256 256",...e,children:(0,r.jsx)("path",{d:"M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453",fill:"#0A66C2"})})},label:"LinkedIn"},x:{Icon:function(e){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 1200 1227",...e,className:(0,s.A)(e.className,v),style:{"--dark":"#000","--light":"#fff"},children:(0,r.jsx)("path",{d:"M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"})})},label:"X"}};function w(e){let{platform:t,link:a}=e;const{Icon:n,label:l}=N[o=t]??{Icon:b,label:o};var o;return(0,r.jsx)(i.A,{className:A.authorSocialLink,href:a,title:l,children:(0,r.jsx)(n,{className:(0,s.A)(A.authorSocialLink)})})}function _(e){let{author:t}=e;const a=Object.entries(t.socials??{});return(0,r.jsx)("div",{className:A.authorSocials,children:a.map((e=>{let[t,a]=e;return(0,r.jsx)(w,{platform:t,link:a},t)}))})}var k=a(2230);const y={authorImage:"authorImage_AJIl","author-as-h1":"author-as-h1_x3NB","author-as-h2":"author-as-h2_jRdj",authorDetails:"authorDetails_sZxj",authorName:"authorName_R1BY",authorTitle:"authorTitle_7Fhs",authorBlogPostCount:"authorBlogPostCount_V5mK"};function U(e){return e.href?(0,r.jsx)(i.A,{...e}):(0,r.jsx)(r.Fragment,{children:e.children})}function C(e){let{title:t}=e;return(0,r.jsx)("small",{className:y.authorTitle,title:t,children:t})}function M(e){let{name:t,as:a}=e;return a?(0,r.jsx)(k.A,{as:a,className:y.authorName,children:t}):(0,r.jsx)("span",{className:y.authorName,children:t})}function P(e){let{count:t}=e;return(0,r.jsx)("span",{className:(0,s.A)(y.authorBlogPostCount),children:t})}function B(e){let{as:t,author:a,className:n,count:l}=e;const{name:i,title:o,url:c,imageURL:d,email:u,page:m}=a,h=m?.permalink||c||u&&`mailto:${u}`||void 0;return(0,r.jsxs)("div",{className:(0,s.A)("avatar margin-bottom--sm",n,y[`author-as-${t}`]),children:[d&&(0,r.jsx)(U,{href:h,className:"avatar__photo-link",children:(0,r.jsx)("img",{className:(0,s.A)("avatar__photo",y.authorImage),src:d,alt:i})}),(i||o)&&(0,r.jsxs)("div",{className:(0,s.A)("avatar__intro",y.authorDetails),children:[(0,r.jsxs)("div",{className:"avatar__name",children:[i&&(0,r.jsx)(U,{href:h,children:(0,r.jsx)(M,{name:i,as:t})}),void 0!==l&&(0,r.jsx)(P,{count:l})]}),!!o&&(0,r.jsx)(C,{title:o}),(0,r.jsx)(_,{author:a})]})]})}const T={authorCol:"authorCol_Qrfb",imageOnlyAuthorRow:"imageOnlyAuthorRow_Badp",imageOnlyAuthorCol:"imageOnlyAuthorCol_LruT"};function L(e){let{className:t}=e;const{metadata:{authors:a},assets:l}=(0,n.e7)();if(0===a.length)return null;const i=a.every((e=>{let{name:t}=e;return!t})),o=1===a.length;return(0,r.jsx)("div",{className:(0,s.A)("margin-top--md margin-bottom--sm",i?T.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,r.jsx)("div",{className:(0,s.A)(!i&&(o?"col col--12":"col col--6"),i?T.imageOnlyAuthorCol:T.authorCol),children:(0,r.jsx)(B,{author:{...e,imageURL:l.authorsImageUrls[t]??e.imageURL}})},t)))})}function I(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(c,{}),(0,r.jsx)(f,{}),(0,r.jsx)(L,{})]})}var R=a(1777),O=a(4223);function F(e){let{children:t,className:a}=e;const{isBlogPostPage:l}=(0,n.e7)();return(0,r.jsx)("div",{id:l?R.LU:void 0,className:(0,s.A)("markdown",a),children:(0,r.jsx)(O.A,{children:t})})}var G=a(7189),S=a(6808),$=a(2302);function H(){return(0,r.jsx)("b",{children:(0,r.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function D(e){const{blogPostTitle:t,...a}=e;return(0,r.jsx)(i.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,r.jsx)(H,{})})}function Z(){const{metadata:e,isBlogPostPage:t}=(0,n.e7)(),{tags:a,title:l,editUrl:i,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,u=!t&&o,m=a.length>0;if(!(m||u||i))return null;if(t){const e=!!(i||d||c);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[m&&(0,r.jsx)("div",{className:(0,s.A)("row","margin-top--sm",G.G.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)($.A,{tags:a})})}),e&&(0,r.jsx)(S.A,{className:(0,s.A)("margin-top--sm",G.G.blog.blogFooterEditMetaRow),editUrl:i,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[m&&(0,r.jsx)("div",{className:(0,s.A)("col",{"col--9":u}),children:(0,r.jsx)($.A,{tags:a})}),u&&(0,r.jsx)("div",{className:(0,s.A)("col text--right",{"col--3":m}),children:(0,r.jsx)(D,{blogPostTitle:l,to:e.permalink})})]})}function z(e){let{children:t,className:a}=e;const i=function(){const{isBlogPostPage:e}=(0,n.e7)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(l,{className:(0,s.A)(i,a),children:[(0,r.jsx)(I,{}),(0,r.jsx)(F,{children:t}),(0,r.jsx)(Z,{})]})}},6808:(e,t,a)=>{a.d(t,{A:()=>x});a(758);var s=a(3526),n=a(8328),r=a(7189),l=a(6381);const i={iconEdit:"iconEdit_vgs4"};var o=a(6070);function c(e){let{className:t,...a}=e;return(0,o.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.A)(i.iconEdit,t),"aria-hidden":"true",...a,children:(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function d(e){let{editUrl:t}=e;return(0,o.jsxs)(l.A,{to:t,className:r.G.common.editThisPage,children:[(0,o.jsx)(c,{}),(0,o.jsx)(n.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var u=a(3924);function m(e){let{lastUpdatedAt:t}=e;const a=new Date(t),s=(0,u.i)({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(a);return(0,o.jsx)(n.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,o.jsx)("b",{children:(0,o.jsx)("time",{dateTime:a.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function h(e){let{lastUpdatedBy:t}=e;return(0,o.jsx)(n.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,o.jsx)("b",{children:t})},children:" by {user}"})}function g(e){let{lastUpdatedAt:t,lastUpdatedBy:a}=e;return(0,o.jsxs)("span",{className:r.G.common.lastUpdated,children:[(0,o.jsx)(n.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,o.jsx)(m,{lastUpdatedAt:t}):"",byUser:a?(0,o.jsx)(h,{lastUpdatedBy:a}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const p={lastUpdated:"lastUpdated_l9Jf"};function x(e){let{className:t,editUrl:a,lastUpdatedAt:n,lastUpdatedBy:r}=e;return(0,o.jsxs)("div",{className:(0,s.A)("row",t),children:[(0,o.jsx)("div",{className:"col",children:a&&(0,o.jsx)(d,{editUrl:a})}),(0,o.jsx)("div",{className:(0,s.A)("col",p.lastUpdated),children:(n||r)&&(0,o.jsx)(g,{lastUpdatedAt:n,lastUpdatedBy:r})})]})}},6393:(e,t,a)=>{a.d(t,{A:()=>l});a(758);var s=a(3526),n=a(6381),r=a(6070);function l(e){const{permalink:t,title:a,subLabel:l,isNext:i}=e;return(0,r.jsxs)(n.A,{className:(0,s.A)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,r.jsx)("div",{className:"pagination-nav__label",children:a})]})}},9036:(e,t,a)=>{a.d(t,{A:()=>i});a(758);var s=a(3526),n=a(6381);const r={tag:"tag_c8SB",tagRegular:"tagRegular_UGa9",tagWithCount:"tagWithCount_HVZ2"};var l=a(6070);function i(e){let{permalink:t,label:a,count:i,description:o}=e;return(0,l.jsxs)(n.A,{href:t,title:o,className:(0,s.A)(r.tag,i?r.tagWithCount:r.tagRegular),children:[a,i&&(0,l.jsx)("span",{children:i})]})}},2302:(e,t,a)=>{a.d(t,{A:()=>o});a(758);var s=a(3526),n=a(8328),r=a(9036);const l={tags:"tags_oPMp",tag:"tag_dWG9"};var i=a(6070);function o(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(n.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,s.A)(l.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,i.jsx)("li",{className:l.tag,children:(0,i.jsx)(r.A,{...e})},e.permalink)))})]})}},3924:(e,t,a)=>{a.d(t,{i:()=>n});var s=a(5449);function n(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,s.A)(),a=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,s.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:a,...e})}},4847:(e,t,a)=>{a.d(t,{W:()=>c});var s=a(758),n=a(5449);const r=["zero","one","two","few","many","other"];function l(e){return r.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,n.A)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=o();return{selectMessage:(t,a)=>function(e,t,a){const s=e.split("|");if(1===s.length)return s[0];s.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const n=a.select(t),r=a.pluralForms.indexOf(n);return s[Math.min(r,s.length-1)]}(a,t,e)}}}}]);