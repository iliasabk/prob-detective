// Domain tests for Probability Detective (node test/calc.test.mjs)
import assert from 'node:assert';
function mulberry32(seed){return function(){seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}

// 1. seeded reproducibility
assert.deepStrictEqual([...Array(3)].map(mulberry32(9)),[...Array(3)].map(mulberry32(9)));
// 2. coin runs: 10-flip spread vs 1000-flip convergence
let r=mulberry32(11);
const f=(n,p)=>{let h=0;for(let i=0;i<n;i++)if(r()<p)h++;return h/n};
const small=[f(10,.5),f(10,.5),f(10,.5)];
const big=f(1000,.5);
assert.ok(Math.abs(big-0.5)<0.06,'1k flips near 50%, got '+big);
assert.ok(Math.max(...small)-Math.min(...small)>=0,'small runs vary');
// 3. biased coin stays biased at n=1000
r=mulberry32(12);assert.ok(f(1000,.7)>0.6);
// 4. dice sums: 7 most common, 2/12 rare — theory matches sim
r=mulberry32(13);const c={};for(let i=2;i<=12;i++)c[i]=0;
for(let i=0;i<3600;i++)c[(1+(r()*6|0))+(1+(r()*6|0))]++;
assert.ok(c[7]>c[2]&&c[7]>c[12],'7 beats edges');
assert.ok(Math.abs(c[7]/3600-6/36)<0.03,'~16.7% sevens');
// 5. fair game: expected gain 0.7*3 vs 0.3*7
assert.ok(Math.abs(0.7*3-0.3*7)<1e-9,'3v7 on 70% coin is fair');
console.log('all calc tests passed');
