"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[7867],{3217:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>l});var t=a(8052),s=a(6070),i=a(5658);const o={title:"Apache OpenDAL\u2122: Access Data Freely",date:new Date("2023-07-07T00:00:00.000Z"),slug:"opendal-access-data-freely",tags:["announcement"],description:"If you're committed to building cloud-native, cross-cloud-first applications and services, or you want to support configurable storage backends to meet complex data access needs, or if you're tired of juggling various SDKs and hoping for a unified abstraction and development experience, Apache OpenDAL\u2122 will be your perfect partner.",authors:[{name:"PsiACE",url:"https://github.com/PsiACE",image_url:"https://github.com/PsiACE.png"},{name:"Xuanwo",url:"https://github.com/Xuanwo",image_url:"https://github.com/Xuanwo.png"}]},r=void 0,c={authorsImageUrls:[void 0,void 0]},l=[{value:"What is OpenDAL?",id:"what-is-opendal",level:2},{value:"Opendal Is Not a Proxy Service",id:"opendal-is-not-a-proxy-service",level:3},{value:"Opendal Is Not an SDK Aggregator",id:"opendal-is-not-an-sdk-aggregator",level:3},{value:"Advantages of OpenDAL",id:"advantages-of-opendal",level:2},{value:"Rich Service Support",id:"rich-service-support",level:3},{value:"Complete Cross-Language Bindings",id:"complete-cross-language-bindings",level:3},{value:"Powerful Middleware Support",id:"powerful-middleware-support",level:3},{value:"Easy to Use",id:"easy-to-use",level:3},{value:"Use Cases of OpenDAL",id:"use-cases-of-opendal",level:3},{value:"Future Plans of OpenDAL",id:"future-plans-of-opendal",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"If you're committed to building cloud-native, cross-cloud-first applications and services, or you want to support configurable storage backends to meet complex data access needs, or if you're tired of juggling various SDKs and hoping for a unified abstraction and development experience, Apache OpenDAL\u2122 will be your perfect partner."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"OpenDAL Arch",src:a(9990).A+"",width:"3932",height:"2662"})}),"\n",(0,s.jsx)(n.h2,{id:"what-is-opendal",children:"What is OpenDAL?"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"OpenDAL"})," is a data access layer that allows users to easily and efficiently retrieve data from various storage services in a unified way."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Data Access Layer"})," means: OpenDAL is in a critical position in the data read-write process. We shield the implementation details of different storage backends and provide a set of unified interface abstractions externally."]}),"\n",(0,s.jsxs)(n.p,{children:["Next, let's try to answer ",(0,s.jsx)(n.em,{children:'"What OpenDAL is not"'})," and deconstruct OpenDAL from another perspective:"]}),"\n",(0,s.jsx)(n.h3,{id:"opendal-is-not-a-proxy-service",children:"Opendal Is Not a Proxy Service"}),"\n",(0,s.jsx)(n.p,{children:"OpenDAL is provided in the form of a library, not as a service or application that proxies various storage backends."}),"\n",(0,s.jsx)(n.p,{children:"If you want to integrate OpenDAL into an existing project, you need to call OpenDAL's interface directly through the bindings supported by OpenDAL to access the storage services."}),"\n",(0,s.jsx)(n.h3,{id:"opendal-is-not-an-sdk-aggregator",children:"Opendal Is Not an SDK Aggregator"}),"\n",(0,s.jsx)(n.p,{children:"Although OpenDAL replaces various SDKs in the application architecture, it is not implemented as an SDK aggregator."}),"\n",(0,s.jsx)(n.p,{children:"In other words, OpenDAL does not simply call various storage service SDKs. We have developed our own docking with various storage services based on a unified Rust core to ensure that the differences between services are smoothed out."}),"\n",(0,s.jsx)(n.p,{children:"For example, for S3, OpenDAL manually constructs HTTP requests and parses HTTP responses to ensure that all behaviors comply with API specifications and are fully under the control of OpenDAL. Due to OpenDAL's native takeover of the data access process, we can easily implement unified retry and logging mechanisms for various storage backends and ensure behavioral consistency."}),"\n",(0,s.jsxs)(n.p,{children:["For compatible services with S3, due to the limitations of native storage services and differences in API implementation, compatibility and behavioral details may differ from S3. For example, OSS needs to set an independent header to ensure consistent behavior for ",(0,s.jsx)(n.code,{children:"Range"}),". In addition to docking with native storage services, OpenDAL will also perform targeted processing for compatible services to ensure users' data access experience."]}),"\n",(0,s.jsx)(n.h2,{id:"advantages-of-opendal",children:"Advantages of OpenDAL"}),"\n",(0,s.jsx)(n.p,{children:"OpenDAL is not the only project dedicated to providing data access abstraction, but compared to other similar projects, OpenDAL has the following advantages:"}),"\n",(0,s.jsx)(n.h3,{id:"rich-service-support",children:"Rich Service Support"}),"\n",(0,s.jsx)(n.p,{children:"OpenDAL supports dozens of storage services, covering a wide range of scenarios and supporting on-demand selection:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Standard Storage Protocols: FTP, HTTP, SFTP, WebDAV, etc."}),"\n",(0,s.jsx)(n.li,{children:"Object Storage Services: azblob, gcs, obs, oss, s3, etc."}),"\n",(0,s.jsx)(n.li,{children:"File Storage Services: fs, azdls, hdfs, webhdfs, ipfs, etc."}),"\n",(0,s.jsx)(n.li,{children:"Consumer Cloud Storage Service: Google Drive, OneDrive, Dropbox, etc."}),"\n",(0,s.jsx)(n.li,{children:"Key-Value Storage Service: Memory, Redis, Rocksdb, etc."}),"\n",(0,s.jsx)(n.li,{children:"Cache Storage Service: Ghac, Memcached, etc."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"complete-cross-language-bindings",children:"Complete Cross-Language Bindings"}),"\n",(0,s.jsx)(n.p,{children:"With Rust as the core, OpenDAL now provides binding support for multiple languages such as Python/Node.js/Java/C and is also actively developing bindings for other languages."}),"\n",(0,s.jsx)(n.p,{children:"Cross-language bindings not only provide unified storage access abstractions for other languages but also follow naming conventions and development habits that are common in various languages as much as possible to pave the way for quick use."}),"\n",(0,s.jsx)(n.h3,{id:"powerful-middleware-support",children:"Powerful Middleware Support"}),"\n",(0,s.jsx)(n.p,{children:"OpenDAL offers native layer support, enabling users to implement middleware or intercept for all operations."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Error Retry: OpenDAL supports fine-grained error retry capabilities. In addition to common request retries, it supports breakpoint resumable transmission without having to re-read the entire file."}),"\n",(0,s.jsx)(n.li,{children:"Observability: OpenDAL implements logging,tracing,and metrics support for all operations. Turning on middleware can directly obtain observability capabilities for storage."}),"\n",(0,s.jsx)(n.li,{children:"Concurrency control, flow control, fuzz testing, and more."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"easy-to-use",children:"Easy to Use"}),"\n",(0,s.jsx)(n.p,{children:"OpenDAL's API has been well designed and polished in actual use. The documentation covers everything and is easy to get started with. Here's an example of using Python bindings to access HDFS:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import opendal\n    \nop = opendal.Operator("hdfs", name_node="hdfs://192.16.8.10.103")\nop.read("path/to/file")\n'})}),"\n",(0,s.jsx)(n.h3,{id:"use-cases-of-opendal",children:"Use Cases of OpenDAL"}),"\n",(0,s.jsx)(n.p,{children:"Currently, OpenDAL is widely used in various scenarios that require cloud-native capabilities, including but not limited to databases, data pipelines, and caches. The main user cases include:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/datafuselabs/databend/",children:"Databend"}),": A modern Elasticity and Performance cloud data warehouse. Using OpenDAL to read and write persistent data (s3, azblob, gcs, hdfs, etc.) and cache data (fs, redis, rocksdb, moka, etc.)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/GreptimeTeam/greptimedb",children:"GreptimeDB"}),": An open-source, cloud-native, distributed time-series database. Using OpenDAL to read and write persistent data (s3, azblob, etc.)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/mozilla/sccache/",children:"mozilla/sccache"}),": ",(0,s.jsx)(n.code,{children:"sccache"})," is ",(0,s.jsx)(n.a,{href:"https://github.com/ccache/ccache",children:(0,s.jsx)(n.code,{children:"ccache"})})," with cloud storage. Using OpenDAL to read and write cache data (s3 and ghac, etc.)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/risingwavelabs/risingwave",children:"RisingWave"}),": A Distributed SQL Database for Stream Processing. Using OpenDAL to read and write persistent data (s3, azblob, hdfs, etc.)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/vectordotdev/vector",children:"Vector"}),": A high-performance observability data pipeline. Using OpenDAL to write persistent data (currently mainly using hdfs)."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"future-plans-of-opendal",children:"Future Plans of OpenDAL"}),"\n",(0,s.jsx)(n.p,{children:"In addition to further meeting the needs of cloud-native data access, OpenDAL will continue to expand user scenarios and actively explore its use in data science and mobile applications. At the same time, OpenDAL will continue to polish its existing implementations and bindings to provide users with a better integration experience."}),"\n",(0,s.jsx)(n.p,{children:"OpenDAL will also explore how to improve users' workflows in data management and service integration:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Polish the ",(0,s.jsx)(n.code,{children:"oli"})," command-line tool to help users manage data painlessly."]}),"\n",(0,s.jsxs)(n.li,{children:["Implement the ",(0,s.jsx)(n.code,{children:"oay"})," proxy service to provide users with high-quality compatible APIs."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In addition, since OpenDAL is currently a cross-language project, we also plan to write a series of introductory tutorials to help everyone learn OpenDAL from scratch while learning the language."})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},9990:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/opendal-arch-a614dff17a53ecef1fdbedb43be31c13.png"},5658:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>r});var t=a(758);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}},8052:e=>{e.exports=JSON.parse('{"permalink":"/blog/opendal-access-data-freely","editUrl":"https://github.com/apache/opendal/tree/main/website/blog/2023-07-07-apache-opendal-access-data-freely/index.md","source":"@site/blog/2023-07-07-apache-opendal-access-data-freely/index.md","title":"Apache OpenDAL\u2122: Access Data Freely","description":"If you\'re committed to building cloud-native, cross-cloud-first applications and services, or you want to support configurable storage backends to meet complex data access needs, or if you\'re tired of juggling various SDKs and hoping for a unified abstraction and development experience, Apache OpenDAL\u2122 will be your perfect partner.","date":"2023-07-07T00:00:00.000Z","tags":[{"inline":true,"label":"announcement","permalink":"/blog/tags/announcement"}],"readingTime":4.585,"hasTruncateMarker":true,"authors":[{"name":"PsiACE","url":"https://github.com/PsiACE","image_url":"https://github.com/PsiACE.png","imageURL":"https://github.com/PsiACE.png","socials":{},"key":null,"page":null},{"name":"Xuanwo","url":"https://github.com/Xuanwo","image_url":"https://github.com/Xuanwo.png","imageURL":"https://github.com/Xuanwo.png","socials":{},"key":null,"page":null}],"frontMatter":{"title":"Apache OpenDAL\u2122: Access Data Freely","date":"2023-07-07T00:00:00.000Z","slug":"opendal-access-data-freely","tags":["announcement"],"description":"If you\'re committed to building cloud-native, cross-cloud-first applications and services, or you want to support configurable storage backends to meet complex data access needs, or if you\'re tired of juggling various SDKs and hoping for a unified abstraction and development experience, Apache OpenDAL\u2122 will be your perfect partner.","authors":[{"name":"PsiACE","url":"https://github.com/PsiACE","image_url":"https://github.com/PsiACE.png","imageURL":"https://github.com/PsiACE.png"},{"name":"Xuanwo","url":"https://github.com/Xuanwo","image_url":"https://github.com/Xuanwo.png","imageURL":"https://github.com/Xuanwo.png"}]},"unlisted":false,"prevItem":{"title":"Apache OpenDAL\u2122 Internal: Data Reading","permalink":"/blog/how-opendal-read-data"},"nextItem":{"title":"Way to Go: OpenDAL successfully entered Apache Incubator","permalink":"/blog/opendal-entered-apache-incubator"}}')}}]);