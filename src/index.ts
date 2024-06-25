// Components
import CustomButton from './components/Button'
import CustomGrid from './components/Grid'
import StyledComponent from './components/StyledComponent'
import Typography from './components/Typography'
import ConfirmationCodeInput from './components/ConfirmationCodeInput'
// Actions
import {
  cleanupReusableStore,
  setReusableStore,
  updateReusableStore,
  deleteReusableStore,
  subscribeToStoreEvents,
} from './actions/server/form/store/reusableStore'
import getFormData from './actions/server/form/getFormData'
// Colors
import {
  moss,
  aqua,
  madder,
  woad,
  marine,
  pansy,
  stainlessSteel,
  coal,
  ocean,
  sky,
  salmon,
  lightning,
  sage,
  lilac,
  gunpowder,
  lightMadder,
  black,
  white,
  none,
  semiTransparentWhite,
  semiTransparentBlack,
  red,
  green,
  greyborder,
} from './styles/palette'
// Typography
import {
  arapeyh1,
  arapeyh2,
  arapeyh3,
  arapeyh4,
  arapeyh5,
  arapeyh6,
  arapeyparagraph,
  interh1,
  interh2,
  interh3,
  interh4,
  interh5,
  interh6,
  interparagraph,
  interhelperheader,
  interhelperfooter,
  merrih1,
  merrih2,
  merrih3,
  merrih4,
  merrih5,
  merrih6,
  merriparagraph,
  merrihelperfooter,
} from './styles/typography'

// Named exports
export { CustomButton }
export { CustomGrid }
export { StyledComponent }
export { Typography }
export { ConfirmationCodeInput }
export {
  cleanupReusableStore,
  setReusableStore,
  updateReusableStore,
  deleteReusableStore,
  subscribeToStoreEvents,
}
export { getFormData }

// Type exports
export type { CustomButtonProps } from './components/Button'
export type {
  CustomGridProps,
  columnconfig,
  gridconfig,
  cellconfig,
} from './components/Grid'
export type {
  StyledComponentProps,
  AdornmentProps,
} from './components/StyledComponent'
export type { TypographyProps } from './components/Typography'
export type { ConfirmationCodeInputsProps } from './components/ConfirmationCodeInput'

export {
  moss,
  aqua,
  madder,
  woad,
  marine,
  pansy,
  stainlessSteel,
  coal,
  ocean,
  sky,
  salmon,
  lightning,
  sage,
  lilac,
  gunpowder,
  lightMadder,
  black,
  white,
  none,
  semiTransparentWhite,
  semiTransparentBlack,
  red,
  green,
  greyborder,
  arapeyh1,
  arapeyh2,
  arapeyh3,
  arapeyh4,
  arapeyh5,
  arapeyh6,
  arapeyparagraph,
  interh1,
  interh2,
  interh3,
  interh4,
  interh5,
  interh6,
  interparagraph,
  interhelperheader,
  interhelperfooter,
  merrih1,
  merrih2,
  merrih3,
  merrih4,
  merrih5,
  merrih6,
  merriparagraph,
  merrihelperfooter,
}
