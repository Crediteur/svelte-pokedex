async function t({params:o}){const e=`https://pokeapi.co/api/v2/pokemon/${o.id}`;return{pokemon:await(await fetch(e)).json()}}const c=Object.freeze(Object.defineProperty({__proto__:null,load:t},Symbol.toStringTag,{value:"Module"}));export{c as _,t as l};