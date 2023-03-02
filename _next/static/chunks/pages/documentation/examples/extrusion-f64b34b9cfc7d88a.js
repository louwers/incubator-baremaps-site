(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[226],{4368:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/documentation/examples/extrusion",function(){return n(3317)}])},3317:function(s,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});var l=n(5893),r=n(8863),i=n(1151),o=n(5675),t=n.n(o),a={src:"/_next/static/media/extrusion.9934b529.png",height:887,width:1392,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAoUlEQVR42gUASwqCQHRu7kHEVa4UISQk3AoSgi0SM/+a/8xCHRptxl4gjLFACEm8IHOSvHazonUdL3W6/p3kRSOg7N4ae80EXtThoFvA745gnQOglEHVDAbqnrN+sn0QFWNVNJte3IiSZVnZtoFzK3Q0YWJ+CIWqHSEtXuBFD6DsB4xt4IW1ieK04sKkVK9hK+VlL/txLffDKH3XRZ3mmfsDi9OKz/1v2TMAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5};function c(s){let e=Object.assign({h1:"h1",p:"p",a:"a",pre:"pre",code:"code",span:"span",h2:"h2"},(0,i.ah)(),s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{children:"Extrusion of vector tiles from OSM data"}),"\n",(0,l.jsxs)(e.p,{children:["This example builds upon the ",(0,l.jsx)(e.a,{href:"https://www.baremaps.com/examples/openstreetmap/",children:"OpenStreetMap example"})," and shows how 3d\nbuildings can be extruded with Maplibre. First, start by downloading the OSM data for London in the current directory."]}),"\n",(0,l.jsx)(e.p,{children:"To import London data in the database."}),"\n",(0,l.jsx)(e.pre,{"data-language":"text","data-theme":"default",children:(0,l.jsx)(e.code,{"data-language":"text","data-theme":"default",children:(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"baremaps workflow execute --file examples/extrusion/workflow.json"})})})}),"\n",(0,l.jsxs)(e.p,{children:["In the ",(0,l.jsx)(e.a,{href:"https://raw.githubusercontent.com/apache/incubator-baremaps/main/examples/extrusion/tileset.json",children:"tileset.json"}),"\nfile, notice the SQL query associated with the building layer. Here, the number of levels stored in OSM is multiplied by\n3, which rawly corresponds to the height of a level in meters."]}),"\n",(0,l.jsx)(e.pre,{"data-language":"sql","data-theme":"default",children:(0,l.jsxs)(e.code,{"data-language":"sql","data-theme":"default",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"SELECT"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" id,"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"       tags "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"||"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" jsonb_build_object("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'building:height'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", ("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"CASE"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                                                          "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"WHEN"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" tags "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"->>"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'building:levels'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ~ "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'^[0-9\\\\.]+$'"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                                                              "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"THEN"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" tags "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"->>"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'building:levels'"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                                                          "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"ELSE"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'1'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"END"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")::"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"real"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"3"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"),"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"       geom"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"FROM"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" osm_ways"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"WHERE"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" tags ? "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'building'"})]})]})}),"\n",(0,l.jsxs)(e.p,{children:["This property is then used in\nthe ",(0,l.jsx)(e.a,{href:"https://raw.githubusercontent.com/apache/incubator-baremaps/main/examples/extrusion/style.json",children:"style.json"})," file to\nextrude the buildings."]}),"\n",(0,l.jsx)(e.pre,{"data-language":"json","data-theme":"default",children:(0,l.jsxs)(e.code,{"data-language":"json","data-theme":"default",children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  ..."})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"layers"'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    {"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"id"'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"building"'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"type"'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"fill-extrusion"'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"source"'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"baremaps"'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"source-layer"'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"building"'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"paint"'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"fill-extrusion-color"'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"rgb(152, 174, 221)"'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"fill-extrusion-height"'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"get"'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"building:height"'})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        ]"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"fill-extrusion-base"'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"fill-extrusion-opacity"'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0.9"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      }"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  ]"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  ..."})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,l.jsxs)(e.p,{children:["To preview this example, start the tile viewer. Here, the cache directive is\na ",(0,l.jsx)(e.a,{href:"https://www.javadoc.io/doc/com.github.ben-manes.caffeine/caffeine/2.2.2/com/github/benmanes/caffeine/cache/CaffeineSpec.html",children:"caffeine specification"}),"\nfor a 100MB tile cache."]}),"\n",(0,l.jsx)(e.pre,{"data-language":"shell","data-theme":"default",children:(0,l.jsxs)(e.code,{"data-language":"shell","data-theme":"default",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"baremaps "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"map"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"dev"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--database"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'jdbc:postgresql://localhost:5432/baremaps?user=baremaps&password=baremaps'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--tileset"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'tileset.json'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" \\"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--style"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'style.json'"})]})]})}),"\n",(0,l.jsxs)(e.p,{children:["Well done, a map of London with extruded buildings should now appear in your ",(0,l.jsx)(e.a,{href:"http://localhost:9000/",children:"browser"}),"!"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(t(),{alt:"Tile viewer",placeholder:"blur",src:a})}),"\n",(0,l.jsx)(e.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,l.jsx)(e.p,{children:"In this tutorial, we learnt how to import OSM data in PostGIS with a workflow and then use the MVT specification to extrude the vector tiles into a 3d object."})]})}var h=(0,r.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,i.ah)(),s.components);return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(c,{...s})}):c(s)},pageOpts:{filePath:"pages/documentation/examples/extrusion.mdx",route:"/documentation/examples/extrusion",frontMatter:{layout:"default",title:"Extrusion of vector tiles from OSM data",permalink:"/examples/extrusion/"},headings:[{depth:1,value:"Extrusion of vector tiles from OSM data",id:"extrusion-of-vector-tiles-from-osm-data"},{depth:2,value:"Conclusion",id:"conclusion"}],title:"Extrusion of vector tiles from OSM data"},pageNextRoute:"/documentation/examples/extrusion"})}},function(s){s.O(0,[863,774,888,179],function(){return s(s.s=4368)}),_N_E=s.O()}]);