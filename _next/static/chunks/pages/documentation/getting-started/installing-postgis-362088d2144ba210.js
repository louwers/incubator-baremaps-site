(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[646],{87:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/documentation/getting-started/installing-postgis",function(){return s(9792)}])},9792:function(e,t,s){"use strict";s.r(t);var n=s(5893),a=s(8863),l=s(1151);function i(e){let t=Object.assign({h1:"h1",p:"p",a:"a",pre:"pre",code:"code",span:"span"},(0,l.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{children:"Installing PostGIS"}),"\n",(0,n.jsx)(t.p,{children:"This step is not required if you plan to execute the Geocoding or IP to location examples."}),"\n",(0,n.jsxs)(t.p,{children:["For the insertion and generation of Vector tiles, you need to set up a ",(0,n.jsx)(t.a,{href:"https://postgis.net/",children:"PostGIS"})," database.\nThis database will host all the data required to generate the vector tiles."]}),"\n",(0,n.jsx)(t.p,{children:"The following docker image will allow you to jump start this installation:"}),"\n",(0,n.jsx)(t.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsxs)(t.code,{"data-language":"text","data-theme":"default",children:[(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"docker run \\"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  --name baremaps \\"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  --publish 5432:5432 \\"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  -e POSTGRES_DB=baremaps \\"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  -e POSTGRES_USER=baremaps \\"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  -e POSTGRES_PASSWORD=baremaps \\"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  -d postgis/postgis:latest"})})]})}),"\n",(0,n.jsx)(t.p,{children:"You can then stop and start the container with the following commands:"}),"\n",(0,n.jsx)(t.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsxs)(t.code,{"data-language":"text","data-theme":"default",children:[(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"docker stop baremaps"})}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"docker start baremaps"})})]})}),"\n",(0,n.jsxs)(t.p,{children:["From there you can go to the ",(0,n.jsx)(t.a,{href:"/examples/",children:"Examples"})," section. The ",(0,n.jsx)(t.a,{href:"/examples/openstreetmap/",children:"Import OSM data into PostGIS"})," example is the first step to produce custom high resolution vector tiles."]})]})}s(5675),t.default=(0,a.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(i,{...e})}):i(e)},pageOpts:{filePath:"pages/documentation/getting-started/installing-postgis.mdx",route:"/documentation/getting-started/installing-postgis",frontMatter:{layout:"default",title:"Installing PostGIS",permalink:"/getting-started/installing-postgis/"},headings:[{depth:1,value:"Installing PostGIS",id:"installing-postgis"}],title:"Installing PostGIS"},pageNextRoute:"/documentation/getting-started/installing-postgis"})}},function(e){e.O(0,[863,774,888,179],function(){return e(e.s=87)}),_N_E=e.O()}]);