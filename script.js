let currentFilter = "love";
let suggestionsVisible = false;
let nameInputTimer = null;
let isDarkTheme = false;

// ==================== FLEXIBLE DATA STRUCTURES ====================

let suggestionsData = {
  love: [
    "⋆𐙚:͢I:͢L:͢♡:͢V:͢E:͢y:͢o:͢u𓏧𓅚",
    "►►❇︎˖°M̶o̶m̶-D̶a̶d̶°˖☂ ‹𝟹",
       "𓆩♡𓆪𝐁𝐚𝐛𝐲𝐠𝐢𝐫𝐥𓆩♡𓆪",
        "☆꧁☾𝒞𝒽𝑒𝓇𝒾𝓈𝒽𝑒𝒹☽꧂☆",
        "𝐃𝐚𝐫𝐥𖧷𝐢𝐧𝐠 ☂",
        "C̶u̶t̶i̶e̶ P̶i̶e̶ 💕⃝🕊️",
        "𝑃𝑢𝑟𝑒♡𝐿𝑜𝑣𝑒 ☂",
        "🍂 ░C░u░t░e░  『』𓅚 ✧",
        "♡♡ 𝐍𝐱 𝐝𝐢𝐝𝐮",
        "⸝⸝⸝♡⸝⸝⸝ 𝙼 𝙰 𝙷 𝙸⸝⸝⸝♡⸝⸝⸝",
        "꧁(✿◠‿◠) Ⓟ Ⓡ Ⓘ Ⓨ Ⓐ ✦",
        "៚𝙻𝚘𝚟𝚎𝚋𝚒𝚛𝚍𝚒𝚎𓅫⋆˙⟡",
        "ℐ 𝓁ℴ𝓋ℯ 𝓎ℴ𝓊 <3 𝑹 𝑰 𝒀 𝑼",
        "💕⃝𝙸 𝙼 𝚂𝚘𝚘 𝚂𝚘𝚛𝚛𝚢 ⋆.🥀",
        "Sмιℓє ᶠᵒʳᵉᵛᵉʳ̤̮ ☺︎",
        "जय श्री कृष्ण !🪈𓃔",
        "˖°Magιc°˖ᴸᴼⱽᴱ",
        "ᯓ★ ‼ ️Ꭾʀɪ፝֟ɴᴄᴇㅤᥫ᭡.",
        "🐼⃞ᴵᵐ•𝐴 𝑁 𝐼 𝑌 𝐴᭄࿐",
        "Ꮯн𖹭ꮯσ Ᏼ𖹭ʏ !! (⁠◠⁠‿⁠◕⁠)",
        "𓆩𓆪 ƒ ř ï ř є ռ 𓆩𓆪💕⃝🕊️",
        "➶➶ Hᵤ𝓱ᵤ ➷➷",
        "ꜱᴛᴀʀ☆ʟᴏᴠᴇʀ𖹭",
        "🦋⃟💗᪲᪲᪲мγ нεαяτ⋆.𐙚✨",
        "ᴅʀᴇᴀᴍ❇︎ɢ·ɪ·ʀ·ʟ·⋆˙𖹭",
        "𓆩𝑆𝑤𝑒𝑒𝑡𓆪 ℎ𝑒𝑎𝑟𝑡₊˚·🦋⃟💗᪲᪲᪲",
        "🫒🎍 P A N D A 🐼",
        "𝑴𝒂𝒈𝒊𝒄˚⋆˙𝑮𝒊𝒓𝒍𓍯 𐀪𐀪",
        "Βαвγ❇︎Ɗσℓℓ⋆˙⟡🧸",
        "˙˚ 𓆩♡𓆪 ˚˙ D A S H A ˙˚ 𓆩♡𓆪 ˚˙",
        "｡˚⋆ мɪɗηɪɠнτ⋆｡˚☽˚⋆ ℓσνε⋆°•☁︎",
        "ℒℴ𝓋ℯ*☆ ℬ𝒾𝓇𝒹💕⃝🕊️",
        "🌊 .·:*¨Ꮮᴏᴠᴇ¨*:·. 💗᪲᪲᪲🌊",
        "💕⃝Ꭵ ᶫᵒᵛᵉᵧₒᵤ 𖹭࿐",
        "꧁♡ K H U S B U ♡꧂",
        "✨✿ ᴋʀɪsᴛɪɴᴀ ꫂ✿ꪶ 🦚",
        "♥︎♡♥︎Ꮮɪꜰᴇʟɪɴᴇ ┈┈┈",
        "༒ ℒℴνℯ ✤ U Ｍ♡Ｍ ☆࿐",
        "✿ ᴍʀ  ʟᴜᴄᴋʏ 亗 ✿",
        "᪲᪲᪲𓄋 ℓo͟v͟ꫀ ყoυ .ᐟ🅾",
        "ᰔᩚ┊ᴘʟᴀɢᴀㅤ↬ª⸙",
        "—͟͞★Ꭾ𝚁ɪͷ֟፝ꮯᴇss 𖹭࿐",
        "✧══•❁✰🅐🅝🅤✰❁•══✧",
        "𓍯𓂃𓏧๕ۣۜZΞUS™亗",
        "么NIEL么☹︎",
        "🦋⃟𝗣 𝗜 𝗡 𝗞 𝗜⋆˙⟡💗᪲᪲᪲🩹",
        "🦋⃟ғ̶ᴇ̶ᴀ̶ʀ̶ʟ̶ᴇ̶s̶s̶ ‼ ١٥٧٤𖹭",
        "🖤⃝ʙʟᴀᴄᴋ ғʟᴏᴡᴇʀ⋆｡˚🥀",
        "𖹭 Aᴍɪᴛ  亗",
        "亗 𝑆𝐀𝐥𝐢𝐧【≽ܫ≼】🧸",
        "ẞʟᴀⅽᴋ 🖤Loꪜᴇᴿ᭄ ༒",
        "ᴸᴬ♡ꦿ𝑩𝒆𝒔𝒕𝒊𝒂᭄💕⃝💖",
        "✿Gᴀ֟፝ʀᴜᴜ螿 ‹𝟹",
        "𝑫 𝒆 𝒂 𝒓  𝑿",
        "✿Pᴜ֟፝ᴄᴄᴀ⋆⋅☆‹𝟹",
        "ᰔᩚ┊ᴛɪᴋᴋɪㅤ↬ª⸙",
        "ℓℓ Ꮮᴏᴠᴇ Ｍᴇ 𓆩💗᪲᪲᪲𓆪",
        "•𝑄𝑢𝑒𝑒𝑛ꨄ︎",
        "💗᪲᪲᪲𝙰𝙺𝚄𝙻𝙰ᶫᵒᵛᵉᵧₒᵤ💗᪲᪲᪲",
        "ʜɪɴᴀᴛᴀ(≧ᴗ≦)",
        "◦♡°🦋༄ŁΔЯΔ༄🦋°♡◦",
        "✿˖°Magιc°˖✿ˡᵒᵛᵉ☂",
        "꩜ Ρ σ σ ј α 𓏧 𖹭࿐",
        "♡═══ T E J U ═══♡",
        "๖ۣۜ Pokémon ๖ۣۜ",
        "☁︎𝑴𝒖𝒍𝒂𝒏☂︎☁︎",
        "𓆩꩜𓆪𝑳𝒊𝑺𝒉𝒂𝒏𝒈𓆩꩜𓆪🦋",
        "𝐃𝐚𝐫𝐥𖧷𝐢𝐧𝐠 ☕︎ˎˊ˗",
        "ᴍr͢⋆˙⟡𝘗𝘌𝘙𝘍𝘌𝘊𝘛⋆˙⟡༒⁰⁹",
        "🦋͜͢͡𝄟⃝❤Sмιℓє🦅🦋͜͢͡𝄟⃝",
        "P͢e͢r͢f͢e͢c͢t͢ ١٥٧٤ ꩜࿐",
        "𝐹𝑜𝑟𝑒𝑣𝑒𝑟 么 𝗠𝗶𝗻𝗲 𖹭 ‹𝟾𝟹",
        "⧼𖦹⧽ 𝘏𝘦𝘢𝘳𝘵𝘣𝘳𝘦𝘢𝘬𝘦𝘳 ⋆˙𖹭꧂",
        "‼🧣🕊️ ᴍ ɪ ᴋ ᴀ s ᴀ 𖹭 ࿐",
        "ҩɴ ₊˚𝐶 𝑟 𝑢 𝑠 𝘩 ✿˚₊࿐",
        "㋚⋆˙𝑵𝒆𝒛𝒖𝒌𝒐⋆˙㋚ ༻",
        "𝚰 ♥️ 🐼",
        "𝚰 ♥️ 😺",
        "𝚰 ♥️ 🫵🏻",
        "♡●──卄єαят ♡࿐",
        "㋚ 𐍂𐌻𐍃𐌼𐌹𐌺𐌻_⋆｡˚💗",
        "‼ 📨 ᴋ 𖹭 ɴ ᴀ ɴ ✨🪽",
        "✿Ｓｅｅｙａ..♡🦋",
        "꩜ｉL͟͟𖹭V͟͟E͟͟  y͟͟o͟͟u͟͟ᐟ✨🪽",
        "˃ᴗ˂ श्री कृष्ण 🦚🧿",
        "राधे 𖹭 राधे ‼ 𓃔 ✨",
        "L⑊𖹭⑊v⑊e⑊ 💖",
        "╰•★⋆ ̤̮м ̤̮ɪ ̤̮η ̤̮ε ⋆★•╯",
        "𐙚✨˚M̷̷y̷ E̷̷v̷e̷r̷y̷t̷h̷i̷n̷g̷˚✨𐙚 ツ",
        "༒₊˚✿ 𝐵𝑒𝑎𝑢𝑡𝑖𝑓𝑢𝑙 𝑆𖹭𝑢𝑙 ✿˚₊࿐",
        "|•Sᴀᴅʙᴏɪ•|☹︎",
        "ᵐʸ ‹𝟹 𝑨 𝒏 𝒈 𝒆 𝒍  💕⃝🕊️",
        "ᴸᴼⱽᴱメ☺︎𝘈 𝘯 𝘪 𝘮 𝘦☺︎⇜🦋",
        "ᛋ「•❀B̷̷ u̷ t̷ t̷ e̷ r̷ f̷ l̷ y̷ 🦋⃟❀•」ᛋ",
        "ᵛⁱᵖ₊˚⊹𝑃𝑟𝑒𝑡𝑡𝑦 𝐻𝑒𝑎𝑟𝑡 𐙚₊˚⊹♕",
        "˗ˏˋ🐾𐙚M Σ ✦ П𐙚🐾ˎˊ˗࿐",
        "✨🄱 🅁 ◇ 🄶 🄷 🅃♡̤̮🦋",
        "𐙚✨˚𝘍 𝘳 𝘰 𝘴 𝘵 ✧ 𝘏 𝘦 𝘢 𝘳 𝘵˚✨𐙚 ツ",
        "❥•Level •❥",
        "𒆜┋K̾i̾n̾g̾ o̾f̾ H̾e̾a̾r̾t̾s̾┋𒆜☂",
        "𔓎 𝙱𝚛𝚘𝚔𝚎𝚗 𔓎",
        "𝗢𝗡𝗘  𝗟☺︎𝗩𝗘",
        "⋆୨♡୧｡⋆𝕱𝖔𝖗𝖊𝖛𝖊𝖗⋆ ˚⋆୨♡୧⋆",
        "𓆩ҩᴜᥱ֟፝ᥱɴ𓆪",
        "ᶠⁱʳˢᵗ ˗ˏˋ𝗟𝗢𝗩𝗘ˎˊ˗",
        "➳ भाभी˚｡⋆ 𓆩जी𓆪",
        "ᶜᵘᵗᵉ 𝘉☺︎𝘚𝘚",
        "⊹˚₊●⃝🦋𝕊𝕀ℕ☺︎𝔹𝕌●⃝🦋₊˚⊹",
        "⊹˚₊𓆩ιѕнq 🐾 ℓσνє𓆪₊˚⊹ ࿐",
        "𐙚 ʝααи ♡ ⊹˚₊🐼",
        "ᴺᴱᵒᴺᴳˡᴼᵂ✶",
        "✧𝓒𝓱𝓪𝓸𝓼𝓲𝓼✧",
        "𝖀𝖓𝖎𝖈𝖔𝖗𝖓♞",
        "｡⋆🐝⃝ᴛ ᥆ ᥊ Ꭵ ˚☽˚᭄｡",
        "-´-╰⁔╯𝑩 𝑴 𝑾 -`♡´-ᴸ̸ᵒ̸ⱽ̸ᵉ̸ʳ̸",
        "₊˚✨ℛσмєσ⊹˚₊𐙚࿐",
        "ᴵᵐ᭄ᴏɴ ᴮˢᵗ࿐",
        "˗ˋˏ°♡ ℍ𝕒𝕥𝕖 ♡°ˎˊ˗",
        "𓆑•𝕄𝕌𝕊𝕂𝔸ℕ•💕🐝",
        "🦋⃟sᴜᴄɪᴇᴅᴇ ⁹🪄⁹",
        "🌸⃟𝐵 𝑢 𝑡 𝑡 𝑒 𝑟 𝑓 𝑙 𝑦₊˚·✨🦋",
        "𝔸 𝕓 𖹭 𝕦 𝕥 𝕞𝕖 💗᪲᪲᪲",
        "༄☆⃘⃚⃤⃝ 𝑪𝒖𝒕𝒊𝒆 𝑷𝒊𝒆 ☆⃘⃚⃤⃝༄",
        "᭄𝐉𝐀𝐈 ㋚ 𝐌𝐀𝐇𝐀𝐊𝐀𝐋 ⋆˚࿔⊹ ࣪𓆗",
        ". ⋆｡˚ 𓂃 𝐿𝑜𝑣𝑒 𝑆𝑡𝑜𝑟𝑦 ༉‧₊˚✧",
        "𖥔𓂃 𝑫 𝑺𝒎𝒊𝒍𝒆 𓂃𖥔",
        "༘𝐻𝑒𝑎𝑟𝑡𝑏𝑒𝑎𝑡 ༘",
        "L 𖹭 v e",
    "ƒοřєνєř 🫰🏻💗",
"𝕩♡𝕩 ιѕнq ωαℓα ℓσνє 𝕩♡𝕩",
"♡🌹Rose ⨳࿐࿆",
"🌸⃟Blade◢ ꫟࿐",
"⎳𝙤νě γ๑υ ‹ 𝟷𝟶𝟶",
"🎀⃟D̶a̶r̶k̶ L𖹭ve 乡",
"Singal life 𖨆",
"⎳𝙤νěr ʙᴏʏ⍣᭄",
"亗 Ꮮᴏᴠᴇ ❥Kiss 𓏧♥️",
"« 💓᪲᪲ » ᴊ « 💓᪲᪲ »",
"🌸⃟🍧𝑆𝑤𝑒𝑒𝑡 𝐿𝑜𝑣𝑒𝑟₊˚· 🍫✦",
"♔𝓐𝓷𝓰𝓮𝓵 𝓸𝓯 𝓛𝓸𝓿𝓮 ｡• . • ｡⑅",
"ᡣ𐭩Sωєєτᡣ𐭩 ꫂ✿ꪶ",
"❦ Dαяℓιηg ❦࿐",
"ⁱᵃᵐ᭄ 𝐑𝐨𝐦𝐚𝐧𝐭𝐢𝐜 ▼ツ",
"✿ ℒℴ𝓋ℯ 𝐵𝓁ℴ𝓈𝓈ℴ𝓂｡⋆｡˚ ✿",
"𝕭𝖆𝖇𝖞 𝕲𝖎𝖗𝖑 🕊",
"❣𓂃𝓜𝔂 𝓠𝓾𝓮𝓮𝓷 ┊❣┊࿐",
"➵ 𝙋𝙧𝙞𝙣𝙘𝙚 𝙤ᥬ ᧒𝙛 𝙃𝙚𝙖𝙧𝙩𝙨 ♚",
"❥━»Sσυℓ«━❀❥",
"❥ ៚𝐹𝑜𝓇𝑒𝓋𝑒𝓇 𝑀𝒾𝓃𝑒 ☻ˎˊ˗",
"✳╰•⋆ᖴEEᒪIᑎG ˃ᴗ˂",
"☺️⋆˙Hєя Sмιℓє ⋆˙⟡",
"❥»Dɪʟ Kɪ Dʜᴀᴅᴋᴀɴ ꕥ༒",
"𝓒𝓾𝓽𝓮 🦋⃟𝓑𝓾𝓽𝓽𝓮𝓻𝓯𝓵𝔂 ⸙",
"🎀⃟ʝααи  ᪲᪲᪲",
"𝐇𝐞𝐚𝐫𝐭 💞 𝐐𝐮𝐞𝐞𝐧 亗",
"👁️⃝𝓢𝔀𝓮𝓮𝓽 𝓟𝓻𝓲𝓷𝓬𝓮𝓼𝓼   ꤪꤨꤪ࿐",
"ℒσνє",
    "☁️𝒮𝓌𝑒𝑒𝓉 𝒞𝓁☁️𝓊𝒹☁️"
  ],
  gamer: [
    "𝚾-Ꮮᴏʀᴅ 亗",
    "ɪᴍ • F ᴀ ɴ ɪ •々",
    "៚ɪ ᴛ ᴀ ᴄ ʜ ɪ ❶❶", 
    "𝑴ꫝ𝑹𝑪𝑶 모 ꤪꤨꤪ",
    "Ƭ͢ɴ ⋆ｂａｂｕ☂",
    "ᴀɴᴋᴜsʜ ᶠᶠ",
    "╰‿╯ ϟ 𝚉 𝙴 𝙵 𝚁 𝙾 ✯꧂",
    "𝐹 𝐿 ⚡︎ 𝑆 𝐻 ⁰⁰¹",
    "ᏢᴀɢᴀᏞ  ϻ❿ ×͜×",
    "Ᏸ2Kㅤ모",
    "╰‿╯𝗦𝗻𝗶𝗽𝗲𝗿︻デ═一✷✷",
        "ANKUSH ff",
        "L J ♦ Z E F R O *$",
        "F L ♦ S H wi",
        "PAGAL M@ x$",
        "Q2K 모",
        "S Super_デー**",
        "N E X U 모",
        "Ƒɪяε𒆜Ԛυεεηᯓ★",
        "乂·˚₊𝙱𝚕𝚘𝚘𝚍₊˚·乂 ⁹⁹⁹",
        "➳ 𝑲𝒊𝒍𝒍𝒆𝒓 𝑮𝒐𝒅 ˚⊹𓆩☠𓆪ꪾ",
        "𒆜𝓡𝓮𝓭𝓥𝓮𝓷𝓸𝓶 ˚⊹࿐⁴⁴⁴",
        "Oɴʟʏ z!xu 모!",
        "么 𝑩𝒂𝒅-𝑿",
        "ঔ ⓃⒾⒼⒽⓉ⁹⁹⁹",
        "ᴡ ʜ ɪ ᴛ ᴇ 4 4 4  ✓",
        "░H҉A҉C҉K҉E҉R҉░ ⨳",
        "么˙⋆𝕯𝖊𝖒𝖔𝖓𝖎𝖈⋆˙⟡࿐ ➆➆➆",
        "G亗O亗J亗O ☑",
        "꧁࿇ ＲＡＶＩ Ｘ࿇꧂ᶠ̸ᶠ̸",
        "ᴍr͢ 𖦹ᴘ ☕︎ˎˊ˗",
        "𓆩𝖐𝖎𝖑𝖊𝖗𓆪 ☠ 𓆪ᛖñᚱ𓆩",
        "Xx𝘉☺︎𝘚𝘚xX",
        "★ᴄ͢͢͢ʀɪᴍɪɴᴀʟ⁰⁰⁷★࿐",
        "༄Zx  Don 01",
        "꧁✧ 𝘟 𝘠 𝘙 𝘖 ࿐",
        "▄︻デ 𝒫𝒽𝑜𝑒𝓃𝒾𝓍 ═━一",
        "『Dx ᴰᵃ͢͢͢ᵛⁱˡ ࿐♛",
        "ʟ ᴇ ᴠ ɪ ⚡︎ ➇➈",
        "✦˖° B A D S H A H °˖✦亗",
        "么Ꭲ ɪ ᴛ ᴀ ɴ╰⁔╯₄₇",
        "G̸o̸d̸ 𝟕𝟕𝟕",
        "Ꮢᴅx_ᴘʀᴏ ‹𝟹",
        "𝛐𝛈_𝙱𝚛𝚘𝚔𝚎𝚗 모",
        "ᴵᵐܔSHAWON࿐ᴮᴼˢˢ",
        "🅥ᎮᴀɢᴀᏞ メ ᴹᵖ⁴⁰",
        "༄『ᴵᵐ』• Zon™×͜×࿐",
        "sᴀɪᴍメɪɴɢ༻",
        "ᴹᴿ°᭄★Pʀ፝֟ɪɴᴄᴇ࿐⓿❼",
        "Cᵒᵒˡジ 刀ﾘﾒ 乄",
        "—͟͞͞✰ᗷᒪᗩᑕK ꩜࿐",
        "Ƭ͢ʀ  J ᴇ ʀ ʀ ʏ 모",
        "༆☼Bօʀռ2ӄɨʟʟ☼༺",
        "𝛘⋆˙𝛈𝛆𝛐𝛈⋆˙࿐⁰⁰⁷",
        "ᶦᶰᵈ᭄ Onyx 亗",
        "𝖙𝖔𝖝𝖎𝖈 𝖍𝖚𝖓𝖙𝖊𝖗 ╰‿╯",
        "༒·˚ズ𝑷𝒔𝒚𝒄𝒉𝒐 ·˚⸙༒",
        "冬┊Sꫝ፝֟፝ ɴᴅɪᴘㅤ모",
        "▼☁︎▼Ρ Α H Α Я Ι.⋆࿐★",
        "ĐΔŖК ᯤ Ｌｏｒｄ ╬",
        "𝔱𝔦𝔱𝔞𝔫 𝔤𝔞𝔪𝔢𝔯 ⁹⁹⁹",
        "ᴡɪꜰi͢ ᯤ 𝘎𝘢𝘮𝘦𝘳 모",
        "ᶦᶰᵈ✿Gᴀᴍᴇʀ࿐",
        "𝙰𝙻𝙾𝙽𝙴 𝙱𝙾𝚈 ×͜×",
        "Ꭷᵇˡᵃ̸ᶜᵏ⟅ S̴ h̴ a̴ d̴ o̴ w̴ Ⓥ",
        "ᴹᴿ. Ɗ Ξ V Ι ᒪ ✤ ❶❹❸",
        "𐀪 ꫝ𝙻𝙾𝙽𝙴 𝙱𝙾𝚈 ×̷̷͜×̷",
        "亗 𝐋 𝐔 𝐂 𝒀 ‼ ❾❾❾",
        "ꭷꭾܔ𝐂ʀɪᴍɪɴᴀʟ⓿❼࿐",
        "ᎷΛƦᏟO ☂ 𒆜",
        "Ꭰꫝɴɢᴇʀ メ Ꮓᴏɴㅤ모",
        "ક̶ર̶ન̶ ᭄",
        "▄ʜᴇᴀᴅsʜᴏᴛ▄ ☠",
        "ⓥ Ɗᴏ σʀ Ɗɪᴇ ??",
        "ᯓᏒꫝᎥ នтαʀ 모",
        "༒●⃝𝙽𝙸𝙶𝙷𝚃𝙼𝙰𝚁𝙴●⃝༒",
        "𝓲ꪑ〲𝘛 𝘏 𝘈 𝘒 𝘖 𝘙㋚⁹⁹⁹⁺࿐",
        "𒆜┊Ɗ Ξ Κ U҉┊:) 𒆜",
        "꧁★ H̷ I̷ t̷ l̷ e̷ r̷ ?࿐",
        "𓂃 ฿Ⱡ₳ⱫɆ 𓂃☽",
        "—͟͞͞★ Αακαѕн ✓",
        "꧁𓊈ｂａｂａ𓊉꧂",
        "⚔ L〵E〵G〵E〵N〵D〵ᯓ⚔",
        "⚔ ᴀᴄᴛɪᴏɴ⋅⋆❹❷",
        "ᴾᴋ᭄ᴷᶦᴸᴸཇᴿ⟡࿐⁷⁷⁷",
        "अ̶हंक̶।र̶ ⚕... ?...",
        "ᴬᵏ᭄ꫝʟօռɛ ×̷̷͜×̷  ??",
        "S𝚝𝚊𝚛✬Ᏼʟᴀᴅᴇ✓❾❾❾",
        "★ɴɪɢʜᴛ—͟͞͞✰.Ꮐᗩᗰᗴᖇ 亗",
        "모Ꭾʀɪмᴇ_ꫝʏᴜꜱʜ ╰‿╯",
        "ᴮᴳܔ〖ⓌⒺⓁ〗࿐ᴮᴼˢˢ",
        "ᴹᴿ°᭄〄 𐍆 𐌹 𐍂 𐌽 𐌾 𐌹 ࿐",
        "亗 𝑩𝒂𝒅-𝒈𝒊𝒓𝒍 →ღ",
        "░Ｂ░Ｏ░Ｓ░Ｓ░",
        "☻┊ᴊᴏᴋᴇʀ  ˣ‿ˣ",
        "ΜΛЯΙ☯",
        "ᴮᴼˢˢܔZᴇᴇsʜᴀɴ࿐",
        "×͜× ᴋɪʟʟᴇʀ ᴮᵒˢˢ",
        "Cᴾ〲ᴹᵃᶠⁱᵃ࿐ⒻⒻ",
        "𒆜𝕽𝖆ηØℑɨt°™꧂",
        "Ꮶɪɴɢ Ꭷʙɪᴛᴏ 亗",
        "/  亗 𝑩𝒂𝒅-𝒃𝒐𝒚 →ღ",
        "〖°B҉O҉S҉S҉°〗",
        "ᴀ·ᴡ·ᴍ·๛𐌺𐌹𐍊𐍊𐌴𐍂 ✓",
        "𓄂Eㄨㄗ E R ㄒ",
        "亗『๛ΚΪИƓ๛』亗",
        "𓄂𝑊𝑜𝑙𝑓 ℎ𝑢𝑛𝑡𝑒𝑟࿐𝟏𝟏",
        "ᴛ ʀ ɪ ɢ ᴇ ʀツ",
        "ηɪηנα нυητεя ⚔",
        "꧁❀ 𝘛𝘦𝘯𝘥𝘶 ❀꧂",
        "ꪎ⁔ꪎ¢яαzч вøчꪎ⁔ꪎ",
        "W̶ E̶ A̶ K̶ H̶ E̶ R̶ O̶᭄",
        "ᶜᵃᵝ 𝙶 𝙾 𝙹 𝙾᭄ :)",
        "Ｂｌｏｏｄ- 𝚾",
        "꧁☯︎L̸ᎧKIϟᏆᎧꨄ︎꧂",
        "ɢs͢ H̶e̶a̶r̶t̶b̶r̶e̶a̶k̶e̶r̶ ?? 𝟎𝟗",
        "ηɪηנα вσγ ✓",
        "꧁༒‼ѕυηηγ‼༒꧂⁷⁸⁶",
        "╰‿╯┊𝑼 𝑪 𝑯 𝑰 𝑯 𝑨┊𓂀",
        "Ꭾʀᴏ Kᴇɴᴢʏ Ⓥ",
        "⌯⌲『sʜʀᴋ』ᴮᴬᴰʙᴏʏ 亗",
        "ᴹᴿメ𓄂B E A S T Ⓥ",
        "ᴬᴷ ʜᴇʀᴏ ☆",
        "ᴸᴼⱽᴱ ✰ ᴋ 𖹭 ɴ ᴀ ɴ ☂ ࿐",
        "𝑭 𝑰 𝑭 𝑨 ☯ Ꮐᴀᴍɪɴɢ ᯓ☆",
        "H⨳e⨳x⨳ W⨳a⨳r⨳r⨳i⨳o⨳r⨳",
        "༒₊˚ ·✰𝚂 𝚑 𝚊 𝚍 𝚘 𝚠 ✰·˚₊༒",
        "ᴵᵐܔＲ Ａ Ｂ Ａ Ｒ Ｉ࿐ᴮᴼˢˢ",
        "⚠ ᴅ ᴇ ᴀ ᴛ ʜ - x",
        "𝚾- L̷̷u̷c̷y̷  모",
        "༒✰ 🅛🅤🅒🅚🅨  ✰༒",
        "፠ ๛ʙʜᴀᴋɪ ፠°✦⁹⁹⁹",
        "𝖋𝖋 ꧁✯ ᴅ ᴇ ᴀ ᴛ ʜ✯꧂",
        "⋆.𐙚㋚ 𐌱𐌻𐌳 𐍃𐌻𐌽𐍄𐌻_",
        "⧉𝐵 𝑢 𝑡 𝑡 𝑒 𝑟 𝑓 𝑙 𝑦⧉𝐿𝑜𝑣𝑒𝑟",
        "𐌾𐌰𐌼𐌹𐌽𐌾 亗",
        "𓅈 E a g l e ᴳ̸ᴬ̸ᴹ̸ᴵ̸ᴺ̸ᴳ̸ 모",
        "𝙶 ⌔𝚕𝚍 ⓥ",
        "N͢G͢ ☠ H̾ e̾ ⌯ r̾ t̾ ☯࿐",
        "—͟͞͞✗ 𝐍 𝐢 𝐠 𝐡 𝐭 𐩺 𝐆 𝐨 𝐝 —͟͞͞✗𓂃✍︎",
        "⁴ˣ ⸙ Pʀɪᴍᴇ 모...",
        "𝗣 𝗥 ☯",
        "𝖏𝖔𝖐𝖆𝖗 🂱",
        "𝘛𝘳𝘶𝘦 ☕︎ 𝘎𝘢𝘮𝘦𝘳 ⁹⁹⁹",
        "˗ˏˋ𓆗𓆘हर हर महादेवˎˊ˗ ૐ",
        "☘٨ⓖⓐⓜⓔⓡﮩ٨모ﮩ٨ـ ᵍⁱʳˡ",
        "𝘛𝘐𝘔𝘌 𝘗𝘈𝘚𝘚 ☕︎ˎˊ˗",
        "『 ʲᵒᵏᵉʳ』➪ 𝕶𝖎𝖑𝖑𝖊𝖗 ⊹ ×̷̷͜×̷",
        "𝚂𝙾𝚁𝚁𝚈  ̤̮𝙱𝚁𝙾₊˚✞",
        "✓ＯＰ? LEGEND ★࿐",
        "ᵍᵒᵈ 🂱 Ꮐᗩᗰᗴᖇ˚｡⋆𓄂𓆃",
        "—͟͞͞⚠N̷̷O̷̷ 𝖕𝖗𝖔𝖉𝖑𝖊𝖒° ×̷̷͜×̷",
        "ᗩᏞᗝᏦ ⓿❼",
        "𝙰𝙻𝙾𝙽 𝙱⏱𝚈",
        "𝘉⏱𝘙𝘐𝘕𝘎",
        "░A░N░U░P░",
        "I M • R U S H E R ™ 𓅈",
        "ͥ ͣ ͫ•A r i s ☂ ¹⁸⁺",
        "𝓲ꪑ〲N๏ʙɪᴛᴀ☆⁹⁹⁹⁺࿐",
        "❦𝑨𝒏𝒖᭄𒆜ᵝᵒˢˢ",
        "꧁⊹˚☯⊱𝑻𝒐𝒙𝒊𝒄 𝒉𝒖𝒏𝒕𝒆𝒓⊰☯˚⊹꧂",
        "メᗪᴀᴅᴅʏ☆ᑕᴀᒪᒪɪɴGメ",
        "fypツ",
        "G̸Aᴍɪɴɢ ᶠ̸ᶠ",
        "╰ᴼ̸ᴳ̸╯☫ Z Ξ X U ⁶⁹",
        "༒☆ 𝑱 𝒊 𝒏-𝒘𝒐𝒐 ☆࿐❾⓿",
        "⟡→N̸͟͞ U̸͟͞ L̸͟͞ A̸͟͞ ꫂ←⟡",
        "Ͻ ꫝ Ρ Τ Α Ι N͢ ♾",
        "Y⨳ U⨳ J⨳ I⨳ ࿐⁶⁷",
        "៚M͢☯ηstεr 7ꪎ",
        "𐍃 𐍁 𐌺 𐍁 𐌽 𐌻_??",
        "⟡→⧉m͢ꫝd͢ara⧉←⟡",
        "𝚻 𝗥 𝚶 𝚴 ! 𝚾_??",
        "𓆩⧉𓆪𐍂 𐌰 𝚅 𐌰 𐌽 ꪎ⓿",
        "꧁𓊈𒆜🄼 🅄 🄽🄰 🅇_⛧",
        "ɪᴍ᭄𝔾 𝕙 𝕠 𝕤 𝕥シ᭄",
        "㋚ 𐌱𐌻𐌳 𐍃𐌻𐌽𐍄𐌻_??",
        "‼ 𐌶 𐌰 𐍊 𐌹 𐌼 ★ 𝟵𝟵𝟵",
        "༄𖣠 ꀘꋬ ꒒ ꀤ ꐞ ꀎ ꁅ ⚡ 𝟯.𝟬",
        "亗 𓆩𝗣𝗮𝗶𝗻𓆪 ✪ 𝟬𝟬𝟳",
        "𖣠 вατ-мαη 〄",
        "ᴬᴷ ☑ ℓ υ ƒ ƒ γ 𖥔∞𖥔",
        "᭄ᵀʳⁱᵖˡᵉ⁻ˢʷᵒʳᵈ ꪶ⚔ꫂ",
        "༒ 𝙆𝘼𝙉𝙀𝙆𝙄 𝙆𝙀𝙉 𝙏𝙊𝙆𝘼 ༒",
        "⓿❽ ĺ υ ċ ƙ γ 𓅆 ᴳ̸ᴬ̸ᴹ̸ᴱ̸ᴿ̸",
        "☠︎ Ꭲʀʏ么Aɢᴀɪɴ࿐",
    "༒♡°𝙷𝙸𝙽𝙰𝚃𝙰°♡༒",
"Ꭾ𝙿𝙻𝙰𝚈𝙷𝙰𝚁𝙳╰⁔╯",
"꧁༒Sᴋ•Sᴀʙɪʀᴮᴼˢˢ༒꧂",
"ͶØ ⚠ ☧ŖØβLΣ𝐌 ✓",
"〆NOBRU ☂ SCCP",
"꧁✰ƤЅ¥CӇØ✰꧂",
"𝙶𝙶ᴇᴀsʏ︻デ═一",
"𝚂𝚃𝙰𝚁 ✰ 𝙶𝙰𝙼𝙴𝚁 ‼7",
"⊹˚₊✩ Ξ𝐒𝐏𝐄𝐄𝐃 ˚♡",
"〘CEROL〙• Ꭾřο",
"L@st_K!ss ツ",
"𝖎 𝙰𝙼 ᵍᵒᵈ ✔",
"𝐒𝐍1𝐏𝐄𝐑-𝐗 모",
"〆NANDO⁹⁹⁹ツ",
"𓄂ʟᴏʀᴅ Ꭾᴀɪɴ ꫟",
"₣𝙓ㅤP I R E S",
"『BRADOOCK』☠",
"༒ ☯ 𝗧𝗨𝗙𝗔𝗡 ☯ ༒",
"ᴜʙɪᴛᴀ•Ꭾřο 모",
"꧁𒆜𝕂1Ⓝg𒆜꧂",
"𝐊ΛƦ𝐌𝐀 ☘",
"꧁༒𝕂𝕚𝕝𝕝𝕖𝕣༒꧂",
"꧁☯𝗞𝗜𝗡𝗚ツ☯꧂",
"☯ 𝖐𝖎𝖗𝖆 𒆜",
"𝕏 Khalnayak 모",
"༒ Ꭼᴠɪʟ ༒ ꗃ",
"ℓo̶ʀᴅ ⨳ мᴀᴅᴀʀᴀ ⸙",
"𝖑𝖎𝖙𝖊 𝚈𝙰𝙶𝙰𝙼𝙸 ꫟",
"𝕏 𝐓𝐞𝐫𝐫𝐨𝐫 モ",
"꧁ ☣श्री महाकाल☣ ꧂",
"𝐃𝐞𝐬𝐢 ☯ 𝐋𝐞𝐠𝐞𝐧𝐝 モ ꗃ",
"ℓo̶ʀᴅ ⨳ ɢᴏᴋᴜ ⨳♔",
"╰⁔╯яᴏʟᴇx ⓿⓿❼",
"𝑩𝒍𝒂𝒄𝒌𝒔𝒐𝒖𝒍 ??",
"╰⊱𓆩ⓅⒶⓅⒶ𓆪⊰╯",
"╰⊱𓆩ⓂⓄⓂ𓆪⊰╯",
"₊˚⊹♡ 𝖕𝖗𝖎𝖓𝖈𝖊𝖘𝖘 ♡⊹˚₊",
"𓆩𝙺𝙾𝙽𝙰𝙽𓆪",
"ＢｌａｄｅＸ",
"ᵇˡᵃ̸ᶜᵏ᠅V̷̷ᴇɴo̶ᴍ ˣ‿ˣ",
"ʟ๑яᴅ ⨳ Ꭷвɪᴛᴏ ♔࿐",
"𝕯𝖊𝖒𝖔𝖓 𓄂𝕶𝖎𝖓𝖌 么࿐",
"E̷̷νเℓ ꗃ M̷̷Ꭵᥒᴅ 乡",
"ღ 𐌁l๑๑ᴅ፝ꜱ࿐",
"ʟ๑яᴅ𖧷ɪᴛᴀᴄʜɪ ♛",
"៚ɴ ᴀ ʀ υ ᴛ ᴏ ‼ 𝟶𝟿",
"PAIN X3 !",
"⸙모┊ SadX ꫟",
"PʀɪᴍᴇＸ⸙",
"愛4x aimbot ꔪ 모",
"Oɴʟʏㅤz!xuㅤ모",
"Im NoTxz†| 모",
"Tenzoo¿!",
"𝐗 Ꮃᴀʀʀɪᴏʀ 모",
"LA@end",
"모 Zxtraa..?",
"10x...Speedy **",
"𝙱𝙻𝙰𝙲𝙺 ʟ๑яᴅ 么",
"☆⃟𝘿𝙚𝙖𝙩𝙝 𝙕𝙤𝙣𝙚 ∅꧂",
"𝘙 𝘪 𝘨 𝘩 ✓ ┊GAMER ┊꧂",
"K!ll चोर ☫",
"모Zᴇʀᴏ モᴋɪʟʟ ⊹˚₊✩",
"‼ D̶a̶r̶k̶ K̶i̶l̶l̶c̶r̶ ˣ‿ˣ",
"𝙱𝚁๑𝙺𝙴𝙽 ħєяσ ??",
"S!lent ꫟ K̶i̶l̶l̶c̶r̶ ˣ‿ˣ",
"░⋆｡˚Warior-𝕏 ˚｡⋆░",
"乡Silent Ꭾαïռ 亗",
"𝕏 𝙱𝙻𝙰𝙲𝙺 𝕏 ᵇˡᵃ̸ᶜᵏ",
"◣𝙍𝙚𝙗𝙤𝙧𝙣◢𓂃모",
"K̶ɪηɠ ⨳ ċοвřค 𓆗",
"模S!lent Killer ☫࿐",
"ɪᴍ᭄ ᎠᎪᎡᏦ ᴳ̸ᵃᵐᵉʳ ˣ‿ˣ",
"᭄पागल आत्मा ( _𐀪_ )",
"¶u¢¢№ ♛",
"→ बहेन का भाई ← ☻",
"亗 तेरा बाप 亗",
"⸙ मां का लाडला ⸙",
"𝕩 ʟ๑ʀ፝ᴅ ♔",
"៚zanवर៚𓃮",
"//𝘒//𝘈//𝘒//𝘈//",
"༊जय श्री राम ‼ ࿐࿆",
"༊में बाबा टिल्लू ࿊ 모",
"▬ हा ! ▬ मेरे ! ▬ भाई ! ▬",
"S¡len† k¡ller 乡",
"Nix ツ",
"๖ۣۜShadow Killer 亗",
"☬ᴠ̷ᴇ̷ɴ̷ᴏ̷ᴍ̷☬",
"모 पापी killer 모",
"⋆˚⊹£ ࣪नठखट परी 𓆩𖨆𓆪",
"៚Wαяяισя 么 𝟎𝟑",
"ᚲᛖᚱᛁᚨᛚ ᚹᛖᚨᛈᛟᚾ",
"ᶦᶰᵈ᭄𝙱𝚕𝚘𝚘𝚍 ×̷̷͜×̷",
"∞ G̷̷ᴀᴍɪɴɢ═══≪",
"ˣ‿ˣ Xx𝐓𝐨✗𝐢𝐜xX ˣ‿ˣ",
"➬»𝕩«мเηατο»𝕩« ♔",
"✿.ＭＡＨＩＴӨ ✿.࿐",
    "N Ξ X U 모"
  ],
  fancy: [
    "ꫝ𝛈𝛋𝛖sʜ  ??",
    "𝙲𝚁𝙰𝚉𝚈 βσყ ×͜×",
    "आदिवासी ෴",
        "knxush ??",
        "CRAZY Boy x$",
        "smearf A",
        "TR VUWS A",
        "𝙲𝚁𝙰𝚉𝚈 βσყ ×͜×",
        "आदिवासी ෴",
        "ᛖᚱ Vιяυѕ ⚠",
        "༒ ⚝メ𝖋𝖆𝖓𝖙𝖔𝖒メ⚝ ༒",
        "⋆─𓄂ͶØT乂ᵍᵒᵒᵈ×᷼×",
        "▶●── ̤̮BOY───▶●",
        "𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 🅾",
        "꧁☆*κɪɴɢ*☆꧂",
        "𓆩☠𓆪ᛖñᚱ𓆩☠𓆪",
        "『W』𓄀Zxn𓏧☫",
        "𝓛 𝓪 𝔃 𝔂 𓏲Ⓡ ☃︎ Ⓤ Ⓝ Ⓓ‼",
        "B么CKꪶꫂ",
        "𝐀𝐥𝐞𝐫𝐭 ⧽⚠ˎˊ˗",
        "ＬＡＳＴ⚠︎ ＷＡＲＮＩＮＧ",
        "🅼︎ʏ ٭➣🅻︎ɪғᴇ ➻❥🅼︎ʏ✬͢➣🆁︎ᴜʟᴇs !",
        "🦋⃟ᴠͥɪͣᴘͫ✮⃝.",
        "◥꧁དℭ℟Åℤ¥ཌ꧂◤",
        "ғ̶ᴇ̶ᴀ̶ʀ̶ʟ̶ᴇ̶s̶s̶ 𒆜",
        "⚔️⚔やiͥᴢzͣaͫᴳᵒᵈ⚔⚔️",
        "ͥ ͣ ͫ ᴮᴬᴰʙᴏʏ 𓅈",
        "╰‿╯【Jⁿᵗᵒⁿⁱᵒ】╰‿╯",
        "▷ ◉──────02:12 ♡.",
        "??┊Μαяѕнмαℓℓσω┊ ??",
        "ᴛᴛᴏﾒ፝֟ɪᴄﾑ 𒆜",
        "Ꭾꫝɴ ×͜×",
        "ᴛᴍ᭄ᴛᴏﾒ፝֟ɪᴄo ╰‿╯",
        "ＣＨＯＲＩ ☂ＰＡＮ☂",
        "複| ᴋʏᴀᴍɪ ཀ‿ཀ",
        "៚𝐆𝐢𝐫𝐥ꨄ",
        "ＩᎷ 𝙻𝚊𝚣𝚢 𝚋𝚘𝚢✿",
        "★нσηєу★࿐",
        "៚𝐁𝐨𝐲 ꨄ",
        "—͟͞͞🥥 🅲🅾🅲🅾 🥥",
        "ㄥ刀几𒈞口爪ム尺𒈞",
        "╰‿╯〖𝟗𝟓〗VΘᒪK ☬༒",
        "ᎪᴍɪᴛㅤᎥꜱㅤᏰᴀᴄᴋ",
        "Տ⚔ᗩ⚔ᗰ⚔ᑌ⚔ᖇ⚔ᗩ⚔I ★",
        "❥︎ＱＵＥＥＮ ╰🐼╯",
        "✨τσχɪc 🦋⃟ησνα ‼",
        "ꪶꫂ 𝔽𝕒𝕚𝕣𝕪 𝕭𝖗𝖊𝖟𝖊𝖊 🦋⃟ ☂",
        "ɪᴍ᭄ꦿNaddyシ",
        "ꪶꫂ ☯︎L̸ᎧKϟᏆᎪꨄ︎ ☂🦋⃟💗᪲᪲᪲",
        "ｉ ˡᵒᵛᵉ ☂‹𝟹",
        "⧬☆⋅⋆ ─🆂🆄🅺🅃🅃─ ⋆⋅☆⧬ 🍂",
        "🖤⃝ΜΛΝϽΝΝΥ ࿐★",
        "ᗪᖇᗩᏀᗝᑌ╰‿╯ 🅟🅛🅤🅢 🖤⃝ME࿐",
        "ᴍr͢ ΡΞЯƑΞϽΤ 🪄",
        "⟆Ⱨ¥Ƥ₣Ɽ ⚔ ₲ⱧØ₴₮ ⟅ 😈",
        "—͟͞͞✿ ZΞHΞЯ ⩠ 👒",
        "ᴬᴳ•『ᴀssᴀsɪɴ』•𐀪𐀪࿐",
        "ᴠͥɪͣᴘͫ ╬ I Z A N A M I ╬",
        "Ɓ❷Ⓚ⨳༊Ɓ࿊ŋƳ₂ᵏᶦᶦ࿐࿆",
        "☠︎ ⚡Ꭲʀʏ么Aɢᴀɪɴ࿐,",
        "𝘋⚠𝘕𝘎𝘌𝘙 𝘡𝘖𝘕𝘌",
        "ᴹᴿメZA R Y 𓆩☠𓆪",
        "•| кєяνzᯓ⨳",
        "Iиƒεяиυм™",
        "⧼S⧽⧼⧼𖹭⧽⧼⧼u⧽⧽⧼l⧽⋅⋆❇︎ 👀",
        "꧁☬⋆mad༒jokar⋆☬꧂",
        "🅗🅐🅟🅟🅨 🅑🅘🅡🅣🅗🅓🅐🅨 ⋆ꫂ❁⋆",
        "ᴹᴿメ𓄂B E A S T メ 𝟏𝟎",
        "™ ᴅɪᴀʙʟᴏ ✞",
        "╰‿╯ ϟＴＥＲＲＯＲ ϟ 亗",
        "ʜᴇʀᴏ ☆『LEGEND』☆",
        "◦ ૐ नमः ⚐ꔪ",
        "༝༚༝༚",
        "Rice 🌾 S҉ N҉ ☃︎ W҉",
        "♡︎NOEMI♡︎♥︎❥𑁍㋛",
        "‼ 🐉 V 𝟏 🪄𓆌",
        "Gッᴛ ᥆ ᥊ Ꭵ ᥴ ᥆ ‼ ಠ⁠_⁠ಠ",
        "㋚ ΜΛΧΧ ⟡⟡",
        "꧁✧⟆ 𝑆 ℎ 𝑎 𝑑 𝑜 𝑤 ⟅✧꧂",
        "🦋⃟メꜱ ᴇ ᴄ ʀ ᴇ ᴛ メ࿐",
        ">Ｙｕｋｉ<",
        "匚👀ㄥ🧣",
        "彡⛧么🅢🅤🅝🅢🅗🅘🅝🅔么⛧彡",
        "×º°”˜`”°º×𝑀𝒶𝓎𝒶×º°”˜`”°º×",
        "๖ۣۜT๖ۣۜh๖ۣۜu๖ۣۜn๖ۣۜd๖ۣۜe๖ۣۜr 么",
        "Я α ɠ ε ρ ℓ υ ѕ ε 『✌︎︎』❤️‍🔥",
        "ᴵᵐ᭄ᶜᵒᵛⁱᵈ¹⁹",
        "ᴍ𝚨x✗",
        "*κɪɴɢ* Β ᒪ Λ Ɗ Ξ 🦅",
        "⦏B̂⦎⦏î⦎⦏r̂⦎⦏t̂⦎⦏ĥ⦎⦏d̂⦎⦏â⦎⦏ŷ⦎ 🎉",
        "ᯓ𝙈 𝙖 𝙜 𝙣 𝙚 𝙩 ⋐",
        "ꫝ𓅈 E a g l e𓏧 亗",
        "𐙚˚⊹ѕκυℓℓ𓄯νσℓταɠε ☆ˎˊ˗࿐",
        "𝗚𝄂𝄁𝗼𝄀𝄁𝗹𝄀𝄁𝗱𝄂𝄀𝗲𝄂𝄀𝗻 -ˋˏꫝ𝛖𝛑𝛂ˎˊ˗",
        "B r ◇ i g h t",
        "ꜱ p 𓏲 r k⟡",
        "𝑺 𝒉 𝒂 𝒅 𝒐 𐚁 𝑩 𝒐 𝒚",
        "🦋 🅑 🅖 🅗 🅣 ♡࿐",
        "𝙈 𝙤 𝙤 𝙣 𖠿 𝙁 𝙡 𝙤 𝙬˚｡☁︎ ｡˚☽˚｡",
        "LEGEND °ⓅⓇⓄ°",
        "ϟ A♡rα ( ˆ⌣ˆ )",
        "⚜ ₹ｕｐｅｅ ⚜",
        "ᵍᵒᵒᵈ ✌︎︎ˎˊ˗ 𝐷𝐴𝑌 ☻",
        "ᗷᒪᗩᑕK 𝟕𝟕𝟕",
        "ᑭᏞᗩᎩ ᗷ☺︎Ꭹ 𐀪𐀪",
        "🐼⃞ᴵᵐ•ʟᴜᴄɪꜰᴇʀ᭄࿐",
        "𝙇𝙐𝘾𝙆𝙔 𒈔",
        "メ𓄀𝖋𝖎𝖌𝖍𝖙𝖊𝖗ˎˊ˗メ",
        "●⃝✨𝙿𖦹𝙺𝙴𝙼Ø𝙽●⃝✨",
        "ꪎꪎ┊✿┊ ɴ ᴀ ʀ ᴜ ᴛ ᴏ ᭄",
        "𓄂𝘒𝘐𝘕𝘎ﮩﮩ٨ـ♚",
        "ḉ✺✺ℓ ‼",
        "ⁱᵃᵐ|ꀤ₥𒆜",
        "ᴮᴼˢˢܔ°ⓅⓇⓄ° ࿐",
        "शैत̶।‌‍‌‍‍न̶‍‍‌‍ 👹",
        "𒆜ᎷΛƦᏟOོ",
        "✧Nɪɢʜᴛƒαʟʟ✧",
        "𓂀𝓟𝓱𝓸𝓮𝓷𝓲𝔁𓂀",
        "益 | Sקσяᴛ т𝖾αм ♾",
        "☯ 𝗗𝗛𝗔𝗥𝗠𝗔 𝗥𝗔𝗞𝗦𝗛𝗔𝗞 ☯",
        "♡⃘⃚⃤⃝ 𝐄𝐧𝐜𝐡𝐚𝐧𝐭𝐞𝐝 𝐊𝐢𝐬𝐬 ♡⃘⃚⃤⃝",
        "៚क̶र्म̶। ꫂ∞ꪶ",
        "᭄𝐂𝐀𝐑𝐑𝐘ツ",
        "亗 𝗰𝘂𝗿𝘀𝗲 ⚡︎ ‼ 〄",
        "𝄂𝄂𝄃Ｍａｒｓｈａｌ𝄃𝄂𝄂𝄃࿐",
        "ᴹᴿ°᭄ 🅄ᶻᵁᵐᵃᴷᴵ 七𖣠",
        "𖣠 𝙇𝙀𝙂𝙀𝙉𝘿_𝙊𝙁_𝙕𝙊𝙍𝙊 ツ",
        "♕⃝⃤⃘ 𝐏𝐫𝐢𝐧𝐜𝐞𝐬𝐬 ♕⃝⃤⃘",
        "⋆˙⟡ 𝐻𝑒𝑎𝑟𝑡 𝑊ℎ𝑖𝑠𝑝𝑒𝑟𝑠 ⟡˙⋆",
        "☁︎︎༺ 𝑺𝒘𝒆𝒆𝒕 𝑬𝒎𝒃𝒓𝒂𝒄𝒆 ༻☁︎︎",
        "❦⃟༄ ▰▱𝓕𝓸𝓻𝓮𝓿𝓮𝓻 𝓜𝓲𝓷𝓮 ▰▱☽༉‧₊˚✧",
        "🫧˚ ༘ 𝓛𝓸𝓿𝓮𝓵𝔂 𝓓𝓪𝔂 🫧˚ ༘",
        "༄ᶦᶰᵈⁱᵃ᭄🇮🇳 𝙹𝙰𝙸 𝙷𝙸𝙽𝙳 ☬",
        "𓆩‼ 𝙃𝙄𝙉𝘿𝙐𝙎⚐𝘼𝙉𝙄 ‼𓆪",
        "°❈° ≫ 卄卂尺ᗪ 山〇尺Ҝ ≪ °❈°",
    "ᛖᚱ Vιяυѕ ⚠"
  ],
  font: [
        "ᴅ ɪ ᴍ ⌔ ɴ ᴅ",
        "𝐶 🂱 𝑅 𝐷",
        "ᝰ 𝘢 𝘷 𝘦",
        "𝘚𝘗ΞΞ𝘋",
        "ꫝυяα",
        "𝙶 ⌔𝚕 𝚍",
        "✄⌁C┈U┈T⌁",
        "𝑾 𝒂 ϟ 𝒕",
        "𝘉 ⧉ 𝘟",
        "L 𖹭 v e",
        "𓄂𝐾 𝑖 𝑛 𝑔",
        "F l ✿ w e r",
        "ꜱ ᴛ ★ ʀ",
        "𓆩ⓌⒾⓃⒼⓈ𓆪",
        "△ 𝘕 𝘎 𝘌 𝘓",
        "ʟ𖦹𖦹ᴘ",
        "𝑹 ⟡ 𝒀 𝑨 𝑳",
        "ʜ 𓂋 ʟ",
        "ᴜ·ᴍ·☂ʀ·ᴇ·ʟ·ʟ·ᴀ·",
        "S i n g 𐀪 e",
        "匚卄丨几乇丂乇",
        "W͢ a͢ ⌲ V͢ e͢",
        "Μ Λ Ɠ Ν ⋐ Τ",
        "ꜱ ᴛ ⏱ ᴘ",
        "𝑪 𐚁 𝒘 𝑩 𝒐 𝒚",
        "𝙈 𝙤☽ 𝙤☽ 𝙣",
        "Ή ☺︎ Ρ Ρ Υ",
        "𐌱 𓄯 𐍂 𐌽",
        "𝑩 𖤛 𖤛 𝑴",
        "𝑅 ⸙ 𝑐 𝑒",
        "𓃠 𝚗 𝚒 𝚖 𝚊 𝚕",
        "ᵈ ◦ ᵃ ᵗ",
        "𝐃𝐚𝐫𝐥𖧷𝐢𝐧𝐠",
        "𝑈 ♞ 𝐼 𝐶 🜚 𝑅 𝑁",
        "ᴡɪꜰi͢ᯤ",
        "𝗣 𝗥 ☯",
        "ズ υ η",
        "s ς 𔓎 г у",
        "ˢ ˡ ᶻ 𝗓 𐰁 ᵖ",
        "Simple",
        "ℍ𐚁𝕋",
        "₹ｕｐｅｅ",
        "ṃıяяȏя",
        "𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 🅾",
        "𝄃𝄃𝄂C͢𝄂𝄀𝄁O͢𝄃𝄂D͢𝄂𝄃",
        "𝗗⚠𝗡𝗚𝗘𝗥",
        "𝑩 𐦍 𝒕 𝒕 𝒆 𝒓 𝒇 𝒍 𝒚",
        "𝘙 𝘪 𝘨 𝘩 ✓",
        "乂 r͓̽ o͓̽ n͓̽ g͓̽",
        "Ｃ ｌ ☁︎ ｕ ｄ",
        "𓂃w r i t e𓂃✍",
        "𝑆 𝑁 ☃︎ 𝑊",
        "Ⓡ Ⓞ Ⓤ Ⓝ Ⓓ",
        "𖠿 𝙾 𝙼",
        "⚐ 𝕃 𝔸 𝔾",
        "♫ υ ѕ ɪ c",
        "𐀪 𝑒 𝑜 𐀪 𝑙 𝑒",
        "𝗗 𝗘 ☠ 𝗧 𝗛",
        "S̷ A̷ ☹︎",
        "Ｃ 𓃾 Ｗ",
        "A̴ ➶ ➶ O̴ W̴",
        "ᴛ ʀ ɪ ɢ ⁍ ʀ",
        "🄲 🂱 🅁 🄳",
        "N ➀ M B E R",
        "𝙲 ☕︎ 𝔣 𝔣 𝔢 𝔢",
        "ċ ο в 𓆗 α",
        "𝐿⟲𝑎𝑑𝑖𝑛𝑔",
        "Ѕ ⛷ Ŗ Ϝ",
        "𝑃𝐿▶𝑌",
        "𝚆 𝚑 ☸ ☸ 𝚕",
        "𝐹 𝐿 ⚡︎ 𝑆 𝐻",
        "F҉o҉c҉u҉s҉",
        "𝗦𝗖⚙𝗣𝗘",
        "ગુજરાતી",
        "❶ N E",
        "C̶A̶N̶C̶E̶L̶",
        "Infi∞nity",
    "ꫝυяα"
  ]
};

let stylesByCategory = {
  love: [
    {
      name: "love_panda_style",
      prefix: "˗ˏˋ🐼ﮩ٨ـ",
      suffix: "ـﮩ٨ـ🐼ˎˊ˗",
      map: {
        a: "ᗩ", b: "ᗷ", c: "ᑕ", d: "ᗪ", e: "ᗴ", f: "ᖴ", g: "Ꮐ", h: "ᕼ", i: "Ꭵ", j: "ᒍ",
        k: "Ꮶ", l: "Ꮮ", m: "ᗰ", n: "ᑎ", o: "ᗝ", p: "ᑭ", q: "ᑫ", r: "ᖇ", s: "ᔕ", t: "ᖶ",
        u: "ᑌ", v: "ᐯ", w: "ᗯ", x: "᙭", y: "Ꭹ", z: "ᘔ",
        A: "ᗩ", B: "ᗷ", C: "ᑕ", D: "ᗪ", E: "ᗴ", F: "ᖴ", G: "Ꮐ", H: "ᕼ", I: "Ꭵ", J: "ᒍ",
        K: "Ꮶ", L: "Ꮮ", M: "ᗰ", N: "ᑎ", O: "ᗝ", P: "ᑭ", Q: "ᑫ", R: "ᖇ", S: "ᔕ", T: "ᖶ",
        U: "ᑌ", V: "ᐯ", W: "ᗯ", X: "᙭", Y: "Ꭹ", Z: "ᘔ"
      }
    },
    {
      name: "love_sparkle_style",
      prefix: "𐙚✨˚",
      suffix: "˚✨𐙚 ツ",
      map: {
        a: "a̷", b: "b̷", c: "c̷", d: "d̷", e: "e̷", f: "f̷", g: "g̷", h: "h̷", i: "i̷", j: "j̷",
        k: "k̷", l: "l̷", m: "m̷", n: "n̷", o: "o̷", p: "p̷", q: "q̷", r: "r̷", s: "s̷", t: "t̷",
        u: "u̷", v: "v̷", w: "w̷", x: "x̷", y: "y̷", z: "z̷",
        A: "A̷̷", B: "B̷̷", C: "C̷̷", D: "D̷̷", E: "E̷̷", F: "F̷̷", G: "G̷̷", H: "H̷̷", I: "I̷̷", J: "J̷̷",
        K: "K̷̷", L: "L̷̷", M: "M̷̷", N: "N̷̷", O: "O̷̷", P: "P̷̷", Q: "Q̷̷", R: "R̷̷", S: "S̷̷", T: "T̷̷",
        U: "U̷̷", V: "V̷̷", W: "W̷̷", X: "X̷̷", Y: "Y̷̷", Z: "Z̷̷"
      }
    }
  ],
  gamer: [],
  fancy: [],
  font: []
};

let symbolsData = {
  frames: [
    { symbol: "꧁", name: "Left Frame" },
    { symbol: "꧂", name: "Right Frame" },
        { symbol: "❮", name: "Left Angle Quote" },
        { symbol: "❯", name: "Right Angle Quote" },
        { symbol: "︻", name: "Left Tortoise Shell" },
        { symbol: "︼", name: "Right Tortoise Shell" },
        { symbol: "⫷", name: "Left Triple Angle" },
        { symbol: "⫸", name: "Right Triple Angle" },
        { symbol: "《", name: "Left Double Angle" },
        { symbol: "》", name: "Right Double Angle" },
        { symbol: "«", name: "Left Guillemet" },
        { symbol: "»", name: "Right Guillemet" },
        { symbol: "【", name: "Left Black Lenticular" },
        { symbol: "】", name: "Right Black Lenticular" },
        { symbol: "〖", name: "Left White Lenticular" },
        { symbol: "〗", name: "Right White Lenticular" },
        { symbol: "『", name: "Left White Corner" },
        { symbol: "』", name: "Right White Corner" },
        { symbol: "❰", name: "Left Heavy Angle" },
        { symbol: "❱", name: "Right Heavy Angle" },
        { symbol: "⟦", name: "Left White Square" },
        { symbol: "⟧", name: "Right White Square" },
        { symbol: "⟬", name: "Left White Tortoise" },
        { symbol: "⟭", name: "Right White Tortoise" },
        { symbol: "⪻", name: "Left Small Angle" },
        { symbol: "⪼", name: "Right Small Angle" },
        { symbol: "⧼", name: "Left Angle with Dot" },
        { symbol: "⧽", name: "Right Angle with Dot" },
        { symbol: "═", name: "Double Line Left" },
        { symbol: "═", name: "Double Line Right" },
        { symbol: "▌", name: "Left Block" },
        { symbol: "▐", name: "Right Block" },
        { symbol: "╚", name: "Bottom Left Corner" },
        { symbol: "╝", name: "Bottom Right Corner" },
        { symbol: "⎛", name: "Top Left Parenthesis" },
        { symbol: "⎞", name: "Top Right Parenthesis" },
        { symbol: "⎜", name: "Vertical Left Parenthesis" },
        { symbol: "⎟", name: "Vertical Right Parenthesis" },
        { symbol: "⎝", name: "Bottom Left Parenthesis" },
        { symbol: "⎠", name: "Bottom Right Parenthesis" },
        { symbol: "⩸", name: "Left Equals with Dot" },
        { symbol: "⩹", name: "Right Equals with Dot" },
        { symbol: "⟊", name: "White Up Triangle" },
        { symbol: "⟉", name: "White Down Triangle" },
        { symbol: "✦", name: "Black Star" },
        { symbol: "✧", name: "White Star" },
        { symbol: "✩", name: "Shadowed Star" },
        { symbol: "✪", name: "Circled Star" },
        { symbol: "✫", name: "Open Center Star" },
        { symbol: "✬", name: "Black Center Star" },
        { symbol: "❂", name: "Circled Open Star" },
        { symbol: "❃", name: "Heavy Teardrop Star" },
        { symbol: "✹", name: "Heavy Star" },
        { symbol: "✸", name: "Heavy Asterisk" },
        { symbol: "✺", name: "Open Center Asterisk" },
        { symbol: "✻", name: "Spoked Asterisk" },
        { symbol: "✼", name: "Shadowed White Star" },
        { symbol: "✽", name: "Heavy Teardrop Spoked" },
        { symbol: "☌", name: "Conjunction" },
        { symbol: "☍", name: "Opposition" },
        { symbol: "☽", name: "Waxing Moon" },
        { symbol: "☾", name: "Waning Moon" },
        { symbol: "𐌗", name: "Old Italic X" },
        { symbol: "𐌘", name: "Old Italic Phi" },
        { symbol: "〔", name: "Left Tortoise Shell Bracket" },
        { symbol: "〕", name: "Right Tortoise Shell Bracket" },
        { symbol: "⦃", name: "Left White Curly" },
        { symbol: "⦄", name: "Right White Curly" },
        { symbol: "⦇", name: "Left White Parenthesis" },
        { symbol: "⦈", name: "Right White Parenthesis" },
        { symbol: "⧈", name: "White Square with Dot" },
        { symbol: "⧉", name: "White Square with Center" },
        { symbol: "⋖", name: "Less with Dot" },
        { symbol: "⋗", name: "Greater with Dot" },
        { symbol: "⧘", name: "Left Wiggly Fence" },
        { symbol: "⧙", name: "Right Wiggly Fence" },
        { symbol: "⪢", name: "Very Greater Than" },
        { symbol: "⪡", name: "Very Less Than" },
        { symbol: "⥊", name: "Left Harpoon with Barb Up" },
        { symbol: "⥋", name: "Right Harpoon with Barb Up" }
  ],
  tech: [
    { symbol: "░", name: "Light Shade" },
    { symbol: "s", name: "Light Shade" },
    { symbol: "r", name: "Medium Shade" },
    { symbol: "♛", name: "Black Chess Queen" },
    { symbol: "♚", name: "Black Chess King" },
    { symbol: "✪", name: "Circled White Star" },
    { symbol: "★", name: "Black Star" },
    { symbol: "✦", name: "Black Four Pointed Star" },
    { symbol: "✧", name: "White Four Pointed Star" },
    { symbol: "✠", name: "Maltese Cross" },
    { symbol: "✡", name: "Star of David" },
    { symbol: "✩", name: "Stress Outlined White Star" },
    { symbol: "✫", name: "Open Center Black Star" },
    { symbol: "✬", name: "Black Center White Star" },
    { symbol: "✭", name: "Outlined Black Star" },
    { symbol: "✮", name: "Heavy Outlined Black Star" },
    { symbol: "✯", name: "Pinwheel Star" },
    { symbol: "✰", name: "Shadowed White Star" },
    { symbol: "✱", name: "Heavy Asterisk" },
    { symbol: "✲", name: "Open Center Asterisk" },
    { symbol: "✳", name: "Eight Spoked Asterisk" },
    { symbol: "✴", name: "Eight Pointed Black Star" },
    { symbol: "✵", name: "Eight Pointed Pinwheel Star" },
    { symbol: "✶", name: "Six Pointed Black Star" },
    { symbol: "✷", name: "Eight Pointed Rectilinear Black Star" },
    { symbol: "✸", name: "Heavy Eight Pointed Rectilinear Black Star" },
    { symbol: "✹", name: "Twelve Pointed Black Star" },
    { symbol: "✺", name: "Sixteen Pointed Asterisk" },
    { symbol: "✻", name: "Teardrop Spoked Asterisk" },
    { symbol: "✼", name: "Open Center Teardrop Spoked Asterisk" },
    { symbol: "✽", name: "Heavy Teardrop Spoked Asterisk" },
    { symbol: "✾", name: "Six Petalled Black and White Florette" },
    { symbol: "✿", name: "Black Florette" },
    { symbol: "❀", name: "White Florette" },
    { symbol: "❁", name: "Eight Petalled Outlined Black Florette" },
    { symbol: "❂", name: "Circled Open Center Eight Pointed Star" },
    { symbol: "❃", name: "Heavy Teardrop Spoked Pinwheel Asterisk" },
    { symbol: "❄", name: "Snowflake" },
    { symbol: "❅", name: "Tight Trifoliate Snowflake" },
    { symbol: "❆", name: "Heavy Chevron Snowflake" },
    { symbol: "❇", name: "Sparkle" },
    { symbol: "❈", name: "Heavy Sparkle" },
    { symbol: "❉", name: "Balloon Spoked Asterisk" },
    { symbol: "❊", name: "Eight Teardrop Spoked Propeller Asterisk" },
    { symbol: "❋", name: "Heavy Eight Teardrop Spoked Propeller Asterisk" },
    { symbol: "❖", name: "Black Diamond Minus White X" },
    { symbol: "❘", name: "Light Vertical Bar" },
    { symbol: "❙", name: "Medium Vertical Bar" },
    { symbol: "❚", name: "Heavy Vertical Bar" },
    { symbol: "❛", name: "Heavy Single Turned Comma Quotation Mark Ornament" },
    { symbol: "❜", name: "Heavy Single Comma Quotation Mark Ornament" },
    { symbol: "❝", name: "Heavy Double Turned Comma Quotation Mark Ornament" },
    { symbol: "❞", name: "Heavy Double Comma Quotation Mark Ornament" },
    { symbol: "❡", name: "Heavy Low Single Comma Quotation Mark Ornament" },
    { symbol: "❢", name: "Heavy Exclamation Mark Ornament" },
    { symbol: "❣", name: "Heavy Heart Exclamation Mark Ornament" },
    { symbol: "❤", name: "Heavy Black Heart" },
    { symbol: "❥", name: "Rotated Heavy Black Heart Bullet" },
    { symbol: "❦", name: "Floral Heart" },
    { symbol: "❧", name: "Rotated Floral Heart Bullet" },
    { symbol: "✜", name: "Heavy Greek Cross" },
    { symbol: "✚", name: "Heavy Greek Cross 2" },
    { symbol: "✙", name: "Heavy Greek Cross 3" },
    { symbol: "✘", name: "Heavy Ballot X" },
    { symbol: "✗", name: "Ballot X" },
    { symbol: "✖", name: "Heavy Multiplication X" },
    { symbol: "✔", name: "Heavy Check Mark" },
    { symbol: "✕", name: "Multiplication X" },
    { symbol: "✍", name: "Writing Hand" },
    { symbol: "✎", name: "Lower Right Pencil" },
    { symbol: "✏", name: "Pencil" },
    { symbol: "✑", name: "Upper Right Pencil" },
    { symbol: "✒", name: "Black Nib" },
    { symbol: "✓", name: "Check Mark" },
    { symbol: "❌", name: "Cross Mark" },
    { symbol: "❎", name: "Negative Squared Cross Mark" },
    { symbol: "✂", name: "Black Scissors" },
    { symbol: "✁", name: "Upper Blade Scissors" },
    { symbol: "✃", name: "Lower Blade Scissors" },
    { symbol: "✄", name: "White Scissors" },
    { symbol: "✇", name: "Tape Drive" },
    { symbol: "✈", name: "Airplane" },
    { symbol: "✉", name: "Envelope" },
    { symbol: "☩", name: "Cross of Jerusalem" },
    { symbol: "☨", name: "Cross of Lorraine" },
    { symbol: "☦", name: "Orthodox Cross" },
    { symbol: "☫", name: "Farsi Symbol" },
    { symbol: "☬", name: "Adi Shakti" },
    { symbol: "☭", name: "Hammer and Sickle" },
    { symbol: "☯", name: "Yin Yang" },
    { symbol: "☽", name: "First Quarter Moon" },
    { symbol: "☾", name: "Last Quarter Moon" },
    { symbol: "☄", name: "Comet" },
    { symbol: "☇", name: "Lightning" },
    { symbol: "☈", name: "Thunderstorm" },
    { symbol: "☉", name: "Sun" },
    { symbol: "☊", name: "Ascending Node" },
    { symbol: "☋", name: "Descending Node" },
    { symbol: "☌", name: "Conjunction" },
    { symbol: "☍", name: "Opposition" },
    { symbol: "☎", name: "Black Telephone" },
    { symbol: "☏", name: "White Telephone" },
    { symbol: "⚝", name: "Outlined White Star" },
    { symbol: "⚜", name: "Fleur-de-lis" },
    { symbol: "⚚", name: "Staff of Hermes" },
    { symbol: "⚛", name: "Atom Symbol" },
    { symbol: "⚡", name: "High Voltage" },
    { symbol: "☢", name: "Radioactive" },
    { symbol: "☣", name: "Biohazard" },
    { symbol: "⚘", name: "Flower" },
    { symbol: "⚙", name: "Gear" },
    { symbol: "⚔", name: "Crossed Swords" },
    { symbol: "☠", name: "Skull and Crossbones" },
    { symbol: "♣", name: "Black Club Suit" },
    { symbol: "♤", name: "White Spade Suit" },
    { symbol: "♧", name: "White Club Suit" },
    { symbol: "✞", name: "Latin Cross" },
    { symbol: "♠", name: "Black Spade Suit" },
    { symbol: "☥", name: "Ankh" },
    { symbol: "☧", name: "Chi Rho" },
    { symbol: "☚", name: "Black Left Pointing Index" },
    { symbol: "☛", name: "Black Right Pointing Index" },
    { symbol: "☜", name: "White Left Pointing Index" },
    { symbol: "☝", name: "White Up Pointing Index" },
    { symbol: "☟", name: "White Down Pointing Index" },
    { symbol: "☞", name: "White Right Pointing Index" },
    { symbol: "☂", name: "Umbrella" },
    { symbol: "⚰", name: "Coffin" },
    { symbol: "⚱", name: "Funeral Urn" },
    { symbol: "⚑", name: "Black Flag" },
    { symbol: "⚐", name: "White Flag" },
    { symbol: "⚓", name: "Anchor" },
    { symbol: "⚒", name: "Hammer and Pick" },
    { symbol: "☤", name: "Caduceus" },
    { symbol: "☮", name: "Peace Symbol" },
    { symbol: "☁", name: "Cloud" },
    { symbol: "☃", name: "Snowman" },
    { symbol: "✢", name: "Four Balloon Spoked Asterisk" },
    { symbol: "✣", name: "Four Teardrop Spoked Asterisk" },
    { symbol: "✤", name: "Four Teardrop Spoked Asterisk 2" },
    { symbol: "✥", name: "Four Club Spoked Asterisk" },
    { symbol: "♜", name: "Black Chess Rook" },
    { symbol: "♝", name: "Black Chess Bishop" },
    { symbol: "♞", name: "Black Chess Knight" },
    { symbol: "♟", name: "Black Chess Pawn" },
    { symbol: "♔", name: "White Chess King" },
    { symbol: "♕", name: "White Chess Queen" },
    { symbol: "♖", name: "White Chess Rook" },
    { symbol: "♗", name: "White Chess Bishop" },
    { symbol: "♘", name: "White Chess Knight" },
    { symbol: "♙", name: "White Chess Pawn" },
    { symbol: "♩", name: "Quarter Note" },
    { symbol: "♪", name: "Eighth Note" },
    { symbol: "♫", name: "Beamed Eighth Notes" },
    { symbol: "♬", name: "Beamed Sixteenth Notes" },
    { symbol: "♭", name: "Music Flat Sign" },
    { symbol: "♮", name: "Music Natural Sign" },
    { symbol: "♯", name: "Music Sharp Sign" },
    { symbol: "⚕", name: "Staff of Aesculapius" },
    { symbol: "⚖", name: "Scales" },
    { symbol: "⚗", name: "Alembic" }
  ],
  nature: [
        { symbol: "🌿", name: "Leaf" },
        { symbol: "🌻", name: "Sunflower" }, 
    { symbol: "🌴", name: "Palm Tree" },
    { symbol: "🍂", name: "Fallen Leaf" },
    { symbol: "🥀", name: "Wilted Flower" },
    { symbol: "🌺", name: "Hibiscus" },
    { symbol: "🌿", name: "Herb" },
    { symbol: "🌾", name: "Sheaf of Rice" },
    { symbol: "🍁", name: "Maple Leaf" },
    { symbol: "🍄", name: "Mushroom" },
    { symbol: "🌳", name: "Deciduous Tree" },
    { symbol: "🌲", name: "Evergreen Tree" },
    { symbol: "🏖️", name: "Beach with Umbrella" },
    { symbol: "🏝️", name: "Desert Island" },
    { symbol: "🐼", name: "Panda" },
    { symbol: "🐰", name: "Rabbit" },
    { symbol: "🐭", name: "Mouse" },
    { symbol: "🦄", name: "Unicorn" },
    { symbol: "🦕", name: "Sauropod" },
    { symbol: "🦨", name: "Skunk" },
    { symbol: "🦫", name: "Beaver" },
    { symbol: "🐿️", name: "Chipmunk" },
    { symbol: "🦚", name: "Peacock" },
    { symbol: "🐦‍🔥", name: "Phoenix" },
    { symbol: "🦋", name: "Butterfly" },
    { symbol: "🐞", name: "Lady Beetle" },
    { symbol: "🗻", name: "Mount Fuji" }
    ],
  vip: [
    { symbol: "̤̮", name: "Combining Breve and Inverted Breve" },
    { symbol: "⋆˚࿔⊹ ࣪", name: "Star with Ornaments" },
    { symbol: "ᝰ", name: "Hanunoo Letter Ha" },
    { symbol: ".ᐟ", name: "Canadian Syllabics Full Stop" },
    { symbol: "⋆.𐙚", name: "Star with Ancient Symbol" },
    { symbol: "፝֟፝֟", name: "Ethiopic Combining Marks" },
    { symbol: "✧", name: "White Four Pointed Star" },
    { symbol: "𓏧", name: "Egyptian Symbol" },
    { symbol: "⚔", name: "Crossed Swords" },
    { symbol: "𖹭", name: "Miao Letter Nra" },
    { symbol: "๖ۣۜ", name: "Thai and Tamil Combination" },
    { symbol: "᭄", name: "Balinese Adeg Adeg" },
    { symbol: "⓿", name: "Circled Digit Zero" },
    { symbol: "᪲᪲᪲", name: "Tai Tham Sign Mai Sam" },
    { symbol: "ྀི", name: "Tibetan Vowel Sign I" },
    { symbol: "ꤪꤨꤪ", name: "Kayah Li Vowel Ue" },
    { symbol: "𖦹", name: "Bamum Letter Phase E" },
    { symbol: "⸙", name: "Hyphen with Diaeresis" },
    { symbol: "☘", name: "Shamrock" },
    { symbol: "۝", name: "Arabic End of Ayah" },
    { symbol: "𓃹", name: "Egyptian Quail" },
    { symbol: "🂱", name: "Card Ace" },
{ symbol: ".ˣ‿ˣ.", name: " Kaomoji Face" },
{ symbol: "乡", name: "Village" },
{ symbol: "፝", name: "Gemination Mark" },
{ symbol: "🔖", name: "Bookmark" },
{ symbol: "꫟", name: "Tai Viet Symbol" },
{ symbol: "࿐࿆", name: "Tibetan Symbol " },
{ symbol: "༊", name: "Tibetan Symbol" },
{ symbol: "࿊", name: "Tibetan Symbol" },
{ symbol: "»𝕩«", name: "M Quotes" },
{ symbol: "☕︎ˎˊ˗", name: "Coffee s" },
{ symbol: "👀", name: "Eyes" },
{ symbol: "ૐ", name: "Om Symbol" },
{ symbol: "𓌉◯𓇋", name: "Circle" },
{ symbol: "🪈", name: "Flute" },
{ symbol: "𔘓", name: "Anatolian Hieroglyph" },
{ symbol: "-`♡´-", name: "Heart ws" },
{ symbol: "𓅭", name: "Egyptian Bird" },
{ symbol: "🏚️", name: "Derelict House" },
{ symbol: "⚓︎", name: "Anchor" },
{ symbol: "𓃖", name: "Egh Animal" },
{ symbol: "˙ᵕ˙", name: "Cute Face with Dots" },
{ symbol: "×̷̷͜×̷", name: "Cross Marks" },
{ symbol: "♔", name: "White Chess King" },
{ symbol: "🕯️", name: "Candle" },
{ symbol: "♕", name: "White Chess Queen" },
{ symbol: "♘", name: "White Chess Knight" },
{ symbol: "♙", name: "White Chess Pawn" },
{ symbol: "🩹", name: "Adhesive Bandage" },
{ symbol: "𖧷", name: "Miao Symbol" },
{ symbol: "✿.࿐", name: "Flower Mark" },
    { symbol: "𓍊", name: "Egyptian Reed" }
],
    gamer: [
        { symbol: "࿐", name: "Flower Swirl" },
        { symbol: "☯", name: "Yin Yang" },
        { symbol: "모", name: "Korean Mo" },
        { symbol: "☂", name: "Umbrella" },
        { symbol: "ⓥ", name: "Circled V" },
        { symbol: "𖹭", name: "Miao Sign" },
        { symbol: "么", name: "Chinese Yao" },
        { symbol: "✓", name: "Check Mark" },
        { symbol: "☫", name: "Farsi Symbol" },
        { symbol: "☬", name: "Adi Shakti" },
        { symbol: "『』", name: "White Corner Brackets" },
        { symbol: "༒", name: "Tibetan Symbol" },
        { symbol: "☠", name: "Skull" },
        { symbol: "メ", name: "Katakana Me" },
        { symbol: "𐚁", name: "Minoan Symbol" },
        { symbol: "♡", name: "Heart" },
        { symbol: "乂", name: "Chinese Yi" },
        { symbol: "✔", name: "Heavy Check" },
        { symbol: "☺︎", name: "Smiling Face" },
        { symbol: "✗", name: "Ballot X" },
        { symbol: "✰", name: "Star" },
        { symbol: "✞", name: "Latin Cross" },
        { symbol: "☕︎", name: "Hot Beverage" },
        { symbol: "✌︎︎", name: "Victory Hand" },
        { symbol: "𖦹", name: "Bamum Symbol" },
        { symbol: "×͜×", name: "Kaomoji Eyes" },
        { symbol: "⁹⁹", name: "Superscript 999" },
        { symbol: "𓆩", name: "Egyptian Start" },
        { symbol: "♫", name: "Music Notes" },
        { symbol: "╰⁔╯", name: "Kaomoji Arms" },
        { symbol: "𓆪", name: "Egyptian End" },
        { symbol: "⧉", name: "Two Squares" },
        { symbol: "☫", name: "Farsi Symbol 2" },
        { symbol: "☆", name: "White Star" },
        { symbol: "⨳", name: "Multiplication with Dot" },
        { symbol: "⟆", name: "Right Angle with Dot" },
        { symbol: "ૐ", name: "Om Symbol" },
        { symbol: "ꪶꫂ", name: "Tai Viet Symbols" },
        { symbol: "♛", name: "Queen" },
        { symbol: "‼", name: "Double Exclamation" },
        { symbol: "??", name: "Double Question" },
        { symbol: "ꫝ", name: "Tai Viet Ha" },
        { symbol: "亗", name: "Chinese Year" },
        { symbol: "❀", name: "Floral" },
        { symbol: "☛", name: "Hand Index" },
        { symbol: "⇝", name: "Right Squiggle" },
        { symbol: "⇜", name: "Left Squiggle" },
        { symbol: "𖤍", name: "Bamum Letter" },
        { symbol: "⚠", name: "Warning" },
        { symbol: "⏱", name: "Stopwatch" },
        { symbol: "༄", name: "Tibetan Head" },
        { symbol: "✿", name: "Flower" },
        { symbol: "★", name: "Black Star" },
        { symbol: "㋚", name: "Square Ka" },
        { symbol: "ϟ", name: "Koppa" },
        { symbol: "⚐", name: "Flag" },
        { symbol: "𐀪", name: "Linear B Symbol" },
        { symbol: "᭄", name: "Balinese Virama" },
        { symbol: "☸", name: "Dharma Wheel" },
        { symbol: "⎈", name: "Helm Symbol" },
        { symbol: "⁍", name: "Black Right Bullet" },
        { symbol: "៚", name: "Khmer Sign" },
        { symbol: "7ꪎ", name: "Seven with Tai" },
        { symbol: "ᯤ", name: "Batak Symbol" },
        { symbol: "⊰", name: "Precedes" },
        { symbol: "⊱", name: "Succeeds" },
        { symbol: "⊹", name: "Star Operator" },
        { symbol: "╬", name: "Cross" },
        { symbol: "˃ᴗ˂", name: "Happy Kaomoji" },
        { symbol: ":)", name: "Smiley Face" },
        { symbol: "∞", name: "Infinity" },
        { symbol: "ꪽ", name: "Tai Viet An" },
        { symbol: "ꫝ", name: "Tai Viet Ha 2" },
        { symbol: "Ꭷ", name: "Cherokee O" },
        { symbol: "❀", name: "Flower 2" },
        { symbol: "᪲᪲᪲", name: "Tai Tham Symbols" },
        { symbol: "𓄋", name: "Egyptian Vulture" },
        { symbol: "☻", name: "Black Smiley" },
        { symbol: "☁︎", name: "Cloud" },
        { symbol: "ꪎ⁔ꪎ", name: "Tai Viet Sao" },
        { symbol: "⚕", name: "Medical Symbol" },
        { symbol: "c̸u̸t̸e̸᭄", name: "Stylized Cute" },
        { symbol: "G̷̷ᴀᴍɪɴɢ", name: "Stylized Gaming" },
        { symbol: "ᴸ̸ᵒ̸ⱽ̸ᵉ̸ʳ̸", name: "Stylized Lover" },
        { symbol: "ᴍr͢", name: "Stylized Mr" },
        { symbol: "ᛖᚱ", name: "Rune ER" },
        { symbol: "Ꭾʀᴏ ‹", name: "Stylized Pro" },
        { symbol: "ᴍʀ⨳⟅", name: "Stylized MR" },
        { symbol: "βØᎩ", name: "Stylized Boy" },
        { symbol: "ᶜᵘᵗᵉ", name: "Small Cute" },
        { symbol: "ɢs͢", name: "Stylized GS" },
        { symbol: "ᴡɪꜰu͢", name: "Stylized Waifu" },
        { symbol: "ᴳ̸ᴬ̸ᴹ̸ᴱ̸ᴿ̸", name: "Stylized Gamer" },
        { symbol: "ᴮᴬᴰ", name: "Stylized Bad" },
        { symbol: "ᴬᴷ", name: "Stylized AK" },
        { symbol: "ꫝυяα", name: "Stylized Hura" },
        { symbol: "ⁱᵃᵐ", name: "Superscript I Am" },
        { symbol: "ͥ ͣ ͫ", name: "Combining Numbers" },
        { symbol: "¹⁸⁺", name: "18 Plus" },
        { symbol: "ɪᴍ᭄", name: "Stylized IM" },
        { symbol: "𝓲ꪑ", name: "Stylized Im" },
        { symbol: "ᴮᴼˢˢܔ", name: "Stylized Boss" },
        { symbol: "ꫝᥣ᥆ᥒᥱ", name: "Stylized Clone" },
        { symbol: "N𖹭.1", name: "Number One" },
        { symbol: "𝒪𝒻𝒻𝒾𝒸𝒾𝒶𝓁", name: "Official" },
        { symbol: "꩜", name: "Cham Symbol" },
        { symbol: "𓄀", name: "Egyptian Vulture 2" },
        { symbol: "𓄂", name: "Egyptian Vulture 3" },
        { symbol: "𓅈", name: "Egyptian Heron" },
        { symbol: "▼", name: "Down Triangle" },
        { symbol: "┊", name: "Light Vertical" },
        { symbol: "ᡣ𐭩", name: "Manichaean Symbol" },
        { symbol: "〄", name: "Japanese Symbol" },
        { symbol: "⛥", name: "Pentagram" },
        { symbol: "⸙", name: "Punctuation" },
        { symbol: "ズ", name: "Katakana Zu" }
    ],
  cute: [
    { symbol: "☺︎", name: "Smiley" },
        { symbol: "💗᪲᪲᪲", name: "Pink Hearts" },
        { symbol: "𓏲", name: "Egyptian Symbol" },
        { symbol: "𔓎", name: "Ancient Symbol" },
        { symbol: "(˃͈ ˂͈ )", name: "Cute Face" },
        { symbol: "𐚁", name: "Ancient Glyph" },
        { symbol: "𖦹", name: "Decorative Symbol" },
        { symbol: "🐼", name: "Panda" },
        { symbol: "𖹭", name: "Ornate Symbol" },
        { symbol: "☂", name: "Umbrella" },
        { symbol: "ꫂ❁", name: "Flower Combo" },
        { symbol: "୧⍤⃝💐", name: "Bouquet" },
        { symbol: "🅾", name: "O Symbol" },
        { symbol: "⌯⌲", name: "Geometric Symbols" },
        { symbol: "🐰", name: "Rabbit" },
        { symbol: "ツ", name: "Smiley Katakana" },
        { symbol: "๑˃̵ᴗ˂̵๑", name: "Happy Face" },
        { symbol: "𓄯", name: "Hieroglyph" },
        { symbol: "🐾", name: "Paw Prints" },
        { symbol: "ଳ", name: "Odia Letter" },
        { symbol: "⟡‿⟡", name: "Sparkle Face" },
        { symbol: "👒", name: "Hat" },
        { symbol: "꒰ᐢ. .ᐢ꒱", name: "Bear Face" },
        { symbol: " ̤̮ ", name: "Small Breve" },
        { symbol: " ᥫ᭡ ", name: "Tai Symbol" },
        { symbol: "՞•ㅅ•՞", name: "Cat Face" },
        { symbol: "˃ᴗ˂", name: "Happy Mouth" },
        { symbol: "≽^•⩊•^≼", name: "Animal Face" },
        { symbol: "꒦꒷♡꒷꒦", name: "Heart Frame" },
        { symbol: "(✿◠‿◠)", name: "Flower Face" },
        { symbol: "(｡♥‿♥｡)", name: "Heart Eyes" },
        { symbol: "💚᪲᪲᪲", name: "Green Hearts" },
        { symbol: "(˘❥˘)", name: "Kissy Face" },
        { symbol: "(｡◕‿◕｡)", name: "Innocent Face" },
        { symbol: "(๑˃ᴗ˂)ﻭ", name: "Waving Face" },
        { symbol: "➷➷", name: "Double Arrow" },
        { symbol: "(✧ω✧)", name: "Star Eyes" },
        { symbol: "(≧◡≦)", name: "Happy Face" },
        { symbol: "🍁⃝⃪⃨⃡", name: "Maple Leaf" },
        { symbol: "🌸⃝⃪⃨⃡✧", name: "Cherry Blossom" },
        { symbol: "🦋⃝⃪⃨⃡☆", name: "Butterfly" },
        { symbol: "🌷⃝⃪⃨⃡⟆", name: "Tulip" },
        { symbol: "🍃⃝⃪⃨⃡✦", name: "Leaf" },
        { symbol: "💐⃝⃪⃨⃡𖦹", name: "Bouquet" },
        { symbol: "🌼⃝⃪⃨⃡❀", name: "Daisy" },
        { symbol: "🪽⃝⃪⃨⃡✤", name: "Wings" },
        { symbol: "🌺⃝⃪⃨⃡⍣", name: "Hibiscus" },
        { symbol: "💖⃝⃪⃨⃡✩", name: "Sparkle Heart" },
        { symbol: "🩷⃝⃪⃨⃡𓇼", name: "Pink Heart" },
        { symbol: "⭐⃝⃪⃨⃡𓏲", name: "Star" },
        { symbol: "✿⃝⃪⃨⃡ꕤ", name: "Flower" },
        { symbol: "✧⃝⃪⃨⃡∘", name: "Sparkle" },
        { symbol: "❣⃝⃪⃨⃡⇢", name: "Heart Arrow" },
        { symbol: "✦⃝⃪⃨⃡ꗃ", name: "Diamond" },
        { symbol: "🍂⃝⃪⃨⃡✿", name: "Autumn Leaf" },
        { symbol: "🪽⃝⃪⃨⃡ᯅ", name: "Angel Wings" },
        { symbol: "🎀⃝⃪⃨⃡✶", name: "Ribbon" },
        { symbol: "🪷⃝⃪⃨⃡𖡼", name: "Lotus" },
        { symbol: "🌙⃝⃪⃨⃡✧", name: "Moon" },
        { symbol: "🫧⃝⃪⃨⃡⟡", name: "Bubbles" },
        { symbol: "🍄⃝⃪⃨⃡✾", name: "Mushroom" },
        { symbol: "🐾⃝⃪⃨⃡⩩", name: "Paw Prints" },
        { symbol: "💎⃝⃪⃨⃡✦", name: "Gem" },
        { symbol: "✩⃝⃪⃨⃡𖤐", name: "Star Symbol" },
        { symbol: "🧊⃝⃪⃨⃡⍊", name: "Ice" },
        { symbol: "🌟⃝⃪⃨⃡✧", name: "Glowing Star" },
        { symbol: "💛⃝⃪⃨⃡𖥻", name: "Yellow Heart" },
        { symbol: "🪻⃝⃪⃨⃡✿", name: "Violet" },
        { symbol: "(๑•ᴗ•๑)♡", name: "Blushing Face" },
        { symbol: "( ˆ⌣ˆ )♡", name: "Happy Face Heart" },
        { symbol: "(˶˃ ᵕ ˂˶)", name: "Cute Blush" },
        { symbol: "(*¯ ³¯*)♡", name: "Kissing Face" },
        { symbol: "(❁´◡`❁)", name: "Flower Face" },
        { symbol: "(╯♡‿♡)╯", name: "Arms Heart" },
        { symbol: "(｡•ᴗ•｡)✿", name: "Flower Cheeks" },
        { symbol: "(♡⸃◡⸂♡)", name: "Heart Eyes" },
        { symbol: "(ฅ•.•ฅ)♡", name: "Cat Hands" },
        { symbol: "(❀◕‿◕)", name: "Flower Dot Eyes" },
        { symbol: "(⊃｡•́‿•̀｡)⊃", name: "Hugging" },
        { symbol: "(❁ᴗ͈ˬᴗ͈)◞", name: "Cheeky Face" },
        { symbol: "(≧ᗜ≦*)", name: "Excited Face" },
        { symbol: "(✿❛◡❛)", name: "Winking Flower" },
        { symbol: "(*/ω＼*)", name: "Shy Face" },
        { symbol: "(⸝⸝ᵕᴗᵕ⸝⸝)", name: "Small Face" },
        { symbol: "💞᪳᪳᪳", name: "Heart Spiral" },
        { symbol: "(◕‿◕✿)", name: "Flower Eye" },
        { symbol: "(≧◡≦) ♡", name: "Happy Heart" },
        { symbol: "(❀ᵕᴗᵕ)", name: "Flower Smile" },
        { symbol: "(｡•́‿•̀｡)♡", name: "Sad Happy Face" },
        { symbol: "୧⍤⃝🌸", name: "Flower Accent" },
        { symbol: "୧⍤⃝✨", name: "Sparkle Accent" },
        { symbol: "୧⍤⃝💞", name: "Heart Accent" },
        { symbol: "୧⍤⃝🌷", name: "Tulip Accent" },
        { symbol: "୧⍤⃝❤️", name: "Red Heart Accent" },
        { symbol: "୧⍤⃝🌺", name: "Hibiscus Accent" },
        { symbol: "𐚂", name: "Ancient Glyph 2" },
        { symbol: "𐚃", name: "Ancient Glyph 3" },
        { symbol: "𐚄", name: "Ancient Glyph 4" },
        { symbol: "𐚅", name: "Ancient Glyph 5" },
        { symbol: "𐚆", name: "Ancient Glyph 6" },
        { symbol: "𐚇", name: "Ancient Glyph 7" },
        { symbol: "𐚈", name: "Ancient Glyph 8" },
        { symbol: "💓᪲᪲", name: "Beating Hearts" },
        { symbol: "𐚉", name: "Ancient Glyph 9" },
        { symbol: "𐚊", name: "Ancient Glyph 10" },
        { symbol: "𐚋", name: "Ancient Glyph 11" },
        { symbol: "𐚌", name: "Ancient Glyph 12" },
        { symbol: "➶➶", name: "Double Feather" },
        { symbol: "୧⍤⃝💖", name: "Sparkling Heart Accent" },
        { symbol: "💝᪲᪲᪲", name: "Ribbon Heart" },
        { symbol: "𖨆", name: "Ornate Symbol 2" },
        { symbol: "୧⍤⃝🩷", name: "Pink Heart Accent" },
        { symbol: "୧⍤⃝🍀", name: "Clover Accent" },
        { symbol: "୧⍤⃝🌼", name: "Flower Accent 2" },
        { symbol: "𓃠", name: "Animal Hieroglyph" },
        { symbol: "୧⍤⃝⭐", name: "Star Accent" },
        { symbol: "୧⍤⃝💗", name: "Pink Heart Accent 2" },
        { symbol: "୧⍤⃝💮", name: "White Flower Accent" },
        { symbol: "🦋⃟", name: "Butterfly Symbol" },
        { symbol: "✿⃟", name: "Flower Symbol" },
        { symbol: "❀⃟", name: "Flower Symbol 2" },
        { symbol: "✧⃟", name: "Sparkle Symbol" },
        { symbol: "☆⃟", name: "Star Symbol 2" },
        { symbol: "✦⃟", name: "Diamond Symbol" },
        { symbol: "❣⃟", name: "Heart Exclamation" },
        { symbol: "✩⃟", name: "Star Symbol 3" },
        { symbol: "✺⃟", name: "Star Flower" },
        { symbol: "❁⃟", name: "Flower Symbol 3" },
        { symbol: "❇⃟", name: "Sparkle Symbol 2" },
        { symbol: "✷⃟", name: "Eight Point Star" },
        { symbol: "💐⃟", name: "Bouquet Symbol" },
        { symbol: "🌸⃟", name: "Cherry Blossom Symbol" },
        { symbol: "🩷⃟", name: "Pink Heart Symbol" },
        { symbol: "💖⃟", name: "Sparkle Heart Symbol" },
        { symbol: "🌙⃟", name: "Moon Symbol" },
        { symbol: "⭐⃟", name: "Star Symbol 4" },
        { symbol: "🪽⃟", name: "Wings Symbol" },
        { symbol: "🐾⃟", name: "Paw Prints Symbol" },
        { symbol: "🪷⃟", name: "Lotus Symbol" },
        { symbol: "🎀⃟", name: "Ribbon Symbol" },
        { symbol: "୧⍤⃝🌟", name: "Glowing Star Accent" },
        { symbol: "୧⍤⃝🪻", name: "Violet Accent" },
        { symbol: "𖧷", name: "Ornament" },
        { symbol: "୧⍤⃝🌹", name: "Rose Accent" },
        { symbol: "୧⍤⃝💛", name: "Yellow Heart Accent" },
        { symbol: "୧⍤⃝🦋", name: "Butterfly Accent" },
        { symbol: "୧⍤⃝🎀", name: "Ribbon Accent" },
        { symbol: "𝄟", name: "Music Symbol" },
        { symbol: "𐙚", name: "Ornate Symbol 3" },
        { symbol: "×᷼×ㅤ", name: "Cross Pattern" },
        { symbol: "•͜•", name: "Dot Eyes" },
        { symbol: "𓅫", name: "Bird Hieroglyph" },
        { symbol: "⛱", name: "Beach Umbrella" },
        { symbol: "⎚", name: "Clear Symbol" },
        { symbol: "☻", name: "Black Smiley" },
        { symbol: "☹︎", name: "Frowning Face" },
        { symbol: "⌔", name: "Circle Segment" },
        { symbol: "♨", name: "Hot Springs" },
        { symbol: "🐞⃝", name: "Ladybug" },
        { symbol: "🐝⃝", name: "Bee" },
        { symbol: "⚡︎", name: "Lightning" },
        { symbol: "𓄧", name: "Egyptian Symbol 2" },
        { symbol: "˚", name: "Ring Above" },
        { symbol: "⬅", name: "Left Arrow" },
        { symbol: "☑", name: "Check Box" },
        { symbol: "⊹", name: "Star Asterisk" },
        { symbol: "⟲", name: "Anticlockwise" },
        { symbol: "▶", name: "Play Button" },
        { symbol: "⁰¹", name: "Superscript 01" },
        { symbol: "₊", name: "Subscript Plus" },
        { symbol: "♾", name: "Infinity" },
        { symbol: "⛷", name: "Skier" },
        { symbol: ":)", name: "Smiley" },
        { symbol: "⋆", name: "Star" },
        { symbol: "ꤪꤨꤪ", name: "Kayah Li" },
        { symbol: "⁷⁷⁷", name: "Triple Seven" },
        { symbol: ".ᐟ", name: "Canadian Syllabics" },
        { symbol: "°", name: "Degree" },
    { symbol: "☃︎", name: "Snowman" }
  ]
};

// ==================== EASY-TO-USE FUNCTIONS ====================

window.addStyle = function(category, styleName, prefix, suffix, charMap) {
  if (!stylesByCategory[category]) {
    stylesByCategory[category] = [];
  }
  
  const exists = stylesByCategory[category].find(s => s.name === styleName);
  if (exists) {
    showToast(`Style "${styleName}" already exists in ${category}`);
    return false;
  }
  
  const newStyle = {
    name: styleName,
    prefix: prefix || "",
    suffix: suffix || "",
    map: charMap
  };
  
  stylesByCategory[category].push(newStyle);
  showToast(`New style "${styleName}" added to ${category}`);
  
  if (currentFilter === category) {
    const name = document.getElementById('nameInput').value.trim();
    if (name) {
      generateStyles();
    }
  }
  
  return true;
};

window.addSuggestion = function(category, suggestionText) {
  if (!suggestionsData[category]) {
    suggestionsData[category] = [];
  }
  
  suggestionsData[category].push(suggestionText);
  showToast(`New suggestion added to ${category}`);
  
  if (suggestionsVisible && currentFilter === category) {
    loadSuggestions();
  }
  
  return true;
};

window.addSymbols = function(symbolCategory, symbol, name) {
  if (!symbolsData[symbolCategory]) {
    symbolsData[symbolCategory] = [];
  }
  
  symbolsData[symbolCategory].push({ symbol: symbol, name: name });
  showToast(`New symbol "${name}" added to ${symbolCategory}`);
  
  const modal = document.getElementById('symbolModal');
  if (modal.classList.contains('show')) {
    loadModalTabs();
  }
  
  return true;
};

// ==================== CORE FUNCTIONS ====================

function convert(name, map) {
  return name.split("").map(ch => {
    if (map[ch] !== undefined) {
      return map[ch];
    }
    
    const lowerChar = ch.toLowerCase();
    if (map[lowerChar] !== undefined) {
      return map[lowerChar];
    }
    
    const upperChar = ch.toUpperCase();
    if (map[upperChar] !== undefined) {
      return map[upperChar];
    }
    
    return ch;
  }).join("");
}

function generateStyles() {
  const name = document.getElementById('nameInput').value.trim();
  const result = document.getElementById('result');
  const resultsCount = document.getElementById('resultsCount');
  
  result.innerHTML = "";
  
  if (!name) {
    result.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-magic"></i>
        <p>Enter your name to see magical styles!</p>
      </div>
    `;
    resultsCount.textContent = "0";
    return;
  }
  
  const styles = stylesByCategory[currentFilter] || [];
  
  if (styles.length === 0) {
    result.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-exclamation-circle"></i>
        <p>No styles available for this category.</p>
      </div>
    `;
    resultsCount.textContent = "0";
    return;
  }
  
  const shuffled = [...styles].sort(() => Math.random() - 0.5);
  
  shuffled.forEach(style => {
    const styled = style.prefix + convert(name, style.map) + style.suffix;
    const escapedStyled = styled.replace(/'/g, "\\'").replace(/"/g, '&quot;');
    
    const div = document.createElement('div');
    div.className = `style-box ${currentFilter}`;
    div.innerHTML = `
      <span class="style-text">${styled}</span>
      <button class="copy-btn" onclick="copyText('${escapedStyled}', this)">
        <i class="fas fa-copy"></i> Copy
      </button>
    `;
    result.appendChild(div);
  });
  
  resultsCount.textContent = styles.length;
}

function selectCategory(type) {
  currentFilter = type;
  
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-tab') === type) {
      btn.classList.add('active');
    }
  });
  
  if (suggestionsVisible) {
    toggleSuggestions();
  }
  
  const name = document.getElementById('nameInput').value.trim();
  if (name) {
    generateStyles();
  } else {
    document.getElementById('result').innerHTML = `
      <div class="empty-state">
        <i class="fas fa-magic"></i>
        <p>Enter your name to see ${type} styles!</p>
      </div>
    `;
    document.getElementById('resultsCount').textContent = "0";
  }
}

function toggleSuggestions() {
  const suggestionsSection = document.getElementById('suggestionsSection');
  const toggleBtn = document.querySelector('.toggle-suggestions-btn');
  
  if (!suggestionsVisible) {
    suggestionsSection.classList.add('show');
    loadSuggestions();
    toggleBtn.innerHTML = '<i class="fas fa-eye-slash"></i> Hide Suggestions';
    suggestionsVisible = true;
  } else {
    suggestionsSection.classList.remove('show');
    toggleBtn.innerHTML = '<i class="fas fa-lightbulb"></i> Show Name Suggestions';
    suggestionsVisible = false;
  }
}

function loadSuggestions() {
  const suggestionsSection = document.getElementById('suggestionsSection');
  const currentSuggestions = suggestionsData[currentFilter] || [];
  
  if (currentSuggestions.length === 0) {
    suggestionsSection.innerHTML = `
      <h3 class="suggestions-title"><i class="fas fa-lightbulb"></i> ${currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1)} Name Suggestions</h3>
      <p class="no-suggestions">No suggestions available.</p>
    `;
    return;
  }
  
  let html = `<h3 class="suggestions-title"><i class="fas fa-lightbulb"></i> ${currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1)} Name Suggestions</h3>`;
  html += `<div class="suggestions-grid">`;
  
  currentSuggestions.forEach(suggestion => {
    const escapedSuggestion = suggestion.replace(/'/g, "\\'").replace(/"/g, '&quot;');
    html += `
      <div class="suggestion-box ${currentFilter}">
        <span class="suggestion-text">${suggestion}</span>
        <button class="suggestion-copy-btn" onclick="copyText('${escapedSuggestion}', this)">
          <i class="fas fa-copy"></i> Copy
        </button>
      </div>
    `;
  });
  
  html += `</div>`;
  suggestionsSection.innerHTML = html;
}

function loadModalTabs() {
  const modalTabs = document.getElementById('modalTabs');
  let html = '';
  
  Object.keys(symbolsData).forEach((category, index) => {
    const activeClass = index === 0 ? 'active' : '';
    html += `<button class="modal-tab-btn ${activeClass}" onclick="openSymbolTab('${category}')">${category.charAt(0).toUpperCase() + category.slice(1)}</button>`;
  });
  
  modalTabs.innerHTML = html;
  
  const firstCategory = Object.keys(symbolsData)[0];
  if (firstCategory) {
    openSymbolTab(firstCategory);
  }
}

function openSymbolTab(category) {
  document.querySelectorAll('.modal-tab-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.textContent.toLowerCase().includes(category.toLowerCase())) {
      btn.classList.add('active');
    }
  });
  
  const symbolsGrid = document.getElementById('symbolsGrid');
  const symbols = symbolsData[category] || [];
  
  if (symbols.length === 0) {
    symbolsGrid.innerHTML = '<p class="no-symbols">No symbols available.</p>';
    return;
  }
  
  let html = '';
  symbols.forEach(symbol => {
    const escapedSymbol = symbol.symbol.replace(/'/g, "\\'").replace(/"/g, '&quot;');
    html += `
      <div class="symbol-item">
        <div class="symbol-display">${symbol.symbol}</div>
        <div class="symbol-name">${symbol.name}</div>
        <div class="symbol-actions">
          <button class="symbol-insert-btn" onclick="insertSymbol('${escapedSymbol}')">
            <i class="fas fa-plus"></i> Insert
          </button>
          <button class="symbol-copy-btn" onclick="copyText('${escapedSymbol}', this)">
            <i class="fas fa-copy"></i> Copy
          </button>
        </div>
      </div>
    `;
  });
  
  symbolsGrid.innerHTML = html;
}

function insertSymbol(symbol) {
  const nameInput = document.getElementById('nameInput');
  const currentValue = nameInput.value;
  const cursorPos = nameInput.selectionStart;
  
  nameInput.value = currentValue.substring(0, cursorPos) + symbol + currentValue.substring(cursorPos);
  nameInput.selectionStart = nameInput.selectionEnd = cursorPos + symbol.length;
  nameInput.dispatchEvent(new Event('input'));
  closeSymbolModal();
}

function copyText(text, buttonElement = null) {
  navigator.clipboard.writeText(text)
    .then(() => {
      if (buttonElement) {
        const originalText = buttonElement.innerHTML;
        const originalClass = buttonElement.className;
        
        buttonElement.innerHTML = '<i class="fas fa-check"></i> Copied!';
        buttonElement.classList.add('copied');
        
        setTimeout(() => {
          buttonElement.innerHTML = originalText;
          buttonElement.className = originalClass;
        }, 1500);
      } else {
        showToast('Text copied to clipboard!');
      }
    })
    .catch(err => {
      console.error('Failed to copy: ', err);
      showToast('Failed to copy text. Please try again.');
    });
}

function showToast(message) {
  const existingToast = document.querySelector('.toast-message');
  if (existingToast) {
    existingToast.remove();
  }
  
  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => {
      if (toast.parentNode) {
        document.body.removeChild(toast);
      }
    }, 300);
  }, 3000);
}

function toggleTheme() {
  isDarkTheme = !isDarkTheme;
  const body = document.body;
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  
  if (isDarkTheme) {
    body.classList.add('dark-theme');
    themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-theme');
    themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem('theme', 'light');
  }
}

function openSymbolModal() {
  document.getElementById('symbolModal').classList.add('show');
  loadModalTabs();
}

function closeSymbolModal() {
  document.getElementById('symbolModal').classList.remove('show');
}

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', function() {
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    isDarkTheme = true;
    document.body.classList.add('dark-theme');
    document.getElementById('themeToggleBtn').innerHTML = '<i class="fas fa-moon"></i>';
  }
  
  // Theme toggle button
  document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);
  
  // Auto-generate when typing
  document.getElementById('nameInput').addEventListener('input', function() {
    clearTimeout(nameInputTimer);
    nameInputTimer = setTimeout(() => {
      if (this.value.trim().length > 0) {
        generateStyles();
      }
    }, 300);
  });
  
  // Symbol picker button
  document.getElementById('symbolPickerBtn').addEventListener('click', openSymbolModal);
  
  // Scroll to top button
  const scrollBtn = document.getElementById('scrollToTop');
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  });
  
  scrollBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Close modal when clicking outside
  document.getElementById('symbolModal').addEventListener('click', function(e) {
    if (e.target === this) {
      closeSymbolModal();
    }
  });
  
  // Initial load
  loadModalTabs();

  // ============ YAHAN APNE 112 STYLES ADD KARO ============
  // Style 1: Combining Ring Style
  addStyle('font', 'font_combining_ring', '', '', {
    a: "a͢", b: "b͢", c: "c͢", d: "d͢", e: "e͢", f: "f͢", g: "g͢", h: "h͢", i: "i͢", j: "j͢",
    k: "k͢", l: "l͢", m: "m͢", n: "n͢", o: "o͢", p: "p͢", q: "q͢", r: "r͢", s: "s͢", t: "t͢",
    u: "u͢", v: "v͢", w: "w͢", x: "x͢", y: "y͢", z: "z͢",
    A: "A͢", B: "B͢", C: "C͢", D: "D͢", E: "E͢", F: "F͢", G: "G͢", H: "H͢", I: "I͢", J: "J͢",
    K: "K͢", L: "L͢", M: "M͢", N: "N͢", O: "O͢", P: "P͢", Q: "Q͢", R: "R͢", S: "S͢", T: "T͢",
    U: "U͢", V: "V͢", W: "W͢", X: "X͢", Y: "Y͢", Z: "Z͢"
  });

  // Style 2: Double Struck Circle Style
  addStyle('font', 'font_double_struck_circle', '', '', {
    a: "𝕒⃟", b: "𝕓⃟", c: "𝕔⃟", d: "𝕕⃟", e: "𝕖⃟", f: "𝕗⃟", g: "𝕘⃟", h: "𝕙⃟", i: "𝕚⃟", j: "𝕛⃟",
    k: "𝕜⃟", l: "𝕝⃟", m: "𝕞⃟", n: "𝕟⃟", o: "𝕠⃟", p: "𝕡⃟", q: "𝕢⃟", r: "𝕣⃟", s: "𝕤⃟", t: "𝕥⃟",
    u: "𝕦⃟", v: "𝕧⃟", w: "𝕨⃟", x: "𝕩⃟", y: "𝕪⃟", z: "𝕫⃟",
    A: "𝕒⃟", B: "𝕓⃟", C: "𝕔⃟", D: "𝕕⃟", E: "𝕖⃟", F: "𝕗⃟", G: "𝕘⃟", H: "𝕙⃟", I: "𝕚⃟", J: "𝕛⃟",
    K: "𝕜⃟", L: "𝕝⃟", M: "𝕞⃟", N: "𝕟⃟", O: "𝕠⃟", P: "𝕡⃟", Q: "𝕢⃟", R: "𝕣⃟", S: "𝕤⃟", T: "𝕥⃟",
    U: "𝕦⃟", V: "𝕧⃟", W: "𝕨⃟", X: "𝕩⃟", Y: "𝕪⃟", Z: "𝕫⃟"
  });

  // ============ GAMER STYLES ============
  addStyle('gamer', 'gamer_bold_sans_serif', '', '', {
    a: "𝙖", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝙚", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝙞", j: "𝙟",
    k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝙤", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
    u: "𝙪", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝙮", z: "𝙯",
    A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝",
    K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
    U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭"
  });

  // ============ LOVE STYLES ============
  addStyle('love', 'love_italic', '', '', {
    a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
    k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
    u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧",
    A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
    K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
    U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍"
  });

  // ============ FANCY STYLES ============
  addStyle('fancy', 'fancy_squared', '', '', {
    a: "🄰", b: "🄱", c: "🄲", d: "🄳", e: "🄴", f: "🄵", g: "🄶", h: "🄷", i: "🄸", j: "🄹",
    k: "🄺", l: "🄻", m: "🄼", n: "🄽", o: "🄾", p: "🄿", q: "🅀", r: "🅁", s: "🅂", t: "🅃",
    u: "🅄", v: "🅅", w: "🅆", x: "🅇", y: "🅈", z: "🅉",
    A: "🄰", B: "🄱", C: "🄲", D: "🄳", E: "🄴", F: "🄵", G: "🄶", H: "🄷", I: "🄸", J: "🄹",
    K: "🄺", L: "🄻", M: "🄼", N: "🄽", O: "🄾", P: "🄿", Q: "🅀", R: "🅁", S: "🅂", T: "🅃",
    U: "🅄", V: "🅅", W: "🅆", X: "🅇", Y: "🅈", Z: "🅉"
  });

  // ============ FONT STYLES ============
  addStyle('font', 'font_sans_serif_italic', '', '', {
    a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
    k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
    u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻",
    A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
    K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
    U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡"
  });
  // ... yahan baaki ke 110 styles add karo ...
  // Optional success message
  // showToast("All styles loaded successfully!");

   // Initial load
  // Style 4: Egyptian Bold with Decoration
  addStyle('love', 'love_egyptian_bold', '𓆜⋆˚࿔⊹ ࣪', ' 𓆝⋆.˚﹏𓊝₊˚⊹', {
    a: "ᗩ", b: "ᗷ", c: "ᑕ", d: "ᗪ", e: "ᗴ", f: "ᖴ", g: "Ꮐ", h: "ᕼ", i: "Ꭵ", j: "ᒍ",
    k: "Ꮶ", l: "Ꮮ", m: "ᗰ", n: "ᑎ", o: "ᗝ", p: "ᑭ", q: "ᑫ", r: "ᖇ", s: "ᔕ", t: "ᖶ",
    u: "ᑌ", v: "ᐯ", w: "ᗯ", x: "᙭", y: "Ꭹ", z: "ᘔ",
    A: "ᗩ", B: "ᗷ", C: "ᑕ", D: "ᗪ", E: "ᗴ", F: "ᖴ", G: "Ꮐ", H: "ᕼ", I: "Ꭵ", J: "ᒍ",
    K: "Ꮶ", L: "Ꮮ", M: "ᗰ", N: "ᑎ", O: "ᗝ", P: "ᑭ", Q: "ᑫ", R: "ᖇ", S: "ᔕ", T: "ᖶ",
    U: "ᑌ", V: "ᐯ", W: "ᗯ", X: "᙭", Y: "Ꭹ", Z: "ᘔ"
  });

  // Style 5: Circle with Underline Accent
  addStyle('love', 'love_circle_accent', '̤̮ ', ' ✔', {
    a: "🅐 ̤̮", b: "🅑 ̤̮", c: "🅒 ̤̮", d: "🅓 ̤̮", e: "🅔 ̤̮", f: "🅕 ̤̮", g: "🅖 ̤̮", h: "🅗 ̤̮", i: "🅘 ̤̮", j: "🅙 ̤̮",
    k: "🅚 ̤̮", l: "🅛 ̤̮", m: "🅜 ̤̮", n: "🅝 ☻", o: "🅞 ̤̮", p: "🅟 ̤̮", q: "🅠 ̤̮", r: "🅡 ̤̮", s: "🅢 ̤̮", t: "🅣 ̤̮",
    u: "🅤 ̤̮", v: "🅥 ̤̮", w: "🅦 ̤̮", x: "🅧 ̤̮", y: "🅨 ̤̮", z: "🅩 ̤̮",
    A: "🅐 ̤̮", B: "🅑 ̤̮", C: "🅒 ̤̮", D: "🅓 ̤̮", E: "🅔 ̤̮", F: "🅕 ̤̮", G: "🅖 ̤̮", H: "🅗 ̤̮", I: "🅘 ̤̮", J: "🅙 ̤̮",
    K: "🅚 ̤̮", L: "🅛 ̤̮", M: "🅜 ̤̮", N: "🅝 ☻", O: "🅞 ̤̮", P: "🅟 ̤̮", Q: "🅠 ̤̮", R: "🅡 ̤̮", S: "🅢 ̤̮", T: "🅣 ̤̮",
    U: "🅤 ̤̮", V: "🅥 ̤̮", W: "🅦 ̤̮", X: "🅧 ̤̮", Y: "🅨 ̤̮", Z: "🅩 ̤̮"
  });

  // Style 6: Double Struck with Star Decoration
  addStyle('love', 'love_double_struck_stars', '⊹˚₊𐙚', '𐙚₊˚⊹࿐', {
    a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
    k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
    u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫",
    A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
    K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
    U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ"
  });

  // Style 7: Bold Sans Serif with Cross Decoration
  addStyle('love', 'love_bold_sans_serif_cross', '—͟͞͞✰', 'ᯓ✈︎⋆ˎˊ˗', {
    a: "𝗮", b: "𝗯", c: "𝗰", d: "𝗱", e: "𝗲", f: "𝗳", g: "𝗴", h: "𝗵", i: "𝗶", j: "𝗷",
    k: "𝗸", l: "𝗹", m: "𝗺", n: "𝗻", o: "𝗼", p: "𝗽", q: "𝗾", r: "𝗿", s: "𝘀", t: "𝘁",
    u: "𝘂", v: "𝘃", w: "𝘄", x: "𝘅", y: "𝘆", z: "𝘇",
    A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝",
    K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
    U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭"
  });

  // Style 8: Superscript with Cross Decoration
  addStyle('love', 'love_superscript_cross', '—͟͞͞✞ ', ' ✞𓂃✍︎', {
    a: "ᵃ", b: "ᵇ", c: "ᶜ", d: "ᵈ", e: "ᵉ", f: "ᶠ", g: "ᵍ", h: "ʰ", i: "ⁱ", j: "ʲ",
    k: "ᵏ", l: "ˡ", m: "ᵐ", n: "ⁿ", o: "ᵒ", p: "ᵖ", q: "ᑫ", r: "ʳ", s: "ˢ", t: "ᵗ",
    u: "ᵘ", v: "ᵛ", w: "ʷ", x: "ˣ", y: "ʸ", z: "ᶻ",
    A: "ᴬ", B: "ᴮ", C: "ᶜ", D: "ᴰ", E: "ᴱ", F: "ᶠ", G: "ᴳ", H: "ᴴ", I: "ᴵ", J: "ᴶ",
    K: "ᴷ", L: "ᴸ", M: "ᴹ", N: "ᴺ", O: "ᴼ", P: "ᴾ", Q: "ᵠ", R: "ᴿ", S: "ˢ", T: "ᵀ",
    U: "ᵁ", V: "ⱽ", W: "ᵂ", X: "ˣ", Y: "ʸ", Z: "ᶻ"
  });
  
  // Style 1: Greek with Flower Decoration
  addStyle('fancy', 'fancy_greek_flower', '𐙚✿', '𐙚✿.࿐', {
    a: "Δ", b: "β", c: "C", d: "Đ", e: "Σ", f: "Ϝ", g: "Ꮆ", h: "Ħ", i: "I", j: "J",
    k: "К", l: "Ꮭ", m: "M", n: "П", o: "Ø", p: "Ƥ", q: "Ǫ", r: "Ŗ", s: "Ѕ", t: "Ͳ",
    u: "Ц", v: "Ѵ", w: "Ш", x: "X", y: "Ψ", z: "Ẕ",
    A: "Δ", B: "β", C: "C", D: "Đ", E: "Σ", F: "Ϝ", G: "Ꮆ", H: "Ħ", I: "I", J: "J",
    K: "К", L: "Ꮭ", M: "M", N: "П", O: "Ø", P: "Ƥ", Q: "Ǫ", R: "Ŗ", S: "Ѕ", T: "Ͳ",
    U: "Ц", V: "Ѵ", W: "Ш", X: "X", Y: "Ψ", Z: "Ẕ"
  });

  // Style 2: Circled with Butterfly Decoration
  addStyle('fancy', 'fancy_circled_butterfly', '༒➤⃝🦋', '➤⃝🦋༒', {
    a: "ⓐ", b: "ⓑ", c: "ⓒ", d: "ⓓ", e: "ⓔ", f: "ⓕ", g: "ⓖ", h: "ⓗ", i: "ⓘ", j: "ⓙ",
    k: "ⓚ", l: "ⓛ", m: "ⓜ", n: "ⓝ", o: "ⓞ", p: "ⓟ", q: "ⓠ", r: "ⓡ", s: "ⓢ", t: "ⓣ",
    u: "ⓤ", v: "ⓥ", w: "ⓦ", x: "ⓧ", y: "ⓨ", z: "ⓩ",
    A: "Ⓐ", B: "Ⓑ", C: "Ⓒ", D: "Ⓓ", E: "Ⓔ", F: "Ⓕ", G: "Ⓖ", H: "Ⓗ", I: "Ⓘ", J: "Ⓙ",
    K: "Ⓚ", L: "Ⓛ", M: "Ⓜ", N: "Ⓝ", O: "Ⓞ", P: "Ⓟ", Q: "Ⓠ", R: "Ⓡ", S: "Ⓢ", T: "Ⓣ",
    U: "Ⓤ", V: "Ⓥ", W: "Ⓦ", X: "Ⓧ", Y: "Ⓨ", Z: "Ⓩ"
  });

  // Style 3: Monospace with Star Decoration
  addStyle('fancy', 'fancy_monospace_stars', '✨✗ ', ' ✗✨࿐', {
    a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
    k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
    u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣",
    A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
    K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
    U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉"
  });

  // Style 4: Sans Serif Italic with Symbol Frame
  addStyle('fancy', 'fancy_sans_serif_frame', '꧁●⃝⛧', '●⃝⛧꧂', {
    a: "𝘢", b: "𝘣", c: "𝘤̆̈", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
    k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
    u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻",
    A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
    K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
    U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡"
  });

  // Style 5: Runic with Unicorn Decoration
  addStyle('fancy', 'fancy_runic_unicorn', '𐍆𐍆_', '_₊˚⊹🦄', {
    a: "𐌻", b: "𐌱", c: "𐌲", d: "𐌳", e: "𐌴", f: "𐍆", g: "𐌾", h: "𐌷", i: "𐌹", j: "𝙅",
    k: "𐌺", l: "𐍊", m: "𐌼", n: "𐌽", o: "𐍈", p: "𐍉", q: "𐍀", r: "𐍂", s: "𐍃", t: "𐍄",
    u: "𐍁", v: "𝙑", w: "𐍉", x: "𐍇", y: "𐍅", z: "𐌶",
    A: "𐌻", B: "𐌱", C: "𐌲", D: "𐌳", E: "𐌴", F: "𐍆", G: "𐌾", H: "𐌷", I: "𐌹", J: "𝙅",
    K: "𐌺", L: "𐍊", M: "𐌼", N: "𐌽", O: "𐍈", P: "𐍉", Q: "𐍀", R: "𐍂", S: "𐍃", T: "𐍄",
    U: "𐍁", V: "𝙑", W: "𐍉", X: "𐍇", Y: "𐍅", Z: "𐌶"
  });
  
  // Style 1: Sans Serif Italic with Symbol Prefix
  addStyle('gamer', 'gamer_sans_serif_symbol', 'T͢N͢ ☯', 'メ࿐', {
    a: "𝘢", b: "𝘣", c: "c", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
    k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
    u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻",
    A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
    K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
    U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡"
  });

  // Style 2: Small Caps OP Style
  addStyle('gamer', 'gamer_small_caps_op', 'ᴏᴘ メ', 'メ࿐', {
    a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
    k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
    u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ",
    A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
    K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
    U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ"
  });

  // Style 3: Currency Symbol Prefix
  addStyle('gamer', 'gamer_currency_prefix', '₦₲ ', ' ™', {
    a: "𝘢", b: "𝘣", c: "𝘤̆̈", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
    k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
    u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻",
    A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
    K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
    U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡"
  });

  // Style 4: Bold with Checkmark
  addStyle('gamer', 'gamer_bold_checkmark', '𝚼𝚻_', ' ✔', {
    a: "ᗩ", b: "ᗷ", c: "ᑕ", d: "ᗪ", e: "ᗴ", f: "ᖴ", g: "Ꮐ", h: "ᕼ", i: "Ꭵ", j: "ᒍ",
    k: "Ꮶ", l: "Ꮮ", m: "ᗰ", n: "ᑎ", o: "ᗝ", p: "ᑭ", q: "ᑫ", r: "ᖇ", s: "ᔕ", t: "ᖶ",
    u: "ᑌ", v: "ᐯ", w: "ᗯ", x: "᙭", y: "Ꭹ", z: "ᘔ",
    A: "ᗩ", B: "ᗷ", C: "ᑕ", D: "ᗪ", E: "ᗴ", F: "ᖴ", G: "Ꮐ", H: "ᕼ", I: "Ꭵ", J: "ᒍ",
    K: "Ꮶ", L: "Ꮮ", M: "ᗰ", N: "ᑎ", O: "ᗝ", P: "ᑭ", Q: "ᑫ", R: "ᖇ", S: "ᔕ", T: "ᖶ",
    U: "ᑌ", V: "ᐯ", W: "ᗯ", X: "᙭", Y: "Ꭹ", Z: "ᘔ"
  });

  // Style 5: Italic with Flower Decoration
  addStyle('gamer', 'gamer_italic_flower', '༒', ' ✿˚₊࿐ ᵒᵖ', {
    a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
    k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
    u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧",
    A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
    K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
    U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍"
  });

  // Style 6: Monospace with Number Suffix
  addStyle('gamer', 'gamer_monospace_number', 'ҩɴ ✗ ', ' ✗ ⁹⁹⁹', {
    a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
    k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
    u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣",
    A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
    K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
    U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉"
  });

  // Style 7: Strikethrough with Korean Symbol
  addStyle('gamer', 'gamer_strikethrough_korean', '𝚾- ', ' 모', {
    a: "a̷", b: "b̷", c: "c̷", d: "d̷", e: "e̷", f: "f̷", g: "g̷", h: "h̷", i: "i̷", j: "j̷",
    k: "k̷", l: "l̷", m: "m̷", n: "n̷", o: "o̷", p: "p̷", q: "q̷", r: "r̷", s: "s̷", t: "t̷",
    u: "u̷", v: "v̷", w: "w̷", x: "x̷", y: "y̷", z: "z̷",
    A: "A̷̷", B: "B̷̷", C: "C̷̷", D: "D̷̷", E: "E̷̷", F: "F̷̷", G: "G̷̷", H: "H̷̷", I: "I̷̷", J: "J̷̷",
    K: "K̷̷", L: "L̷̷", M: "M̷̷", N: "N̷̷", O: "O̷̷", P: "P̷̷", Q: "Q̷̷", R: "R̷̷", S: "S̷̷", T: "T̷̷",
    U: "U̷̷", V: "V̷̷", W: "W̷̷", X: "X̷̷", Y: "Y̷̷", Z: "Z̷̷"
  });

  // Style 8: Superscript Circle with Frame
  addStyle('gamer', 'gamer_superscript_circle_frame', '꧁✞ ', ' ✞꧂', {
    a: "ᵃ͎", b: "ᵇ͎", c: "ᶜ͎", d: "ᵈ͎", e: "ᵉ͎", f: "ᶠ͎", g: "ᵍ͎", h: "ʰ͎", i: "ⁱ͎", j: "ʲ͎",
    k: "ᵏ͎", l: "ˡ͎", m: "ᵐ͎", n: "ⁿ͎", o: "ᵒ͎", p: "ᵖ͎", q: "ᑫ͎", r: "ʳ͎", s: "ˢ͎", t: "ᵗ͎",
    u: "ᵘ͎", v: "ᵛ͎", w: "ʷ͎", x: "ˣ͎", y: "ʸ͎", z: "ᶻ͎",
    A: "ᴬ͎", B: "ᴮ͎", C: "ᶜ͎", D: "ᴰ͎", E: "ᴱ͎", F: "ᶠ͎", G: "ᴳ͎", H: "ᴴ͎", I: "ᴵ͎", J: "ᴶ͎",
    K: "ᴷ͎", L: "ᴸ͎", M: "ᴹ͎", N: "ᴺ͎", O: "ᴼ͎", P: "ᴾ͎", Q: "ᵠ͎", R: "ᴿ͎", S: "ˢ͎", T: "ᵀ͎",
    U: "ᵁ͎", V: "ⱽ͎", W: "ᵂ͎", X: "ˣ͎", Y: "ʸ͎", Z: "ᶻ͎"
  });

  // Style 9: Greek Small Simple
  addStyle('gamer', 'gamer_greek_simple', 'ˢⁱᵐᵖˡᵉ✗', '✗ˎˊ˗࿐', {
    a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
    k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
    u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ",
    A: "α", B: "в", C: "c", D: "ɗ", E: "ε", F: "ƒ", G: "ɠ", H: "н", I: "ɪ", J: "נ",
    K: "κ", L: "ℓ", M: "м", N: "η", O: "σ", P: "ρ", Q: "զ", R: "я", S: "ѕ", T: "τ",
    U: "υ", V: "ν", W: "ω", X: "χ", Y: "γ", Z: "ƶ"
  });

  // Style 10: Circle Accent with Star Frame
  addStyle('gamer', 'gamer_circle_accent_stars', '༒✰ ', '✰༒', {
    a: "̤̮🅐", b: "̤̮🅑", c: "̤̮🅒", d: "̤̮🅓", e: "̤̮🅔", f: "̤̮🅕", g: "̤̮🅖", h: "̤̮🅗", i: "̤̮🅘", j: "̤̮🅙",
    k: "̤̮🅚", l: "̤̮🅛", m: "̤̮🅜", n: "̤̮🅝 ☻", o: "̤̮🅞", p: "̤̮🅟", q: "̤̮🅠", r: "̤̮🅡", s: "̤̮🅢", t: "̤̮🅣",
    u: "̤̮🅤", v: "̤̮🅥", w: "̤̮🅦", x: "̤̮🅧", y: "̤̮🅨", z: "̤̮🅩",
    A: "̤̮🅐", B: "̤̮🅑", C: "̤̮🅒", D: "̤̮🅓", E: "̤̮🅔", F: "̤̮🅕", G: "̤̮🅖", H: "̤̮🅗", I: "̤̮🅘", J: "̤̮🅙",
    K: "̤̮🅚", L: "̤̮🅛", M: "̤̮🅜", N: "̤̮🅝 ☻", O: "̤̮🅞", P: "̤̮🅟", Q: "̤̮🅠", R: "̤̮🅡", S: "̤̮🅢", T: "̤̮🅣",
    U: "̤̮🅤", V: "̤̮🅥", W: "̤̮🅦", X: "̤̮🅧", Y: "̤̮🅨", Z: "̤̮🅩"
  });

// Style 9: Circular Accent Style
addStyle('love', 'love_circular_accent', '—͟͞͞✨', '🥀🐼ˎˊ˗', {
  A: "ᴬ⃠", B: "ᴮ⃠", C: "ᶜ⃠", D: "ᴰ⃠", E: "ᴱ⃠", F: "ᶠ⃠", G: "ᴳ⃠", H: "ᴴ⃠", I: "ᴵ⃠", J: "ᴶ⃠",
  K: "ᴷ⃠", L: "ᴸ⃠", M: "ᴹ⃠", N: "ᴺ⃠", O: "ᴼ⃠", P: "ᴾ⃠", Q: "ᵠ⃠", R: "ᴿ⃠", S: "ˢ⃠", T: "ᵀ⃠",
  U: "ᵁ⃠", V: "ⱽ⃠", W: "ᵂ⃠", X: "ˣ⃠", Y: "ʸ⃠", Z: "ᶻ⃠",
  a: "ᵃ⃠", b: "ᵇ⃠", c: "ᶜ⃠", d: "ᵈ⃠", e: "ᵉ⃠", f: "ᶠ⃠", g: "ᵍ⃠", h: "ʰ⃠", i: "ⁱ⃠", j: "ʲ⃠",
  k: "ᵏ⃠", l: "ˡ⃠", m: "ᵐ⃠", n: "ⁿ⃠", o: "ᵒ⃠", p: "ᵖ⃠", q: "ᑫ⃠", r: "ʳ⃠", s: "ˢ⃠", t: "ᵗ⃠",
  u: "ᵘ⃠", v: "ᵛ⃠", w: "ʷ⃠", x: "ˣ⃠", y: "ʸ⃠", z: "ᶻ⃠"
});

// Style 10: Greek Alphabet Style
addStyle('love', 'love_greek_style', '𐙚˚⊹', '☺︎ˎˊ˗࿐', {
  a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
  k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ",
  A: "Α", B: "Β", C: "C", D: "Ɗ", E: "Ε", F: "Ƒ", G: "Ɠ", H: "Н", I: "Ι", J: "Ј",
  K: "Κ", L: "ℓ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ջ", R: "Я", S: "Ѕ", T: "Τ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Ƶ"
});

// Style 11: Simple Greek Style
addStyle('love', 'love_simple_greek', '', '☕︎ˎˊ˗', {
  a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
  k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ",
  A: "Α", B: "Β", C: "C", D: "Ɗ", E: "Ε", F: "Ƒ", G: "Ɠ", H: "Н", I: "Ι", J: "Ј",
  K: "Κ", L: "ℓ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ջ", R: "Я", S: "Ѕ", T: "Τ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Ƶ"
});

// Style 12: Double Struck with Accent
addStyle('love', 'love_double_struck', '༒☯⃟', '⃟☯༒', {
  a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
  k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
  u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫",
  A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
  K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
  U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ"
});

// Style 13: Italic Math Style
addStyle('love', 'love_italic_math', 'ᵛⁱᵖ₊˚⊹', '𐙚₊˚⊹♕', {
  A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
  K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "ℎ", i: "𝑖", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
});

// Style 14: Cursive Bold Style
addStyle('love', 'love_cursive_bold', '༒˗ˏˋᵛ𖦹', '𖦹ᵛˎˊ˗༒🥀', {
  A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘", J: "𝓙",
  K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣",
  U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩",
  a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳",
  k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽",
  u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃"
});

// Style 15: Underline Accent Style
addStyle('love', 'love_underline_accent', '꧁♡', '♡꧂', {
  A: "A͓̽", B: "B͓̽", C: "C͓̽", D: "D͓̽", E: "E͓̽", F: "F͓̽", G: "G͓̽", H: "H͓̽", I: "I͓̽", J: "J͓̽",
  K: "K͓̽", L: "L͓̽", M: "M͓̽", N: "N͓̽", O: "O͓̽", P: "P͓̽", Q: "Q͓̽", R: "R͓̽", S: "S͓̽", T: "T͓̽",
  U: "U͓̽", V: "V͓̽", W: "W͓̽", X: "X͓̽", Y: "Y͓̽", Z: "Z͓̽",
  a: "a͓̽", b: "b͓̽", c: "c͓̽", d: "d͓̽", e: "e͓̽", f: "f͓̽", g: "g͓̽", h: "h͓̽", i: "i͓̽", j: "j͓̽",
  k: "k͓̽", l: "l͓̽", m: "m͓̽", n: "n͓̽", o: "o͓̽", p: "p͓̽", q: "q͓̽", r: "r͓̽", s: "s͓̽", t: "t͓̽",
  u: "u͓̽", v: "v͓̽", w: "w͓̽", x: "x͓̽", y: "y͓̽", z: "z͓̽"
});

// Style 16: Sans Serif Italic Style
addStyle('love', 'love_sans_serif', '𝕏_—͟͞͞💞', '_—͟͞͞💞', {
  A: "𝘈", B: "𝘉", C: "𝘊̆̈", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤̆̈", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 17: Sans Serif with Decorations
addStyle('love', 'love_sans_decorated', '💞₊˚⊹', '₊˚⊹🦋ˎˊ˗࿐', {
  A: "𝘈", B: "𝘉", C: "𝘊̆̈", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤̆̈", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 18: Bold Fraktur Style
addStyle('love', 'love_bold_fraktur', '༒₊˚⊹', '⊹˚₊𓅫ˎˊ˗࿐', {
  a: "𝖆", b: "𝖇", c: "𝖈", d: "𝖉", e: "𝖊", f: "𝖋", g: "𝖌", h: "𝖍", i: "𝖎", j: "𝖏",
  k: "𝖐", l: "𝖑", m: "𝖒", n: "𝖓", o: "𝖔", p: "𝖕", q: "𝖖", r: "𝖗", s: "𝖘", t: "𝖙",
  u: "𝖚", v: "𝖛", w: "𝖜", x: "𝖝", y: "𝖞", z: "𝖟",
  A: "𝕬", B: "𝕭", C: "𝕮", D: "𝕯", E: "𝕰", F: "𝕱", G: "𝕲", H: "𝕳", I: "𝕴", J: "𝕵",
  K: "𝕶", L: "𝕷", M: "𝕸", N: "𝕹", O: "𝕺", P: "𝕻", Q: "𝕼", R: "𝕽", S: "𝕾", T: "𝕿",
  U: "𝖀", V: "𝖁", W: "𝖂", X: "𝖃", Y: "𝖄", Z: "𝖅"
});

// Style 19: Greek Bold Style
addStyle('love', 'love_greek_bold', 'ᝰ.', '.ᐟ࿐', {
  A: "𝚨", B: "𝚩", C: "𝚪", D: "𝚫", E: "𝚬", F: "𝚺", G: "𝛀", H: "𝚮", I: "𝚰", J: "𝗝",
  K: "𝚱", L: "𝚲", M: "𝚳", N: "𝚴", O: "𝚶", P: "𝚸", Q: "𝚽", R: "𝗥", S: "𝚵", T: "𝚻",
  U: "𝚷", V: "𝚼", W: "𝗪", X: "𝚾", Y: "𝚿", Z: "𝚭"
});

// Style 20: Small Tsu Accent Style
addStyle('love', 'love_small_tsu', '✨', '🤞🏻💞', {
  A: "Aッ", B: "Bッ", C: "Cッ", D: "Dッ", E: "Eッ", F: "Fッ", G: "Gッ", H: "Hッ", I: "Iッ", J: "Jッ",
  K: "Kッ", L: "Lッ", M: "Mッ", N: "Nッ", O: "Oッ", P: "Pッ", Q: "Qッ", R: "Rッ", S: "Sッ", T: "Tッ",
  U: "Uッ", V: "Vッ", W: "Wッ", X: "Xッ", Y: "Yッ", Z: "Zッ",
  a: "aッ", b: "bッ", c: "cッ", d: "dッ", e: "eッ", f: "fッ", g: "gッ", h: "hッ", i: "iッ", j: "jッ",
  k: "kッ", l: "lッ", m: "mッ", n: "nッ", o: "oッ", p: "pッ", q: "qッ", r: "rッ", s: "sッ", t: "tッ",
  u: "uッ", v: "vッ", w: "wッ", x: "xッ", y: "yッ", z: "zッ"
});

// Style 3: Greek Bold Sans
addStyle('font', 'font_greek_bold', '', '', {
  A: "𝚨", B: "𝚩", C: "𝚪", D: "𝚫", E: "𝚬", F: "𝚺", G: "𝛀", H: "𝚮", I: "𝚰", J: "𝗝",
  K: "𝚱", L: "𝚲", M: "𝚳", N: "𝚴", O: "𝚶", P: "𝚸", Q: "𝚽", R: "𝗥", S: "𝚵", T: "𝚻",
  U: "𝚷", V: "𝚼", W: "𝗪", X: "𝚾", Y: "𝚿", Z: "𝚭",
  a: "α", b: "β", c: "γ", d: "δ", e: "ε", f: "σ", g: "ω", h: "η", i: "ι", j: "ȷ",
  k: "κ", l: "λ", m: "μ", n: "ν", o: "ο", p: "π", q: "φ", r: "ρ", s: "ξ", t: "τ",
  u: "υ", v: "υ", w: "ω", x: "χ", y: "ψ", z: "ζ"
});

// Style 4: Cursive Bold
addStyle('font', 'font_cursive_bold', '', '', {
  A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘", J: "𝓙",
  K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣",
  U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩",
  a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳",
  k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽",
  u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃"
});

// Style 5: Fraktur Bold
addStyle('font', 'font_fraktur_bold', '', '', {
  A: "𝕬", B: "𝕭", C: "𝕮", D: "𝕯", E: "𝕰", F: "𝕱", G: "𝕲", H: "𝕳", I: "𝕴", J: "𝕵",
  K: "𝕶", L: "𝕷", M: "𝕸", N: "𝕹", O: "𝕺", P: "𝕻", Q: "𝕼", R: "𝕽", S: "𝕾", T: "𝕿",
  U: "𝖀", V: "𝖁", W: "𝖂", X: "𝖃", Y: "𝖄", Z: "𝖅",
  a: "𝖆", b: "𝖇", c: "𝖈", d: "𝖉", e: "𝖊", f: "𝖋", g: "𝖌", h: "𝖍", i: "𝖎", j: "𝖏",
  k: "𝖐", l: "𝖑", m: "𝖒", n: "𝖓", o: "𝖔", p: "𝖕", q: "𝖖", r: "𝖗", s: "𝖘", t: "𝖙",
  u: "𝖚", v: "𝖛", w: "𝖜", x: "𝖝", y: "𝖞", z: "𝖟"
});

// Style 6: Script Style
addStyle('font', 'font_script', '', '', {
  A: "𝒜", B: "ℬ", C: "𝒞", D: "𝒟", E: "ℰ", F: "ℱ", G: "𝒢", H: "ℋ", I: "ℐ", J: "𝒥",
  K: "𝒦", L: "ℒ", M: "ℳ", N: "𝒩", O: "𝒪", P: "𝒫", Q: "𝒬", R: "ℛ", S: "𝒮", T: "𝒯",
  U: "𝒰", V: "𝒱", W: "𝒲", X: "𝒳", Y: "𝒴", Z: "𝒵",
  a: "𝒶", b: "𝒷", c: "𝒸", d: "𝒹", e: "ℯ", f: "𝒻", g: "ℊ", h: "𝒽", i: "𝒾", j: "𝒿",
  k: "𝓀", l: "𝓁", m: "𝓂", n: "𝓃", o: "ℴ", p: "𝓅", q: "𝓆", r: "𝓇", s: "𝓈", t: "𝓉",
  u: "𝓊", v: "𝓋", w: "𝓌", x: "𝓍", y: "𝓎", z: "𝓏"
});

// Style 7: Double Struck
addStyle('font', 'font_double_struck', '', '', {
  A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
  K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
  U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ",
  a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
  k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
  u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫"
});

// Style 8: Monospace Bold
addStyle('font', 'font_monospace_bold', '', '', {
  A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝",
  K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
  U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭",
  a: "𝙖", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝙚", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝙞", j: "𝙟",
  k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝙤", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
  u: "𝙪", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝙮", z: "𝙯"
});

// Style 9: Italic Math
addStyle('font', 'font_italic_math', '', '', {
  A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
  K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
});

// Style 10: Squared Letters
addStyle('font', 'font_squared', '', '', {
  A: "🄰", B: "🄱", C: "🄲", D: "🄳", E: "🄴", F: "🄵", G: "🄶", H: "🄷", I: "🄸", J: "🄹",
  K: "🄺", L: "🄻", M: "🄼", N: "🄽", O: "🄾", P: "🄿", Q: "🅀", R: "🅁", S: "🅂", T: "🅃",
  U: "🅄", V: "🅅", W: "🅆", X: "🅇", Y: "🅈", Z: "🅉",
  a: "🄰", b: "🄱", c: "🄲", d: "🄳", e: "🄴", f: "🄵", g: "🄶", h: "🄷", i: "🄸", j: "🄹",
  k: "🄺", l: "🄻", m: "🄼", n: "🄽", o: "🄾", p: "🄿", q: "🅀", r: "🅁", s: "🅂", t: "🅃",
  u: "🅄", v: "🅅", w: "🅆", x: "🅇", y: "🅈", z: "🅉"
});

// Style 11: Sans Serif Italic
addStyle('font', 'font_sans_serif', '', '', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 12: Negative Circles
addStyle('font', 'font_negative_circles', '', '', {
  A: "🅐", B: "🅑", C: "🅒", D: "🅓", E: "🅔", F: "🅕", G: "🅖", H: "🅗", I: "🅘", J: "🅙",
  K: "🅚", L: "🅛", M: "🅜", N: "🅝", O: "🅞", P: "🅟", Q: "🅠", R: "🅡", S: "🅢", T: "🅣",
  U: "🅤", V: "🅥", W: "🅦", X: "🅧", Y: "🅨", Z: "🅩",
  a: "🅐", b: "🅑", c: "🅒", d: "🅓", e: "🅔", f: "🅕", g: "🅖", h: "🅗", i: "🅘", j: "🅙",
  k: "🅚", l: "🅛", m: "🅜", n: "🅝", o: "🅞", p: "🅟", q: "🅠", r: "🅡", s: "🅢", t: "🅣",
  u: "🅤", v: "🅥", w: "🅦", x: "🅧", y: "🅨", z: "🅩"
});

// Style 6: Short Stroke Accent
addStyle('fancy', 'fancy_short_stroke', '༺•͜•', '•͜•༻', {
  A: "A̷̷", B: "B̷̷", C: "C̷̷", D: "D̷̷", E: "E̷̷", F: "F̷̷", G: "G̷̷", H: "H̷̷", I: "I̷̷", J: "J̷̷",
  K: "K̷̷", L: "L̷̷", M: "M̷̷", N: "N̷̷", O: "O̷̷", P: "P̷̷", Q: "Q̷̷", R: "R̷̷", S: "S̷̷", T: "T̷̷",
  U: "U̷̷", V: "V̷̷", W: "W̷̷", X: "X̷̷", Y: "Y̷̷", Z: "Z̷̷",
  a: "a̷", b: "b̷", c: "c̷", d: "d̷", e: "e̷", f: "f̷", g: "g̷", h: "h̷", i: "i̷", j: "j̷",
  k: "k̷", l: "l̷", m: "m̷", n: "n̷", o: "o̷", p: "p̷", q: "q̷", r: "r̷", s: "s̷", t: "t̷",
  u: "u̷", v: "v̷", w: "w̷", x: "x̷", y: "y̷", z: "z̷"
});

// Style 7: Wave Accent
addStyle('fancy', 'fancy_wave_accent', '𒆜┋', '┋𒆜☂', {
  A: "A̾", B: "B̾", C: "C̾", D: "D̾", E: "E̾", F: "F̾", G: "G̾", H: "H̾", I: "I̾", J: "J̾",
  K: "K̾", L: "L̾", M: "M̾", N: "N̾", O: "O̾", P: "P̾", Q: "Q̾", R: "R̾", S: "S̾", T: "T̾",
  U: "U̾", V: "V̾", W: "W̾", X: "X̾", Y: "Y̾", Z: "Z̾",
  a: "a̾", b: "b̾", c: "c̾", d: "d̾", e: "e̾", f: "f̾", g: "g̾", h: "h̾", i: "i̾", j: "j̾",
  k: "k̾", l: "l̾", m: "m̾", n: "n̾", o: "o̾", p: "p̾", q: "q̾", r: "r̾", s: "s̾", t: "t̾",
  u: "u̾", v: "v̾", w: "w̾", x: "x̾", y: "y̾", z: "z̾"
});

// Style 8: Negative Circle with Space
addStyle('fancy', 'fancy_negative_circle', '●⃝✨ ̤̮', '●⃝✨👀', {
  A: "🅐 ̤̮", B: "🅑 ̤̮", C: "🅒 ̤̮", D: "🅓 ̤̮", E: "🅔 ̤̮", F: "🅕 ̤̮", G: "🅖 ̤̮", H: "🅗 ̤̮", I: "🅘 ̤̮", J: "🅙 ̤̮",
  K: "🅚 ̤̮", L: "🅛 ̤̮", M: "🅜 ̤̮", N: "🅝 ̤̮", O: "☻ ̤̮", P: "🅟 ̤̮", Q: "🅠 ̤̮", R: "🅡 ̤̮", S: "🅢 ̤̮", T: "🅣 ̤̮",
  U: "🅤 ̤̮", V: "🅥 ̤̮", W: "🅦 ̤̮", X: "🅧 ̤̮", Y: "🅨 ̤̮", Z: "🅩 ̤̮",
  a: "🅐 ̤̮", b: "🅑 ̤̮", c: "🅒 ̤̮", d: "🅓 ̤̮", e: "🅔 ̤̮", f: "🅕 ̤̮", g: "🅖 ̤̮", h: "🅗 ̤̮", i: "🅘 ̤̮", j: "🅙 ̤̮",
  k: "🅚 ̤̮", l: "🅛 ̤̮", m: "🅜 ̤̮", n: "🅝 ̤̮", o: "☻ ̤̮", p: "🅟 ̤̮", q: "🅠 ̤̮", r: "🅡 ̤̮", s: "🅢 ̤̮", t: "🅣 ̤̮",
  u: "🅤 ̤̮", v: "🅥 ̤̮", w: "🅦 ̤̮", x: "🅧 ̤̮", y: "🅨 ̤̮", z: "🅩 ̤̮"
});

// Style 9: Greek Style with Panda
addStyle('fancy', 'fancy_greek_panda', '𒆜', '🐼ˎˊ˗࿐', {
  a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
  k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ",
  A: "Α", B: "Β", C: "C", D: "Ɗ", E: "Ε", F: "Ƒ", G: "Ɠ", H: "Н", I: "Ι", J: "Ј",
  K: "Κ", L: "ℓ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ջ", R: "Я", S: "Ѕ", T: "Τ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Ƶ"
});

// Style 10: Small Tsu Accent
addStyle('fancy', 'fancy_small_tsu', '', 'ッ✌︎︎ˎˊ˗', {
  A: "Aッ", B: "Bッ", C: "Cッ", D: "Dッ", E: "Eッ", F: "Fッ", G: "Gッ", H: "Hッ", I: "Iッ", J: "Jッ",
  K: "Kッ", L: "Lッ", M: "Mッ", N: "Nッ", O: "Oッ", P: "Pッ", Q: "Qッ", R: "Rッ", S: "Sッ", T: "Tッ",
  U: "Uッ", V: "Vッ", W: "Wッ", X: "Xッ", Y: "Yッ", Z: "Zッ",
  a: "aッ", b: "bッ", c: "cッ", d: "dッ", e: "eッ", f: "fッ", g: "gッ", h: "hッ", i: "iッ", j: "jッ",
  k: "kッ", l: "lッ", m: "mッ", n: "nッ", o: "oッ", p: "pッ", q: "qッ", r: "rッ", s: "sッ", t: "tッ",
  u: "uッ", v: "vッ", w: "wッ", x: "xッ", y: "yッ", z: "zッ"
});

// Style 11: Egyptian Style
addStyle('fancy', 'fancy_egyptian', '𓆩ଳ⟆', '⟅ଳ𓆪', {
  A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
  K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
});

// Style 12: Cross Accent
addStyle('fancy', 'fancy_cross_accent', '✨┋†', '†┋✨ˎˊ˗࿐', {
  A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
  K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
});

// Style 13: Symbolic Style
addStyle('fancy', 'fancy_symbolic', '𓂃', '𓂃', {
  A: "𝚲", B: "𝚩", C: "☪", D: "Đ", E: "𝚵", F: "Ϝ", G: "㉿", H: "み", I: "𝖎ᐟ", J: "✔",
  K: "𝚱", L: "𓆗", M: "𓆙", N: "ꫝ", O: "𖦹", P: "☧", Q: "ҩ", R: "𐀪", S: "₴", T: "✞",
  U: "𝔘", V: "✌︎︎", W: "ᝰ", X: "メ", Y: "𓅯", Z: "么",
  a: "𝚲", b: "𝚩", c: "☪", d: "Đ", e: "𝚵", f: "Ϝ", g: "㉿", h: "み", i: "𝖎ᐟ", j: "✔",
  k: "𝚱", l: "𓆗", m: "𓆙", n: "ꫝ", o: "𖦹", p: "☧", q: "ҩ", r: "𐀪", s: "₴", t: "✞",
  u: "𝔘", v: "✌︎︎", w: "ᝰ", x: "メ", y: "𓅯", z: "么"
});

// Style 14: Butterfly Greek
addStyle('fancy', 'fancy_butterfly_greek', '*🦋☂⊹˚', '_☂ˎˊ˗🦋', {
  a: "α", b: "в", c: "ċ", d: "ɗ", e: "є", f: "ƒ", g: "ĝ", h: "ħ", i: "ï", j: "ʝ",
  k: "ƙ", l: "ĺ", m: "м", n: "ռ", o: "ο", p: "ք", q: "զ", r: "ř", s: "ֆ", t: "թ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ժ",
  A: "Α", B: "Β", C: "Ċ", D: "Ɗ", E: "Є", F: "Ƒ", G: "Ĝ", H: "Ħ", I: "Ï", J: "ʝ",
  K: "Ƙ", L: "Ĺ", M: "М", N: "Ռ", O: "Ο", P: "Ք", Q: "Ջ", R: "Ř", S: "Ֆ", T: "Թ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Զ"
});

// Style 15: Rose Sans Serif
addStyle('fancy', 'fancy_rose_sans', '༒🥀●⃝_', '●⃝_🥀༒', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤̆̈", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 11: Circular Accent with Decorations
addStyle('gamer', 'gamer_circular_accent', '꧁༒ ', ' ༒꧂', {
  A: "ᴬ⃠", B: "ᴮ⃠", C: "ᶜ⃠", D: "ᴰ⃠", E: "ᴱ⃠", F: "ᶠ⃠", G: "ᴳ⃠", H: "ᴴ⃠", I: "ᴵ⃠", J: "ᴶ⃠",
  K: "ᴷ⃠", L: "ᴸ⃠", M: "ᴹ⃠", N: "ᴺ⃠", O: "ᴼ⃠", P: "ᴾ⃠", Q: "ᵠ⃠", R: "ᴿ⃠", S: "ˢ⃠", T: "ᵀ⃠",
  U: "ᵁ⃠", V: "ⱽ⃠", W: "ᵂ⃠", X: "ˣ⃠", Y: "ʸ⃠", Z: "ᶻ⃠",
  a: "ᵃ⃠", b: "ᵇ⃠", c: "ᶜ⃠", d: "ᵈ⃠", e: "ᵉ⃠", f: "ᶠ⃠", g: "ᵍ⃠", h: "ʰ⃠", i: "ⁱ⃠", j: "ʲ⃠",
  k: "ᵏ⃠", l: "ˡ⃠", m: "ᵐ⃠", n: "ⁿ⃠", o: "ᵒ⃠", p: "ᵖ⃠", q: "ᑫ⃠", r: "ʳ⃠", s: "ˢ⃠", t: "ᵗ⃠",
  u: "ᵘ⃠", v: "ᵛ⃠", w: "ʷ⃠", x: "ˣ⃠", y: "ʸ⃠", z: "ᶻ⃠"
});

// Style 12: CG Style with Underline
addStyle('gamer', 'gamer_cg_underline', 'C͢G͢ ☯ ', ' ༒⋆.࿐', {
  A: "A͓̽", B: "B͓̽", C: "C͓̽", D: "D͓̽", E: "E͓̽", F: "F͓̽", G: "G͓̽", H: "H͓̽", I: "I͓̽", J: "J͓̽",
  K: "K͓̽", L: "L͓̽", M: "M͓̽", N: "N͓̽", O: "O͓̽", P: "P͓̽", Q: "Q͓̽", R: "R͓̽", S: "S͓̽", T: "T͓̽",
  U: "U͓̽", V: "V͓̽", W: "W͓̽", X: "X͓̽", Y: "Y͓̽", Z: "Z͓̽",
  a: "a͓̽", b: "b͓̽", c: "c͓̽", d: "d͓̽", e: "e͓̽", f: "f͓̽", g: "g͓̽", h: "h͓̽", i: "i͓̽", j: "j͓̽",
  k: "k͓̽", l: "l͓̽", m: "m͓̽", n: "n͓̽", o: "o͓̽", p: "p͓̽", q: "q͓̽", r: "r͓̽", s: "s͓̽", t: "t͓̽",
  u: "u͓̽", v: "v͓̽", w: "w͓̽", x: "x͓̽", y: "y͓̽", z: "z͓̽"
});

// Style 13: Smiley Armenian Accent
addStyle('gamer', 'gamer_armenian_accent', '☺︎Ꮶ༒', ' ༒ˎˊ˗࿐', {
  A: "A֟", B: "B֟", C: "C֟", D: "D֟", E: "E֟", F: "F֟", G: "G֟", H: "H֟", I: "I֟", J: "J֟",
  K: "K֟", L: "L֟", M: "M֟", N: "N֟", O: "O֟", P: "P֟", Q: "Q֟", R: "R֟", S: "S֟", T: "T֟",
  U: "U֟", V: "V֟", W: "W֟", X: "X֟", Y: "Y֟", Z: "Z֟",
  a: "a֟", b: "b֟", c: "c֟", d: "d֟", e: "e֟", f: "f֟", g: "g֟", h: "h֟", i: "i֟", j: "j֟",
  k: "k֟", l: "l֟", m: "m֟", n: "n֟", o: "o֟", p: "p֟", q: "q֟", r: "r֟", s: "s֟", t: "t֟",
  u: "u֟", v: "v֟", w: "w֟", x: "x֟", y: "y֟", z: "z֟"
});

// Style 14: NG Style with Wave
addStyle('gamer', 'gamer_ng_wave', 'N͢G͢ ☠ ', ' ☯࿐', {
  A: "A̾", B: "B̾", C: "C̾", D: "D̾", E: "E̾", F: "F̾", G: "G̾", H: "H̾", I: "I̾", J: "J̾",
  K: "K̾", L: "L̾", M: "M̾", N: "N̾", O: "O̾", P: "P̾", Q: "Q̾", R: "R̾", S: "S̾", T: "T̾",
  U: "U̾", V: "V̾", W: "W̾", X: "X̾", Y: "Y̾", Z: "Z̾",
  a: "a̾", b: "b̾", c: "c̾", d: "d̾", e: "e̾", f: "f̾", g: "g̾", h: "h̾", i: "i̾", j: "j̾",
  k: "k̾", l: "l̾", m: "m̾", n: "n̾", o: "o̾", p: "p̾", q: "q̾", r: "r̾", s: "s̾", t: "t̾",
  u: "u̾", v: "v̾", w: "w̾", x: "x̾", y: "y̾", z: "z̾"
});

// Style 15: Cross Wave Accent
addStyle('gamer', 'gamer_cross_wave', '—͟͞͞✗ ', ' —͟͞͞✗𓂃✍︎', {
  A: "A̾", B: "B̾", C: "C̾", D: "D̾", E: "E̾", F: "F̾", G: "G̾", H: "H̾", I: "I̾", J: "J̾",
  K: "K̾", L: "L̾", M: "M̾", N: "N̾", O: "O̾", P: "P̾", Q: "Q̾", R: "R̾", S: "S̾", T: "T̾",
  U: "U̾", V: "V̾", W: "W̾", X: "X̾", Y: "Y̾", Z: "Z̾",
  a: "a̾", b: "b̾", c: "c̾", d: "d̾", e: "e̾", f: "f̾", g: "g̾", h: "h̾", i: "i̾", j: "j̾",
  k: "k̾", l: "l̾", m: "m̾", n: "n̾", o: "o̾", p: "p̾", q: "q̾", r: "r̾", s: "s̾", t: "t̾",
  u: "u̾", v: "v̾", w: "w̾", x: "x̾", y: "y̾", z: "z̾"
});

// Style 16: Pencil Cyrillic Style
addStyle('gamer', 'gamer_pencil_cyrillic', '✎𓂃メ', 'メ⁹⁹⁹', {
  A: "A҉", B: "B҉", C: "C҉", D: "D҉", E: "E҉", F: "F҉", G: "G҉", H: "H҉", I: "I҉", J: "J҉",
  K: "K҉", L: "L҉", M: "M҉", N: "N҉", O: "O҉", P: "P҉", Q: "Q҉", R: "R҉", S: "S҉", T: "T҉",
  U: "U҉", V: "V҉", W: "W҉", X: "X҉", Y: "Y҉", Z: "Z҉",
  a: "a҉", b: "b҉", c: "c҉", d: "d҉", e: "e҉", f: "f҉", g: "g҉", h: "h҉", i: "i҉", j: "j҉",
  k: "k҉", l: "l҉", m: "m҉", n: "n҉", o: "o҉", p: "p҉", q: "q҉", r: "r҉", s: "s҉", t: "t҉",
  u: "u҉", v: "v҉", w: "w҉", x: "x҉", y: "y҉", z: "z҉"
});

// Style 17: Skull Comb Accent
addStyle('gamer', 'gamer_skull_comb', '༺☠︎', ' ᵒᵖ☠︎༻', {
  A: "A̵̔", B: "B̵̔", C: "C̵̔", D: "D̵̔", E: "E̵̔", F: "F̵̔", G: "G̵̔", H: "H̵̔", I: "I̵̔", J: "J̵̔",
  K: "K̵̔", L: "L̵̔", M: "M̵̔", N: "N̵̔", O: "O̵̔", P: "P̵̔", Q: "Q̵̔", R: "R̵̔", S: "S̵̔", T: "T̵̔",
  U: "U̵̔", V: "V̵̔", W: "W̵̔", X: "X̵̔", Y: "Y̵̔", Z: "Z̵̔",
  a: "a̵̔", b: "b̵̔", c: "c̵̔", d: "d̵̔", e: "e̵̔", f: "f̵̔", g: "g̵̔", h: "h̵̔", i: "i̵̔", j: "j̵̔",
  k: "k̵̔", l: "l̵̔", m: "m̵̔", n: "n̵̔", o: "o̵̔", p: "p̵̔", q: "q̵̔", r: "r̵̔", s: "s̵̔", t: "t̵̔",
  u: "u̵̔", v: "v̵̔", w: "w̵̔", x: "x̵̔", y: "y̵̔", z: "z̵̔"
});

// Style 18: Greek Short Stroke
addStyle('gamer', 'gamer_greek_short_stroke', '𝚾-', ' ૐ༻', {
  A: "A̷̷", B: "B̷̷", C: "C̷̷", D: "D̷̷", E: "E̷̷", F: "F̷̷", G: "G̷̷", H: "H̷̷", I: "I̷̷", J: "J̷̷",
  K: "K̷̷", L: "L̷̷", M: "M̷̷", N: "N̷̷", O: "O̷̷", P: "P̷̷", Q: "Q̷̷", R: "R̷̷", S: "S̷̷", T: "T̷̷",
  U: "U̷̷", V: "V̷̷", W: "W̷̷", X: "X̷̷", Y: "Y̷̷", Z: "Z̷̷",
  a: "a̷", b: "b̷", c: "c̷", d: "d̷", e: "e̷", f: "f̷", g: "g̷", h: "h̷", i: "i̷", j: "j̷",
  k: "k̷", l: "l̷", m: "m̷", n: "n̷", o: "o̷", p: "p̷", q: "q̷", r: "r̷", s: "s̷", t: "t̷",
  u: "u̷", v: "v̷", w: "w̷", x: "x̷", y: "y̷", z: "z̷"
});

// Style 19: Omega Inverted Style
addStyle('gamer', 'gamer_omega_inverted', '𝛀_', '_𝛀 ♡⊹˚₊', {
  A: "Ɐ", B: "ᴃ", C: "Ƈ", D: "ᴅ", E: "Ɇ", F: "ᶂ", G: "Ɠ", H: "Ħ", I: "ᶤ", J: "ᴊ",
  K: "ƙ", L: "ᶅ", M: "ᴍ", N: "Ƞ", O: "Ø", P: "ᴘ", Q: "Ɋ", R: "ʀ", S: "Ѕ", T: "Ŧ",
  U: "Ữ", V: "Ṽ", W: "Ẅ", X: "Ẋ", Y: "Ỵ", Z: "Ƶ",
  a: "Ɐ", b: "ᴃ", c: "Ƈ", d: "ᴅ", e: "Ɇ", f: "ᶂ", g: "Ɠ", h: "Ħ", i: "ᶤ", j: "ᴊ",
  k: "ƙ", l: "ᶅ", m: "ᴍ", n: "Ƞ", o: "Ø", p: "ᴘ", q: "Ɋ", r: "ʀ", s: "Ѕ", t: "Ŧ",
  u: "Ữ", v: "Ṽ", w: "Ẅ", x: "Ẋ", y: "Ỵ", z: "Ƶ"
});

// Style 20: Gothic Runic Style
addStyle('gamer', 'gamer_gothic_runic', '𐍆𐍆_', '_모 ♡࿐', {
  A: "𐌻", B: "𐌱", C: "𐌲", D: "𐌳", E: "𐌴", F: "𐍆", G: "𐌾", H: "𐌷", I: "𐌹", J: "J",
  K: "𐌺", L: "𐍊", M: "𐌼", N: "𐌽", O: "𐍈", P: "𐍉", Q: "𐍀", R: "𐍂", S: "𐍃", T: "𐍄",
  U: "𐍁", V: "v", W: "𐍉", X: "𐍇", Y: "𐍅", Z: "𐌶",
  a: "𐌻", b: "𐌱", c: "𐌲", d: "𐌳", e: "𐌴", f: "𐍆", g: "𐌾", h: "𐌷", i: "𐌹", j: "J",
  k: "𐌺", l: "𐍊", m: "𐌼", n: "𐌽", o: "𐍈", p: "𐍉", q: "𐍀", r: "𐍂", s: "𐍃", t: "𐍄",
  u: "𐍁", v: "v", w: "𐍉", x: "𐍇", y: "𐍅", z: "𐌶"
});

// Style 21: Delta Hittite Style
addStyle('love', 'love_delta_hittite', '—͟͞͞𝚫𔓎 ', ' 𔓎—͟͞͞𝚫', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
  K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
  U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
  k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
  u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣"
});

// Style 22: Rose Greek Style
addStyle('love', 'love_rose_greek', '🥀✗✨', '✨✗🥀', {
  A: "Α", B: "Β", C: "Ͻ", D: "Ɗ", E: "Σ", F: "Ƒ", G: "Ɠ", H: "Ν", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "Υ", V: "𝘝", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
  k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ"
});

// Style 23: Sparkle Heart Sans
addStyle('love', 'love_sparkle_heart', '✨♡', '♡_✨👀', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤̆̈", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 24: Love Flower Sans
addStyle('love', 'love_flower_sans', '𝘓♡𝘝𝘌 ✿₊˚', '˚₊✿_✨', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤̆̈", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 25: Umbrella Small Caps
addStyle('love', 'love_umbrella_small_caps', '☂𓆩♡', '♡𓆪.࿐', {
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 26: Star Cursive
addStyle('love', 'love_star_cursive', '⋆｡˚💞⋆｡', '⋆｡˚💞⋆｡˚', {
  A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘", J: "𝓙",
  K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣",
  U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩",
  a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳",
  k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽",
  u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃"
});

// Style 27: Bracket Lambda Style
addStyle('love', 'love_bracket_lambda', '『♡', '♡』✨ ❤️‍🔥', {
  A: "Λ", B: "ɮ", C: "Ͷ", D: "ᗫ", E: "Σ", F: "Ғ", G: "Ɠ", H: "Ӈ", I: "Ί", J: "J",
  K: "Ҡ", L: "Ŀ", M: "M", N: "П", O: "Ø", P: "Ƥ", Q: "Ǫ", R: "Ʀ", S: "Ѕ", T: "Ͳ",
  U: "Ц", V: "Ѵ", W: "Ш", X: "X", Y: "¥", Z: "Ż",
  a: "λ", b: "ɫ", c: "Ϟ", d: "ᒪ", e: "σ", f: "ғ", g: "ɠ", h: "һ", i: "ι", j: "ʝ",
  k: "ҡ", l: "ŀ", m: "ṃ", n: "п", o: "ø", p: "ƥ", q: "ǫ", r: "ʀ", s: "ѕ", t: "ʇ",
  u: "ц", v: "ѵ", w: "ш", x: "χ", y: "¥", z: "ż"
});

// Style 28: Flower Heart Double Struck
addStyle('love', 'love_flower_heart', '꧁❀♥︎•', '•♥︎꧂', {
  A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
  K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
  U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ",
  a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
  k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
  u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫"
});

// Style 29: Smile Arrow Sans
addStyle('love', 'love_smile_arrow', 'Sмιℓєメ⇝☺︎', '☺︎⇜🦋', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 30: LOVE Monospace
addStyle('love', 'love_monospace', 'ᴸᴼⱽᴱ ', '𝗔 «━❥', {
  A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝",
  K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
  U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭",
  a: "𝙖", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝙚", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝙞", j: "𝙟",
  k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝙤", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
  u: "𝙪", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝙮", z: "𝙯"
});

// Style 13: Circular Accent (Simple)
addStyle('font', 'font_circular_accent_simple', '', '', {
  A: "ᴬ⃠", B: "ᴮ⃠", C: "ᶜ⃠", D: "ᴰ⃠", E: "ᴱ⃠", F: "ᶠ⃠", G: "ᴳ⃠", H: "ᴴ⃠", I: "ᴵ⃠", J: "ᴶ⃠",
  K: "ᴷ⃠", L: "ᴸ⃠", M: "ᴹ⃠", N: "ᴺ⃠", O: "ᴼ⃠", P: "ᴾ⃠", Q: "ᵠ⃠", R: "ᴿ⃠", S: "ˢ⃠", T: "ᵀ⃠",
  U: "ᵁ⃠", V: "ⱽ⃠", W: "ᵂ⃠", X: "ˣ⃠", Y: "ʸ⃠", Z: "ᶻ⃠",
  a: "ᵃ⃠", b: "ᵇ⃠", c: "ᶜ⃠", d: "ᵈ⃠", e: "ᵉ⃠", f: "ᶠ⃠", g: "ᵍ⃠", h: "ʰ⃠", i: "ⁱ⃠", j: "ʲ⃠",
  k: "ᵏ⃠", l: "ˡ⃠", m: "ᵐ⃠", n: "ⁿ⃠", o: "ᵒ⃠", p: "ᵖ⃠", q: "ᑫ⃠", r: "ʳ⃠", s: "ˢ⃠", t: "ᵗ⃠",
  u: "ᵘ⃠", v: "ᵛ⃠", w: "ʷ⃠", x: "ˣ⃠", y: "ʸ⃠", z: "ᶻ⃠"
});

// Style 14: Circled Letters
addStyle('font', 'font_circled', '', '', {
  A: "Ⓐ", B: "Ⓑ", C: "Ⓒ", D: "Ⓓ", E: "Ⓔ", F: "Ⓕ", G: "Ⓖ", H: "Ⓗ", I: "Ⓘ", J: "Ⓙ",
  K: "Ⓚ", L: "Ⓛ", M: "Ⓜ", N: "Ⓝ", O: "Ⓞ", P: "Ⓟ", Q: "Ⓠ", R: "Ⓡ", S: "Ⓢ", T: "Ⓣ",
  U: "Ⓤ", V: "Ⓥ", W: "Ⓦ", X: "Ⓧ", Y: "Ⓨ", Z: "Ⓩ",
  a: "ⓐ", b: "ⓑ", c: "ⓒ", d: "ⓓ", e: "ⓔ", f: "ⓕ", g: "ⓖ", h: "ⓗ", i: "ⓘ", j: "ⓙ",
  k: "ⓚ", l: "ⓛ", m: "ⓜ", n: "ⓝ", o: "ⓞ", p: "ⓟ", q: "ⓠ", r: "ⓡ", s: "ⓢ", t: "ⓣ",
  u: "ⓤ", v: "ⓥ", w: "ⓦ", x: "ⓧ", y: "ⓨ", z: "ⓩ"
});

// Style 15: Bold Italic Math
addStyle('font', 'font_bold_italic', '', '', {
  A: "𝑨", B: "𝑩", C: "𝑪", D: "𝑫", E: "𝑬", F: "𝑭", G: "𝑮", H: "𝑯", I: "𝑰", J: "𝑱",
  K: "𝑲", L: "𝑳", M: "𝑴", N: "𝑵", O: "𝑶", P: "𝑷", Q: "𝑸", R: "𝑹", S: "𝑺", T: "𝑻",
  U: "𝑼", V: "𝑽", W: "𝑾", X: "𝑿", Y: "𝒀", Z: "𝒁",
  a: "𝒂", b: "𝒃", c: "𝒄", d: "𝒅", e: "𝒆", f: "𝒇", g: "𝒈", h: "𝒉", i: "𝒊", j: "𝒋",
  k: "𝒌", l: "𝒍", m: "𝒎", n: "𝒏", o: "𝒐", p: "𝒑", q: "𝒒", r: "𝒓", s: "𝒔", t: "𝒕",
  u: "𝒖", v: "𝒗", w: "𝒘", x: "𝒙", y: "𝒚", z: "𝒛"
});

// Style 16: Negative Squared
addStyle('font', 'font_negative_squared', '', '', {
  A: "🅰", B: "🅱", C: "🅲", D: "🅳", E: "🅴", F: "🅵", G: "🅶", H: "🅷", I: "🅸", J: "🅹",
  K: "🅺", L: "🅻", M: "🅼", N: "🅽", O: "🅾", P: "🅿", Q: "🆀", R: "🆁", S: "🆂", T: "🆃",
  U: "🆄", V: "🆅", W: "🆆", X: "🆇", Y: "🆈", Z: "🆉",
  a: "🅰", b: "🅱", c: "🅲", d: "🅳", e: "🅴", f: "🅵", g: "🅶", h: "🅷", i: "🅸", j: "🅹",
  k: "🅺", l: "🅻", m: "🅼", n: "🅽", o: "🅾", p: "🅿", q: "🆀", r: "🆁", s: "🆂", t: "🆃",
  u: "🆄", v: "🆅", w: "🆆", x: "🆇", y: "🆈", z: "🆉"
});

// Style 17: Canadian Aboriginal
addStyle('font', 'font_canadian_aboriginal', '', '', {
  A: "ᗩ", B: "ᗷ", C: "ᑕ", D: "ᗪ", E: "ᗴ", F: "ᖴ", G: "Ꮐ", H: "ᕼ", I: "Ꭵ", J: "ᒍ",
  K: "Ꮶ", L: "Ꮮ", M: "ᗰ", N: "ᑎ", O: "ᗝ", P: "ᑭ", Q: "ᑫ", R: "ᖇ", S: "ᔕ", T: "ᖶ",
  U: "ᑌ", V: "ᐯ", W: "ᗯ", X: "᙭", Y: "Ꭹ", Z: "ᘔ",
  a: "ᗩ", b: "ᗷ", c: "ᑕ", d: "ᗪ", e: "ᗴ", f: "ᖴ", g: "Ꮐ", h: "ᕼ", i: "Ꭵ", j: "ᒍ",
  k: "Ꮶ", l: "Ꮮ", m: "ᗰ", n: "ᑎ", o: "ᗝ", p: "ᑭ", q: "ᑫ", r: "ᖇ", s: "ᔕ", t: "ᖶ",
  u: "ᑌ", v: "ᐯ", w: "ᗯ", x: "᙭", y: "Ꭹ", z: "ᘔ"
});

// Style 18: Greek Modern
addStyle('font', 'font_greek_modern', '', '', {
  A: "Δ", B: "β", C: "C", D: "Đ", E: "Σ", F: "Ϝ", G: "Ꮆ", H: "Ħ", I: "I", J: "J",
  K: "К", L: "Ꮭ", M: "M", N: "П", O: "Ø", P: "Ƥ", Q: "Ǫ", R: "Ŗ", S: "Ѕ", T: "Ͳ",
  U: "Ц", V: "Ѵ", W: "Ш", X: "X", Y: "Ψ", Z: "Ẕ",
  a: "δ", b: "β", c: "c", d: "đ", e: "ε", f: "ϝ", g: "g", h: "ħ", i: "ι", j: "j",
  k: "κ", l: "l", m: "m", n: "η", o: "ø", p: "ƥ", q: "ǫ", r: "ŗ", s: "s", t: "t",
  u: "ц", v: "ν", w: "ш", x: "x", y: "ψ", z: "ẑ"
});

// Style 19: Short Stroke
addStyle('font', 'font_short_stroke', '', '', {
  A: "A̷̷", B: "B̷̷", C: "C̷̷", D: "D̷̷", E: "E̷̷", F: "F̷̷", G: "G̷̷", H: "H̷̷", I: "I̷̷", J: "J̷̷",
  K: "K̷̷", L: "L̷̷", M: "M̷̷", N: "N̷̷", O: "O̷̷", P: "P̷̷", Q: "Q̷̷", R: "R̷̷", S: "S̷̷", T: "T̷̷",
  U: "U̷̷", V: "V̷̷", W: "W̷̷", X: "X̷̷", Y: "Y̷̷", Z: "Z̷̷",
  a: "a̷", b: "b̷", c: "c̷", d: "d̷", e: "e̷", f: "f̷", g: "g̷", h: "h̷", i: "i̷", j: "j̷",
  k: "k̷", l: "l̷", m: "m̷", n: "n̷", o: "o̷", p: "p̷", q: "q̷", r: "r̷", s: "s̷", t: "t̷",
  u: "u̷", v: "v̷", w: "w̷", x: "x̷", y: "y̷", z: "z̷"
});

// Style 20: Negative Circle with Space (Font Version)
addStyle('font', 'font_negative_circle_space', ' ̤̮ ', ' ̤̮', {
  A: "🅐 ̤̮", B: "🅑 ̤̮", C: "🅒 ̤̮", D: "🅓 ̤̮", E: "🅔 ̤̮", F: "🅕 ̤̮", G: "🅖 ̤̮", H: "🅗 ̤̮", I: "🅘 ̤̮", J: "🅙 ̤̮",
  K: "🅚 ̤̮", L: "🅛 ̤̮", M: "🅜 ̤̮", N: "🅝 ̤̮", O: "☻ ̤̮", P: "🅟 ̤̮", Q: "🅠 ̤̮", R: "🅡 ̤̮", S: "🅢 ̤̮", T: "🅣 ̤̮",
  U: "🅤 ̤̮", V: "🅥 ̤̮", W: "🅦 ̤̮", X: "🅧 ̤̮", Y: "🅨 ̤̮", Z: "🅩 ̤̮",
  a: "🅐 ̤̮", b: "🅑 ̤̮", c: "🅒 ̤̮", d: "🅓 ̤̮", e: "🅔 ̤̮", f: "🅕 ̤̮", g: "🅖 ̤̮", h: "🅗 ̤̮", i: "🅘 ̤̮", j: "🅙 ̤̮",
  k: "🅚 ̤̮", l: "🅛 ̤̮", m: "🅜 ̤̮", n: "🅝 ̤̮", o: "☻ ̤̮", p: "🅟 ̤̮", q: "🅠 ̤̮", r: "🅡 ̤̮", s: "🅢 ̤̮", t: "🅣 ̤̮",
  u: "🅤 ̤̮", v: "🅥 ̤̮", w: "🅦 ̤̮", x: "🅧 ̤̮", y: "🅨 ̤̮", z: "🅩 ̤̮"
});

// Style 16: Egyptian Skull Small Caps
addStyle('fancy', 'fancy_egyptian_skull', '𓆩☠', '☠𓆪', {
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 17: Bracket Lambda with Rabbit
addStyle('fancy', 'fancy_bracket_lambda_rabbit', '⟆『☯', '☯』⟅ 🐰', {
  A: "Λ", B: "ɮ", C: "Ͷ", D: "ᗫ", E: "Σ", F: "Ғ", G: "Ɠ", H: "Ӈ", I: "Ί", J: "J",
  K: "Ҡ", L: "Ŀ", M: "M", N: "П", O: "Ø", P: "Ƥ", Q: "Ǫ", R: "Ʀ", S: "Ѕ", T: "Ͳ",
  U: "Ц", V: "Ѵ", W: "Ш", X: "X", Y: "¥", Z: "Ż",
  a: "λ", b: "ɫ", c: "Ϟ", d: "ᒪ", e: "σ", f: "ғ", g: "ɠ", h: "һ", i: "ι", j: "ʝ",
  k: "ҡ", l: "ŀ", m: "ṃ", n: "п", o: "ø", p: "ƥ", q: "ǫ", r: "ʀ", s: "ѕ", t: "ʇ",
  u: "ц", v: "ѵ", w: "ш", x: "χ", y: "¥", z: "ż"
});

// Style 18: Boxed Double Struck
addStyle('fancy', 'fancy_boxed_double_struck', '꧁░Ξ', 'Ξ░꧂', {
  A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
  K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
  U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ",
  a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
  k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
  u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫"
});

// Style 19: Butterfly Smile Sans
addStyle('fancy', 'fancy_butterfly_smile', '🦋⇝☺︎', '☺︎⇜🦋', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 20: Bold Sans Serif
addStyle('fancy', 'fancy_bold_sans', '', '', {
  A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝",
  K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
  U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭",
  a: "𝗮", b: "𝗯", c: "𝗰", d: "𝗱", e: "𝗲", f: "𝗳", g: "𝗴", h: "𝗵", i: "𝗶", j: "𝗷",
  k: "𝗸", l: "𝗹", m: "𝗺", n: "𝗻", o: "𝗼", p: "𝗽", q: "𝗾", r: "𝗿", s: "𝘀", t: "𝘁",
  u: "𝘂", v: "𝘃", w: "𝘄", x: "𝘅", y: "𝘆", z: "𝘇"
});

// Style 31: Butterfly Negative Circle
addStyle('love', 'love_butterfly_negative', '🦋 ', ' ♡࿐', {
  A: "🅐", B: "🅑", C: "🅒", D: "🅓", E: "🅔", F: "🅕", G: "🅖", H: "🅗", I: "🅘", J: "🅙",
  K: "🅚", L: "🅛", M: "🅜", N: "🅝", O: "🅞", P: "🅟", Q: "🅠", R: "🅡", S: "🅢", T: "🅣",
  U: "🅤", V: "🅥", W: "🅦", X: "🅧", Y: "🅨", Z: "🅩",
  a: "🅐", b: "🅑", c: "🅒", d: "🅓", e: "🅔", f: "🅕", g: "🅖", h: "🅗", i: "🅘", j: "🅙",
  k: "🅚", l: "🅛", m: "🅜", n: "🅝", o: "🅞", p: "🅟", q: "🅠", r: "🅡", s: "🅢", t: "🅣",
  u: "🅤", v: "🅥", w: "🅦", x: "🅧", y: "🅨", z: "🅩"
});

// Style 32: Sparkle Squared with Heart
addStyle('love', 'love_sparkle_squared', '✨', '🦋', {
  A: "🄰", B: "🄱", C: "🄲", D: "🄳", E: "🄴", F: "🄵", G: "🄶", H: "🄷", I: "🄸", J: "🄹",
  K: "🄺", L: "🄻", M: "🄼", N: "🄽", O: "🄾", P: "🄿", Q: "🅀", R: "🅁", S: "🅂", T: "🅃",
  U: "🅄", V: "🅅", W: "🅆", X: "🅇", Y: "🅈", Z: "🅉",
  a: "🄰", b: "🄱", c: "🄲", d: "🄳", e: "🄴", f: "🄵", g: "🄶", h: "🄷", i: "🄸", j: "🄹",
  k: "🄺", l: "🄻", m: "🄼", n: "🄽", o: "🄾", p: "🄿", q: "🅀", r: "🅁", s: "🅂", t: "🅃",
  u: "🅄", v: "🅅", w: "🅆", x: "🅇", y: "🅈", z: "🅉"
});

// Style 33: Box Negative Circle
addStyle('love', 'love_box_negative', '░·˚₊', '₊˚·░', {
  A: "🅰", B: "🅱", C: "🅲", D: "🅳", E: "🅴", F: "🅵", G: "🅶", H: "🅷", I: "🅸", J: "🅹",
  K: "🅺", L: "🅻", M: "🅼", N: "🅽", O: "🅾", P: "🅿", Q: "🆀", R: "🆁", S: "🆂", T: "🆃",
  U: "🆄", V: "🆅", W: "🆆", X: "🆇", Y: "🆈", Z: "🆉",
  a: "🅰", b: "🅱", c: "🅲", d: "🅳", e: "🅴", f: "🅵", g: "🅶", h: "🅷", i: "🅸", j: "🅹",
  k: "🅺", l: "🅻", m: "🅼", n: "🅽", o: "🅾", p: "🅿", q: "🆀", r: "🆁", s: "🆂", t: "🆃",
  u: "🆄", v: "🆅", w: "🆆", x: "🆇", y: "🆈", z: "🆉"
});

// Style 34: Smiley Small Caps with Dots
addStyle('love', 'love_smiley_small_caps', '░✰☺︎', '·☺︎✰░ 🫀', {
  A: "ᴀ·", B: "ʙ·", C: "ᴄ·", D: "ᴅ·", E: "ᴇ·", F: "ꜰ·", G: "ɢ·", H: "ʜ·", I: "ɪ·", J: "ᴊ·",
  K: "ᴋ·", L: "ʟ·", M: "ᴍ·", N: "ɴ·", O: "ᴏ·", P: "ᴘ·", Q: "ǫ·", R: "ʀ·", S: "ꜱ·", T: "ᴛ·",
  U: "ᴜ·", V: "ᴠ·", W: "ᴡ·", X: "x·", Y: "ʏ·", Z: "ᴢ·",
  a: "ᴀ·", b: "ʙ·", c: "ᴄ·", d: "ᴅ·", e: "ᴇ·", f: "ꜰ·", g: "ɢ·", h: "ʜ·", i: "ɪ·", j: "ᴊ·",
  k: "ᴋ·", l: "ʟ·", m: "ᴍ·", n: "ɴ·", o: "ᴏ·", p: "ᴘ·", q: "ǫ·", r: "ʀ·", s: "ꜱ·", t: "ᴛ·",
  u: "ᴜ·", v: "ᴠ·", w: "ᴡ·", x: "x·", y: "ʏ·", z: "ᴢ·"
});

// Style 35: Egyptian Music
addStyle('love', 'love_egyptian_music', '𓆩♫𓆪', '𓆩♫𓆪', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
  K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
  U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
  k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
  u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣"
});

// Style 36: Heart Triangle Accent
addStyle('love', 'love_heart_triangle', '♡✨', '✨🦋࿐', {
  A: "A̸▵", B: "B̸▵", C: "C̸▵", D: "D̸▵", E: "E̸▵", F: "F̸▵", G: "G̸▵", H: "H̸▵", I: "I̸▵", J: "J̸▵",
  K: "K̸▵", L: "L̸▵", M: "M̸▵", N: "N̸▵", O: "O̸▵", P: "P̸▵", Q: "Q̸▵", R: "R̸▵", S: "S̸▵", T: "T̸▵",
  U: "U̸▵", V: "V̸▵", W: "W̸▵", X: "X̸▵", Y: "Y̸▵", Z: "Z̸▵",
  a: "a̸▵", b: "b̸▵", c: "c̸▵", d: "d̸▵", e: "e̸▵", f: "f̸▵", g: "g̸▵", h: "h̸▵", i: "i̸▵", j: "j̸▵",
  k: "k̸▵", l: "l̸▵", m: "m̸▵", n: "n̸▵", o: "o̸▵", p: "p̸▵", q: "q̸▵", r: "r̸▵", s: "s̸▵", t: "t̸▵",
  u: "u̸▵", v: "v̸▵", w: "w̸▵", x: "x̸▵", y: "y̸▵", z: "z̸▵"
});

// Style 37: Circle Accent
addStyle('love', 'love_circle_accent', '꧁♡', '♡꧂', {
  A: "A̸◉", B: "B̸◉", C: "C̸◉", D: "D̸◉", E: "E̸◉", F: "F̸◉", G: "G̸◉", H: "H̸◉", I: "I̸◉", J: "J̸◉",
  K: "K̸◉", L: "L̸◉", M: "M̸◉", N: "N̸◉", O: "O̸◉", P: "P̸◉", Q: "Q̸◉", R: "R̸◉", S: "S̸◉", T: "T̸◉",
  U: "U̸◉", V: "V̸◉", W: "W̸◉", X: "X̸◉", Y: "Y̸◉", Z: "Z̸◉",
  a: "a̸◉", b: "b̸◉", c: "c̸◉", d: "d̸◉", e: "e̸◉", f: "f̸◉", g: "g̸◉", h: "h̸◉", i: "i̸◉", j: "j̸◉",
  k: "k̸◉", l: "l̸◉", m: "m̸◉", n: "n̸◉", o: "o̸◉", p: "p̸◉", q: "q̸◉", r: "r̸◉", s: "s̸◉", t: "t̸◉",
  u: "u̸◉", v: "v̸◉", w: "w̸◉", x: "x̸◉", y: "y̸◉", z: "z̸◉"
});

// Style 38: Egyptian Circled
addStyle('love', 'love_egyptian_circled', '𓆩', '𓆪', {
  A: "Ⓐ", B: "Ⓑ", C: "Ⓒ", D: "Ⓓ", E: "Ⓔ", F: "Ⓕ", G: "Ⓖ", H: "Ⓗ", I: "Ⓘ", J: "Ⓙ",
  K: "Ⓚ", L: "Ⓛ", M: "Ⓜ", N: "Ⓝ", O: "Ⓞ", P: "Ⓟ", Q: "Ⓠ", R: "Ⓡ", S: "Ⓢ", T: "Ⓣ",
  U: "Ⓤ", V: "Ⓥ", W: "Ⓦ", X: "Ⓧ", Y: "Ⓨ", Z: "Ⓩ",
  a: "ⓐ", b: "ⓑ", c: "ⓒ", d: "ⓓ", e: "ⓔ", f: "ⓕ", g: "ⓖ", h: "ⓗ", i: "ⓘ", j: "ⓙ",
  k: "ⓚ", l: "ⓛ", m: "ⓜ", n: "ⓝ", o: "ⓞ", p: "ⓟ", q: "ⓠ", r: "ⓡ", s: "ⓢ", t: "ⓣ",
  u: "ⓤ", v: "ⓥ", w: "ⓦ", x: "ⓧ", y: "ⓨ", z: "ⓩ"
});

// Style 39: Simple Small Caps
addStyle('love', 'love_simple_small_caps', '♡', '_☕︎', {
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 40: Star Bracket Italic
addStyle('love', 'love_star_bracket_italic', '𓆩✩⋆ı⧼', '⧽ı⋆✩𓆪', {
  A: "𝘼", B: "𝘽", C: "𝘾", D: "𝘿", E: "𝙀", F: "𝙁", G: "𝙂", H: "𝙃", I: "𝙄", J: "𝙅",
  K: "𝙆", L: "𝙇", M: "𝙈", N: "𝙉", O: "𝙊", P: "𝙋", Q: "𝙌", R: "𝙍", S: "𝙎", T: "𝙏",
  U: "𝙐", V: "𝙑", W: "𝙒", X: "𝙓", Y: "𝙔", Z: "𝙕",
  a: "𝙖", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝙚", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝙞", j: "𝙟",
  k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝙤", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
  u: "𝙪", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝙮", z: "𝙯"
});

// Style 41: Rune Flower Short Stroke
addStyle('love', 'love_rune_flower_short', 'ᛋ「•❀', ' ❀•」ᛋ', {
  A: "A̷̷", B: "B̷̷", C: "C̷̷", D: "D̷̷", E: "E̷̷", F: "F̷̷", G: "G̷̷", H: "H̷̷", I: "I̷̷", J: "J̷̷",
  K: "K̷̷", L: "L̷̷", M: "M̷̷", N: "N̷̷", O: "O̷̷", P: "P̷̷", Q: "Q̷̷", R: "R̷̷", S: "S̷̷", T: "T̷̷",
  U: "U̷̷", V: "V̷̷", W: "W̷̷", X: "X̷̷", Y: "Y̷̷", Z: "Z̷̷",
  a: "a̷", b: "b̷", c: "c̷", d: "d̷", e: "e̷", f: "f̷", g: "g̷", h: "h̷", i: "i̷", j: "j̷",
  k: "k̷", l: "l̷", m: "m̷", n: "n̷", o: "o̷", p: "p̷", q: "q̷", r: "r̷", s: "s̷", t: "t̷",
  u: "u̷", v: "v̷", w: "w̷", x: "x̷", y: "y̷", z: "z̷"
});

// Style 42: Xi Accent
addStyle('love', 'love_xi_accent', '乂⸝⸝⸝♡⸝⸝⸝', '⸝⸝⸝♡⸝⸝⸝', {
  A: "A͢", B: "B͢", C: "C͢", D: "D͢", E: "E͢", F: "F͢", G: "G͢", H: "H͢", I: "I͢", J: "J͢",
  K: "K͢", L: "L͢", M: "M͢", N: "N͢", O: "O͢", P: "P͢", Q: "Q͢", R: "R͢", S: "S͢", T: "T͢",
  U: "U͢", V: "V͢", W: "W͢", X: "X͢", Y: "Y͢", Z: "Z͢",
  a: "a͢", b: "b͢", c: "c͢", d: "d͢", e: "e͢", f: "f͢", g: "g͢", h: "h͢", i: "i͢", j: "j͢",
  k: "k͢", l: "l͢", m: "m͢", n: "n͢", o: "o͢", p: "p͢", q: "q͢", r: "r͢", s: "s͢", t: "t͢",
  u: "u͢", v: "v͢", w: "w͢", x: "x͢", y: "y͢", z: "z͢"
});

// Style 43: Love Monospace
addStyle('love', 'love_love_monospace', 'L͢ᵒᵛᵉ『', '』𓆩♡𓆪', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
  K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
  U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
  k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
  u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣"
});

// Style 44: I Love You Cursive
addStyle('love', 'love_iloveyou_cursive', 'Ｉ Lᵒᵛᵉᵧₒᵤ♡', ' (๑′ᴗ‵๑)', {
  A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘", J: "𝓙",
  K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣",
  U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩",
  a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳",
  k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽",
  u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃"
});

// Style 45: Heart Squared
addStyle('love', 'love_heart_squared', ' ┈━═✨🫀', '🫀✨═━┈', {
  A: "🄰", B: "🄱", C: "🄲", D: "🄳", E: "🄴", F: "🄵", G: "🄶", H: "🄷", I: "🄸", J: "🄹",
  K: "🄺", L: "🄻", M: "🄼", N: "🄽", O: "🄾", P: "🄿", Q: "🅀", R: "🅁", S: "🅂", T: "🅃",
  U: "🅄", V: "🅅", W: "🅆", X: "🅇", Y: "🅈", Z: "🅉",
  a: "🄰", b: "🄱", c: "🄲", d: "🄳", e: "🄴", f: "🄵", g: "🄶", h: "🄷", i: "🄸", j: "🄹",
  k: "🄺", l: "🄻", m: "🄼", n: "🄽", o: "🄾", p: "🄿", q: "🅀", r: "🅁", s: "🅂", t: "🅃",
  u: "🅄", v: "🅅", w: "🅆", x: "🅇", y: "🅈", z: "🅉"
});

// Style 46: Chinese Negative Circle
addStyle('love', 'love_chinese_negative', '么➤⃝', '么𓆩♬𓆪', {
  A: "🅰", B: "🅱", C: "🅲", D: "🅳", E: "🅴", F: "🅵", G: "🅶", H: "🅷", I: "🅸", J: "🅹",
  K: "🅺", L: "🅻", M: "🅼", N: "🅽", O: "🅾", P: "🅿", Q: "🆀", R: "🆁", S: "🆂", T: "🆃",
  U: "🆄", V: "🆅", W: "🆆", X: "🆇", Y: "🆈", Z: "🆉",
  a: "🅰", b: "🅱", c: "🅲", d: "🅳", e: "🅴", f: "🅵", g: "🅶", h: "🅷", i: "🅸", j: "🅹",
  k: "🅺", l: "🅻", m: "🅼", n: "🅽", o: "🅾", p: "🅿", q: "🆀", r: "🆁", s: "🆂", t: "🆃",
  u: "🆄", v: "🆅", w: "🆆", x: "🆇", y: "🆈", z: "🆉"
});

// Style 47: Arrow Cursive
addStyle('love', 'love_arrow_cursive', '┈━═❥•·˚', '•˚·❥·˚═━┈', {
  A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘", J: "𝓙",
  K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣",
  U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩",
  a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳",
  k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽",
  u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃"
});

// Style 48: LOVE Greek
addStyle('love', 'love_greek_with_heart', '『ᴸᴼⱽᴱ』', '『✌︎︎』❤️‍🔥', {
  A: "Λ", B: "Β", C: "Ͻ", D: "Ɗ", E: "Ξ", F: "Ƒ", G: "Ɠ", H: "Ν", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ø", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "U", V: "V", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "λ", b: "β", c: "Ͻ", d: "ɗ", e: "ξ", f: "ƒ", g: "ɠ", h: "н", i: "ι", j: "ј",
  k: "κ", l: "ℓ", m: "μ", n: "η", o: "ø", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "υ", z: "ƶ"
});

// Style 49: Autumn Italic Math
addStyle('love', 'love_autumn_italic', '🍂⧉', '⧉𝐿𝑜𝑣𝑒𝑟 🌈', {
  A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
  K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
});

// Style 50: Sweet Bold Italic
addStyle('love', 'love_sweet_bold_italic', '𝑆𝑤𝑒𝑒𝑡 ♡·˚₊', '₊˚·⧉🏝️', {
  A: "𝑨", B: "𝑩", C: "𝑪", D: "𝑫", E: "𝑬", F: "𝑭", G: "𝑮", H: "𝑯", I: "𝑰", J: "𝑱",
  K: "𝑲", L: "𝑳", M: "𝑴", N: "𝑵", O: "𝑶", P: "𝑷", Q: "𝑸", R: "𝑹", S: "𝑺", T: "𝑻",
  U: "𝑼", V: "𝑽", W: "𝑾", X: "𝑿", Y: "𝒀", Z: "𝒁",
  a: "𝒂", b: "𝒃", c: "𝒄", d: "𝒅", e: "𝒆", f: "𝒇", g: "𝒈", h: "𝒉", i: "𝒊", j: "𝒋",
  k: "𝒌", l: "𝒍", m: "𝒎", n: "𝒏", o: "𝒐", p: "𝒑", q: "𝒒", r: "𝒓", s: "𝒔", t: "𝒕",
  u: "𝒖", v: "𝒗", w: "𝒘", x: "𝒙", y: "𝒚", z: "𝒛"
});

// Style 51: Flower Short Tilde
addStyle('love', 'love_flower_short_tilde', '༄✿░', '░✿༄', {
  A: "A̴", B: "B̴", C: "C̴", D: "D̴", E: "E̴", F: "F̴", G: "G̴", H: "H̴", I: "I̴", J: "J̴",
  K: "K̴", L: "L̴", M: "M̴", N: "N̴", O: "O̴", P: "P̴", Q: "Q̴", R: "R̴", S: "S̴", T: "T̴",
  U: "U̴", V: "V̴", W: "W̴", X: "X̴", Y: "Y̴", Z: "Z̴",
  a: "a̴", b: "b̴", c: "c̴", d: "d̴", e: "e̴", f: "f̴", g: "g̴", h: "h̴", i: "i̴", j: "j̴",
  k: "k̴", l: "l̴", m: "m̴", n: "n̴", o: "o̴", p: "p̴", q: "q̴", r: "r̴", s: "s̴", t: "t̴",
  u: "u̴", v: "v̴", w: "w̴", x: "x̴", y: "y̴", z: "z̴"
});

// Style 52: Arrow Fraktur
addStyle('love', 'love_arrow_fraktur', '➶➶༄', '༄➷➷', {
  a: "𝔞̈", b: "𝔟̈", c: "𝔠̈", d: "𝔡̈", e: "𝔢̈", f: "𝔣̈", g: "𝔤̈", h: "𝔥̈", i: "𝔦̈", j: "𝔧̈",
  k: "𝔨̈", l: "𝔩̈", m: "𝔪̈", n: "𝔫̈", o: "𝔬̈", p: "𝔭̈", q: "𝔮̈", r: "𝔯̈", s: "𝔰̈", t: "𝔱̈",
  u: "𝔲̈", v: "𝔳̈", w: "𝔴̈", x: "𝔵̈", y: "𝔶̈", z: "𝔷̈",
  A: "𝔄", B: "𝔅", C: "ℭ", D: "𝔇", E: "𝔈", F: "𝔉", G: "𝔊", H: "ℌ", I: "ℑ", J: "𝔍",
  K: "𝔎", L: "𝔏", M: "𝔐", N: "𝔑", O: "𝔒", P: "𝔓", Q: "𝔔", R: "ℜ", S: "𝔖", T: "𝔗",
  U: "𝔘", V: "𝔙", W: "𝔚", X: "𝔛", Y: "𝔜", Z: "ℨ"
});

// Style 53: Penguin Star Accent
addStyle('love', 'love_penguin_star', '—͟͞͞★🐧🎀', ' 🎀🐧✧', {
  A: "A⨳", B: "B⨳", C: "C⨳", D: "D⨳", E: "E⨳", F: "F⨳", G: "G⨳", H: "H⨳", I: "I⨳", J: "J⨳",
  K: "K⨳", L: "L⨳", M: "M⨳", N: "N⨳", O: "O⨳", P: "P⨳", Q: "Q⨳", R: "R⨳", S: "S⨳", T: "T⨳",
  U: "U⨳", V: "V⨳", W: "W⨳", X: "X⨳", Y: "Y⨳", Z: "Z⨳",
  a: "a⨳", b: "b⨳", c: "c⨳", d: "d⨳", e: "e⨳", f: "f⨳", g: "g⨳", h: "h⨳", i: "i⨳", j: "j⨳",
  k: "k⨳", l: "l⨳", m: "m⨳", n: "n⨳", o: "o⨳", p: "p⨳", q: "q⨳", r: "r⨳", s: "s⨳", t: "t⨳",
  u: "u⨳", v: "v⨳", w: "w⨳", x: "x⨳", y: "y⨳", z: "z⨳"
});

// Style 54: Arrow Negative Circle
addStyle('love', 'love_arrow_negative_circle', '▶ ●── ̤̮', ' ̤̮ ───▶ ●', {
  A: "🅐 ̤̮", B: "🅑 ̤̮", C: "🅒 ̤̮", D: "🅓 ̤̮", E: "🅔 ̤̮", F: "🅕 ̤̮", G: "🅖 ̤̮", H: "🅗 ̤̮", I: "🅘 ̤̮", J: "🅙 ̤̮",
  K: "🅚 ̤̮", L: "🅛 ̤̮", M: "🅜 ̤̮", N: "🅝 ̤̮", O: "☻ ̤̮", P: "🅟 ̤̮", Q: "🅠 ̤̮", R: "🅡 ̤̮", S: "🅢 ̤̮", T: "🅣 ̤̮",
  U: "🅤 ̤̮", V: "🅥 ̤̮", W: "🅦 ̤̮", X: "🅧 ̤̮", Y: "🅨 ̤̮", Z: "🅩 ̤̮",
  a: "🅐 ̤̮", b: "🅑 ̤̮", c: "🅒 ̤̮", d: "🅓 ̤̮", e: "🅔 ̤̮", f: "🅕 ̤̮", g: "🅖 ̤̮", h: "🅗 ̤̮", i: "🅘 ̤̮", j: "🅙 ̤̮",
  k: "🅚 ̤̮", l: "🅛 ̤̮", m: "🅜 ̤̮", n: "🅝 ̤̮", o: "☻ ̤̮", p: "🅟 ̤̮", q: "🅠 ̤̮", r: "🅡 ̤̮", s: "🅢 ̤̮", t: "🅣 ̤̮",
  u: "🅤 ̤̮", v: "🅥 ̤̮", w: "🅦 ̤̮", x: "🅧 ̤̮", y: "🅨 ̤̮", z: "🅩 ̤̮"
});

// Style 55: Short Stroke Heart
addStyle('love', 'love_short_stroke_heart', '༄♡★', '★♡࿐', {
  A: "A̶", B: "B̶", C: "C̶", D: "D̶", E: "E̶", F: "F̶", G: "G̶", H: "H̶", I: "I̶", J: "J̶",
  K: "K̶", L: "L̶", M: "M̶", N: "N̶", O: "O̶", P: "P̶", Q: "Q̶", R: "R̶", S: "S̶", T: "T̶",
  U: "U̶", V: "V̶", W: "W̶", X: "X̶", Y: "Y̶", Z: "Z̶",
  a: "a̶", b: "b̶", c: "c̶", d: "d̶", e: "e̶", f: "f̶", g: "g̶", h: "h̶", i: "i̶", j: "j̶",
  k: "k̶", l: "l̶", m: "m̶", n: "n̶", o: "o̶", p: "p̶", q: "q̶", r: "r̶", s: "s̶", t: "t̶",
  u: "u̶", v: "v̶", w: "w̶", x: "x̶", y: "y̶", z: "z̶"
});

// Style 56: Star Sans Serif
addStyle('love', 'love_star_sans', '꧁☆*', '*☆꧂', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 57: Tea Monospace
addStyle('love', 'love_tea_monospace', 'Ƭ͢♨ ', ' ♨⋆✿࿐', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
  K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
  U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
  k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
  u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣"
});

// Style 58: Tea Small Caps
addStyle('love', 'love_tea_small_caps', '♨メ', 'メ♨ᴸᴼⱽᴱ', {
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 59: Kaomoji Music Accent
addStyle('love', 'love_kaomoji_music', '(◞ꈍ∇ꈍ)っ 🎁', ' (❛0❛⋆)', {
  A: "𝄆A", B: "𝄆B", C: "𝄆C", D: "𝄆D", E: "𝄆E", F: "𝄆F", G: "𝄆G", H: "𝄆H", I: "𝄆I", J: "𝄆J",
  K: "𝄆K", L: "𝄆L", M: "𝄆M", N: "𝄆N", O: "𝄆O", P: "𝄆P", Q: "𝄆Q", R: "𝄆R", S: "𝄆S", T: "𝄆T",
  U: "𝄆U", V: "𝄆V", W: "𝄆W", X: "𝄆X", Y: "𝄆Y", Z: "𝄆Z",
  a: "𝄆a", b: "𝄆b", c: "𝄆c", d: "𝄆d", e: "𝄆e", f: "𝄆f", g: "𝄆g", h: "𝄆h", i: "𝄆i", j: "𝄆j",
  k: "𝄆k", l: "𝄆l", m: "𝄆m", n: "𝄆n", o: "𝄆o", p: "𝄆p", q: "𝄆q", r: "𝄆r", s: "𝄆s", t: "𝄆t",
  u: "𝄆u", v: "𝄆v", w: "𝄆w", x: "𝄆x", y: "𝄆y", z: "𝄆z"
});

// Style 60: Japanese Style
addStyle('love', 'love_japanese_style', 'x͢ ♡', '♡࿐', {
  A: "么", B: "乃", C: "匚", D: "刁", E: "モ", F: "ｷ", G: "ム", H: "廾", I: "工", J: "ﾌ",
  K: "ズ", L: "ﾚ", M: "从", N: "れ", O: "〇", P: "尸", Q: "ゐ", R: "尺", S: "丂", T: "ｲ",
  U: "ひ", V: "√", W: "山", X: "メ", Y: "Ɏ", Z: "乙",
  a: "么", b: "乃", c: "匚", d: "刁", e: "モ", f: "ｷ", g: "ム", h: "廾", i: "工", j: "ﾌ",
  k: "ズ", l: "ﾚ", m: "从", n: "れ", o: "〇", p: "尸", q: "ゐ", r: "尺", s: "丂", t: "ｲ",
  u: "ひ", v: "√", w: "山", x: "メ", y: "Ɏ", z: "乙"
});

// Style 61: VIP Accent Italic
addStyle('love', 'love_vip_accent', 'ᴠͥɪͣᴘͫ ꪶꫂ♛', '♛ꪶꫂ࿐', {
  A: "𝘼̈", B: "𝘽̈", C: "𝘾̈", D: "𝘿̈", E: "𝙀̈", F: "𝙁̈", G: "𝙂̈", H: "𝙃̈", I: "𝙄̈", J: "𝙅̈",
  K: "𝙆̈", L: "𝙇̈", M: "𝙈̈", N: "𝙉̈", O: "𝙊̈", P: "𝙋̈", Q: "𝙌̈", R: "𝙍̈", S: "𝙎̈", T: "𝙏̈",
  U: "𝙐̈", V: "𝙑̈", W: "𝙒̈", X: "𝙓̈", Y: "𝙔̈", Z: "𝙕̈",
  a: "𝙖̈", b: "𝙗̈", c: "𝙘̈", d: "𝙙̈", e: "𝙚̈", f: "𝙛̈", g: "𝙜̈", h: "𝙝̈", i: "𝙞̈", j: "𝙟̈",
  k: "𝙠̈", l: "𝙡̈", m: "𝙢̈", n: "𝙣̈", o: "𝙤̈", p: "𝙥̈", q: "𝙦̈", r: "𝙧̈", s: "𝙨̈", t: "𝙩̈",
  u: "𝙪̈", v: "𝙫̈", w: "𝙬̈", x: "𝙭̈", y: "𝙮̈", z: "𝙯̈"
});

// Style 62: Star Cursive Accent
addStyle('love', 'love_star_cursive_accent', '★', '★࿐', {
  A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘", J: "𝓙",
  K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣",
  U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩",
  a: "𝓪̈", b: "𝓫̈", c: "𝓬̈", d: "𝓭̈", e: "𝓮̈", f: "𝓯̈", g: "𝓰̈", h: "𝓱̈", i: "𝓲̈", j: "𝓳̈",
  k: "𝓴̈", l: "𝓵̈", m: "𝓶̈", n: "𝓷̈", o: "𝓸̈", p: "𝓹̈", q: "𝓺̈", r: "𝓻̈", s: "𝓼̈", t: "𝓽̈",
  u: "𝓾̈", v: "𝓿̈", w: "𝔀̈", x: "𝔁̈", y: "𝔂̈", z: "𝔃̈"
});

// Style 63: Egyptian Italic Math
addStyle('love', 'love_egyptian_italic', '𓆩⧉𓆪', '(｡♡‿♡｡)', {
  A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
  K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
});

// Style 64: Black Heart Script
addStyle('love', 'love_black_heart_script', '🖤⃝🦋⋆.', ' ˚🦋༘⋆', {
  A: "𝒜", B: "ℬ", C: "𝒞", D: "𝒟", E: "ℱ", F: "𝒢", G: "ℋ", H: "ℐ", I: "𝒥", J: "𝒦",
  K: "ℒ", L: "ℳ", M: "𝒩", N: "𝒪", O: "𝒫", P: "𝒬", Q: "ℛ", R: "𝒮", S: "𝒯", T: "𝒰",
  U: "𝒱", V: "𝒲", W: "𝒳", X: "𝒴", Y: "𝒵", Z: "𝒜",
  a: "𝒶", b: "𝒷", c: "𝒸", d: "𝒹", e: "𝒻", f: "ℊ", g: "𝒽", h: "𝒾", i: "𝒿", j: "𝓀",
  k: "𝓁", l: "𝓂", m: "𝓃", n: "ℴ", o: "𝓅", p: "𝓆", q: "𝓇", r: "𝓈", s: "𝓉", t: "𝓊",
  u: "𝓋", v: "𝓌", w: "𝓍", x: "𝓎", y: "𝓏", z: "𝒶"
});

// Style 65: Flower Greek Bold
addStyle('love', 'love_flower_greek_bold', '✿ ', '..⁠♡🦋', {
  A: "𝚨", B: "𝚩", C: "𝚪", D: "𝚫", E: "𝚬", F: "𝚭", G: "𝚮", H: "𝚯", I: "𝚰", J: "𝚱",
  K: "𝚲", L: "𝚳", M: "𝚴", N: "𝚵", O: "𝚶", P: "𝚷", Q: "𝚸", R: "𝚹", S: "𝚺", T: "𝚻",
  U: "𝚼", V: "𝚽", W: "𝚾", X: "𝚿", Y: "𝛀", Z: "𝚨",
  a: "α", b: "β", c: "γ", d: "δ", e: "ε", f: "ζ", g: "η", h: "θ", i: "ι", j: "κ",
  k: "λ", l: "μ", m: "ν", n: "ξ", o: "ο", p: "π", q: "ρ", r: "ς", s: "σ", t: "τ",
  u: "υ", v: "φ", w: "χ", x: "ψ", y: "ω", z: "α"
});

// Style 66: Star Double Struck Accent
addStyle('love', 'love_star_double_struck_accent', 'ᯓ★', ' ‼ 𓆩✿𓆪', {
  A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
  K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
  U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ",
  a: "𝕒̈", b: "𝕓̈", c: "𝕔̈", d: "𝕕̈", e: "𝕖̈", f: "𝕗̈", g: "𝕘̈", h: "𝕙̈", i: "𝕚̈", j: "𝕛̈",
  k: "𝕜̈", l: "𝕝̈", m: "𝕞̈", n: "𝕟̇", o: "𝕠̈", p: "𝕡̈", q: "𝕢̈", r: "𝕣̈", s: "𝕤̈", t: "𝕥̈",
  u: "𝕦̈", v: "𝕧̈", w: "𝕨̈", x: "𝕩̈", y: "𝕪̈", z: "𝕫̈"
});

// Style 67: Exclamation Negative Circle
addStyle('love', 'love_exclamation_negative', '‼ ⋆｡˚', '⋆｡˚🦋⃟💗᪲᪲᪲', {
  A: "🅐", B: "🅑", C: "🅒", D: "🅓", E: "🅔", F: "🅕", G: "🅖", H: "🅗", I: "🅘", J: "🅙",
  K: "🅚", L: "🅛", M: "🅜", N: "🅝", O: "🅞", P: "🅟", Q: "🅠", R: "🅡", S: "🅢", T: "🅣",
  U: "🅤", V: "🅥", W: "🅦", X: "🅧", Y: "🅨", Z: "🅩",
  a: "🅐", b: "🅑", c: "🅒", d: "🅓", e: "🅔", f: "🅕", g: "🅖", h: "🅗", i: "🅘", j: "🅙",
  k: "🅚", l: "🅛", m: "🅜", n: "🅝", o: "🅞", p: "🅟", q: "🅠", r: "🅡", s: "🅢", t: "🅣",
  u: "🅤", v: "🅥", w: "🅦", x: "🅧", y: "🅨", z: "🅩"
});

// Style 68: Star Xi Accent
addStyle('love', 'love_star_xi_accent', '⋆𐙚‼', '‼♡', {
  A: "A͢", B: "B͢", C: "C͢", D: "D͢", E: "E͢", F: "F͢", G: "G͢", H: "H͢", I: "I͢", J: "J͢",
  K: "K͢", L: "L͢", M: "M͢", N: "N͢", O: "O͢", P: "P͢", Q: "Q͢", R: "R͢", S: "S͢", T: "T͢",
  U: "U͢", V: "V͢", W: "W͢", X: "X͢", Y: "Y͢", Z: "Z͢",
  a: "a͢", b: "b͢", c: "c͢", d: "d͢", e: "e͢", f: "f͢", g: "g͢", h: "h͢", i: "i͢", j: "j͢",
  k: "k͢", l: "l͢", m: "m͢", n: "n͢", o: "o͢", p: "p͢", q: "q͢", r: "r͢", s: "s͢", t: "t͢",
  u: "u͢", v: "v͢", w: "w͢", x: "x͢", y: "y͢", z: "z͢"
});

// Style 69: Tai Viet Greek
addStyle('love', 'love_tai_viet_greek', 'ꪶ ꩜ꫂ ̤̮', ' ̤̮ 💕⃝🕊️ᯓ★', {
  a: "̤̮α", b: "̤̮в", c: "̤̮c", d: "̤̮ɗ", e: "̤̮ε", f: "̤̮ƒ", g: "̤̮ɠ", h: "̤̮н", i: "̤̮ɪ", j: "̤̮נ",
  k: "̤̮κ", l: "̤̮ℓ", m: "̤̮м", n: "̤̮η", o: "̤̮σ", p: "̤̮ρ", q: "̤̮զ", r: "̤̮я", s: "̤̮ѕ", t: "̤̮τ",
  u: "̤̮υ", v: "̤̮ν", w: "̤̮ω", x: "̤̮χ", y: "̤̮γ", z: "̤̮ƶ",
  A: "Α", B: "Β", C: "C", D: "Ɗ", E: "Ε", F: "Ƒ", G: "Ɠ", H: "Н", I: "Ι", J: "Ј",
  K: "Κ", L: "ℓ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ջ", R: "Я", S: "Ѕ", T: "Τ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Ƶ"
});

// Style 70: Cham Greek
addStyle('love', 'love_cham_greek', '꩜', '𓏧𖹭࿐', {
  A: "Α", B: "Β", C: "Ͻ", D: "Ɗ", E: "Σ", F: "Ƒ", G: "Ɠ", H: "Ν", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "U", V: "V", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
  k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ"
});

// Style 71: Arabic Numbers Italic
addStyle('love', 'love_arabic_numbers_italic', '١٥٧٤♡_', ' ‼♡‼', {
  A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
  K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
});

// Style 72: Bold Italic with Symbol
addStyle('love', 'love_bold_italic_symbol', '', '', {
  A: "𝑨", B: "𝑩", C: "𝑪", D: "𝑫", E: "𝑬", F: "𝑭", G: "𝑮", H: "𝑯", I: "𝑰", J: "𝑱",
  K: "𝑲", L: "𝑳", M: "𝑴", N: "𝑵", O: "𝑶", P: "𝑷", Q: "𝑸", R: "𝑹", S: "𝑺", T: "𝑻",
  U: "𝑼", V: "𝑽", W: "𝑾", X: "𝑿", Y: "𝒀", Z: "𝒁",
  a: "𝒂", b: "𝒃", c: "𝒄", d: "𝒅", e: "𝒆", f: "𝒇", g: "𝒈", h: "𝒉", i: "𝒊", j: "𝒋",
  k: "𝒌", l: "𝒍", m: "𝒎", n: "𝒏", o: "𝒐", p: "𝒑", q: "𝒒", r: "𝒓", s: "𝒔", t: "𝒕",
  u: "𝒖", v: "𝒗", w: "𝒘", x: "𝒙", y: "𝒚", z: "𝒛"
});

// Style 73: Kaomoji Greek
addStyle('love', 'love_kaomoji_greek', '(˃͈ ˂͈ ) ', '  ᶻ 𝗓 𐰁', {
  A: "Λ", B: "Β", C: "Ͻ", D: "Ɗ", E: "Ξ", F: "Ƒ", G: "Ɠ", H: "H", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ø", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "U", V: "V", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "λ", b: "β", c: "Ͻ", d: "ɗ", e: "ξ", f: "ƒ", g: "ɠ", h: "h", i: "ι", j: "ј",
  k: "κ", l: "ℓ", m: "μ", n: "η", o: "ø", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "υ", z: "ƶ"
});

// Style 74: Tibetan Greek
addStyle('love', 'love_tibetan_greek', '༝༚༝༚‹ ̤̮', ' ̤̮ 𖹭࿐', {
  a: "̤̮α", b: "̤̮в", c: "̤̮c", d: "̤̮ɗ", e: "̤̮ε", f: "̤̮ƒ", g: "̤̮ɠ", h: "̤̮н", i: "̤̮ɪ", j: "̤̮נ",
  k: "̤̮κ", l: "̤̮ℓ", m: "̤̮м", n: "̤̮η", o: "̤̮σ", p: "̤̮ρ", q: "̤̮զ", r: "̤̮я", s: "̤̮ѕ", t: "̤̮τ",
  u: "̤̮υ", v: "̤̮ν", w: "̤̮ω", x: "̤̮χ", y: "̤̮γ", z: "̤̮ƶ",
  A: "Α", B: "Β", C: "C", D: "Ɗ", E: "Ε", F: "Ƒ", G: "Ɠ", H: "Н", I: "Ι", J: "Ј",
  K: "Κ", L: "ℓ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ջ", R: "Я", S: "Ѕ", T: "Τ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Ƶ"
});

// Style 75: Simple Greek
addStyle('love', 'love_simple_greek_2', '', ' 🫰🏻♥️', {
  A: "Λ", B: "Β", C: "Ͻ", D: "Ɗ", E: "Ξ", F: "Ƒ", G: "Ɠ", H: "H", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ø", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "U", V: "V", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "λ", b: "β", c: "Ͻ", d: "ɗ", e: "ξ", f: "ƒ", g: "ɠ", h: "h", i: "ι", j: "ј",
  k: "κ", l: "ℓ", m: "μ", n: "η", o: "ø", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "υ", z: "ƶ"
});

// Style 76: Heart Bold Italic
addStyle('love', 'love_heart_bold_italic', '💗᪲᪲᪲ —͟͞͞', ' Ξズ𓏧𖹭', {
  A: "𝑨", B: "𝑩", C: "𝑪", D: "𝑫", E: "𝑬", F: "𝑭", G: "𝑮", H: "𝑯", I: "𝑰", J: "𝑱",
  K: "𝑲", L: "𝑳", M: "𝑴", N: "𝑵", O: "𝑶", P: "𝑷", Q: "𝑸", R: "𝑹", S: "𝑺", T: "𝑻",
  U: "𝑼", V: "𝑽", W: "𝑾", X: "𝑿", Y: "𝒀", Z: "𝒁",
  a: "𝒂", b: "𝒃", c: "𝒄", d: "𝒅", e: "𝒆", f: "𝒇", g: "𝒈", h: "𝒉", i: "𝒊", j: "𝒋",
  k: "𝒌", l: "𝒍", m: "𝒎", n: "𝒏", o: "𝒐", p: "𝒑", q: "𝒒", r: "𝒓", s: "𝒔", t: "𝒕",
  u: "𝒖", v: "𝒗", w: "𝒘", x: "𝒙", y: "𝒚", z: "𝒛"
});

// Style 77: Arrow Canadian
addStyle('love', 'love_arrow_canadian', '⇝𝄀𝄁𝄃', '𝄀𝄃 𓆩˃ᴗ˂𓆪', {
  A: "ᗩ", B: "ᗷ", C: "ᑕ", D: "ᗪ", E: "ᗴ", F: "ᖴ", G: "Ꮐ", H: "ᕼ", I: "Ꭵ", J: "ᒍ",
  K: "Ꮶ", L: "Ꮮ", M: "ᗰ", N: "ᑎ", O: "ᗝ", P: "ᑭ", Q: "ᑫ", R: "ᖇ", S: "ᔕ", T: "ᖶ",
  U: "ᑌ", V: "ᐯ", W: "ᗯ", X: "᙭", Y: "Ꭹ", Z: "ᘔ",
  a: "ᗩ", b: "ᗷ", c: "ᑕ", d: "ᗪ", e: "ᗴ", f: "ᖴ", g: "Ꮐ", h: "ᕼ", i: "Ꭵ", j: "ᒍ",
  k: "Ꮶ", l: "Ꮮ", m: "ᗰ", n: "ᑎ", o: "ᗝ", p: "ᑭ", q: "ᑫ", r: "ᖇ", s: "ᔕ", t: "ᖶ",
  u: "ᑌ", v: "ᐯ", w: "ᗯ", x: "᙭", y: "Ꭹ", z: "ᘔ"
});

// Style 78: Heart Wave Accent
addStyle('love', 'love_heart_wave_accent', '𓆩💝𓆪 ֶ', ' ִֶָ🐇་༘࿐', {
  A: "A̾", B: "B̾", C: "C̾", D: "D̾", E: "E̾", F: "F̾", G: "G̾", H: "H̾", I: "I̾", J: "J̾",
  K: "K̾", L: "L̾", M: "M̾", N: "N̾", O: "O̾", P: "P̾", Q: "Q̾", R: "R̾", S: "S̾", T: "T̾",
  U: "U̾", V: "V̾", W: "W̾", X: "X̾", Y: "Y̾", Z: "Z̾",
  a: "a̾", b: "b̾", c: "c̾", d: "d̾", e: "e̾", f: "f̾", g: "g̾", h: "h̾", i: "i̾", j: "j̾",
  k: "k̾", l: "l̾", m: "m̾", n: "n̾", o: "o̾", p: "p̾", q: "q̾", r: "r̾", s: "s̾", t: "t̾",
  u: "u̾", v: "v̾", w: "w̾", x: "x̾", y: "y̾", z: "z̾"
});

// Style 79: Miao Star Accent
addStyle('love', 'love_miao_star_accent', '𖹭 ', ' 𖹭࿐', {
  A: "A⨳", B: "B⨳", C: "C⨳", D: "D⨳", E: "E⨳", F: "F⨳", G: "G⨳", H: "H⨳", I: "I⨳", J: "J⨳",
  K: "K⨳", L: "L⨳", M: "M⨳", N: "N⨳", O: "O⨳", P: "P⨳", Q: "Q⨳", R: "R⨳", S: "S⨳", T: "T⨳",
  U: "U⨳", V: "V⨳", W: "W⨳", X: "X⨳", Y: "Y⨳", Z: "Z⨳",
  a: "a⨳", b: "b⨳", c: "c⨳", d: "d⨳", e: "e⨳", f: "f⨳", g: "g⨳", h: "h⨳", i: "i⨳", j: "j⨳",
  k: "k⨳", l: "l⨳", m: "m⨳", n: "n⨳", o: "o⨳", p: "p⨳", q: "q⨳", r: "r⨳", s: "s⨳", t: "t⨳",
  u: "u⨳", v: "v⨳", w: "w⨳", x: "x⨳", y: "y⨳", z: "z⨳"
});

// Style 80: Hand Xi Accent
addStyle('love', 'love_hand_xi_accent', '🫰🏻𖹭', '𖹭(≧ᴗ≦)ᶻ 𝗓 𐰁', {
  A: "A͢", B: "B͢", C: "C͢", D: "D͢", E: "E͢", F: "F͢", G: "G͢", H: "H͢", I: "I͢", J: "J͢",
  K: "K͢", L: "L͢", M: "M͢", N: "N͢", O: "O͢", P: "P͢", Q: "Q͢", R: "R͢", S: "S͢", T: "T͢",
  U: "U͢", V: "V͢", W: "W͢", X: "X͢", Y: "Y͢", Z: "Z͢",
  a: "a͢", b: "b͢", c: "c͢", d: "d͢", e: "e͢", f: "f͢", g: "g͢", h: "h͢", i: "i͢", j: "j͢",
  k: "k͢", l: "l͢", m: "m͢", n: "n͢", o: "o͢", p: "p͢", q: "q͢", r: "r͢", s: "s͢", t: "t͢",
  u: "u͢", v: "v͢", w: "w͢", x: "x͢", y: "y͢", z: "z͢"
});

// Style 81: Star Decorated
addStyle('love', 'love_star_decorated', '☆', '☆𖹭࿐', {
  A: "☆A☆", B: "☆B☆", C: "☆C☆", D: "☆D☆", E: "☆E☆", F: "☆F☆", G: "☆G☆", H: "☆H☆", I: "☆I☆", J: "☆J☆",
  K: "☆K☆", L: "☆L☆", M: "☆M☆", N: "☆N☆", O: "☆O☆", P: "☆P☆", Q: "☆Q☆", R: "☆R☆", S: "☆S☆", T: "☆T☆",
  U: "☆U☆", V: "☆V☆", W: "☆W☆", X: "☆X☆", Y: "☆Y☆", Z: "☆Z☆",
  a: "☆a☆", b: "☆b☆", c: "☆c☆", d: "☆d☆", e: "☆e☆", f: "☆f☆", g: "☆g☆", h: "☆h☆", i: "☆i☆", j: "☆j☆",
  k: "☆k☆", l: "☆l☆", m: "☆m☆", n: "☆n☆", o: "☆o☆", p: "☆p☆", q: "☆q☆", r: "☆r☆", s: "☆s☆", t: "☆t☆",
  u: "☆u☆", v: "☆v☆", w: "☆w☆", x: "☆x☆", y: "☆y☆", z: "☆z☆"
});

// Style 82: LOVE Miao Star
addStyle('love', 'love_miao_star', 'ᴸᴼⱽᴱ『𖹭』', '『𖹭』💗', {
  A: "A⨳", B: "B⨳", C: "C⨳", D: "D⨳", E: "E⨳", F: "F⨳", G: "G⨳", H: "H⨳", I: "I⨳", J: "J⨳",
  K: "K⨳", L: "L⨳", M: "M⨳", N: "N⨳", O: "O⨳", P: "P⨳", Q: "Q⨳", R: "R⨳", S: "S⨳", T: "T⨳",
  U: "U⨳", V: "V⨳", W: "W⨳", X: "X⨳", Y: "Y⨳", Z: "Z⨳",
  a: "a⨳", b: "b⨳", c: "c⨳", d: "d⨳", e: "e⨳", f: "f⨳", g: "g⨳", h: "h⨳", i: "i⨳", j: "j⨳",
  k: "k⨳", l: "l⨳", m: "m⨳", n: "n⨳", o: "o⨳", p: "p⨳", q: "q⨳", r: "r⨳", s: "s⨳", t: "t⨳",
  u: "u⨳", v: "v⨳", w: "w⨳", x: "x⨳", y: "y⨳", z: "z⨳"
});

// Style 83: Cute Flower Cursive
addStyle('love', 'love_cute_flower_cursive', 'ᶜᵘᵗᵉ❁', '𓏧𖹭࿐', {
  A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘", J: "𝓙",
  K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣",
  U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩",
  a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳",
  k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽",
  u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃"
});

// Style 84: Tai Star Accent
addStyle('love', 'love_tai_star_accent', 'ꫂ❁🫰🏻', '*(≧ᴗ≦)', {
  A: "A*", B: "B*", C: "C*", D: "D*", E: "E*", F: "F*", G: "G*", H: "H*", I: "I*", J: "J*",
  K: "K*", L: "L*", M: "M*", N: "N*", O: "O*", P: "P*", Q: "Q*", R: "R*", S: "S*", T: "T*",
  U: "U*", V: "V*", W: "W*", X: "X*", Y: "Y*", Z: "Z*",
  a: "a*", b: "b*", c: "c*", d: "d*", e: "e*", f: "f*", g: "g*", h: "h*", i: "i*", j: "j*",
  k: "k*", l: "l*", m: "m*", n: "n*", o: "o*", p: "p*", q: "q*", r: "r*", s: "s*", t: "t*",
  u: "u*", v: "v*", w: "w*", x: "x*", y: "y*", z: "z*"
});

// Style 85: Arrow Short Stroke
addStyle('love', 'love_arrow_short_stroke', '►►►', '°°♡‼࿐', {
  A: "A̶", B: "B̶", C: "C̶", D: "D̶", E: "E̶", F: "F̶", G: "G̶", H: "H̶", I: "I̶", J: "J̶",
  K: "K̶", L: "L̶", M: "M̶", N: "N̶", O: "O̶", P: "P̶", Q: "Q̶", R: "R̶", S: "S̶", T: "T̶",
  U: "U̶", V: "V̶", W: "W̶", X: "X̶", Y: "Y̶", Z: "Z̶",
  a: "a̶", b: "b̶", c: "c̶", d: "d̶", e: "e̶", f: "f̶", g: "g̶", h: "h̶", i: "i̶", j: "j̶",
  k: "k̶", l: "l̶", m: "m̶", n: "n̶", o: "o̶", p: "p̶", q: "q̶", r: "r̶", s: "s̶", t: "t̶",
  u: "u̶", v: "v̶", w: "w̶", x: "x̶", y: "y̶", z: "z̶"
});

// Style 86: Miao Greek
addStyle('love', 'love_miao_greek', '𓆩𖹭𓆪 ⟆ ', '˚｡ ˃ᴗ˂', {
  a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
  k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ",
  A: "Α", B: "Β", C: "C", D: "Ɗ", E: "Ε", F: "Ƒ", G: "Ɠ", H: "Н", I: "Ι", J: "Ј",
  K: "Κ", L: "ℓ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ջ", R: "Я", S: "Ѕ", T: "Τ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Ƶ"
});

// Style 87: Arabic Miao Sans
addStyle('love', 'love_arabic_miao_sans', '١٥٧٤𖹭', '_˃ᴗ˂☂', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 88: Sparkle Double Struck
addStyle('love', 'love_sparkle_double_struck', '❇︎⋆.', '🦋⃟💗᪲᪲᪲꧂', {
  A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
  K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
  U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ",
  a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
  k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
  u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫"
});

// Style 89: Star Currency
addStyle('love', 'love_star_currency', '⋆⋅☆⋅⋆ ─', '─⋆⋅☆⋅⋆', {
  A: "₳", B: "₲", C: "₵", D: "Đ", E: "₳", F: "₣", G: "₲", H: "Ⱨ", I: "ł", J: "₲",
  K: "₭", L: "Ⱡ", M: "₥", N: "₦", O: "Ø", P: "₱", Q: "Ꝗ", R: "Ɽ", S: "₴", T: "₮",
  U: "Ṳ", V: "ᐯ", W: "₩", X: "Ӿ", Y: "Ɏ", Z: "ƶ",
  a: "₳", b: "₲", c: "₵", d: "đ", e: "₳", f: "₣", g: "₲", h: "Ⱨ", i: "ł", j: "₲",
  k: "₭", l: "Ⱡ", m: "₥", n: "₦", o: "ø", p: "₱", q: "Ꝗ", r: "Ɽ", s: "₴", t: "₮",
  u: "Ṳ", v: "ᐯ", w: "₩", x: "Ӿ", y: "Ɏ", z: "ƶ"
});

// Style 90: Kaomoji Monospace
addStyle('love', 'love_kaomoji_monospace', '˃ᴗ˂ ˚｡?', '? ୧⍤⃝💐', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
  K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
  U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
  k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
  u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣"
});

// Style 91: Heart Egyptian Greek
addStyle('love', 'love_heart_egyptian_greek', '♡𓍯𓏧', '⋆˙⟡ᶜᵘᵗᵉ', {
  A: "Α", B: "Β", C: "Ͻ", D: "Ɗ", E: "Σ", F: "Ƒ", G: "Ɠ", H: "Ν", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
  k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ"
});

// Style 92: Waifu Lambda
addStyle('love', 'love_waifu_lambda', 'ᴡɪꜰu͢ ⧉ͷ', '⧉🦋⃟💗᪲᪲᪲', {
  A: "Λ", B: "ɮ", C: "Ͷ", D: "ᗫ", E: "Ɛ", F: "Ғ", G: "Ϭ", H: "Ӈ", I: "Ꭵ", J: "Ꮰ",
  K: "Ҡ", L: "ᒪ", M: "ᗰ", N: "ͷ", O: "Ө", P: "Ꭾ", Q: "Ϙ", R: "ᖇ", S: "ᔕ", T: "Ƭ",
  U: "Ա", V: "Ỽ", W: "Ꮃ", X: "Ӿ", Y: "ϓ", Z: "ɀ",
  a: "λ", b: "ɮ", c: "Ͷ", d: "ᗫ", e: "Ɛ", f: "ғ", g: "Ϭ", h: "Ӈ", i: "Ꭵ", j: "Ꮰ",
  k: "ҡ", l: "ᒪ", m: "ᗰ", n: "ͷ", o: "Ө", p: "Ꭾ", q: "Ϙ", r: "ᖇ", s: "ᔕ", t: "Ƭ",
  u: "Ա", v: "Ỽ", w: "Ꮃ", x: "Ӿ", y: "ϓ", z: "ɀ"
});

// Style 93: I Love Thai
addStyle('love', 'love_i_love_thai', 'ｉˡᵒᵛᵉ☆⋅', ' ✿☂', {
  a: "ค", b: "๒", c: "ς", d: "ɗ", e: "є", f: "ſ", g: "ɠ", h: "ħ", i: "เ", j: "ʝ",
  k: "ƙ", l: "ɭ", m: "๓", n: "ภ", o: "σ", p: "ρ", q: "๑", r: "я", s: "ร", t: "Շ",
  u: "υ", v: "ש", w: "ω", x: "ẋ", y: "γ", z: "ƶ",
  A: "ค", B: "๒", C: "ς", D: "ɗ", E: "є", F: "ſ", G: "ɠ", H: "ħ", I: "เ", J: "ʝ",
  K: "ƙ", L: "ɭ", M: "๓", N: "ภ", O: "σ", P: "ρ", Q: "๑", R: "я", S: "ร", T: "Շ",
  U: "υ", V: "ש", W: "ω", X: "ẋ", Y: "γ", Z: "ƶ"
});

// Style 94: Dash Negative Circle
addStyle('love', 'love_dash_negative', '🅝─🅐─🅜─🅔 ', ' 𖹭ᴗ˂', {
  A: "🅐", B: "🅑", C: "🅒", D: "🅓", E: "🅔", F: "🅕", G: "🅖", H: "🅗", I: "🅘", J: "🅙",
  K: "🅚", L: "🅛", M: "🅜", N: "🅝", O: "🅞", P: "🅟", Q: "🅠", R: "🅡", S: "🅢", T: "🅣",
  U: "🅤", V: "🅥", W: "🅦", X: "🅧", Y: "🅨", Z: "🅩",
  a: "🅐", b: "🅑", c: "🅒", d: "🅓", e: "🅔", f: "🅕", g: "🅖", h: "🅗", i: "🅘", j: "🅙",
  k: "🅚", l: "🅛", m: "🅜", n: "🅝", o: "🅞", p: "🅟", q: "🅠", r: "🅡", s: "🅢", t: "🅣",
  u: "🅤", v: "🅥", w: "🅦", x: "🅧", y: "🅨", z: "🅩"
});

// Style 95: Butterfly Bold Sans
addStyle('love', 'love_butterfly_bold_sans', '🦋⃟', '⋆˙⟡💗᪲᪲᪲🩹', {
  A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝",
  K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
  U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭",
  a: "𝙖", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝙚", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝙞", j: "𝙟",
  k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝙤", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
  u: "𝙪", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝙮", z: "𝙯"
});

// Style 96: Heart Math Bold
addStyle('love', 'love_heart_math_bold', '𓆩💗᪲᪲᪲𓆪⋆⋅', '.. ִֶָ 🪽་༘࿐', {
  a: "𝛂", b: "𝛃", c: "𝛇", d: "𝛅", e: "𝛆", f: "𝛇", g: "𝛓", h: "𝛑", i: "𝖎", j: "𝖏",
  k: "𝛋", l: "𝛊", m: "𝛍", n: "𝛈", o: "𝛐", p: "𝛒", q: "𝛗", r: "𝛑", s: "𝛔", t: "𝛕",
  u: "𝛖", v: "𝛎", w: "𝛚", x: "𝛘", y: "𝛙", z: "𝛏",
  A: "Α", B: "Β", C: "Γ", D: "Δ", E: "Ε", F: "Ζ", G: "Η", H: "Θ", I: "Ι", J: "Κ",
  K: "Λ", L: "Μ", M: "Ν", N: "Ξ", O: "Ο", P: "Π", Q: "Ρ", R: "Σ", S: "Τ", T: "Υ",
  U: "Φ", V: "Χ", W: "Ψ", X: "Ω", Y: "Α", Z: "Β"
});

// Style 97: Arrow Square Accent
addStyle('love', 'love_arrow_square_accent', '➨⟆', '⟅ᯓ♡', {
  A: "ᴬ▢", B: "ᴮ▢", C: "ᶜ▢", D: "ᴰ▢", E: "ᴱ▢", F: "ᶠ▢", G: "ᴳ▢", H: "ᴴ▢", I: "ᴵ▢", J: "ᴶ▢",
  K: "ᴷ▢", L: "ᴸ▢", M: "ᴹ▢", N: "ᴺ▢", O: "ᴼ▢", P: "ᴾ▢", Q: "ᵠ▢", R: "ᴿ▢", S: "ˢ▢", T: "ᵀ▢",
  U: "ᵁ▢", V: "ⱽ▢", W: "ᵂ▢", X: "ˣ▢", Y: "ʸ▢", Z: "ᶻ▢",
  a: "ᵃ▢", b: "ᵇ▢", c: "ᶜ▢", d: "ᵈ▢", e: "ᵉ▢", f: "ᶠ▢", g: "ᵍ▢", h: "ʰ▢", i: "ⁱ▢", j: "ʲ▢",
  k: "ᵏ▢", l: "ˡ▢", m: "ᵐ▢", n: "ⁿ▢", o: "ᵒ▢", p: "ᵖ▢", q: "ᵠ▢", r: "ʳ▢", s: "ˢ▢", t: "ᵗ▢",
  u: "ᵘ▢", v: "ᵛ▢", w: "ʷ▢", x: "ˣ▢", y: "ʸ▢", z: "ᶻ▢"
});

// Style 98: Japanese Brackets
addStyle('love', 'love_japanese_brackets', '亗【', '】𓇢𓆸', {
  A: "【A】", B: "【B】", C: "【C】", D: "【D】", E: "【E】", F: "【F】", G: "【G】", H: "【H】", I: "【I】", J: "【J】",
  K: "【K】", L: "【L】", M: "【M】", N: "【N】", O: "【O】", P: "【P】", Q: "【Q】", R: "【R】", S: "【S】", T: "【T】",
  U: "【U】", V: "【V】", W: "【W】", X: "【X】", Y: "【Y】", Z: "【Z】",
  a: "【a】", b: "【b】", c: "【c】", d: "【d】", e: "【e】", f: "【f】", g: "【g】", h: "【h】", i: "【i】", j: "【j】",
  k: "【k】", l: "【l】", m: "【m】", n: "【n】", o: "【o】", p: "【p】", q: "【q】", r: "【r】", s: "【s】", t: "【t】",
  u: "【u】", v: "【v】", w: "【w】", x: "【x】", y: "【y】", z: "【z】"
});

// Style 99: Baby Greek Sans
addStyle('love', 'love_baby_greek_sans', 'Βαвγܔ ❇︎', '⋆˙⟡🧸', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤̆̈", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 100: Koppa Subscript
addStyle('love', 'love_koppa_subscript', 'ϟ ', ' ϟ 💘', {
  A: "Ḁͦ", B: "B̥ͦ", C: "C̥ͦ", D: "D̥ͦ", E: "E̥ͦ", F: "F̥ͦ", G: "G̥ͦ", H: "H̥ͦ", I: "I̥ͦ", J: "J̥ͦ",
  K: "K̥ͦ", L: "L̥ͦ", M: "M̥ͦ", N: "N̥ͦ", O: "O̥ͦ", P: "P̥ͦ", Q: "Q̥ͦ", R: "R̥ͦ", S: "S̥ͦ", T: "T̥ͦ",
  U: "U̥ͦ", V: "V̥ͦ", W: "W̥ͦ", X: "X̥ͦ", Y: "Y̥ͦ", Z: "Z̥ͦ",
  a: "ḁͦ", b: "b̥ͦ", c: "c̥ͦ", d: "d̥ͦ", e: "e̥ͦ", f: "f̥ͦ", g: "g̥ͦ", h: "h̥ͦ", i: "i̥ͦ", j: "j̥ͦ",
  k: "k̥ͦ", l: "l̥ͦ", m: "m̥ͦ", n: "n̥ͦ", o: "o̥ͦ", p: "p̥ͦ", q: "q̥ͦ", r: "r̥ͦ", s: "s̥ͦ", t: "t̥ͦ",
  u: "u̥ͦ", v: "v̥ͦ", w: "w̥ͦ", x: "x̥ͦ", y: "y̥ͦ", z: "z̥ͦ"
});

// Style 101: Gothic Script
addStyle('love', 'love_gothic_script', '㋚ ', '_𝐃𝐚𝐫𝐥𖧷𝐢𝐧𝐠⋆｡˚💗', {
  A: "𐌰", B: "𐌱", C: "𐌲", D: "𐌳", E: "𐌴", F: "𐍆", G: "𐌾", H: "𐌷", I: "𐌹", J: "𐌻",
  K: "𐌺", L: "𐍊", M: "𐌼", N: "𐌽", O: "𐍈", P: "𐍉", Q: "𐍁", R: "𐍂", S: "𐍃", T: "𐍄",
  U: "𐍀", V: "𝚅", W: "𐌸", X: "𐍇", Y: "𐍅", Z: "𐌶",
  a: "𐌰", b: "𐌱", c: "𐌲", d: "𐌳", e: "𐌴", f: "𐍆", g: "𐌾", h: "𐌷", i: "𐌹", j: "𐌻",
  k: "𐌺", l: "𐍊", m: "𐌼", n: "𐌽", o: "𐍈", p: "𐍉", q: "𐍁", r: "𐍂", s: "𐍃", t: "𐍄",
  u: "𐍀", v: "𝚅", w: "𐌸", x: "𐍇", y: "𐍅", z: "𐌶"
});

// Style 102: Cute Pie Greek
addStyle('love', 'love_cute_pie_greek', 'C̶u̶t̶i̶e̶ P̶i̶e̶ 𓆩𓆪', ' 𓆩𓆪💕⃝🕊️', {
  a: "α", b: "в", c: "ċ", d: "ɗ", e: "є", f: "ƒ", g: "ĝ", h: "ħ", i: "ï", j: "ʝ",
  k: "ƙ", l: "ĺ", m: "ɱ", n: "ռ", o: "ο", p: "ք", q: "զ", r: "ř", s: "ֆ", t: "թ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ",
  A: "Α", B: "Β", C: "Ċ", D: "Ɗ", E: "Є", F: "Ƒ", G: "Ĝ", H: "Ħ", I: "Ï", J: "ʝ",
  K: "Ƙ", L: "Ĺ", M: "Μ", N: "Ռ", O: "Ο", P: "Ք", Q: "Ջ", R: "Ř", S: "Ֆ", T: "Թ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Զ"
});

// Style 103: Butterfly Fly Cursive
addStyle('love', 'love_butterfly_fly_cursive', '𝑩𐦍𝒕𝒕𝒆𝒓 𝒇𝒍𝒚 🦋⃟', ' ⋆⋅☆࿐', {
  A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘", J: "𝓙",
  K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣",
  U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩",
  a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳",
  k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽",
  u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃"
});

// Style 104: Star Monospace
addStyle('love', 'love_star_monospace', '꧁⋆₊˚✧ ', ' ✧˚₊⋆꧂ ᶠᵒʳᵉᵛᵉʳ ツ', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
  K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚃", T: "𝚄",
  U: "𝚅", V: "𝚆", W: "𝚇", X: "𝚈", Y: "𝚉", Z: "𝙰",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
  k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚝", t: "𝚞",
  u: "𝚟", v: "𝚠", w: "𝚡", x: "𝚢", y: "𝚣", z: "𝚊"
});

// Style 105: Flower Monospace
addStyle('love', 'love_flower_monospace', 'ҩᴜᥱ֟፝ᥱɴ ⟡˙⋆˖ ☘︎ ', ' ☘︎ ˖⋆˙⟡࿐', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
  K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
  U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
  k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
  u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣"
});

// Style 106: Lover Bold Italic
addStyle('love', 'love_lover_bold_italic', 'ℒℴνℯʳ̤̮  -`♡´-', ' -`♡´-', {
  A: "𝑨", B: "𝑩", C: "𝑪", D: "𝑫", E: "𝑬", F: "𝑭", G: "𝑮", H: "𝑯", I: "𝑰", J: "𝑱",
  K: "𝑲", L: "𝑳", M: "𝑴", N: "𝑵", O: "𝑶", P: "𝑷", Q: "𝑸", R: "𝑹", S: "𝑺", T: "𝑻",
  U: "𝑼", V: "𝑽", W: "𝑾", X: "𝑿", Y: "𝒀", Z: "𝒁",
  a: "𝒂", b: "𝒃", c: "𝒄", d: "𝒅", e: "𝒆", f: "𝒇", g: "𝒈", h: "𝒉", i: "𝒊", j: "𝒋",
  k: "𝒌", l: "𝒍", m: "𝒎", n: "𝒏", o: "𝒐", p: "𝒑", q: "𝒒", r: "𝒓", s: "𝒔", t: "𝒕",
  u: "𝒖", v: "𝒗", w: "𝒘", x: "𝒙", y: "𝒚", z: "𝒛"
});

// Style 107: Forever Fraktur
addStyle('love', 'love_forever_fraktur', ' ᶠᵒʳᵉᵛᵉʳ̤̮ 𓆝 ｡.˚', ' ⭑.ᐟ', {
  a: "𝖆", b: "𝖇", c: "𝖈", d: "𝖉", e: "𝖊", f: "𝖋", g: "𝖌", h: "𝖍", i: "𝖎", j: "𝖏",
  k: "𝖐", l: "𝖑", m: "𝖒", n: "𝖓", o: "𝖔", p: "𝖕", q: "𝖖", r: "𝖗", s: "𝖘", t: "𝖙",
  u: "𝖚", v: "𝖛", w: "𝖜", x: "𝖝", y: "𝖞", z: "𝖟",
  A: "𝕬", B: "𝕭", C: "𝕮", D: "𝕯", E: "𝕰", F: "𝕱", G: "𝕲", H: "𝕳", I: "𝕴", J: "𝕵",
  K: "𝕶", L: "𝕷", M: "𝕸", N: "𝕹", O: "𝕺", P: "𝕻", Q: "𝕼", R: "𝕽", S: "𝕾", T: "𝕿",
  U: "𝖀", V: "𝖁", W: "𝖂", X: "𝖃", Y: "𝖄", Z: "𝖅"
});

// Style 108: Flower Cherokee
addStyle('love', 'love_flower_cherokee', '˗ˏˋ♡ﮩ٨ـ', 'ـﮩ٨ـ♡ˎˊ˗', {
  A: "Ꭺ", B: "Ᏼ", C: "Ꮯ", D: "Ꭰ", E: "Ꭼ", F: "Ꮀ", G: "Ꮐ", H: "Ꮋ", I: "Ꭵ", J: "Ꭻ",
  K: "Ꮶ", L: "Ꮮ", M: "Ꮇ", N: "Ꮑ", O: "Ꮎ", P: "Ꮲ", Q: "Ꭴ", R: "Ꮢ", S: "Ꮪ", T: "Ꭲ",
  U: "Ꮼ", V: "Ꮙ", W: "Ꮗ", X: "X", Y: "Ꮍ", Z: "Ꮓ",
  a: "Ꭺ", b: "Ᏼ", c: "Ꮯ", d: "Ꭰ", e: "Ꭼ", f: "Ꮀ", g: "Ꮐ", h: "Ꮋ", i: "Ꭵ", j: "Ꭻ",
  k: "Ꮶ", l: "Ꮮ", m: "Ꮇ", n: "Ꮑ", o: "Ꮎ", p: "Ꮲ", q: "Ꭴ", r: "Ꮢ", s: "Ꮪ", t: "Ꭲ",
  u: "Ꮼ", v: "Ꮙ", w: "Ꮗ", x: "X", y: "Ꮍ", z: "Ꮓ"
});

// Style 109: Tea Canadian
addStyle('love', 'love_tea_canadian', '', ' ☕︎ˎˊ˗', {
  a: "ᥲ", b: "ᑲ", c: "ᥴ", d: "ᑯ", e: "ᥱ", f: "ᖴ", g: "ᧁ", h: "ᕼ", i: "Ꭵ", j: "ᒎ",
  k: "ᛕ", l: "ᥣ", m: "ᴍ", n: "ᥒ", o: "᥆", p: "ρ", q: "ᑫ", r: "ᖇ", s: "ᔑ", t: "ᥴ",
  u: "ᑌ", v: "ᐯ", w: "᭙", x: "᥊", y: "ᥒ", z: "ɀ",
  A: "ᥲ", B: "ᑲ", C: "ᥴ", D: "ᑯ", E: "ᥱ", F: "ᖴ", G: "ᧁ", H: "ᕼ", I: "Ꭵ", J: "ᒎ",
  K: "ᛕ", L: "ᥣ", M: "ᴍ", N: "ᥒ", O: "᥆", P: "ρ", Q: "ᑫ", R: "ᖇ", S: "ᔑ", T: "ᥴ",
  U: "ᑌ", V: "ᐯ", W: "᭙", X: "᥊", Y: "ᥒ", Z: "ɀ"
});

// Style 110: Cloud Sans
addStyle('love', 'love_cloud_sans', '༒☁︎ ⋆ ｡˚', ' ˚｡⋆ ☁︎༒', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 111: Cute Hittite Double Struck
addStyle('love', 'love_cute_hittite_double', 'ᶜᵘᵗᵉ 𔓎 ₊˚·⛥ ', ' ⛥·˚₊ ✔', {
  A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
  K: "𝕂", L: "𝕃", M: "𝕄", N: "𝕟", O: "𝕠", P: "𝕡", Q: "𝕢", R: "𝕣", S: "𝕤", T: "𝕥",
  U: "𝕦", V: "𝕧", W: "𝕨", X: "𝕩", Y: "𝕪", Z: "𝕫",
  a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
  k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
  u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫"
});

// Style 112: Heart Canadian
addStyle('love', 'love_heart_canadian', '˗ˏˋ♡·˚₊', '₊˚·♡ˎˊ˗ ✿࿐', {
  a: "ᥲ", b: "ᑲ", c: "ᥴ", d: "ᑯ", e: "ᥱ", f: "ᖴ", g: "ᧁ", h: "ᕼ", i: "Ꭵ", j: "ᒎ",
  k: "ᛕ", l: "ᥣ", m: "ᴍ", n: "ᥒ", o: "᥆", p: "ρ", q: "ᑫ", r: "ᖇ", s: "ᔑ", t: "ᥴ",
  u: "ᑌ", v: "ᐯ", w: "᭙", x: "᥊", y: "ᥒ", z: "ɀ",
  A: "ᥲ", B: "ᑲ", C: "ᥴ", D: "ᑯ", E: "ᥱ", F: "ᖴ", G: "ᧁ", H: "ᕼ", I: "Ꭵ", J: "ᒎ",
  K: "ᛕ", L: "ᥣ", M: "ᴍ", N: "ᥒ", O: "᥆", P: "ρ", Q: "ᑫ", R: "ᖇ", S: "ᔑ", T: "ᥴ",
  U: "ᑌ", V: "ᐯ", W: "᭙", X: "᥊", Y: "ᥒ", Z: "ɀ"
});

// Style 113: Star Flower Monospace
addStyle('love', 'love_star_flower_monospace', '˗ˏ⛥⋆˙𓍊 ', ' 𓍊˙⋆⛥ˎ˗', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
  K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
  U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
  k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
  u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣"
});

// Style 114: Crazy Greek
addStyle('love', 'love_crazy_greek', 'ᶜʳᵃᶻʸ ଳᯓ ', ' ᯓଳ ✔', {
  A: "Δ", B: "β", C: "C", D: "Đ", E: "Σ", F: "Ϝ", G: "Ꮆ", H: "Ħ", I: "I", J: "J",
  K: "К", L: "Ꮭ", M: "M", N: "П", O: "Ø", P: "Ƥ", Q: "Ǫ", R: "Ŗ", S: "Ѕ", T: "Ͳ",
  U: "Ц", V: "Ѵ", W: "Ш", X: "X", Y: "Ψ", Z: "Ẕ",
  a: "δ", b: "β", c: "c", d: "đ", e: "ε", f: "ϝ", g: "g", h: "ħ", i: "ι", j: "j",
  k: "κ", l: "l", m: "m", n: "η", o: "ø", p: "ƥ", q: "ǫ", r: "ŗ", s: "s", t: "t",
  u: "ц", v: "ν", w: "ш", x: "x", y: "ψ", z: "ẑ"
});

// Style 115: Yin Yang Canadian
addStyle('love', 'love_yin_yang_canadian', '⊹˚₊☯ ', ' ☯𓂁﹏𓊝﹏₊˚⊹', {
  A: "ᗩ", B: "ᗷ", C: "ᑕ", D: "ᗪ", E: "ᗴ", F: "ᖴ", G: "Ꮐ", H: "ᕼ", I: "Ꭵ", J: "ᒍ",
  K: "Ꮶ", L: "Ꮮ", M: "ᗰ", N: "ᑎ", O: "ᗝ", P: "ᑭ", Q: "ᑫ", R: "ᖇ", S: "ᔕ", T: "ᖶ",
  U: "ᑌ", V: "ᐯ", W: "ᗯ", X: "᙭", Y: "Ꭹ", Z: "ᘔ",
  a: "ᗩ", b: "ᗷ", c: "ᑕ", d: "ᗪ", e: "ᗴ", f: "ᖴ", g: "Ꮐ", h: "ᕼ", i: "Ꭵ", j: "ᒍ",
  k: "Ꮶ", l: "Ꮮ", m: "ᗰ", n: "ᑎ", o: "ᗝ", p: "ᑭ", q: "ᑫ", r: "ᖇ", s: "ᔕ", t: "ᖶ",
  u: "ᑌ", v: "ᐯ", w: "ᗯ", x: "᙭", y: "Ꭹ", z: "ᘔ"
});

// Style 116: Double Greek
addStyle('love', 'love_double_greek', '༒⊹˚⚝', '⚝˚⊹༒', {
  A: "Δ", B: "β", C: "C", D: "Đ", E: "Σ", F: "Ϝ", G: "Ꮆ", H: "Ħ", I: "I", J: "J",
  K: "К", L: "Ꮭ", M: "M", N: "П", O: "Ø", P: "Ƥ", Q: "Ǫ", R: "Ŗ", S: "Ѕ", T: "Ͳ",
  U: "Ц", V: "Ѵ", W: "Ш", X: "X", Y: "Ψ", Z: "Ẕ",
  a: "δ", b: "β", c: "c", d: "đ", e: "ε", f: "ϝ", g: "g", h: "ħ", i: "ι", j: "j",
  k: "κ", l: "l", m: "m", n: "η", o: "ø", p: "ƥ", q: "ǫ", r: "ŗ", s: "s", t: "t",
  u: "ц", v: "ν", w: "ш", x: "x", y: "ψ", z: "ẑ"
});

// Style 117: Panda Italic Math
addStyle('love', 'love_panda_italic_math', '🐼⃞ᴵᵐ•', '᭄࿐', {
  A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
  K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
});

// Style 21: Victory Monospace
addStyle('gamer', 'gamer_victory_monospace', '✌︎︎₊˚⊹', '⊹˚₊✌︎︎⁷⁷⁷', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
  K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
  U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
  k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
  u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣"
});

// Style 22: Chinese Superscript
addStyle('gamer', 'gamer_chinese_superscript', '么𓂃', '𓂃么⁴⁴⁴', {
  a: "ᵃ", b: "ᵇ", c: "ᶜ", d: "ᵈ", e: "ᵉ", f: "ᶠ", g: "ᵍ", h: "ʰ", i: "ⁱ", j: "ʲ",
  k: "ᵏ", l: "ˡ", m: "ᵐ", n: "ⁿ", o: "ᵒ", p: "ᵖ", q: "ᑫ", r: "ʳ", s: "ˢ", t: "ᵗ",
  u: "ᵘ", v: "ᵛ", w: "ʷ", x: "ˣ", y: "ʸ", z: "ᶻ",
  A: "ᴬ", B: "ᴮ", C: "ᶜ", D: "ᴰ", E: "ᴱ", F: "ᶠ", G: "ᴳ", H: "ᴴ", I: "ᴵ", J: "ᴶ",
  K: "ᴷ", L: "ᴸ", M: "ᴹ", N: "ᴺ", O: "ᴼ", P: "ᴾ", Q: "ᑫ", R: "ᴿ", S: "ˢ", T: "ᵀ",
  U: "ᵁ", V: "ⱽ", W: "ᵂ", X: "ˣ", Y: "ʸ", Z: "ᶻ"
});

// Style 23: Cross Small Caps
addStyle('gamer', 'gamer_cross_small_caps', '✗ ', ' ✗ⓥ', {
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 24: Egyptian Skull Circled
addStyle('gamer', 'gamer_egyptian_skull_circled', '𓆩☠𓆪', '_ⓎⓉ', {
  A: "Ⓐ", B: "Ⓑ", C: "Ⓒ", D: "Ⓓ", E: "Ⓔ", F: "Ⓕ", G: "Ⓖ", H: "Ⓗ", I: "Ⓘ", J: "Ⓙ",
  K: "Ⓚ", L: "Ⓛ", M: "Ⓜ", N: "Ⓝ", O: "Ⓞ", P: "Ⓟ", Q: "Ⓠ", R: "Ⓡ", S: "Ⓢ", T: "Ⓣ",
  U: "Ⓤ", V: "Ⓥ", W: "Ⓦ", X: "Ⓧ", Y: "Ⓨ", Z: "Ⓩ",
  a: "ⓐ", b: "ⓑ", c: "ⓒ", d: "ⓓ", e: "ⓔ", f: "ⓕ", g: "ⓖ", h: "ⓗ", i: "ⓘ", j: "ⓙ",
  k: "ⓚ", l: "ⓛ", m: "ⓜ", n: "ⓝ", o: "ⓞ", p: "ⓟ", q: "ⓠ", r: "ⓡ", s: "ⓢ", t: "ⓣ",
  u: "ⓤ", v: "ⓥ", w: "ⓦ", x: "ⓧ", y: "ⓨ", z: "ⓩ"
});

// Style 25: Tibetan Dot Small Caps
addStyle('gamer', 'gamer_tibetan_dot_small_caps', '༺.ᐟ', '.ᐟ༻⁰⁷', {
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 26: Star Sans Serif
addStyle('gamer', 'gamer_star_sans_serif', '꧁༒⛧', '⛧༒꧂', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 27: Star Circled
addStyle('gamer', 'gamer_star_circled', '꧁༒☯', '☯༒꧂', {
  A: "Ⓐ", B: "Ⓑ", C: "Ⓒ", D: "Ⓓ", E: "Ⓔ", F: "Ⓕ", G: "Ⓖ", H: "Ⓗ", I: "Ⓘ", J: "Ⓙ",
  K: "Ⓚ", L: "Ⓛ", M: "Ⓜ", N: "Ⓝ", O: "Ⓞ", P: "Ⓟ", Q: "Ⓠ", R: "Ⓡ", S: "Ⓢ", T: "Ⓣ",
  U: "Ⓤ", V: "Ⓥ", W: "Ⓦ", X: "Ⓧ", Y: "Ⓨ", Z: "Ⓩ",
  a: "ⓐ", b: "ⓑ", c: "ⓒ", d: "ⓓ", e: "ⓔ", f: "ⓕ", g: "ⓖ", h: "ⓗ", i: "ⓘ", j: "ⓙ",
  k: "ⓚ", l: "ⓛ", m: "ⓜ", n: "ⓝ", o: "ⓞ", p: "ⓟ", q: "ⓠ", r: "ⓡ", s: "ⓢ", t: "ⓣ",
  u: "ⓤ", v: "ⓥ", w: "ⓦ", x: "ⓧ", y: "ⓨ", z: "ⓩ"
});

// Style 28: Simple Monospace
addStyle('gamer', 'gamer_simple_monospace', 'ⓥ ', ' 모', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
  K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
  U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
  k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
  u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣"
});

// Style 29: Hittite Wave Accent
addStyle('gamer', 'gamer_hittite_wave_accent', '𒆜', '𒆜⁰⁷', {
  A: "A̾", B: "B̾", C: "C̾", D: "D̾", E: "E̾", F: "F̾", G: "G̾", H: "H̾", I: "I̾", J: "J̾",
  K: "K̾", L: "L̾", M: "M̾", N: "N̾", O: "O̾", P: "P̾", Q: "Q̾", R: "R̾", S: "S̾", T: "T̾",
  U: "U̾", V: "V̾", W: "W̾", X: "X̾", Y: "Y̾", Z: "Z̾",
  a: "a̾", b: "b̾", c: "c̾", d: "d̾", e: "e̾", f: "f̾", g: "g̾", h: "h̾", i: "i̾", j: "j̾",
  k: "k̾", l: "l̾", m: "m̾", n: "n̾", o: "o̾", p: "p̾", q: "q̾", r: "r̾", s: "s̾", t: "t̾",
  u: "u̾", v: "v̾", w: "w̾", x: "x̾", y: "y̾", z: "z̾"
});

// Style 30: Hittite Negative Circle
addStyle('gamer', 'gamer_hittite_negative_circle', '𒆜┋ ̤̮', ' ̤̮ ┋𒆜࿐', {
  A: "🅐 ̤̮", B: "🅑 ̤̮", C: "🅒 ̤̮", D: "🅓 ̤̮", E: "🅔 ̤̮", F: "🅕 ̤̮", G: "🅖 ̤̮", H: "🅗 ̤̮", I: "🅘 ̤̮", J: "🅙 ̤̮",
  K: "🅚 ̤̮", L: "🅛 ̤̮", M: "🅜 ̤̮", N: "🅝 ̤̮", O: "☻ ̤̮", P: "🅟 ̤̮", Q: "🅠 ̤̮", R: "🅡 ̤̮", S: "🅢 ̤̮", T: "🅣 ̤̮",
  U: "🅤 ̤̮", V: "🅥 ̤̮", W: "🅦 ̤̮", X: "🅧 ̤̮", Y: "🅨 ̤̮", Z: "🅩 ̤̮",
  a: "🅐 ̤̮", b: "🅑 ̤̮", c: "🅒 ̤̮", d: "🅓 ̤̮", e: "🅔 ̤̮", f: "🅕 ̤̮", g: "🅖 ̤̮", h: "🅗 ̤̮", i: "🅘 ̤̮", j: "🅙 ̤̮",
  k: "🅚 ̤̮", l: "🅛 ̤̮", m: "🅜 ̤̮", n: "🅝 ̤̮", o: "☻ ̤̮", p: "🅟 ̤̮", q: "🅠 ̤̮", r: "🅡 ̤̮", s: "🅢 ̤̮", t: "🅣 ̤̮",
  u: "🅤 ̤̮", v: "🅥 ̤̮", w: "🅦 ̤̮", x: "🅧 ̤̮", y: "🅨 ̤̮", z: "🅩 ̤̮"
});

// Style 31: Kaomoji Circular Accent
addStyle('gamer', 'gamer_kaomoji_circular_accent', '༺メ ', ' メ༻', {
  A: "ᴬ⃠", B: "ᴮ⃠", C: "ᶜ⃠", D: "ᴰ⃠", E: "ᴱ⃠", F: "ᶠ⃠", G: "ᴳ⃠", H: "ᴴ⃠", I: "ᴵ⃠", J: "ᴶ⃠",
  K: "ᴷ⃠", L: "ᴸ⃠", M: "ᴹ⃠", N: "ᴺ⃠", O: "ᴼ⃠", P: "ᴾ⃠", Q: "ᵠ⃠", R: "ᴿ⃠", S: "ˢ⃠", T: "ᵀ⃠",
  U: "ᵁ⃠", V: "ⱽ⃠", W: "ᵂ⃠", X: "ˣ⃠", Y: "ʸ⃠", Z: "ᶻ⃠",
  a: "ᵃ⃠", b: "ᵇ⃠", c: "ᶜ⃠", d: "ᵈ⃠", e: "ᵉ⃠", f: "ᶠ⃠", g: "ᵍ⃠", h: "ʰ⃠", i: "ⁱ⃠", j: "ʲ⃠",
  k: "ᵏ⃠", l: "ˡ⃠", m: "ᵐ⃠", n: "ⁿ⃠", o: "ᵒ⃠", p: "ᵖ⃠", q: "ᑫ⃠", r: "ʳ⃠", s: "ˢ⃠", t: "ᵗ⃠",
  u: "ᵘ⃠", v: "ᵛ⃠", w: "ʷ⃠", x: "ˣ⃠", y: "ʸ⃠", z: "ᶻ⃠"
});

// Style 32: Warning Double Struck
addStyle('gamer', 'gamer_warning_double_struck', '༒⚠', '⚠༒', {
  a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
  k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
  u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫",
  A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
  K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
  U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ"
});

// Style 33: Cross Italic Math
addStyle('gamer', 'gamer_cross_italic_math', '╬⊰⚜', '⚜⊱╬', {
  A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
  K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
});

// Style 34: Umbrella Greek
addStyle('gamer', 'gamer_umbrella_greek', '*☂⊹˚', '_☂ˎˊ˗࿐', {
  a: "α", b: "в", c: "ċ", d: "ɗ", e: "є", f: "ƒ", g: "ĝ", h: "ħ", i: "ï", j: "ʝ",
  k: "ƙ", l: "ĺ", m: "м", n: "ռ", o: "ο", p: "ք", q: "զ", r: "ř", s: "ֆ", t: "թ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ժ",
  A: "Α", B: "Β", C: "Ċ", D: "Ɗ", E: "Є", F: "Ƒ", G: "Ĝ", H: "Ħ", I: "Ï", J: "ʝ",
  K: "Ƙ", L: "Ĺ", M: "Μ", N: "Ռ", O: "Ο", P: "Ք", Q: "Ջ", R: "Ř", S: "Ֆ", T: "Թ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Զ"
});

// Style 35: Prime Sans
addStyle('gamer', 'gamer_prime_sans', 'ᵖʳⁱᵐᵉ_', '_모', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤̆̈", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 36: Sans Prime
addStyle('gamer', 'gamer_sans_prime', '', '_ᵖʳⁱᵐᵉ', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤̆̈", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 37: Simple Small Caps with V
addStyle('gamer', 'gamer_simple_small_caps_v', '', 'ⓥ', {
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 38: V Small Caps V
addStyle('gamer', 'gamer_v_small_caps_v', '༺ⓥ', 'ⓥ༻', {
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 39: Star Monospace Check
addStyle('gamer', 'gamer_star_monospace_check', '★彡_', '_彡★✓', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
  K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
  U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
  k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
  u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣"
});

// Style 40: Dot Star Monospace
addStyle('gamer', 'gamer_dot_star_monospace', '˚｡⋆', '_├ ┱ ⋯', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
  K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
  U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
  k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
  u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣"
});

// Style 41: Arrow Cursive YT
addStyle('gamer', 'gamer_arrow_cursive_yt', '˚❥━━━»', '«━━━❥˚ʏᴛ', {
  A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘", J: "𝓙",
  K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣",
  U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩",
  a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳",
  k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽",
  u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃"
});

// Style 42: Simple Small Caps YT
addStyle('gamer', 'gamer_simple_small_caps_yt', '', ' ʏᴛ ✓', {
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 43: Yin Yang Lambda V
addStyle('gamer', 'gamer_yin_yang_lambda_v', '『☯', '☯』ⓥ', {
  A: "Λ", B: "ɮ", C: "Ͷ", D: "ᗫ", E: "Σ", F: "Ғ", G: "Ɠ", H: "Ӈ", I: "Ί", J: "J",
  K: "Ҡ", L: "Ŀ", M: "M", N: "П", O: "Ø", P: "Ƥ", Q: "Ǫ", R: "Ʀ", S: "Ѕ", T: "Ͳ",
  U: "Ц", V: "Ѵ", W: "Ш", X: "X", Y: "¥", Z: "Ż",
  a: "λ", b: "ɫ", c: "Ϟ", d: "ᒪ", e: "σ", f: "ғ", g: "ɠ", h: "һ", i: "ι", j: "ʝ",
  k: "ҡ", l: "ŀ", m: "ṃ", n: "п", o: "ø", p: "ƥ", q: "ǫ", r: "ʀ", s: "ѕ", t: "ʇ",
  u: "ц", v: "ѵ", w: "ш", x: "χ", y: "¥", z: "ż"
});

// Style 44: Star Double Struck
addStyle('gamer', 'gamer_star_double_struck', '꧁༺', '༻꧂', {
  A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
  K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
  U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ",
  a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
  k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
  u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫"
});

// Style 45: Sniper Sans
addStyle('gamer', 'gamer_sniper_sans', 'ꜱɴɪᴘᴇʀメ', 'メ╬࿐', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤̆̈", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 46: Smile Sans
addStyle('gamer', 'gamer_smile_sans', 'Sмιℓєメ☺︎', '☺︎メ࿐', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤̆̈", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 47: Arrow Superscript Accent
addStyle('gamer', 'gamer_arrow_superscript_accent', '⇝░', '░⇜모', {
  A: "ᴬ͎", B: "ᴮ͎", C: "ᶜ͎", D: "ᴰ͎", E: "ᴱ͎", F: "ᶠ͎", G: "ᴳ͎", H: "ᴴ͎", I: "ᴵ͎", J: "ᴶ͎",
  K: "ᴷ͎", L: "ᴸ͎", M: "ᴹ͎", N: "ᴺ͎", O: "ᴼ͎", P: "ᴾ͎", Q: "ᵠ͎", R: "ᴿ͎", S: "ˢ͎", T: "ᵀ͎",
  U: "ᵁ͎", V: "ⱽ͎", W: "ᵂ͎", X: "ˣ͎", Y: "ʸ͎", Z: "ᶻ͎",
  a: "ᵃ͎", b: "ᵇ͎", c: "ᶜ͎", d: "ᵈ͎", e: "ᵉ͎", f: "ᶠ͎", g: "ᵍ͎", h: "ʰ͎", i: "ⁱ͎", j: "ʲ͎",
  k: "ᵏ͎", l: "ˡ͎", m: "ᵐ͎", n: "ⁿ͎", o: "ᵒ͎", p: "ᵖ͎", q: "ᑫ͎", r: "ʳ͎", s: "ˢ͎", t: "ᵗ͎",
  u: "ᵘ͎", v: "ᵛ͎", w: "ʷ͎", x: "ˣ͎", y: "ʸ͎", z: "ᶻ͎"
});

// Style 48: Yin Yang Double Struck Accent
addStyle('gamer', 'gamer_yin_yang_double_struck_accent', '༒☯⃟', '⃟☯༒', {
  a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
  k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
  u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫",
  A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
  K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
  U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ"
});

// Style 49: OP Negative Circle
addStyle('gamer', 'gamer_op_negative_circle', 'O͢P͢༺»', '«༻', {
  A: "🅐", B: "🅑", C: "🅒", D: "🅓", E: "🅔", F: "🅕", G: "🅖", H: "🅗", I: "🅘", J: "🅙",
  K: "🅚", L: "🅛", M: "🅜", N: "🅝", O: "🅞", P: "🅟", Q: "🅠", R: "🅡", S: "🅢", T: "🅣",
  U: "🅤", V: "🅥", W: "🅦", X: "🅧", Y: "🅨", Z: "🅩",
  a: "🅐", b: "🅑", c: "🅒", d: "🅓", e: "🅔", f: "🅕", g: "🅖", h: "🅗", i: "🅘", j: "🅙",
  k: "🅚", l: "🅛", m: "🅜", n: "🅝", o: "🅞", p: "🅟", q: "🅠", r: "🅡", s: "🅢", t: "🅣",
  u: "🅤", v: "🅥", w: "🅦", x: "🅧", y: "🅨", z: "🅩"
});

// Style 50: Box Squared Letters
addStyle('gamer', 'gamer_box_squared_letters', '░', '░', {
  A: "🄰", B: "🄱", C: "🄲", D: "🄳", E: "🄴", F: "🄵", G: "🄶", H: "🄷", I: "🄸", J: "🄹",
  K: "🄺", L: "🄻", M: "🄼", N: "🄽", O: "🄾", P: "🄿", Q: "🅀", R: "🅁", S: "🅂", T: "🅃",
  U: "🅄", V: "🅅", W: "🅆", X: "🅇", Y: "🅈", Z: "🅉",
  a: "🄰", b: "🄱", c: "🄲", d: "🄳", e: "🄴", f: "🄵", g: "🄶", h: "🄷", i: "🄸", j: "🄹",
  k: "🄺", l: "🄻", m: "🄼", n: "🄽", o: "🄾", p: "🄿", q: "🅀", r: "🅁", s: "🅂", t: "🅃",
  u: "🅄", v: "🅅", w: "🅆", x: "🅇", y: "🅈", z: "🅉"
});

// Style 51: Xi Negative Circle
addStyle('gamer', 'gamer_xi_negative_circle', 'Ξ', 'Ξ ✔', {
  A: "🅰", B: "🅱", C: "🅲", D: "🅳", E: "🅴", F: "🅵", G: "🅶", H: "🅷", I: "🅸", J: "🅹",
  K: "🅺", L: "🅻", M: "🅼", N: "🅽", O: "🅾", P: "🅿", Q: "🆀", R: "🆁", S: "🆂", T: "🆃",
  U: "🆄", V: "🆅", W: "🆆", X: "🆇", Y: "🆈", Z: "🆉",
  a: "🅰", b: "🅱", c: "🅲", d: "🅳", e: "🅴", f: "🅵", g: "🅶", h: "🅷", i: "🅸", j: "🅹",
  k: "🅺", l: "🅻", m: "🅼", n: "🅽", o: "🅾", p: "🅿", q: "🆀", r: "🆁", s: "🆂", t: "🆃",
  u: "🆄", v: "🆅", w: "🆆", x: "🆇", y: "🆈", z: "🆉"
});

// Style 52: Queen Small Caps
addStyle('gamer', 'gamer_queen_small_caps', 'q͢n͢ ♕メ◯', '◯メ✓', {
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 53: Sparkle Dot Small Caps
addStyle('gamer', 'gamer_sparkle_dot_small_caps', '｡°✩', '·✩°｡࿐', {
  A: "ᴀ·", B: "ʙ·", C: "ᴄ·", D: "ᴅ·", E: "ᴇ·", F: "ꜰ·", G: "ɢ·", H: "ʜ·", I: "ɪ·", J: "ᴊ·",
  K: "ᴋ·", L: "ʟ·", M: "ᴍ·", N: "ɴ·", O: "ᴏ·", P: "ᴘ·", Q: "ǫ·", R: "ʀ·", S: "ꜱ·", T: "ᴛ·",
  U: "ᴜ·", V: "ᴠ·", W: "ᴡ·", X: "x·", Y: "ʏ·", Z: "ᴢ·",
  a: "ᴀ·", b: "ʙ·", c: "ᴄ·", d: "ᴅ·", e: "ᴇ·", f: "ꜰ·", g: "ɢ·", h: "ʜ·", i: "ɪ·", j: "ᴊ·",
  k: "ᴋ·", l: "ʟ·", m: "ᴍ·", n: "ɴ·", o: "ᴏ·", p: "ᴘ·", q: "ǫ·", r: "ʀ·", s: "ꜱ·", t: "ᴛ·",
  u: "ᴜ·", v: "ᴠ·", w: "ᴡ·", x: "x·", y: "ʏ·", z: "ᴢ·"
});

// Style 54: Pro Circled
addStyle('gamer', 'gamer_pro_circled', 'ᴘʀᴏΞ', '♡࿐', {
  A: "Ⓐ", B: "Ⓑ", C: "Ⓒ", D: "Ⓓ", E: "Ⓔ", F: "Ⓕ", G: "Ⓖ", H: "Ⓗ", I: "Ⓘ", J: "Ⓙ",
  K: "Ⓚ", L: "Ⓛ", M: "Ⓜ", N: "Ⓝ", O: "Ⓞ", P: "Ⓟ", Q: "Ⓠ", R: "Ⓡ", S: "Ⓢ", T: "Ⓣ",
  U: "Ⓤ", V: "Ⓥ", W: "Ⓦ", X: "Ⓧ", Y: "Ⓨ", Z: "Ⓩ",
  a: "ⓐ", b: "ⓑ", c: "ⓒ", d: "ⓓ", e: "ⓔ", f: "ⓕ", g: "ⓖ", h: "ⓗ", i: "ⓘ", j: "ⓙ",
  k: "ⓚ", l: "ⓛ", m: "ⓜ", n: "ⓝ", o: "ⓞ", p: "ⓟ", q: "ⓠ", r: "ⓡ", s: "ⓢ", t: "ⓣ",
  u: "ⓤ", v: "ⓥ", w: "ⓦ", x: "ⓧ", y: "ⓨ", z: "ⓩ"
});

// Style 55: X Sans Serif
addStyle('gamer', 'gamer_x_sans_serif', 'xX_', '_Xx ☠࿐', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤̆̈", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 56: Cross Triangle Accent
addStyle('gamer', 'gamer_cross_triangle_accent', '༺✗', '✗༻ᵒᵖ', {
  A: "A̸▵", B: "B̸▵", C: "C̸▵", D: "D̸▵", E: "E̸▵", F: "F̸▵", G: "G̸▵", H: "H̸▵", I: "I̸▵", J: "J̸▵",
  K: "K̸▵", L: "L̸▵", M: "M̸▵", N: "N̸▵", O: "O̸▵", P: "P̸▵", Q: "Q̸▵", R: "R̸▵", S: "S̸▵", T: "T̸▵",
  U: "U̸▵", V: "V̸▵", W: "W̸▵", X: "X̸▵", Y: "Y̸▵", Z: "Z̸▵",
  a: "a̸▵", b: "b̸▵", c: "c̸▵", d: "d̸▵", e: "e̸▵", f: "f̸▵", g: "g̸▵", h: "h̸▵", i: "i̸▵", j: "j̸▵",
  k: "k̸▵", l: "l̸▵", m: "m̸▵", n: "n̸▵", o: "o̸▵", p: "p̸▵", q: "q̸▵", r: "r̸▵", s: "s̸▵", t: "t̸▵",
  u: "u̸▵", v: "v̸▵", w: "w̸▵", x: "x̸▵", y: "y̸▵", z: "z̸▵"
});

// Style 57: Yin Yang Circle Accent
addStyle('gamer', 'gamer_yin_yang_circle_accent', '꧁☯', '☯꧂', {
  A: "A̸◉", B: "B̸◉", C: "C̸◉", D: "D̸◉", E: "E̸◉", F: "F̸◉", G: "G̸◉", H: "H̸◉", I: "I̸◉", J: "J̸◉",
  K: "K̸◉", L: "L̸◉", M: "M̸◉", N: "N̸◉", O: "O̸◉", P: "P̸◉", Q: "Q̸◉", R: "R̸◉", S: "S̸◉", T: "T̸◉",
  U: "U̸◉", V: "V̸◉", W: "W̸◉", X: "X̸◉", Y: "Y̸◉", Z: "Z̸◉",
  a: "a̸◉", b: "b̸◉", c: "c̸◉", d: "d̸◉", e: "e̸◉", f: "f̸◉", g: "g̸◉", h: "h̸◉", i: "i̸◉", j: "j̸◉",
  k: "k̸◉", l: "l̸◉", m: "m̸◉", n: "n̸◉", o: "o̸◉", p: "p̸◉", q: "q̸◉", r: "r̸◉", s: "s̸◉", t: "t̸◉",
  u: "u̸◉", v: "v̸◉", w: "w̸◉", x: "x̸◉", y: "y̸◉", z: "z̸◉"
});

// Style 58: Star Greek
addStyle('gamer', 'gamer_star_greek', '—͟͞͞✰', '⋆✰࿐', {
  A: "Λ", B: "Β", C: "Ͻ", D: "Ɗ", E: "Ξ", F: "Ƒ", G: "Ɠ", H: "H", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ø", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "U", V: "V", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "λ", b: "β", c: "Ͻ", d: "ɗ", e: "ξ", f: "ƒ", g: "ɠ", h: "h", i: "ι", j: "ј",
  k: "κ", l: "ℓ", m: "μ", n: "η", o: "ø", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "υ", z: "ƶ"
});

// Style 59: Simple Small Caps with YT
addStyle('gamer', 'gamer_simple_small_caps_yt', '', '_ʏᴛ', {
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 60: Simple Xi Accent
addStyle('gamer', 'gamer_simple_xi_accent', '', ' ✔', {
  A: "A͢", B: "B͢", C: "C͢", D: "D͢", E: "E͢", F: "F͢", G: "G͢", H: "H͢", I: "I͢", J: "J͢",
  K: "K͢", L: "L͢", M: "M͢", N: "N͢", O: "O͢", P: "P͢", Q: "Q͢", R: "R͢", S: "S͢", T: "T͢",
  U: "U͢", V: "V͢", W: "W͢", X: "X͢", Y: "Y͢", Z: "Z͢",
  a: "a͢", b: "b͢", c: "c͢", d: "d͢", e: "e͢", f: "f͢", g: "g͢", h: "h͢", i: "i͢", j: "j͢",
  k: "k͢", l: "l͢", m: "m͢", n: "n͢", o: "o͢", p: "p͢", q: "q͢", r: "r͢", s: "s͢", t: "t͢",
  u: "u͢", v: "v͢", w: "w͢", x: "x͢", y: "y͢", z: "z͢"
});

// Style 61: Egyptian Star Double Struck
addStyle('gamer', 'gamer_egyptian_star_double_struck', '𓄀⋆乂', '乂⋆࿐', {
  A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
  K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
  U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ",
  a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
  k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
  u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫"
});

// Style 62: Khanda Italic
addStyle('gamer', 'gamer_khanda_italic', '『☬', '☬』ʸᵗ', {
  A: "𝘼", B: "𝘽", C: "𝘾", D: "𝘿", E: "𝙀", F: "𝙁", G: "𝙂", H: "𝙃", I: "𝙄", J: "𝙅",
  K: "𝙆", L: "𝙇", M: "𝙈", N: "𝙉", O: "𝙊", P: "𝙋", Q: "𝙌", R: "𝙍", S: "𝙎", T: "𝙏",
  U: "𝙐", V: "𝙑", W: "𝙒", X: "𝙓", Y: "𝙔", Z: "𝙕",
  a: "𝙖", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝙚", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝙞", j: "𝙟",
  k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝙤", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
  u: "𝙪", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝙮", z: "𝙯"
});

// Style 63: Currency Style
addStyle('gamer', 'gamer_currency_style', '꧁༺', '⁰⁷༻꧂', {
  A: "₳", B: "₲", C: "₵", D: "Đ", E: "₳", F: "₣", G: "₲", H: "Ⱨ", I: "ł", J: "₲",
  K: "₭", L: "Ⱡ", M: "₥", N: "₦", O: "Ø", P: "₱", Q: "Ꝗ", R: "Ɽ", S: "₴", T: "₮",
  U: "Ṳ", V: "ᐯ", W: "₩", X: "Ӿ", Y: "Ɏ", Z: "ℤ",
  a: "₳", b: "₲", c: "₵", d: "đ", e: "₳", f: "₣", g: "₲", h: "Ⱨ", i: "ł", j: "₲",
  k: "₭", l: "Ⱡ", m: "₥", n: "₦", o: "ø", p: "₱", q: "Ꝗ", r: "Ɽ", s: "₴", t: "₮",
  u: "Ṳ", v: "ᐯ", w: "₩", x: "Ӿ", y: "Ɏ", z: "ƶ"
});

// Style 64: Xi Accent with Numbers
addStyle('gamer', 'gamer_xi_accent_numbers', '乂', '乂 ⓿❸', {
  A: "A͢", B: "B͢", C: "C͢", D: "D͢", E: "E͢", F: "F͢", G: "G͢", H: "H͢", I: "I͢", J: "J͢",
  K: "K͢", L: "L͢", M: "M͢", N: "N͢", O: "O͢", P: "P͢", Q: "Q͢", R: "R͢", S: "S͢", T: "T͢",
  U: "U͢", V: "V͢", W: "W͢", X: "X͢", Y: "Y͢", Z: "Z͢",
  a: "a͢", b: "b͢", c: "c͢", d: "d͢", e: "e͢", f: "f͢", g: "g͢", h: "h͢", i: "i͢", j: "j͢",
  k: "k͢", l: "l͢", m: "m͢", n: "n͢", o: "o͢", p: "p͢", q: "q͢", r: "r͢", s: "s͢", t: "t͢",
  u: "u͢", v: "v͢", w: "w͢", x: "x͢", y: "y͢", z: "z͢"
});

// Style 65: Japanese Bracket Italic Math
addStyle('gamer', 'gamer_japanese_bracket_italic', '亗⸝⸝⸝『', '』⸝⸝⸝⁹⁹⁹', {
  A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
  K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
});

// Style 66: Gun Italic Math
addStyle('gamer', 'gamer_gun_italic', '⌐╦╦═─『', '』⋙˚', {
  A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
  K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
});

// Style 67: MR Monospace
addStyle('gamer', 'gamer_mr_monospace', 'ᴍʀ͢『', '』✓', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
  K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
  U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
  k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
  u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣"
});

// Style 68: V Squared
addStyle('gamer', 'gamer_v_squared', ' ┈━═Ⓥ', 'Ⓥ═━┈', {
  A: "🄰", B: "🄱", C: "🄲", D: "🄳", E: "🄴", F: "🄵", G: "🄶", H: "🄷", I: "🄸", J: "🄹",
  K: "🄺", L: "🄻", M: "🄼", N: "🄽", O: "🄾", P: "🄿", Q: "🅀", R: "🅁", S: "🅂", T: "🅃",
  U: "🅄", V: "🅅", W: "🅆", X: "🅇", Y: "🅈", Z: "🅉",
  a: "🄰", b: "🄱", c: "🄲", d: "🄳", e: "🄴", f: "🄵", g: "🄶", h: "🄷", i: "🄸", j: "🄹",
  k: "🄺", l: "🄻", m: "🄼", n: "🄽", o: "🄾", p: "🄿", q: "🅀", r: "🅁", s: "🅂", t: "🅃",
  u: "🅄", v: "🅅", w: "🅆", x: "🅇", y: "🅈", z: "🅉"
});

// Style 69: MR Small Caps
addStyle('gamer', 'gamer_mr_small_caps', 'ᴍr͢ ', ' ⁰⁷', {
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 70: MR Sans Serif
addStyle('gamer', 'gamer_mr_sans_serif', 'ᴍr͢ ', '━┈모', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤̆̈", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 71: Simple Small Caps TM
addStyle('gamer', 'gamer_simple_small_caps_tm', '『', ' 』™', {
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 72: Bracket Prime Small Caps
addStyle('gamer', 'gamer_bracket_prime_small_caps', '『⧼', '⧽ 』_ᴘʀɪᴍᴇ', {
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 73: Crazy Italic Math
addStyle('gamer', 'gamer_crazy_italic_math', 'ᶜ̸ʳ̸ᴬ̸ᶻ̸ʸ̸✗', ' ⓿❼⋆࿐', {
  A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
  K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
});

// Style 74: Boss Greek
addStyle('gamer', 'gamer_boss_greek', '乃ᴏss 乂·˚', ' ˚·乂 ⁹⁹⁹', {
  A: "Λ", B: "Β", C: "Ͻ", D: "Ɗ", E: "Ξ", F: "Ƒ", G: "Ɠ", H: "Ν", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ø", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "U", V: "V", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "λ", b: "β", c: "Ͻ", d: "ɗ", e: "ξ", f: "ƒ", g: "ɠ", h: "н", i: "ι", j: "ј",
  k: "κ", l: "ℓ", m: "μ", n: "η", o: "ø", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "υ", z: "ƶ"
});

// Style 75: Rune Bold Italic
addStyle('gamer', 'gamer_rune_bold_italic', 'ᛖᚱ_', ' 모', {
  A: "𝑨", B: "𝑩", C: "𝑪", D: "𝑫", E: "𝑬", F: "𝑭", G: "𝑮", H: "𝑯", I: "𝑰", J: "𝑱",
  K: "𝑲", L: "𝑳", M: "𝑴", N: "𝑵", O: "𝑶", P: "𝑷", Q: "𝑸", R: "𝑹", S: "𝑺", T: "𝑻",
  U: "𝑼", V: "𝑽", W: "𝑾", X: "𝑿", Y: "𝒀", Z: "𝒁",
  a: "𝒂", b: "𝒃", c: "𝒄", d: "𝒅", e: "𝒆", f: "𝒇", g: "𝒈", h: "𝒉", i: "𝒊", j: "𝒋",
  k: "𝒌", l: "𝒍", m: "𝒎", n: "𝒏", o: "𝒐", p: "𝒑", q: "𝒒", r: "𝒓", s: "𝒔", t: "𝒕",
  u: "𝒖", v: "𝒗", w: "𝒘", x: "𝒙", y: "𝒚", z: "𝒛"
});

// Style 76: Evil Fraktur
addStyle('gamer', 'gamer_evil_fraktur', '𓆩𝖊𝖛𝖎𝖑𓆪 ⚕『', '』➆➆➆', {
  a: "𝖆", b: "𝖇", c: "𝖈", d: "𝖉", e: "𝖊", f: "𝖋", g: "𝖌", h: "𝖍", i: "𝖎", j: "𝖏",
  k: "𝖐", l: "𝖑", m: "𝖒", n: "𝖓", o: "𝖔", p: "𝖕", q: "𝖖", r: "𝖗", s: "𝖘", t: "𝖙",
  u: "𝖚", v: "𝖛", w: "𝖜", x: "𝖝", y: "𝖞", z: "𝖟",
  A: "𝕬", B: "𝕭", C: "𝕮", D: "𝕯", E: "𝕰", F: "𝕱", G: "𝕲", H: "𝕳", I: "𝕴", J: "𝕵",
  K: "𝕶", L: "𝕷", M: "𝕸", N: "𝕹", O: "𝕺", P: "𝕻", Q: "𝕼", R: "𝕽", S: "𝕾", T: "𝕿",
  U: "𝖀", V: "𝖁", W: "𝖂", X: "𝖃", Y: "𝖄", Z: "𝖅"
});

// Style 77: Killer Italic Math
addStyle('gamer', 'gamer_killer_italic_math', '『  ', '』➪𝕶𝖎𝖑𝖑𝖊𝖗ツ', {
  A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
  K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
});

// Style 78: Rune Greek
addStyle('gamer', 'gamer_rune_greek', 'ᛖᚱ☛⧉', '⧉', {
  A: "Λ", B: "Β", C: "Ͻ", D: "Ɗ", E: "Ξ", F: "Ƒ", G: "Ɠ", H: "Ν", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ø", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "U", V: "V", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "λ", b: "β", c: "Ͻ", d: "ɗ", e: "ξ", f: "ƒ", g: "ɠ", h: "н", i: "ι", j: "ј",
  k: "κ", l: "ℓ", m: "μ", n: "η", o: "ø", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "υ", z: "ƶ"
});

// Style 79: Flower Short Stroke
addStyle('gamer', 'gamer_flower_short_stroke', '⸙ X-「•❀', ' ❀•」 모', {
  A: "A̷̷", B: "B̷̷", C: "C̷̷", D: "D̷̷", E: "E̷̷", F: "F̷̷", G: "G̷̷", H: "H̷̷", I: "I̷̷", J: "J̷̷",
  K: "K̷̷", L: "L̷̷", M: "M̷̷", N: "N̷̷", O: "O̷̷", P: "P̷̷", Q: "Q̷̷", R: "R̷̷", S: "S̷̷", T: "T̷̷",
  U: "U̷̷", V: "V̷̷", W: "W̷̷", X: "X̷̷", Y: "Y̷̷", Z: "Z̷̷",
  a: "a̷", b: "b̷", c: "c̷", d: "d̷", e: "e̷", f: "f̷", g: "g̷", h: "h̷", i: "i̷", j: "j̷",
  k: "k̷", l: "l̷", m: "m̷", n: "n̷", o: "o̷", p: "p̷", q: "q̷", r: "r̷", s: "s̷", t: "t̷",
  u: "u̷", v: "v̷", w: "w̷", x: "x̷", y: "y̷", z: "z̷"
});

// Style 80: Cross Greek
addStyle('gamer', 'gamer_cross_greek', '『✞』', '『✞』', {
  A: "Λ", B: "Β", C: "Ͻ", D: "Ɗ", E: "Ξ", F: "Ƒ", G: "Ɠ", H: "Ν", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ø", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "U", V: "V", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "λ", b: "β", c: "Ͻ", d: "ɗ", e: "ξ", f: "ƒ", g: "ɠ", h: "н", i: "ι", j: "ј",
  k: "κ", l: "ℓ", m: "μ", n: "η", o: "ø", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "υ", z: "ƶ"
});

// Style 81: Rune Greek 01
addStyle('gamer', 'gamer_rune_greek_01', 'ᛖᚱ_', '『』⁰¹', {
  A: "Λ", B: "Β", C: "Ͻ", D: "Ɗ", E: "Ξ", F: "Ƒ", G: "Ɠ", H: "Ν", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ø", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "U", V: "V", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "λ", b: "β", c: "Ͻ", d: "ɗ", e: "ξ", f: "ƒ", g: "ɠ", h: "н", i: "ι", j: "ј",
  k: "κ", l: "ℓ", m: "μ", n: "η", o: "ø", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "υ", z: "ƶ"
});

// Style 81: Rune Japanese
addStyle('gamer', 'gamer_rune_japanese', 'ᛖᚱ_', ' Ⓥ', {
  A: "卂", B: "乃", C: "匚", D: "刀", E: "乇", F: "千", G: "Ꮆ", H: "卄", I: "丨", J: "ﾌ",
  K: "Ҝ", L: "ㄥ", M: "爪", N: "几", O: "ㄖ", P: "卩", Q: "Ҩ", R: "尺", S: "丂", T: "ㄒ",
  U: "ㄩ", V: "ᐯ", W: "山", X: "乂", Y: "y", Z: "z",
  a: "卂", b: "乃", c: "匚", d: "刀", e: "乇", f: "千", g: "Ꮆ", h: "卄", i: "丨", j: "ﾌ",
  k: "Ҝ", l: "ㄥ", m: "爪", n: "几", o: "ㄖ", p: "卩", q: "Ҩ", r: "尺", s: "丂", t: "ㄒ",
  u: "ㄩ", v: "ᐯ", w: "山", x: "乂", y: "y", z: "z"
});

// Style 82: FX Box Accent
addStyle('gamer', 'gamer_fx_box_accent', '₣𝑥 ░', '░࿐YT', {
  A: "Ä̤", B: "B̤̈", C: "C̤̈", D: "D̤̈", E: "Ë̤", F: "F̤̈", G: "G̤̈", H: "Ḧ̤", I: "Ï̤", J: "J̤̈",
  K: "K̤̈", L: "L̤̈", M: "M̤̈", N: "N̤̈", O: "Ö̤", P: "P̤̈", Q: "Q̤̈", R: "R̤̈", S: "S̤̈", T: "T̤̈",
  U: "Ṳ̈", V: "V̤̈", W: "Ẅ̤", X: "Ẍ̤", Y: "Ÿ̤", Z: "Z̤̈",
  a: "ä̤", b: "b̤̈", c: "c̤̈", d: "d̤̈", e: "ë̤", f: "f̤̈", g: "g̤̈", h: "ḧ̤", i: "ï̤", j: "j̤̈",
  k: "k̤̈", l: "l̤̈", m: "m̤̈", n: "n̤̈", o: "ö̤", p: "p̤̈", q: "q̤̈", r: "r̤̈", s: "s̤̈", t: "ẗ̤",
  u: "ṳ̈", v: "v̤̈", w: "ẅ̤", x: "ẍ̤", y: "ÿ̤", z: "z̤̈"
});

// Style 83: Circle Bracket Accent
addStyle('gamer', 'gamer_circle_bracket', '꧁•', '•࿐⓿❾', {
  A: "A⑊", B: "B⑊", C: "C⑊", D: "D⑊", E: "E⑊", F: "F⑊", G: "G⑊", H: "H⑊", I: "I⑊", J: "J⑊",
  K: "K⑊", L: "L⑊", M: "M⑊", N: "N⑊", O: "O⑊", P: "P⑊", Q: "Q⑊", R: "R⑊", S: "S⑊", T: "T⑊",
  U: "U⑊", V: "V⑊", W: "W⑊", X: "X⑊", Y: "Y⑊", Z: "Z⑊",
  a: "a⑊", b: "b⑊", c: "c⑊", d: "d⑊", e: "e⑊", f: "f⑊", g: "g⑊", h: "h⑊", i: "i⑊", j: "j⑊",
  k: "k⑊", l: "l⑊", m: "m⑊", n: "n⑊", o: "o⑊", p: "p⑊", q: "q⑊", r: "r⑊", s: "s⑊", t: "t⑊",
  u: "u⑊", v: "v⑊", w: "w⑊", x: "x⑊", y: "y⑊", z: "z⑊"
});

// Style 84: Simple Small Caps FF
addStyle('gamer', 'gamer_simple_small_caps_ff', '', ' ᶠᶠ', {
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 85: Star Accent Check
addStyle('gamer', 'gamer_star_accent_check', '—͟͞͞★', ' ✓', {
  A: "A⨳", B: "B⨳", C: "C⨳", D: "D⨳", E: "E⨳", F: "F⨳", G: "G⨳", H: "H⨳", I: "I⨳", J: "J⨳",
  K: "K⨳", L: "L⨳", M: "M⨳", N: "N⨳", O: "O⨳", P: "P⨳", Q: "Q⨳", R: "R⨳", S: "S⨳", T: "T⨳",
  U: "U⨳", V: "V⨳", W: "W⨳", X: "X⨳", Y: "Y⨳", Z: "Z⨳",
  a: "a⨳", b: "b⨳", c: "c⨳", d: "d⨳", e: "e⨳", f: "f⨳", g: "g⨳", h: "h⨳", i: "i⨳", j: "j⨳",
  k: "k⨳", l: "l⨳", m: "m⨳", n: "n⨳", o: "o⨳", p: "p⨳", q: "q⨳", r: "r⨳", s: "s⨳", t: "t⨳",
  u: "u⨳", v: "v⨳", w: "w⨳", x: "x⨳", y: "y⨳", z: "z⨳"
});

// Style 86: Box Squared
addStyle('gamer', 'gamer_box_squared', ' ▄', '▄ ⁴⁴⁴', {
  A: "🄰", B: "🄱", C: "🄲", D: "🄳", E: "🄴", F: "🄵", G: "🄶", H: "🄷", I: "🄸", J: "🄹",
  K: "🄺", L: "🄻", M: "🄼", N: "🄽", O: "🄾", P: "🄿", Q: "🅀", R: "🅁", S: "🅂", T: "🅃",
  U: "🅄", V: "🅅", W: "🅆", X: "🅇", Y: "🅈", Z: "🅉",
  a: "🄰", b: "🄱", c: "🄲", d: "🄳", e: "🄴", f: "🄵", g: "🄶", h: "🄷", i: "🄸", j: "🄹",
  k: "🄺", l: "🄻", m: "🄼", n: "🄽", o: "🄾", p: "🄿", q: "🅀", r: "🅁", s: "🅂", t: "🅃",
  u: "🅄", v: "🅅", w: "🅆", x: "🅇", y: "🅈", z: "🅉"
});

// Style 87: Star Short Stroke 007
addStyle('gamer', 'gamer_star_short_stroke_007', '★', '⁰⁰⁷★࿐', {
  A: "A̶", B: "B̶", C: "C̶", D: "D̶", E: "E̶", F: "F̶", G: "G̶", H: "H̶", I: "I̶", J: "J̶",
  K: "K̶", L: "L̶", M: "M̶", N: "N̶", O: "O̶", P: "P̶", Q: "Q̶", R: "R̶", S: "S̶", T: "T̶",
  U: "U̶", V: "V̶", W: "W̶", X: "X̶", Y: "Y̶", Z: "Z̶",
  a: "a̶", b: "b̶", c: "c̶", d: "d̶", e: "e̶", f: "f̶", g: "g̶", h: "h̶", i: "i̶", j: "j̶",
  k: "k̶", l: "l̶", m: "m̶", n: "n̶", o: "o̶", p: "p̶", q: "q̶", r: "r̶", s: "s̶", t: "t̶",
  u: "u̶", v: "v̶", w: "w̶", x: "x̶", y: "y̶", z: "z̶"
});

// Style 88: Bracket Underline
addStyle('gamer', 'gamer_bracket_underline', '꧁𓊈[', ']𓊉꧂', {
  A: "[A̲̅]", B: "[B̲̅]", C: "[C̲̅]", D: "[D̲̅]", E: "[E̲̅]", F: "[F̲̅]", G: "[G̲̅]", H: "[H̲̅]", I: "[I̲̅]", J: "[J̲̅]",
  K: "[K̲̅]", L: "[L̲̅]", M: "[M̲̅]", N: "[N̲̅]", O: "[O̲̅]", P: "[P̲̅]", Q: "[Q̲̅]", R: "[R̲̅]", S: "[S̲̅]", T: "[T̲̅]",
  U: "[U̲̅]", V: "[V̲̅]", W: "[W̲̅]", X: "[X̲̅]", Y: "[Y̲̅]", Z: "[Z̲̅]",
  a: "[a̲̅]", b: "[b̲̅]", c: "[c̲̅]", d: "[d̲̅]", e: "[e̲̅]", f: "[f̲̅]", g: "[g̲̅]", h: "[h̲̅]", i: "[i̲̅]", j: "[j̲̅]",
  k: "[k̲̅]", l: "[l̲̅]", m: "[m̲̅]", n: "[n̲̅]", o: "[o̲̅]", p: "[p̲̅]", q: "[q̲̅]", r: "[r̲̅]", s: "[s̲̅]", t: "[t̲̅]",
  u: "[u̲̅]", v: "[v̲̅]", w: "[w̲̅]", x: "[x̲̅]", y: "[y̲̅]", z: "[z̲̅]"
});

// Style 89: Star Currency Short Stroke
addStyle('gamer', 'gamer_star_currency_short_stroke', '✰︵✰', '☫࿐ᶠᶠ', {
  A: "₳", B: "฿", C: "₵", D: "Đ", E: "₣", F: "E̷̷", G: "₲", H: "Ⱨ", I: "ł", J: "J",
  K: "₭", L: "Ⱡ", M: "₥", N: "₦", O: "Ø", P: "Ƥ", Q: "Ᵽ", R: "Ɽ", S: "₴", T: "₮",
  U: "ฯ", V: "ⱽ", W: "₩", X: "Ӿ", Y: "¥", Z: "Ⱬ",
  a: "₳", b: "฿", c: "₵", d: "đ", e: "₣", f: "e̷̷", g: "₲", h: "Ⱨ", i: "ł", j: "j",
  k: "₭", l: "Ⱡ", m: "₥", n: "₦", o: "ø", p: "Ƥ", q: "Ᵽ", r: "Ɽ", s: "₴", t: "₮",
  u: "ฯ", v: "ⱽ", w: "₩", x: "Ӿ", y: "¥", z: "Ⱬ"
});

// Style 90: Ind Sans
addStyle('gamer', 'gamer_ind_sans', '『ᶦᶰᵈ』', '_⁰⁶', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 91: Tea Monospace 007
addStyle('gamer', 'gamer_tea_monospace_007', 'Ƭ͢ɴ ', ' ♨⁰⁰⁷', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
  K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
  U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
  k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
  u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣"
});

// Style 92: RDX Greek
addStyle('gamer', 'gamer_rdx_greek', 'Ꮢᴅx メ', 'メ모', {
  A: "Λ", B: "Ϧ", C: "Ͼ", D: "Ḏ", E: "Σ", F: "Ғ", G: "Ɠ", H: "Ή", I: "Ϊ", J: "Ј",
  K: "Κ", L: "Ł", M: "Μ", N: "И", O: "Θ", P: "Ρ", Q: "Ћ", R: "Я", S: "Ƨ", T: "Ƭ",
  U: "Џ", V: "Ʋ", W: "Ψ", X: "Ӿ", Y: "Υ", Z: "Ž",
  a: "λ", b: "ɢ", c: "η", d: "г", e: "κ", f: "ϟ", g: "ϧ", h: "ћ", i: "ι", j: "ϳ",
  k: "к", l: "ʅ", m: "м", n: "п", o: "ο", p: "ρ", q: "ς", r: "я", s: "ѕ", t: "т",
  u: "υ", v: "ν", w: "ω", x: "х", y: "γ", z: "ζ"
});

// Style 93: Egyptian Gaming
addStyle('gamer', 'gamer_egyptian_gaming', '𓄀', 'メɢᴀᴍɪɴɢ', {
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 94: OP Sans
addStyle('gamer', 'gamer_op_sans', 'ＯＰܔ', 'Ⓥ࿐', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 95: MR Short Stroke
addStyle('gamer', 'gamer_mr_short_stroke', 'ᴹᴿメ', '☂⁴⁴⁴', {
  A: "A̶", B: "B̶", C: "C̶", D: "D̶", E: "E̶", F: "F̶", G: "G̶", H: "H̶", I: "I̶", J: "J̶",
  K: "K̶", L: "L̶", M: "M̶", N: "N̶", O: "O̶", P: "P̶", Q: "Q̶", R: "R̶", S: "S̶", T: "T̶",
  U: "U̶", V: "V̶", W: "W̶", X: "X̶", Y: "Y̶", Z: "Z̶",
  a: "a̶", b: "b̶", c: "c̶", d: "d̶", e: "e̶", f: "f̶", g: "g̶", h: "h̶", i: "i̶", j: "j̶",
  k: "k̶", l: "l̶", m: "m̶", n: "n̶", o: "o̶", p: "p̶", q: "q̶", r: "r̶", s: "s̶", t: "t̶",
  u: "u̶", v: "v̶", w: "w̶", x: "x̶", y: "y̶", z: "z̶"
});

// Style 96: SK Greek Boss
addStyle('gamer', 'gamer_sk_greek_boss', 'Sᴋ『', '』ᴮᴼˢˢ᭄', {
  A: "Λ", B: "Β", C: "Ͻ", D: "Ɗ", E: "Ξ", F: "Ƒ", G: "Ɠ", H: "Ν", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ø", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "U", V: "V", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "λ", b: "β", c: "Ͻ", d: "ɗ", e: "ξ", f: "ƒ", g: "ɠ", h: "н", i: "ι", j: "ј",
  k: "κ", l: "ℓ", m: "μ", n: "η", o: "ø", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "υ", z: "ƶ"
});

// Style 97: Box Monospace
addStyle('gamer', 'gamer_box_monospace', '⧉░', '░࿐', {
  A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝",
  K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
  U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭",
  a: "𝙖", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝙚", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝙞", j: "𝙟",
  k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝙤", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
  u: "𝙪", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝙮", z: "𝙯"
});

// Style 98: Japanese Rain
addStyle('gamer', 'gamer_japanese_rain', '', ' ̤̮☂', {
  A: "么", B: "乃", C: "匚", D: "刁", E: "モ", F: "ｷ", G: "ム", H: "廾", I: "工", J: "ﾌ",
  K: "ズ", L: "ﾚ", M: "从", N: "れ", O: "〇", P: "尸", Q: "ゐ", R: "尺", S: "丂", T: "ｲ",
  U: "ひ", V: "√", W: "山", X: "メ", Y: "Ɏ", Z: "乙",
  a: "么", b: "乃", c: "匚", d: "刁", e: "モ", f: "ｷ", g: "ム", h: "廾", i: "工", j: "ﾌ",
  k: "ズ", l: "ﾚ", m: "从", n: "れ", o: "〇", p: "尸", q: "ゐ", r: "尺", s: "丂", t: "ｲ",
  u: "ひ", v: "√", w: "山", x: "メ", y: "Ɏ", z: "乙"
});

// Style 99: RDX Japanese
addStyle('gamer', 'gamer_rdx_japanese', 'ʀᴅx͢ ༒☯', '☯༒࿐', {
  A: "么", B: "乃", C: "匚", D: "刁", E: "モ", F: "ｷ", G: "ム", H: "廾", I: "工", J: "ﾌ",
  K: "ズ", L: "ﾚ", M: "从", N: "れ", O: "〇", P: "尸", Q: "ゐ", R: "尺", S: "丂", T: "ｲ",
  U: "ひ", V: "√", W: "山", X: "メ", Y: "Ɏ", Z: "乙",
  a: "么", b: "乃", c: "匚", d: "刁", e: "モ", f: "ｷ", g: "ム", h: "廾", i: "工", j: "ﾌ",
  k: "ズ", l: "ﾚ", m: "从", n: "れ", o: "〇", p: "尸", q: "ゐ", r: "尺", s: "丂", t: "ｲ",
  u: "ひ", v: "√", w: "山", x: "メ", y: "Ɏ", z: "乙"
});

// Style 100: FF Star Sans
addStyle('gamer', 'gamer_ff_star_sans', '𝙵𝙵★', '❖ʏᴛ࿐', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 101: Star Greek Bold
addStyle('gamer', 'gamer_star_greek_bold', 'ᯓ★.⋆ ', ' ‼_모', {
  A: "𝚨", B: "𝚩", C: "𝚪", D: "𝚫", E: "𝚬", F: "𝚺", G: "𝛀", H: "𝚮", I: "𝚰", J: "𝗝",
  K: "𝚱", L: "𝚲", M: "𝚳", N: "𝚴", O: "𝚶", P: "𝚸", Q: "𝚽", R: "𝗥", S: "𝚵", T: "𝚻",
  U: "𝚷", V: "𝚼", W: "𝗪", X: "𝚾", Y: "𝚿", Z: "𝚭",
  a: "α", b: "β", c: "γ", d: "δ", e: "ε", f: "σ", g: "ω", h: "η", i: "ι", j: "ȷ",
  k: "κ", l: "λ", m: "μ", n: "ν", o: "ο", p: "π", q: "φ", r: "ρ", s: "ξ", t: "τ",
  u: "υ", v: "υ", w: "ω", x: "χ", y: "ψ", z: "ζ"
});

// Style 102: Pro Negative Circle
addStyle('gamer', 'gamer_pro_negative_circle', 'Ꭾʀᴏ_', '⨳ ⁰⁷✓', {
  A: "🅐", B: "🅑", C: "🅒", D: "🅓", E: "🅔", F: "🅕", G: "🅖", H: "🅗", I: "🅘", J: "🅙",
  K: "🅚", L: "🅛", M: "🅜", N: "🅝", O: "🅞", P: "🅟", Q: "🅠", R: "🅡", S: "🅢", T: "🅣",
  U: "🅤", V: "🅥", W: "🅦", X: "🅧", Y: "🅨", Z: "🅩",
  a: "🅐", b: "🅑", c: "🅒", d: "🅓", e: "🅔", f: "🅕", g: "🅖", h: "🅗", i: "🅘", j: "🅙",
  k: "🅚", l: "🅛", m: "🅜", n: "🅝", o: "🅞", p: "🅟", q: "🅠", r: "🅡", s: "🅢", t: "🅣",
  u: "🅤", v: "🅥", w: "🅦", x: "🅧", y: "🅨", z: "🅩"
});

// Style 103: Tai Greek Rain
addStyle('gamer', 'gamer_tai_greek_rain', 'ᯓ★', ' ☂་༘࿐⓿❻', {
  a: "̤̮α", b: "̤̮в", c: "̤̮c", d: "̤̮ɗ", e: "̤̮ε", f: "̤̮ƒ", g: "̤̮ɠ", h: "̤̮н", i: "̤̮ɪ", j: "̤̮נ",
  k: "̤̮κ", l: "̤̮ℓ", m: "̤̮м", n: "̤̮η", o: "̤̮σ", p: "̤̮ρ", q: "̤̮զ", r: "̤̮я", s: "̤̮ѕ", t: "̤̮τ",
  u: "̤̮υ", v: "̤̮ν", w: "̤̮ω", x: "̤̮χ", y: "̤̮γ", z: "̤̮ƶ",
  A: "Α", B: "Β", C: "C", D: "Ɗ", E: "Ε", F: "Ƒ", G: "Ɠ", H: "Н", I: "Ι", J: "Ј",
  K: "Κ", L: "ℓ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ջ", R: "Я", S: "Ѕ", T: "Τ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Ƶ"
});

// Style 104: Cham Greek Pro
addStyle('gamer', 'gamer_cham_greek_pro', '꩜', '𓏧Ꭾʀ𖹭 ‹𝟹࿐', {
  A: "Α", B: "Β", C: "Ͻ", D: "Ɗ", E: "Σ", F: "Ƒ", G: "Ɠ", H: "Ν", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "U", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
  k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ"
});

// Style 105: Scissor Short Stroke
addStyle('gamer', 'gamer_scissor_short_stroke', '-ˋˏ✄┈', '┈⌯⌲⁹⁹⁹', {
  A: "A̶", B: "B̶", C: "C̶", D: "D̶", E: "E̶", F: "F̶", G: "G̶", H: "H̶", I: "I̶", J: "J̶",
  K: "K̶", L: "L̶", M: "M̶", N: "N̶", O: "O̶", P: "P̶", Q: "Q̶", R: "R̶", S: "S̶", T: "T̶",
  U: "U̶", V: "V̶", W: "W̶", X: "X̶", Y: "Y̶", Z: "Z̶",
  a: "a̶", b: "b̶", c: "c̶", d: "d̶", e: "e̶", f: "f̶", g: "g̶", h: "h̶", i: "i̶", j: "j̶",
  k: "k̶", l: "l̶", m: "m̶", n: "n̶", o: "o̶", p: "p̶", q: "q̶", r: "r̶", s: "s̶", t: "t̶",
  u: "u̶", v: "v̶", w: "w̶", x: "x̶", y: "y̶", z: "z̶"
});

// Style 106: Italic Math Arabic
addStyle('gamer', 'gamer_italic_math_arabic', '', '_١٥٧٤♡', {
  A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
  K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
});

// Style 107: Box Greek ZZ
addStyle('gamer', 'gamer_box_greek_zz', '⧉', ' ☂ᶻᶻ', {
  A: "Λ", B: "Β", C: "Ͻ", D: "Ɗ", E: "Ξ", F: "Ƒ", G: "Ɠ", H: "H", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ø", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "U", V: "V", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "λ", b: "β", c: "Ͻ", d: "ɗ", e: "ξ", f: "ƒ", g: "ɠ", h: "h", i: "ι", j: "ј",
  k: "κ", l: "ℓ", m: "μ", n: "η", o: "ø", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "υ", z: "ƶ"
});

// Style 108: Star Accent Greek Rain
addStyle('gamer', 'gamer_star_accent_greek_rain', '『⨳ ̤̮', ' ̤̮ ☯࿐𝟿𝟿𝟿', {
  a: "̤̮α", b: "̤̮в", c: "̤̮c", d: "̤̮ɗ", e: "̤̮ε", f: "̤̮ƒ", g: "̤̮ɠ", h: "̤̮н", i: "̤̮ɪ", j: "̤̮נ",
  k: "̤̮κ", l: "̤̮ℓ", m: "̤̮м", n: "̤̮η", o: "̤̮σ", p: "̤̮ρ", q: "̤̮զ", r: "̤̮я", s: "̤̮ѕ", t: "̤̮τ",
  u: "̤̮υ", v: "̤̮ν", w: "̤̮ω", x: "̤̮χ", y: "̤̮γ", z: "̤̮ƶ",
  A: "Α", B: "Β", C: "C", D: "Ɗ", E: "Ε", F: "Ƒ", G: "Ɠ", H: "Н", I: "Ι", J: "Ј",
  K: "Κ", L: "ℓ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ջ", R: "Я", S: "Ѕ", T: "Τ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Ƶ"
});

// Style 109: Simple Greek PRO
addStyle('gamer', 'gamer_simple_greek_pro', '༺ ', ' ᴾᴿᴼ', {
  A: "Λ", B: "Β", C: "Ͻ", D: "Ɗ", E: "Ξ", F: "Ƒ", G: "Ɠ", H: "H", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ø", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "U", V: "V", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "λ", b: "β", c: "Ͻ", d: "ɗ", e: "ξ", f: "ƒ", g: "ɠ", h: "h", i: "ι", j: "ј",
  k: "κ", l: "ℓ", m: "μ", n: "η", o: "ø", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "υ", z: "ƶ"
});

// Style 110: Team Full Width
addStyle('gamer', 'gamer_team_full_width', 'ᵀ̸ᵉ̸ᵃ̸ᵐ̸乂', '乂 𝟎𝟕', {
  A: "Ａ", B: "Ｂ", C: "Ｃ", D: "Ｄ", E: "Ｅ", F: "Ｆ", G: "Ｇ", H: "Ｈ", I: "Ｉ", J: "Ｊ",
  K: "Ｋ", L: "Ｌ", M: "Ｍ", N: "Ｎ", O: "Ｏ", P: "Ｐ", Q: "Ｑ", R: "Ｒ", S: "Ｓ", T: "Ｔ",
  U: "Ｕ", V: "Ｖ", W: "Ｗ", X: "Ｘ", Y: "Ｙ", Z: "Ｚ",
  a: "ａ", b: "ｂ", c: "ｃ", d: "ｄ", e: "ｅ", f: "ｆ", g: "ｇ", h: "ｈ", i: "ｉ", j: "ｊ",
  k: "ｋ", l: "ｌ", m: "ｍ", n: "ｎ", o: "ｏ", p: "ｐ", q: "ｑ", r: "ｒ", s: "ｓ", t: "ｔ",
  u: "ｕ", v: "ｖ", w: "ｗ", x: "ｘ", y: "ｙ", z: "ｚ"
});

// Style 111: Black Heart Greek Pro
addStyle('gamer', 'gamer_black_heart_greek_pro', '🖤⃝ME ', '.⋆★Ꭾʀᴏ ‹𝟹', {
  A: "Α", B: "Β", C: "Ͻ", D: "Ɗ", E: "Σ", F: "Ƒ", G: "Ɠ", H: "Ν", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
  k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ"
});

// Style 112: RDX Star Accent
addStyle('gamer', 'gamer_rdx_star_accent', 'Rdx͢ ', ' 𖹭࿐⁶⁷', {
  A: "A⨳", B: "B⨳", C: "C⨳", D: "D⨳", E: "E⨳", F: "F⨳", G: "G⨳", H: "H⨳", I: "I⨳", J: "J⨳",
  K: "K⨳", L: "L⨳", M: "M⨳", N: "N⨳", O: "O⨳", P: "P⨳", Q: "Q⨳", R: "R⨳", S: "S⨳", T: "T⨳",
  U: "U⨳", V: "V⨳", W: "W⨳", X: "X⨳", Y: "Y⨳", Z: "Z⨳",
  a: "a⨳", b: "b⨳", c: "c⨳", d: "d⨳", e: "e⨳", f: "f⨳", g: "g⨳", h: "h⨳", i: "i⨳", j: "j⨳",
  k: "k⨳", l: "l⨳", m: "m⨳", n: "n⨳", o: "o⨳", p: "p⨳", q: "q⨳", r: "r⨳", s: "s⨳", t: "t⨳",
  u: "u⨳", v: "v⨳", w: "w⨳", x: "x⨳", y: "y⨳", z: "z⨳"
});

// Style 113: Gothic Question
addStyle('gamer', 'gamer_gothic_question', '𐌽𐌰𐌼𐌴', '_??', {
  A: "𐌰", B: "𐌱", C: "𐌲", D: "𐌳", E: "𐌴", F: "𐍆", G: "𐌾", H: "𐌷", I: "𐌹", J: "𐌻",
  K: "𐌺", L: "𐍊", M: "𐌼", N: "𐌽", O: "𐍈", P: "𐍉", Q: "𐍁", R: "𐍂", S: "𐍃", T: "𐍄",
  U: "𐍀", V: "𝚅", W: "𐌸", X: "𐍇", Y: "𐍅", Z: "𐌶",
  a: "𐌰", b: "𐌱", c: "𐌲", d: "𐌳", e: "𐌴", f: "𐍆", g: "𐌾", h: "𐌷", i: "𐌹", j: "𐌻",
  k: "𐌺", l: "𐍊", m: "𐌼", n: "𐌽", o: "𐍈", p: "𐍉", q: "𐍁", r: "𐍂", s: "𐍃", t: "𐍄",
  u: "𐍀", v: "𝚅", w: "𐌸", x: "𐍇", y: "𐍅", z: "𐌶"
});

// Style 114: Bhachi Sans
addStyle('gamer', 'gamer_bhachi_sans', '𝐵𝘩ꫝ𝑖_', ' 𝟶𝟽', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 115: Star Yin Yang
addStyle('gamer', 'gamer_star_yin_yang', '☆', '☆☯࿐𝟎𝟗', {
  A: "☆A☆", B: "☆B☆", C: "☆C☆", D: "☆D☆", E: "☆E☆", F: "☆F☆", G: "☆G☆", H: "☆H☆", I: "☆I☆", J: "☆J☆",
  K: "☆K☆", L: "☆L☆", M: "☆M☆", N: "☆N☆", O: "☆O☆", P: "☆P☆", Q: "☆Q☆", R: "☆R☆", S: "☆S☆", T: "☆T☆",
  U: "☆U☆", V: "☆V☆", W: "☆W☆", X: "☆X☆", Y: "☆Y☆", Z: "☆Z☆",
  a: "☆a☆", b: "☆b☆", c: "☆c☆", d: "☆d☆", e: "☆e☆", f: "☆f☆", g: "☆g☆", h: "☆h☆", i: "☆i☆", j: "☆j☆",
  k: "☆k☆", l: "☆l☆", m: "☆m☆", n: "☆n☆", o: "☆o☆", p: "☆p☆", q: "☆q☆", r: "☆r☆", s: "☆s☆", t: "☆t☆",
  u: "☆u☆", v: "☆v☆", w: "☆w☆", x: "☆x☆", y: "☆y☆", z: "☆z☆"
});

// Style 116: Miao Xi Accent
addStyle('gamer', 'gamer_miao_xi_accent', '𖹭 ', ' 𖹭 모', {
  A: "A͢", B: "B͢", C: "C͢", D: "D͢", E: "E͢", F: "F͢", G: "G͢", H: "H͢", I: "I͢", J: "J͢",
  K: "K͢", L: "L͢", M: "M͢", N: "N͢", O: "O͢", P: "P͢", Q: "Q͢", R: "R͢", S: "S͢", T: "T͢",
  U: "U͢", V: "V͢", W: "W͢", X: "X͢", Y: "Y͢", Z: "Z͢",
  a: "a͢", b: "b͢", c: "c͢", d: "d͢", e: "e͢", f: "f͢", g: "g͢", h: "h͢", i: "i͢", j: "j͢",
  k: "k͢", l: "l͢", m: "m͢", n: "n͢", o: "o͢", p: "p͢", q: "q͢", r: "r͢", s: "s͢", t: "t͢",
  u: "u͢", v: "v͢", w: "w͢", x: "x͢", y: "y͢", z: "z͢"
});

// Style 117: MR Beta Boy
addStyle('gamer', 'gamer_mr_beta_boy', 'ᴍʀ⟅ ', ' _βØᎩ', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 118: GS Short Stroke
addStyle('gamer', 'gamer_gs_short_stroke', 'ɢs͢ ', ' ✓✓', {
  A: "A̷̷", B: "B̷̷", C: "C̷̷", D: "D̷̷", E: "E̷̷", F: "F̷̷", G: "G̷̷", H: "H̷̷", I: "I̷̷", J: "J̷̷",
  K: "K̷̷", L: "L̷̷", M: "M̷̷", N: "N̷̷", O: "O̷̷", P: "P̷̷", Q: "Q̷̷", R: "R̷̷", S: "S̷̷", T: "T̷̷",
  U: "U̷̷", V: "V̷̷", W: "W̷̷", X: "X̷̷", Y: "Y̷̷", Z: "Z̷̷",
  a: "a̷", b: "b̷", c: "c̷", d: "d̷", e: "e̷", f: "f̷", g: "g̷", h: "h̷", i: "i̷", j: "j̷",
  k: "k̷", l: "l̷", m: "m̷", n: "n̷", o: "o̷", p: "p̷", q: "q̷", r: "r̷", s: "s̷", t: "t̷",
  u: "u̷", v: "v̷", w: "w̷", x: "x̷", y: "y̷", z: "z̷"
});

// Style 119: Rune Star Squared
addStyle('gamer', 'gamer_rune_star_squared', 'ᛖᚱ⋆.𐙚 ', '_??', {
  A: "🄰", B: "🄱", C: "🄲", D: "🄳", E: "🄴", F: "🄵", G: "🄶", H: "🄷", I: "🄸", J: "🄹",
  K: "🄺", L: "🄻", M: "🄼", N: "🄽", O: "🄾", P: "🄿", Q: "🅀", R: "🅁", S: "🅂", T: "🅃",
  U: "🅄", V: "🅅", W: "🅆", X: "🅇", Y: "🅈", Z: "🅉",
  a: "🄰", b: "🄱", c: "🄲", d: "🄳", e: "🄴", f: "🄵", g: "🄶", h: "🄷", i: "🄸", j: "🄹",
  k: "🄺", l: "🄻", m: "🄼", n: "🄽", o: "🄾", p: "🄿", q: "🅀", r: "🅁", s: "🅂", t: "🅃",
  u: "🅄", v: "🅅", w: "🅆", x: "🅇", y: "🅈", z: "🅉"
});

// Style 120: Pro Arrow Short Stroke
addStyle('gamer', 'gamer_pro_arrow_short', '►►►', ' ☂Ꭾʀᴏ ‹𝟹', {
  A: "A̶", B: "B̶", C: "C̶", D: "D̶", E: "E̶", F: "F̶", G: "G̶", H: "H̶", I: "I̶", J: "J̶",
  K: "K̶", L: "L̶", M: "M̶", N: "N̶", O: "O̶", P: "P̶", Q: "Q̶", R: "R̶", S: "S̶", T: "T̶",
  U: "U̶", V: "V̶", W: "W̶", X: "X̶", Y: "Y̶", Z: "Z̶",
  a: "a̶", b: "b̶", c: "c̶", d: "d̶", e: "e̶", f: "f̶", g: "g̶", h: "h̶", i: "i̶", j: "j̶",
  k: "k̶", l: "l̶", m: "m̶", n: "n̶", o: "o̶", p: "p̶", q: "q̶", r: "r̶", s: "s̶", t: "t̶",
  u: "u̶", v: "v̶", w: "w̶", x: "x̶", y: "y̶", z: "z̶"
});

// Style 121: Wifi Bold Italic
addStyle('gamer', 'gamer_wifi_bold_italic', 'ᴡɪꜰi͢ ᯤ ', '_ ᴳ̸ᴬ̸ᴹ̸ᴱ̸ᴿ̸', {
  A: "𝑨", B: "𝑩", C: "𝑪", D: "𝑫", E: "𝑬", F: "𝑭", G: "𝑮", H: "𝑯", I: "𝑰", J: "𝑱",
  K: "𝑲", L: "𝑳", M: "𝑴", N: "𝑵", O: "𝑶", P: "𝑷", Q: "𝑸", R: "𝑹", S: "𝑺", T: "𝑻",
  U: "𝑼", V: "𝑽", W: "𝑾", X: "𝑿", Y: "𝒀", Z: "𝒁",
  a: "𝒂", b: "𝒃", c: "𝒄", d: "𝒅", e: "𝒆", f: "𝒇", g: "𝒈", h: "𝒉", i: "𝒊", j: "𝒋",
  k: "𝒌", l: "𝒍", m: "𝒎", n: "𝒏", o: "𝒐", p: "𝒑", q: "𝒒", r: "𝒓", s: "𝒔", t: "𝒕",
  u: "𝒖", v: "𝒗", w: "𝒘", x: "𝒙", y: "𝒚", z: "𝒛"
});

// Style 122: Dash Negative Korean
addStyle('gamer', 'gamer_dash_negative_korean', '🅝─🅐─🅜─🅔 ', ' 모', {
  A: "🅐", B: "🅑", C: "🅒", D: "🅓", E: "🅔", F: "🅕", G: "🅖", H: "🅗", I: "🅘", J: "🅙",
  K: "🅚", L: "🅛", M: "🅜", N: "🅝", O: "🅞", P: "🅟", Q: "🅠", R: "🅡", S: "🅢", T: "🅣",
  U: "🅤", V: "🅥", W: "🅦", X: "🅧", Y: "🅨", Z: "🅩",
  a: "🅐", b: "🅑", c: "🅒", d: "🅓", e: "🅔", f: "🅕", g: "🅖", h: "🅗", i: "🅘", j: "🅙",
  k: "🅚", l: "🅛", m: "🅜", n: "🅝", o: "🅞", p: "🅟", q: "🅠", r: "🅡", s: "🅢", t: "🅣",
  u: "🅤", v: "🅥", w: "🅦", x: "🅧", y: "🅨", z: "🅩"
});

// Style 123: Cute Kaomoji Monospace
addStyle('gamer', 'gamer_cute_kaomoji_monospace', 'ᶜᵘᵗᵉ ˃ᴗ˂ ', '⋆˙𓂃모', {
  A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝",
  K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
  U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭",
  a: "𝙖", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝙚", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝙞", j: "𝙟",
  k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝙤", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
  u: "𝙪", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝙮", z: "𝙯"
});

// Style 124: Heart Math Check
addStyle('gamer', 'gamer_heart_math_check', '𓆩♡𓆪⋆⋅', '_➆➆✓', {
  a: "𝛂", b: "𝛃", c: "𝛇", d: "𝛅", e: "𝛆", f: "𝛇", g: "𝛓", h: "𝛑", i: "𝖎", j: "𝖏",
  k: "𝛋", l: "𝛊", m: "𝛍", n: "𝛈", o: "𝛐", p: "𝛒", q: "𝛗", r: "𝛑", s: "𝛔", t: "𝛕",
  u: "𝛖", v: "𝛎", w: "𝛚", x: "𝛘", y: "𝛙", z: "𝛏",
  A: "Α", B: "Β", C: "Γ", D: "Δ", E: "Ε", F: "Ζ", G: "Η", H: "Θ", I: "Ι", J: "Κ",
  K: "Λ", L: "Μ", M: "Ν", N: "Ξ", O: "Ο", P: "Π", Q: "Ρ", R: "Σ", S: "Τ", T: "Υ",
  U: "Φ", V: "Χ", W: "Ψ", X: "Ω", Y: "Α", Z: "Β"
});

// Style 125: Lish Sans
addStyle('gamer', 'gamer_lish_sans', 'ꭷꭾܔ ', '⓿❼࿐', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤̆̈", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 126: Greek Sans Check
addStyle('gamer', 'gamer_greek_sans_check', '𝛈𝛐ܔ ❇︎', '⋆˙⟡ ✓', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤̆̈", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 127: Scary Italic Math
addStyle('gamer', 'gamer_scary_italic_math', 'ѕc𔓎яγ ⌇', '⌇ _ᶻ ⁹⁹⁹⁺', {
  A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
  K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
});

// Style 128: R Y A L Numbers
addStyle('gamer', 'gamer_ryal_numbers', '𝑹 ⟡ 𝒀 𝑨 𝑳_', ' 亗𝟹 𝟺 𝟻', {
  A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
  K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
});

// Style 129: PR Gothic
addStyle('gamer', 'gamer_pr_gothic', '𝗣 𝗥 ☯ ㋚ ', '_모', {
  A: "𐌰", B: "𐌱", C: "𐌲", D: "𐌳", E: "𐌴", F: "𐍆", G: "𐌾", H: "𐌷", I: "𐌹", J: "𐌻",
  K: "𐌺", L: "𐍊", M: "𐌼", N: "𐌽", O: "𐍈", P: "𐍉", Q: "𐍁", R: "𐍂", S: "𐍃", T: "𐍄",
  U: "𐍀", V: "𝚅", W: "𐌸", X: "𐍇", Y: "𐍅", Z: "𐌶",
  a: "𐌰", b: "𐌱", c: "𐌲", d: "𐌳", e: "𐌴", f: "𐍆", g: "𐌾", h: "𐌷", i: "𐌹", j: "𐌻",
  k: "𐌺", l: "𐍊", m: "𐌼", n: "𐌽", o: "𐍈", p: "𐍉", q: "𐍁", r: "𐍂", s: "𐍃", t: "𐍄",
  u: "𐍀", v: "𝚅", w: "𐌸", x: "𐍇", y: "𐍅", z: "𐌶"
});

// Style 130: SA Bold Italic
addStyle('gamer', 'gamer_sa_bold_italic', 'S̷A̷☹︎ ', '_⚔❶❶', {
  A: "𝑨", B: "𝑩", C: "𝑪", D: "𝑫", E: "𝑬", F: "𝑭", G: "𝑮", H: "𝑯", I: "𝑰", J: "𝑱",
  K: "𝑲", L: "𝑳", M: "𝑴", N: "𝑵", O: "𝑶", P: "𝑷", Q: "𝑸", R: "𝑹", S: "𝑺", T: "𝑻",
  U: "𝑼", V: "𝑽", W: "𝑾", X: "𝑿", Y: "𝒀", Z: "𝒁",
  a: "𝒂", b: "𝒃", c: "𝒄", d: "𝒅", e: "𝒆", f: "𝒇", g: "𝒈", h: "𝒉", i: "𝒊", j: "𝒋",
  k: "𝒌", l: "𝒍", m: "𝒎", n: "𝒏", o: "𝒐", p: "𝒑", q: "𝒒", r: "𝒓", s: "𝒔", t: "𝒕",
  u: "𝒖", v: "𝒗", w: "𝒘", x: "𝒙", y: "𝒚", z: "𝒛"
});

// Style 131: Only Bold Italic
addStyle('gamer', 'gamer_only_bold_italic', 'Oɴʟʏ ', ' 모!', {
  A: "𝑨", B: "𝑩", C: "𝑪", D: "𝑫", E: "𝑬", F: "𝑭", G: "𝑮", H: "𝑯", I: "𝑰", J: "𝑱",
  K: "𝑲", L: "𝑳", M: "𝑴", N: "𝑵", O: "𝑶", P: "𝑷", Q: "𝑸", R: "𝑹", S: "𝑺", T: "𝑻",
  U: "𝑼", V: "𝑽", W: "𝑾", X: "𝑿", Y: "𝒀", Z: "𝒁",
  a: "𝒂", b: "𝒃", c: "𝒄", d: "𝒅", e: "𝒆", f: "𝒇", g: "𝒈", h: "𝒉", i: "𝒊", j: "𝒋",
  k: "𝒌", l: "𝒍", m: "𝒎", n: "𝒏", o: "𝒐", p: "𝒑", q: "𝒒", r: "𝒓", s: "𝒔", t: "𝒕",
  u: "𝒖", v: "𝒗", w: "𝒘", x: "𝒙", y: "𝒚", z: "𝒛"
});

// Style 132: Danger Monospace
addStyle('gamer', 'gamer_danger_monospace', 'Ꭰꫝɴɢᴇʀ メ ', ' 모', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
  K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
  U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
  k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
  u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣"
});

// Style 133: Box Sans
addStyle('gamer', 'gamer_box_sans', '░', '░_𝟖𝟖', {
  A: "𝘈░", B: "𝘉░", C: "𝘊░", D: "𝘋░", E: "𝘌░", F: "𝘍░", G: "𝘎░", H: "𝘏░", I: "𝘐░", J: "𝘑░",
  K: "𝘒░", L: "𝘓░", M: "𝘔░", N: "𝘕░", O: "𝘖░", P: "𝘗░", Q: "𝘘░", R: "𝘙░", S: "𝘚░", T: "𝘛░",
  U: "𝘜░", V: "𝘝░", W: "𝘞░", X: "𝘟░", Y: "𝘠░", Z: "𝘡░",
  a: "𝘢░", b: "𝘣░", c: "𝘤░", d: "𝘥░", e: "𝘦░", f: "𝘧░", g: "𝘨░", h: "𝘩░", i: "𝘪░", j: "𝘫░",
  k: "𝘬░", l: "𝘭░", m: "𝘮░", n: "𝘯░", o: "𝘰░", p: "𝘱░", q: "𝘲░", r: "𝘳░", s: "𝘴░", t: "𝘵░",
  u: "𝘶░", v: "𝘷░", w: "𝘸░", x: "𝘹░", y: "𝘺░", z: "𝘻░"
});

// Style 134: IM Boss Fullwidth
addStyle('gamer', 'gamer_im_boss_fullwidth', 'ᴵᵐܔ', '࿐ᴮᴼˢˢ', {
  A: "Ａ", B: "Ｂ", C: "Ｃ", D: "Ｄ", E: "Ｅ", F: "Ｆ", G: "Ｇ", H: "Ｈ", I: "Ｉ", J: "Ｊ",
  K: "Ｋ", L: "Ｌ", M: "Ｍ", N: "Ｎ", O: "Ｏ", P: "Ｐ", Q: "Ｑ", R: "Ｒ", S: "Ｓ", T: "Ｔ",
  U: "Ｕ", V: "Ｖ", W: "Ｗ", X: "Ｘ", Y: "Ｙ", Z: "Ｚ",
  a: "ａ", b: "ｂ", c: "ｃ", d: "ｄ", e: "ｅ", f: "ｆ", g: "ｇ", h: "ｈ", i: "ｉ", j: "ｊ",
  k: "ｋ", l: "ｌ", m: "ｍ", n: "ｎ", o: "ｏ", p: "ｐ", q: "ｑ", r: "ｒ", s: "ｓ", t: "ｔ",
  u: "ｕ", v: "ｖ", w: "ｗ", x: "ｘ", y: "ｙ", z: "ｚ"
});

// Style 135: Numbers Greek
addStyle('gamer', 'gamer_numbers_greek', 'ͥ ͣ ͫ• ', ' ☂ ¹⁸⁺', {
  a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
  k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ",
  A: "Α", B: "Β", C: "C", D: "Ɗ", E: "Ε", F: "Ƒ", G: "Ɠ", H: "Н", I: "Ι", J: "Ј",
  K: "Κ", L: "ℓ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ջ", R: "Я", S: "Ѕ", T: "Τ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Ƶ"
});

// Style 136: Im Triangle Accent
addStyle('gamer', 'gamer_im_triangle', '༄『ᴵᵐ』•', '™×͜×࿐', {
  A: "A̸▵", B: "B̸▵", C: "C̸▵", D: "D̸▵", E: "E̸▵", F: "F̸▵", G: "G̸▵", H: "H̸▵", I: "I̸▵", J: "J̸▵",
  K: "K̸▵", L: "L̸▵", M: "M̸▵", N: "N̸▵", O: "O̸▵", P: "P̸▵", Q: "Q̸▵", R: "R̸▵", S: "S̸▵", T: "T̸▵",
  U: "U̸▵", V: "V̸▵", W: "W̸▵", X: "X̸▵", Y: "Y̸▵", Z: "Z̸▵",
  a: "a̸▵", b: "b̸▵", c: "c̸▵", d: "d̸▵", e: "e̸▵", f: "f̸▵", g: "g̸▵", h: "h̸▵", i: "i̸▵", j: "j̸▵",
  k: "k̸▵", l: "l̸▵", m: "m̸▵", n: "n̸▵", o: "o̸▵", p: "p̸▵", q: "q̸▵", r: "r̸▵", s: "s̸▵", t: "t̸▵",
  u: "u̸▵", v: "v̸▵", w: "w̸▵", x: "x̸▵", y: "y̸▵", z: "z̸▵"
});

// Style 137: Im Sans Serif
addStyle('gamer', 'gamer_im_sans', '𝓲ꪑ〲', '㋚⁹⁹⁹⁺࿐', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 138: Koppa Bold Italic
addStyle('gamer', 'gamer_koppa_bold_italic', 'ϟ', 'ϟ ᵝᵒˢˢ', {
  A: "𝑨", B: "𝑩", C: "𝑪", D: "𝑫", E: "𝑬", F: "𝑭", G: "𝑮", H: "𝑯", I: "𝑰", J: "𝑱",
  K: "𝑲", L: "𝑳", M: "𝑴", N: "𝑵", O: "𝑶", P: "𝑷", Q: "𝑸", R: "𝑹", S: "𝑺", T: "𝑻",
  U: "𝑼", V: "𝑽", W: "𝑾", X: "𝑿", Y: "𝒀", Z: "𝒁",
  a: "𝒂", b: "𝒃", c: "𝒄", d: "𝒅", e: "𝒆", f: "𝒇", g: "𝒈", h: "𝒉", i: "𝒊", j: "𝒋",
  k: "𝒌", l: "𝒍", m: "𝒎", n: "𝒏", o: "𝒐", p: "𝒑", q: "𝒒", r: "𝒓", s: "𝒔", t: "𝒕",
  u: "𝒖", v: "𝒗", w: "𝒘", x: "𝒙", y: "𝒚", z: "𝒛"
});

// Style 139: Boss Circled
addStyle('gamer', 'gamer_boss_circled', 'ᴮᴼˢˢܔ', '☆࿐', {
  A: "Ⓐ", B: "Ⓑ", C: "Ⓒ", D: "Ⓓ", E: "Ⓔ", F: "Ⓕ", G: "Ⓖ", H: "Ⓗ", I: "Ⓘ", J: "Ⓙ",
  K: "Ⓚ", L: "Ⓛ", M: "Ⓜ", N: "Ⓝ", O: "Ⓞ", P: "Ⓟ", Q: "Ⓠ", R: "Ⓡ", S: "Ⓢ", T: "Ⓣ",
  U: "Ⓤ", V: "Ⓥ", W: "Ⓦ", X: "Ⓧ", Y: "Ⓨ", Z: "Ⓩ",
  a: "ⓐ", b: "ⓑ", c: "ⓒ", d: "ⓓ", e: "ⓔ", f: "ⓕ", g: "ⓖ", h: "ⓗ", i: "ⓘ", j: "ⓙ",
  k: "ⓚ", l: "ⓛ", m: "ⓜ", n: "ⓝ", o: "ⓞ", p: "ⓟ", q: "ⓠ", r: "ⓡ", s: "ⓢ", t: "ⓣ",
  u: "ⓤ", v: "ⓥ", w: "ⓦ", x: "ⓧ", y: "ⓨ", z: "ⓩ"
});

// Style 140: OP Sans Serif
addStyle('gamer', 'gamer_op_sans', '✓ＯＰ? ', '★࿐', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 141: Adi Shakti Script
addStyle('gamer', 'gamer_adi_shakti_script', '☬█▓▒░ ', ' ░▒▓█☬', {
  A: "𝒜", B: "𝐵", C: "𝒞", D: "𝒟", E: "𝐸", F: "𝐹", G: "𝒢", H: "𝐻", I: "𝐼", J: "𝒥",
  K: "𝒦", L: "𝐿", M: "𝑀", N: "𝒩", O: "𝒪", P: "𝒫", Q: "𝒬", R: "𝑅", S: "𝒮", T: "𝒯",
  U: "𝒰", V: "𝒱", W: "𝒲", X: "𝒳", Y: "𝒴", Z: "𝒵",
  a: "𝒶", b: "𝒷", c: "𝒸", d: "𝒹", e: "𝑒", f: "𝒻", g: "𝑔", h: "𝒽", i: "𝒾", j: "𝒿",
  k: "𝓀", l: "𝓁", m: "𝓂", n: "𝓃", o: "☯", p: "𝓅", q: "𝓆", r: "𝓇", s: "𝓈", t: "𝓉",
  u: "𝓊", v: "𝓋", w: "𝓌", x: "𝓍", y: "𝓎", z: "𝓏"
});

// Style 142: Diamond Small Caps
addStyle('gamer', 'gamer_diamond_small_caps', '✦°፠ ', ' ፠°✦⁹⁹⁹', {
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 143: Short Stroke Decorated
addStyle('gamer', 'gamer_short_stroke_decorated', '༄⁺˖ ', ' ˖⁺༄༻', {
  A: "A̷", B: "B̷", C: "C̷", D: "D̷", E: "E̷", F: "F̷", G: "G̷", H: "H̷", I: "I̷", J: "J̷",
  K: "K̷", L: "L̷", M: "M̷", N: "N̷", O: "O̷", P: "P̷", Q: "Q̷", R: "R̷", S: "S̷", T: "T̷",
  U: "U̷", V: "V̷", W: "W̷", X: "X̷", Y: "Y̷", Z: "Z̷",
  a: "a̷", b: "b̷", c: "c̷", d: "d̷", e: "e̷", f: "f̷", g: "g̷", h: "h̷", i: "i̷", j: "j̷",
  k: "k̷", l: "l̷", m: "m̷", n: "n̷", o: "o̷", p: "p̷", q: "q̷", r: "r̷", s: "s̷", t: "t̷",
  u: "u̷", v: "v̷", w: "w̷", x: "x̷", y: "y̷", z: "z̷"
});

// Style 144: Box Bold Italic
addStyle('gamer', 'gamer_box_bold_italic', '════ ◥▶ ', ' ◀◤ ════', {
  A: "𝘼", B: "𝘽", C: "𝘾", D: "𝘿", E: "𝙀", F: "𝙁", G: "𝙂", H: "𝙃", I: "𝙄", J: "𝙅",
  K: "𝙆", L: "𝙇", M: "𝙈", N: "𝙉", O: "𝙊", P: "𝙋", Q: "𝙌", R: "𝙍", S: "𝙎", T: "𝙏",
  U: "𝙐", V: "𝙑", W: "𝙒", X: "𝙓", Y: "𝙔", Z: "𝙕",
  a: "𝙖", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝙚", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝙞", j: "𝙟",
  k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝙤", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
  u: "𝙪", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝙮", z: "𝙯"
});

// Style 145: Star Circle Accent
addStyle('gamer', 'gamer_star_circle_accent', '✦⟡ ', ' ⟡✦ 모', {
  A: "A͎", B: "B͎", C: "C͎", D: "D͎", E: "E͎", F: "F͎", G: "G͎", H: "H͎", I: "I͎", J: "J͎",
  K: "K͎", L: "L͎", M: "M͎", N: "N͎", O: "O͎", P: "P͎", Q: "Q͎", R: "R͎", S: "S͎", T: "T͎",
  U: "U͎", V: "V͎", W: "W͎", X: "X͎", Y: "Y͎", Z: "Z͎",
  a: "a͎", b: "b͎", c: "c͎", d: "d͎", e: "e͎", f: "f͎", g: "g͎", h: "h͎", i: "i͎", j: "j͎",
  k: "k͎", l: "l͎", m: "m͎", n: "n͎", o: "o͎", p: "p͎", q: "q͎", r: "r͎", s: "s͎", t: "t͎",
  u: "u͎", v: "v͎", w: "w͎", x: "x͎", y: "y͎", z: "z͎"
});

// Style 146: Egyptian Bold Italic
addStyle('gamer', 'gamer_egyptian_bold_italic', '꧁𓊈𒆜', '𒆜𓊉꧂', {
  A: "𝘼", B: "𝘽", C: "𝘾", D: "𝘿", E: "𝙀", F: "𝙁", G: "𝙂", H: "𝙃", I: "𝙄", J: "𝙅",
  K: "𝙆", L: "𝙇", M: "𝙈", N: "𝙉", O: "𝙊", P: "𝙋", Q: "𝙌", R: "𝙍", S: "𝙎", T: "𝙏",
  U: "𝙐", V: "𝙑", W: "𝙒", X: "𝙓", Y: "𝙔", Z: "𝙕",
  a: "𝙖", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝙚", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝙞", j: "𝙟",
  k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝙤", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
  u: "𝙪", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝙮", z: "𝙯"
});

// Style 147: Star Wave Accent
addStyle('gamer', 'gamer_star_wave_accent', '★►░', '◄░★', {
  A: "A̾", B: "B̾", C: "C̾", D: "D̾", E: "E̾", F: "F̾", G: "G̾", H: "H̾", I: "I̾", J: "J̾",
  K: "K̾", L: "L̾", M: "M̾", N: "N̾", O: "O̾", P: "P̾", Q: "Q̾", R: "R̾", S: "S̾", T: "T̾",
  U: "U̾", V: "V̾", W: "W̾", X: "X̾", Y: "Y̾", Z: "Z̾",
  a: "a̾", b: "b̾", c: "c̾", d: "d̾", e: "e̾", f: "f̾", g: "g̾", h: "h̾", i: "i̾", j: "j̾",
  k: "k̾", l: "l̾", m: "m̾", n: "n̾", o: "o̾", p: "p̾", q: "q̾", r: "r̾", s: "s̾", t: "t̾",
  u: "u̾", v: "v̾", w: "w̾", x: "x̾", y: "y̾", z: "z̾"
});

// Style 148: Boy Squared
addStyle('gamer', 'gamer_boy_squared', 'βØᎩ‹𝟹 ', '༻❖✦', {
  A: "🄰", B: "🄱", C: "🄲", D: "🄳", E: "🄴", F: "🄵", G: "🄶", H: "🄷", I: "🄸", J: "🄹",
  K: "🄺", L: "🄻", M: "🄼", N: "🄽", O: "🄾", P: "🄿", Q: "🅀", R: "🅁", S: "🅂", T: "🅃",
  U: "🅄", V: "🅅", W: "🅆", X: "🅇", Y: "🅈", Z: "🅉",
  a: "🄰", b: "🄱", c: "🄲", d: "🄳", e: "🄴", f: "🄵", g: "🄶", h: "🄷", i: "🄸", j: "🄹",
  k: "🄺", l: "🄻", m: "🄼", n: "🄽", o: "🄾", p: "🄿", q: "🅀", r: "🅁", s: "🅂", t: "🅃",
  u: "🅄", v: "🅅", w: "🅆", x: "🅇", y: "🅈", z: "🅉"
});

// Style 21: Tai Airplane Accent
addStyle('fancy', 'fancy_tai_airplane', 'ᯓ ✈︎', 'ᯓ ✈︎☁︎', {
  A: "ᴬ͎", B: "ᴮ͎", C: "ᶜ͎", D: "ᴰ͎", E: "ᴱ͎", F: "ᶠ͎", G: "ᴳ͎", H: "ᴴ͎", I: "ᴵ͎", J: "ᴶ͎",
  K: "ᴷ͎", L: "ᴸ͎", M: "ᴹ͎", N: "ᴺ͎", O: "ᴼ͎", P: "ᴾ͎", Q: "ᵠ͎", R: "ᴿ͎", S: "ˢ͎", T: "ᵀ͎",
  U: "ᵁ͎", V: "ⱽ͎", W: "ᵂ͎", X: "ˣ͎", Y: "ʸ͎", Z: "ᶻ͎",
  a: "ᵃ͎", b: "ᵇ͎", c: "ᶜ͎", d: "ᵈ͎", e: "ᵉ͎", f: "ᶠ͎", g: "ᵍ͎", h: "ʰ͎", i: "ⁱ͎", j: "ʲ͎",
  k: "ᵏ͎", l: "ˡ͎", m: "ᵐ͎", n: "ⁿ͎", o: "ᵒ͎", p: "ᵖ͎", q: "ᑫ͎", r: "ʳ͎", s: "ˢ͎", t: "ᵗ͎",
  u: "ᵘ͎", v: "ᵛ͎", w: "ʷ͎", x: "ˣ͎", y: "ʸ͎", z: "ᶻ͎"
});

// Style 22: Xi Cloud Accent
addStyle('fancy', 'fancy_xi_cloud', 'Ξ☁︎ᯓ', 'ᯓ ☁︎', {
  A: "ᴬ͎", B: "ᴮ͎", C: "ᶜ͎", D: "ᴰ͎", E: "ᴱ͎", F: "ᶠ͎", G: "ᴳ͎", H: "ᴴ͎", I: "ᴵ͎", J: "ᴶ͎",
  K: "ᴷ͎", L: "ᴸ͎", M: "ᴹ͎", N: "ᴺ͎", O: "ᴼ͎", P: "ᴾ͎", Q: "ᵠ͎", R: "ᴿ͎", S: "ˢ͎", T: "ᵀ͎",
  U: "ᵁ͎", V: "ⱽ͎", W: "ᵂ͎", X: "ˣ͎", Y: "ʸ͎", Z: "ᶻ͎",
  a: "ᵃ͎", b: "ᵇ͎", c: "ᶜ͎", d: "ᵈ͎", e: "ᵉ͎", f: "ᶠ͎", g: "ᵍ͎", h: "ʰ͎", i: "ⁱ͎", j: "ʲ͎",
  k: "ᵏ͎", l: "ˡ͎", m: "ᵐ͎", n: "ⁿ͎", o: "ᵒ͎", p: "ᵖ͎", q: "ᑫ͎", r: "ʳ͎", s: "ˢ͎", t: "ᵗ͎",
  u: "ᵘ͎", v: "ᵛ͎", w: "ʷ͎", x: "ˣ͎", y: "ʸ͎", z: "ᶻ͎"
});

// Style 23: Sparkle Arrow Negative Circle
addStyle('fancy', 'fancy_sparkle_arrow_negative', '✨✾⇝', '⇜✾✨', {
  A: "🅐", B: "🅑", C: "🅒", D: "🅓", E: "🅔", F: "🅕", G: "🅖", H: "🅗", I: "🅘", J: "🅙",
  K: "🅚", L: "🅛", M: "🅜", N: "🅝", O: "🅞", P: "🅟", Q: "🅠", R: "🅡", S: "🅢", T: "🅣",
  U: "🅤", V: "🅥", W: "🅦", X: "🅧", Y: "🅨", Z: "🅩",
  a: "🅐", b: "🅑", c: "🅒", d: "🅓", e: "🅔", f: "🅕", g: "🅖", h: "🅗", i: "🅘", j: "🅙",
  k: "🅚", l: "🅛", m: "🅜", n: "🅝", o: "🅞", p: "🅟", q: "🅠", r: "🅡", s: "🅢", t: "🅣",
  u: "🅤", v: "🅥", w: "🅦", x: "🅧", y: "🅨", z: "🅩"
});

// Style 24: Box Squared Star
addStyle('fancy', 'fancy_box_squared_star', '░', '░', {
  A: "🄰", B: "🄱", C: "🄲", D: "🄳", E: "🄴", F: "🄵", G: "🄶", H: "🄷", I: "🄸", J: "🄹",
  K: "🄺", L: "🄻", M: "🄼", N: "🄽", O: "🄾", P: "🄿", Q: "🅀", R: "🅁", S: "🅂", T: "🅃",
  U: "🅄", V: "🅅", W: "🅆", X: "🅇", Y: "🅈", Z: "🅉",
  a: "🄰", b: "🄱", c: "🄲", d: "🄳", e: "🄴", f: "🄵", g: "🄶", h: "🄷", i: "🄸", j: "🄹",
  k: "🄺", l: "🄻", m: "🄼", n: "🄽", o: "🄾", p: "🄿", q: "🅀", r: "🅁", s: "🅂", t: "🅃",
  u: "🅄", v: "🅅", w: "🅆", x: "🅇", y: "🅈", z: "🅉"
});

// Style 25: Simple Negative Circle
addStyle('fancy', 'fancy_simple_negative_circle', '', '', {
  A: "🅰", B: "🅱", C: "🅲", D: "🅳", E: "🅴", F: "🅵", G: "🅶", H: "🅷", I: "🅸", J: "🅹",
  K: "🅺", L: "🅻", M: "🅼", N: "🅽", O: "🅾", P: "🅿", Q: "🆀", R: "🆁", S: "🆂", T: "🆃",
  U: "🆄", V: "🆅", W: "🆆", X: "🆇", Y: "🆈", Z: "🆉",
  a: "🅰", b: "🅱", c: "🅲", d: "🅳", e: "🅴", f: "🅵", g: "🅶", h: "🅷", i: "🅸", j: "🅹",
  k: "🅺", l: "🅻", m: "🅼", n: "🅽", o: "🅾", p: "🅿", q: "🆀", r: "🆁", s: "🆂", t: "🆃",
  u: "🆄", v: "🆅", w: "🆆", x: "🆇", y: "🆈", z: "🆉"
});

// Style 26: Circle Small Caps with Dots
addStyle('fancy', 'fancy_circle_small_caps_dots', '｡°░✰', '·✰░°｡', {
  A: "ᴀ·", B: "ʙ·", C: "ᴄ·", D: "ᴅ·", E: "ᴇ·", F: "ꜰ·", G: "ɢ·", H: "ʜ·", I: "ɪ·", J: "ᴊ·",
  K: "ᴋ·", L: "ʟ·", M: "ᴍ·", N: "ɴ·", O: "ᴏ·", P: "ᴘ·", Q: "ǫ·", R: "ʀ·", S: "ꜱ·", T: "ᴛ·",
  U: "ᴜ·", V: "ᴠ·", W: "ᴡ·", X: "x·", Y: "ʏ·", Z: "ᴢ·",
  a: "ᴀ·", b: "ʙ·", c: "ᴄ·", d: "ᴅ·", e: "ᴇ·", f: "ꜰ·", g: "ɢ·", h: "ʜ·", i: "ɪ·", j: "ᴊ·",
  k: "ᴋ·", l: "ʟ·", m: "ᴍ·", n: "ɴ·", o: "ᴏ·", p: "ᴘ·", q: "ǫ·", r: "ʀ·", s: "ꜱ·", t: "ᴛ·",
  u: "ᴜ·", v: "ᴠ·", w: "ᴡ·", x: "x·", y: "ʏ·", z: "ᴢ·"
});

// Style 27: Line Square Accent
addStyle('fancy', 'fancy_line_square_accent', '⊶⊶', '⊶⊶', {
  A: "ᴬ▢", B: "ᴮ▢", C: "ᶜ▢", D: "ᴰ▢", E: "ᴱ▢", F: "ᶠ▢", G: "ᴳ▢", H: "ᴴ▢", I: "ᴵ▢", J: "ᴶ▢",
  K: "ᴷ▢", L: "ᴸ▢", M: "ᴹ▢", N: "ᴺ▢", O: "ᴼ▢", P: "ᴾ▢", Q: "ᵠ▢", R: "ᴿ▢", S: "ˢ▢", T: "ᵀ▢",
  U: "ᵁ▢", V: "ⱽ▢", W: "ᵂ▢", X: "ˣ▢", Y: "ʸ▢", Z: "ᶻ▢",
  a: "ᵃ▢", b: "ᵇ▢", c: "ᶜ▢", d: "ᵈ▢", e: "ᵉ▢", f: "ᶠ▢", g: "ᵍ▢", h: "ʰ▢", i: "ⁱ▢", j: "ʲ▢",
  k: "ᵏ▢", l: "ˡ▢", m: "ᵐ▢", n: "ⁿ▢", o: "ᵒ▢", p: "ᵖ▢", q: "ᵠ▢", r: "ʳ▢", s: "ˢ▢", t: "ᵗ▢",
  u: "ᵘ▢", v: "ᵛ▢", w: "ʷ▢", x: "ˣ▢", y: "ʸ▢", z: "ᶻ▢"
});

// Style 28: Circle Stroke Accent
addStyle('fancy', 'fancy_circle_stroke_accent', '', '·', {
  A: "ᴬ̸◯·", B: "ᴮ̸◯·", C: "ᶜ̸◯·", D: "ᴰ̸◯·", E: "ᴱ̸◯·", F: "ᶠ̸◯·", G: "ᴳ̸◯·", H: "ᴴ̸◯·", I: "ᴵ̸◯·", J: "ᴶ̸◯·",
  K: "ᴷ̸◯·", L: "ᴸ̸◯·", M: "ᴹ̸◯·", N: "ᴺ̸◯·", O: "ᴼ̸◯·", P: "ᴾ̸◯·", Q: "ᵠ̸◯·", R: "ᴿ̸◯·", S: "ˢ̸◯·", T: "ᵀ̸◯·",
  U: "ᵁ̸◯·", V: "ⱽ̸◯·", W: "ᵂ̸◯·", X: "ˣ̸◯·", Y: "ʸ̸◯·", Z: "ᶻ̸◯·",
  a: "ᵃ̸◯·", b: "ᵇ̸◯·", c: "ᶜ̸◯·", d: "ᵈ̸◯·", e: "ᵉ̸◯·", f: "ᶠ̸◯·", g: "ᵍ̸◯·", h: "ʰ̸◯·", i: "ⁱ̸◯·", j: "ʲ̸◯·",
  k: "ᵏ̸◯·", l: "ˡ̸◯·", m: "ᵐ̸◯·", n: "ⁿ̸◯·", o: "ᵒ̸◯·", p: "ᵖ̸◯·", q: "ᵠ̸◯·", r: "ʳ̸◯·", s: "ˢ̸◯·", t: "ᵗ̸◯·",
  u: "ᵘ̸◯·", v: "ᵛ̸◯·", w: "ʷ̸◯·", x: "ˣ̸◯·", y: "ʸ̸◯·", z: "ᶻ̸◯·"
});

// Style 29: Egyptian Tilde
addStyle('fancy', 'fancy_egyptian_tilde', '𓆩', '𓆪', {
  A: "A̸~~", B: "B̸~~", C: "C̸~~", D: "D̸~~", E: "E̸~~", F: "F̸~~", G: "G̸~~", H: "H̸~~", I: "I̸~~", J: "J̸~~",
  K: "K̸~~", L: "L̸~~", M: "M̸~~", N: "N̸~~", O: "O̸~~", P: "P̸~~", Q: "Q̸~~", R: "R̸~~", S: "S̸~~", T: "T̸~~",
  U: "U̸~~", V: "V̸~~", W: "W̸~~", X: "X̸~~", Y: "Y̸~~", Z: "Z̸~~",
  a: "a̸~~", b: "b̸~~", c: "c̸~~", d: "d̸~~", e: "e̸~~", f: "f̸~~", g: "g̸~~", h: "h̸~~", i: "i̸~~", j: "j̸~~",
  k: "k̸~~", l: "l̸~~", m: "m̸~~", n: "n̸~~", o: "o̸~~", p: "p̸~~", q: "q̸~~", r: "r̸~~", s: "s̸~~", t: "t̸~~",
  u: "u̸~~", v: "v̸~~", w: "w̸~~", x: "x̸~~", y: "y̸~~", z: "z̸~~"
});

// Style 30: Arrow Triangle Accent
addStyle('fancy', 'fancy_arrow_triangle_accent', '➱', '☹', {
  A: "A̸▵", B: "B̸▵", C: "C̸▵", D: "D̸▵", E: "E̸▵", F: "F̸▵", G: "G̸▵", H: "H̸▵", I: "I̸▵", J: "J̸▵",
  K: "K̸▵", L: "L̸▵", M: "M̸▵", N: "N̸▵", O: "O̸▵", P: "P̸▵", Q: "Q̸▵", R: "R̸▵", S: "S̸▵", T: "T̸▵",
  U: "U̸▵", V: "V̸▵", W: "W̸▵", X: "X̸▵", Y: "Y̸▵", Z: "Z̸▵",
  a: "a̸▵", b: "b̸▵", c: "c̸▵", d: "d̸▵", e: "e̸▵", f: "f̸▵", g: "g̸▵", h: "h̸▵", i: "i̸▵", j: "j̸▵",
  k: "k̸▵", l: "l̸▵", m: "m̸▵", n: "n̸▵", o: "o̸▵", p: "p̸▵", q: "q̸▵", r: "r̸▵", s: "s̸▵", t: "t̸▵",
  u: "u̸▵", v: "v̸▵", w: "w̸▵", x: "x̸▵", y: "y̸▵", z: "z̸▵"
});

// Style 31: Curly Circle Accent
addStyle('fancy', 'fancy_curly_circle_accent', '{ ', ' }☻', {
  A: "A̸◉", B: "B̸◉", C: "C̸◉", D: "D̸◉", E: "E̸◉", F: "F̸◉", G: "G̸◉", H: "H̸◉", I: "I̸◉", J: "J̸◉",
  K: "K̸◉", L: "L̸◉", M: "M̸◉", N: "N̸◉", O: "O̸◉", P: "P̸◉", Q: "Q̸◉", R: "R̸◉", S: "S̸◉", T: "T̸◉",
  U: "U̸◉", V: "V̸◉", W: "W̸◉", X: "X̸◉", Y: "Y̸◉", Z: "Z̸◉",
  a: "a̸◉", b: "b̸◉", c: "c̸◉", d: "d̸◉", e: "e̸◉", f: "f̸◉", g: "g̸◉", h: "h̸◉", i: "i̸◉", j: "j̸◉",
  k: "k̸◉", l: "l̸◉", m: "m̸◉", n: "n̸◉", o: "o̸◉", p: "p̸◉", q: "q̸◉", r: "r̸◉", s: "s̸◉", t: "t̸◉",
  u: "u̸◉", v: "v̸◉", w: "w̸◉", x: "x̸◉", y: "y̸◉", z: "z̸◉"
});

// Style 32: Star Greek
addStyle('fancy', 'fancy_star_greek', '—͟͞͞✰', '⋆☁︎˚｡⋆࿐', {
  A: "Λ", B: "Β", C: "Ͻ", D: "Ɗ", E: "Ξ", F: "Ƒ", G: "Ɠ", H: "Ν", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ø", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "U", V: "V", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "λ", b: "β", c: "Ͻ", d: "ɗ", e: "ξ", f: "ƒ", g: "ɠ", h: "н", i: "ι", j: "ј",
  k: "κ", l: "ℓ", m: "μ", n: "η", o: "ø", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "υ", z: "ƶ"
});

// Style 33: Xx Small Caps
addStyle('fancy', 'fancy_xx_small_caps', '░Xx', 'xX░', {
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 34: Vulture Double Struck
addStyle('fancy', 'fancy_vulture_double_struck', '𓄀', 'ঔ༻', {
  A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
  K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
  U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ",
  a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
  k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
  u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫"
});

// Style 35: Gothic Fraktur
addStyle('fancy', 'fancy_gothic_fraktur', '', ' 👒', {
  A: "𝔄", B: "𝔅", C: "ℭ", D: "𝔇", E: "𝔈", F: "𝔉", G: "𝔊", H: "ℌ", I: "ℑ", J: "𝔍",
  K: "𝔎", L: "𝔏", M: "𝔐", N: "𝔑", O: "𝔒", P: "𝔓", Q: "𝔔", R: "ℜ", S: "𝔖", T: "𝔗",
  U: "𝔘", V: "𝔙", W: "𝔚", X: "𝔛", Y: "𝔜", Z: "ℨ",
  a: "𝔞", b: "𝔟", c: "𝔠", d: "𝔡", e: "𝔢", f: "𝔣", g: "𝔤", h: "𝔥", i: "𝔦", j: "𝔧",
  k: "𝔨", l: "𝔩", m: "𝔪", n: "𝔫", o: "𝔬", p: "𝔭", q: "𝔮", r: "𝔯", s: "𝔰", t: "𝔱",
  u: "𝔲", v: "𝔳", w: "𝔴", x: "𝔵", y: "𝔶", z: "𝔷"
});

// Style 36: Kaomoji Subscript
addStyle('fancy', 'fancy_kaomoji_subscript', '(っ"-")╮ =͟͟͞͞🏈 ', ' ╮╮╮', {
  A: "Ḁͦ", B: "B̥ͦ", C: "C̥ͦ", D: "D̥ͦ", E: "E̥ͦ", F: "F̥ͦ", G: "G̥ͦ", H: "H̥ͦ", I: "I̥ͦ", J: "J̥ͦ",
  K: "K̥ͦ", L: "L̥ͦ", M: "M̥ͦ", N: "N̥ͦ", O: "O̥ͦ", P: "P̥ͦ", Q: "Q̥ͦ", R: "R̥ͦ", S: "S̥ͦ", T: "T̥ͦ",
  U: "U̥ͦ", V: "V̥ͦ", W: "W̥ͦ", X: "X̥ͦ", Y: "Y̥ͦ", Z: "Z̥ͦ",
  a: "ḁͦ", b: "b̥ͦ", c: "c̥ͦ", d: "d̥ͦ", e: "e̥ͦ", f: "f̥ͦ", g: "g̥ͦ", h: "h̥ͦ", i: "i̥ͦ", j: "j̥ͦ",
  k: "k̥ͦ", l: "l̥ͦ", m: "m̥ͦ", n: "n̥ͦ", o: "o̥ͦ", p: "p̥ͦ", q: "q̥ͦ", r: "r̥ͦ", s: "s̥ͦ", t: "t̥ͦ",
  u: "u̥ͦ", v: "v̥ͦ", w: "w̥ͦ", x: "x̥ͦ", y: "y̥ͦ", z: "z̥ͦ"
});

// Style 37: Criminal Monospace
addStyle('fancy', 'fancy_criminal_monospace', '★ᴄ͢͢͢ʀɪᴍɪɴᴀʟ『', '』𓆩👹𓆪', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
  K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
  U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
  k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
  u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣"
});

// Style 38: God Armenian Accent
addStyle('fancy', 'fancy_god_armenian', 'ᴳᵒᵈツ', ' ツ♕乂', {
  A: "A֟", B: "B֟", C: "C֟", D: "D֟", E: "E֟", F: "F֟", G: "G֟", H: "H֟", I: "I֟", J: "J֟",
  K: "K֟", L: "L֟", M: "M֟", N: "N֟", O: "O֟", P: "P֟", Q: "Q֟", R: "R֟", S: "S֟", T: "T֟",
  U: "U֟", V: "V֟", W: "W֟", X: "X֟", Y: "Y֟", Z: "Z֟",
  a: "a֟", b: "b֟", c: "c֟", d: "d֟", e: "e֟", f: "f֟", g: "g֟", h: "h֟", i: "i֟", j: "j֟",
  k: "k֟", l: "l֟", m: "m֟", n: "n֟", o: "o֟", p: "p֟", q: "q֟", r: "r֟", s: "s֟", t: "t֟",
  u: "u֟", v: "v֟", w: "w֟", x: "x֟", y: "y֟", z: "z֟"
});

// Style 39: Star Squared
addStyle('fancy', 'fancy_star_squared', ' ┈━═☆', '☆═━┈', {
  A: "🄰", B: "🄱", C: "🄲", D: "🄳", E: "🄴", F: "🄵", G: "🄶", H: "🄷", I: "🄸", J: "🄹",
  K: "🄺", L: "🄻", M: "🄼", N: "🄽", O: "🄾", P: "🄿", Q: "🅀", R: "🅁", S: "🅂", T: "🅃",
  U: "🅄", V: "🅅", W: "🅆", X: "🅇", Y: "🅈", Z: "🅉",
  a: "🄰", b: "🄱", c: "🄲", d: "🄳", e: "🄴", f: "🄵", g: "🄶", h: "🄷", i: "🄸", j: "🄹",
  k: "🄺", l: "🄻", m: "🄼", n: "🄽", o: "🄾", p: "🄿", q: "🅀", r: "🅁", s: "🅂", t: "🅃",
  u: "🅄", v: "🅅", w: "🅆", x: "🅇", y: "🅈", z: "🅉"
});

// Style 40: Music Gothic
addStyle('fancy', 'fancy_music_gothic', '♬lııl', 'lııl♬┈', {
  A: "𐌻", B: "𐌱", C: "𐌲", D: "𐌳", E: "𐌴", F: "𐍆", G: "𐌾", H: "𐌷", I: "𐌹", J: "𝙅",
  K: "𐌺", L: "𐍊", M: "𐌼", N: "𐌽", O: "𐍈", P: "𐍉", Q: "𐍀", R: "𐍂", S: "𐍃", T: "𐍄",
  U: "𐍁", V: "𝙑", W: "𐍉", X: "𐍇", Y: "𐍅", Z: "𐌶",
  a: "𐌻", b: "𐌱", c: "𐌲", d: "𐌳", e: "𐌴", f: "𐍆", g: "𐌾", h: "𐌷", i: "𐌹", j: "𝙅",
  k: "𐌺", l: "𐍊", m: "𐌼", n: "𐌽", o: "𐍈", p: "𐍉", q: "𐍀", r: "𐍂", s: "𐍃", t: "𐍄",
  u: "𐍁", v: "𝙑", w: "𐍉", x: "𐍇", y: "𐍅", z: "𐌶"
});

// Style 41: Palm Greek Bold
addStyle('fancy', 'fancy_palm_greek_bold', '🌴', '🌴', {
  A: "𝚨", B: "𝚩", C: "𝚪", D: "𝚫", E: "𝚬", F: "𝚺", G: "𝛀", H: "𝚮", I: "𝚰", J: "𝗝",
  K: "𝚱", L: "𝚲", M: "𝚳", N: "𝚴", O: "𝚶", P: "𝚸", Q: "𝚽", R: "𝗥", S: "𝚵", T: "𝚻",
  U: "𝚷", V: "𝚼", W: "𝗪", X: "𝚾", Y: "𝚿", Z: "𝚭",
  a: "α", b: "β", c: "γ", d: "δ", e: "ε", f: "σ", g: "ω", h: "η", i: "ι", j: "ȷ",
  k: "κ", l: "λ", m: "μ", n: "ν", o: "ο", p: "π", q: "φ", r: "ρ", s: "ξ", t: "τ",
  u: "υ", v: "υ", w: "ω", x: "χ", y: "ψ", z: "ζ"
});

// Style 42: Crazy Italic Math
addStyle('fancy', 'fancy_crazy_italic_math', 'ᶜ̸ʳ̸ᴬ̸ᶻ̸ʸ̸·˚✗✗', '✗✗˚·❄️', {
  A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
  K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
});

// Style 43: Kaomoji Greek
addStyle('fancy', 'fancy_kaomoji_greek', '乂·˚×͜×', ' ×͜×˚·乂', {
  A: "Λ", B: "Β", C: "Ͻ", D: "Ɗ", E: "Ξ", F: "Ƒ", G: "Ɠ", H: "Ν", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ø", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "U", V: "V", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "λ", b: "β", c: "Ͻ", d: "ɗ", e: "ξ", f: "ƒ", g: "ɠ", h: "ν", i: "ι", j: "ј",
  k: "κ", l: "ℓ", m: "μ", n: "η", o: "ø", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "υ", z: "ƶ"
});

// Style 44: Mister Squared
addStyle('fancy', 'fancy_mister_squared', 'ᴍɪꜱᴛᴇʀØ', 'Ø࿐', {
  A: "🄐", B: "🄑", C: "🄒", D: "🄓", E: "🄔", F: "🄕", G: "🄖", H: "🄗", I: "🄘", J: "🄙",
  K: "🄚", L: "🄛", M: "🄜", N: "🄝", O: "🄞", P: "🄟", Q: "🄠", R: "🄡", S: "🄢", T: "🄣",
  U: "🄤", V: "🄥", W: "🄦", X: "🄧", Y: "🄨", Z: "🄩",
  a: "🄐", b: "🄑", c: "🄒", d: "🄓", e: "🄔", f: "🄕", g: "🄖", h: "🄗", i: "🄘", j: "🄙",
  k: "🄚", l: "🄛", m: "🄜", n: "🄝", o: "🄞", p: "🄟", q: "🄠", r: "🄡", s: "🄢", t: "🄣",
  u: "🄤", v: "🄥", w: "🄦", x: "🄧", y: "🄨", z: "🄩"
});

// Style 45: Canadian Lambda
addStyle('fancy', 'fancy_canadian_lambda', '', ' 𓆣', {
  A: "Λ", B: "B", C: "ᑕ", D: "ᗪ", E: "Σ", F: "F", G: "G", H: "ᕼ", I: "I", J: "ᒍ",
  K: "K", L: "ᒪ", M: "ᗰ", N: "ᑎ", O: "Θ", P: "P", Q: "Q", R: "R", S: "ᔕ", T: "T",
  U: "ᑌ", V: "V", W: "ᗯ", X: "X", Y: "Y", Z: "Z",
  a: "λ", b: "b", c: "ᑕ", d: "ᗪ", e: "σ", f: "f", g: "g", h: "ᕼ", i: "i", j: "ᒍ",
  k: "k", l: "ᒪ", m: "ᗰ", n: "ᑎ", o: "θ", p: "p", q: "q", r: "r", s: "ᔕ", t: "t",
  u: "ᑌ", v: "v", w: "ᗯ", x: "x", y: "y", z: "z"
});

// Style 46: Miao Greek
addStyle('fancy', 'fancy_miao_greek', 'ͶØ『𓄀』', '『』', {
  A: "Λ", B: "Β", C: "Ͻ", D: "Ɗ", E: "Ξ", F: "Ƒ", G: "Ɠ", H: "Ν", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ø", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "U", V: "V", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "λ", b: "β", c: "Ͻ", d: "ɗ", e: "ξ", f: "ƒ", g: "ɠ", h: "ν", i: "ι", j: "ј",
  k: "κ", l: "ℓ", m: "μ", n: "η", o: "ø", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "υ", z: "ƶ"
});

// Style 47: Egyptian Music Greek
addStyle('fancy', 'fancy_egyptian_music_greek', '𓆩♫𓆪', '𓆩♫𓆪', {
  A: "Λ", B: "Β", C: "Ͻ", D: "Ɗ", E: "Ξ", F: "Ƒ", G: "Ɠ", H: "Ν", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ø", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "U", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "λ", b: "β", c: "Ͻ", d: "ɗ", e: "ξ", f: "ƒ", g: "ɠ", h: "ν", i: "ι", j: "ј",
  k: "κ", l: "ℓ", m: "μ", n: "η", o: "ø", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "υ", z: "ƶ"
});

// Style 48: Aura Xi Accent
addStyle('fancy', 'fancy_aura_xi_accent', 'ᴬ̸ᵁ̸ᴿ̸ᴬ̸†', '˚ ☫', {
  A: "A͢", B: "B͢", C: "C͢", D: "D͢", E: "E͢", F: "F͢", G: "G͢", H: "H͢", I: "I͢", J: "J͢",
  K: "K͢", L: "L͢", M: "M͢", N: "N͢", O: "O͢", P: "P͢", Q: "Q͢", R: "R͢", S: "S͢", T: "T͢",
  U: "U͢", V: "V͢", W: "W͢", X: "X͢", Y: "Y͢", Z: "Z͢",
  a: "a͢", b: "b͢", c: "c͢", d: "d͢", e: "e͢", f: "f͢", g: "g͢", h: "h͢", i: "i͢", j: "j͢",
  k: "k͢", l: "l͢", m: "m͢", n: "n͢", o: "o͢", p: "p͢", q: "q͢", r: "r͢", s: "s͢", t: "t͢",
  u: "u͢", v: "v͢", w: "w͢", x: "x͢", y: "y͢", z: "z͢"
});

// Style 49: Farsi Double Accent
addStyle('fancy', 'fancy_farsi_double_accent', '☫', '☫࿐', {
  A: "Ä̤", B: "B̤̈", C: "C̤̈", D: "D̤̈", E: "Ë̤", F: "F̤̈", G: "G̤̈", H: "Ḧ̤", I: "Ï̤", J: "J̤̈",
  K: "K̤̈", L: "L̤̈", M: "M̤̈", N: "N̤̈", O: "Ö̤", P: "P̤̈", Q: "Q̤̈", R: "R̤̈", S: "S̤̈", T: "T̤̈",
  U: "Ṳ̈", V: "V̤̈", W: "Ẅ̤", X: "Ẍ̤", Y: "Ÿ̤", Z: "Z̤̈",
  a: "ä̤", b: "b̤̈", c: "c̤̈", d: "d̤̈", e: "ë̤", f: "f̤̈", g: "g̤̈", h: "ḧ̤", i: "ï̤", j: "j̤̈",
  k: "k̤̈", l: "l̤̈", m: "m̤̈", n: "n̤̈", o: "ö̤", p: "p̤̈", q: "q̤̈", r: "r̤̈", s: "s̤̈", t: "ẗ̤",
  u: "ṳ̈", v: "v̤̈", w: "ẅ̤", x: "ẍ̤", y: "ÿ̤", z: "z̤̈"
});

// Style 50: Crazy Short Tilde
addStyle('fancy', 'fancy_crazy_short_tilde', '╰⁔╯ᶜᴿᴬᶻᵞ ', ' ⁔₄₇', {
  A: "A̴", B: "B̴", C: "C̴", D: "D̴", E: "E̴", F: "F̴", G: "G̴", H: "H̴", I: "I̴", J: "J̴",
  K: "K̴", L: "L̴", M: "M̴", N: "N̴", O: "O̴", P: "P̴", Q: "Q̴", R: "R̴", S: "S̴", T: "T̴",
  U: "U̴", V: "V̴", W: "W̴", X: "X̴", Y: "Y̴", Z: "Z̴",
  a: "a̴", b: "b̴", c: "c̴", d: "d̴", e: "e̴", f: "f̴", g: "g̴", h: "h̴", i: "i̴", j: "j̴",
  k: "k̴", l: "l̴", m: "m̴", n: "n̴", o: "o̴", p: "p̴", q: "q̴", r: "r̴", s: "s̴", t: "t̴",
  u: "u̴", v: "v̴", w: "w̴", x: "x̴", y: "y̴", z: "z̴"
});

// Style 51: Box Accent
addStyle('fancy', 'fancy_box_accent', '▁ ▂ ▃ ▅ ', ' ▅ ▃ ▂ ▁', {
  A: "⦏Â⦎", B: "⦏B̂⦎", C: "⦏Ĉ⦎", D: "⦏D̂⦎", E: "⦏Ê⦎", F: "⦏F̂⦎", G: "⦏Ĝ⦎", H: "⦏Ĥ⦎", I: "⦏Î⦎", J: "⦏Ĵ⦎",
  K: "⦏K̂⦎", L: "⦏L̂⦎", M: "⦏M̂⦎", N: "⦏N̂⦎", O: "⦏Ô⦎", P: "⦏P̂⦎", Q: "⦏Q̂⦎", R: "⦏R̂⦎", S: "⦏Ŝ⦎", T: "⦏T̂⦎",
  U: "⦏Û⦎", V: "⦏V̂⦎", W: "⦏Ŵ⦎", X: "⦏X̂⦎", Y: "⦏Ŷ⦎", Z: "⦏Ẑ⦎",
  a: "⦏â⦎", b: "⦏b̂⦎", c: "⦏ĉ⦎", d: "⦏d̂⦎", e: "⦏ê⦎", f: "⦏f̂⦎", g: "⦏ĝ⦎", h: "⦏ĥ⦎", i: "⦏î⦎", j: "⦏ĵ⦎",
  k: "⦏k̂⦎", l: "⦏l̂⦎", m: "⦏m̂⦎", n: "⦏n̂⦎", o: "⦏ô⦎", p: "⦏p̂⦎", q: "⦏q̂⦎", r: "⦏r̂⦎", s: "⦏ŝ⦎", t: "⦏t̂⦎",
  u: "⦏û⦎", v: "⦏v̂⦎", w: "⦏ŵ⦎", x: "⦏x̂⦎", y: "⦏ŷ⦎", z: "⦏ẑ⦎"
});

// Style 52: Star Accent with Back
addStyle('fancy', 'fancy_star_accent_back', '', ' .ᴵˢ.ᴮᴬᶜᴷ', {
  A: "A⨳", B: "B⨳", C: "C⨳", D: "D⨳", E: "E⨳", F: "F⨳", G: "G⨳", H: "H⨳", I: "I⨳", J: "J⨳",
  K: "K⨳", L: "L⨳", M: "M⨳", N: "N⨳", O: "O⨳", P: "P⨳", Q: "Q⨳", R: "R⨳", S: "S⨳", T: "T⨳",
  U: "U⨳", V: "V⨳", W: "W⨳", X: "X⨳", Y: "Y⨳", Z: "Z⨳",
  a: "a⨳", b: "b⨳", c: "c⨳", d: "d⨳", e: "e⨳", f: "f⨳", g: "g⨳", h: "h⨳", i: "i⨳", j: "j⨳",
  k: "k⨳", l: "l⨳", m: "m⨳", n: "n⨳", o: "o⨳", p: "p⨳", q: "q⨳", r: "r⨳", s: "s⨳", t: "t⨳",
  u: "u⨳", v: "v⨳", w: "w⨳", x: "x⨳", y: "y⨳", z: "z⨳"
});

// Style 53: Box Squared
addStyle('fancy', 'fancy_box_squared', '▄▀▄', '▄▀▄', {
  A: "🄰", B: "🄱", C: "🄲", D: "🄳", E: "🄴", F: "🄵", G: "🄶", H: "🄷", I: "🄸", J: "🄹",
  K: "🄺", L: "🄻", M: "🄼", N: "🄽", O: "🄾", P: "🄿", Q: "🅀", R: "🅁", S: "🅂", T: "🅃",
  U: "🅄", V: "🅅", W: "🅆", X: "🅇", Y: "🅈", Z: "🅉",
  a: "🄰", b: "🄱", c: "🄲", d: "🄳", e: "🄴", f: "🄵", g: "🄶", h: "🄷", i: "🄸", j: "🄹",
  k: "🄺", l: "🄻", m: "🄼", n: "🄽", o: "🄾", p: "🄿", q: "🅀", r: "🅁", s: "🅂", t: "🅃",
  u: "🅄", v: "🅅", w: "🅆", x: "🅇", y: "🅈", z: "🅉"
});

// Style 54: Ice Short Stroke
addStyle('fancy', 'fancy_ice_short_stroke', '༄🧊★', '★🧊࿐', {
  A: "A̶", B: "B̶", C: "C̶", D: "D̶", E: "E̶", F: "F̶", G: "G̶", H: "H̶", I: "I̶", J: "J̶",
  K: "K̶", L: "L̶", M: "M̶", N: "N̶", O: "O̶", P: "P̶", Q: "Q̶", R: "R̶", S: "S̶", T: "T̶",
  U: "U̶", V: "V̶", W: "W̶", X: "X̶", Y: "Y̶", Z: "Z̶",
  a: "a̶", b: "b̶", c: "c̶", d: "d̶", e: "e̶", f: "f̶", g: "g̶", h: "h̶", i: "i̶", j: "j̶",
  k: "k̶", l: "l̶", m: "m̶", n: "n̶", o: "o̶", p: "p̶", q: "q̶", r: "r̶", s: "s̶", t: "t̶",
  u: "u̶", v: "v̶", w: "w̶", x: "x̶", y: "y̶", z: "z̶"
});

// Style 55: Box Underline
addStyle('fancy', 'fancy_box_underline', '꧁┋✿', '✿┋꧂', {
  A: "[A̲̅]", B: "[B̲̅]", C: "[C̲̅]", D: "[D̲̅]", E: "[E̲̅]", F: "[F̲̅]", G: "[G̲̅]", H: "[H̲̅]", I: "[I̲̅]", J: "[J̲̅]",
  K: "[K̲̅]", L: "[L̲̅]", M: "[M̲̅]", N: "[N̲̅]", O: "[O̲̅]", P: "[P̲̅]", Q: "[Q̲̅]", R: "[R̲̅]", S: "[S̲̅]", T: "[T̲̅]",
  U: "[U̲̅]", V: "[V̲̅]", W: "[W̲̅]", X: "[X̲̅]", Y: "[Y̲̅]", Z: "[Z̲̅]",
  a: "[a̲̅]", b: "[b̲̅]", c: "[c̲̅]", d: "[d̲̅]", e: "[e̲̅]", f: "[f̲̅]", g: "[g̲̅]", h: "[h̲̅]", i: "[i̲̅]", j: "[j̲̅]",
  k: "[k̲̅]", l: "[l̲̅]", m: "[m̲̅]", n: "[n̲̅]", o: "[o̲̅]", p: "[p̲̅]", q: "[q̲̅]", r: "[r̲̅]", s: "[s̲̅]", t: "[t̲̅]",
  u: "[u̲̅]", v: "[v̲̅]", w: "[w̲̅]", x: "[x̲̅]", y: "[y̲̅]", z: "[z̲̅]"
});

// Style 56: Currency Stroke
addStyle('fancy', 'fancy_currency_stroke', '✰︵✰', '✰︵✰', {
  A: "₳", B: "฿", C: "₵", D: "Đ", E: "E̷̷", F: "₣", G: "₲", H: "Ⱨ", I: "ł", J: "J",
  K: "₭", L: "Ⱡ", M: "₥", N: "₦", O: "Ø", P: "Ƥ", Q: "Ᵽ", R: "Ɽ", S: "₴", T: "₮",
  U: "ฯ", V: "ⱽ", W: "₩", X: "Ӿ", Y: "¥", Z: "Ⱬ",
  a: "₳", b: "฿", c: "₵", d: "đ", e: "e̷̷", f: "₣", g: "₲", h: "Ⱨ", i: "ł", j: "j",
  k: "₭", l: "Ⱡ", m: "₥", n: "₦", o: "ø", p: "ƥ", q: "Ᵽ", r: "Ɽ", s: "₴", t: "₮",
  u: "ฯ", v: "ⱽ", w: "₩", x: "Ӿ", y: "¥", z: "Ⱬ"
});

// Style 57: Diamond Music Accent
addStyle('fancy', 'fancy_diamond_music_accent', '❖─╬', '╬─❖', {
  A: "𝄆A", B: "𝄆B", C: "𝄆C", D: "𝄆D", E: "𝄆E", F: "𝄆F", G: "𝄆G", H: "𝄆H", I: "𝄆I", J: "𝄆J",
  K: "𝄆K", L: "𝄆L", M: "𝄆M", N: "𝄆N", O: "𝄆O", P: "𝄆P", Q: "𝄆Q", R: "𝄆R", S: "𝄆S", T: "𝄆T",
  U: "𝄆U", V: "𝄆V", W: "𝄆W", X: "𝄆X", Y: "𝄆Y", Z: "𝄆Z",
  a: "𝄆a", b: "𝄆b", c: "𝄆c", d: "𝄆d", e: "𝄆e", f: "𝄆f", g: "𝄆g", h: "𝄆h", i: "𝄆i", j: "𝄆j",
  k: "𝄆k", l: "𝄆l", m: "𝄆m", n: "𝄆n", o: "𝄆o", p: "𝄆p", q: "𝄆q", r: "𝄆r", s: "𝄆s", t: "𝄆t",
  u: "𝄆u", v: "𝄆v", w: "𝄆w", x: "𝄆x", y: "𝄆y", z: "𝄆z"
});

// Style 58: Thai Style Accent
addStyle('fancy', 'fancy_thai_style', '⧉══', '══⧉', {
  A: "๖ۣۜA", B: "๖ۣۜB", C: "๖ۣۜC", D: "๖ۣۜD", E: "๖ۣۜE", F: "๖ۣۜF", G: "๖ۣۜG", H: "๖ۣۜH", I: "๖ۣۜI", J: "๖ۣۜJ",
  K: "๖ۣۜK", L: "๖ۣۜL", M: "๖ۣۜM", N: "๖ۣۜN", O: "๖ۣۜO", P: "๖ۣۜP", Q: "๖ۣۜQ", R: "๖ۣۜR", S: "๖ۣۜS", T: "๖ۣۜT",
  U: "๖ۣۜU", V: "๖ۣۜV", W: "๖ۣۜW", X: "๖ۣۜX", Y: "๖ۣۜY", Z: "๖ۣۜZ",
  a: "๖ۣۜa", b: "๖ۣۜb", c: "๖ۣۜc", d: "๖ۣۜd", e: "๖ۣۜe", f: "๖ۣۜf", g: "๖ۣۜg", h: "๖ۣۜh", i: "๖ۣۜi", j: "๖ۣۜj",
  k: "๖ۣۜk", l: "๖ۣۜl", m: "๖ۣۜm", n: "๖ۣۜn", o: "๖ۣۜo", p: "๖ۣۜp", q: "๖ۣۜq", r: "๖ۣۜr", s: "๖ۣۜs", t: "๖ۣۜt",
  u: "๖ۣۜu", v: "๖ۣۜv", w: "๖ۣۜw", x: "๖ۣۜx", y: "๖ۣۜy", z: "๖ۣۜz"
});

// Style 59: Simple Small Caps
addStyle('fancy', 'fancy_simple_small_caps', '☆', '☆', {
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 60: Egyptian Italic
addStyle('fancy', 'fancy_egyptian_italic', '𓆩', '𓆪', {
  A: "𝘼", B: "𝘽", C: "𝘾", D: "𝘿", E: "𝙀", F: "𝙁", G: "𝙂", H: "𝙃", I: "𝙄", J: "𝙅",
  K: "𝙆", L: "𝙇", M: "𝙈", N: "𝙉", O: "𝙊", P: "𝙋", Q: "𝙌", R: "𝙍", S: "𝙎", T: "𝙏",
  U: "𝙐", V: "𝙑", W: "𝙒", X: "𝙓", Y: "𝙔", Z: "𝙕",
  a: "𝙖", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝙚", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝙞", j: "𝙟",
  k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝙤", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
  u: "𝙪", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝙮", z: "𝙯"
});

// Style 61: Chinese Square Accent
addStyle('fancy', 'fancy_chinese_square_accent', '么 ', '么 𒉭༒', {
  A: "ᴬ▢", B: "ᴮ▢", C: "ᶜ▢", D: "ᴰ▢", E: "ᴱ▢", F: "ᶠ▢", G: "ᴳ▢", H: "ᴴ▢", I: "ᴵ▢", J: "ᴶ▢",
  K: "ᴷ▢", L: "ᴸ▢", M: "ᴹ▢", N: "ᴺ▢", O: "ᴼ▢", P: "ᴾ▢", Q: "ᵠ▢", R: "ᴿ▢", S: "ˢ▢", T: "ᵀ▢",
  U: "ᵁ▢", V: "ⱽ▢", W: "ᵂ▢", X: "ˣ▢", Y: "ʸ▢", Z: "ᶻ▢",
  a: "ᵃ▢", b: "ᵇ▢", c: "ᶜ▢", d: "ᵈ▢", e: "ᵉ▢", f: "ᶠ▢", g: "ᵍ▢", h: "ʰ▢", i: "ⁱ▢", j: "ʲ▢",
  k: "ᵏ▢", l: "ˡ▢", m: "ᵐ▢", n: "ⁿ▢", o: "ᵒ▢", p: "ᵖ▢", q: "ᵠ▢", r: "ʳ▢", s: "ˢ▢", t: "ᵗ▢",
  u: "ᵘ▢", v: "ᵛ▢", w: "ʷ▢", x: "ˣ▢", y: "ʸ▢", z: "ᶻ▢"
});

// Style 62: Fraktur Brackets
addStyle('fancy', 'fancy_fraktur_brackets', '⩔⧼', '⧽⩔', {
  a: "𝖆", b: "𝖇", c: "𝖈", d: "𝖉", e: "𝖊", f: "𝖋", g: "𝖌", h: "𝖍", i: "𝖎", j: "𝖏",
  k: "𝖐", l: "𝖑", m: "𝖒", n: "𝖓", o: "𝖔", p: "𝖕", q: "𝖖", r: "𝖗", s: "𝖘", t: "𝖙",
  u: "𝖚", v: "𝖛", w: "𝖜", x: "𝖝", y: "𝖞", z: "𝖟",
  A: "𝕬", B: "𝕭", C: "𝕮", D: "𝕯", E: "𝕰", F: "𝕱", G: "𝕲", H: "𝕳", I: "𝕴", J: "𝕵",
  K: "𝕶", L: "𝕷", M: "𝕸", N: "𝕹", O: "𝕺", P: "𝕻", Q: "𝕼", R: "𝕽", S: "𝕾", T: "𝕿",
  U: "𝖀", V: "𝖁", W: "𝖂", X: "𝖃", Y: "𝖄", Z: "𝖅"
});

// Style 63: Warning Fraktur
addStyle('fancy', 'fancy_warning_fraktur', '⚠️𓆩llı⧼', '⧽ıll𓆪⚠️', {
  a: "𝖆", b: "𝖇", c: "𝖈", d: "𝖉", e: "𝖊", f: "𝖋", g: "𝖌", h: "𝖍", i: "𝖎", j: "𝖏",
  k: "𝖐", l: "𝖑", m: "𝖒", n: "𝖓", o: "𝖔", p: "𝖕", q: "𝖖", r: "𝖗", s: "𝖘", t: "𝖙",
  u: "𝖚", v: "𝖛", w: "𝖜", x: "𝖝", y: "𝖞", z: "𝖟",
  A: "𝕬", B: "𝕭", C: "𝕮", D: "𝕯", E: "𝕰", F: "𝕱", G: "𝕲", H: "𝕳", I: "𝕴", J: "𝕵",
  K: "𝕶", L: "𝕷", M: "𝕸", N: "𝕹", O: "𝕺", P: "𝕻", Q: "𝕼", R: "𝕽", S: "𝕾", T: "𝕿",
  U: "𝖀", V: "𝖁", W: "𝖂", X: "𝖃", Y: "𝖄", Z: "𝖅"
});

// Style 64: Egyptian Italic Math
addStyle('fancy', 'fancy_egyptian_italic_math', '𓆩☯︎𓆪『', '』𓆩☯︎𓆪', {
  A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
  K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
});

// Style 65: Star Small Caps
addStyle('fancy', 'fancy_star_small_caps', '°.✩┈୨', '୧┈✩.', {
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 66: Autumn Upside Down
addStyle('fancy', 'fancy_autumn_upside_down', '🍂', '『』🐧✧', {
  A: "∀", B: "𐐒", C: "Ɔ", D: "◖", E: "Ǝ", F: "Ⅎ", G: "⅁", H: "H", I: "I", J: "ſ",
  K: "ꓘ", L: "˥", M: "W", N: "N", O: "O", P: "Ԁ", Q: "Ò", R: "ᴚ", S: "S", T: "⊥",
  U: "∩", V: "Λ", W: "M", X: "X", Y: "⅄", Z: "Z",
  a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ", f: "ɟ", g: "ƃ", h: "ɥ", i: "ᴉ", j: "ɾ",
  k: "ʞ", l: "ꞁ", m: "ɯ", n: "u", o: "o", p: "d", q: "b", r: "ɹ", s: "s", t: "ʇ",
  u: "n", v: "ʌ", w: "ʍ", x: "x", y: "ʎ", z: "z"
});

// Style 67: Black Chinese Complex Accent
addStyle('fancy', 'fancy_black_chinese_complex', 'B么CKꪶꫂ ', ' ⧉˚｡', {
  A: "A͎͍͐￫", B: "B͎͍͐￫", C: "C͎͍͐￫", D: "D͎͍͐￫", E: "E͎͍͐￫", F: "F͎͍͐￫", G: "G͎͍͐￫", H: "H͎͍͐￫", I: "I͎͍͐￫", J: "J͎͍͐￫",
  K: "K͎͍͐￫", L: "L͎͍͐￫", M: "M͎͍͐￫", N: "N͎͍͐￫", O: "O͎͍͐￫", P: "P͎͍͐￫", Q: "Q͎͍͐￫", R: "R͎͍͐￫", S: "S͎͍͐￫", T: "T͎͍͐￫",
  U: "U͎͍͐￫", V: "V͎͍͐￫", W: "W͎͍͐￫", X: "X͎͍͐￫", Y: "Y͎͍͐￫", Z: "Z͎͍͐￫",
  a: "a͎͍͐￫", b: "b͎͍͐￫", c: "c͎͍͐￫", d: "d͎͍͐￫", e: "e͎͍͐￫", f: "f͎͍͐￫", g: "g͎͍͐￫", h: "h͎͍͐￫", i: "i͎͍͐￫", j: "j͎͍͐￫",
  k: "k͎͍͐￫", l: "l͎͍͐￫", m: "m͎͍͐￫", n: "n͎͍͐￫", o: "o͎͍͐￫", p: "p͎͍͐￫", q: "q͎͍͐￫", r: "r͎͍͐￫", s: "s͎͍͐￫", t: "t͎͍͐￫",
  u: "u͎͍͐￫", v: "v͎͍͐￫", w: "w͎͍͐￫", x: "x͎͍͐￫", y: "y͎͍͐￫", z: "z͎͍͐￫"
});

// Style 68: Box Bold Sans
addStyle('fancy', 'fancy_box_bold_sans', '⧉░', '░⧉🧊', {
  A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝",
  K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
  U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭",
  a: "𝙖", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝙚", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝙞", j: "𝙟",
  k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝙤", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
  u: "𝙪", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝙮", z: "𝙯"
});

// Style 69: Sumerian Italic Accent
addStyle('fancy', 'fancy_sumerian_italic_accent', '𒆜 ಠ⁠_⁠ಠꪶꫂ', 'ꪶꫂ💯', {
  A: "𝘼̈", B: "𝘽̈", C: "𝘾̈", D: "𝘿̈", E: "𝙀̈", F: "𝙁̈", G: "𝙂̈", H: "𝙃̈", I: "𝙄̈", J: "𝙅̈",
  K: "𝙆̈", L: "𝙇̈", M: "𝙈̈", N: "𝙉̈", O: "𝙊̈", P: "𝙋̈", Q: "𝙌̈", R: "𝙍̈", S: "𝙎̈", T: "𝙏̈",
  U: "𝙐̈", V: "𝙑̈", W: "𝙒̈", X: "𝙓̈", Y: "𝙔̈", Z: "𝙕̈",
  a: "𝙖̈", b: "𝙗̈", c: "𝙘̈", d: "𝙙̈", e: "𝙚̈", f: "𝙛̈", g: "𝙜̈", h: "𝙝̈", i: "𝙞̈", j: "𝙟̈",
  k: "𝙠̈", l: "𝙡̈", m: "𝙢̈", n: "𝙣̈", o: "𝙤̈", p: "𝙥̈", q: "𝙦̈", r: "𝙧̈", s: "𝙨̈", t: "𝙩̈",
  u: "𝙪̈", v: "𝙫̈", w: "𝙬̈", x: "𝙭̈", y: "𝙮̈", z: "𝙯̈"
});

// Style 70: Heart Canadian Symbols
addStyle('fancy', 'fancy_heart_canadian_symbols', '💕⃝𓉸𒉭', '𒉭⧼ૐ⧽', {
  A: "ᗩ", B: "ᗷ", C: "ᑕ", D: "ᗪ", E: "ᗴ", F: "ᖴ", G: "Ꮐ", H: "ᕼ", I: "Ꭵ", J: "ᒍ",
  K: "Ꮶ", L: "Ꮮ", M: "ᗰ", N: "ᑎ", O: "ᗝ", P: "ᑭ", Q: "ᑫ", R: "ᖇ", S: "ᔕ", T: "ᖶ",
  U: "ᑌ", V: "ᐯ", W: "ᗯ", X: "᙭", Y: "Ꭹ", Z: "ᘔ",
  a: "ᗩ", b: "ᗷ", c: "ᑕ", d: "ᗪ", e: "ᗴ", f: "ᖴ", g: "Ꮐ", h: "ᕼ", i: "Ꭵ", j: "ᒍ",
  k: "Ꮶ", l: "Ꮮ", m: "ᗰ", n: "ᑎ", o: "ᗝ", p: "ᑭ", q: "ᑫ", r: "ᖇ", s: "ᔕ", t: "ᖶ",
  u: "ᑌ", v: "ᐯ", w: "ᗯ", x: "᙭", y: "Ꭹ", z: "ᘔ"
});

// Style 71: Egyptian Italic Math Decorated
addStyle('fancy', 'fancy_egyptian_italic_decorated', '𓆩⧉𓆪', 'ִֶָ. ..𓂃 ࣪ ִֶָ🪽་༘࿐', {
  A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
  K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
});

// Style 72: Star Cloud Greek Bold
addStyle('fancy', 'fancy_star_cloud_greek', '⋆⭒˚☁︎.⋆ ', '⋆⭒˚.⋆🪐 ⋆⭒', {
  A: "𝚨", B: "𝚩", C: "𝚪", D: "𝚫", E: "𝚬", F: "𝚺", G: "𝛀", H: "𝚮", I: "𝚰", J: "𝗝",
  K: "𝚱", L: "𝚲", M: "𝚳", N: "𝚴", O: "𝚶", P: "𝚸", Q: "𝚽", R: "𝗥", S: "𝚵", T: "𝚻",
  U: "𝚷", V: "𝚼", W: "𝗪", X: "𝚾", Y: "𝚿", Z: "𝚭",
  a: "α", b: "β", c: "γ", d: "δ", e: "ε", f: "σ", g: "ω", h: "η", i: "ι", j: "ȷ",
  k: "κ", l: "λ", m: "μ", n: "ν", o: "ο", p: "π", q: "φ", r: "ρ", s: "ξ", t: "τ",
  u: "υ", v: "υ", w: "ω", x: "χ", y: "ψ", z: "ζ"
});

// Style 73: Star Double Struck Accent 2
addStyle('fancy', 'fancy_star_double_struck_accent_2', 'ᯓ★☆', ' ‼ 𓆩☠𓆪', {
  A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
  K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
  U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ",
  a: "𝕒̈", b: "𝕓̈", c: "𝕔̈", d: "𝕕̈", e: "𝕖̈", f: "𝕗̈", g: "𝕘̈", h: "𝕙̈", i: "𝕚̈", j: "𝕛̈",
  k: "𝕜̈", l: "𝕝̈", m: "𝕞̈", n: "𝕟̇", o: "𝕠̈", p: "𝕡̈", q: "𝕢̈", r: "𝕣̈", s: "𝕤̈", t: "𝕥̈",
  u: "𝕦̈", v: "𝕧̈", w: "𝕨̈", x: "𝕩̈", y: "𝕪̈", z: "𝕫̈"
});

// Style 74: Exclamation Xi Accent
addStyle('fancy', 'fancy_exclamation_xi', '‼', '‼💕⃝☂', {
  A: "A͢", B: "B͢", C: "C͢", D: "D͢", E: "E͢", F: "F͢", G: "G͢", H: "H͢", I: "I͢", J: "J͢",
  K: "K͢", L: "L͢", M: "M͢", N: "N͢", O: "O͢", P: "P͢", Q: "Q͢", R: "R͢", S: "S͢", T: "T͢",
  U: "U͢", V: "V͢", W: "W͢", X: "X͢", Y: "Y͢", Z: "Z͢",
  a: "a͢", b: "b͢", c: "c͢", d: "d͢", e: "e͢", f: "f͢", g: "g͢", h: "h͢", i: "i͢", j: "j͢",
  k: "k͢", l: "l͢", m: "m͢", n: "n͢", o: "o͢", p: "p͢", q: "q͢", r: "r͢", s: "s͢", t: "t͢",
  u: "u͢", v: "v͢", w: "w͢", x: "x͢", y: "y͢", z: "z͢"
});

// Style 75: Time Greek
addStyle('fancy', 'fancy_time_greek', 'ᯓ𝟏𝟏:', ' ☂་༘࿐', {
  a: "̤̮α", b: "̤̮в", c: "̤̮c", d: "̤̮ɗ", e: "̤̮ε", f: "̤̮ƒ", g: "̤̮ɠ", h: "̤̮н", i: "̤̮ɪ", j: "̤̮נ",
  k: "̤̮κ", l: "̤̮ℓ", m: "̤̮м", n: "̤̮η", o: "̤̮σ", p: "̤̮ρ", q: "̤̮զ", r: "̤̮я", s: "̤̮ѕ", t: "̤̮τ",
  u: "̤̮υ", v: "̤̮ν", w: "̤̮ω", x: "̤̮χ", y: "̤̮γ", z: "̤̮ƶ",
  A: "Α", B: "Β", C: "C", D: "Ɗ", E: "Ε", F: "Ƒ", G: "Ɠ", H: "Н", I: "Ι", J: "Ј",
  K: "Κ", L: "ℓ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ջ", R: "Я", S: "Ѕ", T: "Τ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Ƶ"
});

// Style 76: Cham Greek Miao
addStyle('fancy', 'fancy_cham_greek_miao', '꩜', '𓏧𖹭‹𝟹࿐', {
  A: "Α", B: "Β", C: "Ͻ", D: "Ɗ", E: "Σ", F: "Ƒ", G: "Ɠ", H: "Ν", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "U", V: "V", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
  k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ"
});

// Style 77: Cham Greek Flower
addStyle('fancy', 'fancy_cham_greek_flower', '꩜', '⋆✿‹𝟹࿐', {
  A: "Α", B: "Β", C: "Ͻ", D: "Ɗ", E: "Σ", F: "Ƒ", G: "Ɠ", H: "Ν", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "U", V: "V", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
  k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ"
});

// Style 78: Underline Bracket
addStyle('fancy', 'fancy_underline_bracket', 'ᯓ˙⋆[', ']⋆˙⟡꩜', {
  A: "[A̲̅]", B: "[B̲̅]", C: "[C̲̅]", D: "[D̲̅]", E: "[E̲̅]", F: "[F̲̅]", G: "[G̲̅]", H: "[H̲̅]", I: "[I̲̅]", J: "[J̲̅]",
  K: "[K̲̅]", L: "[L̲̅]", M: "[M̲̅]", N: "[N̲̅]", O: "[O̲̅]", P: "[P̲̅]", Q: "[Q̲̅]", R: "[R̲̅]", S: "[S̲̅]", T: "[T̲̅]",
  U: "[U̲̅]", V: "[V̲̅]", W: "[W̲̅]", X: "[X̲̅]", Y: "[Y̲̅]", Z: "[Z̲̅]",
  a: "[a̲̅]", b: "[b̲̅]", c: "[c̲̅]", d: "[d̲̅]", e: "[e̲̅]", f: "[f̲̅]", g: "[g̲̅]", h: "[h̲̅]", i: "[i̲̅]", j: "[j̲̅]",
  k: "[k̲̅]", l: "[l̲̅]", m: "[m̲̅]", n: "[n̲̅]", o: "[o̲̅]", p: "[p̲̅]", q: "[q̲̅]", r: "[r̲̅]", s: "[s̲̅]", t: "[t̲̅]",
  u: "[u̲̅]", v: "[v̲̅]", w: "[w̲̅]", x: "[x̲̅]", y: "[y̲̅]", z: "[z̲̅]"
});

// Style 79: Simple Greek Bold
addStyle('fancy', 'fancy_simple_greek_bold', '', ' ✔', {
  A: "𝚨", B: "𝚩", C: "𝚪", D: "𝚫", E: "𝚬", F: "𝚺", G: "𝛀", H: "𝚮", I: "𝚰", J: "𝗝",
  K: "𝚱", L: "𝚲", M: "𝚳", N: "𝚴", O: "𝚶", P: "𝚸", Q: "𝚽", R: "𝗥", S: "𝚵", T: "𝚻",
  U: "𝚷", V: "𝚼", W: "𝗪", X: "𝚾", Y: "𝚿", Z: "𝚭",
  a: "α", b: "β", c: "γ", d: "δ", e: "ε", f: "σ", g: "ω", h: "η", i: "ι", j: "ȷ",
  k: "κ", l: "λ", m: "μ", n: "ν", o: "ο", p: "π", q: "φ", r: "ρ", s: "ξ", t: "τ",
  u: "υ", v: "υ", w: "ω", x: "χ", y: "ψ", z: "ζ"
});

// Style 80: Scissor Short Stroke
addStyle('fancy', 'fancy_scissor_short_stroke', '-ˋˏ✄┈', '┈⌯⌲', {
  A: "A̶", B: "B̶", C: "C̶", D: "D̶", E: "E̶", F: "F̶", G: "G̶", H: "H̶", I: "I̶", J: "J̶",
  K: "K̶", L: "L̶", M: "M̶", N: "N̶", O: "O̶", P: "P̶", Q: "Q̶", R: "R̶", S: "S̶", T: "T̶",
  U: "U̶", V: "V̶", W: "W̶", X: "X̶", Y: "Y̶", Z: "Z̶",
  a: "a̶", b: "b̶", c: "c̶", d: "d̶", e: "e̶", f: "f̶", g: "g̶", h: "h̶", i: "i̶", j: "j̶",
  k: "k̶", l: "l̶", m: "m̶", n: "n̶", o: "o̶", p: "p̶", q: "q̶", r: "r̶", s: "s̶", t: "t̶",
  u: "u̶", v: "v̶", w: "w̶", x: "x̶", y: "y̶", z: "z̶"
});

// Style 81: Musical Fullwidth
addStyle('fancy', 'fancy_musical_fullwidth', '𝄁𝄃𝄂𝄂𝄃', '𝄃𝄂𝄂𝄃', {
  A: "Ａ", B: "Ｂ", C: "Ｃ", D: "Ｄ", E: "Ｅ", F: "Ｆ", G: "Ｇ", H: "Ｈ", I: "Ｉ", J: "Ｊ",
  K: "Ｋ", L: "Ｌ", M: "Ｍ", N: "Ｎ", O: "Ｏ", P: "Ｐ", Q: "Ｑ", R: "Ｒ", S: "Ｓ", T: "Ｔ",
  U: "Ｕ", V: "Ｖ", W: "Ｗ", X: "Ｘ", Y: "Ｙ", Z: "Ｚ",
  a: "ａ", b: "ｂ", c: "ｃ", d: "ｄ", e: "ｅ", f: "ｆ", g: "ｇ", h: "ｈ", i: "ｉ", j: "ｊ",
  k: "ｋ", l: "ｌ", m: "ｍ", n: "ｎ", o: "ｏ", p: "ｐ", q: "ｑ", r: "ｒ", s: "ｓ", t: "ｔ",
  u: "ｕ", v: "ｖ", w: "ｗ", x: "ｘ", y: "ｙ", z: "ｚ"
});

// Style 82: Star Greek with Space
addStyle('fancy', 'fancy_star_greek_space', '『⨳ ̤̮', ' ̤̮⨳』࿐', {
  a: "̤̮α", b: "̤̮в", c: "̤̮c", d: "̤̮ɗ", e: "̤̮ε", f: "̤̮ƒ", g: "̤̮ɠ", h: "̤̮н", i: "̤̮ɪ", j: "̤̮נ",
  k: "̤̮κ", l: "̤̮ℓ", m: "̤̮м", n: "̤̮η", o: "̤̮σ", p: "̤̮ρ", q: "̤̮զ", r: "̤̮я", s: "̤̮ѕ", t: "̤̮τ",
  u: "̤̮υ", v: "̤̮ν", w: "̤̮ω", x: "̤̮χ", y: "̤̮γ", z: "̤̮ƶ",
  A: "Α", B: "Β", C: "C", D: "Ɗ", E: "Ε", F: "Ƒ", G: "Ɠ", H: "Н", I: "Ι", J: "Ј",
  K: "Κ", L: "ℓ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ջ", R: "Я", S: "Ѕ", T: "Τ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Ƶ"
});

// Style 83: Black Heart Greek
addStyle('fancy', 'fancy_black_heart_greek', '🖤⃝🦋⋆.', ' ˚🦋༘⋆🫰🏻♥️', {
  A: "Λ", B: "Β", C: "Ͻ", D: "Ɗ", E: "Ξ", F: "Ƒ", G: "Ɠ", H: "H", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ø", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "U", V: "V", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "λ", b: "β", c: "Ͻ", d: "ɗ", e: "ξ", f: "ƒ", g: "ɠ", h: "h", i: "ι", j: "ј",
  k: "κ", l: "ℓ", m: "μ", n: "η", o: "ø", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "υ", z: "ƶ"
});

// Style 84: Cherokee Script
addStyle('fancy', 'fancy_cherokee_script', '', ' 🩹', {
  A: "Ꭿ", B: "Ᏸ", C: "Ꮸ", D: "Ꮄ", E: "Ꭼ", F: "Ꮀ", G: "Ꮐ", H: "Ꮋ", I: "Ꭵ", J: "Ꮰ",
  K: "Ꮶ", L: "Ꮭ", M: "Ꮇ", N: "Ꮑ", O: "Ꮎ", P: "Ꮲ", Q: "Ꭴ", R: "Ꮢ", S: "Ꮥ", T: "Ꮦ",
  U: "Ꮼ", V: "Ꮙ", W: "Ꮗ", X: "ጀ", Y: "Ꮍ", Z: "Ꮓ",
  a: "Ꭿ", b: "Ᏸ", c: "Ꮸ", d: "Ꮄ", e: "Ꭼ", f: "Ꮀ", g: "Ꮐ", h: "Ꮋ", i: "Ꭵ", j: "Ꮰ",
  k: "Ꮶ", l: "Ꮭ", m: "Ꮇ", n: "Ꮑ", o: "Ꮎ", p: "Ꮲ", q: "Ꭴ", r: "Ꮢ", s: "Ꮥ", t: "Ꮦ",
  u: "Ꮼ", v: "Ꮙ", w: "Ꮗ", x: "ጀ", y: "Ꮍ", z: "Ꮓ"
});

// Style 85: Heart Bold Italic Om
addStyle('fancy', 'fancy_heart_bold_italic_om', '💗᪲᪲᪲ —͟͞͞', ' ૐ𓏧𖹭', {
  A: "𝑨", B: "𝑩", C: "𝑪", D: "𝑫", E: "𝑬", F: "𝑭", G: "𝑮", H: "𝑯", I: "𝑰", J: "𝑱",
  K: "𝑲", L: "𝑳", M: "𝑴", N: "𝑵", O: "𝑶", P: "𝑷", Q: "𝑸", R: "𝑹", S: "𝑺", T: "𝑻",
  U: "𝑼", V: "𝑽", W: "𝑾", X: "𝑿", Y: "𝒀", Z: "𝒁",
  a: "𝒂", b: "𝒃", c: "𝒄", d: "𝒅", e: "𝒆", f: "𝒇", g: "𝒈", h: "𝒉", i: "𝒊", j: "𝒋",
  k: "𝒌", l: "𝒍", m: "𝒎", n: "𝒏", o: "𝒐", p: "𝒑", q: "𝒒", r: "𝒓", s: "𝒔", t: "𝒕",
  u: "𝒖", v: "𝒗", w: "𝒘", x: "𝒙", y: "𝒚", z: "𝒛"
});

// Style 86: Kaomoji Canadian
addStyle('fancy', 'fancy_kaomoji_canadian', '𓆩˃ᴗ˂𓆪.', '⋆.𓆩˃ᴗ˂𓆪', {
  A: "ᗩ", B: "ᗷ", C: "ᑕ", D: "ᗪ", E: "ᗴ", F: "ᖴ", G: "Ꮐ", H: "ᕼ", I: "Ꭵ", J: "ᒍ",
  K: "Ꮶ", L: "Ꮮ", M: "ᗰ", N: "ᑎ", O: "ᗝ", P: "ᑭ", Q: "ᑫ", R: "ᖇ", S: "ᔕ", T: "ᖶ",
  U: "ᑌ", V: "ᐯ", W: "ᗯ", X: "᙭", Y: "Ꭹ", Z: "ᘔ",
  a: "ᗩ", b: "ᗷ", c: "ᑕ", d: "ᗪ", e: "ᗴ", f: "ᖴ", g: "Ꮐ", h: "ᕼ", i: "Ꭵ", j: "ᒍ",
  k: "Ꮶ", l: "Ꮮ", m: "ᗰ", n: "ᑎ", o: "ᗝ", p: "ᑭ", q: "ᑫ", r: "ᖇ", s: "ᔕ", t: "ᖶ",
  u: "ᑌ", v: "ᐯ", w: "ᗯ", x: "᙭", y: "Ꭹ", z: "ᘔ"
});

// Style 87: Star Wave Accent
addStyle('fancy', 'fancy_star_wave_accent', '⋆. 𐙚˚࿔', '𝜗𝜚˚⋆𓂃', {
  A: "A̾", B: "B̾", C: "C̾", D: "D̾", E: "E̾", F: "F̾", G: "G̾", H: "H̾", I: "I̾", J: "J̾",
  K: "K̾", L: "L̾", M: "M̾", N: "N̾", O: "O̾", P: "P̾", Q: "Q̾", R: "R̾", S: "S̾", T: "T̾",
  U: "U̾", V: "V̾", W: "W̾", X: "X̾", Y: "Y̾", Z: "Z̾",
  a: "a̾", b: "b̾", c: "c̾", d: "d̾", e: "e̾", f: "f̾", g: "g̾", h: "h̾", i: "i̾", j: "j̾",
  k: "k̾", l: "l̾", m: "m̾", n: "n̾", o: "o̾", p: "p̾", q: "q̾", r: "r̾", s: "s̾", t: "t̾",
  u: "u̾", v: "v̾", w: "w̾", x: "x̾", y: "y̾", z: "z̾"
});

// Style 88: Egyptian Fraktur
addStyle('fancy', 'fancy_egyptian_fraktur', '𓆩𓂋𓆪', '𓋜', {
  a: "𝖆", b: "𝖇", c: "𝖈", d: "𝖉", e: "𝖊", f: "𝖋", g: "𝖌", h: "𝖍", i: "𝖎", j: "𝖏",
  k: "𝖐", l: "𝖑", m: "𝖒", n: "𝖓", o: "𝖔", p: "𝖕", q: "𝖖", r: "𝖗", s: "𝖘", t: "𝖙",
  u: "𝖚", v: "𝖛", w: "𝖜", x: "𝖝", y: "𝖞", z: "𝖟",
  A: "𝕬", B: "𝕭", C: "𝕮", D: "𝕯", E: "𝕰", F: "𝕱", G: "𝕲", H: "𝕳", I: "𝕴", J: "𝕵",
  K: "𝕶", L: "𝕷", M: "𝕸", N: "𝕹", O: "𝕺", P: "𝕻", Q: "𝕼", R: "𝕽", S: "𝕾", T: "𝕿",
  U: "𝖀", V: "𝖁", W: "𝖂", X: "𝖃", Y: "𝖄", Z: "𝖅"
});

// Style 89: Flower Fraktur
addStyle('fancy', 'fancy_flower_fraktur', '୧⍤⃝🌷', ' ⭒˚.⋆ꫂ❁⋆', {
  a: "𝔞", b: "𝔟", c: "𝔠", d: "𝔡", e: "𝔢", f: "𝔣", g: "𝔤", h: "𝔥", i: "𝔦", j: "𝔧",
  k: "𝔨", l: "𝔩", m: "𝔪", n: "𝔫", o: "𝔬", p: "𝔭", q: "𝔮", r: "𝔯", s: "𝔰", t: "𝔱",
  u: "𝔲", v: "𝔳", w: "𝔴", x: "𝔵", y: "𝔶", z: "𝔷",
  A: "𝔄", B: "𝔅", C: "ℭ", D: "𝔇", E: "𝔈", F: "𝔉", G: "𝔊", H: "ℌ", I: "ℑ", J: "𝔍",
  K: "𝔎", L: "𝔏", M: "𝔐", N: "𝔑", O: "𝔒", P: "𝔓", Q: "𝔔", R: "ℜ", S: "𝔖", T: "𝔗",
  U: "𝔘", V: "𝔙", W: "𝔚", X: "𝔛", Y: "𝔜", Z: "ℨ"
});

// Style 90: Black Heart Greek Simple
addStyle('fancy', 'fancy_black_heart_greek_simple', '🖤⃝ME ', '.⋆࿐★', {
  A: "Α", B: "Β", C: "Ͻ", D: "Ɗ", E: "Σ", F: "Ƒ", G: "Ɠ", H: "Ν", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
  k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ"
});

// Style 91: Thai Number Accent
addStyle('fancy', 'fancy_thai_number_accent', '—͟͞͞⧉', '๖ۣۜ🐇་༘࿐', {
  A: "๖ۣۜA", B: "๖ۣۜB", C: "๖ۣۜC", D: "๖ۣۜD", E: "๖ۣۜE", F: "๖ۣۜF", G: "๖ۣۜG", H: "๖ۣۜH", I: "๖ۣۜI", J: "๖ۣۜJ",
  K: "๖ۣۜK", L: "๖ۣۜL", M: "๖ۣۜM", N: "๖ۣۜN", O: "๖ۣۜO", P: "๖ۣۜP", Q: "๖ۣۜQ", R: "๖ۣۜR", S: "๖ۣۜS", T: "๖ۣۜT",
  U: "๖ۣۜU", V: "๖ۣۜV", W: "๖ۣۜW", X: "๖ۣۜX", Y: "๖ۣۜY", Z: "๖ۣۜZ",
  a: "๖ۣۜa", b: "๖ۣۜb", c: "๖ۣۜc", d: "๖ۣۜd", e: "๖ۣۜe", f: "๖ۣۜf", g: "๖ۣۜg", h: "๖ۣۜh", i: "๖ۣۜi", j: "๖ۣۜj",
  k: "๖ۣۜk", l: "๖ۣۜl", m: "๖ۣۜm", n: "๖ۣۜn", o: "๖ۣۜo", p: "๖ۣۜp", q: "๖ۣۜq", r: "๖ۣۜr", s: "๖ۣۜs", t: "๖ۣۜt",
  u: "๖ۣۜu", v: "๖ۣۜv", w: "๖ۣۜw", x: "๖ۣۜx", y: "๖ۣۜy", z: "๖ۣۜz"
});

// Style 92: Tai Line Accent
addStyle('fancy', 'fancy_tai_line_accent', 'ꪶ┈⎚ ', ' ⎚┈ꫂ', {
  A: "A͓̽", B: "B͓̽", C: "C͓̽", D: "D͓̽", E: "E͓̽", F: "F͓̽", G: "G͓̽", H: "H͓̽", I: "I͓̽", J: "J͓̽",
  K: "K͓̽", L: "L͓̽", M: "M͓̽", N: "N͓̽", O: "O͓̽", P: "P͓̽", Q: "Q͓̽", R: "R͓̽", S: "S͓̽", T: "T͓̽",
  U: "U͓̽", V: "V͓̽", W: "W͓̽", X: "X͓̽", Y: "Y͓̽", Z: "Z͓̽",
  a: "a͓̽", b: "b͓̽", c: "c͓̽", d: "d͓̽", e: "e͓̽", f: "f͓̽", g: "g͓̽", h: "h͓̽", i: "i͓̽", j: "j͓̽",
  k: "k͓̽", l: "l͓̽", m: "m͓̽", n: "n͓̽", o: "o͓̽", p: "p͓̽", q: "q͓̽", r: "r͓̽", s: "s͓̽", t: "t͓̽",
  u: "u͓̽", v: "v͓̽", w: "w͓̽", x: "x͓̽", y: "y͓̽", z: "z͓̽"
});

// Style 93: Planet Cyrillic
addStyle('fancy', 'fancy_planet_cyrillic', '⭒˚.⋆🪐⟆', '⟅🪐 ⋆⭒˚', {
  A: "A҉", B: "B҉", C: "C҉", D: "D҉", E: "E҉", F: "F҉", G: "G҉", H: "H҉", I: "I҉", J: "J҉",
  K: "K҉", L: "L҉", M: "M҉", N: "N҉", O: "O҉", P: "P҉", Q: "Q҉", R: "R҉", S: "S҉", T: "T҉",
  U: "U҉", V: "V҉", W: "W҉", X: "X҉", Y: "Y҉", Z: "Z҉",
  a: "a҉", b: "b҉", c: "c҉", d: "d҉", e: "e҉", f: "f҉", g: "g҉", h: "h҉", i: "i҉", j: "j҉",
  k: "k҉", l: "l҉", m: "m҉", n: "n҉", o: "o҉", p: "p҉", q: "q҉", r: "r҉", s: "s҉", t: "t҉",
  u: "u҉", v: "v҉", w: "w҉", x: "x҉", y: "y҉", z: "z҉"
});

// Style 94: Gothic Question
addStyle('fancy', 'fancy_gothic_question', '⋆.𐙚 ', '_??', {
  A: "𐌰", B: "𐌱", C: "𐌲", D: "𐌳", E: "𐌴", F: "𐍆", G: "𐌾", H: "𐌷", I: "𐌹", J: "𐌻",
  K: "𐌺", L: "𐍊", M: "𐌼", N: "𐌽", O: "𐍈", P: "𐍉", Q: "𐍁", R: "𐍂", S: "𐍃", T: "𐍄",
  U: "𐍀", V: "𝚅", W: "𐌸", X: "𐍇", Y: "𐍅", Z: "𐌶",
  a: "𐌰", b: "𐌱", c: "𐌲", d: "𐌳", e: "𐌴", f: "𐍆", g: "𐌾", h: "𐌷", i: "𐌹", j: "𐌻",
  k: "𐌺", l: "𐍊", m: "𐌼", n: "𐌽", o: "𐍈", p: "𐍉", q: "𐍁", r: "𐍂", s: "𐍃", t: "𐍄",
  u: "𐍀", v: "𝚅", w: "𐌸", x: "𐍇", y: "𐍅", z: "𐌶"
});

// Style 95: Star Greek Accent
addStyle('fancy', 'fancy_star_greek_accent', '╰•★⋆', '⋆★•╯༝༚༝༚', {
  a: "α", b: "в", c: "ċ", d: "ɗ", e: "є", f: "ƒ", g: "ĝ", h: "ħ", i: "ï", j: "ʝ",
  k: "ƙ", l: "ĺ", m: "ɱ", n: "ռ", o: "ο", p: "ք", q: "զ", r: "ř", s: "ֆ", t: "թ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ",
  A: "Α", B: "Β", C: "Ċ", D: "Ɗ", E: "Є", F: "Ƒ", G: "Ĝ", H: "Ħ", I: "Ï", J: "ʝ",
  K: "Ƙ", L: "Ĺ", M: "Μ", N: "Ռ", O: "Ο", P: "Ք", Q: "Ջ", R: "Ř", S: "Ֆ", T: "Թ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Զ"
});

// Style 96: Star Canadian Lambda
addStyle('fancy', 'fancy_star_canadian_lambda', '°⨳° ', '°⨳° ꫂ❁🫰🏻', {
  A: "Λ", B: "B", C: "ᑕ", D: "ᗪ", E: "Σ", F: "F", G: "G", H: "ᕼ", I: "I", J: "ᒍ",
  K: "K", L: "ᒪ", M: "ᗰ", N: "ᑎ", O: "Θ", P: "P", Q: "Q", R: "R", S: "ᔕ", T: "T",
  U: "ᑌ", V: "V", W: "ᗯ", X: "X", Y: "Y", Z: "Z",
  a: "λ", b: "b", c: "ᑕ", d: "ᗪ", e: "ε", f: "f", g: "g", h: "ᕼ", i: "i", j: "ᒍ",
  k: "k", l: "ᒪ", m: "ᗰ", n: "ᑎ", o: "θ", p: "p", q: "q", r: "r", s: "ᔕ", t: "t",
  u: "ᑌ", v: "v", w: "ᗯ", x: "x", y: "y", z: "z"
});

// Style 97: Star Short Stroke Accent
addStyle('fancy', 'fancy_star_short_stroke_accent', '—͟͞͞✰ ', ' —͟͞͞✰', {
  A: "ᴬ̸", B: "ᴮ̸", C: "ᶜ̸", D: "ᴰ̸", E: "ᴱ̸", F: "ᶠ̸", G: "ᴳ̸", H: "ᴴ̸", I: "ᴵ̸", J: "ᴶ̸",
  K: "ᴷ̸", L: "ᴸ̸", M: "ᴹ̸", N: "ᴺ̸", O: "ᴼ̸", P: "ᴾ̸", Q: "ᵠ̸", R: "ᴿ̸", S: "ˢ̸", T: "ᵀ̸",
  U: "ᵁ̸", V: "ⱽ̸", W: "ᵂ̸", X: "ˣ̸", Y: "ʸ̸", Z: "ᶻ̸",
  a: "ᵃ̸", b: "ᵇ̸", c: "ᶜ̸", d: "ᵈ̸", e: "ᵉ̸", f: "ᶠ̸", g: "ᵍ̸", h: "ʰ̸", i: "ⁱ̸", j: "ʲ̸",
  k: "ᵏ̸", l: "ˡ̸", m: "ᵐ̸", n: "ⁿ̸", o: "ᵒ̸", p: "ᵖ̸", q: "ᵠ̸", r: "ʳ̸", s: "ˢ̸", t: "ᵗ̸",
  u: "ᵘ̸", v: "ᵛ̸", w: "ʷ̸", x: "ˣ̸", y: "ʸ̸", z: "ᶻ̸"
});

// Style 98: Star Armenian Accent
addStyle('fancy', 'fancy_star_armenian', '╰•⋆', '⋆•╯𖤍', {
  a: "α", b: "в", c: "ċ", d: "ɗ", e: "є", f: "ƒ", g: "ĝ", h: "ħ", i: "ï", j: "ʝ",
  k: "ƙ", l: "ĺ", m: "ɱ", n: "ռ", o: "ο", p: "ք", q: "զ", r: "ř", s: "ֆ", t: "թ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ",
  A: "Α", B: "Β", C: "Ċ", D: "Ɗ", E: "Є", F: "Ƒ", G: "Ĝ", H: "Ħ", I: "Ï", J: "ʝ",
  K: "Ƙ", L: "Ĺ", M: "Μ", N: "Ռ", O: "Ο", P: "Ք", Q: "Ջ", R: "Ř", S: "Ֆ", T: "Թ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Զ"
});

// Style 99: Sumerian Squared
addStyle('fancy', 'fancy_sumerian_squared', '𒉭⟆░ ', ' ░💕⃝🕊️⟅', {
  A: "🄐", B: "🄑", C: "🄒", D: "🄓", E: "🄔", F: "🄕", G: "🄖", H: "🄗", I: "🄘", J: "🄙",
  K: "🄚", L: "🄛", M: "🄜", N: "🄝", O: "🄞", P: "🄟", Q: "🄠", R: "🄡", S: "🄢", T: "🄣",
  U: "🄤", V: "🄥", W: "🄦", X: "🄧", Y: "🄨", Z: "🄩",
  a: "🄐", b: "🄑", c: "🄒", d: "🄓", e: "🄔", f: "🄕", g: "🄖", h: "🄗", i: "🄘", j: "🄙",
  k: "🄚", l: "🄛", m: "🄜", n: "🄝", o: "🄞", p: "🄟", q: "🄠", r: "🄡", s: "🄢", t: "🄣",
  u: "🄤", v: "🄥", w: "🄦", x: "🄧", y: "🄨", z: "🄩"
});

// Style 100: Volcano Greek
addStyle('fancy', 'fancy_volcano_greek', '🌋 ', ' ☠️♨', {
  A: "Δ", B: "β", C: "Ͼ", D: "Ð", E: "ξ", F: "Ғ", G: "Ǥ", H: "Ӈ", I: "Ϊ", J: "Ј",
  K: "Ӄ", L: "Ł", M: "Ϻ", N: "Ɲ", O: "Θ", P: "Ƥ", Q: "φ", R: "Я", S: "Ș", T: "Ŧ",
  U: "Ϋ", V: "Ѵ", W: "Ш", X: "Ӿ", Y: "¥", Z: "Ƶ",
  a: "δ", b: "β", c: "Ͼ", d: "ð", e: "ξ", f: "ғ", g: "ǥ", h: "ӈ", i: "ϊ", j: "ј",
  k: "ӄ", l: "ł", m: "ϻ", n: "ɲ", o: "θ", p: "ƥ", q: "φ", r: "я", s: "ș", t: "ŧ",
  u: "ϋ", v: "ν", w: "ш", x: "ӿ", y: "¥", z: "ƶ"
});

// Style 101: Star Combo Accent
addStyle('fancy', 'fancy_star_combo', '⋆⋅☆⋅⋆ ──', '── ⋆⋅☆⋅⋆', {
  A: "A͜͡", B: "B͜͡", C: "C͜͡", D: "D͜͡", E: "E͜͡", F: "F͜͡", G: "G͜͡", H: "H͜͡", I: "I͜͡", J: "J͜͡",
  K: "K͜͡", L: "L͜͡", M: "M͜͡", N: "N͜͡", O: "O͜͡", P: "P͜͡", Q: "Q͜͡", R: "R͜͡", S: "S͜͡", T: "T͜͡",
  U: "U͜͡", V: "V͜͡", W: "W͜͡", X: "X͜͡", Y: "Y͜͡", Z: "Z͜͡",
  a: "a͜͡", b: "b͜͡", c: "c͜͡", d: "d͜͡", e: "e͜͡", f: "f͜͡", g: "g͜͡", h: "h͜͡", i: "i͜͡", j: "j͜͡",
  k: "k͜͡", l: "l͜͡", m: "m͜͡", n: "n͜͡", o: "o͜͡", p: "p͜͡", q: "q͜͡", r: "r͜͡", s: "s͜͡", t: "t͜͡",
  u: "u͜͡", v: "v͜͡", w: "w͜͡", x: "x͜͡", y: "y͜͡", z: "z͜͡"
});

// Style 102: Chinese Japanese
addStyle('fancy', 'fancy_chinese_japanese', '╰‿╯.', '✨👒ᴳᵒᵈ', {
  A: "卂", B: "乃", C: "匚", D: "刀", E: "乇", F: "千", G: "Ꮆ", H: "卄", I: "丨", J: "ﾌ",
  K: "Ҝ", L: "ㄥ", M: "爪", N: "几", O: "ㄖ", P: "卩", Q: "Ҩ", R: "尺", S: "丂", T: "ㄒ",
  U: "ㄩ", V: "ᐯ", W: "山", X: "乂", Y: "ㄚ", Z: "乙",
  a: "卂", b: "乃", c: "匚", d: "刀", e: "乇", f: "千", g: "Ꮆ", h: "卄", i: "丨", j: "ﾌ",
  k: "Ҝ", l: "ㄥ", m: "爪", n: "几", o: "ㄖ", p: "卩", q: "Ҩ", r: "尺", s: "丂", t: "ㄒ",
  u: "ㄩ", v: "ᐯ", w: "山", x: "乂", y: "ㄚ", z: "乙"
});

// Style 103: Star Decorated Yin Yang
addStyle('fancy', 'fancy_star_decorated_yin_yang', '☆', '☆⧼☯⧽·˚×͜×', {
  A: "☆A☆", B: "☆B☆", C: "☆C☆", D: "☆D☆", E: "☆E☆", F: "☆F☆", G: "☆G☆", H: "☆H☆", I: "☆I☆", J: "☆J☆",
  K: "☆K☆", L: "☆L☆", M: "☆M☆", N: "☆N☆", O: "☆O☆", P: "☆P☆", Q: "☆Q☆", R: "☆R☆", S: "☆S☆", T: "☆T☆",
  U: "☆U☆", V: "☆V☆", W: "☆W☆", X: "☆X☆", Y: "☆Y☆", Z: "☆Z☆",
  a: "☆a☆", b: "☆b☆", c: "☆c☆", d: "☆d☆", e: "☆e☆", f: "☆f☆", g: "☆g☆", h: "☆h☆", i: "☆i☆", j: "☆j☆",
  k: "☆k☆", l: "☆l☆", m: "☆m☆", n: "☆n☆", o: "☆o☆", p: "☆p☆", q: "☆q☆", r: "☆r☆", s: "☆s☆", t: "☆t☆",
  u: "☆u☆", v: "☆v☆", w: "☆w☆", x: "☆x☆", y: "☆y☆", z: "☆z☆"
});

// Style 104: Star Squared with Question
addStyle('fancy', 'fancy_star_squared_question', '⋆.𐙚 ‼꩜ᯓ', '_??•╯', {
  A: "🄰", B: "🄱", C: "🄲", D: "🄳", E: "🄴", F: "🄵", G: "🄶", H: "🄷", I: "🄸", J: "🄹",
  K: "🄺", L: "🄻", M: "🄼", N: "🄽", O: "🄾", P: "🄿", Q: "🅀", R: "🅁", S: "🅂", T: "🅃",
  U: "🅄", V: "🅅", W: "🅆", X: "🅇", Y: "🅈", Z: "🅉",
  a: "🄰", b: "🄱", c: "🄲", d: "🄳", e: "🄴", f: "🄵", g: "🄶", h: "🄷", i: "🄸", j: "🄹",
  k: "🄺", l: "🄻", m: "🄼", n: "🄽", o: "🄾", p: "🄿", q: "🅀", r: "🅁", s: "🅂", t: "🅃",
  u: "🅄", v: "🅅", w: "🅆", x: "🅇", y: "🅈", z: "🅉"
});

// Style 105: Arrow Short Stroke Umbrella
addStyle('fancy', 'fancy_arrow_short_stroke_umbrella', '►►❇︎˖°', '°˖☂ ‹𝟹', {
  A: "A̶", B: "B̶", C: "C̶", D: "D̶", E: "E̶", F: "F̶", G: "G̶", H: "H̶", I: "I̶", J: "J̶",
  K: "K̶", L: "L̶", M: "M̶", N: "N̶", O: "O̶", P: "P̶", Q: "Q̶", R: "R̶", S: "S̶", T: "T̶",
  U: "U̶", V: "V̶", W: "W̶", X: "X̶", Y: "Y̶", Z: "Z̶",
  a: "a̶", b: "b̶", c: "c̶", d: "d̶", e: "e̶", f: "f̶", g: "g̶", h: "h̶", i: "i̶", j: "j̶",
  k: "k̶", l: "l̶", m: "m̶", n: "n̶", o: "o̶", p: "p̶", q: "q̶", r: "r̶", s: "s̶", t: "t̶",
  u: "u̶", v: "v̶", w: "w̶", x: "x̶", y: "y̶", z: "z̶"
});

// Style 106: Waifi Bold Italic
addStyle('fancy', 'fancy_waifi_bold_italic', 'ᴡɪꜰi͢ ', ' ᯤ', {
  A: "𝑨", B: "𝑩", C: "𝑪", D: "𝑫", E: "𝑬", F: "𝑭", G: "𝑮", H: "𝑯", I: "𝑰", J: "𝑱",
  K: "𝑲", L: "𝑳", M: "𝑴", N: "𝑵", O: "𝑶", P: "𝑷", Q: "𝑸", R: "𝑹", S: "𝑺", T: "𝑻",
  U: "𝑼", V: "𝑽", W: "𝑾", X: "𝑿", Y: "𝒀", Z: "𝒁",
  a: "𝒂", b: "𝒃", c: "𝒄", d: "𝒅", e: "𝒆", f: "𝒇", g: "𝒈", h: "𝒉", i: "𝒊", j: "𝒋",
  k: "𝒌", l: "𝒍", m: "𝒎", n: "𝒏", o: "𝒐", p: "𝒑", q: "𝒒", r: "𝒓", s: "𝒔", t: "𝒕",
  u: "𝒖", v: "𝒗", w: "𝒘", x: "𝒙", y: "𝒚", z: "𝒛"
});

// Style 107: Scary Italic Math
addStyle('fancy', 'fancy_scary_italic_math', 'ѕc𔓎яγ ⟡', '⟡ ᶻ 𝗓 𐰁', {
  A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
  K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
});

// Style 108: Yin Yang Gothic
addStyle('fancy', 'fancy_yin_yang_gothic', '☯ ㋚ ', '_𐚁', {
  A: "𐌰", B: "𐌱", C: "𐌲", D: "𐌳", E: "𐌴", F: "𐍆", G: "𐌾", H: "𐌷", I: "𐌹", J: "𐌻",
  K: "𐌺", L: "𐍊", M: "𐌼", N: "𐌽", O: "𐍈", P: "𐍉", Q: "𐍁", R: "𐍂", S: "𐍃", T: "𐍄",
  U: "𐍀", V: "𝚅", W: "𐌸", X: "𐍇", Y: "𐍅", Z: "𐌶",
  a: "𐌰", b: "𐌱", c: "𐌲", d: "𐌳", e: "𐌴", f: "𐍆", g: "𐌾", h: "𐌷", i: "𐌹", j: "𐌻",
  k: "𐌺", l: "𐍊", m: "𐌼", n: "𐌽", o: "𐍈", p: "𐍉", q: "𐍁", r: "𐍂", s: "𐍃", t: "𐍄",
  u: "𐍀", v: "𝚅", w: "𐌸", x: "𐍇", y: "𐍅", z: "𐌶"
});

// Style 109: Tai Greek with Stroke
addStyle('fancy', 'fancy_tai_greek_stroke', '', 'ᯓA̴➶➶O̴W̴', {
  A: "Δ", B: "β", C: "C", D: "Đ", E: "Σ", F: "Ϝ", G: "Ꮆ", H: "Ħ", I: "I", J: "J",
  K: "К", L: "Ꮭ", M: "M", N: "П", O: "Ø", P: "Ƥ", Q: "Ǫ", R: "Ŗ", S: "Ѕ", T: "Ͳ",
  U: "Ц", V: "Ѵ", W: "Ш", X: "X", Y: "Ψ", Z: "Ẕ",
  a: "δ", b: "β", c: "c", d: "đ", e: "ε", f: "ϝ", g: "g", h: "ħ", i: "ι", j: "j",
  k: "κ", l: "l", m: "m", n: "η", o: "ø", p: "ƥ", q: "ǫ", r: "ŗ", s: "s", t: "t",
  u: "ц", v: "ν", w: "ш", x: "x", y: "ψ", z: "ẑ"
});

// Style 110: Plane Sans
addStyle('fancy', 'fancy_plane_sans', 'ᯓ ✈︎ ', '·˚₊ ✌︎︎ˎˊ˗', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 111: Om Double Struck
addStyle('fancy', 'fancy_om_double_struck', '꧁ૐ ｡𖦹°‧', '｡𖦹°‧ ૐ꧂', {
  A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
  K: "𝕂", L: "𝕃", M: "𝕄", N: "𝕟", O: "𝕠", P: "𝕡", Q: "𝕢", R: "𝕣", S: "𝕤", T: "𝕥",
  U: "𝕦", V: "𝕧", W: "𝕨", X: "𝕩", Y: "𝕪", Z: "𝕫",
  a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
  k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
  u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫"
});

// Style 112: Playing Card Greek
addStyle('fancy', 'fancy_playing_card_greek', 'ᯓ🂱 ', ' 🂱ᯓᵃᵘʳᵃ ✔', {
  A: "Δ", B: "β", C: "C", D: "Đ", E: "Σ", F: "Ϝ", G: "Ꮆ", H: "Ħ", I: "I", J: "J",
  K: "К", L: "Ꮭ", M: "M", N: "П", O: "Ø", P: "Ƥ", Q: "Ǫ", R: "Ŗ", S: "Ѕ", T: "Ͳ",
  U: "Ц", V: "Ѵ", W: "Ш", X: "X", Y: "Ψ", Z: "Ẕ",
  a: "δ", b: "β", c: "c", d: "đ", e: "ε", f: "ϝ", g: "g", h: "ħ", i: "ι", j: "j",
  k: "κ", l: "l", m: "m", n: "η", o: "ø", p: "ƥ", q: "ǫ", r: "ŗ", s: "s", t: "t",
  u: "ц", v: "ν", w: "ш", x: "x", y: "ψ", z: "ẑ"
});

// Style 113: Playing Card Canadian
addStyle('fancy', 'fancy_playing_card_canadian', 'ᯓ🂱 ₊˚⊹', '⊹˚₊ 🂱ᯓᵃᵗⁱᵗᵘᵈᵉ', {
  a: "ᥲ", b: "ᑲ", c: "ᥴ", d: "ᑯ", e: "ᥱ", f: "ᖴ", g: "ᧁ", h: "ᕼ", i: "Ꭵ", j: "ᒎ",
  k: "ᛕ", l: "ᥣ", m: "ᥒ", n: "ᴍ", o: "᥆", p: "ρ", q: "ᑫ", r: "ᖇ", s: "ᔑ", t: "ᥴ",
  u: "ᑌ", v: "ᐯ", w: "᭙", x: "᥊", y: "ᥒ", z: "ɀ",
  A: "ᥲ", B: "ᑲ", C: "ᥴ", D: "ᑯ", E: "ᥱ", F: "ᖴ", G: "ᧁ", H: "ᕼ", I: "Ꭵ", J: "ᒎ",
  K: "ᛕ", L: "ᥣ", M: "ᥒ", N: "ᴍ", O: "᥆", P: "ρ", Q: "ᑫ", R: "ᖇ", S: "ᔑ", T: "ᥴ",
  U: "ᑌ", V: "ᐯ", W: "᭙", X: "᥊", Y: "ᥒ", Z: "ɀ"
});

// Style 114: Egyptian Monospace
addStyle('fancy', 'fancy_egyptian_monospace', '𓂁﹏ ˗ˏˋ●⃝𓆝', '●⃝𓆝ˎˊ˗ 𓊝﹏𓂁', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
  K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚃", T: "𝚄",
  U: "𝚅", V: "𝚆", W: "𝚇", X: "𝚈", Y: "𝚉", Z: "𝙰",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
  k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚝", t: "𝚞",
  u: "𝚟", v: "𝚠", w: "𝚡", x: "𝚢", y: "𝚣", z: "𝚊"
});

// Style 115: Deer Monospace
addStyle('fancy', 'fancy_deer_monospace', '༒₊˚⊹𓃹', '𓃹⊹˚₊༒', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
  K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚃", T: "𝚄",
  U: "𝚅", V: "𝚆", W: "𝚇", X: "𝚈", Y: "𝚉", Z: "𝙰",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
  k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚝", t: "𝚞",
  u: "𝚟", v: "𝚠", w: "𝚡", x: "𝚢", y: "𝚣", z: "𝚊"
});

// Style 116: Cross Fraktur
addStyle('fancy', 'fancy_cross_fraktur', '×̷̷͜×̷ 🂱 ', ' 🂱 ×̷̷͜×̷', {
  a: "𝖆", b: "𝖇", c: "𝖈", d: "𝖉", e: "𝖊", f: "𝖋", g: "𝖌", h: "𝖍", i: "𝖎", j: "𝖏",
  k: "𝖐", l: "𝖑", m: "𝖒", n: "𝖓", o: "𝖔", p: "𝖕", q: "𝖖", r: "𝖗", s: "𝖘", t: "𝖙",
  u: "𝖚", v: "𝖛", w: "𝖜", x: "𝖝", y: "𝖞", z: "𝖟",
  A: "𝕬", B: "𝕭", C: "𝕮", D: "𝕯", E: "𝕰", F: "𝕱", G: "𝕲", H: "𝕳", I: "𝕴", J: "𝕵",
  K: "𝕶", L: "𝕷", M: "𝕸", N: "𝕹", O: "𝕺", P: "𝕻", Q: "𝕼", R: "𝕽", S: "𝕾", T: "𝕿",
  U: "𝖀", V: "𝖁", W: "𝖂", X: "𝖃", Y: "𝖄", Z: "𝖅"
});

// Style 117: Star Squared
addStyle('fancy', 'fancy_star_squared', '⊹˚₊𓆩', '𓆪₊˚⊹ ᵍᵒᵒᵈ ✌︎︎ˎˊ˗', {
  A: "🄰", B: "🄱", C: "🄲", D: "🄳", E: "🄴", F: "🄵", G: "🄶", H: "🄷", I: "🄸", J: "🄹",
  K: "🄺", L: "🄻", M: "🄼", N: "🄽", O: "🄾", P: "🄿", Q: "🅀", R: "🅁", S: "🅂", T: "🅃",
  U: "🅄", V: "🅅", W: "🅆", X: "🅇", Y: "🅈", Z: "🅉",
  a: "🄰", b: "🄱", c: "🄲", d: "🄳", e: "🄴", f: "🄵", g: "🄶", h: "🄷", i: "🄸", j: "🄹",
  k: "🄺", l: "🄻", m: "🄼", n: "🄽", o: "🄾", p: "🄿", q: "🅀", r: "🅁", s: "🅂", t: "🅃",
  u: "🅄", v: "🅅", w: "🅆", x: "🅇", y: "🅈", z: "🅉"
});

// Style 118: Goat Cursive
addStyle('fancy', 'fancy_goat_cursive', 'ᵍᵒᵃᵗ ٨ـ𓃵ﮩ٨ـﮩ ', ' ﮩﮩ٨ـ𓃵ـﮩﮩ', {
  A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘", J: "𝓙",
  K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣",
  U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩",
  a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳",
  k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽",
  u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃"
});

// Style 119: Star Accent Modified
addStyle('fancy', 'fancy_star_accent_modified', '⋆˙𓍊₊ ', ' ₊𓍊 ×̷̷͜×̷ ࿐', {
  a: "ⱥ", b: "ᵬ", c: "ȼ", d: "ᶑ", e: "ɇ", f: "ᶂ", g: "ᶃ", h: "ħ", i: "ᶖ", j: "ʝ",
  k: "ƙ", l: "ḽ", m: "ɱ", n: "ᶇ", o: "ø", p: "ᵽ", q: "ɋ", r: "ᶉ", s: "ʂ", t: "ȶ",
  u: "ʋ", v: "ᶌ", w: "ẅ", x: "ẋ", y: "ᶌ", z: "ʑ",
  A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H", I: "I", J: "J",
  K: "K", L: "L", M: "M", N: "N", O: "O", P: "P", Q: "Q", R: "R", S: "S", T: "T",
  U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Z"
});

// Style 120: King Bold Sans
addStyle('fancy', 'fancy_king_bold_sans', 'ᵏⁱⁿᵍ 𓄅˗ˏˋ✰ ', ' ✰ˎˊ˗𓄅', {
  A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝",
  K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
  U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭",
  a: "𝗮", b: "𝗯", c: "𝗰", d: "𝗱", e: "𝗲", f: "𝗳", g: "𝗴", h: "𝗵", i: "𝗶", j: "𝗷",
  k: "𝗸", l: "𝗹", m: "𝗺", n: "𝗻", o: "𝗼", p: "𝗽", q: "𝗾", r: "𝗿", s: "𝘀", t: "𝘁",
  u: "𝘂", v: "𝘃", w: "𝘄", x: "𝘅", y: "𝘆", z: "𝘇"
});

// Style 121: IAM Bold Italic
addStyle('fancy', 'fancy_iam_bold_italic', 'ⁱᵃᵐ|', '| 𒆜', {
  A: "𝑨", B: "𝑩", C: "𝑪", D: "𝑫", E: "𝑬", F: "𝑭", G: "𝑮", H: "𝑯", I: "𝑰", J: "𝑱",
  K: "𝑲", L: "𝑳", M: "𝑴", N: "𝑵", O: "𝑶", P: "𝑷", Q: "𝑸", R: "𝑹", S: "𝑺", T: "𝑻",
  U: "𝑼", V: "𝑽", W: "𝑾", X: "𝑿", Y: "𝒀", Z: "𝒁",
  a: "𝒂", b: "𝒃", c: "𝒄", d: "𝒅", e: "𝒆", f: "𝒇", g: "𝒈", h: "𝒉", i: "𝒊", j: "𝒋",
  k: "𝒌", l: "𝒍", m: "𝒎", n: "𝒏", o: "𝒐", p: "𝒑", q: "𝒒", r: "𝒓", s: "𝒔", t: "𝒕",
  u: "𝒖", v: "𝒗", w: "𝒘", x: "𝒙", y: "𝒚", z: "𝒛"
});

// Style 122: IM Double Struck
addStyle('fancy', 'fancy_im_double_struck', 'ɪᴍ᭄', 'シ᭄', {
  A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
  K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
  U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ",
  a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
  k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
  u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫"
});

// Style 123: Star Bold Math
addStyle('fancy', 'fancy_star_bold_math', '★⃟', '_ↁ★⃟', {
  A: "𝐀", B: "𝐁", C: "𝐂", D: "𝐃", E: "𝐄", F: "𝐅", G: "𝐆", H: "𝐇", I: "𝐈", J: "𝐉",
  K: "𝐊", L: "𝐋", M: "𝐌", N: "𝐍", O: "𝐎", P: "𝐏", Q: "𝐐", R: "𝐑", S: "𝐒", T: "𝐓",
  U: "𝐔", V: "𝐕", W: "𝐖", X: "𝐗", Y: "𝐘", Z: "𝐙",
  a: "𝐚", b: "𝐛", c: "𝐜", d: "𝐝", e: "𝐞", f: "𝐟", g: "𝐠", h: "𝐡", i: "𝐢", j: "𝐣",
  k: "𝐤", l: "𝐥", m: "𝐦", n: "𝐧", o: "𝐨", p: "𝐩", q: "𝐪", r: "𝐫", s: "𝐬", t: "𝐭",
  u: "𝐮", v: "𝐯", w: "𝐰", x: "𝐱", y: "𝐲", z: "𝐳"
});

// Style 124: Egyptian Squared
addStyle('fancy', 'fancy_egyptian_squared', '꧁𓊈𒆜', '_⛧', {
  A: "🄰", B: "🄱", C: "🄲", D: "🄳", E: "🄴", F: "🄵", G: "🄶", H: "🄷", I: "🄸", J: "🄹",
  K: "🄺", L: "🄻", M: "🄼", N: "🄽", O: "🄾", P: "🄿", Q: "🅀", R: "🅁", S: "🅂", T: "🅃",
  U: "🅄", V: "🅅", W: "🅆", X: "🅇", Y: "🅈", Z: "🅉",
  a: "🄰", b: "🄱", c: "🄲", d: "🄳", e: "🄴", f: "🄵", g: "🄶", h: "🄷", i: "🄸", j: "🄹",
  k: "🄺", l: "🄻", m: "🄼", n: "🄽", o: "🄾", p: "🄿", q: "🅀", r: "🅁", s: "🅂", t: "🅃",
  u: "🅄", v: "🅅", w: "🅆", x: "🅇", y: "🅈", z: "🅉"
});

// Style 125: Death Cyrillic
addStyle('fancy', 'fancy_death_cyrillic', 'DE☠TH_', ' ⑆᭄', {
  A: "A҈", B: "B҈", C: "C҈", D: "D҈", E: "E҈", F: "F҈", G: "G҈", H: "H҈", I: "I҈", J: "J҈",
  K: "K҈", L: "L҈", M: "M҈", N: "N҈", O: "O҈", P: "P҈", Q: "Q҈", R: "R҈", S: "S҈", T: "T҈",
  U: "U҈", V: "V҈", W: "W҈", X: "X҈", Y: "Y҈", Z: "Z҈",
  a: "a҈", b: "b҈", c: "c҈", d: "d҈", e: "e҈", f: "f҈", g: "g҈", h: "h҈", i: "i҈", j: "j҈",
  k: "k҈", l: "l҈", m: "m҈", n: "n҈", o: "o҈", p: "p҈", q: "q҈", r: "r҈", s: "s҈", t: "t҈",
  u: "u҈", v: "v҈", w: "w҈", x: "x҈", y: "y҈", z: "z҈"
});

// Style 126: Boxed Fraktur
addStyle('fancy', 'fancy_boxed_fraktur', '○》░', '░《○𓅈', {
  A: "𝔄", B: "𝔅", C: "ℭ", D: "𝔇", E: "𝔈", F: "𝔉", G: "𝔊", H: "ℌ", I: "ℑ", J: "𝔍",
  K: "𝔎", L: "𝔏", M: "𝔐", N: "𝔑", O: "𝔒", P: "𝔓", Q: "𝔔", R: "ℜ", S: "𝔖", T: "𝔗",
  U: "𝔘", V: "𝔙", W: "𝔚", X: "𝔛", Y: "𝔜", Z: "ℨ",
  a: "𝔞", b: "𝔟", c: "𝔠", d: "𝔡", e: "𝔢", f: "𝔣", g: "𝔤", h: "𝔥", i: "𝔦", j: "𝔧",
  k: "𝔨", l: "𝔩", m: "𝔪", n: "𝔫", o: "𝔬", p: "𝔭", q: "𝔮", r: "𝔯", s: "𝔰", t: "𝔱",
  u: "𝔲", v: "𝔳", w: "𝔴", x: "𝔵", y: "𝔶", z: "𝔷"
});

// Style 127: Diamond Bold Sans
addStyle('fancy', 'fancy_diamond_bold_sans', '❖𓆩⚚ ', ' ⚚𓆪❖', {
  A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝",
  K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
  U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭",
  a: "𝗮", b: "𝗯", c: "𝗰", d: "𝗱", e: "𝗲", f: "𝗳", g: "𝗴", h: "𝗵", i: "𝗶", j: "𝗷",
  k: "𝗸", l: "𝗹", m: "𝗺", n: "𝗻", o: "𝗼", p: "𝗽", q: "𝗾", r: "𝗿", s: "𝘀", t: "𝘁",
  u: "𝘂", v: "𝘃", w: "𝘄", x: "𝘅", y: "𝘆", z: "𝘇"
});

// Style 128: Sparkle Monospace
addStyle('fancy', 'fancy_sparkle_monospace', '✧⋆˙ ', ' ˙⋆✧', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
  K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
  U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
  k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
  u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣"
});

// Style 130: Star Small Caps
addStyle('fancy', 'fancy_star_small_caps', '✧°• ', ' •° 𐚁 ᭄', {
  A: "ᴬ", B: "ᴮ", C: "ᶜ", D: "ᴰ", E: "ᴱ", F: "ᶠ", G: "ᴳ", H: "ᴴ", I: "ᴵ", J: "ᴶ",
  K: "ᴷ", L: "ᴸ", M: "ᴹ", N: "ᴺ", O: "ᴼ", P: "ᴾ", Q: "ᵠ", R: "ᴿ", S: "ˢ", T: "ᵀ",
  U: "ᵁ", V: "ⱽ", W: "ᵂ", X: "ˣ", Y: "ʸ", Z: "ᶻ",
  a: "ᵃ", b: "ᵇ", c: "ᶜ", d: "ᵈ", e: "ᵉ", f: "ᶠ", g: "ᵍ", h: "ʰ", i: "ⁱ", j: "ʲ",
  k: "ᵏ", l: "ˡ", m: "ᵐ", n: "ⁿ", o: "ᵒ", p: "ᵖ", q: "ᑫ", r: "ʳ", s: "ˢ", t: "ᵗ",
  u: "ᵘ", v: "ᵛ", w: "ʷ", x: "ˣ", y: "ʸ", z: "ᶻ"
});

// Style 131: Equals Fraktur
addStyle('fancy', 'fancy_equals_fraktur', '═══≪ °❖° ≫═══ ', '', {
  A: "𝕬", B: "𝕭", C: "𝕮", D: "𝕯", E: "𝕰", F: "𝕱", G: "𝕲", H: "𝕳", I: "𝕴", J: "𝕵",
  K: "𝕶", L: "𝕷", M: "𝕸", N: "𝕹", O: "𝕺", P: "𝕻", Q: "𝕼", R: "𝕽", S: "𝕾", T: "𝕿",
  U: "𝖀", V: "𝖁", W: "𝖂", X: "𝖃", Y: "𝖄", Z: "𝖅",
  a: "𝖆", b: "𝖇", c: "𝖈", d: "𝖉", e: "𝖊", f: "𝖋", g: "𝖌", h: "𝖍", i: "𝖎", j: "𝖏",
  k: "𝖐", l: "𝖑", m: "𝖒", n: "𝖓", o: "𝖔", p: "𝖕", q: "𝖖", r: "𝖗", s: "𝖘", t: "𝖙",
  u: "𝖚", v: "𝖛", w: "𝖜", x: "𝖝", y: "𝖞", z: "𝖟"
});

// Style 132: Hittite Cyrillic
addStyle('fancy', 'fancy_hittite_cyrillic', '𒆜┊', '┊🦋⃟𒆜', {
  A: "A҉", B: "B҉", C: "C҉", D: "D҉", E: "E҉", F: "F҉", G: "G҉", H: "H҉", I: "I҉", J: "J҉",
  K: "K҉", L: "L҉", M: "M҉", N: "N҉", O: "O҉", P: "P҉", Q: "Q҉", R: "R҉", S: "S҉", T: "T҉",
  U: "U҉", V: "V҉", W: "W҉", X: "X҉", Y: "Y҉", Z: "Z҉",
  a: "a҉", b: "b҉", c: "c҉", d: "d҉", e: "e҉", f: "f҉", g: "g҉", h: "h҉", i: "i҉", j: "j҉",
  k: "k҉", l: "l҉", m: "m҉", n: "n҉", o: "o҉", p: "p҉", q: "q҉", r: "r҉", s: "s҉", t: "t҉",
  u: "u҉", v: "v҉", w: "w҉", x: "x҉", y: "y҉", z: "z҉"
});

// Style 133: Star Italic
addStyle('fancy', 'fancy_star_italic', '✩°｡⋆ ', ' ⋆｡°✩', {
  A: "𝘼", B: "𝘽", C: "𝘾", D: "𝘿", E: "𝙀", F: "𝙁", G: "𝙂", H: "𝙃", I: "𝙄", J: "𝙅",
  K: "𝙆", L: "𝙇", M: "𝙈", N: "𝙉", O: "𝙊", P: "𝙋", Q: "𝙌", R: "𝙍", S: "𝙎", T: "𝙏",
  U: "𝙐", V: "𝙑", W: "𝙒", X: "𝙓", Y: "𝙔", Z: "𝙕",
  a: "𝙖", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝙚", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝙞", j: "𝙟",
  k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝙤", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
  u: "𝙪", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝙮", z: "𝙯"
});

// Style 134: Egyptian Sans
addStyle('fancy', 'fancy_egyptian_sans', '𓍊𓋼𓍊', '𓍊𓋼𓍊', {
  A: "𝖠", B: "𝖡", C: "𝖢", D: "𝖣", E: "𝖤", F: "𝖥", G: "𝖦", H: "𝖧", I: "𝖨", J: "𝖩",
  K: "𝖪", L: "𝖫", M: "𝖬", N: "𝖭", O: "𝖮", P: "𝖯", Q: "𝖰", R: "𝖱", S: "𝖲", T: "𝖳",
  U: "𝖴", V: "𝖵", W: "𝖶", X: "𝖷", Y: "𝖸", Z: "𝖹",
  a: "𝖺", b: "𝖻", c: "𝖼", d: "𝖽", e: "𝖾", f: "𝖿", g: "𝗀", h: "𝗁", i: "𝗂", j: "𝗃",
  k: "𝗄", l: "𝗅", m: "𝗆", n: "𝗇", o: "𝗈", p: "𝗉", q: "𝗊", r: "𝗋", s: "𝗌", t: "𝗍",
  u: "𝗎", v: "𝗏", w: "𝗐", x: "𝗑", y: "𝗒", z: "𝓏"
});

// Style 21: Superscript Style
addStyle('font', 'font_superscript', '', '', {
  a: "ᵃ", b: "ᵇ", c: "ᶜ", d: "ᵈ", e: "ᵉ", f: "ᶠ", g: "ᵍ", h: "ʰ", i: "ⁱ", j: "ʲ",
  k: "ᵏ", l: "ˡ", m: "ᵐ", n: "ⁿ", o: "ᵒ", p: "ᵖ", q: "ᑫ", r: "ʳ", s: "ˢ", t: "ᵗ",
  u: "ᵘ", v: "ᵛ", w: "ʷ", x: "ˣ", y: "ʸ", z: "ᶻ",
  A: "ᴬ", B: "ᴮ", C: "ᶜ", D: "ᴰ", E: "ᴱ", F: "ᶠ", G: "ᴳ", H: "ᴴ", I: "ᴵ", J: "ᴶ",
  K: "ᴷ", L: "ᴸ", M: "ᴹ", N: "ᴺ", O: "ᴼ", P: "ᴾ", Q: "ᵠ", R: "ᴿ", S: "ˢ", T: "ᵀ",
  U: "ᵁ", V: "ⱽ", W: "ᵂ", X: "ˣ", Y: "ʸ", Z: "ᶻ"
});

// Style 22: Greek Simple
addStyle('font', 'font_greek_simple', '', '', {
  a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
  k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ",
  A: "Α", B: "Β", C: "C", D: "Ɗ", E: "Ε", F: "Ƒ", G: "Ɠ", H: "Н", I: "Ι", J: "Ј",
  K: "Κ", L: "ℓ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ջ", R: "Я", S: "Ѕ", T: "Τ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Ƶ"
});

// Style 23: Underline Accent Simple
addStyle('font', 'font_underline_accent_simple', '', '', {
  A: "A͓̽", B: "B͓̽", C: "C͓̽", D: "D͓̽", E: "E͓̽", F: "F͓̽", G: "G͓̽", H: "H͓̽", I: "I͓̽", J: "J͓̽",
  K: "K͓̽", L: "L͓̽", M: "M͓̽", N: "N͓̽", O: "O͓̽", P: "P͓̽", Q: "Q͓̽", R: "R͓̽", S: "S͓̽", T: "T͓̽",
  U: "U͓̽", V: "V͓̽", W: "W͓̽", X: "X͓̽", Y: "Y͓̽", Z: "Z͓̽",
  a: "a͓̽", b: "b͓̽", c: "c͓̽", d: "d͓̽", e: "e͓̽", f: "f͓̽", g: "g͓̽", h: "h͓̽", i: "i͓̽", j: "j͓̽",
  k: "k͓̽", l: "l͓̽", m: "m͓̽", n: "n͓̽", o: "o͓̽", p: "p͓̽", q: "q͓̽", r: "r͓̽", s: "s͓̽", t: "t͓̽",
  u: "u͓̽", v: "v͓̽", w: "w͓̽", x: "x͓̽", y: "y͓̽", z: "z͓̽"
});

// Style 24: Sans Serif Simple
addStyle('font', 'font_sans_serif_simple', '', '', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤̆̈", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 25: Monospace Simple
addStyle('font', 'font_monospace_simple', '', '', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
  K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
  U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
  k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
  u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣"
});

// Style 26: Greek Modern Simple
addStyle('font', 'font_greek_modern_simple', '', '', {
  A: "Α", B: "Β", C: "Ͻ", D: "Ɗ", E: "Σ", F: "Ƒ", G: "Ɠ", H: "Ν", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
  k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ"
});

// Style 27: Currency Style
addStyle('font', 'font_currency', '', '', {
  A: "₳", B: "₲", C: "₵", D: "Đ", E: "₳", F: "₣", G: "₲", H: "Ⱨ", I: "ł", J: "₲",
  K: "₭", L: "Ⱡ", M: "₥", N: "₦", O: "Ø", P: "₱", Q: "Ꝗ", R: "Ɽ", S: "₴", T: "₮",
  U: "Ṳ", V: "ᐯ", W: "₩", X: "Ӿ", Y: "Ɏ", Z: "ƶ",
  a: "₳", b: "₲", c: "₵", d: "đ", e: "₳", f: "₣", g: "₲", h: "Ⱨ", i: "ł", j: "₲",
  k: "₭", l: "Ⱡ", m: "₥", n: "₦", o: "ø", p: "₱", q: "Ꝗ", r: "Ɽ", s: "₴", t: "₮",
  u: "Ṳ", v: "ᐯ", w: "₩", x: "Ӿ", y: "Ɏ", z: "ƶ"
});

// Style 28: Small Caps Simple
addStyle('font', 'font_small_caps_simple', '', '', {
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 29: Wave Accent Simple
addStyle('font', 'font_wave_accent_simple', '', '', {
  A: "A̾", B: "B̾", C: "C̾", D: "D̾", E: "E̾", F: "F̾", G: "G̾", H: "H̾", I: "I̾", J: "J̾",
  K: "K̾", L: "L̾", M: "M̾", N: "N̾", O: "O̾", P: "P̾", Q: "Q̾", R: "R̾", S: "S̾", T: "T̾",
  U: "U̾", V: "V̾", W: "W̾", X: "X̾", Y: "Y̾", Z: "Z̾",
  a: "a̾", b: "b̾", c: "c̾", d: "d̾", e: "e̾", f: "f̾", g: "g̾", h: "h̾", i: "i̾", j: "j̾",
  k: "k̾", l: "l̾", m: "m̾", n: "n̾", o: "o̾", p: "p̾", q: "q̾", r: "r̾", s: "s̾", t: "t̾",
  u: "u̾", v: "v̾", w: "w̾", x: "x̾", y: "y̾", z: "z̾"
});

// Style 30: Lambda Simple
addStyle('font', 'font_lambda_simple', '', '', {
  A: "Λ", B: "ɮ", C: "Ͷ", D: "ᗫ", E: "Ɛ", F: "Ғ", G: "Ϭ", H: "Ӈ", I: "Ꭵ", J: "Ꮰ",
  K: "Ҡ", L: "ᒪ", M: "ᗰ", N: "ͷ", O: "Ө", P: "Ꭾ", Q: "Ϙ", R: "ᖇ", S: "ᔕ", T: "Ƭ",
  U: "Ա", V: "Ỽ", W: "Ꮃ", X: "Ӿ", Y: "ϓ", Z: "ɀ",
  a: "λ", b: "ɮ", c: "Ͷ", d: "ᗫ", e: "Ɛ", f: "ғ", g: "Ϭ", h: "Ӈ", i: "Ꭵ", j: "Ꮰ",
  k: "ҡ", l: "ᒪ", m: "ᗰ", n: "ͷ", o: "Ө", p: "Ꭾ", q: "Ϙ", r: "ᖇ", s: "ᔕ", t: "Ƭ",
  u: "Ա", v: "Ỽ", w: "Ꮃ", x: "Ӿ", y: "ϓ", z: "ɀ"
});

// Style 31: Canadian Simple
addStyle('font', 'font_canadian_simple', '', '', {
  a: "ᥲ", b: "ᑲ", c: "ᥴ", d: "ᑯ", e: "ᥱ", f: "ᖴ", g: "ᧁ", h: "ᕼ", i: "Ꭵ", j: "ᒎ",
  k: "ᛕ", l: "ᥣ", m: "ᴍ", n: "ᥒ", o: "᥆", p: "ρ", q: "ᑫ", r: "ᖇ", s: "ᔑ", t: "ᥴ",
  u: "ᑌ", v: "ᐯ", w: "᭙", x: "᥊", y: "ᥒ", z: "ɀ",
  A: "ᥲ", B: "ᑲ", C: "ᥴ", D: "ᑯ", E: "ᥱ", F: "ᖴ", G: "ᧁ", H: "ᕼ", I: "Ꭵ", J: "ᒎ",
  K: "ᛕ", L: "ᥣ", M: "ᴍ", N: "ᥒ", O: "᥆", P: "ρ", Q: "ᑫ", R: "ᖇ", S: "ᔑ", T: "ᥴ",
  U: "ᑌ", V: "ᐯ", W: "᭙", X: "᥊", Y: "ᥒ", Z: "ɀ"
});

// Style 32: Inverted Simple
addStyle('font', 'font_inverted_simple', '', '', {
  A: "Ɐ", B: "ᴃ", C: "Ƈ", D: "ᴅ", E: "Ɇ", F: "ᶂ", G: "Ɠ", H: "Ħ", I: "ᶤ", J: "ᴊ",
  K: "ƙ", L: "ᶅ", M: "ᴍ", N: "Ƞ", O: "Ø", P: "ᴘ", Q: "Ɋ", R: "ʀ", S: "Ѕ", T: "Ŧ",
  U: "Ữ", V: "Ṽ", W: "Ẅ", X: "Ẋ", Y: "Ỵ", Z: "Ƶ",
  a: "ⱥ", b: "ᵬ", c: "ȼ", d: "ᶑ", e: "ɇ", f: "ᶂ", g: "ᶃ", h: "ħ", i: "ᶖ", j: "ʝ",
  k: "ƙ", l: "ḽ", m: "ɱ", n: "ᶇ", o: "ø", p: "ᵽ", q: "ɋ", r: "ᶉ", s: "ʂ", t: "ȶ",
  u: "ʋ", v: "ᶌ", w: "ẅ", x: "ẋ", y: "ᶌ", z: "ʑ"
});

// Style 33: Fraktur Simple
addStyle('font', 'font_fraktur_simple', '', '', {
  a: "𝖆", b: "𝖇", c: "𝖈", d: "𝖉", e: "𝖊", f: "𝖋", g: "𝖌", h: "𝖍", i: "𝖎", j: "𝖏",
  k: "𝖐", l: "𝖑", m: "𝖒", n: "𝖓", o: "𝖔", p: "𝖕", q: "𝖖", r: "𝖗", s: "𝖘", t: "𝖙",
  u: "𝖚", v: "𝖛", w: "𝖜", x: "𝖝", y: "𝖞", z: "𝖟",
  A: "𝕬", B: "𝕭", C: "𝕮", D: "𝕯", E: "𝕰", F: "𝕱", G: "𝕲", H: "𝕳", I: "𝕴", J: "𝕵",
  K: "𝕶", L: "𝕷", M: "𝕸", N: "𝕹", O: "𝕺", P: "𝕻", Q: "𝕼", R: "𝕽", S: "𝕾", T: "𝕿",
  U: "𝖀", V: "𝖁", W: "𝖂", X: "𝖃", Y: "𝖄", Z: "𝖅"
});

// Style 34: Math Bold Simple
addStyle('font', 'font_math_bold_simple', '', '', {
  a: "𝛂", b: "𝛃", c: "𝛇", d: "𝛅", e: "𝛆", f: "𝛇", g: "𝛓", h: "𝛑", i: "𝖎", j: "𝖏",
  k: "𝛋", l: "𝛊", m: "𝛍", n: "𝛈", o: "𝛐", p: "𝛒", q: "𝛗", r: "𝛑", s: "𝛔", t: "𝛕",
  u: "𝛖", v: "𝛎", w: "𝛚", x: "𝛘", y: "𝛙", z: "𝛏",
  A: "𝛢", B: "𝛣", C: "𝛤", D: "𝛥", E: "𝛦", F: "𝛧", G: "𝛨", H: "𝛩", I: "𝛪", J: "𝛫",
  K: "𝛬", L: "𝛭", M: "𝛮", N: "𝛯", O: "𝛰", P: "𝛱", Q: "𝛲", R: "𝛴", S: "𝛵", T: "𝛵",
  U: "𝛶", V: "𝛸", W: "𝛹", X: "𝛸", Y: "𝛺", Z: "𝛢"
});

// Style 35: Greek Modern Complete
addStyle('font', 'font_greek_modern_complete', '', '', {
  A: "Δ", B: "β", C: "C", D: "Đ", E: "Σ", F: "Ϝ", G: "Ꮆ", H: "Ħ", I: "I", J: "J",
  K: "К", L: "Ꮭ", M: "M", N: "П", O: "Ø", P: "Ƥ", Q: "Ǫ", R: "Ŗ", S: "Ѕ", T: "Ͳ",
  U: "Ц", V: "Ѵ", W: "Ш", X: "X", Y: "Ψ", Z: "Ẕ",
  a: "δ", b: "β", c: "c", d: "đ", e: "ε", f: "ϝ", g: "g", h: "ħ", i: "ι", j: "j",
  k: "κ", l: "l", m: "m", n: "η", o: "ø", p: "ƥ", q: "ǫ", r: "ŗ", s: "s", t: "t",
  u: "ц", v: "ν", w: "ш", x: "x", y: "ψ", z: "ẑ"
});

// Style 36: Cherokee Style
addStyle('font', 'font_cherokee', '', '', {
  A: "Ꭿ", B: "Ᏸ", C: "Ꮸ", D: "Ꮄ", E: "Ꭼ", F: "Ꮀ", G: "Ꮐ", H: "Ꮋ", I: "Ꭵ", J: "Ꮰ",
  K: "Ꮶ", L: "Ꮭ", M: "Ꮇ", N: "Ꮑ", O: "Ꮎ", P: "Ꮲ", Q: "Ꭴ", R: "Ꮢ", S: "Ꮥ", T: "Ꮦ",
  U: "Ꮼ", V: "Ꮙ", W: "Ꮗ", X: "ጀ", Y: "Ꮍ", Z: "Ꮓ",
  a: "Ꭿ", b: "Ᏸ", c: "Ꮸ", d: "Ꮄ", e: "Ꭼ", f: "Ꮀ", g: "Ꮐ", h: "Ꮋ", i: "Ꭵ", j: "Ꮰ",
  k: "Ꮶ", l: "Ꮭ", m: "Ꮇ", n: "Ꮑ", o: "Ꮎ", p: "Ꮲ", q: "Ꭴ", r: "Ꮢ", s: "Ꮥ", t: "Ꮦ",
  u: "Ꮼ", v: "Ꮙ", w: "Ꮗ", x: "ጀ", y: "Ꮍ", z: "Ꮓ"
});

// Style 37: Greek Small
addStyle('font', 'font_greek_small', '', '', {
  a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
  k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ",
  A: "Α", B: "Β", C: "C", D: "Ɗ", E: "Ε", F: "Ƒ", G: "Ɠ", H: "Н", I: "Ι", J: "Ј",
  K: "Κ", L: "ℓ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ջ", R: "Я", S: "Ѕ", T: "Τ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Ƶ"
});

// Style 38: Circular Accent Star
addStyle('font', 'font_circular_accent_star', '', '', {
  A: "ᴬ͎", B: "ᴮ͎", C: "ᶜ͎", D: "ᴰ͎", E: "ᴱ͎", F: "ᶠ͎", G: "ᴳ͎", H: "ᴴ͎", I: "ᴵ͎", J: "ᴶ͎",
  K: "ᴷ͎", L: "ᴸ͎", M: "ᴹ͎", N: "ᴺ͎", O: "ᴼ͎", P: "ᴾ͎", Q: "ᵠ͎", R: "ᴿ͎", S: "ˢ͎", T: "ᵀ͎",
  U: "ᵁ͎", V: "ⱽ͎", W: "ᵂ͎", X: "ˣ͎", Y: "ʸ͎", Z: "ᶻ͎",
  a: "ᵃ͎", b: "ᵇ͎", c: "ᶜ͎", d: "ᵈ͎", e: "ᵉ͎", f: "ᶠ͎", g: "ᵍ͎", h: "ʰ͎", i: "ⁱ͎", j: "ʲ͎",
  k: "ᵏ͎", l: "ˡ͎", m: "ᵐ͎", n: "ⁿ͎", o: "ᵒ͎", p: "ᵖ͎", q: "ᑫ͎", r: "ʳ͎", s: "ˢ͎", t: "ᵗ͎",
  u: "ᵘ͎", v: "ᵛ͎", w: "ʷ͎", x: "ˣ͎", y: "ʸ͎", z: "ᶻ͎"
});

// Style 39: Dotted Small Caps
addStyle('font', 'font_dotted_small_caps', '', '', {
  A: "ᴀ·", B: "ʙ·", C: "ᴄ·", D: "ᴅ·", E: "ᴇ·", F: "ꜰ·", G: "ɢ·", H: "ʜ·", I: "ɪ·", J: "ᴊ·",
  K: "ᴋ·", L: "ʟ·", M: "ᴍ·", N: "ɴ·", O: "ᴏ·", P: "ᴘ·", Q: "ǫ·", R: "ʀ·", S: "ꜱ·", T: "ᴛ·",
  U: "ᴜ·", V: "ᴠ·", W: "ᴡ·", X: "x·", Y: "ʏ·", Z: "ᴢ·",
  a: "ᴀ·", b: "ʙ·", c: "ᴄ·", d: "ᴅ·", e: "ᴇ·", f: "ꜰ·", g: "ɢ·", h: "ʜ·", i: "ɪ·", j: "ᴊ·",
  k: "ᴋ·", l: "ʟ·", m: "ᴍ·", n: "ɴ·", o: "ᴏ·", p: "ᴘ·", q: "ǫ·", r: "ʀ·", s: "ꜱ·", t: "ᴛ·",
  u: "ᴜ·", v: "ᴠ·", w: "ᴡ·", x: "x·", y: "ʏ·", z: "ᴢ·"
});

// Style 40: Square Accent
addStyle('font', 'font_square_accent', '', '', {
  A: "ᴬ▢", B: "ᴮ▢", C: "ᶜ▢", D: "ᴰ▢", E: "ᴱ▢", F: "ᶠ▢", G: "ᴳ▢", H: "ᴴ▢", I: "ᴵ▢", J: "ᴶ▢",
  K: "ᴷ▢", L: "ᴸ▢", M: "ᴹ▢", N: "ᴺ▢", O: "ᴼ▢", P: "ᴾ▢", Q: "ᵠ▢", R: "ᴿ▢", S: "ˢ▢", T: "ᵀ▢",
  U: "ᵁ▢", V: "ⱽ▢", W: "ᵂ▢", X: "ˣ▢", Y: "ʸ▢", Z: "ᶻ▢",
  a: "ᵃ▢", b: "ᵇ▢", c: "ᶜ▢", d: "ᵈ▢", e: "ᵉ▢", f: "ᶠ▢", g: "ᵍ▢", h: "ʰ▢", i: "ⁱ▢", j: "ʲ▢",
  k: "ᵏ▢", l: "ˡ▢", m: "ᵐ▢", n: "ⁿ▢", o: "ᵒ▢", p: "ᵖ▢", q: "ᵠ▢", r: "ʳ▢", s: "ˢ▢", t: "ᵗ▢",
  u: "ᵘ▢", v: "ᵛ▢", w: "ʷ▢", x: "ˣ▢", y: "ʸ▢", z: "ᶻ▢"
});

// Style 41: Circle Dotted Accent
addStyle('font', 'font_circle_dotted_accent', '', '', {
  A: "ᴬ̸◯·", B: "ᴮ̸◯·", C: "ᶜ̸◯·", D: "ᴰ̸◯·", E: "ᴱ̸◯·", F: "ᶠ̸◯·", G: "ᴳ̸◯·", H: "ᴴ̸◯·", I: "ᴵ̸◯·", J: "ᴶ̸◯·",
  K: "ᴷ̸◯·", L: "ᴸ̸◯·", M: "ᴹ̸◯·", N: "ᴺ̸◯·", O: "ᴼ̸◯·", P: "ᴾ̸◯·", Q: "ᵠ̸◯·", R: "ᴿ̸◯·", S: "ˢ̸◯·", T: "ᵀ̸◯·",
  U: "ᵁ̸◯·", V: "ⱽ̸◯·", W: "ᵂ̸◯·", X: "ˣ̸◯·", Y: "ʸ̸◯·", Z: "ᶻ̸◯·",
  a: "ᵃ̸◯·", b: "ᵇ̸◯·", c: "ᶜ̸◯·", d: "ᵈ̸◯·", e: "ᵉ̸◯·", f: "ᶠ̸◯·", g: "ᵍ̸◯·", h: "ʰ̸◯·", i: "ⁱ̸◯·", j: "ʲ̸◯·",
  k: "ᵏ̸◯·", l: "ˡ̸◯·", m: "ᵐ̸◯·", n: "ⁿ̸◯·", o: "ᵒ̸◯·", p: "ᵖ̸◯·", q: "ᵠ̸◯·", r: "ʳ̸◯·", s: "ˢ̸◯·", t: "ᵗ̸◯·",
  u: "ᵘ̸◯·", v: "ᵛ̸◯·", w: "ʷ̸◯·", x: "ˣ̸◯·", y: "ʸ̸◯·", z: "ᶻ̸◯·"
});

// Style 42: Tilde Strike
addStyle('font', 'font_tilde_strike', '', '', {
  A: "A̸~~", B: "B̸~~", C: "C̸~~", D: "D̸~~", E: "E̸~~", F: "F̸~~", G: "G̸~~", H: "H̸~~", I: "I̸~~", J: "J̸~~",
  K: "K̸~~", L: "L̸~~", M: "M̸~~", N: "N̸~~", O: "O̸~~", P: "P̸~~", Q: "Q̸~~", R: "R̸~~", S: "S̸~~", T: "T̸~~",
  U: "U̸~~", V: "V̸~~", W: "W̸~~", X: "X̸~~", Y: "Y̸~~", Z: "Z̸~~",
  a: "a̸~~", b: "b̸~~", c: "c̸~~", d: "d̸~~", e: "e̸~~", f: "f̸~~", g: "g̸~~", h: "h̸~~", i: "i̸~~", j: "j̸~~",
  k: "k̸~~", l: "l̸~~", m: "m̸~~", n: "n̸~~", o: "o̸~~", p: "p̸~~", q: "q̸~~", r: "r̸~~", s: "s̸~~", t: "t̸~~",
  u: "u̸~~", v: "v̸~~", w: "w̸~~", x: "x̸~~", y: "y̸~~", z: "z̸~~"
});

// Style 43: Triangle Accent
addStyle('font', 'font_triangle_accent', '', '', {
  A: "A̸▵", B: "B̸▵", C: "C̸▵", D: "D̸▵", E: "E̸▵", F: "F̸▵", G: "G̸▵", H: "H̸▵", I: "I̸▵", J: "J̸▵",
  K: "K̸▵", L: "L̸▵", M: "M̸▵", N: "N̸▵", O: "O̸▵", P: "P̸▵", Q: "Q̸▵", R: "R̸▵", S: "S̸▵", T: "T̸▵",
  U: "U̸▵", V: "V̸▵", W: "W̸▵", X: "X̸▵", Y: "Y̸▵", Z: "Z̸▵",
  a: "a̸▵", b: "b̸▵", c: "c̸▵", d: "d̸▵", e: "e̸▵", f: "f̸▵", g: "g̸▵", h: "h̸▵", i: "i̸▵", j: "j̸▵",
  k: "k̸▵", l: "l̸▵", m: "m̸▵", n: "n̸▵", o: "o̸▵", p: "p̸▵", q: "q̸▵", r: "r̸▵", s: "s̸▵", t: "t̸▵",
  u: "u̸▵", v: "v̸▵", w: "w̸▵", x: "x̸▵", y: "y̸▵", z: "z̸▵"
});

// Style 44: Circle Accent 2
addStyle('font', 'font_circle_accent_2', '', '', {
  A: "A̸◉", B: "B̸◉", C: "C̸◉", D: "D̸◉", E: "E̸◉", F: "F̸◉", G: "G̸◉", H: "H̸◉", I: "I̸◉", J: "J̸◉",
  K: "K̸◉", L: "L̸◉", M: "M̸◉", N: "N̸◉", O: "O̸◉", P: "P̸◉", Q: "Q̸◉", R: "R̸◉", S: "S̸◉", T: "T̸◉",
  U: "U̸◉", V: "V̸◉", W: "W̸◉", X: "X̸◉", Y: "Y̸◉", Z: "Z̸◉",
  a: "a̸◉", b: "b̸◉", c: "c̸◉", d: "d̸◉", e: "e̸◉", f: "f̸◉", g: "g̸◉", h: "h̸◉", i: "i̸◉", j: "j̸◉",
  k: "k̸◉", l: "l̸◉", m: "m̸◉", n: "n̸◉", o: "o̸◉", p: "p̸◉", q: "q̸◉", r: "r̸◉", s: "s̸◉", t: "t̸◉",
  u: "u̸◉", v: "v̸◉", w: "w̸◉", x: "x̸◉", y: "y̸◉", z: "z̸◉"
});

// Style 45: Greek Modern 2
addStyle('font', 'font_greek_modern_2', '', '', {
  A: "Λ", B: "Β", C: "Ͻ", D: "Ɗ", E: "Ξ", F: "Ƒ", G: "Ɠ", H: "H", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ø", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "U", V: "V", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "λ", b: "β", c: "Ͻ", d: "ɗ", e: "ξ", f: "ƒ", g: "ɠ", h: "h", i: "ι", j: "ј",
  k: "κ", l: "ℓ", m: "μ", n: "η", o: "ø", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "υ", z: "ƶ"
});

// Style 46: Subscript Accent
addStyle('font', 'font_subscript_accent', '', '', {
  A: "Ḁͦ", B: "B̥ͦ", C: "C̥ͦ", D: "D̥ͦ", E: "E̥ͦ", F: "F̥ͦ", G: "G̥ͦ", H: "H̥ͦ", I: "I̥ͦ", J: "J̥ͦ",
  K: "K̥ͦ", L: "L̥ͦ", M: "M̥ͦ", N: "N̥ͦ", O: "O̥ͦ", P: "P̥ͦ", Q: "Q̥ͦ", R: "R̥ͦ", S: "S̥ͦ", T: "T̥ͦ",
  U: "U̥ͦ", V: "V̥ͦ", W: "W̥ͦ", X: "X̥ͦ", Y: "Y̥ͦ", Z: "Z̥ͦ",
  a: "ḁͦ", b: "b̥ͦ", c: "c̥ͦ", d: "d̥ͦ", e: "e̥ͦ", f: "f̥ͦ", g: "g̥ͦ", h: "h̥ͦ", i: "i̥ͦ", j: "j̥ͦ",
  k: "k̥ͦ", l: "l̥ͦ", m: "m̥ͦ", n: "n̥ͦ", o: "o̥ͦ", p: "p̥ͦ", q: "q̥ͦ", r: "r̥ͦ", s: "s̥ͦ", t: "t̥ͦ",
  u: "u̥ͦ", v: "v̥ͦ", w: "w̥ͦ", x: "x̥ͦ", y: "y̥ͦ", z: "z̥ͦ"
});

// Style 47: Comb Accent
addStyle('font', 'font_comb_accent', '', '', {
  A: "A̵̔", B: "B̵̔", C: "C̵̔", D: "D̵̔", E: "E̵̔", F: "F̵̔", G: "G̵̔", H: "H̵̔", I: "I̵̔", J: "J̵̔",
  K: "K̵̔", L: "L̵̔", M: "M̵̔", N: "N̵̔", O: "O̵̔", P: "P̵̔", Q: "Q̵̔", R: "R̵̔", S: "S̵̔", T: "T̵̔",
  U: "U̵̔", V: "V̵̔", W: "W̵̔", X: "X̵̔", Y: "Y̵̔", Z: "Z̵̔",
  a: "a̵̔", b: "b̵̔", c: "c̵̔", d: "d̵̔", e: "e̵̔", f: "f̵̔", g: "g̵̔", h: "h̵̔", i: "i̵̔", j: "j̵̔",
  k: "k̵̔", l: "l̵̔", m: "m̵̔", n: "n̵̔", o: "o̵̔", p: "p̵̔", q: "q̵̔", r: "r̵̔", s: "s̵̔", t: "t̵̔",
  u: "u̵̔", v: "v̵̔", w: "w̵̔", x: "x̵̔", y: "y̵̔", z: "z̵̔"
});

// Style 48: Small Tsu Accent
addStyle('font', 'font_small_tsu', '', '', {
  A: "Aッ", B: "Bッ", C: "Cッ", D: "Dッ", E: "Eッ", F: "Fッ", G: "Gッ", H: "Hッ", I: "Iッ", J: "Jッ",
  K: "Kッ", L: "Lッ", M: "Mッ", N: "Nッ", O: "Oッ", P: "Pッ", Q: "Qッ", R: "Rッ", S: "Sッ", T: "Tッ",
  U: "Uッ", V: "Vッ", W: "Wッ", X: "Xッ", Y: "Yッ", Z: "Zッ",
  a: "aッ", b: "bッ", c: "cッ", d: "dッ", e: "eッ", f: "fッ", g: "gッ", h: "hッ", i: "iッ", j: "jッ",
  k: "kッ", l: "lッ", m: "mッ", n: "nッ", o: "oッ", p: "pッ", q: "qッ", r: "rッ", s: "sッ", t: "tッ",
  u: "uッ", v: "vッ", w: "wッ", x: "xッ", y: "yッ", z: "zッ"
});

// Style 49: Armenian Accent
addStyle('font', 'font_armenian_accent', '', '', {
  A: "A֟", B: "B֟", C: "C֟", D: "D֟", E: "E֟", F: "F֟", G: "G֟", H: "H֟", I: "I֟", J: "J֟",
  K: "K֟", L: "L֟", M: "M֟", N: "N֟", O: "O֟", P: "P֟", Q: "Q֟", R: "R֟", S: "S֟", T: "T֟",
  U: "U֟", V: "V֟", W: "W֟", X: "X֟", Y: "Y֟", Z: "Z֟",
  a: "a֟", b: "b֟", c: "c֟", d: "d֟", e: "e֟", f: "f֟", g: "g֟", h: "h֟", i: "i֟", j: "j֟",
  k: "k֟", l: "l֟", m: "m֟", n: "n֟", o: "o֟", p: "p֟", q: "q֟", r: "r֟", s: "s֟", t: "t֟",
  u: "u֟", v: "v֟", w: "w֟", x: "x֟", y: "y֟", z: "z֟"
});

// Style 50: Cyrillic Accent
addStyle('font', 'font_cyrillic_accent', '', '', {
  A: "A҉", B: "B҉", C: "C҉", D: "D҉", E: "E҉", F: "F҉", G: "G҉", H: "H҉", I: "I҉", J: "J҉",
  K: "K҉", L: "L҉", M: "M҉", N: "N҉", O: "O҉", P: "P҉", Q: "Q҉", R: "R҉", S: "S҉", T: "T҉",
  U: "U҉", V: "V҉", W: "W҉", X: "X҉", Y: "Y҉", Z: "Z҉",
  a: "a҉", b: "b҉", c: "c҉", d: "d҉", e: "e҉", f: "f҉", g: "g҉", h: "h҉", i: "i҉", j: "j҉",
  k: "k҉", l: "l҉", m: "m҉", n: "n҉", o: "o҉", p: "p҉", q: "q҉", r: "r҉", s: "s҉", t: "t҉",
  u: "u҉", v: "v҉", w: "w҉", x: "x҉", y: "y҉", z: "z҉"
});

// Style 51: Gothic Script
addStyle('font', 'font_gothic_script', '', '', {
  A: "𐌰", B: "𐌱", C: "𐌲", D: "𐌳", E: "𐌴", F: "𐍆", G: "𐌾", H: "𐌷", I: "𐌹", J: "𐌻",
  K: "𐌺", L: "𐍊", M: "𐌼", N: "𐌽", O: "𐍈", P: "𐍉", Q: "𐍁", R: "𐍂", S: "𐍃", T: "𐍄",
  U: "𐍀", V: "𝚅", W: "𐌸", X: "𐍇", Y: "𐍅", Z: "𐌶",
  a: "𐌰", b: "𐌱", c: "𐌲", d: "𐌳", e: "𐌴", f: "𐍆", g: "𐌾", h: "𐌷", i: "𐌹", j: "𐌻",
  k: "𐌺", l: "𐍊", m: "𐌼", n: "𐌽", o: "𐍈", p: "𐍉", q: "𐍁", r: "𐍂", s: "𐍃", t: "𐍄",
  u: "𐍀", v: "𝚅", w: "𐌸", x: "𐍇", y: "𐍅", z: "𐌶"
});

// Style 52: Armenian Greek Accent
addStyle('font', 'font_armenian_greek', '', '', {
  a: "α", b: "в", c: "ċ", d: "ɗ", e: "є", f: "ƒ", g: "ĝ", h: "ħ", i: "ï", j: "ʝ",
  k: "ƙ", l: "ĺ", m: "ɱ", n: "ռ", o: "ο", p: "ք", q: "զ", r: "ř", s: "ֆ", t: "թ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ",
  A: "Α", B: "Β", C: "Ċ", D: "Ɗ", E: "Є", F: "Ƒ", G: "Ĝ", H: "Ħ", I: "Ï", J: "ʝ",
  K: "Ƙ", L: "Ĺ", M: "Μ", N: "Ռ", O: "Ο", P: "Ք", Q: "Ջ", R: "Ř", S: "Ֆ", T: "Թ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Զ"
});

// Style 53: Thai Style
addStyle('font', 'font_thai', '', '', {
  a: "ค", b: "๒", c: "ς", d: "ɗ", e: "є", f: "ſ", g: "ɠ", h: "ħ", i: "เ", j: "ʝ",
  k: "ƙ", l: "ɭ", m: "๓", n: "ภ", o: "σ", p: "ρ", q: "๑", r: "я", s: "ร", t: "Շ",
  u: "υ", v: "ש", w: "ω", x: "ẋ", y: "γ", z: "ƶ",
  A: "ค", B: "๒", C: "ς", D: "ɗ", E: "є", F: "ſ", G: "ɠ", H: "ħ", I: "เ", J: "ʝ",
  K: "ƙ", L: "ɭ", M: "๓", N: "ภ", O: "σ", P: "ρ", Q: "๑", R: "я", S: "ร", T: "Շ",
  U: "υ", V: "ש", W: "ω", X: "ẋ", Y: "γ", Z: "ƶ"
});

// Style 54: Small Caps Tilde
addStyle('font', 'font_small_caps_tilde', '', '', {
  A: "ᴬ̸", B: "ᴮ̸", C: "ᶜ̸", D: "ᴰ̸", E: "ᴱ̸", F: "ᶠ̸", G: "ᴳ̸", H: "ᴴ̸", I: "ᴵ̸", J: "ᴶ̸",
  K: "ᴷ̸", L: "ᴸ̸", M: "ᴹ̸", N: "ᴺ̸", O: "ᴼ̸", P: "ᴾ̸", Q: "ᵠ̸", R: "ᴿ̸", S: "ˢ̸", T: "ᵀ̸",
  U: "ᵁ̸", V: "ⱽ̸", W: "ᵂ̸", X: "ˣ̸", Y: "ʸ̸", Z: "ᶻ̸",
  a: "ᵃ̸", b: "ᵇ̸", c: "ᶜ̸", d: "ᵈ̸", e: "ᵉ̸", f: "ᶠ̸", g: "ᵍ̸", h: "ʰ̸", i: "ⁱ̸", j: "ʲ̸",
  k: "ᵏ̸", l: "ˡ̸", m: "ᵐ̸", n: "ⁿ̸", o: "ᵒ̸", p: "ᵖ̸", q: "ᵠ̸", r: "ʳ̸", s: "ˢ̸", t: "ᵗ̸",
  u: "ᵘ̸", v: "ᵛ̸", w: "ʷ̸", x: "ˣ̸", y: "ʸ̸", z: "ᶻ̸"
});

// Style 55: Space Accent Greek
addStyle('font', 'font_space_accent_greek', '', '', {
  a: "̤̮α", b: "̤̮в", c: "̤̮c", d: "̤̮ɗ", e: "̤̮ε", f: "̤̮ƒ", g: "̤̮ɠ", h: "̤̮н", i: "̤̮ɪ", j: "̤̮נ",
  k: "̤̮κ", l: "̤̮ℓ", m: "̤̮м", n: "̤̮η", o: "̤̮σ", p: "̤̮ρ", q: "̤̮զ", r: "̤̮я", s: "̤̮ѕ", t: "̤̮τ",
  u: "̤̮υ", v: "̤̮ν", w: "̤̮ω", x: "̤̮χ", y: "̤̮γ", z: "̤̮ƶ",
  A: "Α", B: "Β", C: "C", D: "Ɗ", E: "Ε", F: "Ƒ", G: "Ɠ", H: "Н", I: "Ι", J: "Ј",
  K: "Κ", L: "ℓ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ջ", R: "Я", S: "Ѕ", T: "Τ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Ƶ"
});

// Style 56: Parenthesized
addStyle('font', 'font_parenthesized', '', '', {
  A: "🄐", B: "🄑", C: "🄒", D: "🄓", E: "🄔", F: "🄕", G: "🄖", H: "🄗", I: "🄘", J: "🄙",
  K: "🄚", L: "🄛", M: "🄜", N: "🄝", O: "🄞", P: "🄟", Q: "🄠", R: "🄡", S: "🄢", T: "🄣",
  U: "🄤", V: "🄥", W: "🄦", X: "🄧", Y: "🄨", Z: "🄩",
  a: "🄐", b: "🄑", c: "🄒", d: "🄓", e: "🄔", f: "🄕", g: "🄖", h: "🄗", i: "🄘", j: "🄙",
  k: "🄚", l: "🄛", m: "🄜", n: "🄝", o: "🄞", p: "🄟", q: "🄠", r: "🄡", s: "🄢", t: "🄣",
  u: "🄤", v: "🄥", w: "🄦", x: "🄧", y: "🄨", z: "🄩"
});

// Style 57: Canadian Lambda
addStyle('font', 'font_canadian_lambda', '', '', {
  A: "Λ", B: "B", C: "ᑕ", D: "ᗪ", E: "Σ", F: "F", G: "G", H: "ᕼ", I: "I", J: "ᒍ",
  K: "K", L: "ᒪ", M: "ᗰ", N: "ᑎ", O: "Θ", P: "P", Q: "Q", R: "R", S: "ᔕ", T: "T",
  U: "ᑌ", V: "V", W: "ᗯ", X: "X", Y: "Y", Z: "Z",
  a: "λ", b: "b", c: "ᑕ", d: "ᗪ", e: "ε", f: "f", g: "g", h: "ᕼ", i: "i", j: "ᒍ",
  k: "k", l: "ᒪ", m: "ᗰ", n: "ᑎ", o: "θ", p: "p", q: "q", r: "r", s: "ᔕ", t: "t",
  u: "ᑌ", v: "v", w: "ᗯ", x: "x", y: "y", z: "z"
});

// Style 58: Small Caps Underscore
addStyle('font', 'font_small_caps_underscore', '', '', {
  A: "ᴀ͓̽", B: "ʙ͓̽", C: "ᴄ͓̽", D: "ᴅ͓̽", E: "ᴇ͓̽", F: "ғ͓̽", G: "ɢ͓̽", H: "ʜ͓̽", I: "ɪ͓̽", J: "ᴊ͓̽",
  K: "ᴋ͓̽", L: "ʟ͓̽", M: "ᴍ͓̽", N: "ɴ͓̽", O: "ᴏ͓̽", P: "ᴘ͓̽", Q: "ᴏ͓̽", R: "ʀ͓̽", S: "s͓̽", T: "ᴛ͓̽",
  U: "ᴜ͓̽", V: "ᴠ͓̽", W: "ᴡ͓̽", X: "x͓̽", Y: "ʏ͓̽", Z: "ᴢ͓̽",
  a: "ᴀ͓̽", b: "ʙ͓̽", c: "ᴄ͓̽", d: "ᴅ͓̽", e: "ᴇ͓̽", f: "ғ͓̽", g: "ɢ͓̽", h: "ʜ͓̽", i: "ɪ͓̽", j: "ᴊ͓̽",
  k: "ᴋ͓̽", l: "ʟ͓̽", m: "ᴍ͓̽", n: "ɴ͓̽", o: "ᴏ͓̽", p: "ᴘ͓̽", q: "ᴏ͓̽", r: "ʀ͓̽", s: "s͓̽", t: "ᴛ͓̽",
  u: "ᴜ͓̽", v: "ᴠ͓̽", w: "ᴡ͓̽", x: "x͓̽", y: "ʏ͓̽", z: "ᴢ͓̽"
});

// Style 59: Stylized Greek
addStyle('font', 'font_stylized_greek', '', '', {
  A: "Δ", B: "β", C: "Ͼ", D: "Ð", E: "ξ", F: "Ғ", G: "Ǥ", H: "Ӈ", I: "Ϊ", J: "Ј",
  K: "Ӄ", L: "Ł", M: "Ϻ", N: "Ɲ", O: "Θ", P: "Ƥ", Q: "φ", R: "Я", S: "Ș", T: "Ŧ",
  U: "Ϋ", V: "Ѵ", W: "Ш", X: "Ӿ", Y: "¥", Z: "Ƶ",
  a: "δ", b: "β", c: "Ͼ", d: "ð", e: "ξ", f: "ғ", g: "ǥ", h: "Ӈ", i: "ϊ", j: "ј",
  k: "Ӄ", l: "ł", m: "ϻ", n: "ɲ", o: "θ", p: "ƥ", q: "φ", r: "я", s: "ș", t: "ŧ",
  u: "υ", v: "ѵ", w: "ш", x: "ӽ", y: "¥", z: "ƶ"
});

// Style 60: Unique Symbols
addStyle('font', 'font_unique_symbols', '', '', {
  A: "ᥗ", B: "ᗵ", C: "ᥴ", D: "⚚", E: "ᦵ", F: "Ғ", G: "ᦔ", H: "ᚼ", I: "ᥣ", J: "ᨵ",
  K: "ᛕ", L: "ᒪ", M: "ף", N: "᥊", O: "ᦞ", P: "ᑄ", Q: "ᖘ", R: "ᚱ", S: "ᦙ", T: "Ꮖ",
  U: "ᥙ", V: "ᦓ", W: "᭙", X: "᥊", Y: "ᥬ", Z: "᧒",
  a: "ᥗ", b: "ᗵ", c: "ᥴ", d: "⚚", e: "ᦵ", f: "ғ", g: "ᦔ", h: "ᚼ", i: "ᥣ", j: "ᨵ",
  k: "ᛕ", l: "ᒪ", m: "ף", n: "᥊", o: "ᦞ", p: "ᑄ", q: "ᖘ", r: "ᚱ", s: "ᦙ", t: "Ꮖ",
  u: "ᥙ", v: "ᦓ", w: "᭙", x: "᥊", y: "ᥬ", z: "᧒"
});

// Style 61: Double Accent
addStyle('font', 'font_double_accent', '', '', {
  A: "A͜͡", B: "B͜͡", C: "C͜͡", D: "D͜͡", E: "E͜͡", F: "F͜͡", G: "G͜͡", H: "H͜͡", I: "I͜͡", J: "J͜͡",
  K: "K͜͡", L: "L͜͡", M: "M͜͡", N: "N͜͡", O: "O͜͡", P: "P͜͡", Q: "Q͜͡", R: "R͜͡", S: "S͜͡", T: "T͜͡",
  U: "U͜͡", V: "V͜͡", W: "W͜͡", X: "X͜͡", Y: "Y͜͡", Z: "Z͜͡",
  a: "a͜͡", b: "b͜͡", c: "c͜͡", d: "d͜͡", e: "e͜͡", f: "f͜͡", g: "g͜͡", h: "h͜͡", i: "i͜͡", j: "j͜͡",
  k: "k͜͡", l: "l͜͡", m: "m͜͡", n: "n͜͡", o: "o͜͡", p: "p͜͡", q: "q͜͡", r: "r͜͡", s: "s͜͡", t: "t͜͡",
  u: "u͜͡", v: "v͜͡", w: "w͜͡", x: "x͜͡", y: "y͜͡", z: "z͜͡"
});

// Style 62: Circle Ring Accent
addStyle('font', 'font_circle_ring_accent', '', '', {
  A: "Å͆", B: "B̊͆", C: "C̊͆", D: "D̊͆", E: "E̊͆", F: "F̊͆", G: "G̊͆", H: "H̊͆", I: "I̊͆", J: "J̊͆",
  K: "K̊͆", L: "L̊͆", M: "M̊͆", N: "N̊͆", O: "O̊͆", P: "P̊͆", Q: "Q̊͆", R: "R̊͆", S: "S̊͆", T: "T̊͆",
  U: "Ů͆", V: "V̊͆", W: "W̊͆", X: "X̊͆", Y: "Y̊͆", Z: "Z̊͆",
  a: "å͆", b: "b̊͆", c: "c̊͆", d: "d̊͆", e: "e̊͆", f: "f̊͆", g: "g̊͆", h: "h̊͆", i: "i̊͆", j: "j̊͆",
  k: "k̊͆", l: "l̊͆", m: "m̊͆", n: "n̊͆", o: "o̊͆", p: "p̊͆", q: "q̊͆", r: "r̊͆", s: "s̊͆", t: "t̊͆",
  u: "ů͆", v: "v̊͆", w: "ẘ͆", x: "x̊͆", y: "ẙ͆", z: "z̊͆"
});

// Style 63: Sans Serif
addStyle('font', 'font_sans_serif_2', '', '', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 64: Teardrop Brackets
addStyle('font', 'font_teardrop_brackets', '', '', {
  A: "⌁A⌁", B: "⌁B⌁", C: "⌁C⌁", D: "⌁D⌁", E: "⌁E⌁", F: "⌁F⌁", G: "⌁G⌁", H: "⌁H⌁", I: "⌁I⌁", J: "⌁J⌁",
  K: "⌁K⌁", L: "⌁L⌁", M: "⌁M⌁", N: "⌁N⌁", O: "⌁O⌁", P: "⌁P⌁", Q: "⌁Q⌁", R: "⌁R⌁", S: "⌁S⌁", T: "⌁T⌁",
  U: "⌁U⌁", V: "⌁V⌁", W: "⌁W⌁", X: "⌁X⌁", Y: "⌁Y⌁", Z: "⌁Z⌁",
  a: "⌁a⌁", b: "⌁b⌁", c: "⌁c⌁", d: "⌁d⌁", e: "⌁e⌁", f: "⌁f⌁", g: "⌁g⌁", h: "⌁h⌁", i: "⌁i⌁", j: "⌁j⌁",
  k: "⌁k⌁", l: "⌁l⌁", m: "⌁m⌁", n: "⌁n⌁", o: "⌁o⌁", p: "⌁p⌁", q: "⌁q⌁", r: "⌁r⌁", s: "⌁s⌁", t: "⌁t⌁",
  u: "⌁u⌁", v: "⌁v⌁", w: "⌁w⌁", x: "⌁x⌁", y: "⌁y⌁", z: "⌁z⌁"
});

// Style 65: Yi Script
addStyle('font', 'font_yi_script', '', '', {
  A: "ꋬ", B: "ꃃ", C: "ꉔ", D: "ꁕ", E: "꒻", F: "ꊰ", G: "ꁅ", H: "ꀍ", I: "ꀤ", J: "꒻",
  K: "ꀘ", L: "꒒", M: "ꂵ", N: "ꈤ", O: "ꃲ", P: "ꉣ", Q: "ꉔ", R: "ꋪ", S: "ꌗ", T: "꓄",
  U: "ꀎ", V: "꒦", W: "ꅐ", X: "ꉧ", Y: "ꐞ", Z: "ꁴ",
  a: "ꋬ", b: "ꃃ", c: "ꉔ", d: "ꁕ", e: "꒻", f: "ꊰ", g: "ꁅ", h: "ꀍ", i: "ꀤ", j: "꒻",
  k: "ꀘ", l: "꒒", m: "ꂵ", n: "ꈤ", o: "ꃲ", p: "ꉣ", q: "ꉔ", r: "ꋪ", s: "ꌗ", t: "꓄",
  u: "ꀎ", v: "꒦", w: "ꅐ", x: "ꉧ", y: "ꐞ", z: "ꁴ"
});

// Style 66: Fraktur Capital
addStyle('font', 'font_fraktur_capital', '', '', {
  A: "𝔄", B: "𝔅", C: "ℭ", D: "𝔇", E: "𝔈", F: "𝔉", G: "𝔊", H: "ℌ", I: "ℑ", J: "𝔍",
  K: "𝔎", L: "𝔏", M: "𝔐", N: "𝔑", O: "𝔒", P: "𝔓", Q: "ℚ", R: "ℜ", S: "𝔖", T: "𝔗",
  U: "𝔘", V: "𝔙", W: "𝔚", X: "𝔛", Y: "𝔜", Z: "ℨ",
  a: "𝔞", b: "𝔟", c: "𝔠", d: "𝔡", e: "𝔢", f: "𝔣", g: "𝔤", h: "𝔥", i: "𝔦", j: "𝔧",
  k: "𝔨", l: "𝔩", m: "𝔪", n: "𝔫", o: "𝔬", p: "𝔭", q: "𝔮", r: "𝔯", s: "𝔰", t: "𝔱",
  u: "𝔲", v: "𝔳", w: "𝔴", x: "𝔵", y: "𝔶", z: "𝔷"
});

// Style 67: CJK Style
addStyle('font', 'font_cjk_style', '', '', {
  A: "卂", B: "乃", C: "匚", D: "刀", E: "乇", F: "千", G: "Ꮆ", H: "卄", I: "丨", J: "ﾌ",
  K: "Ҝ", L: "ㄥ", M: "爪", N: "几", O: "ㄖ", P: "卩", Q: "Ҩ", R: "尺", S: "丂", T: "ㄒ",
  U: "ㄩ", V: "ᐯ", W: "山", X: "乂", Y: "ㄚ", Z: "乙",
  a: "卂", b: "乃", c: "匚", d: "刀", e: "乇", f: "千", g: "Ꮆ", h: "卄", i: "丨", j: "ﾌ",
  k: "Ҝ", l: "ㄥ", m: "爪", n: "几", o: "ㄖ", p: "卩", q: "Ҩ", r: "尺", s: "丂", t: "ㄒ",
  u: "ㄩ", v: "ᐯ", w: "山", x: "乂", y: "ㄚ", z: "乙"
});

// Style 68: Arrow Bracket
addStyle('font', 'font_arrow_bracket', '⌦', '', {
  A: "⌦A⌫", B: "⌦B⌫", C: "⌦C⌫", D: "⌦D⌫", E: "⌦E⌫", F: "⌦F⌫", G: "⌦G⌫", H: "⌦H⌫", I: "⌦I⌫", J: "⌦J⌫",
  K: "⌦K⌫", L: "⌦L⌫", M: "⌦M⌫", N: "⌦N⌫", O: "⌦O⌫", P: "⌦P⌫", Q: "⌦Q⌫", R: "⌦R⌫", S: "⌦S⌫", T: "⌦T⌫",
  U: "⌦U⌫", V: "⌦V⌫", W: "⌦W⌫", X: "⌦X⌫", Y: "⌦Y⌫", Z: "⌦Z⌫",
  a: "⌦a⌫", b: "⌦b⌫", c: "⌦c⌫", d: "⌦d⌫", e: "⌦e⌫", f: "⌦f⌫", g: "⌦g⌫", h: "⌦h⌫", i: "⌦i⌫", j: "⌦j⌫",
  k: "⌦k⌫", l: "⌦l⌫", m: "⌦m⌫", n: "⌦n⌫", o: "⌦o⌫", p: "⌦p⌫", q: "⌦q⌫", r: "⌦r⌫", s: "⌦s⌫", t: "⌦t⌫",
  u: "⌦u⌫", v: "⌦v⌫", w: "⌦w⌫", x: "⌦x⌫", y: "⌦y⌫", z: "⌦z⌫"
});

// Style 69: Star Decorated Simple
addStyle('font', 'font_star_decorated_simple', '', '', {
  A: "☆A☆", B: "☆B☆", C: "☆C☆", D: "☆D☆", E: "☆E☆", F: "☆F☆", G: "☆G☆", H: "☆H☆", I: "☆I☆", J: "☆J☆",
  K: "☆K☆", L: "☆L☆", M: "☆M☆", N: "☆N☆", O: "☆O☆", P: "☆P☆", Q: "☆Q☆", R: "☆R☆", S: "☆S☆", T: "☆T☆",
  U: "☆U☆", V: "☆V☆", W: "☆W☆", X: "☆X☆", Y: "☆Y☆", Z: "☆Z☆",
  a: "☆a☆", b: "☆b☆", c: "☆c☆", d: "☆d☆", e: "☆e☆", f: "☆f☆", g: "☆g☆", h: "☆h☆", i: "☆i☆", j: "☆j☆",
  k: "☆k☆", l: "☆l☆", m: "☆m☆", n: "☆n☆", o: "☆o☆", p: "☆p☆", q: "☆q☆", r: "☆r☆", s: "☆s☆", t: "☆t☆",
  u: "☆u☆", v: "☆v☆", w: "☆w☆", x: "☆x☆", y: "☆y☆", z: "☆z☆"
});

// Style 70: Star Accent Simple
addStyle('font', 'font_star_accent_simple', '', '*', {
  A: "A*", B: "B*", C: "C*", D: "D*", E: "E*", F: "F*", G: "G*", H: "H*", I: "I*", J: "J*",
  K: "K*", L: "L*", M: "M*", N: "N*", O: "O*", P: "P*", Q: "Q*", R: "R*", S: "S*", T: "T*",
  U: "U*", V: "V*", W: "W*", X: "X*", Y: "Y*", Z: "Z*",
  a: "a*", b: "b*", c: "c*", d: "d*", e: "e*", f: "f*", g: "g*", h: "h*", i: "i*", j: "j*",
  k: "k*", l: "l*", m: "m*", n: "n*", o: "o*", p: "p*", q: "q*", r: "r*", s: "s*", t: "t*",
  u: "u*", v: "v*", w: "w*", x: "x*", y: "y*", z: "z*"
});

// Style 71: Flag Style
addStyle('font', 'font_flag_style', '', '', {
  A: "🇦", B: "🇧", C: "🇨", D: "🇩", E: "🇪", F: "🇫", G: "🇬", H: "🇭", I: "🇮", J: "🇯",
  K: "🇰", L: "🇱", M: "🇲", N: "🇳", O: "🇴", P: "🇵", Q: "🇶", R: "🇷", S: "🇸", T: "🇹",
  U: "🇺", V: "🇻", W: "🇼", X: "🇽", Y: "🇾", Z: "🇿",
  a: "🇦", b: "🇧", c: "🇨", d: "🇩", e: "🇪", f: "🇫", g: "🇬", h: "🇭", i: "🇮", j: "🇯",
  k: "🇰", l: "🇱", m: "🇲", n: "🇳", o: "🇴", p: "🇵", q: "🇶", r: "🇷", s: "🇸", t: "🇹",
  u: "🇺", v: "🇻", w: "🇼", x: "🇽", y: "🇾", z: "🇿"
});

// Style 72: Short Stroke Simple
addStyle('font', 'font_short_stroke_simple', '', '', {
  A: "A̶", B: "B̶", C: "C̶", D: "D̶", E: "E̶", F: "F̶", G: "G̶", H: "H̶", I: "I̶", J: "J̶",
  K: "K̶", L: "L̶", M: "M̶", N: "N̶", O: "O̶", P: "P̶", Q: "Q̶", R: "R̶", S: "S̶", T: "T̶",
  U: "U̶", V: "V̶", W: "W̶", X: "X̶", Y: "Y̶", Z: "Z̶",
  a: "a̶", b: "b̶", c: "c̶", d: "d̶", e: "e̶", f: "f̶", g: "g̶", h: "h̶", i: "i̶", j: "j̶",
  k: "k̶", l: "l̶", m: "m̶", n: "n̶", o: "o̶", p: "p̶", q: "q̶", r: "r̶", s: "s̶", t: "t̶",
  u: "u̶", v: "v̶", w: "w̶", x: "x̶", y: "y̶", z: "z̶"
});

// Style 73: Full Width
addStyle('font', 'font_full_width', '', '', {
  A: "Ａ", B: "Ｂ", C: "Ｃ", D: "Ｄ", E: "Ｅ", F: "Ｆ", G: "Ｇ", H: "Ｈ", I: "Ｉ", J: "Ｊ",
  K: "Ｋ", L: "Ｌ", M: "Ｍ", N: "Ｎ", O: "Ｏ", P: "Ｐ", Q: "Ｑ", R: "Ｒ", S: "Ｓ", T: "Ｔ",
  U: "Ｕ", V: "Ｖ", W: "Ｗ", X: "Ｘ", Y: "Ｙ", Z: "Ｚ",
  a: "ａ", b: "ｂ", c: "ｃ", d: "ｄ", e: "ｅ", f: "ｆ", g: "ｇ", h: "ｈ", i: "ｉ", j: "ｊ",
  k: "ｋ", l: "ｌ", m: "ｍ", n: "ｎ", o: "ｏ", p: "ｐ", q: "ｑ", r: "ｒ", s: "ｓ", t: "ｔ",
  u: "ｕ", v: "ｖ", w: "ｗ", x: "ｘ", y: "ｙ", z: "ｚ"
});

// Style 74: Bracket Style Simple
addStyle('font', 'font_bracket_style_simple', '', '', {
  A: "【A】", B: "【B】", C: "【C】", D: "【D】", E: "【E】", F: "【F】", G: "【G】", H: "【H】", I: "【I】", J: "【J】",
  K: "【K】", L: "【L】", M: "【M】", N: "【N】", O: "【O】", P: "【P】", Q: "【Q】", R: "【R】", S: "【S】", T: "【T】",
  U: "【U】", V: "【V】", W: "【W】", X: "【X】", Y: "【Y】", Z: "【Z】",
  a: "【a】", b: "【b】", c: "【c】", d: "【d】", e: "【e】", f: "【f】", g: "【g】", h: "【h】", i: "【i】", j: "【j】",
  k: "【k】", l: "【l】", m: "【m】", n: "【n】", o: "【o】", p: "【p】", q: "【q】", r: "【r】", s: "【s】", t: "【t】",
  u: "【u】", v: "【v】", w: "【w】", x: "【x】", y: "【y】", z: "【z】"
});

// Style 75: Sans Serif Simple
addStyle('font', 'font_sans_serif_simple', '', '', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 76: Upside Down
addStyle('font', 'font_upside_down', '', '', {
  A: "∀", B: "𐐒", C: "Ɔ", D: "◖", E: "Ǝ", F: "Ⅎ", G: "⅁", H: "H", I: "I", J: "ſ",
  K: "ꓘ", L: "˥", M: "W", N: "N", O: "O", P: "Ԁ", Q: "Ò", R: "ᴚ", S: "S", T: "⊥",
  U: "∩", V: "Λ", W: "M", X: "X", Y: "⅄", Z: "Z",
  a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ", f: "ɟ", g: "ƃ", h: "ɥ", i: "ᴉ", j: "ɾ",
  k: "ʞ", l: "ꞁ", m: "ɯ", n: "u", o: "o", p: "d", q: "b", r: "ɹ", s: "s", t: "ʇ",
  u: "n", v: "ʌ", w: "ʍ", x: "x", y: "ʎ", z: "z"
});

// Style 77: Double Dot Accent
addStyle('font', 'font_double_dot_accent', '', '', {
  A: "Ä̤", B: "B̤̈", C: "C̤̈", D: "D̤̈", E: "Ë̤", F: "F̤̈", G: "G̤̈", H: "Ḧ̤", I: "Ï̤", J: "J̤̈",
  K: "K̤̈", L: "L̤̈", M: "M̤̈", N: "N̤̈", O: "Ö̤", P: "P̤̈", Q: "Q̤̈", R: "R̤̈", S: "S̤̈", T: "T̤̈",
  U: "Ṳ̈", V: "V̤̈", W: "Ẅ̤", X: "Ẍ̤", Y: "Ÿ̤", Z: "Z̤̈",
  a: "ä̤", b: "b̤̈", c: "c̤̈", d: "d̤̈", e: "ë̤", f: "f̤̈", g: "g̤̈", h: "ḧ̤", i: "ï̤", j: "j̤̈",
  k: "k̤̈", l: "l̤̈", m: "m̤̈", n: "n̤̈", o: "ö̤", p: "p̤̈", q: "q̤̈", r: "r̤̈", s: "s̤̈", t: "ẗ̤",
  u: "ṳ̈", v: "v̤̈", w: "ẅ̤", x: "ẍ̤", y: "ÿ̤", z: "z̤̈"
});

// Style 78: Thai Style
addStyle('font', 'font_thai_style', '', '', {
  a: "ค", b: "乃", c: "ς", d: "๔", e: "є", f: "Ŧ", g: "ﻮ", h: "ђ", i: "เ", j: "ן",
  k: "к", l: "ɭ", m: "๓", n: "ภ", o: "๏", p: "ק", q: "๑", r: "г", s: "ร", t: "Շ",
  u: "ย", v: "ש", w: "ฬ", x: "א", y: "y", z: "z",
  A: "ค", B: "乃", C: "ς", D: "๔", E: "є", F: "Ŧ", G: "ﻮ", H: "ђ", I: "เ", J: "ן",
  K: "к", L: "ɭ", M: "๓", N: "ภ", O: "๏", P: "ק", Q: "๑", R: "г", S: "ร", T: "Շ",
  U: "ย", V: "ש", W: "ฬ", X: "א", Y: "y", Z: "z"
});

// Style 79: Underline Style
addStyle('font', 'font_underline_style', '', '', {
  A: "A̲", B: "B̲", C: "C̲", D: "D̲", E: "E̲", F: "F̲", G: "G̲", H: "H̲", I: "I̲", J: "J̲",
  K: "K̲", L: "L̲", M: "M̲", N: "N̲", O: "O̲", P: "P̲", Q: "Q̲", R: "R̲", S: "S̲", T: "T̲",
  U: "U̲", V: "V̲", W: "W̲", X: "X̲", Y: "Y̲", Z: "Z̲",
  a: "a̲", b: "b̲", c: "c̲", d: "d̲", e: "e̲", f: "f̲", g: "g̲", h: "h̲", i: "i̲", j: "j̲",
  k: "k̲", l: "l̲", m: "m̲", n: "n̲", o: "o̲", p: "p̲", q: "q̲", r: "r̲", s: "s̲", t: "t̲",
  u: "u̲", v: "v̲", w: "w̲", x: "x̲", y: "y̲", z: "z̲"
});

// Style 80: Cyrillic Greek
addStyle('font', 'font_cyrillic_greek', '', '', {
  A: "Λ", B: "Ϧ", C: "Ͼ", D: "Ḏ", E: "Σ", F: "Ғ", G: "Ɠ", H: "Ή", I: "Ϊ", J: "Ј",
  K: "Κ", L: "Ł", M: "Μ", N: "И", O: "Θ", P: "Ρ", Q: "Ћ", R: "Я", S: "Ƨ", T: "Ƭ",
  U: "Џ", V: "Ʋ", W: "Ψ", X: "Ӿ", Y: "Υ", Z: "Ž",
  a: "λ", b: "ɢ", c: "η", d: "г", e: "κ", f: "ϟ", g: "ϧ", h: "ћ", i: "ι", j: "ϳ",
  k: "к", l: "ʅ", m: "м", n: "п", o: "ο", p: "ρ", q: "ς", r: "я", s: "ѕ", t: "т",
  u: "υ", v: "ν", w: "ω", x: "х", y: "γ", z: "ζ"
});

// Style 81: Currency Style
addStyle('font', 'font_currency', '', '', {
  A: "₳", B: "฿", C: "₵", D: "Đ", E: "E̷̷", F: "₣", G: "₲", H: "Ⱨ", I: "ł", J: "J",
  K: "₭", L: "Ⱡ", M: "₥", N: "₦", O: "Ø", P: "Ƥ", Q: "Ᵽ", R: "Ɽ", S: "₴", T: "₮",
  U: "ฯ", V: "ⱽ", W: "₩", X: "Ӿ", Y: "¥", Z: "Ⱬ",
  a: "₳", b: "฿", c: "₵", d: "đ", e: "e̷", f: "₣", g: "₲", h: "Ⱨ", i: "ł", j: "j",
  k: "₭", l: "Ⱡ", m: "₥", n: "₦", o: "ø", p: "ƥ", q: "Ᵽ", r: "Ɽ", s: "₴", t: "₮",
  u: "ฯ", v: "ⱽ", w: "₩", x: "Ӿ", y: "¥", z: "Ⱬ"
});

// Style 82: Fraktur Accent
addStyle('font', 'font_fraktur_accent', '', '', {
  a: "𝔞̈", b: "𝔟̈", c: "𝔠̈", d: "𝔡̈", e: "𝔢̈", f: "𝔣̈", g: "𝔤̈", h: "𝔥̈", i: "𝔦̈", j: "𝔧̈",
  k: "𝔨̈", l: "𝔩̈", m: "𝔪̈", n: "𝔫̈", o: "𝔬̈", p: "𝔭̈", q: "𝔮̈", r: "𝔯̈", s: "𝔰̈", t: "𝔱̈",
  u: "𝔲̈", v: "𝔳̈", w: "𝔴̈", x: "𝔵̈", y: "𝔶̈", z: "𝔷̈",
  A: "𝔄", B: "𝔅", C: "ℭ", D: "𝔇", E: "𝔈", F: "𝔉", G: "𝔊", H: "ℌ", I: "ℑ", J: "𝔍",
  K: "𝔎", L: "𝔏", M: "𝔐", N: "𝔑", O: "𝔒", P: "𝔓", Q: "𝔔", R: "ℜ", S: "𝔖", T: "𝔗",
  U: "𝔘", V: "𝔙", W: "𝔚", X: "𝔛", Y: "𝔜", Z: "ℨ"
});

// Style 83: Thai Style Accent
addStyle('font', 'font_thai_accent', '', '', {
  A: "๖ۣۜA", B: "๖ۣۜB", C: "๖ۣۜC", D: "๖ۣۜD", E: "๖ۣۜE", F: "๖ۣۜF", G: "๖ۣۜG", H: "๖ۣۜH", I: "๖ۣۜI", J: "๖ۣۜJ",
  K: "๖ۣۜK", L: "๖ۣۜL", M: "๖ۣۜM", N: "๖ۣۜN", O: "๖ۣۜO", P: "๖ۣۜP", Q: "๖ۣۜQ", R: "๖ۣۜR", S: "๖ۣۜS", T: "๖ۣۜT",
  U: "๖ۣۜU", V: "๖ۣۜV", W: "๖ۣۜW", X: "๖ۣۜX", Y: "๖ۣۜY", Z: "๖ۣۜZ",
  a: "๖ۣۜa", b: "๖ۣۜb", c: "๖ۣۜc", d: "๖ۣۜd", e: "๖ۣۜe", f: "๖ۣۜf", g: "๖ۣۜg", h: "๖ۣۜh", i: "๖ۣۜi", j: "๖ۣۜj",
  k: "๖ۣۜk", l: "๖ۣۜl", m: "๖ۣۜm", n: "๖ۣۜn", o: "๖ۣۜo", p: "๖ۣۜp", q: "๖ۣۜq", r: "๖ۣۜr", s: "๖ۣۜs", t: "๖ۣۜt",
  u: "๖ۣۜu", v: "๖ۣۜv", w: "๖ۣۜw", x: "๖ۣۜx", y: "๖ۣۜy", z: "๖ۣۜz"
});

// Style 84: Bracket Circumflex
addStyle('font', 'font_bracket_circumflex', '', '', {
  A: "⦏Â⦎", B: "⦏B̂⦎", C: "⦏Ĉ⦎", D: "⦏D̂⦎", E: "⦏Ê⦎", F: "⦏F̂⦎", G: "⦏Ĝ⦎", H: "⦏Ĥ⦎", I: "⦏Î⦎", J: "⦏Ĵ⦎",
  K: "⦏K̂⦎", L: "⦏L̂⦎", M: "⦏M̂⦎", N: "⦏N̂⦎", O: "⦏Ô⦎", P: "⦏P̂⦎", Q: "⦏Q̂⦎", R: "⦏R̂⦎", S: "⦏Ŝ⦎", T: "⦏T̂⦎",
  U: "⦏Û⦎", V: "⦏V̂⦎", W: "⦏Ŵ⦎", X: "⦏X̂⦎", Y: "⦏Ŷ⦎", Z: "⦏Ẑ⦎",
  a: "⦏â⦎", b: "⦏b̂⦎", c: "⦏ĉ⦎", d: "⦏d̂⦎", e: "⦏ê⦎", f: "⦏f̂⦎", g: "⦏ĝ⦎", h: "⦏ĥ⦎", i: "⦏î⦎", j: "⦏ĵ⦎",
  k: "⦏k̂⦎", l: "⦏l̂⦎", m: "⦏m̂⦎", n: "⦏n̂⦎", o: "⦏ô⦎", p: "⦏p̂⦎", q: "⦏q̂⦎", r: "⦏r̂⦎", s: "⦏ŝ⦎", t: "⦏t̂⦎",
  u: "⦏û⦎", v: "⦏v̂⦎", w: "⦏ŵ⦎", x: "⦏x̂⦎", y: "⦏ŷ⦎", z: "⦏ẑ⦎"
});

// Style 85: Short Tilde
addStyle('font', 'font_short_tilde', '', '', {
  A: "A̴", B: "B̴", C: "C̴", D: "D̴", E: "E̴", F: "F̴", G: "G̴", H: "H̴", I: "I̴", J: "J̴",
  K: "K̴", L: "L̴", M: "M̴", N: "N̴", O: "O̴", P: "P̴", Q: "Q̴", R: "R̴", S: "S̴", T: "T̴",
  U: "U̴", V: "V̴", W: "W̴", X: "X̴", Y: "Y̴", Z: "Z̴",
  a: "a̴", b: "b̴", c: "c̴", d: "d̴", e: "e̴", f: "f̴", g: "g̴", h: "h̴", i: "i̴", j: "j̴",
  k: "k̴", l: "l̴", m: "m̴", n: "n̴", o: "o̴", p: "p̴", q: "q̴", r: "r̴", s: "s̴", t: "t̴",
  u: "u̴", v: "v̴", w: "w̴", x: "x̴", y: "y̴", z: "z̴"
});

// Style 86: Complex Accent
addStyle('font', 'font_complex_accent', '', '', {
  A: "A͎͍͐￫", B: "B͎͍͐￫", C: "C͎͍͐￫", D: "D͎͍͐￫", E: "E͎͍͐￫", F: "F͎͍͐￫", G: "G͎͍͐￫", H: "H͎͍͐￫", I: "I͎͍͐￫", J: "J͎͍͐￫",
  K: "K͎͍͐￫", L: "L͎͍͐￫", M: "M͎͍͐￫", N: "N͎͍͐￫", O: "O͎͍͐￫", P: "P͎͍͐￫", Q: "Q͎͍͐￫", R: "R͎͍͐￫", S: "S͎͍͐￫", T: "T͎͍͐￫",
  U: "U͎͍͐￫", V: "V͎͍͐￫", W: "W͎͍͐￫", X: "X͎͍͐￫", Y: "Y͎͍͐￫", Z: "Z͎͍͐￫",
  a: "a͎͍͐￫", b: "b͎͍͐￫", c: "c͎͍͐￫", d: "d͎͍͐￫", e: "e͎͍͐￫", f: "f͎͍͐￫", g: "g͎͍͐￫", h: "h͎͍͐￫", i: "i͎͍͐￫", j: "j͎͍͐￫",
  k: "k͎͍͐￫", l: "l͎͍͐￫", m: "m͎͍͐￫", n: "n͎͍͐￫", o: "o͎͍͐￫", p: "p͎͍͐￫", q: "q͎͍͐￫", r: "r͎͍͐￫", s: "s͎͍͐￫", t: "t͎͍͐￫",
  u: "u͎͍͐￫", v: "v͎͍͐￫", w: "w͎͍͐￫", x: "x͎͍͐￫", y: "y͎͍͐￫", z: "z͎͍͐￫"
});

// Style 87: Star Accent
addStyle('font', 'font_star_accent', '', '', {
  A: "A⨳", B: "B⨳", C: "C⨳", D: "D⨳", E: "E⨳", F: "F⨳", G: "G⨳", H: "H⨳", I: "I⨳", J: "J⨳",
  K: "K⨳", L: "L⨳", M: "M⨳", N: "N⨳", O: "O⨳", P: "P⨳", Q: "Q⨳", R: "R⨳", S: "S⨳", T: "T⨳",
  U: "U⨳", V: "V⨳", W: "W⨳", X: "X⨳", Y: "Y⨳", Z: "Z⨳",
  a: "a⨳", b: "b⨳", c: "c⨳", d: "d⨳", e: "e⨳", f: "f⨳", g: "g⨳", h: "h⨳", i: "i⨳", j: "j⨳",
  k: "k⨳", l: "l⨳", m: "m⨳", n: "n⨳", o: "o⨳", p: "p⨳", q: "q⨳", r: "r⨳", s: "s⨳", t: "t⨳",
  u: "u⨳", v: "v⨳", w: "w⨳", x: "x⨳", y: "y⨳", z: "z⨳"
});

// Style 88: Music Accent
addStyle('font', 'font_music_accent', '', '', {
  A: "𝄆A", B: "𝄆B", C: "𝄆C", D: "𝄆D", E: "𝄆E", F: "𝄆F", G: "𝄆G", H: "𝄆H", I: "𝄆I", J: "𝄆J",
  K: "𝄆K", L: "𝄆L", M: "𝄆M", N: "𝄆N", O: "𝄆O", P: "𝄆P", Q: "𝄆Q", R: "𝄆R", S: "𝄆S", T: "𝄆T",
  U: "𝄆U", V: "𝄆V", W: "𝄆W", X: "𝄆X", Y: "𝄆Y", Z: "𝄆Z",
  a: "𝄆a", b: "𝄆b", c: "𝄆c", d: "𝄆d", e: "𝄆e", f: "𝄆f", g: "𝄆g", h: "𝄆h", i: "𝄆i", j: "𝄆j",
  k: "𝄆k", l: "𝄆l", m: "𝄆m", n: "𝄆n", o: "𝄆o", p: "𝄆p", q: "𝄆q", r: "𝄆r", s: "𝄆s", t: "𝄆t",
  u: "𝄆u", v: "𝄆v", w: "𝄆w", x: "𝄆x", y: "𝄆y", z: "𝄆z"
});

// Style 89: Broken Bar Accent
addStyle('font', 'font_broken_bar_accent', '', '', {
  A: "A⑊", B: "B⑊", C: "C⑊", D: "D⑊", E: "E⑊", F: "F⑊", G: "G⑊", H: "H⑊", I: "I⑊", J: "J⑊",
  K: "K⑊", L: "L⑊", M: "M⑊", N: "N⑊", O: "O⑊", P: "P⑊", Q: "Q⑊", R: "R⑊", S: "S⑊", T: "T⑊",
  U: "U⑊", V: "V⑊", W: "W⑊", X: "X⑊", Y: "Y⑊", Z: "Z⑊",
  a: "a⑊", b: "b⑊", c: "c⑊", d: "d⑊", e: "e⑊", f: "f⑊", g: "g⑊", h: "h⑊", i: "i⑊", j: "j⑊",
  k: "k⑊", l: "l⑊", m: "m⑊", n: "n⑊", o: "o⑊", p: "p⑊", q: "q⑊", r: "r⑊", s: "s⑊", t: "t⑊",
  u: "u⑊", v: "v⑊", w: "w⑊", x: "x⑊", y: "y⑊", z: "z⑊"
});

// Style 90: Corner Accent
addStyle('font', 'font_corner_accent', '', '', {
  A: "A〵", B: "B〵", C: "C〵", D: "D〵", E: "E〵", F: "F〵", G: "G〵", H: "H〵", I: "I〵", J: "J〵",
  K: "K〵", L: "L〵", M: "M〵", N: "N〵", O: "O〵", P: "P〵", Q: "Q〵", R: "R〵", S: "S〵", T: "T〵",
  U: "U〵", V: "V〵", W: "W〵", X: "X〵", Y: "Y〵", Z: "Z〵",
  a: "a〵", b: "b〵", c: "c〵", d: "d〵", e: "e〵", f: "f〵", g: "g〵", h: "h〵", i: "i〵", j: "j〵",
  k: "k〵", l: "l〵", m: "m〵", n: "n〵", o: "o〵", p: "p〵", q: "q〵", r: "r〵", s: "s〵", t: "t〵",
  u: "u〵", v: "v〵", w: "w〵", x: "x〵", y: "y〵", z: "z〵"
});

// Style 91: Square Bracket Accent
addStyle('font', 'font_square_bracket_accent', '', '', {
  A: "⁅A⁆", B: "⁅B⁆", C: "⁅C⁆", D: "⁅D⁆", E: "⁅E⁆", F: "⁅F⁆", G: "⁅G⁆", H: "⁅H⁆", I: "⁅I⁆", J: "⁅J⁆",
  K: "⁅K⁆", L: "⁅L⁆", M: "⁅M⁆", N: "⁅N⁆", O: "⁅O⁆", P: "⁅P⁆", Q: "⁅Q⁆", R: "⁅R⁆", S: "⁅S⁆", T: "⁅T⁆",
  U: "⁅U⁆", V: "⁅V⁆", W: "⁅W⁆", X: "⁅X⁆", Y: "⁅Y⁆", Z: "⁅Z⁆",
  a: "⁅a⁆", b: "⁅b⁆", c: "⁅c⁆", d: "⁅d⁆", e: "⁅e⁆", f: "⁅f⁆", g: "⁅g⁆", h: "⁅h⁆", i: "⁅i⁆", j: "⁅j⁆",
  k: "⁅k⁆", l: "⁅l⁆", m: "⁅m⁆", n: "⁅n⁆", o: "⁅o⁆", p: "⁅p⁆", q: "⁅q⁆", r: "⁅r⁆", s: "⁅s⁆", t: "⁅t⁆",
  u: "⁅u⁆", v: "⁅v⁆", w: "⁅w⁆", x: "⁅x⁆", y: "⁅y⁆", z: "⁅z⁆"
});

// Style 92: Corner Bracket Accent
addStyle('font', 'font_corner_bracket_accent', '', '', {
  A: "『A』", B: "『B』", C: "『C』", D: "『D』", E: "『E』", F: "『F』", G: "『G』", H: "『H』", I: "『I』", J: "『J』",
  K: "『K』", L: "『L』", M: "『M』", N: "『N』", O: "『O』", P: "『P』", Q: "『Q』", R: "『R』", S: "『S』", T: "『T』",
  U: "『U』", V: "『V』", W: "『W』", X: "『X』", Y: "『Y』", Z: "『Z』",
  a: "『a』", b: "『b』", c: "『c』", d: "『d』", e: "『e』", f: "『f』", g: "『g』", h: "『h』", i: "『i』", j: "『j』",
  k: "『k』", l: "『l』", m: "『m』", n: "『n』", o: "『o』", p: "『p』", q: "『q』", r: "『r』", s: "『s』", t: "『t』",
  u: "『u』", v: "『v』", w: "『w』", x: "『x』", y: "『y』", z: "『z』"
});

// Style 93: Underline Bracket Accent
addStyle('font', 'font_underline_bracket_accent', '', '', {
  A: "[A̲̅]", B: "[B̲̅]", C: "[C̲̅]", D: "[D̲̅]", E: "[E̲̅]", F: "[F̲̅]", G: "[G̲̅]", H: "[H̲̅]", I: "[I̲̅]", J: "[J̲̅]",
  K: "[K̲̅]", L: "[L̲̅]", M: "[M̲̅]", N: "[N̲̅]", O: "[O̲̅]", P: "[P̲̅]", Q: "[Q̲̅]", R: "[R̲̅]", S: "[S̲̅]", T: "[T̲̅]",
  U: "[U̲̅]", V: "[V̲̅]", W: "[W̲̅]", X: "[X̲̅]", Y: "[Y̲̅]", Z: "[Z̲̅]",
  a: "[a̲̅]", b: "[b̲̅]", c: "[c̲̅]", d: "[d̲̅]", e: "[e̲̅]", f: "[f̲̅]", g: "[g̲̅]", h: "[h̲̅]", i: "[i̲̅]", j: "[j̲̅]",
  k: "[k̲̅]", l: "[l̲̅]", m: "[m̲̅]", n: "[n̲̅]", o: "[o̲̅]", p: "[p̲̅]", q: "[q̲̅]", r: "[r̲̅]", s: "[s̲̅]", t: "[t̲̅]",
  u: "[u̲̅]", v: "[v̲̅]", w: "[w̲̅]", x: "[x̲̅]", y: "[y̲̅]", z: "[z̲̅]"
});

// Style 94: Fraktur Simple
addStyle('font', 'font_fraktur_simple', '', '', {
  a: "𝔞", b: "𝔟", c: "𝔠", d: "𝔡", e: "𝔢", f: "𝔣", g: "𝔤", h: "𝔥", i: "𝔦", j: "𝔧",
  k: "𝔨", l: "𝔩", m: "𝔪", n: "𝔫", o: "𝔬", p: "𝔭", q: "𝔮", r: "𝔯", s: "𝔰", t: "𝔱",
  u: "𝔲", v: "𝔳", w: "𝔴", x: "𝔵", y: "𝔶", z: "𝔷",
  A: "𝔄", B: "𝔅", C: "ℭ", D: "𝔇", E: "𝔈", F: "𝔉", G: "𝔊", H: "ℌ", I: "ℑ", J: "𝔍",
  K: "𝔎", L: "𝔏", M: "𝔐", N: "𝔑", O: "𝔒", P: "𝔓", Q: "𝔔", R: "ℜ", S: "𝔖", T: "𝔗",
  U: "𝔘", V: "𝔙", W: "𝔚", X: "𝔛", Y: "𝔜", Z: "ℨ"
});

// Style 95: Japanese Style
addStyle('font', 'font_japanese_style', '', '', {
  A: "么", B: "乃", C: "匚", D: "刁", E: "モ", F: "ｷ", G: "ム", H: "廾", I: "工", J: "ﾌ",
  K: "ズ", L: "ﾚ", M: "从", N: "れ", O: "〇", P: "尸", Q: "ゐ", R: "尺", S: "丂", T: "ｲ",
  U: "ひ", V: "√", W: "山", X: "メ", Y: "Ɏ", Z: "乙",
  a: "么", b: "乃", c: "匚", d: "刁", e: "モ", f: "ｷ", g: "ム", h: "廾", i: "工", j: "ﾌ",
  k: "ズ", l: "ﾚ", m: "从", n: "れ", o: "〇", p: "尸", q: "ゐ", r: "尺", s: "丂", t: "ｲ",
  u: "ひ", v: "√", w: "山", x: "メ", y: "Ɏ", z: "乙"
});

// Style 21: Italic with Diaeresis
addStyle('font', 'font_italic_diaeresis', '', '', {
  A: "𝘼̈", B: "𝘽̈", C: "𝘾̈", D: "𝘿̈", E: "𝙀̈", F: "𝙁̈", G: "𝙂̈", H: "𝙃̈", I: "𝙄̈", J: "𝙅̈",
  K: "𝙆̈", L: "𝙇̈", M: "𝙈̈", N: "𝙉̈", O: "𝙊̈", P: "𝙋̈", Q: "𝙌̈", R: "𝙍̈", S: "𝙎̈", T: "𝙏̈",
  U: "𝙐̈", V: "𝙑̈", W: "𝙒̈", X: "𝙓̈", Y: "𝙔̈", Z: "𝙕̈",
  a: "𝙖̈", b: "𝙗̈", c: "𝙘̈", d: "𝙙̈", e: "𝙚̈", f: "𝙛̈", g: "𝙜̈", h: "𝙝̈", i: "𝙞̈", j: "𝙟̈",
  k: "𝙠̈", l: "𝙡̈", m: "𝙢̈", n: "𝙣̈", o: "𝙤̈", p: "𝙥̈", q: "𝙦̈", r: "𝙧̈", s: "𝙨̈", t: "𝙩̈",
  u: "𝙪̈", v: "𝙫̈", w: "𝙬̈", x: "𝙭̈", y: "𝙮̈", z: "𝙯̈"
});

// Style 22: Long Stroke Accent
addStyle('font', 'font_long_stroke_accent', '', '', {
  A: "A̸͟͞", B: "B̸͟͞", C: "C̸͟͞", D: "D̸͟͞", E: "E̸͟͞", F: "F̸͟͞", G: "G̸͟͞", H: "H̸͟͞", I: "I̸͟͞", J: "J̸͟͞",
  K: "K̸͟͞", L: "L̸͟͞", M: "M̸͟͞", N: "N̸͟͞", O: "O̸͟͞", P: "P̸͟͞", Q: "Q̸͟͞", R: "R̸͟͞", S: "S̸͟͞", T: "T̸͟͞",
  U: "U̸͟͞", V: "V̸͟͞", W: "W̸͟͞", X: "X̸͟͞", Y: "Y̸͟͞", Z: "Z̸͟͞",
  a: "a̸͟͞", b: "b̸͟͞", c: "c̸͟͞", d: "d̸͟͞", e: "e̸͟͞", f: "f̸͟͞", g: "g̸͟͞", h: "h̸͟͞", i: "i̸͟͞", j: "j̸͟͞",
  k: "k̸͟͞", l: "l̸͟͞", m: "m̸͟͞", n: "n̸͟͞", o: "o̸͟͞", p: "p̸͟͞", q: "q̸͟͞", r: "r̸͟͞", s: "s̸͟͞", t: "t̸͟͞",
  u: "u̸͟͞", v: "v̸͟͞", w: "w̸͟͞", x: "x̸͟͞", y: "y̸͟͞", z: "z̸͟͞"
});

// Style 23: Greek Bold Sans
addStyle('font', 'font_greek_bold_sans_2', '', '', {
  A: "𝚨", B: "𝚩", C: "𝚪", D: "𝚫", E: "𝚬", F: "𝚺", G: "𝛀", H: "𝚮", I: "𝚰", J: "𝗝",
  K: "𝚱", L: "𝚲", M: "𝚳", N: "𝚴", O: "𝚶", P: "𝚸", Q: "𝚽", R: "𝗥", S: "𝚵", T: "𝚻",
  U: "𝚷", V: "𝚼", W: "𝗪", X: "𝚾", Y: "𝚿", Z: "𝚭",
  a: "α", b: "β", c: "γ", d: "δ", e: "ε", f: "σ", g: "ω", h: "η", i: "ι", j: "ȷ",
  k: "κ", l: "λ", m: "μ", n: "ν", o: "ο", p: "π", q: "φ", r: "ρ", s: "ξ", t: "τ",
  u: "υ", v: "υ", w: "ω", x: "χ", y: "ψ", z: "ζ"
});

// Style 24: Simple Greek 2
addStyle('font', 'font_simple_greek_2', '', '', {
  A: "Λ", B: "Β", C: "Ͻ", D: "Ɗ", E: "Ξ", F: "Ƒ", G: "Ɠ", H: "H", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ø", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "U", V: "V", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "λ", b: "β", c: "Ͻ", d: "ɗ", e: "ξ", f: "ƒ", g: "ɠ", h: "h", i: "ι", j: "ј",
  k: "κ", l: "ℓ", m: "μ", n: "η", o: "ø", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "υ", z: "ƶ"
});

// Style 25: Math Bold
addStyle('font', 'font_math_bold', '', '', {
  a: "𝛂", b: "𝛃", c: "𝛇", d: "𝛅", e: "𝛆", f: "𝛇", g: "𝛓", h: "𝛑", i: "𝖎", j: "𝖏",
  k: "𝛋", l: "𝛊", m: "𝛍", n: "𝛈", o: "𝛐", p: "𝛒", q: "𝛗", r: "𝛑", s: "𝛔", t: "𝛕",
  u: "𝛖", v: "𝛎", w: "𝛚", x: "𝛘", y: "𝛙", z: "𝛏",
  A: "Α", B: "Β", C: "Γ", D: "Δ", E: "Ε", F: "Ζ", G: "Η", H: "Θ", I: "Ι", J: "Κ",
  K: "Λ", L: "Μ", M: "Ν", N: "Ξ", O: "Ο", P: "Π", Q: "Ρ", R: "Σ", S: "Τ", T: "Υ",
  U: "Φ", V: "Χ", W: "Ψ", X: "Ω", Y: "Α", Z: "Β"
});

// Style 26: Tibetan Sans
addStyle('font', 'font_tibetan_sans', '༒', '༒', {
  A: "༒𝘈༒", B: "༒𝘉༒", C: "༒𝘊༒", D: "༒𝘋༒", E: "༒𝘌༒", F: "༒𝘍༒", G: "༒𝘎༒", H: "༒𝘏༒", I: "༒𝘐༒", J: "༒𝘑༒",
  K: "༒𝘒༒", L: "༒𝘓༒", M: "༒𝘔༒", N: "༒𝘕༒", O: "༒𝘖༒", P: "༒𝘗༒", Q: "༒𝘘༒", R: "༒𝘙༒", S: "༒𝘚༒", T: "༒𝘛༒",
  U: "༒𝘜༒", V: "༒𝘝༒", W: "༒𝘞༒", X: "༒𝘟༒", Y: "༒𝘠༒", Z: "༒𝘡༒",
  a: "༒𝘢༒", b: "༒𝘣༒", c: "༒𝘤༒", d: "༒𝘥༒", e: "༒𝘦༒", f: "༒𝘧༒", g: "༒𝘨༒", h: "༒𝘩༒", i: "༒𝘪༒", j: "༒𝘫༒",
  k: "༒𝘬༒", l: "༒𝘭༒", m: "༒𝘮༒", n: "༒𝘯༒", o: "༒𝘰༒", p: "༒𝘱༒", q: "༒𝘲༒", r: "༒𝘳༒", s: "༒𝘴༒", t: "༒𝘵༒",
  u: "༒𝘶༒", v: "༒𝘷༒", w: "༒𝘸༒", x: "༒𝘹༒", y: "༒𝘺༒", z: "༒𝘻༒"
});

// Style 27: Double Slash Sans
addStyle('font', 'font_double_slash_sans', '', '', {
  A: "//𝘈//", B: "//𝘉//", C: "//𝘊//", D: "//𝘋//", E: "//𝘌//", F: "//𝘍//", G: "//𝘎//", H: "//𝘏//", I: "//𝘐//", J: "//𝘑//",
  K: "//𝘒//", L: "//𝘓//", M: "//𝘔//", N: "//𝘕//", O: "//𝘖//", P: "//𝘗//", Q: "//𝘘//", R: "//𝘙//", S: "//𝘚//", T: "//𝘛//",
  U: "//𝘜//", V: "//𝘝//", W: "//𝘞//", X: "//𝘟//", Y: "//𝘠//", Z: "//𝘡//",
  a: "//𝘢//", b: "//𝘣//", c: "//𝘤//", d: "//𝘥//", e: "//𝘦//", f: "//𝘧//", g: "//𝘨//", h: "//𝘩//", i: "//𝘪//", j: "//𝘫//",
  k: "//𝘬//", l: "//𝘭//", m: "//𝘮//", n: "//𝘯//", o: "//𝘰//", p: "//𝘱//", q: "//𝘲//", r: "//𝘳//", s: "//𝘴//", t: "//𝘵//",
  u: "//𝘶//", v: "//𝘷//", w: "//𝘸//", x: "//𝘹//", y: "//𝘺//", z: "//𝘻//"
});

// Style 28: Miao Greek Mix
addStyle('font', 'font_miao_greek_mix', '', '', {
  A: "ꫝ", B: "𝘉", C: "Ͻ", D: "𝘋", E: "Ξ", F: "𝘍", G: "𝘎", H: "𝘏", I: "Ί", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "Ꮎ", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "Ü", V: "𝘝", W: "𝘞", X: "𝘟", Y: "Y", Z: "Ż",
  a: "ꫝ", b: "𝘣", c: "c", d: "𝘥", e: "e", f: "𝘧", g: "𝘨", h: "𝘩", i: "i", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "o", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "ü", v: "𝘷", w: "𝘸", x: "𝘹", y: "y", z: "ż"
});

// Style 29: Box Accent
addStyle('font', 'font_box_accent', '', '', {
  A: "A░", B: "B░", C: "C░", D: "D░", E: "E░", F: "F░", G: "G░", H: "H░", I: "I░", J: "J░",
  K: "K░", L: "L░", M: "M░", N: "N░", O: "O░", P: "P░", Q: "Q░", R: "R░", S: "S░", T: "T░",
  U: "U░", V: "V░", W: "W░", X: "X░", Y: "Y░", Z: "Z░",
  a: "a░", b: "b░", c: "c░", d: "d░", e: "e░", f: "f░", g: "g░", h: "h░", i: "i░", j: "j░",
  k: "k░", l: "l░", m: "m░", n: "n░", o: "o░", p: "p░", q: "q░", r: "r░", s: "s░", t: "t░",
  u: "u░", v: "v░", w: "w░", x: "x░", y: "y░", z: "z░"
});

// Style 30: Normal Letters
addStyle('font', 'font_normal', '', '', {
  A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H", I: "I", J: "J",
  K: "K", L: "L", M: "M", N: "N", O: "O", P: "P", Q: "Q", R: "R", S: "S", T: "T",
  U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Z",
  a: "a", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g", h: "h", i: "I", j: "j",
  k: "k", l: "l", m: "m", n: "n", o: "o", p: "p", q: "q", r: "r", s: "s", t: "t",
  u: "u", v: "v", w: "w", x: "x", y: "y", z: "z"
});

// Style 31: Greek Normal
addStyle('font', 'font_greek_normal', '', '', {
  A: "Λ", B: "Β", C: "Ͻ", D: "D", E: "Ξ", F: "F", G: "Ɠ", H: "H", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ꭷ", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "U", V: "V", W: "W", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "λ", b: "β", c: "Ͻ", d: "d", e: "ξ", f: "f", g: "ɠ", h: "h", i: "ι", j: "ј",
  k: "κ", l: "ℓ", m: "μ", n: "η", o: "Ꭷ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "w", x: "χ", y: "υ", z: "ƶ"
});

// Style 32: Complex Accent
addStyle('font', 'font_complex_accent', '', '', {
  A: "ᴀ᪻ͨᷠ᷍", B: "ʙ᪻ͩᷡ᷍", C: "ᴄ᪻ͪᷢ᷍", D: "ᴅ᪻ͫᷣ᷍", E: "ᴇ᪻ͬᷤ᷍", F: "ꜰ᪻ͭᷥ᷍", G: "ɢ᪻ͮᷦ᷍", H: "ʜ᪻ͯᷧ᷍", I: "ɪ᪻ͥᷱ᷍", J: "ᴊ᪻ͦᷲ᷍",
  K: "ᴋ᪻ͧᷳ᷍", L: "ʟ᪻ͨᷴ᷍", M: "ᴍ᪻ͩ᷵᷍", N: "ɴ᪻ͪ", O: "ᴏ᪻ͫ", P: "ᴘ᪻ͬ", Q: "ϙ᪻ͭ", R: "ʀ᪻ͮ", S: "ꜱ᪻ͯ", T: "ᴛ᪻ͥ᷼᷍",
  U: "ᴜ᷽᪻ͦ᷍", V: "ᴠ᪻ͧ᷾᷍", W: "ᴡ᷿᪻ͨ᷍", X: "x᪻ͩ⃐᷍", Y: "ʏ᪻ͪ⃑᷍", Z: "ᴢ⃒᪻ͫ᷍",
  a: "ᴀ᪻ͨᷠ᷍", b: "ʙ᪻ͩᷡ᷍", c: "ᴄ᪻ͪᷢ᷍", d: "ᴅ᪻ͫᷣ᷍", e: "ᴇ᪻ͬᷤ᷍", f: "ꜰ᪻ͭᷥ᷍", g: "ɢ᪻ͮᷦ᷍", h: "ʜ᪻ͯᷧ᷍", i: "ɪ᪻ͥᷱ᷍", j: "ᴊ᪻ͦᷲ᷍",
  k: "ᴋ᪻ͧᷳ᷍", l: "ʟ᪻ͨᷴ᷍", m: "ᴍ᪻ͩ᷵᷍", n: "ɴ᪻ͪ", o: "ᴏ᪻ͫ", p: "ᴘ᪻ͬ", q: "ϙ᪻ͭ", r: "ʀ᪻ͮ", s: "ꜱ᪻ͯ", t: "ᴛ᪻ͥ᷼᷍",
  u: "ᴜ᷽᪻ͦ᷍", v: "ᴠ᪻ͧ᷾᷍", w: "ᴡ᷿᪻ͨ᷍", x: "x᪻ͩ⃐᷍", y: "ʏ᪻ͪ⃑᷍", z: "ᴢ⃒᪻ͫ᷍"
});

// Style 33: Miao Mix
addStyle('font', 'font_miao_mix', '', '', {
  A: "ꫝ", B: "B", C: "C", D: "D", E: "E̷̷", F: "F", G: "G", H: "H", I: "ɪ᪻ͥᷱ᷍", J: "J",
  K: "K", L: "L", M: "M", N: "N", O: "Ꭷ", P: "P", Q: "Q", R: "R", S: "S", T: "T",
  U: "ꪽ", V: "V", W: "W", X: "X", Y: "Y", Z: "Z",
  a: "ꫝ", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g", h: "h", i: "ɪ᪻ͥᷱ᷍", j: "j",
  k: "k", l: "l", m: "m", n: "n", o: "Ꭷ", p: "p", q: "q", r: "r", s: "s", t: "t",
  u: "ꪽ", v: "v", w: "w", x: "x", y: "y", z: "z"
});

// Style 34: Miao Small Caps
addStyle('font', 'font_miao_small_caps', '', '', {
  A: "ꫝ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "𝖎", J: "ᴊ",
  K: "ᴋ", L: "ℓ", M: "ᴍ", N: "𝛈", O: "Ꭷ", P: "ᴘ", Q: "𝛗", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ꪽ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ꫝ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "𝖎", j: "ᴊ",
  k: "ᴋ", l: "ℓ", m: "ᴍ", n: "𝛈", o: "Ꭷ", p: "ᴘ", q: "𝛗", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ꪽ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 35: Tilde Accent
addStyle('font', 'font_tilde_accent', '', '', {
  A: "ᴀ̑", B: "ʙ̑", C: "ᴄ̑", D: "ᴅ̑", E: "ᴇ̑", F: "ꜰ̑", G: "ɢ̑", H: "ʜ̑", I: "ɪ̑", J: "ᴊ̑",
  K: "ᴋ̑", L: "ʟ̑", M: "ᴍ̑", N: "ɴ̑", O: "ᴏ̑", P: "ᴘ̑", Q: "ϙ̑", R: "ʀ̑", S: "ꜱ̑", T: "ᴛ̑",
  U: "ᴜ̑", V: "ᴠ̑", W: "ᴡ̑", X: "x̑", Y: "ʏ̑", Z: "ᴢ̑",
  a: "ᴀ̑", b: "ʙ̑", c: "ᴄ̑", d: "ᴅ̑", e: "ᴇ̑", f: "ꜰ̑", g: "ɢ̑", h: "ʜ̑", i: "ɪ̑", j: "ᴊ̑",
  k: "ᴋ̑", l: "ʟ̑", m: "ᴍ̑", n: "ɴ̑", o: "ᴏ̑", p: "ᴘ̑", q: "ϙ̑", r: "ʀ̑", s: "ꜱ̑", t: "ᴛ̑",
  u: "ᴜ̑", v: "ᴠ̑", w: "ᴡ̑", x: "x̑", y: "ʏ̑", z: "ᴢ̑"
});

// Style 36: Mixed Tilde
addStyle('font', 'font_mixed_tilde', '', '', {
  A: "ᴀ̑", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ̑", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ̑", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ̑", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ̑", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ̑", Z: "ᴢ",
  a: "ᴀ̑", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ̑", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ̑", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ̑", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ̑", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ̑", z: "ᴢ"
});

// Style 37: Greek Monospace Mix
addStyle('font', 'font_greek_monospace_mix', '', '', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "ε", F: "𝙵", G: "𝙶", H: "н", I: "𝙸", J: "נ",
  K: "𝙺", L: "ℓ", M: "𝙼", N: "η", O: "σ", P: "𝙿", Q: "𝚀", R: "я", S: "𝚂", T: "τ",
  U: "𝚄", V: "𝚅", W: "ω", X: "𝚇", Y: "𝚈", Z: "ƶ",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "ƒ", g: "𝚐", h: "𝚑", i: "𝚒", j: "נ",
  k: "𝚔", l: "ℓ", m: "𝚖", n: "η", o: "𝚘", p: "𝚙", q: "զ", r: "я", s: "𝚜", t: "τ",
  u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "ƶ"
});

// Style 113: Squared Negative Mixed
addStyle('font', 'font_squared_negative_mixed', '', '', {
  A: "🄰", B: "🄱", C: "🄲", D: "🄳", E: "🄴", F: "🄵", G: "🄶", H: "🄷", I: "🄸", J: "🄹",
  K: "🄺", L: "🄻", M: "🄼", N: "🄽", O: "🄾", P: "🄿", Q: "🅀", R: "🅁", S: "🅂", T: "🅃",
  U: "🅄", V: "🅅", W: "🅆", X: "🅇", Y: "🅈", Z: "🅉",
  a: "🅰", b: "🅱", c: "🅲", d: "🅳", e: "🅴", f: "🅵", g: "🅶", h: "🅷", i: "🅸", j: "🅹",
  k: "🅺", l: "🅻", m: "🅼", n: "🅽", o: "🅾", p: "🅿", q: "🆀", r: "🆁", s: "🆂", t: "🆃",
  u: "🆄", v: "🆅", w: "🆆", x: "🆇", y: "🆈", z: "🆉"
});

// Style 114: Monospace Circled Mixed
addStyle('font', 'font_monospace_circled_mixed', '', '', {
  A: "Ⓐ", B: "𝗕", C: "𝗖", D: "𝗗", E: "Ⓔ", F: "𝗙", G: "𝗚", H: "𝗛", I: "Ⓘ", J: "𝗝",
  K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "Ⓞ", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
  U: "Ⓤ", V: "𝗩", W: "𝗪", X: "𝗫", Y: "Ⓨ", Z: "𝗭",
  a: "ⓐ", b: "𝙗", c: "𝙘", d: "𝙙", e: "ⓔ", f: "𝙛", g: "𝙜", h: "𝙝", i: "Ⓘ", j: "𝙟",
  k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "Ⓞ", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
  u: "ⓤ", v: "𝙫", w: "𝙬", x: "𝙭", y: "ⓨ", z: "𝙯"
});

// Style 115: Cursive Accent
addStyle('font', 'font_cursive_accent', '', '', {
  A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘", J: "𝓙",
  K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣",
  U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩",
  a: "𝓪̈", b: "𝓫̈", c: "𝓬̈", d: "𝓭̈", e: "𝓮̈", f: "𝓯̈", g: "𝓰̈", h: "𝓱̈", i: "𝓲̈", j: "𝓳̈",
  k: "𝓴̈", l: "𝓵̈", m: "𝓶̈", n: "𝓷̈", o: "𝓸̈", p: "𝓹̈", q: "𝓺̈", r: "𝓻̈", s: "𝓼̈", t: "𝓽̈",
  u: "𝓾̈", v: "𝓿̈", w: "𝔀̈", x: "𝔁̈", y: "𝔂̈", z: "𝔃̈"
});

// Style 66: Simple Greek (Updated)
addStyle('font', 'font_simple_greek_updated', '', '', {
  A: "Λ", B: "Β", C: "Ͻ", D: "D", E: "Ξ", F: "F", G: "Ɠ", H: "H", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ꭷ", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "U", V: "V", W: "W", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "λ", b: "β", c: "Ͻ", d: "d", e: "ξ", f: "f", g: "ɠ", h: "h", i: "ι", j: "ј",
  k: "κ", l: "ℓ", m: "μ", n: "η", o: "Ꭷ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "υ", z: "ƶ"
});

// Style 65: Negative Circle Numbers
addStyle('font', 'font_negative_circle_numbers', '', '', {
  A: "❼", B: "🅑", C: "🅒", D: "🅓", E: "❸", F: "🅕", G: "🅖", H: "🅗", I: "❶", J: "🅙",
  K: "🅚", L: "🅛", M: "🅜", N: "🅝", O: "❽", P: "🅟", Q: "🅠", R: "🅡", S: "🅢", T: "🅣",
  U: "❾", V: "🅥", W: "🅦", X: "🅧", Y: "❺", Z: "🅩",
  a: "❼", b: "🅑", c: "🅒", d: "🅓", e: "❸", f: "🅕", g: "🅖", h: "🅗", i: "❶", j: "🅙",
  k: "🅚", l: "🅛", m: "🅜", n: "🅝", o: "❽", p: "🅟", q: "🅠", r: "🅡", s: "🅢", t: "🅣",
  u: "❾", v: "🅥", w: "🅦", x: "🅧", y: "❺", z: "🅩"
});

// Style 69: Xi Circled Mixed
addStyle('font', 'font_xi_circled_mixed', '', '', {
  A: "Ⓐ", B: "B͢", C: "C͢", D: "D͢", E: "Ⓔ", F: "F͢", G: "G͢", H: "H͢", I: "Ⓘ", J: "J͢",
  K: "K͢", L: "L͢", M: "M͢", N: "N͢", O: "Ⓞ", P: "P͢", Q: "Q͢", R: "R͢", S: "S͢", T: "T͢",
  U: "U͢", V: "Ⓤ", W: "W͢", X: "X͢", Y: "Ⓨ", Z: "Z͢",
  a: "ⓐ", b: "b͢", c: "c͢", d: "d͢", e: "ⓔ", f: "f͢", g: "g͢", h: "h͢", i: "ⓘ", j: "j͢",
  k: "k͢", l: "l͢", m: "m͢", n: "n͢", o: "ⓞ", p: "p͢", q: "q͢", r: "r͢", s: "s͢", t: "t͢",
  u: "ⓤ", v: "v͢", w: "w͢", x: "x͢", y: "ⓨ", z: "z͢"
});

// Style 13: Monospace Double Struck Mixed
addStyle('font', 'font_monospace_double_struck_mixed', '', '', {
  A: "𝔸", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝔼", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝕀", J: "𝗝",
  K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝕆", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
  U: "𝕌", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝕐", Z: "𝗭",
  a: "𝕒", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝕖", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝕚", j: "𝙟",
  k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝕠", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
  u: "𝕦", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝕪", z: "𝙯"
});

// Style 118: Bee Sans with Space
addStyle('love', 'love_bee_sans_space', '༄ ⋆｡˚🐝⃝', ' :)˚｡⋆࿐', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 119: Arrow Short Stroke with Flower
addStyle('love', 'love_arrow_short_stroke_flower', '►►►✿⃟', ' ⋆˙⟡᭄', {
  A: "A̶", B: "B̶", C: "C̶", D: "D̶", E: "E̶", F: "F̶", G: "G̶", H: "H̶", I: "I̶", J: "J̶",
  K: "K̶", L: "L̶", M: "M̶", N: "N̶", O: "O̶", P: "P̶", Q: "Q̶", R: "R̶", S: "S̶", T: "T̶",
  U: "U̶", V: "V̶", W: "W̶", X: "X̶", Y: "Y̶", Z: "Z̶",
  a: "a̶", b: "b̶", c: "c̶", d: "d̶", e: "e̶", f: "f̶", g: "g̶", h: "h̶", i: "i̶", j: "j̶",
  k: "k̶", l: "l̶", m: "m̶", n: "n̶", o: "o̶", p: "p̶", q: "q̶", r: "r̶", s: "s̶", t: "t̶",
  u: "u̶", v: "v̶", w: "w̶", x: "x̶", y: "y̶", z: "z̶"
});

// Style 120: Bracket Italic Math
addStyle('love', 'love_bracket_italic_math', '「•❀ ', ' «━❥', {
  A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
  K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
});

// Style 121: Flower Negative Circle
addStyle('love', 'love_flower_negative_circle', '♡₊˚✧🌸⃟', '✧˚₊ :)', {
  A: "🅐", B: "🅑", C: "🅒", D: "🅓", E: "🅔", F: "🅕", G: "🅖", H: "🅗", I: "🅘", J: "🅙",
  K: "🅚", L: "🅛", M: "🅜", N: "🅝", O: "🅞", P: "🅟", Q: "🅠", R: "🅡", S: "🅢", T: "🅣",
  U: "🅤", V: "🅥", W: "🅦", X: "🅧", Y: "🅨", Z: "🅩",
  a: "🅐", b: "🅑", c: "🅒", d: "🅓", e: "🅔", f: "🅕", g: "🅖", h: "🅗", i: "🅘", j: "🅙",
  k: "🅚", l: "🅛", m: "🅜", n: "🅝", o: "🅞", p: "🅟", q: "🅠", r: "🅡", s: "🅢", t: "🅣",
  u: "🅤", v: "🅥", w: "🅦", x: "🅧", y: "🅨", z: "🅩"
});

// Style 122: Double Struck with Bear
addStyle('love', 'love_double_struck_bear', '亗 ', '【≽ܫ≼】🧸', {
  A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
  K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
  U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ",
  a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
  k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
  u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫"
});

// Style 123: Accented Special
addStyle('love', 'love_accented_special', ' ༎ຶ ', '  ༎ຶ ϟ ⚆⁠ᴥ⁠⚆ ϟ', {
  A: "Á", B: "B", C: "Ć", D: "D", E: "É", F: "F", G: "Ǵ", H: "H", I: "í", J: "J",
  K: "Ḱ", L: "Ĺ", M: "Ḿ", N: "Ń", O: "Ő", P: "Ṕ", Q: "Q", R: "Ŕ", S: "ś", T: "T",
  U: "Ű", V: "V", W: "Ẃ", X: "X", Y: "Ӳ", Z: "Ź",
  a: "á", b: "b", c: "ć", d: "d", e: "é", f: "f", g: "ǵ", h: "h", i: "í", j: "j",
  k: "ḱ", l: "ĺ", m: "ḿ", n: "ń", o: "ő", p: "ṕ", q: "q", r: "ŕ", s: "ś", t: "t",
  u: "ú", v: "v", w: "ẃ", x: "x", y: "ӳ", z: "ź"
});

// Style 124: Lightning Greek
addStyle('love', 'love_lightning_greek', '༄·˚₊┋ ', ' ┋₊˚·ꫂ✿ꪶ', {
  A: "Α", B: "Β", C: "Ͻ", D: "Ɗ", E: "Σ", F: "Ƒ", G: "Ɠ", H: "Ν", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
  k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ"
});

// Style 125: Star Mixed
addStyle('love', 'love_star_mixed', '•★⋆', '⋆★•', {
  A: "Ⓐ", B: "𝗕", C: "𝗖", D: "𝗗", E: "Ⓔ", F: "𝗙", G: "𝗚", H: "𝗛", I: "Ⓘ", J: "𝗝",
  K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "Ⓞ", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
  U: "Ⓤ", V: "𝗩", W: "𝗪", X: "𝗫", Y: "Ⓨ", Z: "𝗭",
  a: "ⓐ", b: "𝙗", c: "𝙘", d: "𝙙", e: "ⓔ", f: "𝙛", g: "𝙜", h: "𝙝", i: "Ⓘ", j: "𝙟",
  k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "Ⓞ", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
  u: "ⓤ", v: "𝙫", w: "𝙬", x: "𝙭", y: "ⓨ", z: "𝙯"
});

// Style 126: Khmer Mixed
addStyle('love', 'love_khmer_mixed', '៚ϟ░', '░🖤⃝١٥٧٤', {
  A: "Ⓐ", B: "B͢", C: "C͢", D: "D͢", E: "Ⓔ", F: "F͢", G: "G͢", H: "H͢", I: "Ⓘ", J: "J͢",
  K: "K͢", L: "L͢", M: "M͢", N: "N͢", O: "Ⓞ", P: "P͢", Q: "Q͢", R: "R͢", S: "S͢", T: "T͢",
  U: "U͢", V: "Ⓤ", W: "W͢", X: "X͢", Y: "Ⓨ", Z: "Z͢",
  a: "ⓐ", b: "b͢", c: "c͢", d: "d͢", e: "ⓔ", f: "f͢", g: "g͢", h: "h͢", i: "ⓘ", j: "j͢",
  k: "k͢", l: "l͢", m: "m͢", n: "n͢", o: "ⓞ", p: "p͢", q: "q͢", r: "r͢", s: "s͢", t: "t͢",
  u: "ⓤ", v: "v͢", w: "w͢", x: "x͢", y: "ⓨ", z: "z͢"
});

// Style 127: Butterfly Mixed
addStyle('love', 'love_butterfly_mixed', '🦋⃟', '˚࿔⊹❤️s࿐', {
  A: "𝔸", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝔼", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝕀", J: "𝗝",
  K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝕆", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
  U: "𝕌", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝕐", Z: "𝗭",
  a: "𝕒", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝕖", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝕚", j: "𝙟",
  k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝕠", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
  u: "𝕦", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝕪", z: "𝙯"
});

// Style 128: Border Mixed
addStyle('love', 'love_border_mixed', '║▌✿ ', ' ✿║▌⪻♦:)', {
  A: "ᥲ", B: "𝐵", C: "𝐶", D: "𝐷", E: "ᥱ", F: "𝐹", G: "𝐺", H: "𝐻", I: "Ꭵ", J: "𝐽",
  K: "𝐾", L: "ᥣ", M: "𝑀", N: "𝑁", O: "᥆", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "፝ᴛ",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "ᥱ", f: "𝑓", g: "𝑔", h: "𝘩", i: "Ꭵ", j: "𝑗",
  k: "𝑘", l: "ᥣ", m: "𝑚", n: "𝑛", o: "᥆", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "፝ᴛ",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "ɀ"
});

// Style 129: Arrow Mixed Circle
addStyle('love', 'love_arrow_mixed_circle', '▶●──', ' ꕤ࿐', {
  A: "🅐", B: "🅑", C: "🅒", D: "🅓", E: "🅔", F: "🅕", G: "🅖", H: "🅗", I: "🅘", J: "🅙",
  K: "🅚", L: "🅛", M: "🅜", N: "🅝", O: "🅞", P: "🅟", Q: "🅠", R: "🅡", S: "🅢", T: "🅣",
  U: "🅤", V: "🅥", W: "🅦", X: "🅧", Y: "🅨", Z: "🅩",
  a: "Ⓐ", b: "Ⓑ", c: "Ⓒ", d: "Ⓓ", e: "Ⓔ", f: "Ⓕ", g: "Ⓖ", h: "Ⓗ", i: "Ⓘ", j: "Ⓙ",
  k: "Ⓚ", l: "Ⓛ", m: "Ⓜ", n: "Ⓝ", o: "Ⓞ", p: "Ⓟ", q: "Ⓠ", r: "Ⓡ", s: "Ⓢ", t: "Ⓣ",
  u: "Ⓤ", v: "Ⓥ", w: "Ⓦ", x: "Ⓧ", y: "Ⓨ", z: "Ⓩ"
});

// Style 130: Pentagram Double Struck
addStyle('love', 'love_pentagram_double_struck', '⛥', '⛥💗᪲᪲᪲࿐', {
  A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
  K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
  U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ",
  a: "𝕒̈", b: "𝕓̈", c: "𝕔̈", d: "𝕕̈", e: "𝕖̈", f: "𝕗̈", g: "𝕘̈", h: "𝕙̈", i: "𝕚̈", j: "𝕛̈",
  k: "𝕜̈", l: "𝕝̈", m: "𝕞̈", n: "𝕟̇", o: "𝕠̈", p: "𝕡̈", q: "𝕢̈", r: "𝕣̈", s: "𝕤̈", t: "𝕥̈",
  u: "𝕦̈", v: "𝕧̈", w: "𝕨̈", x: "𝕩̈", y: "𝕪̈", z: "𝕫̈"
});

// Style 131: Number Circle Mixed
addStyle('love', 'love_number_circle_mixed', 'ϟ𖹭ϟ ', ' ϟ𖹭ϟ (⁠ ⁠◜⁠‿⁠◝⁠ ⁠)⁠♡', {
  A: "❼", B: "🅑", C: "🅒", D: "🅓", E: "❸", F: "🅕", G: "🅖", H: "🅗", I: "❶", J: "🅙",
  K: "🅚", L: "🅛", M: "🅜", N: "🅝", O: "❽", P: "🅟", Q: "🅠", R: "🅡", S: "🅢", T: "🅣",
  U: "❾", V: "🅥", W: "🅦", X: "🅧", Y: "❺", Z: "🅩",
  a: "❼", b: "🅑", c: "🅒", d: "🅓", e: "❸", f: "🅕", g: "🅖", h: "🅗", i: "❶", j: "🅙",
  k: "🅚", l: "🅛", m: "🅜", n: "🅝", o: "❽", p: "🅟", q: "🅠", r: "🅡", s: "🅢", t: "🅣",
  u: "❾", v: "🅥", w: "🅦", x: "🅧", y: "❺", z: "🅩"
});

// Style 132: Khmer Mixed Monospace
addStyle('love', 'love_khmer_mixed_monospace', '៚ꕤ', 'ꕤ 🐼᭄', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "ε", F: "𝙵", G: "𝙶", H: "н", I: "𝙸", J: "נ",
  K: "𝙺", L: "ℓ", M: "𝙼", N: "η", O: "σ", P: "𝙿", Q: "𝚀", R: "я", S: "𝚂", T: "τ",
  U: "𝚄", V: "𝚅", W: "ω", X: "𝚇", Y: "𝚈", Z: "ƶ",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "ƒ", g: "𝚐", h: "𝚑", i: "𝚒", j: "נ",
  k: "𝚔", l: "ℓ", m: "𝚖", n: "η", o: "𝚘", p: "𝚙", q: "զ", r: "я", s: "𝚜", t: "τ",
  u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "ƶ"
});

// Style 133: Gothic Colon
addStyle('love', 'love_gothic_colon', ':𐍈: ', ' ...??', {
  A: "𐌰", B: "𐌱", C: "𐌲", D: "𐌳", E: "𐌴", F: "𐍆", G: "𐌾", H: "𐌷", I: "𐌹", J: "𐌻",
  K: "𐌺", L: "𐍊", M: "𐌼", N: "𐌽", O: "𐍈", P: "𐍉", Q: "𐍁", R: "𐍂", S: "𐍃", T: "𐍄",
  U: "𐍀", V: "𝚅", W: "𐌸", X: "𐍇", Y: "𐍅", Z: "𐌶",
  a: "𐌰", b: "𐌱", c: "𐌲", d: "𐌳", e: "𐌴", f: "𐍆", g: "𐌾", h: "𐌷", i: "𐌹", j: "𐌻",
  k: "𐌺", l: "𐍊", m: "𐌼", n: "𐌽", o: "𐍈", p: "𐍉", q: "𐍁", r: "𐍂", s: "𐍃", t: "𐍄",
  u: "𐍀", v: "𝚅", w: "𐌸", x: "𐍇", y: "𐍅", z: "𐌶"
});

// Style 134: Miao Mixed
addStyle('love', 'love_miao_mixed', '៚ꪎ𖹭 ', ' ‹𝟹𓏧𐦍', {
  A: "ꫝ", B: "B", C: "C", D: "D", E: "E̷̷", F: "F", G: "G", H: "H", I: "ɪ᪻ͥᷱ᷍", J: "J",
  K: "K", L: "L", M: "M", N: "N", O: "Ꭷ", P: "P", Q: "Q", R: "R", S: "S", T: "T",
  U: "ꪽ", V: "V", W: "W", X: "X", Y: "Y", Z: "Z",
  a: "ꫝ", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g", h: "h", i: "ɪ᪻ͥᷱ᷍", j: "j",
  k: "k", l: "l", m: "m", n: "n", o: "Ꭷ", p: "p", q: "q", r: "r", s: "s", t: "t",
  u: "ꪽ", v: "v", w: "w", x: "x", y: "y", z: "z"
});

// Style 19: Flower Tai Viet Small Caps
addStyle('love', 'love_flower_tai_viet', '❀˖°', '°˖❀ ᯓ ᡣ𐭩', {
  A: "ꫝ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "𝖎", J: "ᴊ",
  K: "ᴋ", L: "ℓ", M: "ᴍ", N: "𝛈", O: "Ꭷ", P: "ᴘ", Q: "𝛗", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ꪽ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ꫝ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "𝖎", j: "ᴊ",
  k: "ᴋ", l: "ℓ", m: "ᴍ", n: "𝛈", o: "Ꭷ", p: "ᴘ", q: "𝛗", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ꪽ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 20: Subscript Miao
addStyle('love', 'love_subscript_miao', 'ɪ᪻ͥᷱ᷍ ᴀᴍ  ᪲᪲᪲ ', ' 𖹭', {
  A: "ꫝ", B: "B", C: "C", D: "D", E: "E̷̷", F: "F", G: "G", H: "H", I: "!", J: "J",
  K: "K", L: "L", M: "M", N: "N", O: "Ꭷ", P: "P", Q: "Q", R: "R", S: "S", T: "T",
  U: "ꪽ", V: "V", W: "W", X: "X", Y: "Y", Z: "Z",
  a: "ꫝ", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g", h: "h", i: "!", j: "j",
  k: "k", l: "l", m: "m", n: "n", o: "Ꭷ", p: "p", q: "q", r: "r", s: "s", t: "t",
  u: "ꪽ", v: "v", w: "w", x: "x", y: "y", z: "z"
});

// Style 21: Flower Accent Small Caps
addStyle('love', 'love_flower_accent_small', '🌼⃝⃪⃨⃡ ', ' ᡣ𐭩࿐☂', {
  A: "ᴀ̑", B: "ʙ̑", C: "ᴄ̑", D: "ᴅ̑", E: "ᴇ̑", F: "ꜰ̑", G: "ɢ̑", H: "ʜ̑", I: "ɪ̑", J: "ᴊ̑",
  K: "ᴋ̑", L: "ʟ̑", M: "ᴍ̑", N: "ɴ̑", O: "ᴏ̑", P: "ᴘ̑", Q: "ϙ̑", R: "ʀ̑", S: "ꜱ̑", T: "ᴛ̑",
  U: "ᴜ̑", V: "ᴠ̑", W: "ᴡ̑", X: "x̑", Y: "ʏ̑", Z: "ᴢ̑",
  a: "ᴀ̑", b: "ʙ̑", c: "ᴄ̑", d: "ᴅ̑", e: "ᴇ̑", f: "ꜰ̑", g: "ɢ̑", h: "ʜ̑", i: "ɪ̑", j: "ᴊ̑",
  k: "ᴋ̑", l: "ʟ̑", m: "ᴍ̑", n: "ɴ̑", o: "ᴏ̑", p: "ᴘ̑", q: "ϙ̑", r: "ʀ̑", s: "ꜱ̑", t: "ᴛ̑",
  u: "ᴜ̑", v: "ᴠ̑", w: "ᴡ̑", x: "x̑", y: "ʏ̑", z: "ᴢ̑"
});

// Style 22: MR Tai Viet
addStyle('love', 'love_mr_tai_viet', '✿ ᴍʀ !╣', '╠! ✿', {
  A: "ꫝ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "𝖎", J: "ᴊ",
  K: "ᴋ", L: "ℓ", M: "ᴍ", N: "𝛈", O: "Ꭷ", P: "ᴘ", Q: "𝛗", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ꪽ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ꫝ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "𝖎", j: "ᴊ",
  k: "ᴋ", l: "ℓ", m: "ᴍ", n: "𝛈", o: "Ꭷ", p: "ᴘ", q: "𝛗", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ꪽ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 23: Star Greek
addStyle('love', 'love_star_greek', '✰᭄ ', ' ✰࿐', {
  A: "Α", B: "Β", C: "Ͻ", D: "Ɗ", E: "Σ", F: "Ƒ", G: "Ɠ", H: "Ν", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
  k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ"
});

// Style 24: Cute Butterfly Accent
addStyle('love', 'love_cute_butterfly_accent', '🦋⃟ᶜᵘᵗ͢͢͢ᵉ ', ' ✿࿐', {
  A: "ᴀ̑", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ̑", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ̑", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ̑", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ̑", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ̑", Z: "ᴢ",
  a: "ᴀ̑", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ̑", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ̑", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ̑", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ̑", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ̑", z: "ᴢ"
});

// Style 25: Short Stroke
addStyle('love', 'love_short_stroke_2', 'ϻᎮ ', ' ⍣❣🕊', {
  A: "A̶", B: "B̶", C: "C̶", D: "D̶", E: "E̶", F: "F̶", G: "G̶", H: "H̶", I: "I̶", J: "J̶",
  K: "K̶", L: "L̶", M: "M̶", N: "N̶", O: "O̶", P: "P̶", Q: "Q̶", R: "R̶", S: "S̶", T: "T̶",
  U: "U̶", V: "V̶", W: "W̶", X: "X̶", Y: "Y̶", Z: "Z̶",
  a: "a̶", b: "b̶", c: "c̶", d: "d̶", e: "e̶", f: "f̶", g: "g̶", h: "h̶", i: "i̶", j: "j̶",
  k: "k̶", l: "l̶", m: "m̶", n: "n̶", o: "o̶", p: "p̶", q: "q̶", r: "r̶", s: "s̶", t: "t̶",
  u: "u̶", v: "v̶", w: "w̶", x: "x̶", y: "y̶", z: "z̶"
});

// Style 26: Tai Italic Math
addStyle('love', 'love_tai_italic_math', '   ᪲᪲᪲メ ', ' メ▼・ᴥ・▼', {
  A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
  K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
});

// Style 27: Miao Number Negative Circle
addStyle('love', 'love_miao_number_negative', 'N𖹭.1 ▼', ' ꪎ・ᴥ・ꪎ💖', {
  A: "🅐", B: "🅑", C: "🅒", D: "🅓", E: "🅔", F: "🅕", G: "🅖", H: "🅗", I: "🅘", J: "🅙",
  K: "🅚", L: "🅛", M: "🅜", N: "🅝", O: "🅞", P: "🅟", Q: "🅠", R: "🅡", S: "🅢", T: "🅣",
  U: "🅤", V: "🅥", W: "🅦", X: "🅧", Y: "🅨", Z: "🅩",
  a: "🅐", b: "🅑", c: "🅒", d: "🅓", e: "🅔", f: "🅕", g: "🅖", h: "🅗", i: "🅘", j: "🅙",
  k: "🅚", l: "🅛", m: "🅜", n: "🅝", o: "🅞", p: "🅟", q: "🅠", r: "🅡", s: "🅢", t: "🅣",
  u: "🅤", v: "🅥", w: "🅦", x: "🅧", y: "🅨", z: "🅩"
});

// Style 28: Simple Normal
addStyle('love', 'love_simple_normal', 'ᥒᥴ ᴥ ', ' ✰══✰', {
  A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H", I: "I", J: "J",
  K: "K", L: "L", M: "M", N: "N", O: "O", P: "P", Q: "Q", R: "R", S: "S", T: "T",
  U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Z",
  a: "a", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g", h: "h", i: "I", j: "j",
  k: "k", l: "l", m: "m", n: "n", o: "o", p: "p", q: "q", r: "r", s: "s", t: "t",
  u: "u", v: "v", w: "w", x: "x", y: "y", z: "z"
});

// Style 29: Official Cursive
addStyle('love', 'love_official_cursive', '𝒪𝒻𝒻𝒾𝒸𝒾𝒶𝓁_', ' ⋆˚࿔⊹ ࣪😇', {
  A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘", J: "𝓙",
  K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣",
  U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩",
  a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳",
  k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽",
  u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃"
});

// Style 30: Armenian Accent
addStyle('love', 'love_armenian_accent_2', '⛥', ' ✿ ᴸ̸ᵒ̸ⱽ̸ᵉ̸ʳ̸ 💘', {
  A: "A֟", B: "B֟", C: "C֟", D: "D֟", E: "E֟", F: "F֟", G: "G֟", H: "H֟", I: "I֟", J: "J֟",
  K: "K֟", L: "L֟", M: "M֟", N: "N֟", O: "O֟", P: "P֟", Q: "Q֟", R: "R֟", S: "S֟", T: "T֟",
  U: "U֟", V: "V֟", W: "W֟", X: "X֟", Y: "Y֟", Z: "Z֟",
  a: "a֟", b: "b֟", c: "c֟", d: "d֟", e: "e֟", f: "f֟", g: "g֟", h: "h֟", i: "i֟", j: "j֟",
  k: "k֟", l: "l֟", m: "m֟", n: "n֟", o: "o֟", p: "p֟", q: "q֟", r: "r֟", s: "s֟", t: "t֟",
  u: "u֟", v: "v֟", w: "w֟", x: "x֟", y: "y֟", z: "z֟"
});

// Style 31: XX Accent Small Caps
addStyle('love', 'love_xx_accent_small', 'Xx▼', '▼xX ~♡', {
  A: "ᴀ̑", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ̑", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ̑", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ̑", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ̑", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ̑", Z: "ᴢ",
  a: "ᴀ̑", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ̑", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ̑", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ̑", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ̑", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ̑", z: "ᴢ"
});

// Style 32: Gothic Script Heart
addStyle('love', 'love_gothic_script_heart', '┊✿┊', ' ᭄ ♡', {
  A: "𐌰", B: "𐌱", C: "𐌲", D: "𐌳", E: "𐌴", F: "𐍆", G: "𐌾", H: "𐌷", I: "𐌹", J: "𐌻",
  K: "𐌺", L: "𐍊", M: "𐌼", N: "𐌽", O: "𐍈", P: "𐍉", Q: "𐍁", R: "𐍂", S: "𐍃", T: "𐍄",
  U: "𐍀", V: "𝚅", W: "𐌸", X: "𐍇", Y: "𐍅", Z: "𐌶",
  a: "𐌰", b: "𐌱", c: "𐌲", d: "𐌳", e: "𐌴", f: "𐍆", g: "𐌾", h: "𐌷", i: "𐌹", j: "𐌻",
  k: "𐌺", l: "𐍊", m: "𐌼", n: "𐌽", o: "𐍈", p: "𐍉", q: "𐍁", r: "𐍂", s: "𐍃", t: "𐍄",
  u: "𐍀", v: "𝚅", w: "𐌸", x: "𐍇", y: "𐍅", z: "𐌶"
});

// Style 1: Small Caps with Numbers
addStyle('gamer', 'gamer_small_caps_numbers', '', ' ⁹⁹⁹⁺', {
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 2: Korean Boss Sans
addStyle('gamer', 'gamer_korean_boss_sans', '모ܔ☆⃟', ' ࿐ᴮᴼˢˢ', {
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
  a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
});

// Style 3: Smiley Tai Viet Sans
addStyle('gamer', 'gamer_smiley_tai_viet', '╰‿╯', '   ꤪꤨꤪ𝟗𝟓᭄', {
  A: "ꫝ", B: "𝘉", C: "Ͻ", D: "𝘋", E: "Ξ", F: "𝘍", G: "𝘎", H: "𝘏", I: "Ί", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "Ꮎ", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "Ü", V: "𝘝", W: "𝘞", X: "𝘟", Y: "Y", Z: "Ż",
  a: "ꫝ", b: "𝘣", c: "Ͻ", d: "𝘥", e: "ξ", f: "𝘧", g: "𝘨", h: "𝘩", i: "ι", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "Ꮎ", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "ü", v: "𝘷", w: "𝘸", x: "𝘹", y: "y", z: "ż"
});

// Style 4: MR Armenian Accent
addStyle('gamer', 'gamer_mr_armenian', 'ᴹᴿメ𓄂', ' Ⓥ', {
  A: "A֟", B: "B֟", C: "C֟", D: "D֟", E: "E֟", F: "F֟", G: "G֟", H: "H֟", I: "I֟", J: "J֟",
  K: "K֟", L: "L֟", M: "M֟", N: "N֟", O: "O֟", P: "P֟", Q: "Q֟", R: "R֟", S: "S֟", T: "T֟",
  U: "U֟", V: "V֟", W: "W֟", X: "X֟", Y: "Y֟", Z: "Z֟",
  a: "a֟", b: "b֟", c: "c֟", d: "d֟", e: "e֟", f: "f֟", g: "g֟", h: "h֟", i: "i֟", j: "j֟",
  k: "k֟", l: "l֟", m: "m֟", n: "n֟", o: "o֟", p: "p֟", q: "q֟", r: "r֟", s: "s֟", t: "t֟",
  u: "u֟", v: "v֟", w: "w֟", x: "x֟", y: "y֟", z: "z֟"
});

// Style 5: Boxed Circled
addStyle('gamer', 'gamer_boxed_circled', '┋', '┋𒆜❼❽࿐', {
  A: "Ⓐ", B: "Ⓑ", C: "Ⓒ", D: "Ⓓ", E: "Ⓔ", F: "Ⓕ", G: "Ⓖ", H: "Ⓗ", I: "Ⓘ", J: "Ⓙ",
  K: "Ⓚ", L: "Ⓛ", M: "Ⓜ", N: "Ⓝ", O: "Ⓞ", P: "Ⓟ", Q: "Ⓠ", R: "Ⓡ", S: "Ⓢ", T: "Ⓣ",
  U: "Ⓤ", V: "Ⓥ", W: "Ⓦ", X: "Ⓧ", Y: "Ⓨ", Z: "Ⓩ",
  a: "ⓐ", b: "ⓑ", c: "ⓒ", d: "ⓓ", e: "ⓔ", f: "ⓕ", g: "ⓖ", h: "ⓗ", i: "ⓘ", j: "ⓙ",
  k: "ⓚ", l: "ⓛ", m: "ⓜ", n: "ⓝ", o: "ⓞ", p: "ⓟ", q: "ⓠ", r: "ⓡ", s: "ⓢ", t: "ⓣ",
  u: "ⓤ", v: "ⓥ", w: "ⓦ", x: "ⓧ", y: "ⓨ", z: "ⓩ"
});

// Style 7: Cambodian Bold Italic
addStyle('gamer', 'gamer_cambodian_bold_italic', '៚7ꪎ ', ' ϟϟϟ', {
  A: "𝑨", B: "𝑩", C: "𝑪", D: "𝑫", E: "𝑬", F: "𝑭", G: "𝑮", H: "𝑯", I: "𝑰", J: "𝑱",
  K: "𝑲", L: "𝑳", M: "𝑴", N: "𝑵", O: "𝑶", P: "𝑷", Q: "𝑸", R: "𝑹", S: "𝑺", T: "𝑻",
  U: "𝑼", V: "𝑽", W: "𝑾", X: "𝑿", Y: "𝒀", Z: "𝒁",
  a: "𝒂", b: "𝒃", c: "𝒄", d: "𝒅", e: "𝒆", f: "𝒇", g: "𝒈", h: "𝒉", i: "𝒊", j: "𝒋",
  k: "𝒌", l: "𝒍", m: "𝒎", n: "𝒏", o: "𝒐", p: "𝒑", q: "𝒒", r: "𝒓", s: "𝒔", t: "𝒕",
  u: "𝒖", v: "𝒗", w: "𝒘", x: "𝒙", y: "𝒚", z: "𝒛"
});

// Style 8: NP Tai Viet Sans
addStyle('gamer', 'gamer_np_tai_viet', 'Ɲᴾ ┋', ' ៚ʏᴛ', {
  A: "ꫝ", B: "𝘉", C: "Ͻ", D: "𝘋", E: "Ξ", F: "𝘍", G: "𝘎", H: "𝘏", I: "Ί", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "Ꮎ", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "Ü", V: "𝘝", W: "𝘞", X: "𝘟", Y: "Y", Z: "Ż",
  a: "ꫝ", b: "𝘣", c: "Ͻ", d: "𝘥", e: "ξ", f: "𝘧", g: "𝘨", h: "𝘩", i: "ι", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "Ꮎ", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "ü", v: "𝘷", w: "𝘸", x: "𝘹", y: "y", z: "ż"
});

// Style 9: 4x Small Caps
addStyle('gamer', 'gamer_4x_small_caps', '⁴ˣ ⸙ ', ' 모...', {
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 10: MR Degree Monospace
addStyle('gamer', 'gamer_mr_degree_monospace', 'ᴹᴿ°᭄✰', '࿐⓿❼', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
  K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
  U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
  k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
  u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣"
});

// Style 11: Cambodian Greek
addStyle('gamer', 'gamer_cambodian_greek', '៚', ' ‼  ᴳ̸ᴬ̸ᴹ̸ᴱ̸ᴿ̸', {
  A: "Α", B: "Β", C: "Ͻ", D: "Ɗ", E: "Σ", F: "Ƒ", G: "Ɠ", H: "Ν", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
  k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ"
});

// Style 12: Star Dotted Small Caps
addStyle('gamer', 'gamer_star_dotted_small_caps', '꧁★', '· ∞࿐', {
  A: "ᴀ·", B: "ʙ·", C: "ᴄ·", D: "ᴅ·", E: "ᴇ·", F: "ꜰ·", G: "ɢ·", H: "ʜ·", I: "ɪ·", J: "ᴊ·",
  K: "ᴋ·", L: "ʟ·", M: "ᴍ·", N: "ɴ·", O: "ᴏ·", P: "ᴘ·", Q: "ǫ·", R: "ʀ·", S: "ꜱ·", T: "ᴛ·",
  U: "ᴜ·", V: "ᴠ·", W: "ᴡ·", X: "x·", Y: "ʏ·", Z: "ᴢ·",
  a: "ᴀ·", b: "ʙ·", c: "ᴄ·", d: "ᴅ·", e: "ᴇ·", f: "ꜰ·", g: "ɢ·", h: "ʜ·", i: "ɪ·", j: "ᴊ·",
  k: "ᴋ·", l: "ʟ·", m: "ᴍ·", n: "ɴ·", o: "ᴏ·", p: "ᴘ·", q: "ǫ·", r: "ʀ·", s: "ꜱ·", t: "ᴛ·",
  u: "ᴜ·", v: "ᴠ·", w: "ᴡ·", x: "x·", y: "ʏ·", z: "ᴢ·"
});

// Style 13: Umbrella Gothic
addStyle('gamer', 'gamer_umbrella_gothic', '𝑀ℎ☂░ ', ' ░ ࿐❹❷⓿', {
  A: "𐌰", B: "𐌱", C: "𐌲", D: "𐌳", E: "𐌴", F: "𐍆", G: "𐌾", H: "𐌷", I: "𐌹", J: "𐌻",
  K: "𐌺", L: "𐍊", M: "𐌼", N: "𐌽", O: "𐍈", P: "𐍉", Q: "𐍁", R: "𐍂", S: "𐍃", T: "𐍄",
  U: "𐍀", V: "𝚅", W: "𐌸", X: "𐍇", Y: "𐍅", Z: "𐌶",
  a: "𐌰", b: "𐌱", c: "𐌲", d: "𐌳", e: "𐌴", f: "𐍆", g: "𐌾", h: "𐌷", i: "𐌹", j: "𐌻",
  k: "𐌺", l: "𐍊", m: "𐌼", n: "𐌽", o: "𐍈", p: "𐍉", q: "𐍁", r: "𐍂", s: "𐍃", t: "𐍄",
  u: "𐍀", v: "𝚅", w: "𐌸", x: "𐍇", y: "𐍅", z: "𐌶"
});

// Style 14: Cambodian Small Caps Numbers
addStyle('gamer', 'gamer_cambodian_small_caps_numbers', '៚', ' ❶❶ ✓', {
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 15: Box Bold Sans
addStyle('gamer', 'gamer_box_bold_sans', '▱▰▱', '▱▰▱', {
  A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝",
  K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
  U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭",
  a: "𝙖", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝙚", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝙞", j: "𝙟",
  k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝙤", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
  u: "𝙪", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝙮", z: "𝙯"
});

// Style 19: Circled Monospace
addStyle('gamer', 'gamer_circled_monospace', 'Ⓥ ', ' 𖣠═━┈⁰⁶', {
  A: "Ⓐ", B: "𝗕", C: "𝗖", D: "𝗗", E: "Ⓔ", F: "𝗙", G: "𝗚", H: "𝗛", I: "Ⓘ", J: "𝗝",
  K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "Ⓞ", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
  U: "Ⓤ", V: "𝗩", W: "𝗪", X: "𝗫", Y: "Ⓨ", Z: "𝗭",
  a: "ⓐ", b: "𝙗", c: "𝙘", d: "𝙙", e: "ⓔ", f: "𝙛", g: "𝙜", h: "𝙝", i: "Ⓘ", j: "𝙟",
  k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "Ⓞ", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
  u: "ⓤ", v: "𝙫", w: "𝙬", x: "𝙭", y: "ⓨ", z: "𝙯"
});

// Style 20: Cambodian Xi Circled
addStyle('gamer', 'gamer_cambodian_xi_circled', '៚ϟ', 'ϟ ☯모', {
  A: "Ⓐ", B: "B͢", C: "C͢", D: "D͢", E: "Ⓔ", F: "F͢", G: "G͢", H: "H͢", I: "Ⓘ", J: "J͢",
  K: "K͢", L: "L͢", M: "M͢", N: "N͢", O: "Ⓞ", P: "P͢", Q: "Q͢", R: "R͢", S: "S͢", T: "T͢",
  U: "U͢", V: "Ⓤ", W: "W͢", X: "X͢", Y: "Ⓨ", Z: "Z͢",
  a: "ⓐ", b: "b͢", c: "c͢", d: "d͢", e: "ⓔ", f: "f͢", g: "g͢", h: "h͢", i: "ⓘ", j: "j͢",
  k: "k͢", l: "l͢", m: "m͢", n: "n͢", o: "ⓞ", p: "p͢", q: "q͢", r: "r͢", s: "s͢", t: "t͢",
  u: "ⓤ", v: "v͢", w: "w͢", x: "x͢", y: "ⓨ", z: "z͢"
});

// Style 21: Devil Mixed Style
addStyle('gamer', 'gamer_devil_mixed', '╰⁔╯ᴅᴇᴠɪʟ⚠', '˚࿔⊹࿐➊➐', {
  A: "𝔸", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝔼", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝕀", J: "𝗝",
  K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝕆", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
  U: "𝕌", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝕐", Z: "𝗭",
  a: "𝕒", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝕖", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝕚", j: "𝙟",
  k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝕠", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
  u: "𝕦", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝕪", z: "𝙯"
});

// Style 22: Pro Mixed Negative
addStyle('gamer', 'gamer_pro_mixed_negative', '▶Ꭾʀᴏ 卄', ' 모࿐', {
  A: "🅐", B: "🅑", C: "🅒", D: "🅓", E: "🅔", F: "🅕", G: "🅖", H: "🅗", I: "🅘", J: "🅙",
  K: "🅚", L: "🅛", M: "🅜", N: "🅝", O: "🅞", P: "🅟", Q: "🅠", R: "🅡", S: "🅢", T: "🅣",
  U: "🅤", V: "🅥", W: "🅦", X: "🅧", Y: "🅨", Z: "🅩",
  a: "Ⓐ", b: "Ⓑ", c: "Ⓒ", d: "Ⓓ", e: "Ⓔ", f: "Ⓕ", g: "Ⓖ", h: "Ⓗ", i: "Ⓘ", j: "Ⓙ",
  k: "Ⓚ", l: "Ⓛ", m: "Ⓜ", n: "Ⓝ", o: "Ⓞ", p: "Ⓟ", q: "Ⓠ", r: "Ⓡ", s: "Ⓢ", t: "Ⓣ",
  u: "Ⓤ", v: "Ⓥ", w: "Ⓦ", x: "Ⓧ", y: "Ⓨ", z: "Ⓩ"
});

// Style 23: Pentagram Double Struck
addStyle('gamer', 'gamer_pentagram_double_struck', '⛥', '⛥࿐', {
  A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
  K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
  U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ",
  a: "𝕒̈", b: "𝕓̈", c: "𝕔̈", d: "𝕕̈", e: "𝕖̈", f: "𝕗̈", g: "𝕘̈", h: "𝕙̈", i: "𝕚̈", j: "𝕛̈",
  k: "𝕜̈", l: "𝕝̈", m: "𝕞̈", n: "𝕟̇", o: "𝕠̈", p: "𝕡̈", q: "𝕢̈", r: "𝕣̈", s: "𝕤̈", t: "𝕥̈",
  u: "𝕦̈", v: "𝕧̈", w: "𝕨̈", x: "𝕩̈", y: "𝕪̈", z: "𝕫̈"
});

// Style 24: Koppa Number Negative
addStyle('gamer', 'gamer_koppa_number_negative', 'ϟ ', ' ⓥϟ모', {
  A: "❼", B: "🅑", C: "🅒", D: "🅓", E: "❸", F: "🅕", G: "🅖", H: "🅗", I: "❶", J: "🅙",
  K: "🅚", L: "🅛", M: "🅜", N: "🅝", O: "❽", P: "🅟", Q: "🅠", R: "🅡", S: "🅢", T: "🅣",
  U: "❾", V: "🅥", W: "🅦", X: "🅧", Y: "❺", Z: "🅩",
  a: "❼", b: "🅑", c: "🅒", d: "🅓", e: "❸", f: "🅕", g: "🅖", h: "🅗", i: "❶", j: "🅙",
  k: "🅚", l: "🅛", m: "🅜", n: "🅝", o: "❽", p: "🅟", q: "🅠", r: "🅡", s: "🅢", t: "🅣",
  u: "❾", v: "🅥", w: "🅦", x: "🅧", y: "❺", z: "🅩"
});

// Style 25: Khmer Mixed Monospace
addStyle('gamer', 'gamer_khmer_mixed', '៚ꕤ', 'ꕤ ᭄ ❾❾', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "ε", F: "𝙵", G: "𝙶", H: "н", I: "𝙸", J: "נ",
  K: "𝙺", L: "ℓ", M: "𝙼", N: "η", O: "σ", P: "𝙿", Q: "𝚀", R: "я", S: "𝚂", T: "τ",
  U: "𝚄", V: "𝚅", W: "ω", X: "𝚇", Y: "𝚈", Z: "ƶ",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "ƒ", g: "𝚐", h: "𝚑", i: "𝚒", j: "נ",
  k: "𝚔", l: "ℓ", m: "𝚖", n: "η", o: "𝚘", p: "𝚙", q: "զ", r: "я", s: "𝚜", t: "τ",
  u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "ƶ"
});

// Style 26: Chinese ASCII
addStyle('gamer', 'gamer_chinese_ascii', '', ' ╰⁔╯', {
  A: "卂", B: "乃", C: "匚", D: "刀", E: "乇", F: "千", G: "Ꮆ", H: "卄", I: "丨", J: "ﾌ",
  K: "Ҝ", L: "ㄥ", M: "爪", N: "几", O: "ㄖ", P: "卩", Q: "Ҩ", R: "尺", S: "丂", T: "ㄒ",
  U: "ㄩ", V: "ᐯ", W: "山", X: "乂", Y: "ㄚ", Z: "乙",
  a: "卂", b: "乃", c: "匚", d: "刀", e: "乇", f: "千", g: "Ꮆ", h: "卄", i: "丨", j: "ﾌ",
  k: "Ҝ", l: "ㄥ", m: "爪", n: "几", o: "ㄖ", p: "卩", q: "Ҩ", r: "尺", s: "丂", t: "ㄒ",
  u: "ㄩ", v: "ᐯ", w: "山", x: "乂", y: "ㄚ", z: "乙"
});

// Style 27: PC Gothic
addStyle('gamer', 'gamer_pc_gothic', 'P̶C͢  ', ' 모.??', {
  A: "𐌰", B: "𐌱", C: "𐌲", D: "𐌳", E: "𐌴", F: "𐍆", G: "𐌾", H: "𐌷", I: "𐌹", J: "𐌻",
  K: "𐌺", L: "𐍊", M: "𐌼", N: "𐌽", O: "𐍈", P: "𐍉", Q: "𐍁", R: "𐍂", S: "𐍃", T: "𐍄",
  U: "𐍀", V: "𝚅", W: "𐌸", X: "𐍇", Y: "𐍅", Z: "𐌶",
  a: "𐌰", b: "𐌱", c: "𐌲", d: "𐌳", e: "𐌴", f: "𐍆", g: "𐌾", h: "𐌷", i: "𐌹", j: "𐌻",
  k: "𐌺", l: "𐍊", m: "𐌼", n: "𐌽", o: "𐍈", p: "𐍉", q: "𐍁", r: "𐍂", s: "𐍃", t: "𐍄",
  u: "𐍀", v: "𝚅", w: "𐌸", x: "𐍇", y: "𐍅", z: "𐌶"
});

// Style 28: Tai Viet Style
addStyle('gamer', 'gamer_tai_viet_style', '៚7ꪎ ', ' ‹𝟹모', {
  A: "ꫝ", B: "B", C: "C", D: "D", E: "E̷̷", F: "F", G: "G", H: "H", I: "ɪ᪻ͥᷱ᷍", J: "J",
  K: "K", L: "L", M: "M", N: "N", O: "Ꭷ", P: "P", Q: "Q", R: "R", S: "S", T: "T",
  U: "ꪽ", V: "V", W: "W", X: "X", Y: "Y", Z: "Z",
  a: "ꫝ", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g", h: "h", i: "ɪ᪻ͥᷱ᷍", j: "j",
  k: "k", l: "l", m: "m", n: "n", o: "Ꭷ", p: "p", q: "q", r: "r", s: "s", t: "t",
  u: "ꪽ", v: "v", w: "w", x: "x", y: "y", z: "z"
});

// Style 29: Love Tai Viet
addStyle('gamer', 'gamer_love_tai_viet', 'ℓo͟v͟ꫀ ᪲᪲᪲𖹭 ', '  ᪲᪲᪲˖ 𓄋', {
  A: "ꫝ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "𝖎", J: "ᴊ",
  K: "ᴋ", L: "ℓ", M: "ᴍ", N: "𝛈", O: "Ꭷ", P: "ᴘ", Q: "𝛗", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ꪽ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ꫝ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "𝖎", j: "ᴊ",
  k: "ᴋ", l: "ℓ", m: "ᴍ", n: "𝛈", o: "Ꭷ", p: "ᴘ", q: "𝛗", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ꪽ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 30: Special Tai Viet
addStyle('gamer', 'gamer_special_tai_viet', 'ɪ᪻ͥᷱ᷍ ᴀᴍ  ᪲᪲᪲ ', ' ꪎ⁔ꪎ', {
  A: "ꫝ", B: "B", C: "C", D: "D", E: "E̷̷", F: "F", G: "G", H: "H", I: "!", J: "J",
  K: "K", L: "L", M: "M", N: "N", O: "Ꭷ", P: "P", Q: "Q", R: "R", S: "S", T: "T",
  U: "ꪽ", V: "V", W: "W", X: "X", Y: "Y", Z: "Z",
  a: "ꫝ", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g", h: "h", i: "!", j: "j",
  k: "k", l: "l", m: "m", n: "n", o: "Ꭷ", p: "p", q: "q", r: "r", s: "s", t: "t",
  u: "ꪽ", v: "v", w: "w", x: "x", y: "y", z: "z"
});

// Style 31: Yin Yang Small Caps
addStyle('gamer', 'gamer_yin_yang_small_caps', '╰⁔╯☯ ', ' ⓥ࿐', {
  A: "ᴀ̑", B: "ʙ̑", C: "ᴄ̑", D: "ᴅ̑", E: "ᴇ̑", F: "ꜰ̑", G: "ɢ̑", H: "ʜ̑", I: "ɪ̑", J: "ᴊ̑",
  K: "ᴋ̑", L: "ʟ̑", M: "ᴍ̑", N: "ɴ̑", O: "ᴏ̑", P: "ᴘ̑", Q: "ϙ̑", R: "ʀ̑", S: "ꜱ̑", T: "ᴛ̑",
  U: "ᴜ̑", V: "ᴠ̑", W: "ᴡ̑", X: "x̑", Y: "ʏ̑", Z: "ᴢ̑",
  a: "ᴀ̑", b: "ʙ̑", c: "ᴄ̑", d: "ᴅ̑", e: "ᴇ̑", f: "ꜰ̑", g: "ɢ̑", h: "ʜ̑", i: "ɪ̑", j: "ᴊ̑",
  k: "ᴋ̑", l: "ʟ̑", m: "ᴍ̑", n: "ɴ̑", o: "ᴏ̑", p: "ᴘ̑", q: "ϙ̑", r: "ʀ̑", s: "ꜱ̑", t: "ᴛ̑",
  u: "ᴜ̑", v: "ᴠ̑", w: "ᴡ̑", x: "x̑", y: "ʏ̑", z: "ᴢ̑"
});

// Style 32: VIP Mixed Small Caps
addStyle('gamer', 'gamer_vip_mixed_small_caps', '℣ɪᴘ᭄ ', ' ✿࿐⁹⁹⁹⁺', {
  A: "ᴀ̑", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ̑", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ̑", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ̑", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ̑", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ̑", Z: "ᴢ",
  a: "ᴀ̑", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ̑", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ̑", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ̑", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ̑", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ̑", z: "ᴢ"
});

// Style 33: Pagal Standard
addStyle('gamer', 'gamer_pagal_standard', 'ᎮᴀɢᴀᏞメ', ' 🅥', {
  A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H", I: "I", J: "J",
  K: "K", L: "L", M: "M", N: "N", O: "O", P: "P", Q: "Q", R: "R", S: "S", T: "T",
  U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Z",
  a: "a", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g", h: "h", i: "I", j: "j",
  k: "k", l: "l", m: "m", n: "n", o: "o", p: "p", q: "q", r: "r", s: "s", t: "t",
  u: "u", v: "v", w: "w", x: "x", y: "y", z: "z"
});

// Style 34: Short Stroke Simple
addStyle('gamer', 'gamer_short_stroke_simple', 'ϻᎮ ', ' ⍣❣꧂', {
  A: "A̶", B: "B̶", C: "C̶", D: "D̶", E: "E̶", F: "F̶", G: "G̶", H: "H̶", I: "I̶", J: "J̶",
  K: "K̶", L: "L̶", M: "M̶", N: "N̶", O: "O̶", P: "P̶", Q: "Q̶", R: "R̶", S: "S̶", T: "T̶",
  U: "U̶", V: "V̶", W: "W̶", X: "X̶", Y: "Y̶", Z: "Z̶",
  a: "a̶", b: "b̶", c: "c̶", d: "d̶", e: "e̶", f: "f̶", g: "g̶", h: "h̶", i: "i̶", j: "j̶",
  k: "k̶", l: "l̶", m: "m̶", n: "n̶", o: "o̶", p: "p̶", q: "q̶", r: "r̶", s: "s̶", t: "t̶",
  u: "u̶", v: "v̶", w: "w̶", x: "x̶", y: "y̶", z: "z̶"
});

// Style 35: Book Mixed Small Caps
addStyle('gamer', 'gamer_book_mixed_small_caps', 'ʙ➋ᴋ ᭄', ' ⍣⸙⍣ㅤ', {
  A: "ᴀ̑", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ̑", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ̑", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ̑", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ̑", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ̑", Z: "ᴢ",
  a: "ᴀ̑", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ̑", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ̑", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ̑", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ̑", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ̑", z: "ᴢ"
});

// Style 36: GJ Italic Math
addStyle('gamer', 'gamer_gj_italic_math', '𝑮𝑱  ᪲᪲᪲メ ', ' メ 모', {
  A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
  K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
});

// Style 37: Star Mixed Sans
addStyle('gamer', 'gamer_star_mixed_sans', '—͟͞͞★ ', ' Ξ ✓', {
  A: "ꫝ", B: "𝘉", C: "Ͻ", D: "𝘋", E: "Ξ", F: "𝘍", G: "𝘎", H: "𝘏", I: "Ί", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "Ꮎ", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "Ü", V: "𝘝", W: "𝘞", X: "𝘟", Y: "Y", Z: "Ż",
  a: "ꫝ", b: "𝘣", c: "Ͻ", d: "𝘥", e: "ξ", f: "𝘧", g: "𝘨", h: "𝘩", i: "Ί", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "Ꮎ", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
  u: "ü", v: "𝘷", w: "𝘸", x: "𝘹", y: "y", z: "ż"
});

// Style 38: Diamond The Name
addStyle('gamer', 'gamer_diamond_the_name', '❖Ƭʜᴇ ▼', '▼ ɴ×ᴛ', {
  A: "ᴀ̑", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ̑", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ̑", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ̑", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ̑", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ̑", Z: "ᴢ",
  a: "ᴀ̑", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ̑", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ̑", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ̑", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ̑", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ̑", z: "ᴢ"
});

// Style 39: Korean Live
addStyle('gamer', 'gamer_korean_live', '모┊', '┊ 𝐿𝑖𝑣𝑒 !!', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "ε", F: "𝙵", G: "𝙶", H: "н", I: "𝙸", J: "נ",
  K: "𝙺", L: "ℓ", M: "𝙼", N: "η", O: "σ", P: "𝙿", Q: "𝚀", R: "я", S: "𝚂", T: "τ",
  U: "𝚄", V: "𝚅", W: "ω", X: "𝚇", Y: "𝚈", Z: "ƶ",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "ƒ", g: "𝚐", h: "𝚑", i: "𝚒", j: "נ",
  k: "𝚔", l: "ℓ", m: "𝚖", n: "η", o: "𝚘", p: "𝚙", q: "զ", r: "я", s: "𝚜", t: "τ",
  u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "ƶ"
});

// Style 40: MR Flower Box
addStyle('gamer', 'gamer_mr_flower_box', 'ᴍʀ ✿╣', '╠✿ 亗', {
  A: "ꫝ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "𝖎", J: "ᴊ",
  K: "ᴋ", L: "ℓ", M: "ᴍ", N: "𝛈", O: "Ꭷ", P: "ᴘ", Q: "𝛗", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ꪽ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ꫝ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "𝖎", j: "ᴊ",
  k: "ᴋ", l: "ℓ", m: "ᴍ", n: "𝛈", o: "Ꭷ", p: "ᴘ", q: "𝛗", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ꪽ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 41: Devil Fullwidth
addStyle('gamer', 'gamer_devil_fullwidth', 'ᴰᵃ͢͢͢ᵛⁱˡ ', '࿐', {
  A: "Ａ", B: "Ｂ", C: "Ｃ", D: "Ｄ", E: "Ｅ", F: "Ｆ", G: "Ｇ", H: "Ｈ", I: "Ｉ", J: "Ｊ",
  K: "Ｋ", L: "Ｌ", M: "Ｍ", N: "Ｎ", O: "Ｏ", P: "Ｐ", Q: "Ｑ", R: "Ｒ", S: "Ｓ", T: "Ｔ",
  U: "Ｕ", V: "Ｖ", W: "Ｗ", X: "Ｘ", Y: "Ｙ", Z: "Ｚ",
  a: "ａ", b: "ｂ", c: "ｃ", d: "ｄ", e: "ｅ", f: "ｆ", g: "ｇ", h: "ｈ", i: "ｉ", j: "ｊ",
  k: "ｋ", l: "ｌ", m: "ｍ", n: "ｎ", o: "ｏ", p: "ｐ", q: "ｑ", r: "ｒ", s: "ｓ", t: "ｔ",
  u: "ｕ", v: "ｖ", w: "ｗ", x: "ｘ", y: "ｙ", z: "ｚ"
});

// Style 42: Devil Fullwidth Korean
addStyle('gamer', 'gamer_devil_fullwidth_korean', 'ᴰᵃ͢͢͢ᵛⁱˡ ', '⁔모࿐', {
  A: "Ａ", B: "Ｂ", C: "Ｃ", D: "Ｄ", E: "Ｅ", F: "Ｆ", G: "Ｇ", H: "Ｈ", I: "Ｉ", J: "Ｊ",
  K: "Ｋ", L: "Ｌ", M: "Ｍ", N: "Ｎ", O: "Ｏ", P: "Ｐ", Q: "Ｑ", R: "Ｒ", S: "Ｓ", T: "Ｔ",
  U: "Ｕ", V: "Ｖ", W: "Ｗ", X: "Ｘ", Y: "Ｙ", Z: "Ｚ",
  a: "ａ", b: "ｂ", c: "ｃ", d: "ｄ", e: "ｅ", f: "ｆ", g: "ｇ", h: "ｈ", i: "ｉ", j: "ｊ",
  k: "ｋ", l: "ｌ", m: "ｍ", n: "ｎ", o: "ｏ", p: "ｐ", q: "ｑ", r: "ｒ", s: "ｓ", t: "ｔ",
  u: "ｕ", v: "ｖ", w: "ｗ", x: "ｘ", y: "ｙ", z: "ｚ"
});

// Style 43: Winter Tai Accent
addStyle('gamer', 'gamer_winter_tai_accent', '冬┊', ' 모', {
  A: "ꫝ፝֟፝", B: "B", C: "C", D: "D", E: "E̷̷", F: "F", G: "G", H: "H", I: "ɪ᪻ͥᷱ᷍", J: "J",
  K: "K", L: "L", M: "M", N: "N", O: "Ꭷ", P: "P", Q: "Q", R: "R", S: "S", T: "T",
  U: "ꪽ", V: "V", W: "W", X: "X", Y: "Y", Z: "Z",
  a: "ꫝ፝֟፝", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g", h: "h", i: "ɪ᪻ͥᷱ᷍", j: "j",
  k: "k", l: "l", m: "m", n: "n", o: "Ꭷ", p: "p", q: "q", r: "r", s: "s", t: "t",
  u: "ꪽ", v: "v", w: "w", x: "x", y: "y", z: "z"
});

// Style 44: DJ Greek
addStyle('gamer', 'gamer_dj_greek', 'Dj͢ ᭄ ', ' ࿐ᴮᴼˢˢ', {
  A: "Α", B: "Β", C: "Ͻ", D: "Ɗ", E: "Σ", F: "Ƒ", G: "Ɠ", H: "Ν", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
  k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ"
});

// Style 45: Clone Greek with Stroke
addStyle('gamer', 'gamer_clone_greek_stroke', 'ꫝᥣ᥆ᥒᥱ▼', '▼ ⁷⁷⁷', {
  A: "Λ", B: "Β", C: "Ͻ", D: "D", E: "E̷̷", F: "F", G: "Ɠ", H: "H", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ꭷ", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "U", V: "V", W: "W", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "λ", b: "β", c: "Ͻ", d: "d", e: "e̷̷", f: "f", g: "ɠ", h: "h", i: "ι", j: "ј",
  k: "κ", l: "ℓ", m: "μ", n: "η", o: "Ꭷ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "u", v: "v", w: "w", x: "χ", y: "υ", z: "ƶ"
});

// Style 46: No.1 Name
addStyle('gamer', 'gamer_no1_name', '𝙽Ꭷ.1 メ', ' ⍣❣ⓥ', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
  K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
  U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
  k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
  u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣"
});

// Style 47: Official Circled
addStyle('gamer', 'gamer_official_circled', '𝑂𝑓𝑓𝑖𝑐𝑖𝑎𝑙 ⧉', '⧉ ࿐𝟒𝟔', {
  A: "Ⓐ", B: "Ⓑ", C: "Ⓒ", D: "Ⓓ", E: "Ⓔ", F: "Ⓕ", G: "Ⓖ", H: "Ⓗ", I: "Ⓘ", J: "Ⓙ",
  K: "Ⓚ", L: "Ⓛ", M: "Ⓜ", N: "Ⓝ", O: "Ⓞ", P: "Ⓟ", Q: "Ⓠ", R: "Ⓡ", S: "Ⓢ", T: "Ⓣ",
  U: "Ⓤ", V: "Ⓥ", W: "Ⓦ", X: "Ⓧ", Y: "Ⓨ", Z: "Ⓩ",
  a: "ⓐ", b: "ⓑ", c: "ⓒ", d: "ⓓ", e: "ⓔ", f: "ⓕ", g: "ⓖ", h: "ⓗ", i: "ⓘ", j: "ⓙ",
  k: "ⓚ", l: "ⓛ", m: "ⓜ", n: "ⓝ", o: "ⓞ", p: "ⓟ", q: "ⓠ", r: "ⓡ", s: "ⓢ", t: "ⓣ",
  u: "ⓤ", v: "ⓥ", w: "ⓦ", x: "ⓧ", y: "ⓨ", z: "ⓩ"
});

// Style 48: Kattar Italic Math
addStyle('gamer', 'gamer_kattar_italic_math', 'कट्टर ⨳ ', '⟅ 모', {
  A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
  K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
});

// Style 49: Kattar Khmer Italic
addStyle('gamer', 'gamer_kattar_khmer_italic', 'कट्टर ៚┋', '┋ 모', {
  A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
  K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
});

// Style 50: Xx Small Caps Accent
addStyle('gamer', 'gamer_xx_small_caps_accent', 'Xx', 'xX ‼', {
  A: "ᴀ̑", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ̑", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ̑", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ̑", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ̑", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ̑", Z: "ᴢ",
  a: "ᴀ̑", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ̑", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ̑", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ̑", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ̑", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ̑", z: "ᴢ"
});

// Style 51: Flower Small Caps
addStyle('gamer', 'gamer_flower_small_caps', '✿┊', ' ᭄ᵇˡᵃ̸ᶜᵏ', {
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 1: Pi Flag Style
addStyle('fancy', 'fancy_pi_flag', '𝛑 ╬ ', ' ╬ 𝛑᭄', {
  A: "🇦", B: "🇧", C: "🇨", D: "🇩", E: "🇪", F: "🇫", G: "🇬", H: "🇭", I: "🇮", J: "🇯",
  K: "🇰", L: "🇱", M: "🇲", N: "🇳", O: "🇴", P: "🇵", Q: "🇶", R: "🇷", S: "🇸", T: "🇹",
  U: "🇺", V: "🇻", W: "🇼", X: "🇽", Y: "🇾", Z: "🇿",
  a: "🇦", b: "🇧", c: "🇨", d: "🇩", e: "🇪", f: "🇫", g: "🇬", h: "🇭", i: "🇮", j: "🇯",
  k: "🇰", l: "🇱", m: "🇲", n: "🇳", o: "🇴", p: "🇵", q: "🇶", r: "🇷", s: "🇸", t: "🇹",
  u: "🇺", v: "🇻", w: "🇼", x: "🇽", y: "🇾", z: "🇿"
});

// Style 2: Cool Gothic Style
addStyle('fancy', 'fancy_cool_gothic', 'Cᵒᵒˡジ ', ' ⟡‿⟡😎', {
  A: "𐌰", B: "𐌱", C: "𐌲", D: "𐌳", E: "𐌴", F: "𐍆", G: "𐌾", H: "𐌷", I: "𐌹", J: "𐌻",
  K: "𐌺", L: "𐍊", M: "𐌼", N: "𐌽", O: "𐍈", P: "𐍉", Q: "𐍁", R: "𐍂", S: "𐍃", T: "𐍄",
  U: "𐍀", V: "𝚅", W: "𐌸", X: "𐍇", Y: "𐍅", Z: "𐌶",
  a: "𐌰", b: "𐌱", c: "𐌲", d: "𐌳", e: "𐌴", f: "𐍆", g: "𐌾", h: "𐌷", i: "𐌹", j: "𐌻",
  k: "𐌺", l: "𐍊", m: "𐌼", n: "𐌽", o: "𐍈", p: "𐍉", q: "𐍁", r: "𐍂", s: "𐍃", t: "𐍄",
  u: "𐍀", v: "𝚅", w: "𐌸", x: "𐍇", y: "𐍅", z: "𐌶"
});

// Style 3: Koppa Heart Italic
addStyle('fancy', 'fancy_koppa_heart_italic', 'ϟ A♡rα ϟ ', ' ( ˆ⌣ˆ )', {
  A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
  K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
});

// Style 4: Egyptian Bold Italic
addStyle('fancy', 'fancy_egyptian_bold_italic', '𓍊𓋼𓍊 ', ' 𓍊𓋼𓍊', {
  A: "𝑨", B: "𝑩", C: "𝑪", D: "𝑫", E: "𝑬", F: "𝑭", G: "𝑮", H: "𝑯", I: "𝑰", J: "𝑱",
  K: "𝑲", L: "𝑳", M: "𝑴", N: "𝑵", O: "𝑶", P: "𝑷", Q: "𝑸", R: "𝑹", S: "𝑺", T: "𝑻",
  U: "𝑼", V: "𝑽", W: "𝑾", X: "𝑿", Y: "𝒀", Z: "𝒁",
  a: "𝒂", b: "𝒃", c: "𝒄", d: "𝒅", e: "𝒆", f: "𝒇", g: "𝒈", h: "𝒉", i: "𝒊", j: "𝒋",
  k: "𝒌", l: "𝒍", m: "𝒎", n: "𝒏", o: "𝒐", p: "𝒑", q: "𝒒", r: "𝒓", s: "𝒔", t: "𝒕",
  u: "𝒖", v: "𝒗", w: "𝒘", x: "𝒙", y: "𝒚", z: "𝒛"
});

// Style 5: Miao Short Stroke
addStyle('fancy', 'fancy_miao_short_stroke', '꧁┋𖹭 ', ' 𖹭┋꧂🙇🏻‍♂️', {
  A: "A̶", B: "B̶", C: "C̶", D: "D̶", E: "E̶", F: "F̶", G: "G̶", H: "H̶", I: "I̶", J: "J̶",
  K: "K̶", L: "L̶", M: "M̶", N: "N̶", O: "O̶", P: "P̶", Q: "Q̶", R: "R̶", S: "S̶", T: "T̶",
  U: "U̶", V: "V̶", W: "W̶", X: "X̶", Y: "Y̶", Z: "Z̶",
  a: "a̶", b: "b̶", c: "c̶", d: "d̶", e: "e̶", f: "f̶", g: "g̶", h: "h̶", i: "i̶", j: "j̶",
  k: "k̶", l: "l̶", m: "m̶", n: "n̶", o: "o̶", p: "p̶", q: "q̶", r: "r̶", s: "s̶", t: "t̶",
  u: "u̶", v: "v̶", w: "w̶", x: "x̶", y: "y̶", z: "z̶"
});

// Style 6: Vertical Bars
addStyle('fancy', 'fancy_vertical_bars', '┋', '┋── ⋆⋅☆⋅⋆', {
  A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H", I: "I", J: "J",
  K: "K", L: "L", M: "M", N: "N", O: "O", P: "P", Q: "Q", R: "R", S: "S", T: "T",
  U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Z",
  a: "a", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g", h: "h", i: "i", j: "j",
  k: "k", l: "l", m: "m", n: "n", o: "o", p: "p", q: "q", r: "r", s: "s", t: "t",
  u: "u", v: "v", w: "w", x: "x", y: "y", z: "z"
});

// Style 7: Greek King
addStyle('fancy', 'fancy_greek_king', '', '╰‿╯ᴋɪ፝֟ɴɢ', {
  A: "Λ", B: "Β", C: "Ͻ", D: "Ɗ", E: "Ξ", F: "Ƒ", G: "Ɠ", H: "H", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ø", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "U", V: "V", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "λ", b: "β", c: "Ͻ", d: "ɗ", e: "ξ", f: "ƒ", g: "ɠ", h: "h", i: "ι", j: "ј",
  k: "κ", l: "ℓ", m: "μ", n: "η", o: "ø", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "υ", z: "ƶ"
});

// Style 8: Tai Squared
addStyle('fancy', 'fancy_tai_squared', ' ꫂ★ꪶ ┋', '┋ ꫂ★ꪶ', {
  A: "🄰", B: "🄱", C: "🄲", D: "🄳", E: "🄴", F: "🄵", G: "🄶", H: "🄷", I: "🄸", J: "🄹",
  K: "🄺", L: "🄻", M: "🄼", N: "🄽", O: "🄾", P: "🄿", Q: "🅀", R: "🅁", S: "🅂", T: "🅃",
  U: "🅄", V: "🅅", W: "🅆", X: "🅇", Y: "🅈", Z: "🅉",
  a: "🄰", b: "🄱", c: "🄲", d: "🄳", e: "🄴", f: "🄵", g: "🄶", h: "🄷", i: "🄸", j: "🄹",
  k: "🄺", l: "🄻", m: "🄼", n: "🄽", o: "🄾", p: "🄿", q: "🅀", r: "🅁", s: "🅂", t: "🅃",
  u: "🅄", v: "🅅", w: "🅆", x: "🅇", y: "🅈", z: "🅉"
});

// Style 9: Bracket Circumflex
addStyle('fancy', 'fancy_bracket_circumflex', ' ꫂ⟡→', '←⟡ꪶ', {
  A: "⦏Â⦎", B: "⦏B̂⦎", C: "⦏Ĉ⦎", D: "⦏D̂⦎", E: "⦏Ê⦎", F: "⦏F̂⦎", G: "⦏Ĝ⦎", H: "⦏Ĥ⦎", I: "⦏Î⦎", J: "⦏Ĵ⦎",
  K: "⦏K̂⦎", L: "⦏L̂⦎", M: "⦏M̂⦎", N: "⦏N̂⦎", O: "⦏Ô⦎", P: "⦏P̂⦎", Q: "⦏Q̂⦎", R: "⦏R̂⦎", S: "⦏Ŝ⦎", T: "⦏T̂⦎",
  U: "⦏Û⦎", V: "⦏V̂⦎", W: "⦏Ŵ⦎", X: "⦏X̂⦎", Y: "⦏Ŷ⦎", Z: "⦏Ẑ⦎",
  a: "⦏â⦎", b: "⦏b̂⦎", c: "⦏ĉ⦎", d: "⦏d̂⦎", e: "⦏ê⦎", f: "⦏f̂⦎", g: "⦏ĝ⦎", h: "⦏ĥ⦎", i: "⦏î⦎", j: "⦏ĵ⦎",
  k: "⦏k̂⦎", l: "⦏l̂⦎", m: "⦏m̂⦎", n: "⦏n̂⦎", o: "⦏ô⦎", p: "⦏p̂⦎", q: "⦏q̂⦎", r: "⦏r̂⦎", s: "⦏ŝ⦎", t: "⦏t̂⦎",
  u: "⦏û⦎", v: "⦏v̂⦎", w: "⦏ŵ⦎", x: "⦏x̂⦎", y: "⦏ŷ⦎", z: "⦏ẑ⦎"
});

// Style 10: Star Circled Mixed
addStyle('fancy', 'fancy_star_circled_mixed', '•★⋆▱', '▰⋆★•', {
  A: "Ⓐ", B: "𝗕", C: "𝗖", D: "𝗗", E: "Ⓔ", F: "𝗙", G: "𝗚", H: "𝗛", I: "Ⓘ", J: "𝗝",
  K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "Ⓞ", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
  U: "Ⓤ", V: "𝗩", W: "𝗪", X: "𝗫", Y: "Ⓨ", Z: "𝗭",
  a: "ⓐ", b: "𝙗", c: "𝙘", d: "𝙙", e: "ⓔ", f: "𝙛", g: "𝙜", h: "𝙝", i: "Ⓘ", j: "𝙟",
  k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "Ⓞ", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
  u: "ⓤ", v: "𝙫", w: "𝙬", x: "𝙭", y: "ⓨ", z: "𝙯"
});

// Style 12: Khmer Koppa Mixed
addStyle('fancy', 'fancy_khmer_koppa_mixed', '៚ϟ░', '░ϟ 🐝⃝☯', {
  A: "Ⓐ", B: "B͢", C: "C͢", D: "D͢", E: "Ⓔ", F: "F͢", G: "G͢", H: "H͢", I: "Ⓘ", J: "J͢",
  K: "K͢", L: "L͢", M: "M͢", N: "N͢", O: "Ⓞ", P: "P͢", Q: "Q͢", R: "R͢", S: "S͢", T: "T͢",
  U: "U͢", V: "Ⓤ", W: "W͢", X: "X͢", Y: "Ⓨ", Z: "Z͢",
  a: "ⓐ", b: "b͢", c: "c͢", d: "d͢", e: "ⓔ", f: "f͢", g: "g͢", h: "h͢", i: "ⓘ", j: "j͢",
  k: "k͢", l: "l͢", m: "m͢", n: "n͢", o: "ⓞ", p: "p͢", q: "q͢", r: "r͢", s: "s͢", t: "t͢",
  u: "ⓤ", v: "v͢", w: "w͢", x: "x͢", y: "ⓨ", z: "z͢"
});

// Style 13: Kaomoji Warning Mixed
addStyle('fancy', 'fancy_kaomoji_warning_mixed', '╰⁔╯⚠ ', '║▌💕✿', {
  A: "𝔸", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝔼", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝕀", J: "𝗝",
  K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝕆", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
  U: "𝕌", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝕐", Z: "𝗭",
  a: "𝕒", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝕖", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝕚", j: "𝙟",
  k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝕠", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
  u: "𝕦", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝕪", z: "𝙯"
});

// Style 14: Butterfly Bracket Mixed
addStyle('fancy', 'fancy_butterfly_bracket_mixed', '║▌✿ ⁂', ' ✿🦋༄║▌', {
  A: "ᥲ", B: "𝐵", C: "𝐶", D: "𝐷", E: "ᥱ", F: "𝐹", G: "𝐺", H: "𝐻", I: "Ꭵ", J: "𝐽",
  K: "𝐾", L: "ᥣ", M: "𝑀", N: "𝑁", O: "᥆", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "፝ᴛ",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
  a: "ᥲ", b: "𝑏", c: "𝑐", d: "𝑑", e: "ᥱ", f: "𝑓", g: "𝑔", h: "ℎ", i: "Ꭵ", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "᥆", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "፝ᴛ",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
});

// Style 15: Arrow Number Mixed
addStyle('fancy', 'fancy_arrow_number_mixed', '▶●──卄', '卄ꕤ࿐', {
  A: "🅐", B: "🅑", C: "🅒", D: "🅓", E: "🅔", F: "🅕", G: "🅖", H: "🅗", I: "🅘", J: "🅙",
  K: "🅚", L: "🅛", M: "🅜", N: "🅝", O: "🅞", P: "🅟", Q: "🅠", R: "🅡", S: "🅢", T: "🅣",
  U: "🅤", V: "🅥", W: "🅦", X: "🅧", Y: "🅨", Z: "🅩",
  a: "Ⓐ", b: "Ⓑ", c: "Ⓒ", d: "Ⓓ", e: "Ⓔ", f: "Ⓕ", g: "Ⓖ", h: "Ⓗ", i: "Ⓘ", j: "Ⓙ",
  k: "Ⓚ", l: "Ⓛ", m: "Ⓜ", n: "Ⓝ", o: "Ⓞ", p: "Ⓟ", q: "Ⓠ", r: "Ⓡ", s: "Ⓢ", t: "Ⓣ",
  u: "Ⓤ", v: "Ⓥ", w: "Ⓦ", x: "Ⓧ", y: "Ⓨ", z: "Ⓩ"
});

// Style 16: Squared Bold Mixed
addStyle('fancy', 'fancy_squared_bold_mixed', '▶●─', ' ♥︎き〆', {
  A: "🄰", B: "🄱", C: "🄲", D: "🄳", E: "🄴", F: "🄵", G: "🄶", H: "🄷", I: "🄸", J: "🄹",
  K: "🄺", L: "🄻", M: "🄼", N: "🄽", O: "🄾", P: "🄿", Q: "🅀", R: "🅁", S: "🅂", T: "🅃",
  U: "🅄", V: "🅅", W: "🅆", X: "🅇", Y: "🅈", Z: "🅉",
  a: "𝗔", b: "𝗕", c: "𝗖", d: "𝗗", e: "𝗘", f: "𝗙", g: "𝗚", h: "𝗛", i: "𝗜", j: "𝗝",
  k: "𝗞", l: "𝗟", m: "𝗠", n: "𝗡", o: "𝗢", p: "𝗣", q: "𝗤", r: "𝗥", s: "𝗦", t: "𝗧",
  u: "𝗨", v: "𝗩", w: "𝗪", x: "𝗫", y: "𝗬", z: "𝗭"
});

// Style 17: Koppa Number Negative
addStyle('fancy', 'fancy_koppa_number_negative', 'ϟ ꕤ ', ' ϟⓥϟꪶ', {
  A: "❼", B: "🅑", C: "🅒", D: "🅓", E: "❸", F: "🅕", G: "🅖", H: "🅗", I: "❶", J: "🅙",
  K: "🅚", L: "🅛", M: "🅜", N: "🅝", O: "❽", P: "🅟", Q: "🅠", R: "🅡", S: "🅢", T: "🅣",
  U: "❾", V: "🅥", W: "🅦", X: "🅧", Y: "❺", Z: "🅩",
  a: "❼", b: "🅑", c: "🅒", d: "🅓", e: "❸", f: "🅕", g: "🅖", h: "🅗", i: "❶", j: "🅙",
  k: "🅚", l: "🅛", m: "🅜", n: "🅝", o: "❽", p: "🅟", q: "🅠", r: "🅡", s: "🅢", t: "🅣",
  u: "❾", v: "🅥", w: "🅦", x: "🅧", y: "❺", z: "🅩"
});

// Style 18: Khmer Mixed Monospace
addStyle('fancy', 'fancy_khmer_mixed_monospace', '៚ꕤ', 'ꕤ 🐞⃝᭄', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "ε", F: "𝙵", G: "𝙶", H: "н", I: "𝙸", J: "נ",
  K: "𝙺", L: "ℓ", M: "𝙼", N: "η", O: "σ", P: "𝙿", Q: "𝚀", R: "я", S: "𝚂", T: "τ",
  U: "𝚄", V: "𝚅", W: "ω", X: "𝚇", Y: "𝚈", Z: "ƶ",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "ƒ", g: "𝚐", h: "𝚑", i: "𝚒", j: "נ",
  k: "𝚔", l: "ℓ", m: "𝚖", n: "η", o: "𝚘", p: "𝚙", q: "զ", r: "я", s: "𝚜", t: "τ",
  u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "ƶ"
});

// Style 19: Magic Superscript
addStyle('fancy', 'fancy_magic_superscript', '🪄', '⋆˙⟡∞', {
  A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H", I: "I", J: "J",
  K: "K", L: "L", M: "M", N: "N", O: "O", P: "P", Q: "Q", R: "R", S: "S", T: "T",
  U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Z",
  a: "ᵃ", b: "ᵇ", c: "ᶜ", d: "ᵈ", e: "ᵉ", f: "ᶠ", g: "ᵍ", h: "ʰ", i: "ⁱ", j: "ʲ",
  k: "ᵏ", l: "ˡ", m: "ᵐ", n: "ⁿ", o: "ᵒ", p: "ᵖ", q: "ᑫ", r: "ʳ", s: "ˢ", t: "ᵗ",
  u: "ᵘ", v: "ᵛ", w: "ʷ", x: "ˣ", y: "ʸ", z: "ᶻ"
});

// Style 20: Complex Japanese Mixed
addStyle('fancy', 'fancy_complex_japanese_mixed', 'ɪ᪻ͥᷱ᷍ ㋚ ', ' ║╰⁔╯║', {
  A: "卂", B: "乃", C: "匚", D: "刀", E: "乇", F: "千", G: "Ꮆ", H: "卄", I: "丨", J: "ﾌ",
  K: "Ҝ", L: "ㄥ", M: "爪", N: "几", O: "ㄖ", P: "卩", Q: "Ҩ", R: "尺", S: "丂", T: "ㄒ",
  U: "ㄩ", V: "ᐯ", W: "山", X: "乂", Y: "ㄚ", Z: "乙",
  a: "卂", b: "乃", c: "匚", d: "刀", e: "乇", f: "千", g: "Ꮆ", h: "卄", i: "丨", j: "ﾌ",
  k: "Ҝ", l: "ㄥ", m: "爪", n: "几", o: "ㄖ", p: "卩", q: "Ҩ", r: "尺", s: "丂", t: "ㄒ",
  u: "ㄩ", v: "ᐯ", w: "山", x: "乂", y: "ㄚ", z: "乙"
});

// Style 21: Cuneiform Gothic
addStyle('fancy', 'fancy_cuneiform_gothic', '𒀱⟆  ', '  ⟅𒀱', {
  A: "𐌰", B: "𐌱", C: "𐌲", D: "𐌳", E: "𐌴", F: "𐍆", G: "𐌾", H: "𐌷", I: "𐌹", J: "𐌻",
  K: "𐌺", L: "𐍊", M: "𐌼", N: "𐌽", O: "𐍈", P: "𐍉", Q: "𐍁", R: "𐍂", S: "𐍃", T: "𐍄",
  U: "𐍀", V: "𝚅", W: "𐌸", X: "𐍇", Y: "𐍅", Z: "𐌶",
  a: "𐌰", b: "𐌱", c: "𐌲", d: "𐌳", e: "𐌴", f: "𐍆", g: "𐌾", h: "𐌷", i: "𐌹", j: "𐌻",
  k: "𐌺", l: "𐍊", m: "𐌼", n: "𐌽", o: "𐍈", p: "𐍉", q: "𐍁", r: "𐍂", s: "𐍃", t: "𐍄",
  u: "𐍀", v: "𝚅", w: "𐌸", x: "𐍇", y: "𐍅", z: "𐌶"
});

// Style 22: Tai Viet Mixed
addStyle('fancy', 'fancy_tai_viet_mixed', '៚ꪎ⁔ꪎ┋', '  ꤪꤨꤪ‹𝟹', {
  A: "ꫝ", B: "B", C: "C", D: "D", E: "E̷̷", F: "F", G: "G", H: "H", I: "ɪ᪻ͥᷱ᷍", J: "J",
  K: "K", L: "L", M: "M", N: "N", O: "Ꭷ", P: "P", Q: "Q", R: "R", S: "S", T: "T",
  U: "ꪽ", V: "V", W: "W", X: "X", Y: "Y", Z: "Z",
  a: "ꫝ", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g", h: "h", i: "ɪ᪻ͥᷱ᷍", j: "j",
  k: "k", l: "l", m: "m", n: "n", o: "Ꭷ", p: "p", q: "q", r: "r", s: "s", t: "t",
  u: "ꪽ", v: "v", w: "w", x: "x", y: "y", z: "z"
});

// Style 23: Flower Small Caps
addStyle('fancy', 'fancy_flower_small_caps', '𑁍˖°', '°˖ ♡ ᪲᪲᪲', {
  A: "ꫝ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "𝖎", J: "ᴊ",
  K: "ᴋ", L: "ℓ", M: "ᴍ", N: "𝛈", O: "Ꭷ", P: "ᴘ", Q: "𝛗", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ꪽ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ꫝ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "𝖎", j: "ᴊ",
  k: "ᴋ", l: "ℓ", m: "ᴍ", n: "𝛈", o: "Ꭷ", p: "ᴘ", q: "𝛗", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ꪽ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});

// Style 24: OI Mixed
addStyle('fancy', 'fancy_oi_mixed', '🅾i_am_', '  ᪲᪲᪲_878', {
  A: "ꫝ", B: "B", C: "C", D: "D", E: "E̷̷", F: "F", G: "G", H: "H", I: "ɪ᪻ͥᷱ᷍", J: "J",
  K: "K", L: "L", M: "M", N: "N", O: "Ꭷ", P: "P", Q: "Q", R: "R", S: "S", T: "T",
  U: "ꪽ", V: "V", W: "W", X: "X", Y: "Y", Z: "Z",
  a: "ꫝ", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g", h: "h", i: "ɪ᪻ͥᷱ᷍", j: "j",
  k: "k", l: "l", m: "m", n: "n", o: "Ꭷ", p: "p", q: "q", r: "r", s: "s", t: "t",
  u: "ꪽ", v: "v", w: "w", x: "x", y: "y", z: "z"
});

// Style 25: Tai Circle Accent
addStyle('fancy', 'fancy_tai_circle_accent', '៚ꪎꪎ☯', '☯ꪎꪎ 🅾', {
  A: "ᴀ̑", B: "ʙ̑", C: "ᴄ̑", D: "ᴅ̑", E: "ᴇ̑", F: "ꜰ̑", G: "ɢ̑", H: "ʜ̑", I: "ɪ̑", J: "ᴊ̑",
  K: "ᴋ̑", L: "ʟ̑", M: "ᴍ̑", N: "ɴ̑", O: "ᴏ̑", P: "ᴘ̑", Q: "ϙ̑", R: "ʀ̑", S: "ꜱ̑", T: "ᴛ̑",
  U: "ᴜ̑", V: "ᴠ̑", W: "ᴡ̑", X: "x̑", Y: "ʏ̑", Z: "ᴢ̑",
  a: "ᴀ̑", b: "ʙ̑", c: "ᴄ̑", d: "ᴅ̑", e: "ᴇ̑", f: "ꜰ̑", g: "ɢ̑", h: "ʜ̑", i: "ɪ̑", j: "ᴊ̑",
  k: "ᴋ̑", l: "ʟ̑", m: "ᴍ̑", n: "ɴ̑", o: "ᴏ̑", p: "ᴘ̑", q: "ϙ̑", r: "ʀ̑", s: "ꜱ̑", t: "ᴛ̑",
  u: "ᴜ̑", v: "ᴠ̑", w: "ᴡ̑", x: "x̑", y: "ʏ̑", z: "ᴢ̑"
});

// Style 26: Bracket Heart Accent
addStyle('fancy', 'fancy_bracket_heart_accent', '╚»ꨄ︎', 'ꨄ︎«╝💞 𝄟', {
  A: "ᴀ̑", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ̑", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ̑", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ̑", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ̑", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ̑", Z: "ᴢ",
  a: "ᴀ̑", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ̑", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ̑", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ̑", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ̑", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ̑", z: "ᴢ"
});

// Style 27: Guitar Complex Accent
addStyle('fancy', 'fancy_guitar_complex', '◕‿◕⃝🎸', '▼▼▼', {
  A: "ᴀ᪻ͨᷠ᷍", B: "ʙ᪻ͩᷡ᷍", C: "ᴄ᪻ͪᷢ᷍", D: "ᴅ᪻ͫᷣ᷍", E: "ᴇ᪻ͬᷤ᷍", F: "ꜰ᪻ͭᷥ᷍", G: "ɢ᪻ͮᷦ᷍", H: "ʜ᪻ͯᷧ᷍", I: "ɪ᪻ͥᷱ᷍", J: "ᴊ᪻ͦᷲ᷍",
  K: "ᴋ᪻ͧᷳ᷍", L: "ʟ᪻ͨᷴ᷍", M: "ᴍ᪻ͩ᷵᷍", N: "ɴ᪻ͪ", O: "ᴏ᪻ͫ", P: "ᴘ᪻ͬ", Q: "ϙ᪻ͭ", R: "ʀ᪻ͮ", S: "ꜱ᪻ͯ", T: "ᴛ᪻ͥ᷼᷍",
  U: "ᴜ᷽᪻ͦ᷍", V: "ᴠ᪻ͧ᷾᷍", W: "ᴡ᷿᪻ͨ᷍", X: "x᪻ͩ⃐᷍", Y: "ʏ᪻ͪ⃑᷍", Z: "ᴢ⃒᪻ͫ᷍",
  a: "ᴀ᪻ͨᷠ᷍", b: "ʙ᪻ͩᷡ᷍", c: "ᴄ᪻ͪᷢ᷍", d: "ᴅ᪻ͫᷣ᷍", e: "ᴇ᪻ͬᷤ᷍", f: "ꜰ᪻ͭᷥ᷍", g: "ɢ᪻ͮᷦ᷍", h: "ʜ᪻ͯᷧ᷍", i: "ɪ᪻ͥᷱ᷍", j: "ᴊ᪻ͦᷲ᷍",
  k: "ᴋ᪻ͧᷳ᷍", l: "ʟ᪻ͨᷴ᷍", m: "ᴍ᪻ͩ᷵᷍", n: "ɴ᪻ͪ", o: "ᴏ᪻ͫ", p: "ᴘ᪻ͬ", q: "ϙ᪻ͭ", r: "ʀ᪻ͮ", s: "ꜱ᪻ͯ", t: "ᴛ᪻ͥ᷼᷍",
  u: "ᴜ᷽᪻ͦ᷍", v: "ᴠ᪻ͧ᷾᷍", w: "ᴡ᷿᪻ͨ᷍", x: "x᪻ͩ⃐᷍", y: "ʏ᪻ͪ⃑᷍", z: "ᴢ⃒᪻ͫ᷍"
});

// Style 28: Heart Script
addStyle('fancy', 'fancy_heart_script', '♡๛', ' 𓅇࿐', {
  A: "𝒜", B: "ℬ", C: "𝒞", D: "𝒟", E: "ℰ", F: "ℱ", G: "𝒢", H: "ℋ", I: "ℐ", J: "𝒥",
  K: "𝒦", L: "ℒ", M: "ℳ", N: "𝒩", O: "𝒪", P: "𝒫", Q: "𝒬", R: "ℛ", S: "𝒮", T: "𝒯",
  U: "𝒰", V: "𝒱", W: "𝒲", X: "𝒳", Y: "𝒴", Z: "𝒵",
  a: "𝒶", b: "𝒷", c: "𝒸", d: "𝒹", e: "ℯ", f: "𝒻", g: "ℊ", h: "𝒽", i: "𝒾", j: "𝒿",
  k: "𝓀", l: "𝓁", m: "𝓂", n: "𝓃", o: "ℴ", p: "𝓅", q: "𝓆", r: "𝓇", s: "𝓈", t: "𝓉",
  u: "𝓊", v: "𝓋", w: "𝓌", x: "𝓍", y: "𝓎", z: "𝓏"
});

// Style 29: Official Greek
addStyle('fancy', 'fancy_official_greek', 'σƒƒɪcɪαℓ_', '_🍁⃝⃪⃨⃡😇', {
  A: "𝚨", B: "𝚩", C: "𝚪", D: "𝚫", E: "𝚬", F: "𝚺", G: "𝛀", H: "𝚮", I: "𝚰", J: "𝗝",
  K: "𝚱", L: "𝚲", M: "𝚳", N: "𝚴", O: "𝚶", P: "𝚸", Q: "𝚽", R: "𝗥", S: "𝚵", T: "𝚻",
  U: "𝚷", V: "𝚼", W: "𝗪", X: "𝚾", Y: "𝚿", Z: "𝚭",
  a: "α", b: "β", c: "γ", d: "δ", e: "ε", f: "ζ", g: "η", h: "θ", i: "ι", j: "κ",
  k: "λ", l: "μ", m: "ν", n: "ξ", o: "ο", p: "π", q: "ρ", r: "ς", s: "σ", t: "τ",
  u: "υ", v: "φ", w: "χ", x: "ψ", y: "ω", z: "ζ"
});

// Style 30: Its Simple
addStyle('fancy', 'fancy_its_simple', 'ɪτѕ_', '_ꪎꪎ 👿', {
  A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H", I: "I", J: "J",
  K: "K", L: "L", M: "M", N: "N", O: "O", P: "P", Q: "Q", R: "R", S: "S", T: "T",
  U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Z",
  a: "a", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g", h: "h", i: "I", j: "j",
  k: "k", l: "l", m: "m", n: "n", o: "o", p: "p", q: "q", r: "r", s: "s", t: "t",
  u: "u", v: "v", w: "w", x: "x", y: "y", z: "z"
});

// Style 31: Tai Simple
addStyle('fancy', 'fancy_tai_simple', 'ꪎꪎ_', '_ꪎꪎ 👿✨', {
  A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H", I: "I", J: "J",
  K: "K", L: "L", M: "M", N: "N", O: "O", P: "P", Q: "Q", R: "R", S: "S", T: "T",
  U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Z",
  a: "a", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g", h: "h", i: "I", j: "j",
  k: "k", l: "l", m: "m", n: "n", o: "o", p: "p", q: "q", r: "r", s: "s", t: "t",
  u: "u", v: "v", w: "w", x: "x", y: "y", z: "z"
});

// Style 32: Live Greek Math
addStyle('fancy', 'fancy_live_greek_math', '𝐿𝑖𝑣𝑒 !! ┊', ' ◕⃝┊˚࿔⊹', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "ε", F: "𝙵", G: "𝙶", H: "н", I: "𝙸", J: "נ",
  K: "𝙺", L: "ℓ", M: "𝙼", N: "η", O: "σ", P: "𝙿", Q: "𝚀", R: "я", S: "𝚂", T: "τ",
  U: "𝚄", V: "𝚅", W: "ω", X: "𝚇", Y: "𝚈", Z: "ƶ",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "ƒ", g: "𝚐", h: "𝚑", i: "𝚒", j: "נ",
  k: "𝚔", l: "ℓ", m: "𝚖", n: "η", o: "𝚘", p: "𝚙", q: "զ", r: "я", s: "𝚜", t: "τ",
  u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "ƶ"
});

// Style 33: Davil Fullwidth
addStyle('fancy', 'fancy_davil_fullwidth', 'ᴰᵃ͢͢͢ᵛⁱˡ ♛  ', '⁔࿐', {
  A: "Ａ", B: "Ｂ", C: "Ｃ", D: "Ｄ", E: "Ｅ", F: "Ｆ", G: "Ｇ", H: "Ｈ", I: "Ｉ", J: "Ｊ",
  K: "Ｋ", L: "Ｌ", M: "Ｍ", N: "Ｎ", O: "Ｏ", P: "Ｐ", Q: "Ｑ", R: "Ｒ", S: "Ｓ", T: "Ｔ",
  U: "Ｕ", V: "Ｖ", W: "Ｗ", X: "Ｘ", Y: "Ｙ", Z: "Ｚ",
  a: "ａ", b: "ｂ", c: "ｃ", d: "ｄ", e: "ｅ", f: "ｆ", g: "ｇ", h: "ｈ", i: "ｉ", j: "ｊ",
  k: "ｋ", l: "ｌ", m: "ｍ", n: "ｎ", o: "ｏ", p: "ｐ", q: "ｑ", r: "ｒ", s: "ｓ", t: "ｔ",
  u: "ｕ", v: "ｖ", w: "ｗ", x: "ｘ", y: "ｙ", z: "ｚ"
});

// Style 34: Circle Currency
addStyle('fancy', 'fancy_circle_currency', '×º°"˜`"°º×', '×º°"˜`"°º×', {
  A: "₳", B: "₲", C: "₵", D: "Đ", E: "₳", F: "₣", G: "₲", H: "Ⱨ", I: "ł", J: "₲",
  K: "₭", L: "Ⱡ", M: "₥", N: "₦", O: "Ø", P: "₱", Q: "Ꝗ", R: "Ɽ", S: "₴", T: "₮",
  U: "Ṳ", V: "ᐯ", W: "₩", X: "Ӿ", Y: "Ɏ", Z: "ƶ",
  a: "₳", b: "₲", c: "₵", d: "đ", e: "₳", f: "₣", g: "₲", h: "Ⱨ", i: "ł", j: "₲",
  k: "₭", l: "Ⱡ", m: "₥", n: "₦", o: "ø", p: "₱", q: "Ꝗ", r: "Ɽ", s: "₴", t: "₮",
  u: "Ṳ", v: "ᐯ", w: "₩", x: "Ӿ", y: "Ɏ", z: "ƶ"
});

// Style 35: DJ Greek
addStyle('fancy', 'fancy_dj_greek', 'Dj͢ ', ' ᭄࿐', {
  A: "Α", B: "Β", C: "Ͻ", D: "Ɗ", E: "Σ", F: "Ƒ", G: "Ɠ", H: "Ν", I: "Ι", J: "Ј",
  K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ",
  a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
  k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ"
});

// Style 36: Itzzz Monospace
addStyle('fancy', 'fancy_itzzz_monospace', '𝙸𝚝𝚣𝚣𝚣_⊹ ࣪', '▼_ꪎ👿ꪎ', {
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
  K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
  U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉",
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
  k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
  u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣"
});

// Style 37: Khmer Italic Math
addStyle('fancy', 'fancy_khmer_italic_math', '៚┋', '┋ 👿 ‼', {
  A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
  K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍",
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧"
});

// Style 38: Fire Accent Small Caps
addStyle('fancy', 'fancy_fire_accent', 'Xx🔥⃝▼', '🔥⃝▼🕊xX', {
  A: "ᴀ̑", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ̑", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ̑", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ̑", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ᴜ̑", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ̑", Z: "ᴢ",
  a: "ᴀ̑", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ̑", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ̑", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ̑", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ̑", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ̑", z: "ᴢ"
});

// Style 39: Flower Greek
addStyle('fancy', 'fancy_flower_greek', '┊✿☻┊ ', '┊ꪎX᭄', {
  a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
  k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ",
  A: "Α", B: "Β", C: "C", D: "Ɗ", E: "Ε", F: "Ƒ", G: "Ɠ", H: "Н", I: "Ι", J: "Ј",
  K: "Κ", L: "ℓ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ջ", R: "Я", S: "Ѕ", T: "Τ",
  U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Ƶ"
});

// Style 40: Mr Heart Greek
addStyle('fancy', 'fancy_mr_heart_greek', 'ᴍʀ ♥╣', '╠♥ 亗', {
  A: "ꫝ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "𝖎", J: "ᴊ",
  K: "ᴋ", L: "ℓ", M: "ᴍ", N: "𝛈", O: "Ꭷ", P: "ᴘ", Q: "𝛗", R: "ʀ", S: "ꜱ", T: "ᴛ",
  U: "ꪽ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
  a: "ꫝ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "𝖎", j: "ᴊ",
  k: "ᴋ", l: "ℓ", m: "ᴍ", n: "𝛈", o: "Ꭷ", p: "ᴘ", q: "𝛗", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ꪽ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
});
  
  // Style 1: Mixed Font with Frame
  addStyle('love', 'love_mixed_frame', '┋𖹭┋', '┋⍣࿐', {
    a: "𝕒", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝕖", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝕚", j: "𝙟",
    k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝕠", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
    u: "𝕦", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝕪", z: "𝙯",
    A: "𝔸", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝔼", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝕀", J: "𝗝",
    K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝕆", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
    U: "𝕌", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝕐", Z: "𝗭"
  });

  // Style 2: Script with Heart Decoration
  addStyle('love', 'love_script_heart', '▼', '᭄▼💗᪲᪲᪲', {
    a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳",
    k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽",
    u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃",
    A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘", J: "𝓙",
    K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣",
    U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩"
  });

  // Style 3: Cute with Lightning Bolt
  addStyle('love', 'love_cute_lightning', 'c̸u̸t̸e̸ ๛┋', '┋୧⍤⃝🌹', {
    a: "𝑨⚡︎", b: "𝑩⚡︎", c: "𝑪⚡︎", d: "𝑫⚡︎", e: "𝑬⚡︎", f: "𝑭⚡︎", g: "𝑮⚡︎", h: "𝑯⚡︎", i: "𝑰⚡︎", j: "𝑱⚡︎",
    k: "𝑲⚡︎", l: "𝑳⚡︎", m: "𝑴⚡︎", n: "𝑵⚡︎", o: "𝑶⚡︎", p: "𝑷⚡︎", q: "𝑸⚡︎", r: "𝑹⚡︎", s: "𝑺⚡︎", t: "𝑻⚡︎",
    u: "𝑼⚡︎", v: "𝑽⚡︎", w: "𝑾⚡︎", x: "𝑿⚡︎", y: "𝒀⚡︎", z: "𝒁⚡︎",
    A: "𝑨⚡︎", B: "𝑩⚡︎", C: "𝑪⚡︎", D: "𝑫⚡︎", E: "𝑬⚡︎", F: "𝑭⚡︎", G: "𝑮⚡︎", H: "𝑯⚡︎", I: "𝑰⚡︎", J: "𝑱⚡︎",
    K: "𝑲⚡︎", L: "𝑳⚡︎", M: "𝑴⚡︎", N: "𝑵⚡︎", O: "𝑶⚡︎", P: "𝑷⚡︎", Q: "𝑸⚡︎", R: "𝑹⚡︎", S: "𝑺⚡︎", T: "𝑻⚡︎",
    U: "𝑼⚡︎", V: "𝑽⚡︎", W: "𝑾⚡︎", X: "𝑿⚡︎", Y: "𝒀⚡︎", Z: "𝒁⚡︎"
  });

  // Style 4: Bold Italic with Bear Face
  addStyle('love', 'love_bold_italic_bear', '⋆˚⊹𐙚', ' ⦅・ᴥ・⦆', {
    a: "𝒂", b: "𝒃", c: "𝒄", d: "𝒅", e: "𝒆", f: "𝒇", g: "𝒈", h: "𝒉", i: "𝒊", j: "𝒋",
    k: "𝒌", l: "𝒍", m: "𝒎", n: "𝒏", o: "𝒐", p: "𝒑", q: "𝒒", r: "𝒓", s: "𝒔", t: "𝒕",
    u: "𝒖", v: "𝒗", w: "𝒘", x: "𝒙", y: "𝒚", z: "𝒛",
    A: "𝑨", B: "𝑩", C: "𝑪", D: "𝑫", E: "𝑬", F: "𝑭", G: "𝑮", H: "𝑯", I: "𝑰", J: "𝑱",
    K: "𝑲", L: "𝑳", M: "𝑴", N: "𝑵", O: "𝑶", P: "𝑷", Q: "𝑸", R: "𝑹", S: "𝑺", T: "𝑻",
    U: "𝑼", V: "𝑽", W: "𝑾", X: "𝑿", Y: "𝒀", Z: "𝒁"
  });

  // Style 5: Greek with Flower Decoration
  addStyle('love', 'love_greek_flower', '꧁✧⊹˚', '˚⊹✧꧂', {
    a: "Δ", b: "β", c: "C", d: "Đ", e: "Σ", f: "Ϝ", g: "Ꮆ", h: "Ħ", i: "I", j: "J",
    k: "К", l: "Ꮭ", m: "M", n: "П", o: "Ø", p: "Ƥ", q: "Ǫ", r: "Ŗ", s: "Ѕ", t: "Ͳ",
    u: "Ц", v: "Ѵ", w: "Ш", x: "X", y: "Ψ", z: "Ẕ",
    A: "Δ", B: "β", C: "C", D: "Đ", E: "Σ", F: "Ϝ", G: "Ꮆ", H: "Ħ", I: "I", J: "J",
    K: "К", L: "Ꮭ", M: "M", N: "П", O: "Ø", P: "Ƥ", Q: "Ǫ", R: "Ŗ", S: "Ѕ", T: "Ͳ",
    U: "Ц", V: "Ѵ", W: "Ш", X: "X", Y: "Ψ", Z: "Ẕ"
  });

  // Style 6: Bold Sans Serif with Fish Decoration
  addStyle('love', 'love_bold_fish', '𓆩ᥣᴏʏᴇʟ𓆪 ', '   ᪲᪲᪲', {
    a: "𝙖", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝙚", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝙞", j: "𝙟",
    k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝙤", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
    u: "𝙪", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝙮", z: "𝙯",
    A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝",
    K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
    U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭"
  });

  // Style 7: Bold Italic Simple
  addStyle('love', 'love_bold_italic_simple', '𝑪𝑼𝑻𝑬 ⸙ ', ' ══♡', {
    a: "𝒂", b: "𝒃", c: "𝒄", d: "𝒅", e: "𝒆", f: "𝒇", g: "𝒈", h: "𝒉", i: "𝒊", j: "𝒋",
    k: "𝒌", l: "𝒍", m: "𝒎", n: "𝒏", o: "𝒐", p: "𝒑", q: "𝒒", r: "𝒓", s: "𝒔", t: "𝒕",
    u: "𝒖", v: "𝒗", w: "𝒘", x: "𝒙", y: "𝒚", z: "𝒛",
    A: "𝑨", B: "𝑩", C: "𝑪", D: "𝑫", E: "𝑬", F: "𝑭", G: "𝑮", H: "𝑯", I: "𝑰", J: "𝑱",
    K: "𝑲", L: "𝑳", M: "𝑴", N: "𝑵", O: "𝑶", P: "𝑷", Q: "𝑸", R: "𝑹", S: "𝑺", T: "𝑻",
    U: "𝑼", V: "𝑽", W: "𝑾", X: "𝑿", Y: "𝒀", Z: "𝒁"
  });

  // Style 8: Circled with Fish Decoration
  addStyle('love', 'love_circled_fish', '╰⊱⊹˚₊𓆩', '𓆪₊˚⊹⊰╯', {
    a: "ⓐ", b: "ⓑ", c: "ⓒ", d: "ⓓ", e: "ⓔ", f: "ⓕ", g: "ⓖ", h: "ⓗ", i: "ⓘ", j: "ⓙ",
    k: "ⓚ", l: "ⓛ", m: "ⓜ", n: "ⓝ", o: "ⓞ", p: "ⓟ", q: "ⓠ", r: "ⓡ", s: "ⓢ", t: "ⓣ",
    u: "ⓤ", v: "ⓥ", w: "ⓦ", x: "ⓧ", y: "ⓨ", z: "ⓩ",
    A: "Ⓐ", B: "Ⓑ", C: "Ⓒ", D: "Ⓓ", E: "Ⓔ", F: "Ⓕ", G: "Ⓖ", H: "Ⓗ", I: "Ⓘ", J: "Ⓙ",
    K: "Ⓚ", L: "Ⓛ", M: "Ⓜ", N: "Ⓝ", O: "Ⓞ", P: "Ⓟ", Q: "Ⓠ", R: "Ⓡ", S: "Ⓢ", T: "Ⓣ",
    U: "Ⓤ", V: "Ⓥ", W: "Ⓦ", X: "Ⓧ", Y: "Ⓨ", Z: "Ⓩ"
  });

  // Style 9: Bold Sans Serif with Crown
  addStyle('love', 'love_bold_crown', '♕⊹˚₊༒', ' ༒₊˚⊹♕', {
    a: "𝗮", b: "𝗯", c: "𝗰", d: "𝗱", e: "𝗲", f: "𝗳", g: "𝗴", h: "𝗵", i: "𝗶", j: "𝗷",
    k: "𝗸", l: "𝗹", m: "𝗺", n: "𝗻", o: "𝗼", p: "𝗽", q: "𝗾", r: "𝗿", s: "𝘀", t: "𝘁",
    u: "𝘂", v: "𝘃", w: "𝘄", x: "𝘅", y: "𝘆", z: "𝘇",
    A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝",
    K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
    U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭"
  });

  // Style 10: Double Struck with Yin Yang
  addStyle('love', 'love_double_struck_yinyang', '✧ ⟆☯⃟', '⃟☯⟅✧', {
    a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
    k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
    u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫",
    A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
    K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
    U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ"
  });

    // Style 5: Monospace with Flower Decoration
addStyle('love', 'love_monospace_flower', '🎀⃟', '┋✿┋', {
  a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "ƒ", g: "𝚐", h: "𝚑", i: "𝚒", j: "נ",
  k: "𝚔", l: "ℓ", m: "𝚖", n: "η", o: "σ", p: "𝚙", q: "զ", r: "я", s: "𝚜", t: "τ",
  u: "𝚞", v: "𝚟", w: "ω", x: "𝚡", y: "𝚢", z: "ƶ",
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "ε", F: "𝙵", G: "𝙶", H: "н", I: "𝙸", J: "נ",
  K: "𝙺", L: "ℓ", M: "𝙼", N: "η", O: "σ", P: "𝙿", Q: "𝚀", R: "я", S: "𝚂", T: "τ",
  U: "𝚄", V: "𝚅", W: "ω", X: "𝚇", Y: "𝚈", Z: "ƶ"
});

// Style 6: Bold Sans Serif with Heart
addStyle('love', 'love_bold_heart', '❀⃟', '💓᪲᪲࿐', {
  a: "𝙖", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝙚", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝙞", j: "𝙟",
  k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝙤", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
  u: "𝙪", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝙮", z: "𝙯",
  A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
  K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
  U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉"
});

// Style 10: Italic with Dove Decoration
addStyle('love', 'love_italic_dove', '✿⃟', '┊🕊༒', {
  a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
  k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
  u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧",
  A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
  K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
  U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍"
});

// Style 11: Script with Equals Decoration
addStyle('love', 'love_script_equals', '══', ' ⸙', {
  a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳",
  k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽",
  u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃",
  A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘", J: "𝓙",
  K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣",
  U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩"
});

// Style 1 (Second Set): Script with Heart Decoration
addStyle('love', 'love_script_heart2', '꧁·˚₊♡', '♡₊˚·꧂', {
  a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳",
  k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽",
  u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃",
  A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘", J: "𝓙",
  K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣",
  U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩"
});

// Style 2 (Second Set): Double Underline with Heart
addStyle('love', 'love_double_underline_heart', '༒●⃝♡', '●⃝♡༒', {
  a: "a͓̽", b: "b͓̽", c: "c͓̽", d: "d͓̽", e: "e͓̽", f: "f͓̽", g: "g͓̽", h: "h͓̽", i: "i͓̽", j: "j͓̽",
  k: "k͓̽", l: "l͓̽", m: "m͓̽", n: "n͓̽", o: "o͓̽", p: "p͓̽", q: "q͓̽", r: "r͓̽", s: "s͓̽", t: "t͓̽",
  u: "u͓̽", v: "v͓̽", w: "w͓̽", x: "x͓̽", y: "y͓̽", z: "z͓̽",
  A: "A͓̽", B: "B͓̽", C: "C͓̽", D: "D͓̽", E: "E͓̽", F: "F͓̽", G: "G͓̽", H: "H͓̽", I: "I͓̽", J: "J͓̽",
  K: "K͓̽", L: "L͓̽", M: "M͓̽", N: "N͓̽", O: "O͓̽", P: "P͓̽", Q: "Q͓̽", R: "R͓̽", S: "S͓̽", T: "T͓̽",
  U: "U͓̽", V: "V͓̽", W: "W͓̽", X: "X͓̽", Y: "Y͓̽", Z: "Z͓̽"
});

    // ============ GAMER STYLES ============
  
  // Style 1: Mixed Circle and Combining
  addStyle('gamer', 'gamer_mixed_circle', '°≫ ', ' ‼ ⚔', {
    a: "ⓐ", b: "b͢", c: "c͢", d: "d͢", e: "ⓔ", f: "f͢", g: "g͢", h: "h͢", i: "ⓘ", j: "j͢",
    k: "k͢", l: "l͢", m: "m͢", n: "n͢", o: "ⓞ", p: "p͢", q: "q͢", r: "r͢", s: "s͢", t: "t͢",
    u: "ⓤ", v: "v͢", w: "w͢", x: "x͢", y: "ⓨ", z: "z͢",
    A: "Ⓐ", B: "B͢", C: "C͢", D: "D͢", E: "Ⓔ", F: "F͢", G: "G͢", H: "H͢", I: "Ⓘ", J: "J͢",
    K: "K͢", L: "L͢", M: "M͢", N: "N͢", O: "Ⓞ", P: "P͢", Q: "Q͢", R: "R͢", S: "S͢", T: "T͢",
    U: "Ⓤ", V: "V͢", W: "W͢", X: "X͢", Y: "Ⓨ", Z: "Z͢"
  });

  // Style 2: Double Struck with Rush Prefix
  addStyle('gamer', 'gamer_rush_double_struck', 'яυѕʜ ', ' ‼', {
    a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
    k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
    u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫",
    A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
    K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
    U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ"
  });

  // Style 3: Monospace with Gaming Prefix
  addStyle('gamer', 'gamer_monospace_gaming', 'G̷̷ᴀᴍɪɴɢ 𓆩', '𓆪 ✓', {
    a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
    k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
    u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣",
    A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
    K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
    U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉"
  });

  // Style 4: Greek with Star Symbol
  addStyle('gamer', 'gamer_greek_star', '☆⃟☯︎', '☆⃟☯︎ ╰⁔╯', {
    a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
    k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
    u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ",
    A: "Α", B: "Β", C: "Ͻ", D: "Ɗ", E: "Σ", F: "Ƒ", G: "Ɠ", H: "Ν", I: "Ι", J: "Ј",
    K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
    U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ"
  });

  // Style 5: Alternate with Special Characters
  addStyle('gamer', 'gamer_alternate_special', '   ፝ᴛʜᴇ┊', ' ??', {
    a: "ꫝ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "𝖎", j: "ᴊ",
    k: "ᴋ", l: "ℓ", m: "ᴍ", n: "𝛈", o: "Ꭷ", p: "ᴘ", q: "𝛗", r: "ʀ", s: "ꜱ", t: "ᴛ",
    u: "ꪽ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ",
    A: "ꫝ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "𝖎", J: "ᴊ",
    K: "ᴋ", L: "ℓ", M: "ᴍ", N: "𝛈", O: "Ꭷ", P: "ᴘ", Q: "𝛗", R: "ʀ", S: "ꜱ", T: "ᴛ",
    U: "ꪽ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ"
  });

  // Style 6: Thai Style with Numbers
  addStyle('gamer', 'gamer_thai_numbers', 'ɪᴍ࿐ ', ' ❻❼', {
    a: "ค", b: "ʙ", c: "ċ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ï", j: "ᴊ",
    k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "๑", p: "ᴘ", q: "ǫ", r: "я", s: "ꜱ", t: "ᴛ",
    u: "υ", v: "ᴠ", w: "ᴡ", x: "ẋ", y: "ʏ", z: "ᴢ",
    A: "ค", B: "ʙ", C: "ċ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ï", J: "ᴊ",
    K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "๑", P: "ᴘ", Q: "ǫ", R: "я", S: "ꜱ", T: "ᴛ",
    U: "υ", V: "ᴠ", W: "ᴡ", X: "ẋ", Y: "ʏ", Z: "ᴢ"
  });

  // Style 7: Italic with Star Frame
  addStyle('gamer', 'gamer_italic_star', '✪ ⧼⧼', '⧽⧽ ༒', {
    a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
    k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
    u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧",
    A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
    K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
    U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍"
  });

  // Style 8: Alternate with Heart Decoration
  addStyle('gamer', 'gamer_alternate_heart', 'ⓥ ', '◢   ᪲᪲᪲', {
    a: "ꫝ", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g", h: "h", i: "ɪ᪻ͥᷱ᷍", j: "j",
    k: "k", l: "l", m: "m", n: "n", o: "Ꭷ", p: "p", q: "q", r: "r", s: "s", t: "t",
    u: "ꪽ", v: "v", w: "w", x: "x", y: "y", z: "z",
    A: "ꫝ", B: "B", C: "C", D: "D", E: "E̷̷", F: "F", G: "G", H: "H", I: "ɪ᪻ͥᷱ᷍", J: "J",
    K: "K", L: "L", M: "M", N: "N", O: "Ꭷ", P: "P", Q: "Q", R: "R", S: "S", T: "T",
    U: "ꪽ", V: "V", W: "W", X: "X", Y: "Y", Z: "Z"
  });

  // Style 9: Strikethrough with Devil Prefix
  addStyle('gamer', 'gamer_strikethrough_devil', '𝖉𝖊𝖛𝖎𝖗 >>', '◢╰⁔╯', {
    a: "a̷", b: "b̷", c: "c̷", d: "d̷", e: "e̷", f: "f̷", g: "g̷", h: "h̷", i: "i̷", j: "j̷",
    k: "k̷", l: "l̷", m: "m̷", n: "n̷", o: "o̷", p: "p̷", q: "q̷", r: "r̷", s: "s̷", t: "t̷",
    u: "u̷", v: "v̷", w: "w̷", x: "x̷", y: "y̷", z: "z̷",
    A: "A̷̷", B: "B̷̷", C: "C̷̷", D: "D̷̷", E: "E̷̷", F: "F̷̷", G: "G̷̷", H: "H̷̷", I: "I̷̷", J: "J̷̷",
    K: "K̷̷", L: "L̷̷", M: "M̷̷", N: "N̷̷", O: "O̷̷", P: "P̷̷", Q: "Q̷̷", R: "R̷̷", S: "S̷̷", T: "T̷̷",
    U: "U̷̷", V: "V̷̷", W: "W̷̷", X: "X̷̷", Y: "Y̷̷", Z: "Z̷̷"
  });

  // Style 10: Lord Style with Asian Text
  addStyle('gamer', 'gamer_lord_asian', 'ᥣᎧR͢D̷̷ ┊', '┊ 모  ꤪꤨꤪ', {
    a: "ꫝ", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g", h: "h", i: "ɪ᪻ͥᷱ᷍", j: "j",
    k: "k", l: "l", m: "m", n: "n", o: "Ꭷ", p: "p", q: "q", r: "r", s: "s", t: "t",
    u: "ꪽ", v: "v", w: "w", x: "x", y: "y", z: "z",
    A: "ꫝ", B: "B", C: "C", D: "D", E: "E̷̷", F: "F", G: "G", H: "H", I: "ɪ᪻ͥᷱ᷍", J: "J",
    K: "K", L: "L", M: "M", N: "N", O: "Ꭷ", P: "P", Q: "Q", R: "R", S: "S", T: "T",
    U: "ꪽ", V: "V", W: "W", X: "X", Y: "Y", Z: "Z"
  });

  // Style 11: Greek with Sword
  addStyle('gamer', 'gamer_greek_sword', '   ፝ᴛʜᴇ ⚔ ', ' ⚔ ⓿❾', {
    a: "Λ", b: "Β", c: "Ͻ", d: "Ɗ", e: "Ξ", f: "Ƒ", g: "Ɠ", h: "H", i: "Ι", j: "Ј",
    k: "Κ", l: "ᒪ", m: "Μ", n: "Ν", o: "Ø", p: "Ρ", q: "Ԛ", r: "Я", s: "Ѕ", t: "Τ",
    u: "U", v: "V", w: "Ω", x: "Χ", y: "Υ", z: "Ζ",
    A: "Λ", B: "Β", C: "Ͻ", D: "Ɗ", E: "Ξ", F: "Ƒ", G: "Ɠ", H: "H", I: "Ι", J: "Ј",
    K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ø", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
    U: "U", V: "V", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ"
  });

  // Style 12: Gaming with Alternate Text
  addStyle('gamer', 'gamer_gaming_alternate', '𝖙𝖍𝖊 ☆', '☆ G̷̷ᴀᴍɪɴɢ  ꤪꤨꤪ', {
    a: "ꫝ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "𝖎", j: "ᴊ",
    k: "ᴋ", l: "ℓ", m: "ᴍ", n: "𝛈", o: "Ꭷ", p: "ᴘ", q: "𝛗", r: "ʀ", s: "ꜱ", t: "ᴛ",
    u: "ꪽ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ",
    A: "ꫝ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "𝖎", J: "ᴊ",
    K: "ᴋ", L: "ℓ", M: "ᴍ", N: "𝛈", O: "Ꭷ", P: "ᴘ", Q: "𝛗", R: "ʀ", S: "ꜱ", T: "ᴛ",
    U: "ꪽ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ"
  });

  // Style 13: Superscript with Circle
  addStyle('gamer', 'gamer_superscript_circle', '๛', ' ⓥ', {
    a: "ᴀ̑", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ̑", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ̑", j: "ᴊ",
    k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ̑", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
    u: "ᴜ̑", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ̑", z: "ᴢ",
    A: "ᴀ̑", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ̑", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ̑", J: "ᴊ",
    K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ̑", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
    U: "ᴜ̑", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ̑", Z: "ᴢ"
  });

  // Style 14: Full-width Asian Style
  addStyle('gamer', 'gamer_fullwidth_asian', '  ꫂ◣', '◢ꪶ', {
    a: "么", b: "乃", c: "匚", d: "刁", e: "モ", f: "ｷ", g: "ム", h: "廾", i: "工", j: "ﾌ",
    k: "ズ", l: "ﾚ", m: "从", n: "れ", o: "〇", p: "尸", q: "ゐ", r: "尺", s: "丂", t: "ｲ",
    u: "ひ", v: "√", w: "山", x: "メ", y: "Ɏ", z: "乙",
    A: "么", B: "乃", C: "匚", D: "刁", E: "モ", F: "ｷ", G: "ム", H: "廾", I: "工", J: "ﾌ",
    K: "ズ", L: "ﾚ", M: "从", N: "れ", O: "〇", P: "尸", Q: "ゐ", R: "尺", S: "丂", T: "ｲ",
    U: "ひ", V: "√", W: "山", X: "メ", Y: "Ɏ", Z: "乙"
  });

  // Style 15: Double Struck with Star Decoration
  addStyle('gamer', 'gamer_double_struck_stars', '༒₊˚ ·✰ ', ' ✰·˚₊༒', {
    a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
    k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
    u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫",
    A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
    K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
    U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ"
  });

  // Style 16: Full-width with Devil Prefix
  addStyle('gamer', 'gamer_fullwidth_devil', '𝖋𝖋  ', '모  ᪲᪲᪲', {
    a: "ａ", b: "ｂ", c: "ｃ", d: "ｄ", e: "ｅ", f: "ｆ", g: "ｇ", h: "ｈ", i: "ｉ", j: "ｊ",
    k: "ｋ", l: "ｌ", m: "ｍ", n: "ｎ", o: "ｏ", p: "ｐ", q: "ｑ", r: "ｒ", s: "ｓ", t: "ｔ",
    u: "ｕ", v: "ｖ", w: "ｗ", x: "ｘ", y: "ｙ", z: "ｚ",
    A: "Ａ", B: "Ｂ", C: "Ｃ", D: "Ｄ", E: "Ｅ", F: "Ｆ", G: "Ｇ", H: "Ｈ", I: "Ｉ", J: "Ｊ",
    K: "Ｋ", L: "Ｌ", M: "Ｍ", N: "Ｎ", O: "Ｏ", P: "Ｐ", Q: "Ｑ", R: "Ｒ", S: "Ｓ", T: "Ｔ",
    U: "Ｕ", V: "Ｖ", W: "Ｗ", X: "Ｘ", Y: "Ｙ", Z: "Ｚ"
  });

  // Style 41: Eye with Bold Italic
  addStyle('fancy', 'fancy_eye_bold_italic', '👁️⃝', ' ✨࿐', {
    a: "𝒂", b: "𝒃", c: "𝒄", d: "𝒅", e: "𝒆", f: "𝒇", g: "𝒈", h: "𝒉", i: "𝒊", j: "𝒋",
    k: "𝒌", l: "𝒍", m: "𝒎", n: "𝒏", o: "𝒐", p: "𝒑", q: "𝒒", r: "𝒓", s: "𝒔", t: "𝒕",
    u: "𝒖", v: "𝒗", w: "𝒘", x: "𝒙", y: "𝒚", z: "𝒛",
    A: "𝑨", B: "𝑩", C: "𝑪", D: "𝑫", E: "𝑬", F: "𝑭", G: "𝑮", H: "𝑯", I: "𝑰", J: "𝑱",
    K: "𝑲", L: "𝑳", M: "𝑴", N: "𝑵", O: "𝑶", P: "𝑷", Q: "𝑸", R: "𝑹", S: "𝑺", T: "𝑻",
    U: "𝑼", V: "𝑽", W: "𝑾", X: "𝑿", Y: "𝒀", Z: "𝒁"
  });

  // Style 4: VIP with Flower
  addStyle('fancy', 'fancy_vip_flower', 'ᴠͥɪͣᴘͫ ✿⃟', '┋ 🌿', {
    a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
    k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
    u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧",
    A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
    K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
    U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍"
  });

  // Style 10: Boxed with Heart
  addStyle('fancy', 'fancy_boxed_heart', '╬⊹░', '░⊰⊹ 💞', {
    a: "a░", b: "b░", c: "c░", d: "d░", e: "e░", f: "f░", g: "g░", h: "h░", i: "i░", j: "j░",
    k: "k░", l: "l░", m: "m░", n: "n░", o: "o░", p: "p░", q: "q░", r: "r░", s: "s░", t: "t░",
    u: "u░", v: "v░", w: "w░", x: "x░", y: "y░", z: "z░",
    A: "A░", B: "B░", C: "C░", D: "D░", E: "E░", F: "F░", G: "G░", H: "H░", I: "I░", J: "J░",
    K: "K░", L: "L░", M: "M░", N: "N░", O: "O░", P: "P░", Q: "Q░", R: "R░", S: "S░", T: "T░",
    U: "U░", V: "V░", W: "W░", X: "X░", Y: "Y░", Z: "Z░"
  });

  // Style 11: Love with Greek
  addStyle('fancy', 'fancy_love_greek', 'ₗₒᵥₑ❥•', '•✿⃟❥࿐', {
    a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
    k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
    u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ",
    A: "α", B: "в", C: "c", D: "ɗ", E: "ε", F: "ƒ", G: "ɠ", H: "н", I: "ɪ", J: "נ",
    K: "κ", L: "ℓ", M: "м", N: "η", O: "σ", P: "ρ", Q: "զ", R: "я", S: "ѕ", T: "τ",
    U: "υ", V: "ν", W: "ω", X: "χ", Y: "γ", Z: "ƶ"
  });

  // Style 12: Love Greek 2
  addStyle('fancy', 'fancy_love_greek_2', 'ₗₒᵥₑ❥✿⃟•', '•❥࿐', {
    a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
    k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
    u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ",
    A: "α", B: "в", C: "c", D: "ɗ", E: "ε", F: "ƒ", G: "ɠ", H: "н", I: "ɪ", J: "נ",
    K: "κ", L: "ℓ", M: "м", N: "η", O: "σ", P: "ρ", Q: "զ", R: "я", S: "ѕ", T: "τ",
    U: "υ", V: "ν", W: "ω", X: "χ", Y: "γ", Z: "ƶ"
  });

  // Style 13: Heart Arrow Box
  addStyle('fancy', 'fancy_heart_arrow_box', '♡»»——>┊', '┊<——««♡', {
    a: "a", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g", h: "h", i: "I", j: "j",
    k: "k", l: "l", m: "m", n: "n", o: "o", p: "p", q: "q", r: "r", s: "s", t: "t",
    u: "u", v: "v", w: "w", x: "x", y: "y", z: "z",
    A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H", I: "I", J: "J",
    K: "K", L: "L", M: "M", N: "N", O: "O", P: "P", Q: "Q", R: "R", S: "S", T: "T",
    U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Z"
  });

  // Style 14: Arrow Heart
  addStyle('fancy', 'fancy_arrow_heart', '»»———>', ' ♡', {
    a: "a", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g", h: "h", i: "I", j: "j",
    k: "k", l: "l", m: "m", n: "n", o: "o", p: "p", q: "q", r: "r", s: "s", t: "t",
    u: "u", v: "v", w: "w", x: "x", y: "y", z: "z",
    A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H", I: "I", J: "J",
    K: "K", L: "L", M: "M", N: "N", O: "O", P: "P", Q: "Q", R: "R", S: "S", T: "T",
    U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Z"
  });

  // Style 18: Devil Xx
  addStyle('fancy', 'fancy_devil_xx', 'xX_', '_Xx 😈', {
    a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
    k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
    u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣",
    A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
    K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
    U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉"
  });

  // Style 19: Arrow Star
  addStyle('fancy', 'fancy_arrow_star', '►►►', '₊˚·✰࿐', {
    a: "𝙖", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝙚", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝙞", j: "𝙟",
    k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝙤", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
    u: "𝙪", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝙮", z: "𝙯",
    A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝",
    K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
    U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭"
  });

  // Style 21: Line Accent
  addStyle('fancy', 'fancy_line_accent', '▁ ▂ ▄ ▅', '▅ ▄ ▂ ▁', {
    a: "á", b: "b", c: "ć", d: "d", e: "é", f: "f", g: "ǵ", h: "h", i: "í", j: "j",
    k: "ḱ", l: "ĺ", m: "ḿ", n: "ń", o: "ő", p: "ṕ", q: "q", r: "ŕ", s: "ś", t: "t",
    u: "ú", v: "v", w: "ẃ", x: "x", y: "ӳ", z: "ź",
    A: "Á", B: "B", C: "Ć", D: "D", E: "É", F: "F", G: "Ǵ", H: "H", I: "í", J: "J",
    K: "Ḱ", L: "Ĺ", M: "Ḿ", N: "Ń", O: "Ő", P: "Ṕ", Q: "Q", R: "Ŕ", S: "ś", T: "T",
    U: "Ű", V: "V", W: "Ẃ", X: "X", Y: "Ӳ", Z: "Ź"
  });

  // Style 22: Only Cross
  addStyle('fancy', 'fancy_only_cross', 'Oɴʟʏ乂', '乂 亗', {
    a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
    k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
    u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧",
    A: "A̷̷", B: "B̷̷", C: "C̷̷", D: "D̷̷", E: "E̷̷", F: "F̷̷", G: "G̷̷", H: "H̷̷", I: "I̷̷", J: "J̷̷",
    K: "K̷̷", L: "L̷̷", M: "M̷̷", N: "N̷̷", O: "O̷̷", P: "P̷̷", Q: "Q̷̷", R: "R̷̷", S: "S̷̷", T: "T̷̷",
    U: "U̷̷", V: "V̷̷", W: "W̷̷", X: "X̷̷", Y: "Y̷̷", Z: "Z̷̷"
  });

  // Style 23: Devil Box
  addStyle('fancy', 'fancy_devil_box', '༒░', '░༒ 😇', {
    a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
    k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
    u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧",
    A: "A̷̷", B: "B̷̷", C: "C̷̷", D: "D̷̷", E: "E̷̷", F: "F̷̷", G: "G̷̷", H: "H̷̷", I: "I̷̷", J: "J̷̷",
    K: "K̷̷", L: "L̷̷", M: "M̷̷", N: "N̷̷", O: "O̷̷", P: "P̷̷", Q: "Q̷̷", R: "R̷̷", S: "S̷̷", T: "T̷̷",
    U: "U̷̷", V: "V̷̷", W: "W̷̷", X: "X̷̷", Y: "Y̷̷", Z: "Z̷̷"
  });

  // Style 24: God Triangle
  addStyle('fancy', 'fancy_god_triangle', 'ᴳᵒᵈ ◣', '◢ ♛', {
    a: "á", b: "b", c: "ć", d: "d", e: "é", f: "f", g: "ǵ", h: "h", i: "í", j: "j",
    k: "ḱ", l: "ĺ", m: "ḿ", n: "ń", o: "ő", p: "ṕ", q: "q", r: "ŕ", s: "ś", t: "t",
    u: "ú", v: "v", w: "ẃ", x: "x", y: "ӳ", z: "ź",
    A: "Á", B: "B", C: "Ć", D: "D", E: "É", F: "F", G: "Ǵ", H: "H", I: "í", J: "J",
    K: "Ḱ", L: "Ĺ", M: "Ḿ", N: "Ń", O: "Ő", P: "Ṕ", Q: "Q", R: "Ŕ", S: "ś", T: "T",
    U: "Ű", V: "V", W: "Ẃ", X: "X", Y: "Ӳ", Z: "Ź"
  });

  // Style 25: Hand Heart
  addStyle('fancy', 'fancy_hand_heart', '么 ', ' 🫰🏻💞࿐', {
    a: "á", b: "b", c: "ć", d: "d", e: "é", f: "f", g: "ǵ", h: "h", i: "í", j: "j",
    k: "ḱ", l: "ĺ", m: "ḿ", n: "ń", o: "ő", p: "ṕ", q: "q", r: "ŕ", s: "ś", t: "t",
    u: "ú", v: "v", w: "ẃ", x: "x", y: "ӳ", z: "ź",
    A: "Á", B: "B", C: "Ć", D: "D", E: "É", F: "F", G: "Ǵ", H: "H", I: "í", J: "J",
    K: "Ḱ", L: "Ĺ", M: "Ḿ", N: "Ń", O: "Ő", P: "Ṕ", Q: "Q", R: "Ŕ", S: "ś", T: "T",
    U: "Ű", V: "V", W: "Ẃ", X: "X", Y: "Ӳ", Z: "Ź"
  });

  // Style 26: Devil Skull
  addStyle('fancy', 'fancy_devil_skull', '𝖉𝖊𝖛𝖎𝖑 >>', '┊💀࿐', {
    a: "ค", b: "ʙ", c: "ċ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ï", j: "ᴊ",
    k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "๑", p: "ᴘ", q: "ǫ", r: "я", s: "ꜱ", t: "ᴛ",
    u: "υ", v: "ᴠ", w: "ᴡ", x: "ẋ", y: "ʏ", z: "ᴢ",
    A: "ค", B: "ʙ", C: "ċ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ï", J: "ᴊ",
    K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "๑", P: "ᴘ", Q: "ǫ", R: "я", S: "ꜱ", T: "ᴛ",
    U: "υ", V: "ᴠ", W: "ᴡ", X: "ẋ", Y: "ʏ", Z: "ᴢ"
  });

  // Style 27: Khmer Style
  addStyle('fancy', 'fancy_khmer_style', '៚', ' ꤪꤨꤪꫂꪶ', {
    a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
    k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
    u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧",
    A: "A̷̷", B: "B̷̷", C: "C̷̷", D: "D̷̷", E: "E̷̷", F: "F̷̷", G: "G̷̷", H: "H̷̷", I: "I̷̷", J: "J̷̷",
    K: "K̷̷", L: "L̷̷", M: "M̷̷", N: "N̷̷", O: "O̷̷", P: "P̷̷", Q: "Q̷̷", R: "R̷̷", S: "S̷̷", T: "T̷̷",
    U: "U̷̷", V: "V̷̷", W: "W̷̷", X: "X̷̷", Y: "Y̷̷", Z: "Z̷̷"
  });
  
  // Style 121: Accented Latin
  addStyle('font', 'font_accented_latin', '', '', {
    a: "á", b: "b", c: "ć", d: "d", e: "é", f: "f", g: "ǵ", h: "h", i: "í", j: "j",
    k: "ḱ", l: "ĺ", m: "ḿ", n: "ń", o: "ő", p: "ṕ", q: "q", r: "ŕ", s: "ś", t: "t",
    u: "ú", v: "v", w: "ẃ", x: "x", y: "ӳ", z: "ź",
    A: "Á", B: "B", C: "Ć", D: "D", E: "É", F: "F", G: "Ǵ", H: "H", I: "Í", J: "J",
    K: "Ḱ", L: "Ĺ", M: "Ḿ", N: "Ń", O: "Ő", P: "Ṕ", Q: "Q", R: "Ŕ", S: "Ś", T: "T",
    U: "Ű", V: "V", W: "Ẃ", X: "X", Y: "Ӳ", Z: "Ź"
  });

  // Style 122: European Accented
  addStyle('font', 'font_european_accented', '', '', {
    a: "å", b: "ß", c: "¢", d: "Ð", e: "ê", f: "£", g: "g", h: "h", i: "Ì", j: "j",
    k: "k", l: "l", m: "m", n: "ñ", o: "ð", p: "þ", q: "q", r: "r", s: "§", t: "†",
    u: "µ", v: "v", w: "w", x: "x", y: "¥", z: "z",
    A: "Ä", B: "ß", C: "Ç", D: "Ð", E: "È", F: "£", G: "G", H: "H", I: "Ì", J: "J",
    K: "K", L: "L", M: "M", N: "ñ", O: "Ö", P: "þ", Q: "Q", R: "R", S: "§", T: "†",
    U: "Ú", V: "V", W: "W", X: "×", Y: "¥", Z: "Z"
  });

  // Style 123: Mixed Strikethrough Italic
  addStyle('font', 'font_mixed_strikethrough_italic', '', '', {
    a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
    k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
    u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧",
    A: "A̷̷", B: "B̷̷", C: "C̷̷", D: "D̷̷", E: "E̷̷", F: "F̷̷", G: "G̷̷", H: "H̷̷", I: "I̷̷", J: "J̷̷",
    K: "K̷̷", L: "L̷̷", M: "M̷̷", N: "N̷̷", O: "O̷̷", P: "P̷̷", Q: "Q̷̷", R: "R̷̷", S: "S̷̷", T: "T̷̷",
    U: "U̷̷", V: "V̷̷", W: "W̷̷", X: "X̷̷", Y: "Y̷̷", Z: "Z̷̷"
  });

  // Style 124: Mixed Strikethrough Pattern
  addStyle('font', 'font_mixed_strikethrough_pattern', '', '', {
    a: "a", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g", h: "h", i: "i", j: "j",
    k: "k", l: "l", m: "m", n: "n", o: "o", p: "p", q: "q", r: "r", s: "s", t: "t",
    u: "u", v: "v", w: "w", x: "x", y: "y", z: "z",
    A: "A̷̷", B: "B̶", C: "C̶", D: "D̶", E: "E̷̷", F: "F̶", G: "G̶", H: "H̶", I: "I̷̷", J: "J̶",
    K: "K̶", L: "L̶", M: "M̶", N: "N̶", O: "O̷̷", P: "P̶", Q: "Q̶", R: "R̶", S: "S̶", T: "T̶",
    U: "U̷̷", V: "V̶", W: "W̶", X: "X̶", Y: "Y̷̷", Z: "Z̶"
  });

  // Style 125: Bold Alternate 2
  addStyle('font', 'font_bold_alternate_2', '', '', {
    a: "ᗩ", b: "ᗷ", c: "ᑕ", d: "ᗪ", e: "ᗴ", f: "ᖴ", g: "Ꮐ", h: "ᕼ", i: "Ꭵ", j: "ᒍ",
    k: "Ꮶ", l: "Ꮮ", m: "ᗰ", n: "ᑎ", o: "Ө", p: "ᑭ", q: "ᑫ", r: "ᖇ", s: "S", t: "Ƭ",
    u: "ᑌ", v: "ᐯ", w: "ᗯ", x: "᙭", y: "ϓ", z: "ᘔ",
    A: "ᗩ", B: "ᗷ", C: "ᑕ", D: "ᗪ", E: "ᗴ", F: "ᖴ", G: "Ꮐ", H: "ᕼ", I: "Ꭵ", J: "ᒍ",
    K: "Ꮶ", L: "Ꮮ", M: "ᗰ", N: "ᑎ", O: "Ө", P: "ᑭ", Q: "ᑫ", R: "ᖇ", S: "S", T: "Ƭ",
    U: "ᑌ", V: "ᐯ", W: "ᗯ", X: "᙭", Y: "ϓ", Z: "ᘔ"
  });

  // Style 126: Small Caps with Accent
  addStyle('font', 'font_small_caps_accent', '', '', {
    a: "ᴀ", b: "ʙ", c: "ċ", d: "ᴅ", e: "፝ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ï", j: "נ",
    k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "𖹭", p: "ᴘ", q: "ǫ", r: "я", s: "ꜱ", t: "፝ᴛ",
    u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ƶ",
    A: "ᴀ", B: "ʙ", C: "ċ", D: "ᴅ", E: "፝ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ï", J: "נ",
    K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "𖹭", P: "ᴘ", Q: "ǫ", R: "я", S: "ꜱ", T: "፝ᴛ",
    U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ƶ"
  });

  // Style 127: Thai Accent
  addStyle('font', 'font_thai_accent', '', '', {
    a: "a", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g", h: "h", i: "I", j: "j",
    k: "k", l: "l", m: "m", n: "n", o: "o", p: "p", q: "q", r: "r", s: "s", t: "t",
    u: "u", v: "v", w: "w", x: "x", y: "y", z: "z",
    A: "๖ۣۜA", B: "๖ۣۜB", C: "๖ۣۜC", D: "๖ۣۜD", E: "๖ۣۜE", F: "๖ۣۜF", G: "๖ۣۜG", H: "๖ۣۜH", I: "๖ۣۜI", J: "๖ۣۜJ",
    K: "๖ۣۜK", L: "๖ۣۜL", M: "๖ۣۜM", N: "๖ۣۜN", O: "๖ۣۜO", P: "๖ۣۜP", Q: "๖ۣۜQ", R: "๖ۣۜR", S: "๖ۣۜS", T: "๖ۣۜT",
    U: "๖ۣۜU", V: "๖ۣۜV", W: "๖ۣۜW", X: "๖ۣۜX", Y: "๖ۣۜY", Z: "๖ۣۜZ"
  });

  // Style 128: Thai-English Mix
  addStyle('font', 'font_thai_english_mix', '', '', {
    a: "ภ", b: "ʙ", c: "ς", d: "ᴅ", e: "є", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
    k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "๏", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
    u: "ย", v: "ᴠ", w: "ฬ", x: "א", y: "ʏ", z: "ᴢ",
    A: "ภ", B: "ʙ", C: "ς", D: "ᴅ", E: "є", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
    K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "๏", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
    U: "ย", V: "ᴠ", W: "ฬ", X: "א", Y: "ʏ", Z: "ᴢ"
  });

  // Style 129: Greek-Thai Mix
  addStyle('font', 'font_greek_thai_mix', '', '', {
    a: "ภ", b: "ʙ", c: "ς", d: "ᴅ", e: "є", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
    k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "๏", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
    u: "ย", v: "ᴠ", w: "ฬ", x: "א", y: "ʏ", z: "ᴢ",
    A: "Λ", B: "Β", C: "Ͻ", D: "Ɗ", E: "Ξ", F: "Ƒ", G: "Ɠ", H: "H", I: "Ι", J: "Ј",
    K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ø", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
    U: "U", V: "V", W: "Ω", X: "Χ", Y: "Ƴ", Z: "Ζ"
  });

  // Style 130: Arrow Brackets
  addStyle('font', 'font_arrow_brackets', '', '', {
    a: "»ᴀ«", b: "»ʙ«", c: "»ᴄ«", d: "»ᴅ«", e: "»ᴇ«", f: "»ꜰ«", g: "»ɢ«", h: "»ʜ«", i: "»ɪ«", j: "»ᴊ«",
    k: "»ᴋ«", l: "»ʟ«", m: "»ᴍ«", n: "»ɴ«", o: "»ᴏ«", p: "»ᴘ«", q: "»ǫ«", r: "»ʀ«", s: "»ꜱ«", t: "»ᴛ«",
    u: "»ᴜ«", v: "»ᴠ«", w: "»ᴡ«", x: "»x«", y: "»ʏ«", z: "»ᴢ«",
    A: "»ᴀ«", B: "»ʙ«", C: "»ᴄ«", D: "»ᴅ«", E: "»ᴇ«", F: "»ꜰ«", G: "»ɢ«", H: "»ʜ«", I: "»ɪ«", J: "»ᴊ«",
    K: "»ᴋ«", L: "»ʟ«", M: "»ᴍ«", N: "»ɴ«", O: "»ᴏ«", P: "»ᴘ«", Q: "»ǫ«", R: "»ʀ«", S: "»ꜱ«", T: "»ᴛ«",
    U: "»ᴜ«", V: "»ᴠ«", W: "»ᴡ«", X: "»x«", Y: "»ʏ«", Z: "»ᴢ«"
  });
  
  // Style 1: Accented with Decoration
  addStyle('font', 'font_accented_decorated', '', '', {
    a: "α", b: "в", c: "ꤪꤨꤪc", d: "ɗ", e: "ꤪꤨꤪ ε", f: "ƒ", g: "ɠ", h: "ꤪꤨꤪ н", i: "ɪ", j: "נ",
    k: "ꤪꤨꤪ κ", l: "ℓ", m: "м", n: "ꤪꤨꤪ η", o: "σ", p: "ρ", q: "ꤪꤨꤪ զ", r: "ꤪꤨꤪ я", s: "ꤪꤨꤪ ѕ", t: "ꤪꤨꤪ τ",
    u: "ꤪꤨꤪ υ", v: "ν", w: "ꤪꤨꤪ ω", x: "ꤪꤨꤪ x", y: "ꤪꤨꤪʏ", z: "ꤪꤨꤪƶ",
    A: "α", B: "в", C: "ꤪꤨꤪc", D: "ɗ", E: "ꤪꤨꤪ ε", F: "ƒ", G: "ɠ", H: "ꤪꤨꤪ н", I: "ɪ", J: "נ",
    K: "ꤪꤨꤪ κ", L: "ℓ", M: "м", N: "ꤪꤨꤪ η", O: "σ", P: "ρ", Q: "ꤪꤨꤪ զ", R: "ꤪꤨꤪ я", S: "ꤪꤨꤪ ѕ", T: "ꤪꤨꤪ τ",
    U: "ꤪꤨꤪ υ", V: "ν", W: "ꤪꤨꤪ ω", X: "ꤪꤨꤪ x", Y: "ꤪꤨꤪʏ", Z: "ꤪꤨꤪƶ"
  });

  // Style 2: Sans Serif with Triangle
  addStyle('font', 'font_sans_serif_triangle', '', '', {
    a: "𝘢▄▀", b: "𝘣▄▀", c: "𝘤▄▀", d: "𝘥▄▀", e: "𝘦▄▀", f: "𝘧▄▀", g: "𝘨▄▀", h: "𝘩▄▀", i: "𝘪▄▀", j: "𝘫▄▀",
    k: "𝘬▄▀", l: "𝘭▄▀", m: "𝘮▄▀", n: "𝘯▄▀", o: "𝘰▄▀", p: "𝘱▄▀", q: "𝘲▄▀", r: "𝘳▄▀", s: "𝘴▄▀", t: "𝘵▄▀",
    u: "𝘶▄▀", v: "𝘷▄▀", w: "𝘸▄▀", x: "𝘹▄▀", y: "𝘺▄▀", z: "𝘻▄▀",
    A: "𝘈▄▀", B: "𝘉▄▀", C: "𝘊▄▀", D: "𝘋▄▀", E: "𝘌▄▀", F: "𝘍▄▀", G: "𝘎▄▀", H: "𝘏▄▀", I: "𝘐▄▀", J: "𝘑▄▀",
    K: "𝘒▄▀", L: "𝘓▄▀", M: "𝘔▄▀", N: "𝘕▄▀", O: "𝘖▄▀", P: "𝘗▄▀", Q: "𝘘▄▀", R: "𝘙▄▀", S: "𝘚▄▀", T: "𝘛▄▀",
    U: "𝘜▄▀", V: "𝘝▄▀", W: "𝘞▄▀", X: "𝘟▄▀", Y: "𝘠▄▀", Z: "𝘡▄▀"
  });

  // Style 3: Small Caps Basic
  addStyle('font', 'font_small_caps_basic', '', '', {
    a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
    k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
    u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "z",
    A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H", I: "I", J: "J",
    K: "K", L: "L", M: "M", N: "N", O: "O", P: "P", Q: "Q", R: "R", S: "S", T: "T",
    U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Z"
  });

  // Style 4: Runic with Accent
  addStyle('font', 'font_runic_accent', '', '', {
    a: "𐌰", b: "𐌱", c: "ċ", d: "𐌳", e: "፝ᴇ", f: "𐍆", g: "𐌾", h: "𐌷", i: "𐌹", j: "𐌻",
    k: "𐌺", l: "ʝ", m: "𐌼", n: "𐌽", o: "𐍈", p: "𐍉", q: "զ", r: "𐍂", s: "𐍃", t: "𐍄",
    u: "υ", v: "𝚅", w: "ω", x: "𐍇", y: "𐍅", z: "𐌶",
    A: "𐌰", B: "𐌱", C: "ċ", D: "𐌳", E: "፝ᴇ", F: "𐍆", G: "𐌾", H: "𐌷", I: "𐌹", J: "𐌻",
    K: "𐌺", L: "ʝ", M: "𐌼", N: "𐌽", O: "𐍈", P: "𐍉", Q: "զ", R: "𐍂", S: "𐍃", T: "𐍄",
    U: "υ", V: "𝚅", W: "ω", X: "𐍇", Y: "𐍅", Z: "𐌶"
  });

  // Style 5: Smiley Faces
  addStyle('font', 'font_smiley_faces', '', '', {
    a: "a:)", b: "b:)", c: "c:)", d: "d:)", e: "e:)", f: "f:)", g: "g:)", h: "h:)", i: "i:)", j: "j:)",
    k: "k:)", l: "l:)", m: "m:)", n: "n:)", o: "o:)", p: "p:)", q: "q:)", r: "r:)", s: "s:)", t: "t:)",
    u: "u:)", v: "v:)", w: "w:)", x: "x:)", y: "y:)", z: "z:)",
    A: "A:)", B: "B:)", C: "C:)", D: "D:)", E: "E:)", F: "F:)", G: "G:)", H: "H:)", I: "I:)", J: "J:)",
    K: "K:)", L: "L:)", M: "M:)", N: "N:)", O: "O:)", P: "P:)", Q: "Q:)", R: "R:)", S: "S:)", T: "T:)",
    U: "U:)", V: "V:)", W: "W:)", X: "X:)", Y: "Y:)", Z: "Z:)"
  });

  // Style 6: Dot Separated
  addStyle('font', 'font_dot_separated', '', '', {
    a: "a•", b: "b•", c: "c•", d: "d•", e: "e•", f: "f•", g: "g•", h: "h•", i: "i•", j: "j•",
    k: "k•", l: "l•", m: "m•", n: "n•", o: "o•", p: "p•", q: "q•", r: "r•", s: "s•", t: "t•",
    u: "u•", v: "v•", w: "w•", x: "x•", y: "y•", z: "z•",
    A: "A•", B: "B•", C: "C•", D: "D•", E: "E•", F: "F•", G: "G•", H: "H•", I: "I•", J: "J•",
    K: "K•", L: "L•", M: "M•", N: "N•", O: "O•", P: "P•", Q: "Q•", R: "R•", S: "S•", T: "T•",
    U: "U•", V: "V•", W: "W•", X: "X•", Y: "Y•", Z: "Z•"
  });

  // Style 7: Accented Greek-Latin Mix
  addStyle('font', 'font_accented_greek_latin', '', '', {
    a: "α", b: "в", c: "ċ", d: "ɗ", e: "ᥱ", f: "ƒ", g: "ĝ", h: "ħ", i: "ï", j: "ʝ",
    k: "ᴋ", l: "ι", m: "ᴍ", n: "ռ", o: "ᦞ", p: "թ", q: "զ", r: "ř", s: "s̶", t: "τ",
    u: "𝛖", v: "𝛎", w: "w̶", x: "ẋ", y: "ʏ", z: "ƶ",
    A: "ᴀ", B: "ʙ", C: "ċ", D: "ᴅ", E: "ᥱ", F: "Ғ", G: "ɢ", H: "ʜ", I: "ɪ", J: "נ",
    K: "ƙ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ᦙ", R: "ᚱ", S: "ꜱ", T: "τ",
    U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "᥊", Y: "γ", Z: "ᴢ"
  });
  
  // Style 2: Script with Heart Decoration
  addStyle('love', 'love_script_hearts', '₊˚⊹♡ ', ' ♡⊹˚₊', {
    a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳",
    k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽",
    u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃",
    A: "𝒜", B: "𝐵", C: "𝒞", D: "𝒟", E: "𝐸", F: "𝐹", G: "𝒢", H: "𝐻", I: "𝐼", J: "𝒥",
    K: "𝐾", L: "𝐿", M: "𝑀", N: "𝒩", O: "𝒪", P: "𝒫", Q: "𝒬", R: "𝑅", S: "𝒮", T: "𝒯",
    U: "𝒰", V: "𝒱", W: "𝒲", X: "𝒳", Y: "𝒴", Z: "𝒵"
  });

  // Style 3: Script with Heart Decoration 2
  addStyle('love', 'love_script_hearts_2', '༒♡₊˚', '˚₊♡༒', {
    a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳",
    k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽",
    u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃",
    A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘", J: "𝓙",
    K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣",
    U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩"
  });

  // Style 6: Bold Italic with Ribbon Decoration
  addStyle('love', 'love_bold_italic_ribbon', '˚₊🎀⃟♡ ┊', '┊ 𐙚•͜•𐙚', {
    a: "𝒂", b: "𝒃", c: "𝒄", d: "𝒅", e: "𝒆", f: "𝒇", g: "𝒈", h: "𝒉", i: "𝒊", j: "𝒋",
    k: "𝒌", l: "𝒍", m: "𝒎", n: "𝒏", o: "𝒐", p: "𝒑", q: "𝒒", r: "𝒓", s: "𝒔", t: "𝒕",
    u: "𝒖", v: "𝒗", w: "𝒘", x: "𝒙", y: "𝒚", z: "𝒛",
    A: "𝑨", B: "𝑩", C: "𝑪", D: "𝑫", E: "𝑬", F: "𝑭", G: "𝑮", H: "𝑯", I: "𝑰", J: "𝑱",
    K: "𝑲", L: "𝑳", M: "𝑴", N: "𝑵", O: "𝑶", P: "𝑷", Q: "𝑸", R: "𝑹", S: "𝑺", T: "𝑻",
    U: "𝑼", V: "𝑽", W: "𝑾", X: "𝑿", Y: "𝒀", Z: "𝒁"
  });

  // Style 7: Bold Italic with Bracket Decoration
  addStyle('love', 'love_bold_italic_bracket', 'ᴍr͢『', '』☻', {
    a: "𝒂", b: "𝒃", c: "𝒄", d: "𝒅", e: "𝒆", f: "𝒇", g: "𝒈", h: "𝒉", i: "𝒊", j: "𝒋",
    k: "𝒌", l: "𝒍", m: "𝒎", n: "𝒏", o: "𝒐", p: "𝒑", q: "𝒒", r: "𝒓", s: "𝒔", t: "𝒕",
    u: "𝒖", v: "𝒗", w: "𝒘", x: "𝒙", y: "𝒚", z: "𝒛",
    A: "𝑨", B: "𝑩", C: "𝑪", D: "𝑫", E: "𝑬", F: "𝑭", G: "𝑮", H: "𝑯", I: "𝑰", J: "𝑱",
    K: "𝑲", L: "𝑳", M: "𝑴", N: "𝑵", O: "𝑶", P: "𝑷", Q: "𝑸", R: "𝑹", S: "𝑺", T: "𝑻",
    U: "𝑼", V: "𝑽", W: "𝑾", X: "𝑿", Y: "𝒀", Z: "𝒁"
  });

  // Style 8: Bold Italic with Star Decoration
  addStyle('love', 'love_bold_italic_stars', '⋆｡˚♡₊˚ ', ' ˚₊♡˚｡⋆', {
    a: "𝒂", b: "𝒃", c: "𝒄", d: "𝒅", e: "𝒆", f: "𝒇", g: "𝒈", h: "𝒉", i: "𝒊", j: "𝒋",
    k: "𝒌", l: "𝒍", m: "𝒎", n: "𝒏", o: "𝒐", p: "𝒑", q: "𝒒", r: "𝒓", s: "𝒔", t: "𝒕",
    u: "𝒖", v: "𝒗", w: "𝒘", x: "𝒙", y: "𝒚", z: "𝒛",
    A: "𝑨", B: "𝑩", C: "𝑪", D: "𝑫", E: "𝑬", F: "𝑭", G: "𝑮", H: "𝑯", I: "𝑰", J: "𝑱",
    K: "𝑲", L: "𝑳", M: "𝑴", N: "𝑵", O: "𝑶", P: "𝑷", Q: "𝑸", R: "𝑹", S: "𝑺", T: "𝑻",
    U: "𝑼", V: "𝑽", W: "𝑾", X: "𝑿", Y: "𝒀", Z: "𝒁"
  });

  // Style 12: Bold Italic with Degree Decoration
  addStyle('love', 'love_bold_italic_degree', '༒♡°', '°♡༒', {
    a: "𝒂", b: "𝒃", c: "𝒄", d: "𝒅", e: "𝒆", f: "𝒇", g: "𝒈", h: "𝒉", i: "𝒊", j: "𝒋",
    k: "𝒌", l: "𝒍", m: "𝒎", n: "𝒏", o: "𝒐", p: "𝒑", q: "𝒒", r: "𝒓", s: "𝒔", t: "𝒕",
    u: "𝒖", v: "𝒗", w: "𝒘", x: "𝒙", y: "𝒚", z: "𝒛",
    A: "𝑨", B: "𝑩", C: "𝑪", D: "𝑫", E: "𝑬", F: "𝑭", G: "𝑮", H: "𝑯", I: "𝑰", J: "𝑱",
    K: "𝑲", L: "𝑳", M: "𝑴", N: "𝑵", O: "𝑶", P: "𝑷", Q: "𝑸", R: "𝑹", S: "𝑺", T: "𝑻",
    U: "𝑼", V: "𝑽", W: "𝑾", X: "𝑿", Y: "𝒀", Z: "𝒁"
  });

  // Style 9: Circled with Fish Decoration
  addStyle('love', 'love_circled_fish', '╰⊱𓆩', '𓆪⊰╯', {
    a: "ⓐ", b: "ⓑ", c: "ⓒ", d: "ⓓ", e: "ⓔ", f: "ⓕ", g: "ⓖ", h: "ⓗ", i: "ⓘ", j: "ⓙ",
    k: "ⓚ", l: "ⓛ", m: "ⓜ", n: "ⓝ", o: "ⓞ", p: "ⓟ", q: "ⓠ", r: "ⓡ", s: "ⓢ", t: "ⓣ",
    u: "ⓤ", v: "ⓥ", w: "ⓦ", x: "ⓧ", y: "ⓨ", z: "ⓩ",
    A: "Ⓐ", B: "Ⓑ", C: "Ⓒ", D: "Ⓓ", E: "Ⓔ", F: "Ⓕ", G: "Ⓖ", H: "Ⓗ", I: "Ⓘ", J: "Ⓙ",
    K: "Ⓚ", L: "Ⓛ", M: "Ⓜ", N: "Ⓝ", O: "Ⓞ", P: "Ⓟ", Q: "Ⓠ", R: "Ⓡ", S: "Ⓢ", T: "Ⓣ",
    U: "Ⓤ", V: "Ⓥ", W: "Ⓦ", X: "Ⓧ", Y: "Ⓨ", Z: "Ⓩ"
  });

  // Style 10: Bold Sans Serif with Hearts
  addStyle('love', 'love_bold_sans_hearts', '♡₊˚⊹ ', ' ⊹˚₊♡', {
    a: "𝗮", b: "𝗯", c: "𝗰", d: "𝗱", e: "𝗲", f: "𝗳", g: "𝗴", h: "𝗵", i: "𝗶", j: "𝗷",
    k: "𝗸", l: "𝗹", m: "𝗺", n: "𝗻", o: "𝗼", p: "𝗽", q: "𝗾", r: "𝗿", s: "𝘀", t: "𝘁",
    u: "𝘂", v: "𝘃", w: "𝘄", x: "𝘅", y: "𝘆", z: "𝘇",
    A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝",
    K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
    U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭"
  });

  // Style 16: Bold Italic with Sparkle Hearts
  addStyle('love', 'love_bold_italic_sparkle', '♡₊˚✦ ', ' ✦˚₊♡', {
    a: "𝒂", b: "𝒃", c: "𝒄", d: "𝒅", e: "𝒆", f: "𝒇", g: "𝒈", h: "𝒉", i: "𝒊", j: "𝒋",
    k: "𝒌", l: "𝒍", m: "𝒎", n: "𝒏", o: "𝒐", p: "𝒑", q: "𝒒", r: "𝒓", s: "𝒔", t: "𝒕",
    u: "𝒖", v: "𝒗", w: "𝒘", x: "𝒙", y: "𝒚", z: "𝒛",
    A: "𝑨", B: "𝑩", C: "𝑪", D: "𝑫", E: "𝑬", F: "𝑭", G: "𝑮", H: "𝑯", I: "𝑰", J: "𝑱",
    K: "𝑲", L: "𝑳", M: "𝑴", N: "𝑵", O: "𝑶", P: "𝑷", Q: "𝑸", R: "𝑹", S: "𝑺", T: "𝑻",
    U: "𝑼", V: "𝑽", W: "𝑾", X: "𝑿", Y: "𝒀", Z: "𝒁"
  });

  // Style 23: VIP Italic Style
  addStyle('love', 'love_vip_italic', 'ᴠͥɪͣᴘͫ ✿⃟', '┋ ༻', {
    a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
    k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
    u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧",
    A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
    K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
    U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍"
  });

  // Style 24: Double Struck with Symbol Decoration
  addStyle('love', 'love_double_struck_symbol', '╬ ', ' ══≪ 𓆩𖤍𓆪', {
    a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
    k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
    u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫",
    A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
    K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
    U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ"
  });

  // Style 5: Greek with Forever Decoration
  addStyle('love', 'love_greek_forever', '🎀⃟', ' ꪎ ƒοřєνєř', {
    a: "𝚨", b: "𝚩", c: "𝚪", d: "𝚫", e: "𝚬", f: "𝚺", g: "𝛀", h: "𝚮", i: "𝚰", j: "𝗝",
    k: "𝚱", l: "𝚲", m: "𝚳", n: "𝚴", o: "𝚶", p: "𝚸", q: "𝚽", r: "𝗥", s: "𝚵", t: "𝚻",
    u: "𝚷", v: "𝚼", w: "𝗪", x: "𝚾", y: "𝚿", z: "𝚭",
    A: "𝚨", B: "𝚩", C: "𝚪", D: "𝚫", E: "𝚬", F: "𝚺", G: "𝛀", H: "𝚮", I: "𝚰", J: "𝗝",
    K: "𝚱", L: "𝚲", M: "𝚳", N: "𝚴", O: "𝚶", P: "𝚸", Q: "𝚽", R: "𝗥", S: "𝚵", T: "𝚻",
    U: "𝚷", V: "𝚼", W: "𝗪", X: "𝚾", Y: "𝚿", Z: "𝚭"
  });

  // Style 6: Mixed Style with Heart Decoration
  addStyle('love', 'love_mixed_heart', 'ƒo͢řєνєř 🫰🏻 ║', '║💞', {
    a: "ⓐ", b: "b͢", c: "c͢", d: "d͢", e: "ⓔ", f: "f͢", g: "g͢", h: "h͢", i: "ⓘ", j: "j͢",
    k: "k͢", l: "l͢", m: "m͢", n: "n͢", o: "ⓞ", p: "p͢", q: "q͢", r: "r͢", s: "s͢", t: "t͢",
    u: "ⓤ", v: "v͢", w: "w͢", x: "x͢", y: "ⓨ", z: "z͢",
    A: "Ⓐ", B: "B͢", C: "C͢", D: "D͢", E: "Ⓔ", F: "F͢", G: "G͢", H: "H͢", I: "Ⓘ", J: "J͢",
    K: "K͢", L: "L͢", M: "M͢", N: "N͢", O: "Ⓞ", P: "P͢", Q: "Q͢", R: "R͢", S: "S͢", T: "T͢",
    U: "U͢", V: "Ⓤ", W: "W͢", X: "X͢", Y: "Ⓨ", Z: "Z͢"
  });

  // Style 7: Monospace with Flower Decoration
  addStyle('love', 'love_monospace_flowers', '⸝⸝⸝✿⸝⸝⸝', '⸝⸝⸝✿⸝⸝⸝', {
    a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
    k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
    u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣",
    A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
    K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
    U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉"
  });

  // Style 8: Monospace with Special Flower Decoration
  addStyle('love', 'love_monospace_special_flower', '⸝⸝⸝𖹭⸝⸝⸝', '⸝⸝⸝𖹭⸝⸝⸝', {
    a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
    k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
    u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣",
    A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
    K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
    U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉"
  });

  // Style 9: Panda Italic Style
  addStyle('love', 'love_panda_italic', '🐼⃞ᴵᵐ•', '᭄࿐', {
    a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
    k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
    u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧",
    A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
    K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
    U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍"
  });

  // Style 10: Monospace with Heart Hands
  addStyle('love', 'love_monospace_heart_hands', '💕⃝', ' ⋆.🫰🏻💗', {
    a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
    k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
    u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣",
    A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
    K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
    U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉"
  });
  
  // Style 7: Fullwidth with Symbol Frame
  addStyle('gamer', 'gamer_fullwidth_frame', '༒《☯', '☯》༒➆➆➆', {
    a: "ａ", b: "ｂ", c: "ｃ", d: "ｄ", e: "ｅ", f: "ｆ", g: "ｇ", h: "ｈ", i: "ｉ", j: "ｊ",
    k: "ｋ", l: "ｌ", m: "ｍ", n: "ｎ", o: "ｏ", p: "ｐ", q: "ｑ", r: "ｒ", s: "ｓ", t: "ｔ",
    u: "ｕ", v: "ｖ", w: "ｗ", x: "ｘ", y: "ｙ", z: "ｚ",
    A: "Ａ", B: "Ｂ", C: "Ｃ", D: "Ｄ", E: "Ｅ", F: "Ｆ", G: "Ｇ", H: "Ｈ", I: "Ｉ", J: "Ｊ",
    K: "Ｋ", L: "Ｌ", M: "Ｍ", N: "Ｎ", O: "Ｏ", P: "Ｐ", Q: "Ｑ", R: "Ｒ", S: "Ｓ", T: "Ｔ",
    U: "Ｕ", V: "Ｖ", W: "Ｗ", X: "Ｘ", Y: "Ｙ", Z: "Ｚ"
  });

  // Style 8: Special with Pro Tag
  addStyle('gamer', 'gamer_pro_special', '𝖕𝖗𝖔 ✰', '✰ 𝟹ꪎ', {
    a: "ꫝ", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g", h: "h", i: "ɪ᪻ͥᷱ᷍", j: "j",
    k: "k", l: "l", m: "m", n: "n", o: "Ꭷ", p: "p", q: "q", r: "r", s: "s", t: "t",
    u: "ꪽ", v: "v", w: "w", x: "x", y: "y", z: "z",
    A: "ꫝ", B: "B", C: "C", D: "D", E: "E̷̷", F: "F", G: "G", H: "H", I: "ɪ᪻ͥᷱ᷍", J: "J",
    K: "K", L: "L", M: "M", N: "N", O: "Ꭷ", P: "P", Q: "Q", R: "R", S: "S", T: "T",
    U: "ꪽ", V: "V", W: "W", X: "X", Y: "Y", Z: "Z"
  });

  // Style 9: Strikethrough with Gamer Tag
  addStyle('gamer', 'gamer_strikethrough', '༒', '༒ᴳ̸ᴬ̸ᴹ̸ᴱ̸ᴿ̸ ✓', {
    a: "a̶", b: "b̶", c: "c̶", d: "d̶", e: "e̶", f: "f̶", g: "g̶", h: "h̶", i: "i̶", j: "j̶",
    k: "k̶", l: "l̶", m: "m̶", n: "n̶", o: "o̶", p: "p̶", q: "q̶", r: "r̶", s: "s̶", t: "t̶",
    u: "u̶", v: "v̶", w: "w̶", x: "x̶", y: "y̶", z: "z̶",
    A: "A̶", B: "B̶", C: "C̶", D: "D̶", E: "E̶", F: "F̶", G: "G̶", H: "H̶", I: "I̶", J: "J̶",
    K: "K̶", L: "L̶", M: "M̶", N: "N̶", O: "O̶", P: "P̶", Q: "Q̶", R: "R̶", S: "S̶", T: "T̶",
    U: "U̶", V: "V̶", W: "W̶", X: "X̶", Y: "Y̶", Z: "Z̶"
  });

  // Style 11: Thai Inspired
  addStyle('gamer', 'gamer_thai_style', '𝖋𝖋 ', ' ⓥ', {
    a: "ค", b: "ʙ", c: "ċ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ï", j: "ᴊ",
    k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "๑", p: "ᴘ", q: "ǫ", r: "я", s: "ꜱ", t: "ᴛ",
    u: "υ", v: "ᴠ", w: "ᴡ", x: "ẋ", y: "ʏ", z: "ᴢ",
    A: "ค", B: "ʙ", C: "ċ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ï", J: "ᴊ",
    K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "๑", P: "ᴘ", Q: "ǫ", R: "я", S: "ꜱ", T: "ᴛ",
    U: "υ", V: "ᴠ", W: "ᴡ", X: "ẋ", Y: "ʏ", Z: "ᴢ"
  });

  // Style 12: Circled with Number Tag
  addStyle('gamer', 'gamer_circled_number', '╰⁔╯', ' 𝟶𝟶𝟽', {
    a: "ⓐ", b: "ⓑ", c: "ⓒ", d: "ⓓ", e: "ⓔ", f: "ⓕ", g: "ⓖ", h: "ⓗ", i: "ⓘ", j: "ⓙ",
    k: "ⓚ", l: "ⓛ", m: "ⓜ", n: "ⓝ", o: "ⓞ", p: "ⓟ", q: "ⓠ", r: "ⓡ", s: "ⓢ", t: "ⓣ",
    u: "ⓤ", v: "ⓥ", w: "ⓦ", x: "ⓧ", y: "ⓨ", z: "ⓩ",
    A: "Ⓐ", B: "Ⓑ", C: "Ⓒ", D: "Ⓓ", E: "Ⓔ", F: "Ⓕ", G: "Ⓖ", H: "Ⓗ", I: "Ⓘ", J: "Ⓙ",
    K: "Ⓚ", L: "Ⓛ", M: "Ⓜ", N: "Ⓝ", O: "Ⓞ", P: "Ⓟ", Q: "Ⓠ", R: "Ⓡ", S: "Ⓢ", T: "Ⓣ",
    U: "Ⓤ", V: "Ⓥ", W: "Ⓦ", X: "Ⓧ", Y: "Ⓨ", Z: "Ⓩ"
  });

  // Style 13: Strikethrough with Symbol Frame
  addStyle('gamer', 'gamer_strikethrough_frame', '꧁✯', '✯꧂', {
    a: "a̷", b: "b̷", c: "c̷", d: "d̷", e: "e̷", f: "f̷", g: "g̷", h: "h̷", i: "i̷", j: "j̷",
    k: "k̷", l: "l̷", m: "m̷", n: "n̷", o: "o̷", p: "p̷", q: "q̷", r: "r̷", s: "s̷", t: "t̷",
    u: "u̷", v: "v̷", w: "w̷", x: "x̷", y: "y̷", z: "z̷",
    A: "A̷̷", B: "B̷̷", C: "C̷̷", D: "D̷̷", E: "E̷̷", F: "F̷̷", G: "G̷̷", H: "H̷̷", I: "I̷̷", J: "J̷̷",
    K: "K̷̷", L: "L̷̷", M: "M̷̷", N: "N̷̷", O: "O̷̷", P: "P̷̷", Q: "Q̷̷", R: "R̷̷", S: "S̷̷", T: "T̷̷",
    U: "U̷̷", V: "V̷̷", W: "W̷̷", X: "X̷̷", Y: "Y̷̷", Z: "Z̷̷"
  });

  // Style 14: Special with Yin Yang Frame
  addStyle('gamer', 'gamer_yinyang_frame', '꧁⊹˚☯⊱', '⊰☯˚⊹꧂', {
    a: "ꫝ", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g", h: "h", i: "ɪ᪻ͥᷱ᷍", j: "j",
    k: "k", l: "l", m: "m", n: "n", o: "Ꭷ", p: "p", q: "q", r: "r", s: "s", t: "t",
    u: "ꪽ", v: "v", w: "w", x: "x", y: "y", z: "z",
    A: "ꫝ", B: "B", C: "C", D: "D", E: "E̷̷", F: "F", G: "G", H: "H", I: "ɪ᪻ͥᷱ᷍", J: "J",
    K: "K", L: "L", M: "M", N: "N", O: "Ꭷ", P: "P", Q: "Q", R: "R", S: "S", T: "T",
    U: "ꪽ", V: "V", W: "W", X: "X", Y: "Y", Z: "Z"
  });

  // Style 15: Sans Serif with Smiley
  addStyle('gamer', 'gamer_sans_serif_smiley', '●⃝☻', ' ⊹࿐', {
    a: "ꫝ", b: "𝘉", c: "Ͻ", d: "𝘋", e: "Ξ", f: "𝘍", g: "𝘎", h: "𝘏", i: "Ί", j: "𝘑",
    k: "𝘒", l: "𝘓", m: "𝘔", n: "𝘕", o: "Ꮎ", p: "𝘗", q: "𝘘", r: "𝘙", s: "𝘚", t: "𝘛",
    u: "Ü", v: "𝘝", w: "𝘞", x: "𝘟", y: "Y", z: "Ż",
    A: "ꫝ", B: "𝘉", C: "Ͻ", D: "𝘋", E: "Ξ", F: "𝘍", G: "𝘎", H: "𝘏", I: "Ί", J: "𝘑",
    K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "Ꮎ", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
    U: "Ü", V: "𝘝", W: "𝘞", X: "𝘟", Y: "Y", Z: "Ż"
  });

  // Style 16: Sparkle with Korean
  addStyle('gamer', 'gamer_sparkle_korean', '●⃝', '☯࿐모', {
    a: "a҉", b: "b҉", c: "c҉", d: "d҉", e: "e҉", f: "f҉", g: "g҉", h: "h҉", i: "i҉", j: "j҉",
    k: "k҉", l: "l҉", m: "m҉", n: "n҉", o: "o҉", p: "p҉", q: "q҉", r: "r҉", s: "s҉", t: "t҉",
    u: "u҉", v: "v҉", w: "w҉", x: "x҉", y: "y҉", z: "z҉",
    A: "A҉", B: "B҉", C: "C҉", D: "D҉", E: "E҉", F: "F҉", G: "G҉", H: "H҉", I: "I҉", J: "J҉",
    K: "K҉", L: "L҉", M: "M҉", N: "N҉", O: "O҉", P: "P҉", Q: "Q҉", R: "R҉", S: "S҉", T: "T҉",
    U: "U҉", V: "V҉", W: "W҉", X: "X҉", Y: "Y҉", Z: "Z҉"
  });

  // Style 17: Monospace with Symbol Frame
  addStyle('gamer', 'gamer_monospace_frame', '༒●⃝⛥', '●⃝⛥༒', {
    a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
    k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
    u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣",
    A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
    K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
    U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉"
  });

  // Style 1: Cross Star Style
  addStyle('gamer', 'gamer_cross_star', '◣', '◢ ‼', {
    a: "a⨳", b: "b⨳", c: "c⨳", d: "d⨳", e: "e⨳", f: "f⨳", g: "g⨳", h: "h⨳", i: "i⨳", j: "j⨳",
    k: "k⨳", l: "l⨳", m: "m⨳", n: "n⨳", o: "o⨳", p: "p⨳", q: "q⨳", r: "r⨳", s: "s⨳", t: "t⨳",
    u: "u⨳", v: "v⨳", w: "w⨳", x: "x⨳", y: "y⨳", z: "z⨳",
    A: "A⨳", B: "B⨳", C: "C⨳", D: "D⨳", E: "E⨳", F: "F⨳", G: "G⨳", H: "H⨳", I: "I⨳", J: "J⨳",
    K: "K⨳", L: "L⨳", M: "M⨳", N: "N⨳", O: "O⨳", P: "P⨳", Q: "Q⨳", R: "R⨳", S: "S⨳", T: "T⨳",
    U: "U⨳", V: "V⨳", W: "W⨳", X: "X⨳", Y: "Y⨳", Z: "Z⨳"
  });

  // Style 12: Cross Frame with Number
  addStyle('gamer', 'gamer_cross_frame_number', '乂·˚◣₊', '₊◢˚·乂 ⁹⁹⁹', {
    a: "ꫝ", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g", h: "h", i: "ɪ᪻ͥᷱ᷍", j: "j",
    k: "k", l: "l", m: "m", n: "n", o: "Ꭷ", p: "p", q: "q", r: "r", s: "s", t: "t",
    u: "ꪽ", v: "v", w: "w", x: "x", y: "y", z: "z",
    A: "ꫝ", B: "B", C: "C", D: "D", E: "E̷̷", F: "F", G: "G", H: "H", I: "ɪ᪻ͥᷱ᷍", J: "J",
    K: "K", L: "L", M: "M", N: "N", O: "Ꭷ", P: "P", Q: "Q", R: "R", S: "S", T: "T",
    U: "ꪽ", V: "V", W: "W", X: "X", Y: "Y", Z: "Z"
  });

  // Style 13: Killer with Greek
  addStyle('gamer', 'gamer_killer_greek', '𝖐𝖎𝖑𝖊𝖗˚', '˚⊹࿐⓿❼', {
    a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
    k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
    u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ",
    A: "α", B: "в", C: "c", D: "ɗ", E: "ε", F: "ƒ", G: "ɠ", H: "н", I: "ɪ", J: "נ",
    K: "κ", L: "ℓ", M: "м", N: "η", O: "σ", P: "ρ", Q: "զ", R: "я", S: "ѕ", T: "τ",
    U: "υ", V: "ν", W: "ω", X: "χ", Y: "γ", Z: "ƶ"
  });

  // Style 5: VIP with Flower
  addStyle('gamer', 'gamer_vip_flower', 'ᴠͥɪͣᴘͫ ✿⃟', '┋ ??', {
    a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
    k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
    u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧",
    A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
    K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
    U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍"
  });

  // Style 18: X-Frame with Number
  addStyle('gamer', 'gamer_x_frame_number', 'xX_', '_Xx 𝟷𝟸𝟹', {
    a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
    k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
    u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣",
    A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
    K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
    U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉"
  });

  // Style 19: Arrow with Star
  addStyle('gamer', 'gamer_arrow_star', '►►►', '₊˚·✰࿐', {
    a: "𝙖", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝙚", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝙞", j: "𝙟",
    k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝙤", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
    u: "𝙪", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝙮", z: "𝙯",
    A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝",
    K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
    U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭"
  });
  
  // Style 28: Accented with Diamond Symbol
  addStyle('fancy', 'fancy_accented_diamond', ' ≪ °❖° ≫══ ', ' :', {
    a: "å", b: "ß", c: "¢", d: "Ð", e: "ê", f: "£", g: "g", h: "h", i: "Ì", j: "j",
    k: "k", l: "l", m: "m", n: "ñ", o: "ð", p: "þ", q: "q", r: "r", s: "§", t: "†",
    u: "µ", v: "v", w: "w", x: "x", y: "¥", z: "z",
    A: "Ä", B: "ß", C: "Ç", D: "Ð", E: "È", F: "£", G: "G", H: "H", I: "Ì", J: "J",
    K: "K", L: "L", M: "M", N: "ñ", O: "Ö", P: "þ", Q: "Q", R: "R", S: "§", T: "†",
    U: "Ú", V: "V", W: "W", X: "×", Y: "¥", Z: "Z"
  });

  // Style 29: Mixed Circle & Bold with Heart
  addStyle('fancy', 'fancy_mixed_heart', '🖤: ', ' : ᵇˡᵃ̸ᶜᵏ', {
    a: "ⓐ", b: "𝙗", c: "𝙘", d: "𝙙", e: "ⓔ", f: "𝙛", g: "𝙜", h: "𝙝", i: "Ⓘ", j: "𝙟",
    k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "Ⓞ", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
    u: "ⓤ", v: "𝙫", w: "𝙬", x: "𝙭", y: "ⓨ", z: "𝙯",
    A: "Ⓐ", B: "𝗕", C: "𝗖", D: "𝗗", E: "Ⓔ", F: "𝗙", G: "𝗚", H: "𝗛", I: "Ⓘ", J: "𝗝",
    K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "Ⓞ", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
    U: "Ⓤ", V: "𝗩", W: "𝗪", X: "𝗫", Y: "Ⓨ", Z: "𝗭"
  });

  // Style 30: Mixed Circle & Bold with Coffee
  addStyle('fancy', 'fancy_mixed_coffee', ' ', ' ☕︎ˎˊ˗', {
    a: "ⓐ", b: "𝙗", c: "𝙘", d: "𝙙", e: "ⓔ", f: "𝙛", g: "𝙜", h: "𝙝", i: "Ⓘ", j: "𝙟",
    k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "Ⓞ", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
    u: "ⓤ", v: "𝙫", w: "𝙬", x: "𝙭", y: "ⓨ", z: "𝙯",
    A: "Ⓐ", B: "𝗕", C: "𝗖", D: "𝗗", E: "Ⓔ", F: "𝗙", G: "𝗚", H: "𝗛", I: "Ⓘ", J: "𝗝",
    K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "Ⓞ", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
    U: "Ⓤ", V: "𝗩", W: "𝗪", X: "𝗫", Y: "Ⓨ", Z: "𝗭"
  });

  // Style 31: Monospace with Japanese Symbol
  addStyle('fancy', 'fancy_monospace_japanese', ' ツ', 'ツ', {
    a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "ƒ", g: "𝚐", h: "𝚑", i: "𝚒", j: "נ",
    k: "𝚔", l: "ℓ", m: "𝚖", n: "η", o: "𝚘", p: "𝚙", q: "զ", r: "я", s: "𝚜", t: "τ",
    u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "ƶ",
    A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "ε", F: "𝙵", G: "𝙶", H: "н", I: "𝙸", J: "נ",
    K: "𝙺", L: "ℓ", M: "𝙼", N: "η", O: "σ", P: "𝙿", Q: "𝚀", R: "я", S: "𝚂", T: "τ",
    U: "𝚄", V: "𝚅", W: "ω", X: "𝚇", Y: "𝚈", Z: "ƶ"
  });

  // Style 32: Mixed Bold with Box Frame
  addStyle('fancy', 'fancy_mixed_box', ' ░▒▓█ ', ' █▓▒░', {
    a: "ꫝ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "𝖎", j: "ᴊ",
    k: "ᴋ", l: "ℓ", m: "ᴍ", n: "𝛈", o: "Ꭷ", p: "ᴘ", q: "𝛗", r: "ʀ", s: "ꜱ", t: "ᴛ",
    u: "ꪽ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ",
    A: "ꫝ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "𝖎", J: "ᴊ",
    K: "ᴋ", L: "ℓ", M: "ᴍ", N: "𝛈", O: "Ꭷ", P: "ᴘ", Q: "𝛗", R: "ʀ", S: "ꜱ", T: "ᴛ",
    U: "ꪽ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ"
  });

  // Style 33: Greek Alternate with Arrow
  addStyle('fancy', 'fancy_greek_arrow', ' -->', ' ₊˚⊹⟡', {
    a: "Λ", b: "ɮ", c: "Ͷ", d: "ᗫ", e: "Ɛ", f: "Ғ", g: "Ϭ", h: "Ӈ", i: "Ꭵ", j: "Ꮰ",
    k: "Ҡ", l: "ᒪ", m: "ᗰ", n: "ͷ", o: "Ө", p: "Ꭾ", q: "Ϙ", r: "ᖇ", s: "ᔕ", t: "Ƭ",
    u: "Ա", v: "Ỽ", w: "Ꮃ", x: "Ӿ", y: "ϓ", z: "ɀ",
    A: "Λ", B: "ɮ", C: "Ͷ", D: "ᗫ", E: "Ɛ", F: "Ғ", G: "Ϭ", H: "Ӈ", I: "Ꭵ", J: "Ꮰ",
    K: "Ҡ", L: "ᒪ", M: "ᗰ", N: "ͷ", O: "Ө", P: "Ꭾ", Q: "Ϙ", R: "ᖇ", S: "ᔕ", T: "Ƭ",
    U: "Ա", V: "Ỽ", W: "Ꮃ", X: "Ӿ", Y: "ϓ", Z: "ɀ"
  });

  // Style 34: Bold with Dash Separator
  addStyle('fancy', 'fancy_bold_dash', ' »—', '-->', {
    a: "ᗩ-", b: "ᗷ-", c: "ᑕ-", d: "ᗪ-", e: "ᗴ-", f: "ᖴ-", g: "Ꮐ-", h: "ᕼ-", i: "Ꭵ-", j: "ᒍ-",
    k: "Ꮶ-", l: "Ꮮ-", m: "ᗰ-", n: "ᑎ-", o: "Ө-", p: "ᑭ-", q: "ᑫ-", r: "ᖇ-", s: "S-", t: "Ƭ-",
    u: "ᑌ-", v: "ᐯ-", w: "ᗯ-", x: "᙭-", y: "ϓ-", z: "ᘔ-",
    A: "ᗩ-", B: "ᗷ-", C: "ᑕ-", D: "ᗪ-", E: "ᗴ-", F: "ᖴ-", G: "Ꮐ-", H: "ᕼ-", I: "Ꭵ-", J: "ᒍ-",
    K: "Ꮶ-", L: "Ꮮ-", M: "ᗰ-", N: "ᑎ-", O: "Ө-", P: "ᑭ-", Q: "ᑫ-", R: "ᖇ-", S: "S-", T: "Ƭ-",
    U: "ᑌ-", V: "ᐯ-", W: "ᗯ-", X: "᙭-", Y: "ϓ-", Z: "ᘔ-"
  });

  // Style 35: Square Brackets Style
  addStyle('fancy', 'fancy_square_brackets', '【', '】', {
    a: "【a】", b: "【b】", c: "【c】", d: "【d】", e: "【e】", f: "【f】", g: "【g】", h: "【h】", i: "【i】", j: "【j】",
    k: "【k】", l: "【l】", m: "【m】", n: "【n】", o: "【o】", p: "【p】", q: "【q】", r: "【r】", s: "【s】", t: "【t】",
    u: "【u】", v: "【v】", w: "【w】", x: "【x】", y: "【y】", z: "【z】",
    A: "【A】", B: "【B】", C: "【C】", D: "【D】", E: "【E】", F: "【F】", G: "【G】", H: "【H】", I: "【I】", J: "【J】",
    K: "【K】", L: "【L】", M: "【M】", N: "【N】", O: "【O】", P: "【P】", Q: "【Q】", R: "【R】", S: "【S】", T: "【T】",
    U: "【U】", V: "【V】", W: "【W】", X: "【X】", Y: "【Y】", Z: "【Z】"
  });

  // Style 5 (Duplicate): Heart Arrow Style
  addStyle('fancy', 'fancy_heart_arrow', ' ❥━━━»', '«━━━❥', {
    a: "a", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g", h: "h", i: "I", j: "j",
    k: "k", l: "l", m: "m", n: "n", o: "o", p: "p", q: "q", r: "r", s: "s", t: "t",
    u: "u", v: "v", w: "w", x: "x", y: "y", z: "z",
    A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H", I: "I", J: "J",
    K: "K", L: "L", M: "M", N: "N", O: "O", P: "P", Q: "Q", R: "R", S: "S", T: "T",
    U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Z"
  });

  // Style 6: Heart Dot Style
  addStyle('fancy', 'fancy_heart_dot', ' ♥·.¸¸.·♡»', '«♡·.¸¸.·♥', {
    a: "a", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g", h: "h", i: "I", j: "j",
    k: "k", l: "l", m: "m", n: "n", o: "o", p: "p", q: "q", r: "r", s: "s", t: "t",
    u: "u", v: "v", w: "w", x: "x", y: "y", z: "z",
    A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H", I: "I", J: "J",
    K: "K", L: "L", M: "M", N: "N", O: "O", P: "P", Q: "Q", R: "R", S: "S", T: "T",
    U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Z"
  });

  // Style 7: Heart Equal Style
  addStyle('fancy', 'fancy_heart_equal', ' ♡═════', '═════♡', {
    a: "a", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g", h: "h", i: "I", j: "j",
    k: "k", l: "l", m: "m", n: "n", o: "o", p: "p", q: "q", r: "r", s: "s", t: "t",
    u: "u", v: "v", w: "w", x: "x", y: "y", z: "z",
    A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H", I: "I", J: "J",
    K: "K", L: "L", M: "M", N: "N", O: "O", P: "P", Q: "Q", R: "R", S: "S", T: "T",
    U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Z"
  });

  // Style 8: Heart Flower Style
  addStyle('fancy', 'fancy_heart_flower', ' ♡═══', '═:.:｡.✽', {
    a: "a", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g", h: "h", i: "I", j: "j",
    k: "k", l: "l", m: "m", n: "n", o: "o", p: "p", q: "q", r: "r", s: "s", t: "t",
    u: "u", v: "v", w: "w", x: "x", y: "y", z: "z",
    A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H", I: "I", J: "J",
    K: "K", L: "L", M: "M", N: "N", O: "O", P: "P", Q: "Q", R: "R", S: "S", T: "T",
    U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Z"
  });

  // Style 8 (Duplicate): Monospace Broken Heart
  addStyle('fancy', 'fancy_monospace_broken_heart', ' ⸝⸝⸝💔⸝⸝⸝', '⸝⸝⸝💔⸝⸝⸝', {
    a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
    k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
    u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣",
    A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
    K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
    U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉"
  });

  // Style 9: Panda with Italic
  addStyle('fancy', 'fancy_panda_italic', ' 🐼⃞ᴵᵐ•', '⸝⸝𖹭⸝⸝࿐', {
    a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
    k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
    u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧",
    A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
    K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
    U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍"
  });

  // Style 10: Monospace Heart Flower
  addStyle('fancy', 'fancy_monospace_heart_flower', ' ⸝⸝⸝𖹭💗⸝⸝⸝', '⸝⸝⸝💗𖹭⸝⸝⸝', {
    a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
    k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
    u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣",
    A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
    K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
    U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉"
  });

  // Style 6 (Duplicate): Heart Circle Style
  addStyle('fancy', 'fancy_heart_circle', ' 💕⃝', ' ⋆.🫰🏻💗', {
    a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
    k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
    u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣",
    A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
    K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
    U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉"
  });

  // Style 7 (Duplicate): Flower Japanese Style
  addStyle('fancy', 'fancy_flower_japanese', ' ✿ ┊✨', ' ꫂ✿ꪶ 🦚', {
    a: "ค", b: "ʙ", c: "ċ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ï", j: "ᴊ",
    k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "๑", p: "ᴘ", q: "ǫ", r: "я", s: "ꜱ", t: "ᴛ",
    u: "υ", v: "ᴠ", w: "ᴡ", x: "ẋ", y: "ʏ", z: "ᴢ",
    A: "ค", B: "ʙ", C: "ċ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ï", J: "ᴊ",
    K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "๑", P: "ᴘ", Q: "ǫ", R: "я", S: "ꜱ", T: "ᴛ",
    U: "υ", V: "ᴠ", W: "ᴡ", X: "ẋ", Y: "ʏ", Z: "ᴢ"
  });
  
  // Style 7: Thai and Small Caps with Flower Decoration
  addStyle('love', 'love_thai_small_caps', '✨✿ ┊', '┊ ꫂ✿ꪶ 🦚', {
    a: "ค", b: "ʙ", c: "ċ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ï", j: "ᴊ",
    k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "๑", p: "ᴘ", q: "ǫ", r: "я", s: "ꜱ", t: "ᴛ",
    u: "υ", v: "ᴠ", w: "ᴡ", x: "ẋ", y: "ʏ", z: "ᴢ",
    A: "ค", B: "ʙ", C: "ċ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ï", J: "ᴊ",
    K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "๑", P: "ᴘ", Q: "ǫ", R: "я", S: "ꜱ", T: "ᴛ",
    U: "υ", V: "ᴠ", W: "ᴡ", X: "ẋ", Y: "ʏ", Z: "ᴢ"
  });

  // Style 9: Small Caps with Heart Line
  addStyle('love', 'love_small_caps_heart', '♥︎♡♥︎ ', ' ┈┈┈', {
    a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
    k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
    u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ",
    A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
    K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
    U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ"
  });

  // Style 39: Small Caps with Mr. Decoration
  addStyle('love', 'love_mr_small_caps', '✿ ᴍʀ ┊', ' ┊亗 ✿', {
    a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
    k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
    u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ",
    A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
    K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
    U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ"
  });

  // Style 50: Small Caps with Miss Decoration
  addStyle('love', 'love_miss_small_caps', '✿ ᴍɪꜱꜱ ┊', ' ┊亗 ✿', {
    a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
    k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
    u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ",
    A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
    K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
    U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ"
  });

  // Style 59: Italic with Flower Decoration
  addStyle('love', 'love_italic_flower', 'ҩɴ ₊˚', ' ✿˚₊࿐', {
    a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
    k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
    u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧",
    A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
    K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
    U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍"
  });

  // Style 11: Bold with Heart
  addStyle('love', 'love_bold_heart', '𝚰 ♥️ ', '', {
    a: "ᗩ", b: "ᗷ", c: "ᑕ", d: "ᗪ", e: "ᗴ", f: "ᖴ", g: "Ꮐ", h: "ᕼ", i: "Ꭵ", j: "ᒍ",
    k: "Ꮶ", l: "Ꮮ", m: "ᗰ", n: "ᑎ", o: "Ө", p: "ᑭ", q: "ᑫ", r: "ᖇ", s: "S", t: "Ƭ",
    u: "ᑌ", v: "ᐯ", w: "ᗯ", x: "᙭", y: "ϓ", z: "ᘔ",
    A: "ᗩ", B: "ᗷ", C: "ᑕ", D: "ᗪ", E: "ᗴ", F: "ᖴ", G: "Ꮐ", H: "ᕼ", I: "Ꭵ", J: "ᒍ",
    K: "Ꮶ", L: "Ꮮ", M: "ᗰ", N: "ᑎ", O: "Ө", P: "ᑭ", Q: "ᑫ", R: "ᖇ", S: "S", T: "Ƭ",
    U: "ᑌ", V: "ᐯ", W: "ᗯ", X: "᙭", Y: "ϓ", Z: "ᘔ"
  });

  // Style 12: Small Caps with Accents
  addStyle('love', 'love_small_caps_accented', '‼ 𖹭 ', ' ✨🪽', {
    a: "ᴀ", b: "ʙ", c: "ċ", d: "ᴅ", e: "፝ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ï", j: "נ",
    k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "𖹭", p: "ᴘ", q: "ǫ", r: "я", s: "ꜱ", t: "፝ᴛ",
    u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ƶ",
    A: "ᴀ", B: "ʙ", C: "ċ", D: "ᴅ", E: "፝ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ï", J: "נ",
    K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "𖹭", P: "ᴘ", Q: "ǫ", R: "я", S: "ꜱ", T: "፝ᴛ",
    U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ƶ"
  });

  // Style 13: Fullwidth with Flower
  addStyle('love', 'love_fullwidth_flower', '✿', '.. ✨☂', {
    a: "ａ", b: "ｂ", c: "ｃ", d: "ｄ", e: "ｅ", f: "ｆ", g: "ｇ", h: "ｈ", i: "ｉ", j: "ｊ",
    k: "ｋ", l: "ｌ", m: "ｍ", n: "ｎ", o: "ｏ", p: "ｐ", q: "ｑ", r: "ｒ", s: "ｓ", t: "ｔ",
    u: "ｕ", v: "ｖ", w: "ｗ", x: "ｘ", y: "ｙ", z: "ｚ",
    A: "Ａ", B: "Ｂ", C: "Ｃ", D: "Ｄ", E: "Ｅ", F: "Ｆ", G: "Ｇ", H: "Ｈ", I: "Ｉ", J: "Ｊ",
    K: "Ｋ", L: "Ｌ", M: "Ｍ", N: "Ｎ", O: "Ｏ", P: "Ｐ", Q: "Ｑ", R: "Ｒ", S: "Ｓ", T: "Ｔ",
    U: "Ｕ", V: "Ｖ", W: "Ｗ", X: "Ｘ", Y: "Ｙ", Z: "Ｚ"
  });

  // Style 13(2): Fullwidth with Flower and Symbol
  addStyle('love', 'love_fullwidth_flower_symbol', '✿', '.. ✨࿐☂', {
    a: "ａ", b: "ｂ", c: "ｃ", d: "ｄ", e: "ｅ", f: "ｆ", g: "ｇ", h: "ｈ", i: "ｉ", j: "ｊ",
    k: "ｋ", l: "ｌ", m: "ｍ", n: "ｎ", o: "ｏ", p: "ｐ", q: "ｑ", r: "ｒ", s: "ｓ", t: "ｔ",
    u: "ｕ", v: "ｖ", w: "ｗ", x: "ｘ", y: "ｙ", z: "ｚ",
    A: "Ａ", B: "Ｂ", C: "Ｃ", D: "Ｄ", E: "Ｅ", F: "Ｆ", G: "Ｇ", H: "Ｈ", I: "Ｉ", J: "Ｊ",
    K: "Ｋ", L: "Ｌ", M: "Ｍ", N: "Ｎ", O: "Ｏ", P: "Ｐ", Q: "Ｑ", R: "Ｒ", S: "Ｓ", T: "Ｔ",
    U: "Ｕ", V: "Ｖ", W: "Ｗ", X: "Ｘ", Y: "Ｙ", Z: "Ｚ"
  });

  // Style 13(3): Small Caps with Arrow Brackets
  addStyle('love', 'love_small_caps_arrows', '❀˖°»', '«°˖♔', {
    a: "»ᴀ«", b: "»ʙ«", c: "»ᴄ«", d: "»ᴅ«", e: "»ᴇ«", f: "»ꜰ«", g: "»ɢ«", h: "»ʜ«", i: "»ɪ«", j: "»ᴊ«",
    k: "»ᴋ«", l: "»ʟ«", m: "»ᴍ«", n: "»ɴ«", o: "»ᴏ«", p: "»ᴘ«", q: "»ǫ«", r: "»ʀ«", s: "»ꜱ«", t: "»ᴛ«",
    u: "»ᴜ«", v: "»ᴠ«", w: "»ᴡ«", x: "»x«", y: "»ʏ«", z: "»ᴢ«",
    A: "»ᴀ«", B: "»ʙ«", C: "»ᴄ«", D: "»ᴅ«", E: "»ᴇ«", F: "»ꜰ«", G: "»ɢ«", H: "»ʜ«", I: "»ɪ«", J: "»ᴊ«",
    K: "»ᴋ«", L: "»ʟ«", M: "»ᴍ«", N: "»ɴ«", O: "»ᴏ«", P: "»ᴘ«", Q: "»ǫ«", R: "»ʀ«", S: "»ꜱ«", T: "»ᴛ«",
    U: "»ᴜ«", V: "»ᴠ«", W: "»ᴡ«", X: "»x«", Y: "»ʏ«", Z: "»ᴢ«"
  });

  // Style 14: Mixed Greek and Small Caps
  addStyle('love', 'love_mixed_greek_small', 'ℒσνє👁️⃝', ' ⋆˙⟡', {
    a: "α", b: "в", c: "ċ", d: "ɗ", e: "ᥱ", f: "ƒ", g: "ĝ", h: "ħ", i: "ï", j: "ʝ",
    k: "ᴋ", l: "ι", m: "ᴍ", n: "ռ", o: "ᦞ", p: "թ", q: "զ", r: "ř", s: "s̶", t: "τ",
    u: "𝛖", v: "𝛎", w: "w̶", x: "ẋ", y: "ʏ", z: "ƶ",
    A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "Ғ", G: "ɢ", H: "ʜ", I: "ɪ", J: "נ",
    K: "ƙ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ᦙ", R: "ᚱ", S: "ꜱ", T: "τ",
    U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "᥊", Y: "γ", Z: "ᴢ"
  });

  // Style 16: Mixed with Plant Decoration
  addStyle('love', 'love_mixed_plant', '☘·˚₊', '«━━━❥🔖', {
    a: "ꪖ", b: "𝘣", c: "ꪫ", d: "𝘥", e: "ꫀ", f: "ᠻ", g: "ĝ", h: "ħ", i: "เ", j: "𝘫",
    k: "𝘬", l: "𝘭", m: "ꪑ", n: "ꪀ", o: "ꪮ", p: "𝘱", q: "զ", r: "ř", s: "𝘴", t: "𝘵",
    u: "ꪊ", v: "v̶", w: "ω", x: "᥊", y: "𝘺", z: "ƶ",
    A: "ꪁ", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
    K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "Ꭷ", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
    U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡"
  });

  // Style 45: Greek with Plant Decoration
  addStyle('love', 'love_greek_plant', ' ☘. ', ' ✿.࿐', {
    a: "α", b: "в", c: "c", d: "ɗ", e: "ᥱ", f: "ƒ", g: "ɠ", h: "ħ", i: "ɪ", j: "נ",
    k: "κ", l: "ℓ", m: "м", n: "η", o: "ο", p: "թ", q: "զ", r: "ř", s: "ѕ", t: "τ",
    u: "υ", v: "ν", w: "ω", x: "ẋ", y: "ʏ", z: "ƶ",
    A: "Α", B: "Β", C: "Ͻ", D: "Ɗ", E: "Σ", F: "Ғ", G: "Ɠ", H: "H", I: "Ι", J: "Ј",
    K: "Ҡ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ө", P: "Ꭾ", Q: "Ϙ", R: "Я", S: "Ѕ", T: "Ƭ",
    U: "Ա", V: "V", W: "Ꮃ", X: "Χ", Y: "ϓ", Z: "Ζ"
  });

  // Style 47: Greek with Angel Plant Decoration
  addStyle('love', 'love_greek_angel_plant', ' 😇☘. ', ' ☘.࿐', {
    a: "α", b: "в", c: "c", d: "ɗ", e: "ᥱ", f: "ƒ", g: "ɠ", h: "ħ", i: "ɪ", j: "נ",
    k: "κ", l: "ℓ", m: "м", n: "η", o: "ο", p: "թ", q: "զ", r: "ř", s: "ѕ", t: "τ",
    u: "υ", v: "ν", w: "ω", x: "ẋ", y: "ʏ", z: "ƶ",
    A: "Α", B: "Β", C: "Ͻ", D: "Ɗ", E: "Σ", F: "Ғ", G: "Ɠ", H: "H", I: "Ι", J: "Ј",
    K: "Ҡ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ө", P: "Ꭾ", Q: "Ϙ", R: "Я", S: "Ѕ", T: "Ƭ",
    U: "Ա", V: "V", W: "Ꮃ", X: "Χ", Y: "ϓ", Z: "Ζ"
  });

  // Style 20: Arrow Accented with Bar
  addStyle('gamer', 'gamer_arrow_accent', '►►► ', ' ▅ ▄ ▂ ▁╰⁔╯', {
    a: "á", b: "b", c: "ć", d: "d", e: "é", f: "f", g: "ǵ", h: "h", i: "í", j: "j",
    k: "ḱ", l: "ĺ", m: "ḿ", n: "ń", o: "ő", p: "ṕ", q: "q", r: "ŕ", s: "ś", t: "t",
    u: "ú", v: "v", w: "ẃ", x: "x", y: "ӳ", z: "ź",
    A: "Á", B: "B", C: "Ć", D: "D", E: "É", F: "F", G: "Ǵ", H: "H", I: "í", J: "J",
    K: "Ḱ", L: "Ĺ", M: "Ḿ", N: "Ń", O: "Ő", P: "Ṕ", Q: "Q", R: "Ŕ", S: "ś", T: "T",
    U: "Ű", V: "V", W: "Ẃ", X: "X", Y: "Ӳ", Z: "Ź"
  });

  // Style 21: Bar Accented with Dots
  addStyle('gamer', 'gamer_bar_accent', '▁ ▂ ▄ ▅ ', ' ᪲᪲᪲ ▅ ▄ ▂ ▁', {
    a: "á", b: "b", c: "ć", d: "d", e: "é", f: "f", g: "ǵ", h: "h", i: "í", j: "j",
    k: "ḱ", l: "ĺ", m: "ḿ", n: "ń", o: "ő", p: "ṕ", q: "q", r: "ŕ", s: "ś", t: "t",
    u: "ú", v: "v", w: "ẃ", x: "x", y: "ӳ", z: "ź",
    A: "Á", B: "B", C: "Ć", D: "D", E: "É", F: "F", G: "Ǵ", H: "H", I: "í", J: "J",
    K: "Ḱ", L: "Ĺ", M: "Ḿ", N: "Ń", O: "Ő", P: "Ṕ", Q: "Q", R: "Ŕ", S: "ś", T: "T",
    U: "Ű", V: "V", W: "Ẃ", X: "X", Y: "Ӳ", Z: "Ź"
  });

  // Style 22: Combined Strikethrough Italic
  addStyle('gamer', 'gamer_strikethrough_italic', 'ꫝᥣ᥆ᥒᥱ_', '_乂 ⁰⁰¹', {
    a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
    k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
    u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧",
    A: "A̷̷", B: "B̷̷", C: "C̷̷", D: "D̷̷", E: "E̷̷", F: "F̷̷", G: "G̷̷", H: "H̷̷", I: "I̷̷", J: "J̷̷",
    K: "K̷̷", L: "L̷̷", M: "M̷̷", N: "N̷̷", O: "O̷̷", P: "P̷̷", Q: "Q̷̷", R: "R̷̷", S: "S̷̷", T: "T̷̷",
    U: "U̷̷", V: "V̷̷", W: "W̷̷", X: "X̷̷", Y: "Y̷̷", Z: "Z̷̷"
  });

  // Style 23: Strikethrough Italic with Symbol
  addStyle('gamer', 'gamer_strikethrough_symbol', '༒乂', '乂༒ ⁰¹', {
    a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
    k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
    u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧",
    A: "A̷̷", B: "B̷̷", C: "C̷̷", D: "D̷̷", E: "E̷̷", F: "F̷̷", G: "G̷̷", H: "H̷̷", I: "I̷̷", J: "J̷̷",
    K: "K̷̷", L: "L̷̷", M: "M̷̷", N: "N̷̷", O: "O̷̷", P: "P̷̷", Q: "Q̷̷", R: "R̷̷", S: "S̷̷", T: "T̷̷",
    U: "U̷̷", V: "V̷̷", W: "W̷̷", X: "X̷̷", Y: "Y̷̷", Z: "Z̷̷"
  });

  // Style 24: God Text with Box
  addStyle('gamer', 'gamer_god_text', 'ᴳᵒᵈ ◣', '◢ ꧂', {
    a: "á", b: "b", c: "ć", d: "d", e: "é", f: "f", g: "ǵ", h: "h", i: "í", j: "j",
    k: "ḱ", l: "ĺ", m: "ḿ", n: "ń", o: "ő", p: "ṕ", q: "q", r: "ŕ", s: "ś", t: "t",
    u: "ú", v: "v", w: "ẃ", x: "x", y: "ӳ", z: "ź",
    A: "Á", B: "B", C: "Ć", D: "D", E: "É", F: "F", G: "Ǵ", H: "H", I: "í", J: "J",
    K: "Ḱ", L: "Ĺ", M: "Ḿ", N: "Ń", O: "Ő", P: "Ṕ", Q: "Q", R: "Ŕ", S: "ś", T: "T",
    U: "Ű", V: "V", W: "Ẃ", X: "X", Y: "Ӳ", Z: "Ź"
  });

  // Style 25: Number Accented
  addStyle('gamer', 'gamer_number_accent', '么 ', ' ❻❾࿐', {
    a: "á", b: "b", c: "ć", d: "d", e: "é", f: "f", g: "ǵ", h: "h", i: "í", j: "j",
    k: "ḱ", l: "ĺ", m: "ḿ", n: "ń", o: "ő", p: "ṕ", q: "q", r: "ŕ", s: "ś", t: "t",
    u: "ú", v: "v", w: "ẃ", x: "x", y: "ӳ", z: "ź",
    A: "Á", B: "B", C: "Ć", D: "D", E: "É", F: "F", G: "Ǵ", H: "H", I: "í", J: "J",
    K: "Ḱ", L: "Ĺ", M: "Ḿ", N: "Ń", O: "Ő", P: "Ṕ", Q: "Q", R: "Ŕ", S: "ś", T: "T",
    U: "Ű", V: "V", W: "Ẃ", X: "X", Y: "Ӳ", Z: "Ź"
  });

  // Style 26: Boss Accented
  addStyle('gamer', 'gamer_boss_accent', 'ᴮᴼˢˢܔ', '┊࿐', {
    a: "ค", b: "ʙ", c: "ċ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ï", j: "ᴊ",
    k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "๑", p: "ᴘ", q: "ǫ", r: "я", s: "ꜱ", t: "ᴛ",
    u: "υ", v: "ᴠ", w: "ᴡ", x: "ẋ", y: "ʏ", z: "ᴢ",
    A: "ค", B: "ʙ", C: "ċ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ï", J: "ᴊ",
    K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "๑", P: "ᴘ", Q: "ǫ", R: "я", S: "ꜱ", T: "ᴛ",
    U: "υ", V: "ᴠ", W: "ᴡ", X: "ẋ", Y: "ʏ", Z: "ᴢ"
  });

  // Style 27: Strikethrough Italic Circle
  addStyle('gamer', 'gamer_strikethrough_circle', '៚', ' ꤪꤨꤪ', {
    a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
    k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
    u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧",
    A: "A̷̷", B: "B̷̷", C: "C̷̷", D: "D̷̷", E: "E̷̷", F: "F̷̷", G: "G̷̷", H: "H̷̷", I: "I̷̷", J: "J̷̷",
    K: "K̷̷", L: "L̷̷", M: "M̷̷", N: "N̷̷", O: "O̷̷", P: "P̷̷", Q: "Q̷̷", R: "R̷̷", S: "S̷̷", T: "T̷̷",
    U: "U̷̷", V: "V̷̷", W: "W̷̷", X: "X̷̷", Y: "Y̷̷", Z: "Z̷̷"
  });

  // Style 28: Nordic Accented
  addStyle('gamer', 'gamer_nordic', '►► ', ' ꫂꪶ', {
    a: "å", b: "ß", c: "¢", d: "Ð", e: "ê", f: "£", g: "g", h: "h", i: "Ì", j: "j",
    k: "k", l: "l", m: "m", n: "ñ", o: "ð", p: "þ", q: "q", r: "r", s: "§", t: "†",
    u: "µ", v: "v", w: "w", x: "x", y: "¥", z: "z",
    A: "Ä", B: "ß", C: "Ç", D: "Ð", E: "È", F: "£", G: "G", H: "H", I: "Ì", J: "J",
    K: "K", L: "L", M: "M", N: "ñ", O: "Ö", P: "þ", Q: "Q", R: "R", S: "§", T: "†",
    U: "Ú", V: "V", W: "W", X: "×", Y: "¥", Z: "Z"
  });

  // Style 29: Coffee Accented Mixed
  addStyle('gamer', 'gamer_coffee_mixed', '☕︎ˎˊ˗ ', ' ✓', {
    a: "ⓐ", b: "𝙗", c: "𝙘", d: "𝙙", e: "ⓔ", f: "𝙛", g: "𝙜", h: "𝙝", i: "Ⓘ", j: "𝙟",
    k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "Ⓞ", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
    u: "ⓤ", v: "𝙫", w: "𝙬", x: "𝙭", y: "ⓨ", z: "𝙯",
    A: "Ⓐ", B: "𝗕", C: "𝗖", D: "𝗗", E: "Ⓔ", F: "𝗙", G: "𝗚", H: "𝗛", I: "Ⓘ", J: "𝗝",
    K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "Ⓞ", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
    U: "Ⓤ", V: "𝗩", W: "𝗪", X: "𝗫", Y: "Ⓨ", Z: "𝗭"
  });

  // Style 30: Coffee Accented Reverse
  addStyle('gamer', 'gamer_coffee_reverse', 'ツ ', ' ☕︎ˎˊ˗', {
    a: "ⓐ", b: "𝙗", c: "𝙘", d: "𝙙", e: "ⓔ", f: "𝙛", g: "𝙜", h: "𝙝", i: "Ⓘ", j: "𝙟",
    k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "Ⓞ", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
    u: "ⓤ", v: "𝙫", w: "𝙬", x: "𝙭", y: "ⓨ", z: "𝙯",
    A: "Ⓐ", B: "𝗕", C: "𝗖", D: "𝗗", E: "Ⓔ", F: "𝗙", G: "𝗚", H: "𝗛", I: "Ⓘ", J: "𝗝",
    K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "Ⓞ", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
    U: "Ⓤ", V: "𝗩", W: "𝗪", X: "𝗫", Y: "Ⓨ", Z: "𝗭"
  });

  // Style 31: Arrow Greek Mixed
  addStyle('gamer', 'gamer_arrow_greek', '►► ツ', 'ツ✰࿐', {
    a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "ƒ", g: "𝚐", h: "𝚑", i: "𝚒", j: "נ",
    k: "𝚔", l: "ℓ", m: "𝚖", n: "η", o: "σ", p: "𝚙", q: "զ", r: "я", s: "𝚜", t: "τ",
    u: "𝚞", v: "𝚟", w: "ω", x: "𝚡", y: "𝚢", z: "ƶ",
    A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "ε", F: "𝙵", G: "𝙶", H: "н", I: "𝙸", J: "נ",
    K: "𝙺", L: "ℓ", M: "𝙼", N: "η", O: "σ", P: "𝙿", Q: "𝚀", R: "я", S: "𝚂", T: "τ",
    U: "𝚄", V: "𝚅", W: "ω", X: "𝚇", Y: "𝚈", Z: "ƶ"
  });

  // Style 32: Special Symbol Mixed
  addStyle('gamer', 'gamer_special_symbol', '', ' ⸙ㅤ', {
    a: "ꫝ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "𝖎", j: "ᴊ",
    k: "ᴋ", l: "ℓ", m: "ᴍ", n: "𝛈", o: "Ꭷ", p: "ᴘ", q: "𝛗", r: "ʀ", s: "ꜱ", t: "ᴛ",
    u: "ꪽ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ",
    A: "ꫝ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "𝖎", J: "ᴊ",
    K: "ᴋ", L: "ℓ", M: "ᴍ", N: "𝛈", O: "Ꭷ", P: "ᴘ", Q: "𝛗", R: "ʀ", S: "ꜱ", T: "ᴛ",
    U: "ꪽ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ"
  });

  // Style 33: Greek Bold with Emoji
  addStyle('gamer', 'gamer_greek_emoji', '', ' ×͜×', {
    a: "Λ", b: "ɮ", c: "Ͷ", d: "ᗫ", e: "Ɛ", f: "Ғ", g: "Ϭ", h: "Ӈ", i: "Ꭵ", j: "Ꮰ",
    k: "Ҡ", l: "ᒪ", m: "ᗰ", n: "ͷ", o: "Ө", p: "Ꭾ", q: "Ϙ", r: "ᖇ", s: "ᔕ", t: "Ƭ",
    u: "Ա", v: "Ỽ", w: "Ꮃ", x: "Ӿ", y: "ϓ", z: "ɀ",
    A: "Λ", B: "ɮ", C: "Ͷ", D: "ᗫ", E: "Ɛ", F: "Ғ", G: "Ϭ", H: "Ӈ", I: "Ꭵ", J: "Ꮰ",
    K: "Ҡ", L: "ᒪ", M: "ᗰ", N: "ͷ", O: "Ө", P: "Ꭾ", Q: "Ϙ", R: "ᖇ", S: "ᔕ", T: "Ƭ",
    U: "Ա", V: "Ỽ", W: "Ꮃ", X: "Ӿ", Y: "ϓ", Z: "ɀ"
  });

  // Style 34: Dash Separated Bold
  addStyle('gamer', 'gamer_dash_separated', '»—', '-->', {
    a: "ᗩ-", b: "ᗷ-", c: "ᑕ-", d: "ᗪ-", e: "ᗴ-", f: "ᖴ-", g: "Ꮐ-", h: "ᕼ-", i: "Ꭵ-", j: "ᒍ-",
    k: "Ꮶ-", l: "Ꮮ-", m: "ᗰ-", n: "ᑎ-", o: "Ө-", p: "ᑭ-", q: "ᑫ-", r: "ᖇ-", s: "S-", t: "Ƭ-",
    u: "ᑌ-", v: "ᐯ-", w: "ᗯ-", x: "᙭-", y: "ϓ-", z: "ᘔ-",
    A: "ᗩ-", B: "ᗷ-", C: "ᑕ-", D: "ᗪ-", E: "ᗴ-", F: "ᖴ-", G: "Ꮐ-", H: "ᕼ-", I: "Ꭵ-", J: "ᒍ-",
    K: "Ꮶ-", L: "Ꮮ-", M: "ᗰ-", N: "ᑎ-", O: "Ө-", P: "ᑭ-", Q: "ᑫ-", R: "ᖇ-", S: "S-", T: "Ƭ-",
    U: "ᑌ-", V: "ᐯ-", W: "ᗯ-", X: "᙭-", Y: "ϓ-", Z: "ᘔ-"
  });
  
  // Style 35: Brackets Style
  addStyle('gamer', 'gamer_brackets', '【', '】', {
    a: "【a】", b: "【b】", c: "【c】", d: "【d】", e: "【e】", f: "【f】", g: "【g】", h: "【h】", i: "【i】", j: "【j】",
    k: "【k】", l: "【l】", m: "【m】", n: "【n】", o: "【o】", p: "【p】", q: "【q】", r: "【r】", s: "【s】", t: "【t】",
    u: "【u】", v: "【v】", w: "【w】", x: "【x】", y: "【y】", z: "【z】",
    A: "【A】", B: "【B】", C: "【C】", D: "【D】", E: "【E】", F: "【F】", G: "【G】", H: "【H】", I: "【I】", J: "【J】",
    K: "【K】", L: "【L】", M: "【M】", N: "【N】", O: "【O】", P: "【P】", Q: "【Q】", R: "【R】", S: "【S】", T: "【T】",
    U: "【U】", V: "【V】", W: "【W】", X: "【X】", Y: "【Y】", Z: "【Z】"
  });

  // Style 55: Korean Symbol Style
  addStyle('gamer', 'gamer_korean_symbol', '', '𓂃모', {
    a: "a", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g", h: "h", i: "I", j: "j",
    k: "k", l: "l", m: "m", n: "n", o: "o", p: "p", q: "q", r: "r", s: "s", t: "t",
    u: "u", v: "v", w: "w", x: "x", y: "y", z: "z",
    A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H", I: "I", J: "J",
    K: "K", L: "L", M: "M", N: "N", O: "O", P: "P", Q: "Q", R: "R", S: "S", T: "T",
    U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Z"
  });

  // Style 56: Number Style
  addStyle('gamer', 'gamer_number_style', '', ' 𝟺𝟺𝟺', {
    a: "a", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g", h: "h", i: "I", j: "j",
    k: "k", l: "l", m: "m", n: "n", o: "o", p: "p", q: "q", r: "r", s: "s", t: "t",
    u: "u", v: "v", w: "w", x: "x", y: "y", z: "z",
    A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H", I: "I", J: "J",
    K: "K", L: "L", M: "M", N: "N", O: "O", P: "P", Q: "Q", R: "R", S: "S", T: "T",
    U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Z"
  });

  // Style 57: Number Circle Style
  addStyle('gamer', 'gamer_number_circle', '', ' ⓿❼࿐', {
    a: "a", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g", h: "h", i: "I", j: "j",
    k: "k", l: "l", m: "m", n: "n", o: "o", p: "p", q: "q", r: "r", s: "s", t: "t",
    u: "u", v: "v", w: "w", x: "x", y: "y", z: "z",
    A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H", I: "I", J: "J",
    K: "K", L: "L", M: "M", N: "N", O: "O", P: "P", Q: "Q", R: "R", S: "S", T: "T",
    U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Z"
  });

  // Style 7: Monospace with Flower Decoration
  addStyle('gamer', 'gamer_monospace_flower', '⸝ᴍʀ⸝✿⸝⸝', '⸝⸝✿⸝⸝࿐', {
    a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
    k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
    u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣",
    A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
    K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
    U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉"
  });

  // Style 9: Small Caps with Heart Decoration
  addStyle('gamer', 'gamer_small_caps_heart', '♥︎♡♥︎ ₊˚', ' ˚₊┈❽❽', {
    a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
    k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
    u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ",
    A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
    K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
    U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ"
  });

  // Style 39: Small Caps with Flower Decoration
  addStyle('gamer', 'gamer_small_caps_flower', '✿ ᴍʀ ', ' 亗 ✿', {
    a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
    k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
    u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ",
    A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
    K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
    U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ"
  });

  // Style 50: Small Caps Miss Style
  addStyle('gamer', 'gamer_small_caps_miss', '✿ ᴍɪꜱꜱ ', ' 亗 ✿', {
    a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
    k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
    u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ",
    A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
    K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
    U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ"
  });

  // Style 59: Criminal Italic Style
  addStyle('gamer', 'gamer_criminal_italic', ' ᴄ͢͢͢ʀɪᴍɪɴᴀʟ₊˚', ' ✿˚₊࿐', {
    a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
    k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
    u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧",
    A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
    K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
    U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍"
  });

  // Style 57: Small Caps with Accent
  addStyle('gamer', 'gamer_small_caps_accent', '𖹭 ', ' ‼', {
    a: "ᴀ", b: "ʙ", c: "ċ", d: "ᴅ", e: "፝ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ï", j: "נ",
    k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "𖹭", p: "ᴘ", q: "ǫ", r: "я", s: "ꜱ", t: "፝ᴛ",
    u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ƶ",
    A: "ᴀ", B: "ʙ", C: "ċ", D: "ᴅ", E: "፝ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ï", J: "נ",
    K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "𖹭", P: "ᴘ", Q: "ǫ", R: "я", S: "ꜱ", T: "፝ᴛ",
    U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ƶ"
  });

  // Style 65: Fullwidth Korean Style
  addStyle('gamer', 'gamer_fullwidth_korean', '✿', '..모', {
    a: "ａ", b: "ｂ", c: "ｃ", d: "ｄ", e: "ｅ", f: "ｆ", g: "ｇ", h: "ｈ", i: "ｉ", j: "ｊ",
    k: "ｋ", l: "ｌ", m: "ｍ", n: "ｎ", o: "ｏ", p: "ｐ", q: "ｑ", r: "ｒ", s: "ｓ", t: "ｔ",
    u: "ｕ", v: "ｖ", w: "ｗ", x: "ｘ", y: "ｙ", z: "ｚ",
    A: "Ａ", B: "Ｂ", C: "Ｃ", D: "Ｄ", E: "Ｅ", F: "Ｆ", G: "Ｇ", H: "Ｈ", I: "Ｉ", J: "Ｊ",
    K: "Ｋ", L: "Ｌ", M: "Ｍ", N: "Ｎ", O: "Ｏ", P: "Ｐ", Q: "Ｑ", R: "Ｒ", S: "Ｓ", T: "Ｔ",
    U: "Ｕ", V: "Ｖ", W: "Ｗ", X: "Ｘ", Y: "Ｙ", Z: "Ｚ"
  });

  // Style 54: Small Caps with Symbol
  addStyle('gamer', 'gamer_small_caps_symbol', '么', '..모!', {
    a: "ᴀ", b: "ʙ", c: "ċ", d: "ᴅ", e: "፝ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ï", j: "נ",
    k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "𖹭", p: "ᴘ", q: "ǫ", r: "я", s: "ꜱ", t: "፝ᴛ",
    u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ƶ",
    A: "ᴀ", B: "ʙ", C: "ċ", D: "ᴅ", E: "፝ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ï", J: "נ",
    K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "𖹭", P: "ᴘ", Q: "ǫ", R: "я", S: "ꜱ", T: "፝ᴛ",
    U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ƶ"
  });

  // Style 77: Greek Korean Style
  addStyle('gamer', 'gamer_greek_korean', '么 ', ' 모!', {
    a: "Λ", b: "Β", c: "Ͻ", d: "D", e: "Ξ", f: "F", g: "Ɠ", h: "H", i: "Ι", j: "Ј",
    k: "Κ", l: "ᒪ", m: "Μ", n: "Ν", o: "Ꭷ", p: "Ρ", q: "Ԛ", r: "Я", s: "Ѕ", t: "Τ",
    u: "U", v: "V", w: "W", x: "Χ", y: "Υ", z: "Ζ",
    A: "Λ", B: "Β", C: "Ͻ", D: "D", E: "Ξ", F: "F", G: "Ɠ", H: "H", I: "Ι", J: "Ј",
    K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ꭷ", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
    U: "U", V: "V", W: "W", X: "Χ", Y: "Υ", Z: "Ζ"
  });

  // Style 68: Tilde with Symbol Decoration
  addStyle('gamer', 'gamer_tilde_symbol', '៚▀▄', '✩°｡▄▀▄', {
    a: "a̴", b: "b̴", c: "c̴", d: "d̴", e: "e̴", f: "f̴", g: "g̴", h: "h̴", i: "i̴", j: "j̴",
    k: "k̴", l: "l̴", m: "m̴", n: "n̴", o: "o̴", p: "p̴", q: "q̴", r: "r̴", s: "s̴", t: "t̴",
    u: "u̴", v: "v̴", w: "w̴", x: "x̴", y: "y̴", z: "z̴",
    A: "A̴", B: "B̴", C: "C̴", D: "D̴", E: "E̴", F: "F̴", G: "G̴", H: "H̴", I: "I̴", J: "J̴",
    K: "K̴", L: "L̴", M: "M̴", N: "N̴", O: "O̴", P: "P̴", Q: "Q̴", R: "R̴", S: "S̴", T: "T̴",
    U: "U̴", V: "V̴", W: "W̴", X: "X̴", Y: "Y̴", Z: "Z̴"
  });

  // Style 69: Tilde Simple Decoration
  addStyle('gamer', 'gamer_tilde_simple', '៚', '✩°｡ღㅤ', {
    a: "a̴", b: "b̴", c: "c̴", d: "d̴", e: "e̴", f: "f̴", g: "g̴", h: "h̴", i: "i̴", j: "j̴",
    k: "k̴", l: "l̴", m: "m̴", n: "n̴", o: "o̴", p: "p̴", q: "q̴", r: "r̴", s: "s̴", t: "t̴",
    u: "u̴", v: "v̴", w: "w̴", x: "x̴", y: "y̴", z: "z̴",
    A: "A̴", B: "B̴", C: "C̴", D: "D̴", E: "E̴", F: "F̴", G: "G̴", H: "H̴", I: "I̴", J: "J̴",
    K: "K̴", L: "L̴", M: "M̴", N: "N̴", O: "O̴", P: "P̴", Q: "Q̴", R: "R̴", S: "S̴", T: "T̴",
    U: "U̴", V: "V̴", W: "W̴", X: "X̴", Y: "Y̴", Z: "Z̴"
  });

  // Style 70: Legend Tilde Style
  addStyle('gamer', 'gamer_legend_tilde', 'ĺᥱɠᥱռɗ ღ ', ' ✩°｡', {
    a: "a̴", b: "b̴", c: "c̴", d: "d̴", e: "e̴", f: "f̴", g: "g̴", h: "h̴", i: "i̴", j: "j̴",
    k: "k̴", l: "l̴", m: "m̴", n: "n̴", o: "o̴", p: "p̴", q: "q̴", r: "r̴", s: "s̴", t: "t̴",
    u: "u̴", v: "v̴", w: "w̴", x: "x̴", y: "y̴", z: "z̴",
    A: "A̴", B: "B̴", C: "C̴", D: "D̴", E: "E̴", F: "F̴", G: "G̴", H: "H̴", I: "I̴", J: "J̴",
    K: "K̴", L: "L̴", M: "M̴", N: "N̴", O: "O̴", P: "P̴", Q: "Q̴", R: "R̴", S: "S̴", T: "T̴",
    U: "U̴", V: "V̴", W: "W̴", X: "X̴", Y: "Y̴", Z: "Z̴"
  });

  // Style 71: One Thai Style
  addStyle('gamer', 'gamer_one_thai', 'On͢e☯', '࿐', {
    a: "a", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g", h: "h", i: "I", j: "j",
    k: "k", l: "l", m: "m", n: "n", o: "o", p: "p", q: "q", r: "r", s: "s", t: "t",
    u: "u", v: "v", w: "w", x: "x", y: "y", z: "z",
    A: "๖ۣۜA", B: "๖ۣۜB", C: "๖ۣۜC", D: "๖ۣۜD", E: "๖ۣۜE", F: "๖ۣۜF", G: "๖ۣۜG", H: "๖ۣۜH", I: "๖ۣۜI", J: "๖ۣۜJ",
    K: "๖ۣۜK", L: "๖ۣۜL", M: "๖ۣۜM", N: "๖ۣۜN", O: "๖ۣۜO", P: "๖ۣۜP", Q: "๖ۣۜQ", R: "๖ۣۜR", S: "๖ۣۜS", T: "๖ۣۜT",
    U: "๖ۣۜU", V: "๖ۣۜV", W: "๖ۣۜW", X: "๖ۣۜX", Y: "๖ۣۜY", Z: "๖ۣۜZ"
  });

// Style 72: Gaming Style with Strikethrough
addStyle('gamer', 'gamer_gaming_strikethrough', '៚', '᭄G̷̷ᴀᴍɪɴɢ', {
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "z",
  A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H", I: "I", J: "J",
  K: "K", L: "L", M: "M", N: "N", O: "O", P: "P", Q: "Q", R: "R", S: "S", T: "T",
  U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Z"
});

// Style 73: Bhai Style with Double Struck
addStyle('gamer', 'gamer_bhai_double_struck', '𝕩 ', '᭄B̶ʜᴀɪ࿐', {
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "z",
  A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H", I: "I", J: "J",
  K: "K", L: "L", M: "M", N: "N", O: "O", P: "P", Q: "Q", R: "R", S: "S", T: "T",
  U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Z"
});

// Style 74: Simple Question Style
addStyle('gamer', 'gamer_simple_question', ' ┊', ' ??', {
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "z",
  A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H", I: "I", J: "J",
  K: "K", L: "L", M: "M", N: "N", O: "O", P: "P", Q: "Q", R: "R", S: "S", T: "T",
  U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Z"
});

// Style 75: Korean Number Style
addStyle('gamer', 'gamer_korean_number', ' ┊', '모𝟶𝟽', {
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "z",
  A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H", I: "I", J: "J",
  K: "K", L: "L", M: "M", N: "N", O: "O", P: "P", Q: "Q", R: "R", S: "S", T: "T",
  U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Z"
});

// Style 76: Ind Mod Style
addStyle('gamer', 'gamer_ind_mod', 'ᶦᶰᵈ᭄', '𓂃모', {
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "z",
  A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H", I: "I", J: "J",
  K: "K", L: "L", M: "M", N: "N", O: "O", P: "P", Q: "Q", R: "R", S: "S", T: "T",
  U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Z"
});

// Style 77: Korean Leaf Style
addStyle('gamer', 'gamer_korean_leaf', '모❥━»', '₊˚·☘', {
  a: "ꪖ", b: "𝘣", c: "ꪫ", d: "𝘥", e: "ꫀ", f: "ᠻ", g: "ĝ", h: "ħ", i: "เ", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "ꪑ", n: "ꪀ", o: "ꪮ", p: "𝘱", q: "զ", r: "ř", s: "𝘴", t: "𝘵",
  u: "ꪊ", v: "v̶", w: "ω", x: "᥊", y: "𝘺", z: "ƶ",
  A: "ꪁ", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "Ꭷ", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡"
});

// Style 57: Simple Leaf Style
addStyle('gamer', 'gamer_simple_leaf', ' ', ' ☘', {
  a: "ꪖ", b: "𝘣", c: "ꪫ", d: "𝘥", e: "ꫀ", f: "ᠻ", g: "ĝ", h: "ħ", i: "เ", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "ꪑ", n: "ꪀ", o: "ꪮ", p: "𝘱", q: "զ", r: "ř", s: "𝘴", t: "𝘵",
  u: "ꪊ", v: "v̶", w: "ω", x: "᥊", y: "𝘺", z: "ƶ",
  A: "ꪁ", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "Ꭷ", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡"
});

// Style 66: X Face Leaf Style
addStyle('gamer', 'gamer_xface_leaf', 'ˣ‿ˣ ', ' °｡☘ ࿐', {
  a: "ꪖ", b: "𝘣", c: "ꪫ", d: "𝘥", e: "ꫀ", f: "ᠻ", g: "ĝ", h: "ħ", i: "เ", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "ꪑ", n: "ꪀ", o: "ꪮ", p: "𝘱", q: "զ", r: "ř", s: "𝘴", t: "𝘵",
  u: "ꪊ", v: "v̶", w: "ω", x: "᥊", y: "𝘺", z: "ƶ",
  A: "ꪁ", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "Ꭷ", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡"
});

// Style 65: Gamer Strikethrough Style
addStyle('gamer', 'gamer_strikethrough_xface', 'ᴳ̸ᴬ̸ᴹ̸ᴱ̸ᴿ̸ ⟆', '  ˣ‿ˣ', {
  a: "ꪖ", b: "𝘣", c: "ꪫ", d: "𝘥", e: "ꫀ", f: "ᠻ", g: "ĝ", h: "ħ", i: "เ", j: "𝘫",
  k: "𝘬", l: "𝘭", m: "ꪑ", n: "ꪀ", o: "ꪮ", p: "𝘱", q: "զ", r: "ř", s: "𝘴", t: "𝘵",
  u: "ꪊ", v: "v̶", w: "ω", x: "᥊", y: "𝘺", z: "ƶ",
  A: "ꪁ", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
  K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "Ꭷ", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
  U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡"
});

// Style 66: Greek Flower Style
addStyle('gamer', 'gamer_greek_flower', ' 모 ', ' ✿.࿐', {
  a: "α", b: "в", c: "c", d: "ɗ", e: "ᥱ", f: "ƒ", g: "ɠ", h: "ħ", i: "ɪ", j: "נ",
  k: "κ", l: "ℓ", m: "м", n: "η", o: "ο", p: "թ", q: "զ", r: "ř", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "ẋ", y: "ʏ", z: "ƶ",
  A: "Α", B: "Β", C: "Ͻ", D: "Ɗ", E: "Σ", F: "Ғ", G: "Ɠ", H: "H", I: "Ι", J: "Ј",
  K: "Ҡ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ө", P: "Ꭾ", Q: "Ϙ", R: "Я", S: "Ѕ", T: "Ƭ",
  U: "Ա", V: "V", W: "Ꮃ", X: "Χ", Y: "ϓ", Z: "Ζ"
});

// Style 47: Boss Greek Flower Style
addStyle('gamer', 'gamer_boss_greek_flower', 'ᴮᴼˢˢܔ ', ' ✿.࿐', {
  a: "α", b: "в", c: "c", d: "ɗ", e: "ᥱ", f: "ƒ", g: "ɠ", h: "ħ", i: "ɪ", j: "נ",
  k: "κ", l: "ℓ", m: "м", n: "η", o: "ο", p: "թ", q: "զ", r: "ř", s: "ѕ", t: "τ",
  u: "υ", v: "ν", w: "ω", x: "ẋ", y: "ʏ", z: "ƶ",
  A: "Α", B: "Β", C: "Ͻ", D: "Ɗ", E: "Σ", F: "Ғ", G: "Ɠ", H: "H", I: "Ι", J: "Ј",
  K: "Ҡ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ө", P: "Ꭾ", Q: "Ϙ", R: "Я", S: "Ѕ", T: "Ƭ",
  U: "Ա", V: "V", W: "Ꮃ", X: "Χ", Y: "ϓ", Z: "Ζ"
});
  
  // Style 48: Superscript with Greek Style
  addStyle('gamer', 'gamer_superscript_greek', 'ᶦᶰᵈ᭄ ', ' ✿.࿐', {
    a: "α", b: "в", c: "c", d: "ɗ", e: "ᥱ", f: "ƒ", g: "ɠ", h: "ħ", i: "ɪ", j: "נ",
    k: "κ", l: "ℓ", m: "м", n: "η", o: "ο", p: "թ", q: "զ", r: "ř", s: "ѕ", t: "τ",
    u: "υ", v: "ν", w: "ω", x: "ẋ", y: "ʏ", z: "ƶ",
    A: "Α", B: "Β", C: "Ͻ", D: "Ɗ", E: "Σ", F: "Ғ", G: "Ɠ", H: "H", I: "Ι", J: "Ј",
    K: "Ҡ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ө", P: "Ꭾ", Q: "Ϙ", R: "Я", S: "Ѕ", T: "Ƭ",
    U: "Ա", V: "V", W: "Ꮃ", X: "Χ", Y: "ϓ", Z: "Ζ"
  });

  // Style 49: Arrow Greek Style
  addStyle('gamer', 'gamer_arrow_greek', '➬ ', ' ⓥ', {
    a: "α", b: "в", c: "c", d: "ɗ", e: "ᥱ", f: "ƒ", g: "ɠ", h: "ħ", i: "ɪ", j: "נ",
    k: "κ", l: "ℓ", m: "м", n: "η", o: "ο", p: "թ", q: "զ", r: "ř", s: "ѕ", t: "τ",
    u: "υ", v: "ν", w: "ω", x: "ẋ", y: "ʏ", z: "ƶ",
    A: "Α", B: "Β", C: "Ͻ", D: "Ɗ", E: "Σ", F: "Ғ", G: "Ɠ", H: "H", I: "Ι", J: "Ј",
    K: "Ҡ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ө", P: "Ꭾ", Q: "Ϙ", R: "Я", S: "Ѕ", T: "Ƭ",
    U: "Ա", V: "V", W: "Ꮃ", X: "Χ", Y: "ϓ", Z: "Ζ"
  });

  // Style 7: King Greek Style
  addStyle('gamer', 'gamer_king_greek', '♔ ', ' ✿.࿐', {
    a: "α", b: "в", c: "c", d: "ɗ", e: "ᥱ", f: "ƒ", g: "ɠ", h: "ħ", i: "ɪ", j: "נ",
    k: "κ", l: "ℓ", m: "м", n: "η", o: "ο", p: "թ", q: "զ", r: "ř", s: "ѕ", t: "τ",
    u: "υ", v: "ν", w: "ω", x: "ẋ", y: "ʏ", z: "ƶ",
    A: "Α", B: "Β", C: "Ͻ", D: "Ɗ", E: "Σ", F: "Ғ", G: "Ɠ", H: "H", I: "Ι", J: "Ј",
    K: "Ҡ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ө", P: "Ꭾ", Q: "Ϙ", R: "Я", S: "Ѕ", T: "Ƭ",
    U: "Ա", V: "V", W: "Ꮃ", X: "Χ", Y: "ϓ", Z: "Ζ"
  });

  // Style 45: Symbol Greek Style
  addStyle('gamer', 'gamer_symbol_greek', '╰⁔╯', ' ✿.࿐', {
    a: "α", b: "в", c: "c", d: "ɗ", e: "ᥱ", f: "ƒ", g: "ɠ", h: "ħ", i: "ɪ", j: "נ",
    k: "κ", l: "ℓ", m: "м", n: "η", o: "ο", p: "թ", q: "զ", r: "ř", s: "ѕ", t: "τ",
    u: "υ", v: "ν", w: "ω", x: "ẋ", y: "ʏ", z: "ƶ",
    A: "Α", B: "Β", C: "Ͻ", D: "Ɗ", E: "Σ", F: "Ғ", G: "Ɠ", H: "H", I: "Ι", J: "Ј",
    K: "Ҡ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ө", P: "Ꭾ", Q: "Ϙ", R: "Я", S: "Ѕ", T: "Ƭ",
    U: "Ա", V: "V", W: "Ꮃ", X: "Χ", Y: "ϓ", Z: "Ζ"
  });

  // Style 56: Small Caps Style
  addStyle('gamer', 'gamer_small_caps', 'ᴍɪꜱᴛᴇʀ ◌ ', ' ┊❀.࿐', {
    a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
    k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
    u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ",
    A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
    K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
    U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ"
  });

  // Style 65: Strikethrough Italic Style
  addStyle('gamer', 'gamer_strikethrough_italic', '»»—', '—«« ,', {
    a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
    k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
    u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧",
    A: "A̷̷", B: "B̷̷", C: "C̷̷", D: "D̷̷", E: "E̷̷", F: "F̷̷", G: "G̷̷", H: "H̷̷", I: "I̷̷", J: "J̷̷",
    K: "K̷̷", L: "L̷̷", M: "M̷̷", N: "N̷̷", O: "O̷̷", P: "P̷̷", Q: "Q̷̷", R: "R̷̷", S: "S̷̷", T: "T̷̷",
    U: "U̷̷", V: "V̷̷", W: "W̷̷", X: "X̷̷", Y: "Y̷̷", Z: "Z̷̷"
  });

  // Style 46: Fullwidth Style
  addStyle('gamer', 'gamer_fullwidth', '', '𔘓Ｂｈａｉ', {
    a: "ａ", b: "ｂ", c: "ｃ", d: "ｄ", e: "ｅ", f: "ｆ", g: "ｇ", h: "ｈ", i: "ｉ", j: "ｊ",
    k: "ｋ", l: "ｌ", m: "ｍ", n: "ｎ", o: "ｏ", p: "ｐ", q: "ｑ", r: "ｒ", s: "ｓ", t: "ｔ",
    u: "ｕ", v: "ｖ", w: "ｗ", x: "ｘ", y: "ｙ", z: "ｚ",
    A: "Ａ", B: "Ｂ", C: "Ｃ", D: "Ｄ", E: "Ｅ", F: "Ｆ", G: "Ｇ", H: "Ｈ", I: "Ｉ", J: "Ｊ",
    K: "Ｋ", L: "Ｌ", M: "Ｍ", N: "Ｎ", O: "Ｏ", P: "Ｐ", Q: "Ｑ", R: "Ｒ", S: "Ｓ", T: "Ｔ",
    U: "Ｕ", V: "Ｖ", W: "Ｗ", X: "Ｘ", Y: "Ｙ", Z: "Ｚ"
  });

  // Style 47: Mixed Greek Thai Style
  addStyle('gamer', 'gamer_mixed_greek_thai', '☞ ', '「•❀•」𝟎𝟕𝟕', {
    a: "ภ", b: "ʙ", c: "ς", d: "ᴅ", e: "є", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
    k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "๏", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
    u: "ย", v: "ᴠ", w: "ฬ", x: "א", y: "ʏ", z: "ᴢ",
    A: "Λ", B: "Β", C: "Ͻ", D: "Ɗ", E: "Ξ", F: "Ƒ", G: "Ɠ", H: "H", I: "Ι", J: "Ј",
    K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ø", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
    U: "U", V: "V", W: "Ω", X: "Χ", Y: "Ƴ", Z: "Ζ"
  });

  // Style 48: Double Struck Gamer Style
  addStyle('gamer', 'gamer_double_struck_gamer', '៚', '❀𝔾𝕒𝕞𝕖𝕣 ‼', {
    a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
    k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
    u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫",
    A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
    K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
    U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ"
  });

  // Style 49: Script Pro Style
  addStyle('gamer', 'gamer_script_pro', '𝓟𝓻𝓸 𖧷', ' ˣ‿ˣ', {
    a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳",
    k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽",
    u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃",
    A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘", J: "𝓙",
    K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣",
    U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩"
  });

  // Style 50: Bold Prime Style
  addStyle('gamer', 'gamer_bold_prime', '𝗣𝙧𝙞𝙢𝙚メ', ' 모', {
    a: "𝙖", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝙚", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝙞", j: "𝙟",
    k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝙤", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
    u: "𝙪", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝙮", z: "𝙯",
    A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝",
    K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
    U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭"
  });

  // Style 51: Combining Ring Mr Style
  addStyle('gamer', 'gamer_combining_ring_mr', 'M͢r ❥', ' ╰⁔╯', {
    a: "a͢", b: "b͢", c: "c͢", d: "d͢", e: "e͢", f: "f͢", g: "g͢", h: "h͢", i: "i͢", j: "j͢",
    k: "k͢", l: "l͢", m: "m͢", n: "n͢", o: "o͢", p: "p͢", q: "q͢", r: "r͢", s: "s͢", t: "t͢",
    u: "u͢", v: "v͢", w: "w͢", x: "x͢", y: "y͢", z: "z͢",
    A: "A͢", B: "B͢", C: "C͢", D: "D͢", E: "E͢", F: "F͢", G: "G͢", H: "H͢", I: "I͢", J: "J͢",
    K: "K͢", L: "L͢", M: "M͢", N: "N͢", O: "O͢", P: "P͢", Q: "Q͢", R: "R͢", S: "S͢", T: "T͢",
    U: "U͢", V: "V͢", W: "W͢", X: "X͢", Y: "Y͢", Z: "Z͢"
  });

  // Style 52: Bold Fraktur FF Style
  addStyle('gamer', 'gamer_bold_fraktur_ff', '𝕱𝕱 ', ' ☬', {
    a: "𝖆", b: "𝖇", c: "𝖈", d: "𝖉", e: "𝖊", f: "𝖋", g: "𝖌", h: "𝖍", i: "𝖎", j: "𝖏",
    k: "𝖐", l: "𝖑", m: "𝖒", n: "𝖓", o: "𝖔", p: "𝖕", q: "𝖖", r: "𝖗", s: "𝖘", t: "𝖙",
    u: "𝖚", v: "𝖛", w: "𝖜", x: "𝖝", y: "𝖞", z: "𝖟",
    A: "𝕬", B: "𝕭", C: "𝕮", D: "𝕯", E: "𝕰", F: "𝕱", G: "𝕲", H: "𝕳", I: "𝕴", J: "𝕵",
    K: "𝕶", L: "𝕷", M: "𝕸", N: "𝕹", O: "𝕺", P: "𝕻", Q: "𝕼", R: "𝕽", S: "𝕾", T: "𝕿",
    U: "𝖀", V: "𝖁", W: "𝖂", X: "𝖃", Y: "𝖄", Z: "𝖅"
  });

  // Style 53: Italic Gaming Style
  addStyle('gamer', 'gamer_italic_gaming', '么 ', ' ⧽𝐺𝑎𝑚𝑖𝑛𝑔 ✓', {
    a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
    k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
    u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧",
    A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
    K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
    U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍"
  });

  // Style 54: Squared QN Style
  addStyle('gamer', 'gamer_squared_qn', '🅀🄽┋ ', '┋*࿐', {
    a: "🄰", b: "🄱", c: "🄲", d: "🄳", e: "🄴", f: "🄵", g: "🄶", h: "🄷", i: "🄸", j: "🄹",
    k: "🄺", l: "🄻", m: "🄼", n: "🄽", o: "🄾", p: "🄿", q: "🅀", r: "🅁", s: "🅂", t: "🅃",
    u: "🅄", v: "🅅", w: "🅆", x: "🅇", y: "🅈", z: "🅉",
    A: "🄰", B: "🄱", C: "🄲", D: "🄳", E: "🄴", F: "🄵", G: "🄶", H: "🄷", I: "🄸", J: "🄹",
    K: "🄺", L: "🄻", M: "🄼", N: "🄽", O: "🄾", P: "🄿", Q: "🅀", R: "🅁", S: "🅂", T: "🅃",
    U: "🅄", V: "🅅", W: "🅆", X: "🅇", Y: "🅈", Z: "🅉"
  });

  // Style 55: Sans Serif Italic NG Style
  addStyle('gamer', 'gamer_sans_serif_italic_ng', '𝘕𝘎 ⧉ ', ' ⋆˙𓍊₊꧂', {
    a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
    k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
    u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻",
    A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
    K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
    U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡"
  });

  // Style 56: Negative Circle OP Style
  addStyle('gamer', 'gamer_negative_circle_op', '🅞🅟 ', ' ❽❽', {
    a: "🅐", b: "🅑", c: "🅒", d: "🅓", e: "🅔", f: "🅕", g: "🅖", h: "🅗", i: "🅘", j: "🅙",
    k: "🅚", l: "🅛", m: "🅜", n: "🅝", o: "🅞", p: "🅟", q: "🅠", r: "🅡", s: "🅢", t: "🅣",
    u: "🅤", v: "🅥", w: "🅦", x: "🅧", y: "🅨", z: "🅩",
    A: "🅐", B: "🅑", C: "🅒", D: "🅓", E: "🅔", F: "🅕", G: "🅖", H: "🅗", I: "🅘", J: "🅙",
    K: "🅚", L: "🅛", M: "🅜", N: "🅝", O: "🅞", P: "🅟", Q: "🅠", R: "🅡", S: "🅢", T: "🅣",
    U: "🅤", V: "🅥", W: "🅦", X: "🅧", Y: "🅨", Z: "🅩"
  });

  // Style 57: Circled Style
  addStyle('gamer', 'gamer_circled', '៚', ' ˣ‿ˣ', {
    a: "ⓐ", b: "ⓑ", c: "ⓒ", d: "ⓓ", e: "ⓔ", f: "ⓕ", g: "ⓖ", h: "ⓗ", i: "ⓘ", j: "ⓙ",
    k: "ⓚ", l: "ⓛ", m: "ⓜ", n: "ⓝ", o: "ⓞ", p: "ⓟ", q: "ⓠ", r: "ⓡ", s: "ⓢ", t: "ⓣ",
    u: "ⓤ", v: "ⓥ", w: "ⓦ", x: "ⓧ", y: "ⓨ", z: "ⓩ",
    A: "Ⓐ", B: "Ⓑ", C: "Ⓒ", D: "Ⓓ", E: "Ⓔ", F: "Ⓕ", G: "Ⓖ", H: "Ⓗ", I: "Ⓘ", J: "Ⓙ",
    K: "Ⓚ", L: "Ⓛ", M: "Ⓜ", N: "Ⓝ", O: "Ⓞ", P: "Ⓟ", Q: "Ⓠ", R: "Ⓡ", S: "Ⓢ", T: "Ⓣ",
    U: "Ⓤ", V: "Ⓥ", W: "Ⓦ", X: "Ⓧ", Y: "Ⓨ", Z: "Ⓩ"
  });
  
  // Style 58: Bold Italic with Cross Symbol
  addStyle('gamer', 'gamer_bold_italic_cross', '𝑿-', ' 亗', {
    a: "𝒂", b: "𝒃", c: "𝒄", d: "𝒅", e: "𝒆", f: "𝒇", g: "𝒈", h: "𝒉", i: "𝒊", j: "𝒋",
    k: "𝒌", l: "𝒍", m: "𝒎", n: "𝒏", o: "𝒐", p: "𝒑", q: "𝒒", r: "𝒓", s: "𝒔", t: "𝒕",
    u: "𝒖", v: "𝒗", w: "𝒘", x: "𝒙", y: "𝒚", z: "𝒛",
    A: "𝑨", B: "𝑩", C: "𝑪", D: "𝑫", E: "𝑬", F: "𝑭", G: "𝑮", H: "𝑯", I: "𝑰", J: "𝑱",
    K: "𝑲", L: "𝑳", M: "𝑴", N: "𝑵", O: "𝑶", P: "𝑷", Q: "𝑸", R: "𝑹", S: "𝑺", T: "𝑻",
    U: "𝑼", V: "𝑽", W: "𝑾", X: "𝑿", Y: "𝒀", Z: "𝒁"
  });

  // Style 59: Negative Circle with Numbers
  addStyle('gamer', 'gamer_negative_circle', '🅶🅹ᑄ ', ' 𝟶𝟽', {
    a: "🅰", b: "🅱", c: "🅲", d: "🅳", e: "🅴", f: "🅵", g: "🅶", h: "🅷", i: "🅸", j: "🅹",
    k: "🅺", l: "🅻", m: "🅼", n: "🅽", o: "🅾", p: "🅿", q: "🆀", r: "🆁", s: "🆂", t: "🆃",
    u: "🆄", v: "🆅", w: "🆆", x: "🆇", y: "🆈", z: "🆉",
    A: "🅰", B: "🅱", C: "🅲", D: "🅳", E: "🅴", F: "🅵", G: "🅶", H: "🅷", I: "🅸", J: "🅹",
    K: "🅺", L: "🅻", M: "🅼", N: "🅽", O: "🅾", P: "🅿", Q: "🆀", R: "🆁", S: "🆂", T: "🆃",
    U: "🆄", V: "🆅", W: "🆆", X: "🆇", Y: "🆈", Z: "🆉"
  });

  // Style 60: Strikethrough with Smiley
  addStyle('gamer', 'gamer_strikethrough_smiley', 'C̷̷r̷a̷z̷y̷ ៚', '⋆˚ˣ‿ˣ', {
    a: "a̷", b: "b̷", c: "c̷", d: "d̷", e: "e̷", f: "f̷", g: "g̷", h: "h̷", i: "i̷", j: "j̷",
    k: "k̷", l: "l̷", m: "m̷", n: "n̷", o: "o̷", p: "p̷", q: "q̷", r: "r̷", s: "s̷", t: "t̷",
    u: "u̷", v: "v̷", w: "w̷", x: "x̷", y: "y̷", z: "z̷",
    A: "A̷̷", B: "B̷̷", C: "C̷̷", D: "D̷̷", E: "E̷̷", F: "F̷̷", G: "G̷̷", H: "H̷̷", I: "I̷̷", J: "J̷̷",
    K: "K̷̷", L: "L̷̷", M: "M̷̷", N: "N̷̷", O: "O̷̷", P: "P̷̷", Q: "Q̷̷", R: "R̷̷", S: "S̷̷", T: "T̷̷",
    U: "U̷̷", V: "V̷̷", W: "W̷̷", X: "X̷̷", Y: "Y̷̷", Z: "Z̷̷"
  });

  // Style 61: Greek Small with Crown
  addStyle('gamer', 'gamer_greek_small_crown', 'ℓσяɗ᭄ ', ' ♔', {
    a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
    k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
    u: "υ", v: "ν", w: "ω", x: "ẋ", y: "γ", z: "ƶ",
    A: "α", B: "в", C: "c", D: "ɗ", E: "ε", F: "ƒ", G: "ɠ", H: "н", I: "ɪ", J: "נ",
    K: "κ", L: "ℓ", M: "м", N: "η", O: "σ", P: "ρ", Q: "զ", R: "я", S: "ѕ", T: "τ",
    U: "υ", V: "ν", W: "ω", X: "ẋ", Y: "γ", Z: "ƶ"
  });

  // Style 23: Double Underline with Boss Symbol
  addStyle('gamer', 'gamer_double_underline_boss', 'B͓̽o͓̽s͓̽s᭄͓̽ ', ' 亗', {
    a: "a͓̽", b: "b͓̽", c: "c͓̽", d: "d͓̽", e: "e͓̽", f: "f͓̽", g: "g͓̽", h: "h͓̽", i: "i͓̽", j: "j͓̽",
    k: "k͓̽", l: "l͓̽", m: "m͓̽", n: "n͓̽", o: "o͓̽", p: "p͓̽", q: "q͓̽", r: "r͓̽", s: "s͓̽", t: "t͓̽",
    u: "u͓̽", v: "v͓̽", w: "w͓̽", x: "x͓̽", y: "y͓̽", z: "z͓̽",
    A: "A͓̽", B: "B͓̽", C: "C͓̽", D: "D͓̽", E: "E͓̽", F: "F͓̽", G: "G͓̽", H: "H͓̽", I: "I͓̽", J: "J͓̽",
    K: "K͓̽", L: "L͓̽", M: "M͓̽", N: "N͓̽", O: "O͓̽", P: "P͓̽", Q: "Q͓̽", R: "R͓̽", S: "S͓̽", T: "T͓̽",
    U: "U͓̽", V: "V͓̽", W: "W͓̽", X: "X͓̽", Y: "Y͓̽", Z: "Z͓̽"
  });

  // Style 25: Monospace with Pro Symbol
  addStyle('gamer', 'gamer_monospace_pro', '➬ ', ' ✰ 𝙿𝚛𝚘࿐', {
    a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
    k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
    u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣",
    A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
    K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
    U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉"
  });

  // Style 26: Greek Mixed with Korean Symbol
  addStyle('gamer', 'gamer_greek_mixed_korean', 'ЯЯ『', '』乂 모', {
    a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
    k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
    u: "υ", v: "ν", w: "ω", x: "ẋ", y: "𝚢", z: "ƶ",
    A: "Α", B: "Β", C: "Ͻ", D: "Ɗ", E: "Σ", F: "Ƒ", G: "Ɠ", H: "Ν", I: "Ι", J: "Ј",
    K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ο", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
    U: "Υ", V: "Ν", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ"
  });

  // Style 49: Double Overline with Star Decoration
  addStyle('gamer', 'gamer_double_overline_star', '—͟͞͞✰ ', ' ⋆˙⟡', {
    a: "a̾", b: "b̾", c: "c̾", d: "d̾", e: "e̾", f: "f̾", g: "g̾", h: "h̾", i: "i̾", j: "j̾",
    k: "k̾", l: "l̾", m: "m̾", n: "n̾", o: "o̾", p: "p̾", q: "q̾", r: "r̾", s: "s̾", t: "t̾",
    u: "u̾", v: "v̾", w: "w̾", x: "x̾", y: "y̾", z: "z̾",
    A: "A̾", B: "B̾", C: "C̾", D: "D̾", E: "E̾", F: "F̾", G: "G̾", H: "H̾", I: "I̾", J: "J̾",
    K: "K̾", L: "L̾", M: "M̾", N: "N̾", O: "O̾", P: "P̾", Q: "Q̾", R: "R̾", S: "S̾", T: "T̾",
    U: "U̾", V: "V̾", W: "W̾", X: "X̾", Y: "Y̾", Z: "Z̾"
  });

  // Style 69: Mixed with Crown Symbol
  addStyle('gamer', 'gamer_mixed_crown', 'ᴍ᥆ ⋆˙⟡ ', ' ⋆˙⟡ ༒', {
    a: "ᥲ", b: "ᑲ", c: "ᥴ", d: "ᑯ", e: "ᥱ", f: "ƒ", g: "ɠ", h: "ᕼ", i: "Ꭵ", j: "נ",
    k: "κ", l: "ℓ", m: "ᴍ", n: "ᥒ", o: "᥆", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
    u: "υ", v: "ν", w: "᭙", x: "᥊", y: "ᥒ", z: "ɀ",
    A: "ᥲ", B: "ᑲ", C: "ᥴ", D: "ᑯ", E: "ᥱ", F: "ƒ", G: "ɠ", H: "ᕼ", I: "Ꭵ", J: "נ",
    K: "κ", L: "ℓ", M: "ᴍ", N: "ᥒ", O: "᥆", P: "ρ", Q: "զ", R: "я", S: "ѕ", T: "τ",
    U: "υ", V: "ν", W: "᭙", X: "᥊", Y: "ᥒ", Z: "ɀ"
  });

  // Style 32: Extended with Warning Symbol
  addStyle('gamer', 'gamer_extended_warning', 'ẋẊ⚠', '⚠Ẋẋ ⓥ', {
    a: "ⱥ", b: "ᵬ", c: "ȼ", d: "ᶑ", e: "ɇ", f: "ᶂ", g: "ᶃ", h: "ħ", i: "ᶖ", j: "ʝ",
    k: "ƙ", l: "ḽ", m: "ɱ", n: "ᶇ", o: "ø", p: "ᵽ", q: "ɋ", r: "ᶉ", s: "ʂ", t: "ȶ",
    u: "ʋ", v: "ᶌ", w: "ẅ", x: "ẋ", y: "ᶌ", z: "ʑ",
    A: "Ɐ", B: "ᴃ", C: "Ƈ", D: "ᴅ", E: "Ɇ", F: "ᶂ", G: "Ɠ", H: "Ħ", I: "ᶤ", J: "ᴊ",
    K: "ƙ", L: "ᶅ", M: "ᴍ", N: "Ƞ", O: "Ø", P: "ᴘ", Q: "Ɋ", R: "ʀ", S: "Ѕ", T: "Ŧ",
    U: "Ữ", V: "Ṽ", W: "Ẅ", X: "Ẋ", Y: "Ỵ", Z: "Ƶ"
  });

  // Style 33: Fraktur with Crown Symbol
  addStyle('gamer', 'gamer_fraktur_crown', '𝖑𝖔𝖗𝖉 ', ' ┊♕', {
    a: "𝖆", b: "𝖇", c: "𝖈", d: "𝖉", e: "𝖊", f: "𝖋", g: "𝖌", h: "𝖍", i: "𝖎", j: "𝖏",
    k: "𝖐", l: "𝖑", m: "𝖒", n: "𝖓", o: "𝖔", p: "𝖕", q: "𝖖", r: "𝖗", s: "𝖘", t: "𝖙",
    u: "𝖚", v: "𝖛", w: "𝖜", x: "𝖝", y: "𝖞", z: "𝖟",
    A: "𝕬", B: "𝕭", C: "𝕮", D: "𝕯", E: "𝕰", F: "𝕱", G: "𝕲", H: "𝕳", I: "𝕴", J: "𝕵",
    K: "𝕶", L: "𝕷", M: "𝕸", N: "𝕹", O: "𝕺", P: "𝕻", Q: "𝕼", R: "𝕽", S: "𝕾", T: "𝕿",
    U: "𝖀", V: "𝖁", W: "𝖂", X: "𝖃", Y: "𝖄", Z: "𝖅"
  });

  // Style 34: Greek Mathematical with Cross
  addStyle('gamer', 'gamer_greek_mathematical_cross', '┊⛥┊', ' - 𝛘', {
    a: "𝛂", b: "𝛃", c: "𝛇", d: "𝛅", e: "𝛆", f: "𝛇", g: "𝛓", h: "𝛑", i: "𝖎", j: "𝖏",
    k: "𝛋", l: "𝛊", m: "𝛍", n: "𝛈", o: "𝛐", p: "𝛒", q: "𝛗", r: "𝛑", s: "𝛔", t: "𝛕",
    u: "𝛖", v: "𝛎", w: "𝛚", x: "𝛘", y: "𝛙", z: "𝛏",
    A: "𝛂", B: "𝛃", C: "𝛇", D: "𝛅", E: "𝛆", F: "𝛇", G: "𝛓", H: "𝛑", I: "𝖎", J: "𝖏",
    K: "𝛋", L: "𝛊", M: "𝛍", N: "𝛈", O: "𝛐", P: "𝛒", Q: "𝛗", R: "𝛑", S: "𝛔", T: "𝛕",
    U: "𝛖", V: "𝛎", W: "𝛚", X: "𝛘", Y: "𝛙", Z: "𝛏"
  });

  // Style 35: Greek with Dot Decoration
  addStyle('gamer', 'gamer_greek_dots', '༒Ø·˚₊ ', ' ₊˚·Ø༒', {
    a: "Δ", b: "β", c: "C", d: "Đ", e: "Σ", f: "Ϝ", g: "Ꮆ", h: "Ħ", i: "I", j: "J",
    k: "К", l: "Ꮭ", m: "M", n: "П", o: "Ø", p: "Ƥ", q: "Ǫ", r: "Ŗ", s: "Ѕ", t: "Ͳ",
    u: "Ц", v: "Ѵ", w: "Ш", x: "X", y: "Ψ", z: "Ẕ",
    A: "Δ", B: "β", C: "C", D: "Đ", E: "Σ", F: "Ϝ", G: "Ꮆ", H: "Ħ", I: "I", J: "J",
    K: "К", L: "Ꮭ", M: "M", N: "П", O: "Ø", P: "Ƥ", Q: "Ǫ", R: "Ŗ", S: "Ѕ", T: "Ͳ",
    U: "Ц", V: "Ѵ", W: "Ш", X: "X", Y: "Ψ", Z: "Ẕ"
  });

  // Style 36: Bold Alternate with Symbol
  addStyle('gamer', 'gamer_bold_alternate_symbol', '☞ ', ' ☫ ᎰᎰ', {
    a: "Ꭿ", b: "Ᏸ", c: "Ꮸ", d: "Ꮄ", e: "Ꭼ", f: "Ꮀ", g: "Ꮐ", h: "Ꮋ", i: "Ꭵ", j: "Ꮰ",
    k: "Ꮶ", l: "Ꮭ", m: "Ꮇ", n: "Ꮑ", o: "Ꮎ", p: "Ꮲ", q: "Ꭴ", r: "Ꮢ", s: "Ꮥ", t: "Ꮦ",
    u: "Ꮼ", v: "Ꮙ", w: "Ꮗ", x: "ጀ", y: "Ꮍ", z: "Ꮓ",
    A: "Ꭿ", B: "Ᏸ", C: "Ꮸ", D: "Ꮄ", E: "Ꭼ", F: "Ꮀ", G: "Ꮐ", H: "Ꮋ", I: "Ꭵ", J: "Ꮰ",
    K: "Ꮶ", L: "Ꮭ", M: "Ꮇ", N: "Ꮑ", O: "Ꮎ", P: "Ꮲ", Q: "Ꭴ", R: "Ꮢ", S: "Ꮥ", T: "Ꮦ",
    U: "Ꮼ", V: "Ꮙ", W: "Ꮗ", X: "ጀ", Y: "Ꮍ", Z: "Ꮓ"
  });

  // Style 38: Circle Accent with Numbers
  addStyle('gamer', 'gamer_circle_accent_numbers', '', ' ❻❼', {
    a: "ᵃ͎", b: "ᵇ͎", c: "ᶜ͎", d: "ᵈ͎", e: "ᵉ͎", f: "ᶠ͎", g: "ᵍ͎", h: "ʰ͎", i: "ⁱ͎", j: "ʲ͎",
    k: "ᵏ͎", l: "ˡ͎", m: "ᵐ͎", n: "ⁿ͎", o: "ᵒ͎", p: "ᵖ͎", q: "ᑫ͎", r: "ʳ͎", s: "ˢ͎", t: "ᵗ͎",
    u: "ᵘ͎", v: "ᵛ͎", w: "ʷ͎", x: "ˣ͎", y: "ʸ͎", z: "ᶻ͎",
    A: "ᴬ͎", B: "ᴮ͎", C: "ᶜ͎", D: "ᴰ͎", E: "ᴱ͎", F: "ᶠ͎", G: "ᴳ͎", H: "ᴴ͎", I: "ᴵ͎", J: "ᴶ͎",
    K: "ᴷ͎", L: "ᴸ͎", M: "ᴹ͎", N: "ᴺ͎", O: "ᴼ͎", P: "ᴾ͎", Q: "ᵠ͎", R: "ᴿ͎", S: "ˢ͎", T: "ᵀ͎",
    U: "ᵁ͎", V: "ⱽ͎", W: "ᵂ͎", X: "ˣ͎", Y: "ʸ͎", Z: "ᶻ͎"
  });

  // Style 39: Small Caps with Dot and Symbol
  addStyle('gamer', 'gamer_small_caps_dot_symbol', 'ᴄ·ᴋ· ', ' 𔘓', {
    a: "ᴀ·", b: "ʙ·", c: "ᴄ·", d: "ᴅ·", e: "ᴇ·", f: "ꜰ·", g: "ɢ·", h: "ʜ·", i: "ɪ·", j: "ᴊ·",
    k: "ᴋ·", l: "ʟ·", m: "ᴍ·", n: "ɴ·", o: "ᴏ·", p: "ᴘ·", q: "ǫ·", r: "ʀ·", s: "ꜱ·", t: "ᴛ·",
    u: "ᴜ·", v: "ᴠ·", w: "ᴡ·", x: "x·", y: "ʏ·", z: "ᴢ·",
    A: "ᴀ·", B: "ʙ·", C: "ᴄ·", D: "ᴅ·", E: "ᴇ·", F: "ꜰ·", G: "ɢ·", H: "ʜ·", I: "ɪ·", J: "ᴊ·",
    K: "ᴋ·", L: "ʟ·", M: "ᴍ·", N: "ɴ·", O: "ᴏ·", P: "ᴘ·", Q: "ǫ·", R: "ʀ·", S: "ꜱ·", T: "ᴛ·",
    U: "ᴜ·", V: "ᴠ·", W: "ᴡ·", X: "x·", Y: "ʏ·", Z: "ᴢ·"
  });

  // Style 98: Greek with Korean Symbol
  addStyle('gamer', 'gamer_greek_korean', 'ΥΤ ', ' 모', {
    a: "Λ", b: "Β", c: "Ͻ", d: "Ɗ", e: "Ξ", f: "Ƒ", g: "Ɠ", h: "H", i: "Ι", j: "Ј",
    k: "Κ", l: "ᒪ", m: "Μ", n: "Ν", o: "Ø", p: "Ρ", q: "Ԛ", r: "Я", s: "Ѕ", t: "Τ",
    u: "U", v: "V", w: "Ω", x: "Χ", y: "Υ", z: "Ζ",
    A: "Λ", B: "Β", C: "Ͻ", D: "Ɗ", E: "Ξ", F: "Ƒ", G: "Ɠ", H: "H", I: "Ι", J: "Ј",
    K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ø", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
    U: "U", V: "V", W: "Ω", X: "Χ", Y: "Υ", Z: "Ζ"
  });

  // Style 47: Special Accent with Symbols
  addStyle('gamer', 'gamer_special_accent', 'R̵̔2⸝⸝⸝ ', ' ⸝⸝⸝╰⁔╯', {
    a: "A̵̔", b: "B̵̔", c: "C̵̔", d: "D̵̔", e: "E̵̔", f: "F̵̔", g: "G̵̔", h: "H̵̔", i: "I̵̔", j: "J̵̔",
    k: "K̵̔", l: "L̵̔", m: "M̵̔", n: "N̵̔", o: "O̵̔", p: "P̵̔", q: "Q̵̔", r: "R̵̔", s: "S̵̔", t: "T̵̔",
    u: "U̵̔", v: "V̵̔", w: "W̵̔", x: "X̵̔", y: "Y̵̔", z: "Z̵̔",
    A: "A̵̔", B: "B̵̔", C: "C̵̔", D: "D̵̔", E: "E̵̔", F: "F̵̔", G: "G̵̔", H: "H̵̔", I: "I̵̔", J: "J̵̔",
    K: "K̵̔", L: "L̵̔", M: "M̵̔", N: "N̵̔", O: "O̵̔", P: "P̵̔", Q: "Q̵̔", R: "R̵̔", S: "S̵̔", T: "T̵̔",
    U: "U̵̔", V: "V̵̔", W: "W̵̔", X: "X̵̔", Y: "Y̵̔", Z: "Z̵̔"
  });

  // Style 49: Armenian Accent with Flower
  addStyle('gamer', 'gamer_armenian_accent', '⸝⸝𖹭⸝⸝', ' 𖹭࿐❹❺', {
    a: "a֟", b: "b֟", c: "c֟", d: "d֟", e: "e֟", f: "f֟", g: "g֟", h: "h֟", i: "i֟", j: "j֟",
    k: "k֟", l: "l֟", m: "m֟", n: "n֟", o: "o֟", p: "p֟", q: "q֟", r: "r֟", s: "s֟", t: "t֟",
    u: "u֟", v: "v֟", w: "w֟", x: "x֟", y: "y֟", z: "z֟",
    A: "A֟", B: "B֟", C: "C֟", D: "D֟", E: "E֟", F: "F֟", G: "G֟", H: "H֟", I: "I֟", J: "J֟",
    K: "K֟", L: "L֟", M: "M֟", N: "N֟", O: "O֟", P: "P֟", Q: "Q֟", R: "R֟", S: "S֟", T: "T֟",
    U: "U֟", V: "V֟", W: "W֟", X: "X֟", Y: "Y֟", Z: "Z֟"
  });
  
  // Style 50: Sparkle with Cloud Decoration
  addStyle('gamer', 'gamer_sparkle_cloud', '✿⃟ ', ' ☁︎ ˚｡⋆☽˚｡', {
    a: "a҉", b: "b҉", c: "c҉", d: "d҉", e: "e҉", f: "f҉", g: "g҉", h: "h҉", i: "i҉", j: "j҉",
    k: "k҉", l: "l҉", m: "m҉", n: "n҉", o: "o҉", p: "p҉", q: "q҉", r: "r҉", s: "s҉", t: "t҉",
    u: "u҉", v: "v҉", w: "w҉", x: "x҉", y: "y҉", z: "z҉",
    A: "A҉", B: "B҉", C: "C҉", D: "D҉", E: "E҉", F: "F҉", G: "G҉", H: "H҉", I: "I҉", J: "J҉",
    K: "K҉", L: "L҉", M: "M҉", N: "N҉", O: "O҉", P: "P҉", Q: "Q҉", R: "R҉", S: "S҉", T: "T҉",
    U: "U҉", V: "V҉", W: "W҉", X: "X҉", Y: "Y҉", Z: "Z҉"
  });

  // Style 56: Squared with Frame
  addStyle('gamer', 'gamer_squared_frame', '꧁╬', '╬꧂', {
    a: "🄐", b: "🄑", c: "🄒", d: "🄓", e: "🄔", f: "🄕", g: "🄖", h: "🄗", i: "🄘", j: "🄙",
    k: "🄚", l: "🄛", m: "🄜", n: "🄝", o: "🄞", p: "🄟", q: "🄠", r: "🄡", s: "🄢", t: "🄣",
    u: "🄤", v: "🄥", w: "🄦", x: "🄧", y: "🄨", z: "🄩",
    A: "🄐", B: "🄑", C: "🄒", D: "🄓", E: "🄔", F: "🄕", G: "🄖", H: "🄗", I: "🄘", J: "🄙",
    K: "🄚", L: "🄛", M: "🄜", N: "🄝", O: "🄞", P: "🄟", Q: "🄠", R: "🄡", S: "🄢", T: "🄣",
    U: "🄤", V: "🄥", W: "🄦", X: "🄧", Y: "🄨", Z: "🄩"
  });

  // Style 57: QT with Lambda
  addStyle('gamer', 'gamer_qt_lambda', 'QT ', ' (◖⁠⚆⁠ᴥ⁠⚆⁠◗', {
    a: "Λ", b: "B", c: "ᑕ", d: "ᗪ", e: "Σ", f: "F", g: "G", h: "ᕼ", i: "I", j: "ᒍ",
    k: "K", l: "ᒪ", m: "ᗰ", n: "ᑎ", o: "Θ", p: "P", q: "Q", r: "R", s: "S", t: "T",
    u: "ᑌ", v: "V", w: "ᗯ", x: "X", y: "Y", z: "Z",
    A: "Λ", B: "B", C: "ᑕ", D: "ᗪ", E: "Σ", F: "F", G: "G", H: "ᕼ", I: "I", J: "ᒍ",
    K: "K", L: "ᒪ", M: "ᗰ", N: "ᑎ", O: "Θ", P: "P", Q: "Q", R: "R", S: "S", T: "T",
    U: "ᑌ", V: "V", W: "ᗯ", X: "X", Y: "Y", Z: "Z"
  });

  // Style 58: Double Underline with Boss
  addStyle('gamer', 'gamer_double_underline_boss', 'ˣ‿ˣ ', ' ꫟ ʙ͓̽ᴏ͓̽s͓̽s͓̽', {
    a: "ᴀ͓̽", b: "ʙ͓̽", c: "ᴄ͓̽", d: "ᴅ͓̽", e: "ᴇ͓̽", f: "ғ͓̽", g: "ɢ͓̽", h: "ʜ͓̽", i: "ɪ͓̽", j: "ᴊ͓̽",
    k: "ᴋ͓̽", l: "ʟ͓̽", m: "ᴍ͓̽", n: "ɴ͓̽", o: "ᴏ͓̽", p: "ᴘ͓̽", q: "ᴏ͓̽", r: "ʀ͓̽", s: "s͓̽", t: "ᴛ͓̽",
    u: "ᴜ͓̽", v: "ᴠ͓̽", w: "ᴡ͓̽", x: "x͓̽", y: "ʏ͓̽", z: "ᴢ͓̽",
    A: "ᴀ͓̽", B: "ʙ͓̽", C: "ᴄ͓̽", D: "ᴅ͓̽", E: "ᴇ͓̽", F: "ғ͓̽", G: "ɢ͓̽", H: "ʜ͓̽", I: "ɪ͓̽", J: "ᴊ͓̽",
    K: "ᴋ͓̽", L: "ʟ͓̽", M: "ᴍ͓̽", N: "ɴ͓̽", O: "ᴏ͓̽", P: "ᴘ͓̽", Q: "ᴏ͓̽", R: "ʀ͓̽", S: "s͓̽", T: "ᴛ͓̽",
    U: "ᴜ͓̽", V: "ᴠ͓̽", W: "ᴡ͓̽", X: "x͓̽", Y: "ʏ͓̽", Z: "ᴢ͓̽"
  });

  // Style 59: Greek Alternate with Question
  addStyle('gamer', 'gamer_greek_question', ' ⋆.𐙚 ', ' ??', {
    a: "Δ", b: "β", c: "Ͼ", d: "Ð", e: "ξ", f: "Ғ", g: "Ǥ", h: "Ӈ", i: "Ϊ", j: "Ј",
    k: "Ӄ", l: "Ł", m: "Ϻ", n: "Ɲ", o: "Θ", p: "Ƥ", q: "φ", r: "Я", s: "Ș", t: "Ŧ",
    u: "Ϋ", v: "Ѵ", w: "Ш", x: "Ӿ", y: "¥", z: "Ƶ",
    A: "Δ", B: "β", C: "Ͼ", D: "Ð", E: "ξ", F: "Ғ", G: "Ǥ", H: "Ӈ", I: "Ϊ", J: "Ј",
    K: "Ӄ", L: "Ł", M: "Ϻ", N: "Ɲ", O: "Θ", P: "Ƥ", Q: "φ", R: "Я", S: "Ș", T: "Ŧ",
    U: "Ϋ", V: "Ѵ", W: "Ш", X: "Ӿ", Y: "¥", Z: "Ƶ"
  });

  // Style 60: Chinese with Box Frame
  addStyle('gamer', 'gamer_chinese_box', '尺丂 ░', '░꧂', {
    a: "卂", b: "乃", c: "匚", d: "刀", e: "乇", f: "千", g: "Ꮆ", h: "卄", i: "丨", j: "ﾌ",
    k: "Ҝ", l: "ㄥ", m: "爪", n: "几", o: "ㄖ", p: "卩", q: "Ҩ", r: "尺", s: "丂", t: "ㄒ",
    u: "ㄩ", v: "ᐯ", w: "山", x: "乂", y: "ㄚ", z: "乙",
    A: "卂", B: "乃", C: "匚", D: "刀", E: "乇", F: "千", G: "Ꮆ", H: "卄", I: "丨", J: "ﾌ",
    K: "Ҝ", L: "ㄥ", M: "爪", N: "几", O: "ㄖ", P: "卩", Q: "Ҩ", R: "尺", S: "丂", T: "ㄒ",
    U: "ㄩ", V: "ᐯ", W: "山", X: "乂", Y: "ㄚ", Z: "乙"
  });

  // Style 72: Strikethrough with Killer
  addStyle('gamer', 'gamer_strikethrough_killer', 'k̶i̶l̶l̶e̶r̶‹𝟹 ', ' ꪶꫂ༒', {
    a: "a̶", b: "b̶", c: "c̶", d: "d̶", e: "e̶", f: "f̶", g: "g̶", h: "h̶", i: "i̶", j: "j̶",
    k: "k̶", l: "l̶", m: "m̶", n: "n̶", o: "o̶", p: "p̶", q: "q̶", r: "r̶", s: "s̶", t: "t̶",
    u: "u̶", v: "v̶", w: "w̶", x: "x̶", y: "y̶", z: "z̶",
    A: "A̶", B: "B̶", C: "C̶", D: "D̶", E: "E̶", F: "F̶", G: "G̶", H: "H̶", I: "I̶", J: "J̶",
    K: "K̶", L: "L̶", M: "M̶", N: "N̶", O: "O̶", P: "P̶", Q: "Q̶", R: "R̶", S: "S̶", T: "T̶",
    U: "U̶", V: "V̶", W: "W̶", X: "X̶", Y: "Y̶", Z: "Z̶"
  });

  // Style 73: Sans Serif with Flower
  addStyle('gamer', 'gamer_sans_serif_flower', '𒆜', ' ꪶꫂ ❀', {
    a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
    k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
    u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻",
    A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
    K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
    U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡"
  });

  // Style 76: Upside Down with Arrow
  addStyle('gamer', 'gamer_upside_down_arrow', '', ' ⅄⊥', {
    a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ", f: "ɟ", g: "ƃ", h: "ɥ", i: "ᴉ", j: "ɾ",
    k: "ʞ", l: "ꞁ", m: "ɯ", n: "u", o: "o", p: "d", q: "b", r: "ɹ", s: "s", t: "ʇ",
    u: "n", v: "ʌ", w: "ʍ", x: "x", y: "ʎ", z: "z",
    A: "∀", B: "𐐒", C: "Ɔ", D: "◖Ǝ", E: "Ⅎ", F: "⅁", G: "H", H: "I", I: "ſ", J: "ꓘ",
    K: "˥", L: "W", M: "N", N: "O", O: "Ԁ", P: "Ò", Q: "ᴚ", R: "S", S: "⊥", T: "∩",
    U: "Λ", V: "M", W: "X", X: "⅄", Y: "Z", Z: "𐐒"
  });

  // Style 77: Underline with Pirrot
  addStyle('gamer', 'gamer_underline_pirrot', '៚ꪎ ', '᭄ P̲i̲r̲r̲o̲t̲☸‼', {
    a: "a̲", b: "b̲", c: "c̲", d: "d̲", e: "e̲", f: "f̲", g: "g̲", h: "h̲", i: "i̲", j: "j̲",
    k: "k̲", l: "l̲", m: "m̲", n: "n̲", o: "o̲", p: "p̲", q: "q̲", r: "r̲", s: "s̲", t: "t̲",
    u: "u̲", v: "v̲", w: "w̲", x: "x̲", y: "y̲", z: "z̲",
    A: "A̲", B: "B̲", C: "C̲", D: "D̲", E: "E̲", F: "F̲", G: "G̲", H: "H̲", I: "I̲", J: "J̲",
    K: "K̲", L: "L̲", M: "M̲", N: "N̲", O: "O̲", P: "P̲", Q: "Q̲", R: "R̲", S: "S̲", T: "T̲",
    U: "U̲", V: "V̲", W: "W̲", X: "X̲", Y: "Y̲", Z: "Z̲"
  });

  // Style 81: Currency with Special
  addStyle('gamer', 'gamer_currency_special', '៚ϟ ', '⸝⸝⸝7ꪎ', {
    a: "₳", b: "฿", c: "₵", d: "Đ", e: "E̷̷", f: "₣", g: "₲", h: "Ⱨ", i: "ł", j: "J",
    k: "₭", l: "Ⱡ", m: "₥", n: "₦", o: "Ø", p: "Ƥ", q: "Ᵽ", r: "Ɽ", s: "₴", t: "₮",
    u: "ฯ", v: "ⱽ", w: "₩", x: "Ӿ", y: "¥", z: "Ⱬ",
    A: "₳", B: "฿", C: "₵", D: "Đ", E: "E̷̷", F: "₣", G: "₲", H: "Ⱨ", I: "ł", J: "J",
    K: "₭", L: "Ⱡ", M: "₥", N: "₦", O: "Ø", P: "Ƥ", Q: "Ᵽ", R: "Ɽ", S: "₴", T: "₮",
    U: "ฯ", V: "ⱽ", W: "₩", X: "Ӿ", Y: "¥", Z: "Ⱬ"
  });
  
  // Style 61: Miss with Flower Decoration
  addStyle('love', 'love_miss_flower', 'ᴍɪꜱꜱ❀', '❀.࿐', {
    a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
    k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
    u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ",
    A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
    K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
    U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ"
  });

  // Style 65: Strikethrough Italic with Umbrella
  addStyle('love', 'love_strikethrough_italic_umbrella', '☂»»—', '—««☂ 👩🏻‍❤️‍👨🏼', {
    a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
    k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
    u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧",
    A: "A̷̷", B: "B̷̷", C: "C̷̷", D: "D̷̷", E: "E̷̷", F: "F̷̷", G: "G̷̷", H: "H̷̷", I: "I̷̷", J: "J̷̷",
    K: "K̷̷", L: "L̷̷", M: "M̷̷", N: "N̷̷", O: "O̷̷", P: "P̷̷", Q: "Q̷̷", R: "R̷̷", S: "S̷̷", T: "T̷̷",
    U: "U̷̷", V: "V̷̷", W: "W̷̷", X: "X̷̷", Y: "Y̷̷", Z: "Z̷̷"
  });

  // Style 46: Fullwidth Hittite
  addStyle('love', 'love_fullwidth_hittite', '𔘓', '𔘓࿐', {
    a: "ａ", b: "ｂ", c: "ｃ", d: "ｄ", e: "ｅ", f: "ｆ", g: "ｇ", h: "ｈ", i: "ｉ", j: "ｊ",
    k: "ｋ", l: "ｌ", m: "ｍ", n: "ｎ", o: "ｏ", p: "ｐ", q: "ｑ", r: "ｒ", s: "ｓ", t: "ｔ",
    u: "ｕ", v: "ｖ", w: "ｗ", x: "ｘ", y: "ｙ", z: "ｚ",
    A: "Ａ", B: "Ｂ", C: "Ｃ", D: "Ｄ", E: "Ｅ", F: "Ｆ", G: "Ｇ", H: "Ｈ", I: "Ｉ", J: "Ｊ",
    K: "Ｋ", L: "Ｌ", M: "Ｍ", N: "Ｎ", O: "Ｏ", P: "Ｐ", Q: "Ｑ", R: "Ｒ", S: "Ｓ", T: "Ｔ",
    U: "Ｕ", V: "Ｖ", W: "Ｗ", X: "Ｘ", Y: "Ｙ", Z: "Ｚ"
  });

  // Style 47: Butterfly Greek with Thai N
  addStyle('love', 'love_butterfly_greek_thai', '🦋⃟ ', '「•❀•」', {
    a: "ภ", b: "ʙ", c: "ς", d: "ᴅ", e: "є", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
    k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "๏", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
    u: "ย", v: "ᴠ", w: "ฬ", x: "א", y: "ʏ", z: "ᴢ",
    A: "Λ", B: "Β", C: "Ͻ", D: "Ɗ", E: "Ξ", F: "Ƒ", G: "Ɠ", H: "H", I: "Ι", J: "Ј",
    K: "Κ", L: "ᒪ", M: "Μ", N: "Ν", O: "Ø", P: "Ρ", Q: "Ԛ", R: "Я", S: "Ѕ", T: "Τ",
    U: "U", V: "V", W: "Ω", X: "Χ", Y: "Ƴ", Z: "Ζ"
  });

  // Style 48: Double Struck with Flower Star
  addStyle('love', 'love_double_struck_flower_star', '៚', '⋆✿ ‼', {
    a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
    k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
    u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫",
    A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
    K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
    U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ"
  });

  // Style 49: Script with Eye Emoji
  addStyle('love', 'love_script_eye_emoji', '👁️⃝ˣ‿ˣ ', '₊ ⊹˚༒', {
    a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳",
    k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽",
    u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃",
    A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘", J: "𝓙",
    K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣",
    U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩"
  });

  // Style 50: Bold Sans Serif with Coffee
  addStyle('love', 'love_bold_sans_serif_coffee', '𝗣メ', ' ☕︎ˎˊ˗', {
    a: "𝙖", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝙚", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝙞", j: "𝙟",
    k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝙤", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
    u: "𝙪", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝙮", z: "𝙯",
    A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝",
    K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
    U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭"
  });

  // Style 51: Combining Ring with Heart
  addStyle('love', 'love_combining_ring_heart', 'M͢r ❥', ' ✌︎︎𖹭 ࿐', {
    a: "a͢", b: "b͢", c: "c͢", d: "d͢", e: "e͢", f: "f͢", g: "g͢", h: "h͢", i: "i͢", j: "j͢",
    k: "k͢", l: "l͢", m: "m͢", n: "n͢", o: "o͢", p: "p͢", q: "q͢", r: "r͢", s: "s͢", t: "t͢",
    u: "u͢", v: "v͢", w: "w͢", x: "x͢", y: "y͢", z: "z͢",
    A: "A͢", B: "B͢", C: "C͢", D: "D͢", E: "E͢", F: "F͢", G: "G͢", H: "H͢", I: "I͢", J: "J͢",
    K: "K͢", L: "L͢", M: "M͢", N: "N͢", O: "O͢", P: "P͢", Q: "Q͢", R: "R͢", S: "S͢", T: "T͢",
    U: "U͢", V: "V͢", W: "W͢", X: "X͢", Y: "Y͢", Z: "Z͢"
  });

  // Style 52: Bold Fraktur with Check
  addStyle('love', 'love_bold_fraktur_check', '✓ ', ' ── ⋆⋅☆⋅⋆', {
    a: "𝖆", b: "𝖇", c: "𝖈", d: "𝖉", e: "𝖊", f: "𝖋", g: "𝖌", h: "𝖍", i: "𝖎", j: "𝖏",
    k: "𝖐", l: "𝖑", m: "𝖒", n: "𝖓", o: "𝖔", p: "𝖕", q: "𝖖", r: "𝖗", s: "𝖘", t: "𝖙",
    u: "𝖚", v: "𝖛", w: "𝖜", x: "𝖝", y: "𝖞", z: "𝖟",
    A: "𝕬", B: "𝕭", C: "𝕮", D: "𝕯", E: "𝕰", F: "𝕱", G: "𝕲", H: "𝕳", I: "𝕴", J: "𝕵",
    K: "𝕶", L: "𝕷", M: "𝕸", N: "𝕹", O: "𝕺", P: "𝕻", Q: "𝕼", R: "𝕽", S: "𝕾", T: "𝕿",
    U: "𝖀", V: "𝖁", W: "𝖂", X: "𝖃", Y: "𝖄", Z: "𝖅"
  });

  // Style 53: Italic with Asian Symbol
  addStyle('love', 'love_italic_asian', '么 ', ' ⧽── ⋆⋅☆⋅⋆', {
    a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
    k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
    u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧",
    A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
    K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
    U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍"
  });

  // Style 55: Heart Sans Serif Italic
  addStyle('love', 'love_heart_sans_serif_italic', '💖⃟⧉ ', ' ⋆˙𓍊₊꧂', {
    a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
    k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
    u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻",
    A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
    K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
    U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡"
  });

  // Style 57: Circled with Smiley
  addStyle('love', 'love_circled_smiley', '៚', ' ˣ‿ˣ🏷️', {
    a: "ⓐ", b: "ⓑ", c: "ⓒ", d: "ⓓ", e: "ⓔ", f: "ⓕ", g: "ⓖ", h: "ⓗ", i: "ⓘ", j: "ⓙ",
    k: "ⓚ", l: "ⓛ", m: "ⓜ", n: "ⓝ", o: "ⓞ", p: "ⓟ", q: "ⓠ", r: "ⓡ", s: "ⓢ", t: "ⓣ",
    u: "ⓤ", v: "ⓥ", w: "ⓦ", x: "ⓧ", y: "ⓨ", z: "ⓩ",
    A: "Ⓐ", B: "Ⓑ", C: "Ⓒ", D: "Ⓓ", E: "Ⓔ", F: "Ⓕ", G: "Ⓖ", H: "Ⓗ", I: "Ⓘ", J: "Ⓙ",
    K: "Ⓚ", L: "Ⓛ", M: "Ⓜ", N: "Ⓝ", O: "Ⓞ", P: "Ⓟ", Q: "Ⓠ", R: "Ⓡ", S: "Ⓢ", T: "Ⓣ",
    U: "Ⓤ", V: "Ⓥ", W: "Ⓦ", X: "Ⓧ", Y: "Ⓨ", Z: "Ⓩ"
  });

  // Style 58: Bold Italic with Symbol
  addStyle('love', 'love_bold_italic_symbol', '', ' 亗', {
    a: "𝒂", b: "𝒃", c: "𝒄", d: "𝒅", e: "𝒆", f: "𝒇", g: "𝒈", h: "𝒉", i: "𝒊", j: "𝒋",
    k: "𝒌", l: "𝒍", m: "𝒎", n: "𝒏", o: "𝒐", p: "𝒑", q: "𝒒", r: "𝒓", s: "𝒔", t: "𝒕",
    u: "𝒖", v: "𝒗", w: "𝒘", x: "𝒙", y: "𝒚", z: "𝒛",
    A: "𝑨", B: "𝑩", C: "𝑪", D: "𝑫", E: "𝑬", F: "𝑭", G: "𝑮", H: "𝑯", I: "𝑰", J: "𝑱",
    K: "𝑲", L: "𝑳", M: "𝑴", N: "𝑵", O: "𝑶", P: "𝑷", Q: "𝑸", R: "𝑹", S: "𝑺", T: "𝑻",
    U: "𝑼", V: "𝑽", W: "𝑾", X: "𝑿", Y: "𝒀", Z: "𝒁"
  });

  // Style 59: Negative Circled with Emoji
  addStyle('love', 'love_negative_circled_emoji', 'ᑄ ', ' 🙇🏻‍♀️💞', {
    a: "🅐", b: "🅑", c: "🅒", d: "🅓", e: "🅔", f: "🅕", g: "🅖", h: "🅗", i: "🅘", j: "🅙",
    k: "🅚", l: "🅛", m: "🅜", n: "🅝", o: "🅞", p: "🅟", q: "🅠", r: "🅡", s: "🅢", t: "🅣",
    u: "🅤", v: "🅥", w: "🅦", x: "🅧", y: "🅨", z: "🅩",
    A: "🅰", B: "🅱", C: "🅲", D: "🅳", E: "🅴", F: "🅵", G: "🅶", H: "🅷", I: "🅸", J: "🅹",
    K: "🅺", L: "🅻", M: "🅼", N: "🅽", O: "🅾", P: "🅿", Q: "🆀", R: "🆁", S: "🆂", T: "🆃",
    U: "🆄", V: "🆅", W: "🆆", X: "🆇", Y: "🆈", Z: "🆉"
  });

  // Style 60: Strikethrough with Eye Emoji
  addStyle('love', 'love_strikethrough_eye', '👀', '⋆˚🫀', {
    a: "a̷", b: "b̷", c: "c̷", d: "d̷", e: "e̷", f: "f̷", g: "g̷", h: "h̷", i: "i̷", j: "j̷",
    k: "k̷", l: "l̷", m: "m̷", n: "n̷", o: "o̷", p: "p̷", q: "q̷", r: "r̷", s: "s̷", t: "t̷",
    u: "u̷", v: "v̷", w: "w̷", x: "x̷", y: "y̷", z: "z̷",
    A: "A̷̷", B: "B̷̷", C: "C̷̷", D: "D̷̷", E: "E̷̷", F: "F̷̷", G: "G̷̷", H: "H̷̷", I: "I̷̷", J: "J̷̷",
    K: "K̷̷", L: "L̷̷", M: "M̷̷", N: "N̷̷", O: "O̷̷", P: "P̷̷", Q: "Q̷̷", R: "R̷̷", S: "S̷̷", T: "T̷̷",
    U: "U̷̷", V: "V̷̷", W: "W̷̷", X: "X̷̷", Y: "Y̷̷", Z: "Z̷̷"
  });

  // Style 61: Greek Small with Love Text
  addStyle('love', 'love_greek_small_love', 'ℓσνε ♔ ', ' ᭄', {
    a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
    k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
    u: "υ", v: "ν", w: "ω", x: "ẋ", y: "γ", z: "ƶ",
    A: "α", B: "в", C: "c", D: "ɗ", E: "ε", F: "ƒ", G: "ɠ", H: "н", I: "ɪ", J: "נ",
    K: "κ", L: "ℓ", M: "м", N: "η", O: "σ", P: "ρ", Q: "զ", R: "я", S: "ѕ", T: "τ",
    U: "υ", V: "ν", W: "ω", X: "ẋ", Y: "γ", Z: "ƶ"
  });
  
  // Style 23: Double Underline with Star Decoration
  addStyle('love', 'love_double_underline_stars', '✰᭄ ', ' 亗࿐', {
    a: "a͓̽", b: "b͓̽", c: "c͓̽", d: "d͓̽", e: "e͓̽", f: "f͓̽", g: "g͓̽", h: "h͓̽", i: "i͓̽", j: "j͓̽",
    k: "k͓̽", l: "l͓̽", m: "m͓̽", n: "n͓̽", o: "o͓̽", p: "p͓̽", q: "q͓̽", r: "r͓̽", s: "s͓̽", t: "t͓̽",
    u: "u͓̽", v: "v͓̽", w: "w͓̽", x: "x͓̽", y: "y͓̽", z: "z͓̽",
    A: "A͓̽", B: "B͓̽", C: "C͓̽", D: "D͓̽", E: "E͓̽", F: "F͓̽", G: "G͓̽", H: "H͓̽", I: "I͓̽", J: "J͓̽",
    K: "K͓̽", L: "L͓̽", M: "M͓̽", N: "N͓̽", O: "O͓̽", P: "P͓̽", Q: "Q͓̽", R: "R͓̽", S: "S͓̽", T: "T͓̽",
    U: "U͓̽", V: "V͓̽", W: "W͓̽", X: "X͓̽", Y: "Y͓̽", Z: "Z͓̽"
  });

  // Style 25: Monospace with Arrow Decoration
  addStyle('love', 'love_monospace_arrow', '➬ ', ' ✰࿐', {
    a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
    k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
    u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣",
    A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
    K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
    U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉"
  });

  // Style 49: Double Overline with Star Decoration
  addStyle('love', 'love_double_overline_emoji', '—͟͞͞✰ ', ' ⋆˙⟡😫', {
    a: "a̾", b: "b̾", c: "c̾", d: "d̾", e: "e̾", f: "f̾", g: "g̾", h: "h̾", i: "i̾", j: "j̾",
    k: "k̾", l: "l̾", m: "m̾", n: "n̾", o: "o̾", p: "p̾", q: "q̾", r: "r̾", s: "s̾", t: "t̾",
    u: "u̾", v: "v̾", w: "w̾", x: "x̾", y: "y̾", z: "z̾",
    A: "A̾", B: "B̾", C: "C̾", D: "D̾", E: "E̾", F: "F̾", G: "G̾", H: "H̾", I: "I̾", J: "J̾",
    K: "K̾", L: "L̾", M: "M̾", N: "N̾", O: "O̾", P: "P̾", Q: "Q̾", R: "R̾", S: "S̾", T: "T̾",
    U: "U̾", V: "V̾", W: "W̾", X: "X̾", Y: "Y̾", Z: "Z̾"
  });

  // Style 69: Special Unicode with Heart Decoration
  addStyle('love', 'love_special_unicode_hearts', '⋆˙⟡ ', ' ⋆˙⟡ 🥰', {
    a: "ᥲ", b: "ᑲ", c: "ᥴ", d: "ᑯ", e: "ᥱ", f: "ƒ", g: "ɠ", h: "ᕼ", i: "Ꭵ", j: "נ",
    k: "κ", l: "ℓ", m: "ᴍ", n: "ᥒ", o: "᥆", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
    u: "υ", v: "ν", w: "᭙", x: "᥊", y: "ᥒ", z: "ɀ",
    A: "ᥲ", B: "ᑲ", C: "ᥴ", D: "ᑯ", E: "ᥱ", F: "ƒ", G: "ɠ", H: "ᕼ", I: "Ꭵ", J: "נ",
    K: "κ", L: "ℓ", M: "ᴍ", N: "ᥒ", O: "᥆", P: "ρ", Q: "զ", R: "я", S: "ѕ", T: "τ",
    U: "υ", V: "ν", W: "᭙", X: "᥊", Y: "ᥒ", Z: "ɀ"
  });

  // Style 32: Extended Unicode with Emoji Frame
  addStyle('love', 'love_extended_unicode_emoji', 'ẋẊ🤗', '🫣Ẋẋ', {
    a: "ⱥ", b: "ᵬ", c: "ȼ", d: "ᶑ", e: "ɇ", f: "ᶂ", g: "ᶃ", h: "ħ", i: "ᶖ", j: "ʝ",
    k: "ƙ", l: "ḽ", m: "ɱ", n: "ᶇ", o: "ø", p: "ᵽ", q: "ɋ", r: "ᶉ", s: "ʂ", t: "ȶ",
    u: "ʋ", v: "ᶌ", w: "ẅ", x: "ẋ", y: "ᶌ", z: "ʑ",
    A: "Ɐ", B: "ᴃ", C: "Ƈ", D: "ᴅ", E: "Ɇ", F: "ᶂ", G: "Ɠ", H: "Ħ", I: "ᶤ", J: "ᴊ",
    K: "ƙ", L: "ᶅ", M: "ᴍ", N: "Ƞ", O: "Ø", P: "ᴘ", Q: "Ɋ", R: "ʀ", S: "Ѕ", T: "Ŧ",
    U: "Ữ", V: "Ṽ", W: "Ẅ", X: "Ẋ", Y: "Ỵ", Z: "Ƶ"
  });  
  
}); // ← BILKUL LAST LINE
