'use client'

import React from 'react'
import Grid2, { Grid2Props } from '@mui/material/Grid2'
import { useMediaQuery } from '@mui/material'

type Alignment = 'left' | 'center' | 'right' | 'inherit' | 'justify'
type BorderProp = 'none' | 'solid'
type WrapProp = 'nowrap' | 'wrap'
type Breakpoint = 'xs' | 'sm' | 'md' | 'ms' | 'ml' | 'lg' | 'xl'

interface ResponsiveObject<T> {
  xs?: T
  sm?: T
  md?: T
  ms?: T
  ml?: T
  lg?: T
  xl?: T
}

type ResponsiveValue<T> = T | ResponsiveObject<T>

export interface cellconfig {
  border?: BorderProp
  minHeight?: string
  maxHeight?: string
  width?: string
  mobilewidth?: string
  tabletwidth?: string
  computerwidth?: string
  borderColor?: string
  backgroundColor?: string
  onClick?: () => void
  wrap?: WrapProp
}

export interface columnconfig {
  row: number
  column: number
  gridname?: string
  alignment?: Alignment
  margintop?: ResponsiveValue<number>
  marginbottom?: ResponsiveValue<number>
  marginright?: ResponsiveValue<number>
  marginleft?: ResponsiveValue<number>
  paddingtop?: ResponsiveValue<number>
  paddingbottom?: ResponsiveValue<number>
  paddingright?: ResponsiveValue<number>
  paddingleft?: ResponsiveValue<number>
  columnwidth?: string
  component?: React.ReactNode
  bordercolor?: string
  cellconfig?: cellconfig
  mobilewidth?: string
  tabletwidth?: string
  computerwidth?: string
}

export interface gridconfig {
  gridname?: string
  alignment?: Alignment
  margintop?: ResponsiveValue<number>
  marginbottom?: ResponsiveValue<number>
  marginright?: ResponsiveValue<number>
  marginleft?: ResponsiveValue<number>
  paddingtop?: ResponsiveValue<number>
  paddingbottom?: ResponsiveValue<number>
  paddingright?: ResponsiveValue<number>
  paddingleft?: ResponsiveValue<number>
  gridwidth?: string
  bordercolor?: string
  defaultColumnWidth?: string
}

export interface CustomGridProps extends Omit<Grid2Props, 'children'> {
  gridconfig?: gridconfig | gridconfig[]
  columnconfig?: columnconfig[]
  cellconfig?: cellconfig
}

/** Checks if `value` is a responsive object vs. a plain value */
function isResponsiveObject<T>(
  value: ResponsiveValue<T> | undefined
): value is ResponsiveObject<T> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

/** Returns the value for the current breakpoint, if present */
function getResponsiveValue<T>(
  value: ResponsiveValue<T> | undefined,
  breakpoint: Breakpoint
): T | undefined {
  if (value === undefined) return undefined
  if (isResponsiveObject(value)) {
    return value[breakpoint]
  }
  return value
}

