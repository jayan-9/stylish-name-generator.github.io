// ============================================================
//  DATA.JS – All style patterns and examples
//  Add new styles here, they will be available automatically.
// ============================================================

// ----- STYLES FOR GENERATION (used when you click Generate) -----
const STYLE_PATTERNS = {
    love: [
        "•✿• {name} •✿•",
        "✿• {name} •༉࿐",
        "𝐴𝑙𝑜𝑛𝑒💞{name}",
        "ᥫ᭡ ۵۵۵۵ {name} °｡⋆😭",
        "𖧷࿐ {name}⊹ ࣪𖧷",
        "𝐵𝑟𝑜𝑘𝑒💔{name}",
        "𖣿 {name}⊹ ࣪ ˖༉",
        "✿ {name} ⋆˚࿐",
        "🦋⃟{name}✿˖⁺‧₊˚࿐",
        "໒꒰ྀིᵔ ᵕ ᵔ꒱ྀི১ {name} 𓆩🩵𓆪",
        "༊*·˚{name} 𖦹᭄𓆪",
        "༄🫀⃟{name} °⋆༈༉",
        "✧˖°📛{name}°˖✧",
        "⋆˚🐚{name}˚⋆",
        "𓆩♡𓆪{name}𓆩♡𓆪",
        "໒꒰ྀིᵔ⤙ᵔ꒱ྀི১{name}",
        "✶𖦹{name}𖦹✶",
        "୧⋆｡°✩{name}✩°｡⋆୨",
        "𖤐{name}𖤐",
        "⊹˚. {name} .˚⊹",
        "༺♥༻{name}༺♥༻",
        "✿.｡.:{name}:.｡.✿",
        "░▒▓█ {name} █▓▒░",
        "˗ˏˋ{name}ˎˊ˗",
        "☾𖤓{name}☽",
        "🕸️🕷️{name}🕷️🕸️",
        "ᯓ★{name}★ᯓ",
        "🩸{name}🩸",
        "ཐི⋆♱⋆ཋྀ{name}ཐི⋆♱⋆ཋྀ",
        "✧══ {name} ══✧"
    ],
    gamer: [
        "𝑍𝑥_{name} ࿐",
        "77__{name} ♡༉",
        ".....{name}",
        "ིྀ {name} ིྀ⊹ ࣪ ˖",
        "༄༉{name} ....❀",
        "֟✿{name}༉",
        "𝑍𝑦_{name} ࿐",
        "𝑋𝑧_{name} ࿐",
        "99__{name} ♡༉",
        "00__{name} ♡༉",
        "42__{name} ♡༉",
        ".......{name}",
        "......{name}....",
        "ིྀ {name} ིྀ⊹ ࣪ ˖",
        "ིྀ {name} ིྀ⊹ ࣪ ˖",
        "ིྀ {name} ིྀ⊹ ࣪ ˖",
        "༄༉{name} ....🌸",
        "༄༉{name} ....🌙",
        "֟✿{name}༉˚✧",
        "֟✿{name}༉ꨄ",
        "_𝑧𝑥_{name} ࿐",
        "__{name}__ ࿐",
        "77__{name} ♡༉",
        "....{name}....",
        "Zx_{name}_࿐",
        "𓆩🖤𓆪{name}𓆩🖤𓆪"
    ],
    fancy: [
        "✧══ {name} ══✧",
        "˚✧₊⁎ {name} ⁎⁺˳✧༚",
        "✦•····•{name}•····•✦",
        "🖤༄{name}༄🖤",
        "ᶻ𝗓𐰁 .𖥔 ๋{name}๋ 𖥔.𐰁𝗓ᶻ",
        "╰┈➤{name}",
        "🎧♡₊{name}₊♡🎧",
        "✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧ {name}",
        "⌗⌗⌗ {name} ⌫⌫⌫",
        "°•. {name} .•°",
        "✶⊶⊷⊶⊷✶ {name} ✶⊶⊷⊶⊷✶",
        "🧸ྀི {name} ྀི🧸",
        "╭─┈┈🥀┈╮ {name} ╰┈╯",
        "˚ ༘ ೀ⋆｡˚ {name}",
        "✫ ˚₊· ͟͟͞͞➳ {name}",
        "🜲 {name} 🜲𖧷",
        "༺♥༻{name}༺♥༻",
        "✿.｡.:{name}:.｡.✿",
        "░▒▓█ {name} █▓▒░",
        "˗ˏˋ{name}ˎˊ˗",
        "☾𖤓{name}☽",
        "🕸️🕷️{name}🕷️🕸️",
        "ᯓ★{name}★ᯓ",
        "🩸{name}🩸",
        "ཐི⋆♱⋆ཋྀ{name}ཐི⋆♱⋆ཋྀ"
    ],
    font: [
        "𝔹𝕠𝕝𝕕 𝕊𝕥𝕪𝕝𝕖 – {name}",
        "𝒮𝒸𝓇𝒾𝓅𝓉 – {name}",
        "𝕊𝕢𝕦𝕒𝕣𝕖 – {name}",
        "𝔉𝔯𝔞𝔨𝔱𝔲𝔯 – {name}",
        "𝒞𝓊𝓇𝓈𝒾𝓋ℯ – {name}",
        "𝕄𝕠𝕟𝕠 – {name}",
        "𝓓𝓸𝓾𝓫𝓵𝓮 – {name}",
        "𝘚𝘢𝘯𝘴 – {name}",
        "𝘽𝙤𝙡𝙙 𝙄𝙩𝙖𝙡𝙞𝙘 – {name}",
        "𝚃𝚢𝚙𝚎𝚠𝚛𝚒𝚝𝚎𝚛 – {name}",
        "𝕿𝖍𝖊 𝕲𝖔𝖙𝖍𝖎𝖈 – {name}",
        "𝒜𝓇𝓉 𝒟ℯ𝒸ℴ – {name}",
        "𝕊𝕥𝕖𝕟𝕔𝕚𝕝 – {name}",
        "𝔇𝔢𝔠𝔬𝔯𝔞𝔱𝔦𝔳𝔢 – {name}",
        "🅵🅻🅸🅿 – {name}",
        "ᑎIᑕᕮ TᕼIᑕᑕ – {name}",
        "ₛᵤₚₑᵣₛcᵣᵢₚₜ – {name}",
        "Sᴛʀɪᴋᴇᴛʜʀᴏᴜɢʜ – {name}",
        "🅝🅐🅜🅔 – {name}",
        "ꜱᴍᴀʟʟ ᴄᴀᴘꜱ – {name}"
    ]
};

// ----- EXAMPLE STYLES (shown in the horizontal scroll preview) -----
// These are same as patterns but you can customize separately.
// We'll reuse the same data for simplicity, but you can override.
const EXAMPLE_DATA = {
    love: STYLE_PATTERNS.love.slice(0, 20), // first 20
    gamer: STYLE_PATTERNS.gamer.slice(0, 20),
    fancy: STYLE_PATTERNS.fancy.slice(0, 20),
    font: STYLE_PATTERNS.font.slice(0, 20)
};

// ----- CATEGORY NAMES & ICONS (if needed) -----
const CATEGORY_INFO = {
    love: { label: 'Love', icon: 'fa-heart' },
    gamer: { label: 'Gamer', icon: 'fa-gamepad' },
    fancy: { label: 'Fancy', icon: 'fa-sparkles' },
    font: { label: 'Font', icon: 'fa-font' }
};

// Expose globally
window.STYLE_PATTERNS = STYLE_PATTERNS;
window.EXAMPLE_DATA = EXAMPLE_DATA;
window.CATEGORY_INFO = CATEGORY_INFO;
