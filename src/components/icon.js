import * as React from 'react'
import CheckFill from '../icons/checkFilled'
import CheckOut from '../icons/checkOutline'
import ErrorFill from '../icons/errorFilled'
import ErrorOut from '../icons/errorOutline'
import InfoOut from '../icons/infoWarningOutline'
import InfoFill from '../icons/infoWarningFilled'

const CheckFilled = () => {
  return <span
    role='img'
    aria-label='check-filled'
  >
    <CheckFill />
  </span>
}

const CheckOutline = () => {
  return <span role='img' aria-label='check-outline' >
    <CheckOut />
  </span>
}

const ErrorFilled = () => {
  return <span
    role='img'
    aria-label='error-filled'
  >
    <ErrorFill />
  </span>
}

const ErrorOutline = () => {
  return <span
    role='img'
    aria-label='error-outline'
  >
    <ErrorOut />
  </span>
}

const InfoFilled = () => {
  return <span
    role='img'
    aria-label='info-filled'
  >
    <InfoFill />
  </span>
}

const InfoOutline = () => {
  return <span
    role='img'
    aria-label='info-outline'
  >
    <InfoOut />
  </span>
}

const WarningFilled = () => {
  return <span
    role='img'
    aria-label='warning-filled'
  >
    <InfoFill />
  </span>
}

const WarningOutline = () => {
  return <span
    role='img'
    aria-label='warning-outline'
  >
    <InfoOut />
  </span>
}

export {
  CheckFilled,
  CheckOutline,
  ErrorFilled,
  ErrorOutline,
  InfoFilled,
  InfoOutline,
  WarningFilled,
  WarningOutline
}
