import{Y as M,_ as f,s as y,q as w,y as E,o as u,b as i,d as m,F as b,i as L,E as I,e as s,p as _,Z as B,Q as $,$ as j,t as h,r as q,h as v,w as A,D as C,j as N,O as G,P as D}from"./index-Cy5EtEjA.js";const g=M("game",{state:()=>({game:{start:!0,score:0,maxScore:0,finalScore:10},brick:{width:40,height:15,bgColor:"#fff",total:21,speed:10},figure:{width:16,height:50,left:15,speed:10,bottom:0},enemy:{width:22,height:30,right:-22,speed:1,speedAdd:1,currentLeft:0}}),getters:{getBrick:a=>a.brick},actions:{setBrickSpeed(a){this.brick.speed=loadsh.cloneDeep(a)},setFigureBottom(a){this.figure.bottom=loadsh.cloneDeep(a)},setGameScore(a){this.game.score=a},setGameMaxScore(a){this.game.maxScore=a},setGameStart(a){this.game.start=a},resetAllState(a){Object.assign(a)}},persist:!1}),V={class:"flex absolute bottom-0",id:"floor"},P={class:"flex"},R={class:"flex"},T={__name:"Floor",setup(a){const o=g(),{brick:e,game:n}=y(o);return w(n.value,(d,t)=>{n.value.start?document.getElementById("floor").classList.add("floorMove"):document.getElementById("floor").classList.remove("floorMove")}),E(()=>{document.getElementById("floor").classList.add("floorMove"),document.getElementById("floor").style.animationDuration=e.value.speed+"s"}),(d,t)=>(u(),i("div",V,[m("div",P,[(u(!0),i(b,null,L(s(e).total,c=>(u(),i("div",{class:"brick",style:I({width:s(e).width+"px",height:s(e).height+"px",backgroundColor:s(e).bgColor,order:0}),key:c},null,4))),128))]),m("div",R,[(u(!0),i(b,null,L(s(e).total,c=>(u(),i("div",{class:"brick splice",style:I({width:s(e).width+"px",height:s(e).height+"px",backgroundColor:s(e).bgColor,order:1}),key:c},null,4))),128))])]))}},O=f(T,[["__scopeId","data-v-694f4d0f"]]),W={__name:"Figure",setup(a){const o=_(null),e=_(null),n=_(600),d=_(100),t=g(),{brick:c,figure:r,game:p}=y(t);w(p,l=>{if(!l.start)n.value=600,d.value=100;else{if(l.score===0)return;n.value<=200&&(d.value=10),n.value=n.value-d.value}},{deep:!0});const k=()=>{r.value.bottom+=r.value.speed,document.getElementById("figure").style.bottom=r.value.bottom+"px",o.value=requestAnimationFrame(k)},x=()=>{r.value.bottom-=r.value.speed,document.getElementById("figure").style.bottom=r.value.bottom+"px",e.value=requestAnimationFrame(x),r.value.bottom<=c.value.height&&(cancelAnimationFrame(e.value),e.value=null)},S=l=>{if(l.keyCode===32){if(!p.value.start||o.value||e.value)return;r.value.bottom=c.value.height,o.value=requestAnimationFrame(k),setTimeout(()=>{cancelAnimationFrame(o.value),o.value=null,e.value=requestAnimationFrame(x)},n.value)}};return E(()=>{let l=document.getElementById("figure");l&&(l.style.bottom=c.value.height+"px",document.addEventListener("keydown",S))}),B((l,F)=>{e.value&&cancelAnimationFrame(e.value),o.value&&cancelAnimationFrame(o.value),document.removeEventListener("keydown",S)}),(l,F)=>(u(),i("div",{id:"figure",style:I({width:s(r).width+"px",height:s(r).height+"px",left:s(r).left+"px"})}," 国伟 ",4))}},z=f(W,[["__scopeId","data-v-1ae666e6"]]),H={__name:"Enemy",setup(a){const o=g(),{brick:e,game:n,figure:d,enemy:t}=y(o),c=_(),r=_(null);w(t.value,l=>{l.currentLeft<=31&&l.currentLeft>=-7&&d.value.bottom<=t.value.height+e.value.height&&p()});const p=()=>{cancelAnimationFrame(r.value),r.value=null,t.value.speed=c.value.speed,t.value.right=c.value.right,t.value.currentLeft=document.getElementById("enemy").offsetLeft,document.getElementById("enemy").style.right=t.value.right+"px",n.value.score>n.value.maxScore&&o.setGameMaxScore(n.value.score),o.setGameScore(0),o.setGameStart(!1)},k=()=>{cancelAnimationFrame(r.value),r.value=null,t.value.right=c.value.right,document.getElementById("enemy").style.right=t.value.right+"px",o.setGameScore(n.value.score+=1),t.value.currentLeft=document.getElementById("enemy").offsetLeft,n.value.score===n.value.finalScore?(o.setGameStart(!1),t.value.speed=c.value.speed):(t.value.speed+=t.value.speedAdd,j({title:"过关成功",message:"按空格开始下一关！",type:"success",duration:3e3}))},x=()=>{const l=document.getElementById("map").offsetWidth;t.value.right+=t.value.speed,t.value.currentLeft=l-t.value.right-t.value.width,document.getElementById("enemy").style.right=t.value.right+"px",r.value=requestAnimationFrame(x),t.value.right>=l&&t.value.right!==c.value.right&&k()},S=l=>{if(l.keyCode===32){if(!n.value.start||r.value)return;r.value=requestAnimationFrame(x)}};return E(()=>{let l=document.getElementById("enemy");l&&(c.value=$(t.value),l.style.bottom=e.value.height+"px",t.value.currentLeft=document.getElementById("enemy").offsetLeft,document.addEventListener("keydown",S))}),B((l,F)=>{r.value&&cancelAnimationFrame(r.value),document.removeEventListener("keydown",S)}),(l,F)=>(u(),i("div",{class:"enemy",id:"enemy",style:I({width:s(t).width+"px",height:s(t).height+"px",right:s(t).right+"px"})}," 杆 ",4))}},J=f(H,[["__scopeId","data-v-03f1a36f"]]),Q={id:"score"},U={__name:"Score",setup(a){const o=g(),{game:e}=y(o);return(n,d)=>(u(),i("div",Q,[m("p",null,"最高关卡："+h(s(e).maxScore),1),m("p",null,"当前关卡："+h(s(e).score),1)]))}},Y=f(U,[["__scopeId","data-v-95d97407"]]),Z={class:"config"},K={__name:"Config",setup(a){const o=g(),{brick:e,game:n,figure:d,enemy:t}=y(o);return(c,r)=>(u(),i("div",Z,[m("p",null,"游戏属性："+h(s(n)),1),m("p",null,"地砖属性："+h(s(e)),1),m("p",null,"人物属性："+h(s(d)),1),m("p",null,"敌人属性："+h(s(t)),1)]))}},X=f(K,[["__scopeId","data-v-1129540f"]]),ee=a=>(G("data-v-dd5624ca"),a=a(),D(),a),te={key:0,id:"fail",class:"flex flex-col items-center justify-center"},ae=ee(()=>m("p",null,"你被绊倒了，请重新来过。",-1)),oe={__name:"Fail",setup(a){const o=g(),{game:e}=y(o),n=_();E(()=>{n.value=$(e.value)});const d=()=>{o.setGameStart(!0)},t=()=>{o.setGameScore(0),o.setGameMaxScore(0),o.setGameStart(!0)};return(c,r)=>{const p=q("el-button");return s(e).start?N("",!0):(u(),i("div",te,[s(e).score<s(e).finalScore?(u(),i(b,{key:0},[ae,v(p,{class:"mt-4",onClick:d},{default:A(()=>[C("再来一局")]),_:1})],64)):(u(),i(b,{key:1},[m("p",null,"恭喜你，通过全部"+h(s(e).finalScore)+"关！",1),v(p,{class:"mt-4",onClick:t},{default:A(()=>[C("重新开始")]),_:1})],64))]))}}},se=f(oe,[["__scopeId","data-v-dd5624ca"]]),ne={id:"map"},re={__name:"GameMap",setup(a){return(o,e)=>(u(),i("div",ne,[v(X),v(Y),v(z),v(J),v(O),v(se)]))}},le=f(re,[["__scopeId","data-v-137d7f6e"]]),ce=a=>(G("data-v-c561afa5"),a=a(),D(),a),ue=ce(()=>m("div",{class:"introduce"},[m("p",{class:"mb-4 text-center font-semibold"},"国伟立定跳"),m("p",null,"玩法简介：按空格开始本关（或下一关），通过按空格让“国伟”跳起来跨越栏杆，跨越成功即算过关，共10关。")],-1)),ie={__name:"index",setup(a){const o=g();return B((e,n)=>{o.$reset()}),(e,n)=>(u(),i(b,null,[ue,v(le)],64))}},de=f(ie,[["__scopeId","data-v-c561afa5"]]);export{de as default};
