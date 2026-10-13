function n(t){return t===void 0?"undefined":Array.isArray(t)?`[${t.map(n).join(", ")}]`:t!==null&&typeof t=="object"?`{
${Object.entries(t).map(([r,i])=>`  ${JSON.stringify(r)}: ${n(i)}`).join(`,
`)}
}`:JSON.stringify(t).replace(/</g,"\\u003c").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function o(t){return Array.isArray(t)?t.map(o):t!==null&&typeof t=="object"?Object.fromEntries(Object.entries(t).map(([r,i])=>[r,o(i)])):t}function y(t,r){return r==null?t===r:Array.isArray(r)?Array.isArray(t)&&t.every(i=>r.length===0||y(i,r[0])):typeof r=="object"?t!==null&&typeof t=="object"&&!Array.isArray(t)&&Object.entries(r).every(([i,s])=>i in t&&y(t[i],s)):typeof t==typeof r}export{o as c,y as m,n as s};
