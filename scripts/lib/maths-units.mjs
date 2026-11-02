// Hides: which units hold maths and which draw figures, told by their content folders alone
// (content/topics/ and content/figures/), so the generators and their tests name no unit.
import { existsSync, readdirSync } from 'node:fs'
import path from 'node:path'

const UNITS = path.resolve(import.meta.dirname, '..', '..', 'src', 'units')

/** @param {string} folder */
const unitsWith = folder =>
  readdirSync(UNITS)
    .filter(u => existsSync(path.join(UNITS, u, 'content', folder)))
    .sort()

/** The units whose content has topics, each set as maths. */
export const mathsUnits = () => unitsWith('topics')

/** The units whose content draws figures. */
export const figureUnits = () => unitsWith('figures')
