let gameState={skillClickPower:1,skillAutoClickers:1,skillGoldMultiplier:1,skillPrestigeBonus:1,gold:0,clickPower:1,autoClickers:0,requiredGoldForPrestige:1e4,prestigeCount:0,goldMultiplier:1,prestigeBonus:1,upgradesBought:0,skillPoints:0,ShowCompletedAchievements:!1,achievements:[],upgrades:[],ownedSkills:[],startTime:Math.floor(Date.now()/1e3),getElapsedTime:function(){const a=Math.floor(Date.now()/1e3),b=a-this.startTime,c=b%60,d=Math.floor(b/60%60),e=Math.floor(b/3600%24),f=Math.floor(b/86400%30),g=Math.floor(b/2592e3),h=[];return 0<g&&h.push(`${g} month${1<g?"s":""}`),0<f&&h.push(`${f} day${1<f?"s":""}`),0<e&&h.push(`${e} hour${1<e?"s":""}`),0<d&&h.push(`${d} minute${1<d?"s":""}`),0<c&&h.push(`${c} second${1<c?"s":""}`),h.join(", ")}};var skillsData={skills:[{id:0,name:"Unlock Skills",cost:1,reward:"Not specified"},{id:1,name:"Starburst Surge",cost:1,reward:"2-CP"},{id:2,name:"Nebula Clickers",cost:3,reward:"6-AC"},{id:3,name:"Galactic Gold Rush",cost:1,reward:"2-GM"},{id:4,name:"Prestellar Mastery",cost:3,reward:"6-PB"},{id:5,name:"Solar Flare Fingers",cost:8,reward:"16-CP"},{id:6,name:"Frostbite Comet",cost:16,reward:"32-CK"},{id:7,name:"Shadow Nebula Strike",cost:8,reward:"16-CK"},{id:8,name:"Supernova Ascension",cost:16,reward:"32-PB"},{id:9,name:"Celestial Dragon Dance",cost:32,reward:"64-AC"},{id:10,name:"Quantum Harmony",cost:64,reward:"128-GM"},{id:11,name:"Black Hole Surge",cost:null,reward:"Not specified"},{id:12,name:"Interstellar Clickforce",cost:null,reward:"Not specified"},{id:13,name:"Gravity Well Manipulation",cost:null,reward:"Not specified"},{id:14,name:"Nova Cascade Mastery",cost:null,reward:"Not specified"},{id:15,name:"Astro Rift Resonance",cost:null,reward:"Not specified"},{id:16,name:"Quantum Flux Burst",cost:null,reward:"Not specified"},{id:17,name:"Lunar Eclipse Enchantment",cost:null,reward:"Not specified"},{id:18,name:"Stellar Core Fusion",cost:null,reward:"Not specified"},{id:19,name:"Cosmic Echo Mastery",cost:null,reward:"Not specified"},{id:20,name:"Nebula Nova Burst",cost:null,reward:"Not specified"},{id:21,name:"Quantum Vortex Resonance",cost:null,reward:"Not specified"},{id:22,name:"Dark Matter Mastery",cost:null,reward:"Not specified"},{id:23,name:"Aurora Beam Mastery",cost:null,reward:"Not specified"},{id:24,name:"Galaxy Pulse Surge",cost:null,reward:"Not specified"},{id:25,name:"Nebula Infusion Mastery",cost:null,reward:"Not specified"},{id:26,name:"Quantum Shift Burst",cost:null,reward:"Not specified"},{id:27,name:"Stellar Symphony Mastery",cost:null,reward:"Not specified"},{id:28,name:"Celestial Burst Wave",cost:null,reward:"Not specified"},{id:29,name:"Galactic Nova Surge",cost:null,reward:"Not specified"},{id:30,name:"Quantum Resonance Mastery",cost:null,reward:"Not specified"},{id:31,name:"Dark Nebula Mastery",cost:null,reward:"Not specified"},{id:32,name:"Interstellar Harmony Wave",cost:null,reward:"Not specified"},{id:33,name:"Plasma Whirlwind Eruption",cost:null,reward:"Not specified"},{id:34,name:"Cryo Meteor Blitz",cost:null,reward:"Not specified"},{id:35,name:"Dark Nebula Fury Strike",cost:null,reward:"Not specified"},{id:36,name:"Galactic Inferno Ascendancy",cost:null,reward:"Not specified"}]};let upgradesClean=[];function calculateCost(a,b,c){const d={clickPower:10,autoClickers:100,goldMultiplier:1e3}[b]*Math.pow({clickPower:1.6,autoClickers:2.2,goldMultiplier:3.5}[b],a-1)*Math.pow({clickPower:1.2,autoClickers:5,goldMultiplier:6}[b],a-1)*Math.pow(1.2,c-1);return Math.floor(d)}let previousCost=0;for(let a=1;30>=a;a++){let b=0==a%3?"goldMultiplier":0==a%2?"autoClickers":"clickPower";const c=calculateCost(a,b,a);if(c<=previousCost){const a=previousCost-c+1;previousCost+=a}else previousCost=c;const d=`u${a}-cost`,e=1.5+.7*a,f=5+7*a,g=!1,h=!1;upgradesClean.push({cost:previousCost,spanId:d,type:b,increase:e,amount:f,purchased:g,purchasedAuto:h}),gameState.upgrades.push({cost:previousCost,spanId:d,type:b,increase:e,amount:f,purchased:g,purchasedAuto:h})}const achievementsData=[{id:"gold-100",condition:"gold",value:100,name:"Gold Miner"},{id:"autoClickers-5",condition:"autoClickers",value:5,name:"Drone Master"},{id:"prestige-1",condition:"prestigeCount",value:1,name:"Prestige Novice"},{id:"clickPower-10",condition:"clickPower",value:10,name:"Power Clicker"},{id:"goldMultiplier-2",condition:"goldMultiplier",value:2,name:"Double Gold"},{id:"autoClickers-10",condition:"autoClickers",value:10,name:"AutoClicker Expert"},{id:"prestige-2",condition:"prestigeCount",value:5,name:"Prestige Challenger"},{id:"gold-5000",condition:"gold",value:5e3,name:"Gold Tycoon"},{id:"upgrades-50",condition:"upgradesBought",value:50,name:"Upgrade Enthusiast"},{id:"prestige-5",condition:"prestigeCount",value:15,name:"Prestige Master"},{id:"gold-10000",condition:"gold",value:1e4,name:"Gold Hoarder"},{id:"clickPower-50",condition:"clickPower",value:50,name:"Click Powerhouse"},{id:"autoClickers-20",condition:"autoClickers",value:20,name:"AutoClicker Maestro"},{id:"goldMultiplier-5",condition:"goldMultiplier",value:5,name:"Mega Gold Multiplier"},{id:"gold-50000",condition:"gold",value:5e4,name:"Gold Magnate"},{id:"autoClickers-50",condition:"autoClickers",value:50,name:"Automation Virtuoso"},{id:"prestige-10",condition:"prestigeCount",value:20,name:"Prestige Grandmaster"},{id:"clickPower-100",condition:"clickPower",value:100,name:"Click God"},{id:"goldMultiplier-10",condition:"goldMultiplier",value:10,name:"Golden Touch"},{id:"autoClickers-100",condition:"autoClickers",value:100,name:"AutoClicker Legend"},{id:"prestige-20",condition:"prestigeCount",value:40,name:"Prestige Legend"},{id:"gold-100000",condition:"gold",value:1e5,name:"Gold Emperor"},{id:"upgrades-100",condition:"upgradesBought",value:100,name:"Upgrade Master"},{id:"prestige-50",condition:"prestigeCount",value:75,name:"Prestige Conqueror"},{id:"gold-500000",condition:"gold",value:5e5,name:"Gold Overlord"}];gameState.achievements||(gameState.achievements=[]);function updateAchievements(){const a=document.getElementById("achievement-list");a.innerHTML="",achievementsData.forEach(b=>{const c=document.createElement("div"),d=gameState.achievements.includes(b.id),e=100*(gameState[b.condition]/b.value);d||100<=e?gameState.ShowCompletedAchievements&&(c.classList.add("achievement"),c.classList.add("unlocked"),c.innerHTML=`Unlocked: ${b.name}`,!d&&gameState.achievements.push(b.id)):(c.classList.add("achievement"),c.classList.add("progress"),c.innerHTML=`Progress: ${e.toFixed(2)}% - ${b.name}`),a.appendChild(c)})}function updateGameState(){const{gold:a,clickPower:b,autoClickers:c,goldMultiplier:d,prestigeBonus:e,skillClickPower:f,skillAutoClickers:g,skillGoldMultiplier:h,skillPrestigeBonus:i}=gameState,j=formatScientificNotation(a);document.getElementById("game-state").innerHTML=`
        <a class="info-text"><span class="info-label">Gold:</span><span class="info-value" id="gold-value">${j}</span></a>
        <a class="info-text"><span class="info-label">Click Power:</span><span class="info-value" id="click-power-value">${b*f}</span></a>
        <a class="info-text"><span class="info-label">Auto-Clickers:</span><span class="info-value" id="auto-clickers-value">${c*g}</span></a>
        <a class="info-text"><span class="info-label">Gold Multiplier:</span><span class="info-value" id="gold-multiplier-value">${d*h}x</span></a>
        <a class="info-text"><span class="info-label">Prestige Bonus:</span><span class="info-value" id="prestige-bonus-value">${e*i}x</span></a>
    `,document.getElementById("skill-point-text").innerText=`You have ${gameState.skillPoints} skill points`,gameState.upgrades.slice(0,30).forEach((a,b)=>{document.getElementById(`u${b+1}-cost`).innerText=formatScientificNotation(a.cost)}),checkAchievements(),updateGoldPerSecond(),updateAchievements()}function formatScientificNotation(a){if(1e6<=Math.abs(a)){const b=a.toExponential(0).split("e"),c=parseFloat(b[0]),d=parseInt(b[1],10),e=`${c}e${0<=d?d:d}`;return e.replace(/\B(?=(\d{3})+(?!\d))/g,",")}return Math.round(a).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function clickGold(){gameState.gold+=gameState.clickPower*gameState.goldMultiplier*gameState.prestigeBonus*gameState.skillClickPower*gameState.skillPrestigeBonus*gameState.skillGoldMultiplier,updateGameState()}function clickHack(){gameState.gold+=100*(gameState.clickPower*gameState.goldMultiplier*gameState.prestigeBonus),updateGameState()}function buyUpgrade(a){const b=gameState.upgrades[a-1];gameState.gold>=b.cost?(gameState.gold-=b.cost,gameState[b.type]+=b.amount,b.cost*=b.increase,b.purchased=!0,document.getElementById(b.spanId).innerText=formatScientificNotation(b.cost),gameState.upgrades.upgradesBought++,checkAchievements(),updateGoldPerSecond(),updateAchievements()):console.log("Insufficient funds for the upgrade.")}function autoClicker(){gameState.gold+=gameState.autoClickers*gameState.clickPower*gameState.goldMultiplier*gameState.prestigeBonus*gameState.skillPrestigeBonus*gameState.skillGoldMultiplier*gameState.skillAutoClickers,updateGameState()}function checkAchievements(){[{id:"gold-100",condition:"gold",value:100,message:"Gold Miner"},{id:"autoClickers-5",condition:"autoClickers",value:5,message:"Drone Master"}].forEach(a=>{!gameState.achievements.includes(a.id)&&gameState[a.condition]>=a.value&&unlockAchievement(a.id,a.message)})}function unlockAchievement(a,b){const c=document.getElementById("notification");c.innerText=`Achievement Unlocked: ${b}`,c.style.display="block",setTimeout(()=>{c.style.display="none"},3e3),gameState.achievements.push(a)}function saveGame(){const a=btoa(JSON.stringify(gameState));localStorage.setItem("spaceRPGSave",a)}function loadGame(){document.getElementById("prestige").style.display="none",document.getElementById("save").style.display="none",document.getElementById("achievements").style.display="none",document.getElementById("auto-buyers").style.display="none",document.getElementById("skills").style.display="none";const a=localStorage.getItem("spaceRPGSave");a&&(gameState=JSON.parse(atob(a)),updateGameState())}function clearGame(){localStorage.removeItem("spaceRPGSave"),location.reload()}function showNotification(a){const b=document.getElementById("notification");b.innerText=a,b.style.display="block",setTimeout(()=>{b.style.display="none"},3e3)}function showTab(a){const b=document.querySelectorAll(".tab-card");b.forEach(a=>{a.style.display="none"});const c=document.getElementById(a);c&&(c.style.display="block")}function updateGoldPerSecond(){const a=gameState.autoClickers*gameState.clickPower*gameState.goldMultiplier*gameState.prestigeBonus*gameState.skillPrestigeBonus*gameState.skillGoldMultiplier*gameState.skillAutoClickers;document.getElementById("gold-per-sec").innerHTML=` Gold per second:
            <span class="info-value" id="gold-per-sec-value">${formatScientificNotation(a)}</span>
            | Time Played:
            <span class="info-value" id="time-played-value">${getElapsedTime(gameState.startTime)}</span>`}function getElapsedTime(a){const b=Math.floor(Date.now()/1e3),c=b-a,d=c%60,e=Math.floor(c/60%60),f=Math.floor(c/3600%24),g=Math.floor(c/86400%30),h=Math.floor(c/2592e3),i=[];return 0<h&&i.push(`${h} month${1<h?"s":""}`),0<g&&i.push(`${g} day${1<g?"s":""}`),0<f&&i.push(`${f} hour${1<f?"s":""}`),0<e&&i.push(`${e} minute${1<e?"s":""}`),0<d&&i.push(`${d} second${1<d?"s":""}`),i.join(", ")}function updatePrestigeProgress(){const a=document.getElementById("prestigeProgress"),b=gameState.gold,c=gameState.requiredGoldForPrestige,d=formatScientificNotation(b),e=formatScientificNotation(c);document.getElementById("prestigeStatus").innerText=`${d} / ${e}`;const f=Math.min(100*(b/c),100);a.value=f,a.style.width=f+"%"}function prestige(){gameState.gold>=gameState.requiredGoldForPrestige?(gameState.prestigeBonus+=2,gameState.requiredGoldForPrestige*=10,gameState.prestigeCount+=1,gameState.skillPoints+=1,resetGame(),updateGoldDisplay(),updatePrestigeProgress()):alert("You need to reach 10,000 gold to prestige!")}function spendSkillPoint(a){var b=skillsData.skills.find(b=>b.id===a);if(!(b&&b.cost))console.log(`Invalid skill ID or skill not purchasable.`);else if(gameState.skillPoints>=b.cost&&gameState.ownedSkills.includes(0)&&!gameState.ownedSkills.includes(a)){gameState.ownedSkills.push(a),gameState.skillPoints-=b.cost;var c=b.reward.split("-");switch(c[1]){case"CP":gameState.skillClickPower*=parseInt(c[0]);break;case"AC":gameState.skillAutoClickers*=parseInt(c[0]);break;case"GM":gameState.skillGoldMultiplier*=parseInt(c[0]);break;case"PB":gameState.skillPrestigeBonus*=parseInt(c[0]);break;default:console.log("Unknown reward type:",c[1]);}}else gameState.skillPoints>=b.cost&&!gameState.ownedSkills.includes(0)?(gameState.ownedSkills.push(a),gameState.skillPoints-=b.cost):console.log(`Insufficient skill points to purchase ${b.name}`)}function updateAllSkillButtons(){skillsData.skills.forEach(function(a){var b=document.getElementById(`skill-${a.id}`);b&&(gameState.ownedSkills.includes(a.id)?b.classList.remove("not-purchased","available-purchase"):(gameState.skillPoints>=a.cost?b.classList.add("available-purchase"):b.classList.remove("available-purchase"),b.classList.add("not-purchased")))})}function resetGame(){gameState.gold=0,gameState.clickPower=1,gameState.autoClickers=0,gameState.goldMultiplier=1,gameState.upgrades.forEach(a=>{upgradesClean.forEach(b=>{a.spanId===b.spanId&&(a.cost=b.cost)})}),updateGoldDisplay(),updatePrestigeProgress()}function updateGoldDisplay(){const a=document.getElementById("gold-value");a.textContent=gameState.gold}function showUpgradeTab(a){const b=document.querySelectorAll(".upgrade-tab");b.forEach(b=>{b.id===a+"Upgrades"?(b.style.display="block",document.getElementById(b.id+"Tabs").style.display="block"):(b.style.display="none",document.getElementById(b.id+"Tabs").style.display="none")});const c=document.querySelector(`#${a}Upgrades .upgrade-category`);c&&(c.style.display="block")}function showUpgradeCategory(a){const b=document.querySelectorAll(".upgrade-category");b.forEach(b=>{b.style.display=b.id===a?"none"===b.style.display?"block":"none":"none"})}$(document).ready(function(){$("#dropdownButton").click(function(){$("#upgradeDropdown").toggle()}),$(document).click(function(a){$(a.target).closest(".dropdown-container").length||$("#upgradeDropdown").hide()})});function updateTabsVisibility(){["base","fleet","resource","galactic","universe"].forEach(a=>{const b=document.getElementById(`${a}-upgrades`);b.style.display=gameState.prestigeCount>=getRequiredPrestige(a)?"block":"none"})}function getRequiredPrestige(a){return{base:0,fleet:15,resource:20,galactic:30,universe:40}[a]||0}function getUpgradeNameFromButton(a){var b=document.getElementById(a).parentElement.innerText.match(/^(.*?) \(Cost:/);return b?b[1].trim():"Unknown Upgrade"}function createAutoBuyers(){const a=document.getElementById("auto-buyers-content");a.innerHTML="";const b=gameState.upgrades.filter(a=>!0===a.purchased&&!1===a.purchasedAuto);b.forEach(b=>{var c=gameState.upgrades.indexOf(b),d=upgradesClean[c];const e=document.createElement("div");e.innerHTML=`
        <button onclick="buyAutoBuyer(${c})">${getUpgradeNameFromButton(b.spanId)} Auto-Buyer (Cost: ${formatScientificNotation(d.cost)})</button>
    `,a.appendChild(e)})}function buyAutoBuyer(a){const b=gameState.upgrades[a];if(gameState.gold>=b.cost){gameState.gold-=b.cost,b.purchasedAuto=!0;const a=document.getElementById("auto-buyers-content");a.innerHTML="",updateGameState(),createAutoBuyers()}else alert("Not enough gold to buy this auto-buyer!")}function AutoBuyer(){var a=gameState.upgrades;a.forEach(function(a,b){a.purchasedAuto&&a.purchasedAuto&&gameState.gold>=a.cost&&buyUpgrade(b+1)})}function changeShowCompletedAchievements(){switch(gameState.ShowCompletedAchievements){case!0:gameState.ShowCompletedAchievements=!1;break;case!1:gameState.ShowCompletedAchievements=!0;}document.getElementById("show-completed-achievements").innerHTML=`Toggle Completed Achievements (${gameState.ShowCompletedAchievements})`,updateAchievements()}document.addEventListener("DOMContentLoaded",function(){showUpgradeTab("base");var a=document.querySelectorAll(".skill-branch");a.forEach(function(a){var b=a.querySelectorAll(".skill-button");b.forEach(function(a,c){c<b.length-1&&(a.style.marginRight=10+"px")})})}),setInterval(()=>{updateAllSkillButtons(),AutoBuyer(),createAutoBuyers(),updateTabsVisibility(),autoClicker(),updateGameState(),saveGame(),updatePrestigeProgress()},1e3),loadGame();
