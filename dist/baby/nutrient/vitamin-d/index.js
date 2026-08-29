import{useMDXComponents as M}from"@mdx-js/react";import{Alert as d,Text as c}from"@m-context/ui";import{Fieldset as D,Text as a,Input as b}from"@m-context/ui";import{useState as u,useMemo as y}from"react";import w from"big.js";import{jsx as l,jsxs as s}from"react/jsx-runtime";function z(o){let n=500;return o<1?n=700:o<3?n=800:o<5?n=850:o<9&&(n=600),n}function U(o){return o<6?1.5:o<12?1.7:o<24?3.1:3}function v(o){if(o<400)return s(a,{color:"error",bold:!0,size:"sm",children:["< 400IU","\uFF0C\u54A8\u8BE2\u513F\u79D1\u533B\u751F\u8003\u8651\u8865\u5145D3"]});if(o<=600)return s(a,{color:"success",bold:!0,size:"sm",children:["400\u2011600IU","\uFF0C\u7406\u60F3\u533A\u95F4"]});if(o<=1e3)return s(a,{color:"warning",bold:!0,size:"sm",children:["600\u20111000IU","\uFF0C\u54A8\u8BE2\u513F\u79D1\u533B\u751F\u8003\u8651\u4E0D\u7EE7\u7EED\u53E0\u52A0\u6EF4\u5242"]});if(o>1e3)return s(a,{color:"error",bold:!0,size:"sm",children:["> 1000IU","\uFF0C\u53C2\u8003\u8010\u53D7\u4E0A\u9650\uFF0C\u54A8\u8BE2\u513F\u79D1\u533B\u751F"]})}function I(){let[o,n]=u(1.5),[m,g]=u(850),[p,f]=u(3),_=y(()=>{try{return new w(o).times(40).times(new w(m).div(100)).toNumber()}catch{return"-"}},[o,m]),T=r=>{let i=Math.abs(Number.parseInt(r.target.value));if(isNaN(i)){f(r.target.value);return}i<0?i=0:i>35&&(i=35),f(i),g(z(i)),n(U(i))},x=(r,i)=>{if(r===""){i(r);return}let h=Number(r);isNaN(h)?i(r):i(Math.abs(h))};return s(D,{className:"bg-base-200 border-base-300 rounded-box not-prose w-fit border p-4",children:[l(D.Legend,{children:l(a,{size:"xl",children:"\u6765\u81EA\u5976\u7C89\u7684\u7EF4\u751F\u7D20 D \u6444\u5165\u91CF\u8BA1\u7B97"})}),l("label",{className:"label",children:s(a,{bold:!0,color:"primary",size:"sm",children:["\u6BCF100\u6BEB\u5347 ",l(a,{color:"success",children:"(\u6309\u5976\u7C89\u7F50\u6BD4\u4F8B\u51B2\u8C03\u597D\u7684\u5976)"})," ",l(a,{color:"primary",children:"\u7EF4\u751F\u7D20D"})," \u542B\u91CF"]})}),s("label",{className:"input w-fit",children:["\u7EF4D\u542B\u91CF",l(b,{max:4,min:1,step:.1,type:"number",className:"input input-lg w-20",value:o,onChange:r=>x(r.target.value,n)}),l("span",{className:"badge badge-secondary badge-ghost",children:"ug"})]}),l("label",{className:"label mt-3",children:l(a,{bold:!0,color:"primary",size:"sm",children:"\u4E00\u5929\u51B2\u8C03\u5976\u603B\u6444\u5165\u91CF\uFF08\u6BEB\u5347\uFF09"})}),s("label",{className:"input w-fit",children:["\u51B2\u8C03\u5976\u91CF",l(b,{min:100,step:10,type:"number",className:"input input-lg w-20",value:m,onChange:r=>x(r.target.value,g)}),l("span",{className:"badge badge-secondary badge-ghost",children:"ml"})]}),l("label",{className:"label mt-3",children:s(a,{bold:!0,color:"secondary",size:"sm",children:["\u5DF2\u6EE1",p,"\u4E2A\u6708\uFF0C\u8FD8\u6CA1\u6EE1",p+1,"\u4E2A\u6708"]})}),s("label",{className:"input w-fit",children:["\u5A74\u513F\u6708\u9F84",l(b,{max:35,min:0,step:1,type:"number",className:"input input-lg w-20",value:p,onChange:T}),l("span",{className:"badge badge-secondary badge-ghost",children:"\u6708"})]}),l("p",{children:"\u4EC5\u8BA1\u7B9736\u4E2A\u6708\u9F84\u524D\u7684"}),s("p",{children:[l("br",{}),s(a,{size:"lg",children:["\u5976\u7C89\u7EF4\u751F\u7D20D\u6444\u5165\u91CF"," ",s(a,{bold:!0,color:"primary",children:[_," IU"]})]}),l("br",{}),v(_)]})]})}import{Fragment as C,jsx as e,jsxs as t}from"react/jsx-runtime";var A={title:"\u7EF4\u751F\u7D20D",description:"\u6709\u52A9\u4E8E\u5B69\u5B50\u957F\u51FA\u5F3A\u58EE\u7684\u9AA8\u9ABC\u3002\u6240\u6709\u5B69\u5B50\u51FA\u751F\u540E\u4E0D\u4E45\u5C31\u9700\u8981\u8865\u5145\u7EF4\u751F\u7D20D\u3002\u6BCD\u4E73\u901A\u5E38\u65E0\u6CD5\u63D0\u4F9B\u5A74\u513F\u6240\u9700\u7684\u5168\u90E8\u7EF4\u751F\u7D20D\u3002",publishedAt:"2026\u5E7408\u670819\u65E5 \u661F\u671F\u4E09 05:36:25",updatedAt:"2026\u5E7408\u670826\u65E5 \u661F\u671F\u4E09 15:27:03"};function N(o){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...M(),...o.components};return t(C,{children:[e(n.h2,{id:"\u7EF4\u751F\u7D20d\u7684\u4F5C\u7528",children:"\u7EF4\u751F\u7D20D\u7684\u4F5C\u7528"}),`
`,e(n.p,{children:"\u7EF4\u751F\u7D20D\u6709\u52A9\u4E8E\u5B69\u5B50\u5EFA\u7ACB\u5F3A\u5065\u7684\u9AA8\u9ABC\uFF0C\u9884\u9632\u4F5D\u507B\u75C5\u3002\u4F5D\u507B\u75C5\u662F\u4E00\u79CD\u9AA8\u9ABC\u53D8\u8F6F\u7684\u75BE\u75C5\uFF0C\u53EF\u80FD\u53D1\u751F\u5728\u6210\u957F\u4E2D\u7684\u513F\u7AE5\u8EAB\u4E0A\u3002"}),`
`,t(n.blockquote,{children:[`
`,t(n.p,{children:[e(n.a,{href:"https://www.cnsoc.org/drpostand/?f_link_type=f_linkinlinenote&flow_extra=eyJpbmxpbmVfZGlzcGxheV9wb3NpdGlvbiI6MCwiZG9jX3Bvc2l0aW9uIjowLCJkb2NfaWQiOiI0ZWViMzc0ODY1N2ZjYzQyLTRhYWM5OWUxMzgwN2M5M2QifQ%3D%3D",children:"\u300A\u4E2D\u56FD\u8425\u517B\u5B66\u4F1A DRIs 2023\u7248\u300B"}),e(n.br,{}),`
`,e(n.a,{href:"https://www.cdc.gov/infant-toddler-nutrition/vitamins-minerals/vitamin-d.html?f_link_type=f_linkinlinenote&flow_extra=eyJpbmxpbmVfZGlzcGxheV9wb3NpdGlvbiI6MCwiZG9jX3Bvc2l0aW9uIjowLCJkb2NfaWQiOiIzNTNmMTZjMTI0MWM1MzgxLTA2MWRmMzFiYzQ4ODU1ZmUifQ%3D%3D",children:"\u7EF4\u751F\u7D20D"})]}),`
`]}),`
`,e(n.h2,{id:"\u6444\u5165\u91CF",children:"\u6444\u5165\u91CF"}),`
`,t(n.blockquote,{children:[`
`,e(n.p,{children:e(n.a,{href:"https://www.sxcdc.cn/zxzx/rdjd/art/2023/art_a3b02966b17c4b22b07f3766eb9d96cb.html?f_link_type=f_linkinlinenote&flow_extra=eyJpbmxpbmVfZGlzcGxheV9wb3NpdGlvbiI6MCwiZG9jX3Bvc2l0aW9uIjowLCJkb2NfaWQiOiJlMzVhYWZmNzdjMWMxNDg1LTdlYzliZWI0YjI3NDFhMmMifQ%3D%3D",children:"\u4E0D\u540C\u5E74\u9F84\u4EBA\u7FA4\u9700\u6C42\u91CF\u4E0D\u540C"})}),`
`]}),`
`,e(n.h3,{id:"\u5B69\u5B50\u4EC0\u4E48\u65F6\u5019\u9700\u8981\u9700\u8981\u591A\u5C11",children:"\u5B69\u5B50\u4EC0\u4E48\u65F6\u5019\u9700\u8981\uFF0C\u9700\u8981\u591A\u5C11"}),`
`,e(n.p,{children:"\u6240\u6709\u5B69\u5B50\u51FA\u751F\u540E\u4E0D\u4E45\u5C31\u9700\u8981\u8865\u5145\u7EF4\u751F\u7D20D\u3002"}),`
`,t(n.ul,{children:[`
`,t(n.li,{children:["0-12\u6708\u9F84\u6BCF\u5929\u9700\u8981 ",e(n.strong,{children:"400 IU"})," ",e(c,{color:"primary",bold:!0,children:"(10ug)"})," \u7EF4\u751F\u7D20D\u3002 ",e(c,{size:"lg",bg:!0,bold:!0,color:"warning",children:"\u4E0A\u9650\u662F 1000 IU (25ug)"})]}),`
`,t(n.li,{children:["12-36\u6708\u9F84\u6BCF\u5929\u9700\u8981 ",e(n.strong,{children:"400-600 IU"})," ",e(c,{color:"primary",bold:!0,children:"(10-15ug)"})," \u7684\u7EF4\u751F\u7D20D\u3002",e(c,{size:"lg",bg:!0,bold:!0,color:"warning",children:"\u4E0A\u9650\u662F 1500 IU (38ug)"})]}),`
`]}),`
`,e(d,{color:"primary",variant:"soft",children:t(n.ul,{children:[`
`,e(n.li,{children:"\u56FD\u9645\u5355\u4F4D\uFF08IU\uFF09\u662F\u7EF4\u751F\u7D20\u548C\u77FF\u7269\u8D28\u7684\u8BA1\u91CF\u5355\u4F4D\u3002"}),`
`,t(n.li,{children:[`
`,e(c,{bold:!0,children:"1ug(\u6BEB\u514B) = 40 IU"}),`
`]}),`
`,t(n.li,{children:["\u5355\u4F4D\u540E\u9762\u7684 ",e(n.code,{children:"d"})," \u8868\u793A\u5929\uFF0C\u5982 ",e(n.strong,{children:"400 IU/d = 400 \u5355\u4F4D/\u5929"})]}),`
`]})}),`
`,e(n.h3,{id:"\u53EF\u8010\u53D7\u6700\u9AD8\u6444\u5165\u91CF-ul-\u957F\u671F\u603B\u6444\u5165\u4E0D\u8981\u8D85\u8FC7\u98DF\u7269--\u6EF4\u5242\u5168\u90E8\u7B97\u5165",children:"\u53EF\u8010\u53D7\u6700\u9AD8\u6444\u5165\u91CF UL \uFF08\u957F\u671F\u603B\u6444\u5165\u4E0D\u8981\u8D85\u8FC7\uFF0C\u98DF\u7269 + \u6EF4\u5242\u5168\u90E8\u7B97\u5165\uFF09"}),`
`,e(d,{color:"success",variant:"soft",children:t(n.ul,{children:[`
`,t(n.li,{children:[`
`,e(c,{bold:!0,children:"0-6 \u6708\u9F84 \u2266 1000 IU (25ug) / \u5929"}),`
`]}),`
`,t(n.li,{children:[`
`,e(c,{bold:!0,children:"7-12 \u6708\u9F84 \u2266 1500 IU (38ug) / \u5929"}),`
`]}),`
`,t(n.li,{children:[`
`,e(c,{bold:!0,children:"1-3 \u5C81 \u2266 2500 IU (63ug) / \u5929"}),`
`]}),`
`]})}),`
`,e(n.h2,{id:"\u6444\u5165\u65B9\u5F0F",children:"\u6444\u5165\u65B9\u5F0F"}),`
`,t(n.ul,{children:[`
`,t(n.li,{children:["\u7ECF\u5E38\u6652\u592A\u9633\uFF0C\u4EBA\u4F53\u6240\u9700\u7EF4\u751F\u7D20D\u7EA690%\u7531\u76AE\u80A4\u5185\u5408\u6210\uFF0C",e(n.strong,{children:"\u6BCF\u5929\u63A5\u53D7\u65E5\u5149\u7167\u5C04\uFF08\u5305\u62EC\u6F2B\u5C04\uFF09\u7EA630 min\uFF0C\u5373\u53EF\u6EE1\u8DB3\u4EBA\u4F53\u7EF4\u751F\u7D20D\u7684\u9700\u6C42\u3002"})]}),`
`,e(n.li,{children:"\u8865\u5145\u7EF4\u751F\u7D20D\u6EF4\u5242\uFF0C\u54A8\u8BE2\u533B\u751F\u6839\u636E\u60C5\u51B5\u8865\u5145\u7EA6400 IU/d ~ 800 IU/d\u3002"}),`
`,t(n.li,{children:["\u914D\u65B9\u5976\u7C89\uFF0C",e(n.code,{children:"\u56FD\u6807GB10765\u20112021"})," \u5F3A\u5236\u8981\u6C42\u914D\u65B9\u5976\u7C89\u5FC5\u987B\u542B\u6709\u7EF4\u751F\u7D20A\u3001\u7EF4\u751F\u7D20D\uFF0C\u5C5E\u4E8E\u5FC5\u987B\u8425\u517B\u3002"]}),`
`]}),`
`,e(n.h2,{id:"\u8BA1\u7B97\u5DE5\u5177",children:"\u8BA1\u7B97\u5DE5\u5177"}),`
`,t(n.blockquote,{children:[`
`,e(c,{color:"error",children:"\u672C\u5DE5\u5177\u4EC5\u8BA1\u7B97\u914D\u65B9\u5976\u7C89\u81EA\u5E26\u7684\u7EF4\u751F\u7D20D\uFF0C\u4E0D\u5305\u542B\u53E6\u5916\u5403\u7684 D3/AD \u6EF4\u5242\uFF1B\u5982\u9700\u7B97\u5168\u5929\u603B\u6444\u5165\uFF0C\u9700\u8981\u624B\u52A8\u52A0\u4E0A\u8865\u5145\u5242\u7684\u5242\u91CF\u3002  "}),`
`]}),`
`,`
`,e(I,{}),`
`,e(d,{color:"warning",variant:"soft",icon:!0,children:t(n.p,{children:["\u5728\u54A8\u8BE2\u533B\u751F\u8D2D\u4E70\u8865\u5145\u7EF4\u751F\u7D20D\u6EF4\u5242\u7684\u65F6\u5019\uFF0C",e(n.br,{}),`
`,e(n.strong,{children:"\u5982\u679C\u6709\u559D\u5976\u7C89\uFF0C\u8981\u8BF4\u660E\u6E05\u695A\u5976\u7C89\u7F50\u542B\u6709\u7684\u7EF4\u751F\u7D20D\u542B\u91CF\u3001\u4E00\u5929\u51B2\u8C03\u5976\u7C89\u7684\u5976\u91CF\u591A\u5C11\u3002"})]})})]})}function k(o={}){let{wrapper:n}={...M(),...o.components};return n?e(n,{...o,children:e(N,{...o})}):N(o)}export{k as default,A as frontmatter};