function CustomGrid({
  gridconfig,
  columnconfig,
  cellconfig,
  ...rest
}: CustomGridProps) {
  // Manually define media queries for breakpoints
  const isMobile = useMediaQuery('(max-width:600px)') // xs
  const isSmallTablet = useMediaQuery('(min-width:601px) and (max-width:900px)') // sm
  const isMediumSmall = useMediaQuery('(min-width:901px) and (max-width:960px)') // md
  const isMediumLarge = useMediaQuery(
    '(min-width:961px) and (max-width:1024px)'
  ) // ms
  const isLarge = useMediaQuery('(min-width:1025px) and (max-width:1170px)') // ml
  const isExtraLarge = useMediaQuery('(min-width:1537px)') // xl

  // Determine the current breakpoint
  const currentBreakpoint = React.useMemo<Breakpoint>(() => {
    if (isMobile) return 'xs'
    if (isSmallTablet) return 'sm'
    if (isMediumSmall) return 'md'
    if (isMediumLarge) return 'ms'
    if (isLarge) return 'ml'
    if (isExtraLarge) return 'xl'
    return 'lg'
  }, [
    isMobile,
    isSmallTablet,
    isMediumSmall,
    isMediumLarge,
    isLarge,
    isExtraLarge,
  ])

  // Convert gridconfig to a single object
  const singleGridConfig: gridconfig | undefined = Array.isArray(gridconfig)
    ? gridconfig[0]
    : gridconfig

  // Extract any grid-level config (like defaultColumnWidth)
  const {
    defaultColumnWidth = '150px',
    alignment,
    margintop,
    marginbottom,
    marginleft,
    marginright,
    paddingtop,
    paddingbottom,
    paddingleft,
    paddingright,
    gridwidth,
  } = singleGridConfig || {}

  // Decide alignment for the entire grid container
  const gridJustifyContent =
    alignment === 'left'
      ? 'flex-start'
      : alignment === 'right'
        ? 'flex-end'
        : 'center'

  // Resolve grid-level margin/padding (responsive)
  const gridMarginTop = getResponsiveValue(margintop, currentBreakpoint)
  const gridMarginBottom = getResponsiveValue(marginbottom, currentBreakpoint)
  const gridMarginLeft = getResponsiveValue(marginleft, currentBreakpoint)
  const gridMarginRight = getResponsiveValue(marginright, currentBreakpoint)

  const gridPaddingTop = getResponsiveValue(paddingtop, currentBreakpoint)
  const gridPaddingBottom = getResponsiveValue(paddingbottom, currentBreakpoint)
  const gridPaddingLeft = getResponsiveValue(paddingleft, currentBreakpoint)
  const gridPaddingRight = getResponsiveValue(paddingright, currentBreakpoint)

  // Number of rows = highest row index in columnconfig
  const rows = Math.max(...(columnconfig || []).map(c => c.row || 1), 1)

  return (
    <Grid2
      container
      width={gridwidth || '100%'}
      display="flex"
      flexDirection="column"
      justifyContent={gridJustifyContent}
      minWidth="300px"
      sx={{
        padding: 0,
        margin: 0,
        gap: 0,
        marginTop: gridMarginTop ? `${gridMarginTop * 8}px` : 0,
        marginBottom: gridMarginBottom ? `${gridMarginBottom * 8}px` : 0,
        marginLeft: gridMarginLeft ? `${gridMarginLeft * 8}px` : 0,
        marginRight: gridMarginRight ? `${gridMarginRight * 8}px` : 0,
        paddingTop: gridPaddingTop ? `${gridPaddingTop * 8}px` : 0,
        paddingBottom: gridPaddingBottom ? `${gridPaddingBottom * 8}px` : 0,
        paddingLeft: gridPaddingLeft ? `${gridPaddingLeft * 8}px` : 0,
        paddingRight: gridPaddingRight ? `${gridPaddingRight * 8}px` : 0,
        '& > *:not(.grid-column)': {
          border: 'none !important',
          padding: 0,
          margin: 0,
        },
      }}
      {...rest}
    >
      {Array.from({ length: rows }).map((_, rowIndex) => {
        // For each row
        const columnsInRow = (columnconfig || []).filter(
          c => c.row === rowIndex + 1
        )
        const maxColumns = Math.max(...columnsInRow.map(c => c.column || 1), 1)

        return (
          <Grid2
            key={`row-${rowIndex}`}
            container
            alignItems="center"
            display="flex"
            justifyContent="flex-start"
            spacing={0}
            sx={{
              width: '100%',
              gap: 0,
              padding: 0,
              margin: 0,
              height: 'fit-content',
              minHeight: 'min-content',
              border: 'none',
              '& > *': {
                border: 'none !important',
                padding: 0,
              },
            }}
          >
            {Array.from({ length: maxColumns }).map((_, columnIndex) => {
              // Identify the config for this specific cell
              const currentColumnConfig = (columnconfig || []).find(
                c => c.row === rowIndex + 1 && c.column === columnIndex + 1
              )
              // typed `cellconfig | undefined`
              const currentCellConfig =
                currentColumnConfig?.cellconfig || cellconfig

              const hasFixedWidth = Boolean(currentCellConfig?.width)

              // Figure out final column width based on breakpoints & fallback
              let computedWidth = ''
              if (currentCellConfig?.width) {
                computedWidth = currentCellConfig.width
              } else if (isMobile) {
                computedWidth =
                  currentColumnConfig?.mobilewidth ||
                  currentColumnConfig?.columnwidth ||
                  defaultColumnWidth
              } else if (isSmallTablet) {
                computedWidth =
                  currentColumnConfig?.tabletwidth ||
                  currentColumnConfig?.columnwidth ||
                  defaultColumnWidth
              } else if (isMediumSmall) {
                computedWidth =
                  currentColumnConfig?.computerwidth ||
                  currentColumnConfig?.columnwidth ||
                  defaultColumnWidth
              } else if (isMediumLarge) {
                computedWidth =
                  currentColumnConfig?.computerwidth ||
                  currentColumnConfig?.columnwidth ||
                  defaultColumnWidth
              } else if (isLarge) {
                computedWidth =
                  currentColumnConfig?.computerwidth ||
                  currentColumnConfig?.columnwidth ||
                  defaultColumnWidth
              } else if (isExtraLarge) {
                computedWidth =
                  currentColumnConfig?.computerwidth ||
                  currentColumnConfig?.columnwidth ||
                  defaultColumnWidth
              } else {
                computedWidth =
                  currentColumnConfig?.computerwidth ||
                  currentColumnConfig?.columnwidth ||
                  defaultColumnWidth
              }

              // Alignment
              const justifyContent =
                currentColumnConfig?.alignment === 'left'
                  ? 'flex-start'
                  : currentColumnConfig?.alignment === 'right'
                    ? 'flex-end'
                    : 'center'

              // Resolve responsive margin/padding for this cell
              const marginTopVal = getResponsiveValue(
                currentColumnConfig?.margintop,
                currentBreakpoint
              )
              const marginBottomVal = getResponsiveValue(
                currentColumnConfig?.marginbottom,
                currentBreakpoint
              )
              const marginLeftVal = getResponsiveValue(
                currentColumnConfig?.marginleft,
                currentBreakpoint
              )
              const marginRightVal = getResponsiveValue(
                currentColumnConfig?.marginright,
                currentBreakpoint
              )

              const paddingTopVal = getResponsiveValue(
                currentColumnConfig?.paddingtop,
                currentBreakpoint
              )
              const paddingBottomVal = getResponsiveValue(
                currentColumnConfig?.paddingbottom,
                currentBreakpoint
              )
              const paddingLeftVal = getResponsiveValue(
                currentColumnConfig?.paddingleft,
                currentBreakpoint
              )
              const paddingRightVal = getResponsiveValue(
                currentColumnConfig?.paddingright,
                currentBreakpoint
              )

              // Decide wrapping
              const shouldWrap = currentCellConfig?.wrap !== 'nowrap'

              return (
                <Grid2
                  key={`column-${columnIndex}`}
                  className="grid-column"
                  sx={{
                    display: 'flex',
                    justifyContent,
                    alignItems: 'center',
                    width: computedWidth,
                    position: 'relative',

                    flexGrow: hasFixedWidth ? 0 : 1,
                    flexShrink: hasFixedWidth ? 0 : 1,
                    flexBasis: hasFixedWidth ? computedWidth : 'auto',

                    height: 'fit-content',

                    // margins
                    marginLeft: marginLeftVal
                      ? `${marginLeftVal * 8}px !important`
                      : '0 !important',
                    marginRight: marginRightVal
                      ? `${marginRightVal * 8}px !important`
                      : '0 !important',
                    marginTop: marginTopVal
                      ? `${marginTopVal * 8}px !important`
                      : '0 !important',
                    marginBottom: marginBottomVal
                      ? `${marginBottomVal * 8}px !important`
                      : '0 !important',

                    // paddings
                    paddingLeft: paddingLeftVal
                      ? `${paddingLeftVal * 8}px !important`
                      : '0 !important',
                    paddingRight: paddingRightVal
                      ? `${paddingRightVal * 8}px !important`
                      : '0 !important',
                    paddingTop: paddingTopVal
                      ? `${paddingTopVal * 8}px !important`
                      : '0 !important',
                    paddingBottom: paddingBottomVal
                      ? `${paddingBottomVal * 8}px !important`
                      : '0 !important',

                    border: 'none',
                    backgroundColor: currentCellConfig?.backgroundColor,
                    minHeight: 'min-content',
                    overflow: 'hidden',
                    whiteSpace: shouldWrap ? 'normal' : 'nowrap',
                    textOverflow: shouldWrap ? 'clip' : 'ellipsis',
                    '& > *': {
                      border: 'none !important',
                      padding: 0,
                      margin: 0,
                    },
                  }}
                  onClick={currentCellConfig?.onClick}
                >
                  {currentColumnConfig?.component}
                </Grid2>
              )
            })}
          </Grid2>
        )
      })}
    </Grid2>
  )
}

CustomGrid.displayName = 'CustomGrid'

export default CustomGrid
