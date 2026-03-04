// ==================================================
// FILE: /styles/badge.ts
// ==================================================
import { colors } from './design-tokens'


export const badgeBaseStyle = {
borderRadius: '999px',
padding: '4px 10px',
fontSize: '12px',
lineHeight: '1',
display: 'inline-flex',
alignItems: 'center',
gap: '4px',
}


export const badgeVariants = {
programType: {
monthly: colors.programType.monthly,
foundation: colors.programType.foundation,
customPrivate: colors.programType.customPrivate,
},
audience: {
kids: colors.audience.kids,
junior: colors.audience.junior,
teen: colors.audience.teen,
adult: colors.audience.adult,
},
}