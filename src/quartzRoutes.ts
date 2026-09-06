// Canonical routes verified against Quartz's authored homepage, emitted sitemap,
// and live pages. Keep the existing Quartz origin and lowercase generated paths.
const quartzOrigin = 'https://oncologykarpathywiki.cn'

export const quartzRoutes = {
  home: `${quartzOrigin}/`,
  literature: `${quartzOrigin}/文献汇总`,
  scienceNotes: `${quartzOrigin}/优质公众号内容`,
  labSkills: `${quartzOrigin}/04-experimental-skills/readme`,
  knowledgeBase: `${quartzOrigin}/06-wiki/`,
} as const
