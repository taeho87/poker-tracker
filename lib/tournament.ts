export type Tournament={id:string;date:string;name:string;venue:string;buyin:number;entries:number;extra:number;prize:number;rank:number|null;players:number|null;itm:number;notes:string};
export const cost=(r:Tournament)=>r.buyin*r.entries+r.extra;
// Recover all entry costs before sharing positive proceeds. Whole won: remainder stays with player.
export const shopShare=(r:Tournament)=>Math.floor(Math.max(0,r.prize-cost(r))*3/5);
export const takeHome=(r:Tournament)=>r.prize-shopShare(r);
export const profit=(r:Tournament)=>takeHome(r)-cost(r);
export function validateRecord(p:any):Omit<Tournament,'id'>{
 if(!p||typeof p!=='object')throw Error('기록을 확인해 주세요.');
 if(p.name!==undefined&&(typeof p.name!=='string'||p.name.length>100))throw Error('기록을 확인해 주세요.');
 if(typeof p.date!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(p.date)||new Date(p.date+'T00:00:00Z').toISOString().slice(0,10)!==p.date)throw Error('날짜를 확인해 주세요.');
 for(const k of ['buyin','extra','prize'])if(!Number.isSafeInteger(p[k])||p[k]<0||p[k]>10000000000)throw Error('금액은 0 이상 100억원 이하의 정수로 입력해 주세요.');
 if(!Number.isInteger(p.entries)||p.entries<1||p.entries>1000)throw Error('바이인 횟수는 1~1,000회로 입력해 주세요.');
 for(const k of ['rank','players'])if(p[k]!==null&&(!Number.isInteger(p[k])||p[k]<1||p[k]>10000000))throw Error('순위와 참가인원을 확인해 주세요.');
 if(![0,1].includes(p.itm))throw Error('상금 획득 여부를 확인해 주세요.');
 for(const k of ['venue','notes'])if(typeof p[k]!=='string'||p[k].length>2000)throw Error('장소 또는 메모가 너무 깁니다.');
 return {date:p.date,name:p.name?.trim()||'토너먼트',venue:p.venue.trim(),buyin:p.buyin,entries:p.entries,extra:p.extra,prize:p.prize,rank:p.rank,players:p.players,itm:p.itm,notes:p.notes.trim()};
}
