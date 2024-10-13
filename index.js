import{i as p,S as u}from"./assets/vendor-BrddEoy-.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();function f(r){let s=`https://pixabay.com/api/?key=46450573-9b5e41256c0ad0f1dd9121c30&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(e=>{if(e.ok)return e.json();throw new Error(e.status)})}const c=document.querySelector(".wrapp"),m=document.querySelector(".list");function g(r,i){if(r.total===0)p.error({message:"Sorry, there are no images matching your search query. Please try again!",messageSize:18,messageLineHeight:30,position:"topRight"}),l();else{l();const s=r.hits.map(e=>`<li class="list-item"><a href="${e.largeImageURL}" data-source="${e.largeImageURL}"><img src="${e.webformatURL}" alt="${e.tags}" /></a>
          <div class="wrapp-items">
          <div class="info-item"><p class="bold">Likes</p>
          <p>${e.likes}</p>
          </div>
          <div class="info-item"><p class="bold">Views</p>
          <p>${e.views}</p>
          </div>
          <div class="info-item"><p class="bold">Comments</p>
          <p>${e.comments}</p>
          </div>
          <div class="info-item"><p class="bold">Downloads</p>
          <p>${e.downloads}</p>
          </div>

          </div></li>`).join("");m.innerHTML=s,i.refresh()}}function h(){c.style.display="block"}function l(){c.style.display="none"}let y=new u(".list a",{captions:!0,captionsData:"alt",captionDelay:250,loop:!0});const d=document.querySelector(".form");let n;d.addEventListener("submit",r=>{r.preventDefault(),n&&(h(),f(n).then(i=>g(i,y)).catch(i=>{console.error(i),l()}))});d.addEventListener("input",r=>{r.target.value.trim()?n=r.target.value.trim():n=void 0});
//# sourceMappingURL=index.js.map
