'use strict'
;(self.webpackChunkgoobs_frontend = self.webpackChunkgoobs_frontend || []).push(
  [
    [1793],
    {
      './src/components/DataGrid/datagrid.stories.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: () => Basic,
            Empty: () => Empty,
            FullFeatures: () => FullFeatures,
            PaginationAndLargeData: () => PaginationAndLargeData,
            RowSelectionManage: () => RowSelectionManage,
            WithError: () => WithError,
            WithToolbar: () => WithToolbar,
            __namedExportsOrder: () => __namedExportsOrder,
            default: () => datagrid_stories,
          })
        var jsx_runtime = __webpack_require__(
            './node_modules/next/dist/compiled/react/jsx-runtime.js'
          ),
          react = __webpack_require__(
            './node_modules/next/dist/compiled/react/index.js'
          ),
          dist = __webpack_require__(
            './node_modules/@storybook/test/dist/index.mjs'
          ),
          Box = __webpack_require__('./node_modules/@mui/material/Box/Box.js'),
          Alert = __webpack_require__(
            './node_modules/@mui/material/Alert/Alert.js'
          ),
          Toolbar = __webpack_require__('./src/components/Toolbar/index.tsx'),
          useMediaQuery = __webpack_require__(
            './node_modules/@mui/material/useMediaQuery/index.js'
          ),
          TableContainer = __webpack_require__(
            './node_modules/@mui/material/TableContainer/TableContainer.js'
          ),
          Table = __webpack_require__(
            './node_modules/@mui/material/Table/Table.js'
          ),
          TableHead = __webpack_require__(
            './node_modules/@mui/material/TableHead/TableHead.js'
          ),
          esm_react = __webpack_require__('./node_modules/jotai/esm/react.mjs'),
          vanilla = __webpack_require__('./node_modules/jotai/esm/vanilla.mjs'),
          utils = __webpack_require__(
            './node_modules/jotai/esm/vanilla/utils.mjs'
          ),
          console = __webpack_require__(
            './node_modules/console-browserify/index.js'
          )
        const columnVisibilityAtom = (0, utils.tG)('columnVisibility', {}),
          columnsAtom = (0, vanilla.eU)([]),
          columnVisibilityActions = (0, vanilla.eU)(
            null,
            (get, set, update) => {
              const currentVisibility = get(columnVisibilityAtom),
                columns = get(columnsAtom)
              let newVisibility = {}
              switch (
                (console.log('columnVisibilityActions - before:', {
                  type: update.type,
                  currentVisibility,
                }),
                update.type)
              ) {
                case 'toggle':
                  update.field &&
                    ((newVisibility = {
                      ...currentVisibility,
                      [update.field]: !currentVisibility[update.field],
                    }),
                    console.log('columnVisibilityActions - toggle:', {
                      field: update.field,
                      before: currentVisibility[update.field],
                      after: newVisibility[update.field],
                    }),
                    set(columnVisibilityAtom, newVisibility))
                  break
                case 'setAll':
                  columns.forEach(column => {
                    newVisibility[column] = !!update.value
                  }),
                    console.log('columnVisibilityActions - setAll:', {
                      value: update.value,
                      newState: newVisibility,
                    }),
                    set(columnVisibilityAtom, newVisibility)
                  break
                case 'save':
                  update.newState &&
                    (console.log('columnVisibilityActions - save:', {
                      before: currentVisibility,
                      after: update.newState,
                    }),
                    set(columnVisibilityAtom, update.newState))
                  break
                case 'reset':
                  columns.forEach(column => {
                    newVisibility[column] = !0
                  }),
                    console.log(
                      'columnVisibilityActions - reset:',
                      newVisibility
                    ),
                    set(columnVisibilityAtom, newVisibility)
              }
              console.log(
                'columnVisibilityActions - after:',
                get(columnVisibilityAtom)
              )
            }
          )
        function arraysAreEqual(a, b) {
          if (a.length !== b.length) return !1
          for (let i = 0; i < a.length; i++)
            if (a[i].field !== b[i].field) return !1
          return !0
        }
        var TableRow = __webpack_require__(
            './node_modules/@mui/material/TableRow/TableRow.js'
          ),
          TableCell = __webpack_require__(
            './node_modules/@mui/material/TableCell/TableCell.js'
          ),
          Checkbox = __webpack_require__(
            './node_modules/@mui/material/Checkbox/Checkbox.js'
          ),
          palette = __webpack_require__('./src/styles/palette.ts'),
          SearchableDropdown = __webpack_require__(
            './src/components/SearchableDropdown/index.tsx'
          )
        const ColumnHeaderRow = ({
            isMobile,
            allRowsSelected,
            someRowsSelected,
            handleHeaderCheckboxChange,
            finalDesktopColumns,
            overflowDesktopColumns,
            allColumns,
            selectedOverflowField,
            setSelectedOverflowField,
          }) => {
            if (isMobile) {
              const mobileOptions = allColumns.map(col => {
                  var _col_headerName
                  return {
                    value: col.field,
                    label:
                      null !== (_col_headerName = col.headerName) &&
                      void 0 !== _col_headerName
                        ? _col_headerName
                        : col.field,
                  }
                }),
                currentMobileChoice =
                  mobileOptions.find(
                    opt => opt.value === selectedOverflowField
                  ) || null,
                handleMobileChange = value => {
                  setSelectedOverflowField(
                    (null == value ? void 0 : value.value) || ''
                  )
                }
              return (0, jsx_runtime.jsxs)(TableRow.A, {
                sx: {
                  overflow: 'visible',
                  '& th.MuiTableCell-head': {
                    lineHeight: '45px !important',
                    padding: '0px 5px 5px !important',
                    verticalAlign: 'bottom',
                  },
                },
                children: [
                  (0, jsx_runtime.jsx)(TableCell.A, {
                    padding: 'checkbox',
                    children: (0, jsx_runtime.jsx)(Checkbox.A, {
                      checked: allRowsSelected,
                      indeterminate: !allRowsSelected && someRowsSelected,
                      onChange: handleHeaderCheckboxChange,
                    }),
                  }),
                  (0, jsx_runtime.jsx)(TableCell.A, {
                    sx: {
                      width: 275,
                      boxSizing: 'border-box',
                      overflow: 'visible',
                      position: 'relative',
                      zIndex: 10,
                      paddingLeft: 0,
                    },
                    children: (0, jsx_runtime.jsx)(SearchableDropdown.A, {
                      label: 'Columns',
                      options: mobileOptions,
                      defaultValue:
                        (null == currentMobileChoice
                          ? void 0
                          : currentMobileChoice.value) || '',
                      onChange: handleMobileChange,
                      backgroundcolor: palette.ON.main,
                      fontcolor: 'black',
                      inputfontcolor: 'black',
                      shrunkfontcolor: 'black',
                      unshrunkfontcolor: 'black',
                      shrunklabelposition: 'aboveNotch',
                    }),
                  }),
                ],
              })
            }
            const handleOverflowChange = value => {
              setSelectedOverflowField(
                (null == value ? void 0 : value.value) || ''
              )
            }
            return (0, jsx_runtime.jsxs)(TableRow.A, {
              sx: {
                overflow: 'visible',
                '& th.MuiTableCell-head': {
                  lineHeight: '45px !important',
                  padding: '0px 5px 5px !important',
                  verticalAlign: 'bottom',
                },
              },
              children: [
                (0, jsx_runtime.jsx)(TableCell.A, {
                  padding: 'checkbox',
                  children: (0, jsx_runtime.jsx)(Checkbox.A, {
                    checked: allRowsSelected,
                    indeterminate: !allRowsSelected && someRowsSelected,
                    onChange: handleHeaderCheckboxChange,
                  }),
                }),
                finalDesktopColumns.map(col => {
                  if ('__overflow__' === col.field)
                    return (0, jsx_runtime.jsx)(
                      TableCell.A,
                      {
                        sx: {
                          width: 275,
                          boxSizing: 'border-box',
                          overflow: 'visible',
                          position: 'relative',
                          zIndex: 10,
                          paddingLeft: 0,
                        },
                        children: (0, jsx_runtime.jsx)(SearchableDropdown.A, {
                          label: 'More Columns',
                          options: overflowDesktopColumns.map(oc => {
                            var _oc_headerName
                            return {
                              value: oc.field,
                              label:
                                null !== (_oc_headerName = oc.headerName) &&
                                void 0 !== _oc_headerName
                                  ? _oc_headerName
                                  : oc.field,
                            }
                          }),
                          defaultValue: selectedOverflowField,
                          onChange: handleOverflowChange,
                          backgroundcolor: palette.ON.main,
                          fontcolor: 'black',
                          inputfontcolor: 'black',
                          shrunkfontcolor: 'black',
                          unshrunkfontcolor: 'black',
                          shrunklabelposition: 'aboveNotch',
                        }),
                      },
                      'overflow-header'
                    )
                  const widthStyles = col.width
                    ? {
                        width: col.width,
                        minWidth: col.width,
                        maxWidth: col.width,
                      }
                    : 'id' === col.field || '_id' === col.field
                      ? { width: '100px', minWidth: '100px', maxWidth: '100px' }
                      : { maxWidth: 200 }
                  var _col_headerName
                  return (0, jsx_runtime.jsx)(
                    TableCell.A,
                    {
                      sx: {
                        userSelect: 'none',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        verticalAlign: 'bottom',
                        paddingLeft: 0,
                        ...widthStyles,
                      },
                      children:
                        null !== (_col_headerName = col.headerName) &&
                        void 0 !== _col_headerName
                          ? _col_headerName
                          : col.field,
                    },
                    col.field
                  )
                }),
              ],
            })
          },
          Table_ColumnHeaderRow = ColumnHeaderRow
        ColumnHeaderRow.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ColumnHeaderRow',
          props: {
            isMobile: {
              required: !0,
              tsType: { name: 'boolean' },
              description: '',
            },
            allRowsSelected: {
              required: !0,
              tsType: { name: 'boolean' },
              description: '',
            },
            someRowsSelected: {
              required: !0,
              tsType: { name: 'boolean' },
              description: '',
            },
            handleHeaderCheckboxChange: {
              required: !0,
              tsType: {
                name: 'ReactChangeEventHandler',
                raw: 'React.ChangeEventHandler<HTMLInputElement>',
                elements: [{ name: 'HTMLInputElement' }],
              },
              description: '',
            },
            finalDesktopColumns: {
              required: !0,
              tsType: {
                name: 'Array',
                elements: [{ name: 'ColumnDef' }],
                raw: 'ColumnDef[]',
              },
              description: '',
            },
            overflowDesktopColumns: {
              required: !0,
              tsType: {
                name: 'Array',
                elements: [{ name: 'ColumnDef' }],
                raw: 'ColumnDef[]',
              },
              description: '',
            },
            allColumns: {
              required: !0,
              tsType: {
                name: 'Array',
                elements: [{ name: 'ColumnDef' }],
                raw: 'ColumnDef[]',
              },
              description: '',
            },
            selectedOverflowField: {
              required: !0,
              tsType: { name: 'string' },
              description: '',
            },
            setSelectedOverflowField: {
              required: !0,
              tsType: {
                name: 'ReactDispatch',
                raw: 'React.Dispatch<React.SetStateAction<string>>',
                elements: [
                  {
                    name: 'ReactSetStateAction',
                    raw: 'React.SetStateAction<string>',
                    elements: [{ name: 'string' }],
                  },
                ],
              },
              description: '',
            },
          },
        }
        var TableBody = __webpack_require__(
            './node_modules/@mui/material/TableBody/TableBody.js'
          ),
          Tooltip = __webpack_require__('./src/components/Tooltip/index.tsx')
        function safeString(value) {
          if (null == value) return ''
          switch (typeof value) {
            case 'string':
              return value
            case 'number':
            case 'boolean':
              return String(value)
            case 'object':
              try {
                return JSON.stringify(value)
              } catch (e) {
                return ''
              }
            default:
              return ''
          }
        }
        const Rows = ({
            rows,
            finalDesktopColumns,
            overflowDesktopColumns,
            selectedOverflowField,
            isMobile,
            mobileSelectedColumn,
            selectedRowIds,
            onRowClick,
            onRowCheckboxChange,
          }) =>
            0 === rows.length
              ? (0, jsx_runtime.jsx)(TableBody.A, {
                  children: (0, jsx_runtime.jsxs)(TableRow.A, {
                    children: [
                      (0, jsx_runtime.jsx)(TableCell.A, {}),
                      (0, jsx_runtime.jsx)(TableCell.A, {
                        colSpan: finalDesktopColumns.length || 1,
                        children: 'No data available',
                      }),
                    ],
                  }),
                })
              : isMobile
                ? (0, jsx_runtime.jsx)(TableBody.A, {
                    children: rows.map(row => {
                      const rowId = getRowId(row),
                        isSelected = selectedRowIds.includes(rowId),
                        cellValueStr = safeString(row[mobileSelectedColumn])
                      return (0, jsx_runtime.jsxs)(
                        TableRow.A,
                        {
                          hover: !0,
                          onClick: onRowClick ? () => onRowClick(row) : void 0,
                          sx: {
                            cursor: onRowClick ? 'pointer' : 'default',
                            backgroundColor: isSelected
                              ? 'rgba(0, 0, 255, 0.08)'
                              : 'unset',
                          },
                          children: [
                            (0, jsx_runtime.jsx)(TableCell.A, {
                              padding: 'checkbox',
                              children: (0, jsx_runtime.jsx)(Checkbox.A, {
                                checked: isSelected,
                                onChange: e => {
                                  e.stopPropagation(),
                                    onRowCheckboxChange(rowId)
                                },
                              }),
                            }),
                            (0, jsx_runtime.jsx)(TableCell.A, {
                              sx: {
                                maxWidth: 200,
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                paddingLeft: 5,
                              },
                              children: (0, jsx_runtime.jsx)(Tooltip.A, {
                                title: cellValueStr,
                                tooltipcolor: '#444',
                                tooltipplacement: 'top',
                                offsetX: 0,
                                offsetY: 5,
                                arrow: !0,
                                children: (0, jsx_runtime.jsx)('span', {
                                  children: cellValueStr,
                                }),
                              }),
                            }),
                          ],
                        },
                        rowId
                      )
                    }),
                  })
                : (0, jsx_runtime.jsx)(TableBody.A, {
                    children: rows.map((row, rowIndex) => {
                      const rowId = getRowId(row),
                        isSelected = selectedRowIds.includes(rowId)
                      return (0, jsx_runtime.jsxs)(
                        TableRow.A,
                        {
                          hover: !0,
                          onClick: onRowClick ? () => onRowClick(row) : void 0,
                          sx: {
                            cursor: onRowClick ? 'pointer' : 'default',
                            backgroundColor: isSelected
                              ? 'rgba(0, 0, 255, 0.08)'
                              : 'unset',
                          },
                          children: [
                            (0, jsx_runtime.jsx)(TableCell.A, {
                              padding: 'checkbox',
                              children: (0, jsx_runtime.jsx)(Checkbox.A, {
                                checked: isSelected,
                                onChange: e => {
                                  e.stopPropagation(),
                                    onRowCheckboxChange(rowId)
                                },
                              }),
                            }),
                            finalDesktopColumns.map((col, columnIndex) => {
                              if ('__overflow__' === col.field) {
                                const actualCol = overflowDesktopColumns.find(
                                    c => c.field === selectedOverflowField
                                  ),
                                  fieldToRender =
                                    null == actualCol
                                      ? void 0
                                      : actualCol.field,
                                  cellValueStr = safeString(
                                    null != fieldToRender
                                      ? row[fieldToRender]
                                      : void 0
                                  )
                                return (0, jsx_runtime.jsx)(
                                  TableCell.A,
                                  {
                                    sx: {
                                      maxWidth: 200,
                                      whiteSpace: 'nowrap',
                                      overflow: 'hidden',
                                      textOverflow: 'ellipsis',
                                      paddingLeft: 5,
                                    },
                                    children: (0, jsx_runtime.jsx)(Tooltip.A, {
                                      title: cellValueStr,
                                      tooltipcolor: '#444',
                                      tooltipplacement: 'top',
                                      offsetX: 0,
                                      offsetY: 5,
                                      arrow: !0,
                                      children: (0, jsx_runtime.jsx)('span', {
                                        children: cellValueStr,
                                      }),
                                    }),
                                  },
                                  `overflow-${rowId}-${columnIndex}`
                                )
                              }
                              let cellContent
                              if ('function' == typeof col.renderCell) {
                                const cellParams = {
                                  row,
                                  value: row[col.field],
                                  field: col.field,
                                  rowIndex,
                                  columnIndex,
                                }
                                cellContent = col.renderCell(cellParams)
                              } else {
                                const val = row[col.field]
                                cellContent =
                                  val &&
                                  ('string' == typeof val ||
                                    react.isValidElement(val))
                                    ? val
                                    : safeString(val)
                              }
                              const cellContentStr = safeString(cellContent),
                                widthStyles = col.width
                                  ? {
                                      width: col.width,
                                      minWidth: col.width,
                                      maxWidth: col.width,
                                    }
                                  : 'id' === col.field || '_id' === col.field
                                    ? {
                                        width: '60px',
                                        minWidth: '60px',
                                        maxWidth: '60px',
                                      }
                                    : { maxWidth: 200 }
                              return (0, jsx_runtime.jsx)(
                                TableCell.A,
                                {
                                  sx: {
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    paddingLeft: 1,
                                    ...widthStyles,
                                  },
                                  children: (0, jsx_runtime.jsx)(Tooltip.A, {
                                    title: cellContentStr,
                                    tooltipcolor: '#444',
                                    tooltipplacement: 'top',
                                    offsetX: 0,
                                    offsetY: 5,
                                    arrow: !0,
                                    children: (0, jsx_runtime.jsx)('span', {
                                      children: cellContent,
                                    }),
                                  }),
                                },
                                `${col.field}-${rowId}-${columnIndex}`
                              )
                            }),
                          ],
                        },
                        rowId
                      )
                    }),
                  }),
          Table_Rows = Rows
        function getRowId(row) {
          var _row__id, _ref
          return String(
            null !==
              (_ref =
                null !== (_row__id = row._id) && void 0 !== _row__id
                  ? _row__id
                  : row.id) && void 0 !== _ref
              ? _ref
              : ''
          )
        }
        function Table_Table({
          columns,
          rows,
          onRowClick,
          selectedRowIds = [],
          allRowsSelected = !1,
          someRowsSelected = !1,
          onHeaderCheckboxChange,
          onRowCheckboxChange,
        }) {
          const isMobile = !(0, useMediaQuery.A)('(min-width:500px)'),
            {
              containerRef,
              fittedDesktopColumns,
              overflowDesktopColumns,
              selectedOverflowField,
              setSelectedOverflowField,
            } = (function useComputeTableResize({
              columns,
              checkboxSelection,
              showOverflowDropdown,
            }) {
              const containerRef = (0, react.useRef)(null),
                [fittedDesktopColumns, setFittedDesktopColumns] = (0,
                react.useState)([]),
                [overflowDesktopColumns, setOverflowDesktopColumns] = (0,
                react.useState)([]),
                [selectedOverflowField, setSelectedOverflowField] = (0,
                react.useState)(''),
                columnVisibility = (0, esm_react.md)(columnVisibilityAtom),
                measureTextWidth = (0, react.useCallback)(
                  (text, font = '14px Roboto') => {
                    const ctx = document
                      .createElement('canvas')
                      .getContext('2d')
                    return ctx
                      ? ((ctx.font = font), ctx.measureText(text).width)
                      : 100
                  },
                  []
                ),
                measureColumnNeededWidth = (0, react.useCallback)(
                  col => {
                    if (null != col.width) return col.width
                    if ('id' === col.field || '_id' === col.field) return 60
                    const header = col.headerName || col.field
                    return measureTextWidth(header) + 40
                  },
                  [measureTextWidth]
                ),
                recalcColumns = (0, react.useCallback)(() => {
                  if (!containerRef.current) return
                  const containerWidth = containerRef.current.offsetWidth,
                    visibleCols = columns.filter(
                      col => !1 !== columnVisibility[col.field]
                    )
                  let usedWidth = checkboxSelection ? 50 : 0
                  const overflowReservedWidth = showOverflowDropdown ? 180 : 0,
                    canFit = []
                  let theOverflow = []
                  for (let i = 0; i < visibleCols.length; i++) {
                    const col = visibleCols[i],
                      needed = measureColumnNeededWidth(col)
                    if (null == col.width) {
                      if (
                        !(
                          usedWidth + needed + overflowReservedWidth <=
                          containerWidth
                        )
                      ) {
                        if (
                          ((theOverflow = visibleCols.slice(i)),
                          theOverflow.length > 0 && canFit.length > 1)
                        ) {
                          const lastFitted = canFit.pop()
                          lastFitted &&
                            (theOverflow = [lastFitted, ...theOverflow])
                        }
                        break
                      }
                      canFit.push(col), (usedWidth += needed)
                    } else canFit.push(col), (usedWidth += needed)
                  }
                  let newSelected = selectedOverflowField
                  var _theOverflow_
                  theOverflow.length > 0 &&
                  !theOverflow.some(c => c.field === newSelected)
                    ? (newSelected =
                        (null === (_theOverflow_ = theOverflow[0]) ||
                        void 0 === _theOverflow_
                          ? void 0
                          : _theOverflow_.field) || '')
                    : 0 === theOverflow.length &&
                      '' !== newSelected &&
                      (newSelected = ''),
                    arraysAreEqual(canFit, fittedDesktopColumns) ||
                      setFittedDesktopColumns(canFit),
                    arraysAreEqual(theOverflow, overflowDesktopColumns) ||
                      setOverflowDesktopColumns(theOverflow),
                    newSelected !== selectedOverflowField &&
                      setSelectedOverflowField(newSelected)
                }, [
                  containerRef,
                  columns,
                  columnVisibility,
                  checkboxSelection,
                  showOverflowDropdown,
                  measureColumnNeededWidth,
                  fittedDesktopColumns,
                  overflowDesktopColumns,
                  selectedOverflowField,
                ])
              return (
                (0, react.useLayoutEffect)(() => {
                  if (!containerRef.current) return
                  const ro = new ResizeObserver(() => {
                    recalcColumns()
                  })
                  return ro.observe(containerRef.current), () => ro.disconnect()
                }, [recalcColumns]),
                (0, react.useEffect)(() => {
                  const handleResize = () => {
                    recalcColumns()
                  }
                  return (
                    window.addEventListener('resize', handleResize),
                    () => {
                      window.removeEventListener('resize', handleResize)
                    }
                  )
                }, [recalcColumns]),
                (0, react.useEffect)(() => {
                  recalcColumns()
                }, [recalcColumns]),
                {
                  containerRef,
                  fittedDesktopColumns,
                  overflowDesktopColumns,
                  selectedOverflowField,
                  setSelectedOverflowField,
                }
              )
            })({
              columns: columns.map(col =>
                col.width ? { ...col, computedWidth: col.width } : col
              ),
              checkboxSelection: !0,
              showOverflowDropdown: !isMobile,
            }),
            finalDesktopColumns = isMobile
              ? []
              : overflowDesktopColumns.length > 0
                ? [
                    ...fittedDesktopColumns,
                    { field: '__overflow__', headerName: 'More Columns' },
                  ]
                : fittedDesktopColumns
          return (0, jsx_runtime.jsx)(Box.A, {
            sx: { width: '100%', overflowX: 'auto' },
            children: (0, jsx_runtime.jsx)(TableContainer.A, {
              ref: containerRef,
              sx: { overflowX: 'auto' },
              children: (0, jsx_runtime.jsxs)(Table.A, {
                sx: { tableLayout: 'auto', minWidth: 'fit-content' },
                children: [
                  (0, jsx_runtime.jsx)(TableHead.A, {
                    children: (0, jsx_runtime.jsx)(Table_ColumnHeaderRow, {
                      isMobile,
                      allRowsSelected,
                      someRowsSelected,
                      handleHeaderCheckboxChange: onHeaderCheckboxChange,
                      finalDesktopColumns,
                      overflowDesktopColumns,
                      selectedOverflowField,
                      setSelectedOverflowField,
                      allColumns: columns,
                    }),
                  }),
                  (0, jsx_runtime.jsx)(Table_Rows, {
                    rows,
                    finalDesktopColumns,
                    overflowDesktopColumns,
                    selectedOverflowField,
                    isMobile,
                    mobileSelectedColumn: selectedOverflowField,
                    selectedRowIds,
                    onRowClick,
                    onRowCheckboxChange,
                  }),
                ],
              }),
            }),
          })
        }
        ;(Rows.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Rows',
          props: {
            rows: {
              required: !0,
              tsType: {
                name: 'Array',
                elements: [{ name: 'RowData' }],
                raw: 'RowData[]',
              },
              description: '',
            },
            finalDesktopColumns: {
              required: !0,
              tsType: {
                name: 'Array',
                elements: [{ name: 'ColumnDef' }],
                raw: 'ColumnDef[]',
              },
              description: '',
            },
            overflowDesktopColumns: {
              required: !0,
              tsType: {
                name: 'Array',
                elements: [{ name: 'ColumnDef' }],
                raw: 'ColumnDef[]',
              },
              description: '',
            },
            selectedOverflowField: {
              required: !0,
              tsType: { name: 'string' },
              description: '',
            },
            isMobile: {
              required: !0,
              tsType: { name: 'boolean' },
              description: '',
            },
            mobileSelectedColumn: {
              required: !0,
              tsType: { name: 'string' },
              description: '',
            },
            selectedRowIds: {
              required: !0,
              tsType: {
                name: 'Array',
                elements: [{ name: 'string' }],
                raw: 'string[]',
              },
              description: '',
            },
            onRowClick: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(row: RowData) => void',
                signature: {
                  arguments: [{ type: { name: 'RowData' }, name: 'row' }],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            onRowCheckboxChange: {
              required: !0,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(rowId: string) => void',
                signature: {
                  arguments: [{ type: { name: 'string' }, name: 'rowId' }],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
          },
        }),
          (Table_Table.displayName = 'Table')
        const DataGrid_Table = Table_Table
        Table_Table.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Table',
          props: {
            columns: {
              required: !0,
              tsType: {
                name: 'Array',
                elements: [{ name: 'ColumnDef' }],
                raw: 'ColumnDef[]',
              },
              description: '',
            },
            rows: {
              required: !0,
              tsType: {
                name: 'Array',
                elements: [{ name: 'RowData' }],
                raw: 'RowData[]',
              },
              description: '',
            },
            onRowClick: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(row: RowData) => void',
                signature: {
                  arguments: [{ type: { name: 'RowData' }, name: 'row' }],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            selectedRowIds: {
              required: !1,
              tsType: {
                name: 'Array',
                elements: [{ name: 'string' }],
                raw: 'string[]',
              },
              description: '',
              defaultValue: { value: '[]', computed: !1 },
            },
            onSelectionChange: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(selectedIds: string[]) => void',
                signature: {
                  arguments: [
                    {
                      type: {
                        name: 'Array',
                        elements: [{ name: 'string' }],
                        raw: 'string[]',
                      },
                      name: 'selectedIds',
                    },
                  ],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            allRowsSelected: {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
              defaultValue: { value: 'false', computed: !1 },
            },
            someRowsSelected: {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
              defaultValue: { value: 'false', computed: !1 },
            },
            onHeaderCheckboxChange: {
              required: !0,
              tsType: {
                name: 'ReactChangeEventHandler',
                raw: 'React.ChangeEventHandler<HTMLInputElement>',
                elements: [{ name: 'HTMLInputElement' }],
              },
              description: '',
            },
            onRowCheckboxChange: {
              required: !0,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(rowId: string) => void',
                signature: {
                  arguments: [{ type: { name: 'string' }, name: 'rowId' }],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
          },
        }
        const VerticalDivider = (0,
        __webpack_require__('./node_modules/@mui/material/styles/styled.js')
          .Ay)(Box.A)({ borderLeft: '2px solid black', height: '20px' })
        var TablePagination = __webpack_require__(
            './node_modules/@mui/material/TablePagination/TablePagination.js'
          ),
          Popover = __webpack_require__(
            './node_modules/@mui/material/Popover/Popover.js'
          ),
          IconButton = __webpack_require__(
            './node_modules/@mui/material/IconButton/IconButton.js'
          ),
          useManageColumn_console = __webpack_require__(
            './node_modules/console-browserify/index.js'
          )
        var Button = __webpack_require__('./src/components/Button/index.tsx'),
          Searchbar = __webpack_require__(
            './src/components/Searchbar/index.tsx'
          ),
          components_Checkbox = __webpack_require__(
            './src/components/Checkbox/index.tsx'
          ),
          ShowHideEye = __webpack_require__(
            './src/components/Icons/ShowHideEye.tsx'
          ),
          Typography = __webpack_require__(
            './src/components/Typography/index.tsx'
          ),
          ManageColumn_console = __webpack_require__(
            './node_modules/console-browserify/index.js'
          )
        function ManageColumns({ open = !1, handleClose = () => {}, columns }) {
          ManageColumn_console.log('ManageColumns render:', { open, columns })
          const {
              handleAllCols,
              toggleColumnState,
              visibleColumns,
              onSaveColumnView,
              formatColumnName,
              searchInput,
              setSearchInput,
              isAllChecked,
            } = (({
              columns,
              handleClose,
              isPopupOpen,
              initialSearchInput = '',
            }) => {
              const [tempVisibleColumns, setTempVisibleColumns] = (0,
                react.useState)({}),
                [columnVisibility] = (0, esm_react.fp)(columnVisibilityAtom),
                updateVisibility = (0, esm_react.Xr)(columnVisibilityActions),
                [searchInput, setSearchInput] = (0, react.useState)(
                  initialSearchInput
                ),
                [isAllChecked, setIsAllChecked] = (0, react.useState)(!0),
                initialized = (0, react.useRef)(!1)
              useManageColumn_console.log('useManageColumn hook render:', {
                isPopupOpen,
                columnVisibility,
                tempVisibleColumns,
                searchInput,
              }),
                (0, react.useEffect)(() => {
                  if (isPopupOpen) {
                    const currentVisibility = {}
                    columns.forEach(column => {
                      var _columnVisibility_column_field
                      currentVisibility[column.field] =
                        null ===
                          (_columnVisibility_column_field =
                            columnVisibility[column.field]) ||
                        void 0 === _columnVisibility_column_field ||
                        _columnVisibility_column_field
                    }),
                      useManageColumn_console.log(
                        'Initializing tempVisibleColumns:',
                        currentVisibility
                      ),
                      setTempVisibleColumns(currentVisibility),
                      setIsAllChecked(
                        columns.every(
                          column => !0 === currentVisibility[column.field]
                        )
                      ),
                      (initialized.current = !0)
                  }
                }, [isPopupOpen, columns, columnVisibility])
              const handleAllCols = (0, react.useCallback)(
                  checked => {
                    useManageColumn_console.log(
                      'handleAllCols called with checked:',
                      checked
                    ),
                      setIsAllChecked(checked),
                      setTempVisibleColumns(prev => {
                        const newVisibility = {}
                        return (
                          columns.forEach(column => {
                            newVisibility[column.field] = checked
                          }),
                          useManageColumn_console.log('handleAllCols:', {
                            before: prev,
                            after: newVisibility,
                            checked,
                          }),
                          newVisibility
                        )
                      })
                  },
                  [columns]
                ),
                toggleColumnState = (0, react.useCallback)(
                  field => {
                    setTempVisibleColumns(prev => {
                      const newState = { ...prev, [field]: !prev[field] },
                        areAllVisible = columns.every(column =>
                          field === column.field
                            ? newState[field]
                            : prev[column.field]
                        )
                      return (
                        setIsAllChecked(areAllVisible),
                        useManageColumn_console.log('toggleColumnState:', {
                          field,
                          before: prev[field],
                          after: newState[field],
                          allState: newState,
                          areAllVisible,
                        }),
                        newState
                      )
                    })
                  },
                  [columns]
                ),
                onSaveColumnView = (0, react.useCallback)(() => {
                  useManageColumn_console.log(
                    'Saving column visibility state:',
                    tempVisibleColumns
                  ),
                    updateVisibility({
                      type: 'save',
                      newState: tempVisibleColumns,
                    }),
                    handleClose()
                }, [tempVisibleColumns, updateVisibility, handleClose]),
                formatColumnName = (0, react.useCallback)(fieldName => {
                  const formatted = fieldName
                    .replace(/([A-Z])/g, ' $1')
                    .replace(/^./, str => str.toUpperCase())
                    .trim()
                  return (
                    useManageColumn_console.log('Formatting column name:', {
                      fieldName,
                      formatted,
                    }),
                    formatted
                  )
                }, []),
                handlePageUnload = (0, react.useCallback)(() => {
                  useManageColumn_console.log(
                    'Page unload - closing manage columns'
                  ),
                    handleClose()
                }, [handleClose])
              return (
                (0, react.useEffect)(
                  () => (
                    window.addEventListener('beforeunload', handlePageUnload),
                    () => {
                      window.removeEventListener(
                        'beforeunload',
                        handlePageUnload
                      )
                    }
                  ),
                  [handlePageUnload]
                ),
                {
                  handleAllCols,
                  toggleColumnState,
                  visibleColumns: tempVisibleColumns,
                  onSaveColumnView,
                  formatColumnName,
                  searchInput,
                  setSearchInput,
                  isAllChecked,
                }
              )
            })({ columns, handleClose, isPopupOpen: open }),
            someColumnsVisible = react.useMemo(
              () =>
                columns.some(column => !0 === visibleColumns[column.field]) &&
                !columns.every(column => !0 === visibleColumns[column.field]),
              [columns, visibleColumns]
            ),
            filteredColumns = columns.filter(column => {
              const matches = formatColumnName(column.field)
                .toLowerCase()
                .includes(searchInput.toLowerCase())
              return (
                ManageColumn_console.log('Filtering column:', {
                  field: column.field,
                  searchInput,
                  matches,
                }),
                matches
              )
            })
          ManageColumn_console.log('Rendering ManageColumns with:', {
            filteredColumns,
            searchInput,
            visibleColumns,
          })
          return (0, jsx_runtime.jsx)(Popover.Ay, {
            id: 'manage-columns-popover',
            open: Boolean(open),
            onClose: () => {
              ManageColumn_console.log('handleCloseAndUpdate called'),
                null == handleClose || handleClose(),
                setSearchInput('')
            },
            anchorOrigin: { vertical: 'center', horizontal: 'center' },
            transformOrigin: { vertical: 'center', horizontal: 'center' },
            sx: {
              '& .MuiPaper-root': {
                border: `1px solid ${palette.Ql.main}`,
                borderRadius: 2,
                minWidth: '250px',
                boxShadow: 24,
              },
            },
            children: (0, jsx_runtime.jsxs)(Box.A, {
              sx: {
                p: 2,
                bgcolor: palette.ON.main,
                display: 'flex',
                flexDirection: 'column',
              },
              children: [
                (0, jsx_runtime.jsx)(Typography.A, {
                  text: 'Manage Columns',
                  fontvariant: 'merriparagraph',
                  fontcolor: palette.Ql.main,
                  align: 'center',
                  sx: { mb: 0 },
                }),
                (0, jsx_runtime.jsx)(Box.A, {
                  sx: { mt: 1, mb: 0 },
                  children: (0, jsx_runtime.jsx)(Searchbar.A, {
                    value: searchInput,
                    onChange: e => {
                      ManageColumn_console.log(
                        'Search value changed:',
                        e.target.value
                      ),
                        setSearchInput(e.target.value)
                    },
                    placeholder: 'Search Columns',
                    iconcolor: palette.Ql.main,
                    outlinecolor: palette.Ql.main,
                  }),
                }),
                (0, jsx_runtime.jsxs)(Box.A, {
                  sx: {
                    display: 'flex',
                    alignItems: 'center',
                    mt: 0,
                    mb: 0,
                    justifyContent: 'space-between',
                  },
                  children: [
                    (0, jsx_runtime.jsx)(Typography.A, {
                      text: 'All Columns',
                      fontvariant: 'merriparagraph',
                      fontcolor: palette.Ql.main,
                      sx: { fontWeight: 'bold' },
                    }),
                    (0, jsx_runtime.jsx)(Box.A, {
                      sx: { marginRight: '-4px' },
                      children: (0, jsx_runtime.jsx)(components_Checkbox.A, {
                        checked: isAllChecked,
                        indeterminate: someColumnsVisible && !isAllChecked,
                        onChange: event => {
                          ManageColumn_console.log(
                            'Checkbox clicked in ManageColumns:',
                            {
                              checked: event.target.checked,
                              indeterminate: event.target.indeterminate,
                              eventTarget: event.target,
                            }
                          ),
                            event.stopPropagation(),
                            handleAllCols(event.target.checked)
                        },
                      }),
                    }),
                  ],
                }),
                (0, jsx_runtime.jsx)(Box.A, {
                  sx: {
                    maxHeight: '160px',
                    overflowY: 'auto',
                    marginBottom: '10px',
                  },
                  children: filteredColumns.map((column, index) => {
                    const isVisible = !0 === visibleColumns[column.field]
                    return (
                      ManageColumn_console.log('Rendering column row:', {
                        field: column.field,
                        visible: isVisible,
                      }),
                      (0, jsx_runtime.jsxs)(
                        Box.A,
                        {
                          sx: { display: 'flex', alignItems: 'center', mb: 1 },
                          children: [
                            (0, jsx_runtime.jsx)(Typography.A, {
                              text: formatColumnName(column.field),
                              fontvariant: 'merriparagraph',
                              fontcolor: palette.Ql.main,
                              sx: { flexGrow: 1, mr: 1 },
                            }),
                            (0, jsx_runtime.jsx)(IconButton.A, {
                              onClick: () => {
                                return (
                                  (columnField = column.field),
                                  ManageColumn_console.log(
                                    'Eye icon clicked:',
                                    {
                                      field: columnField,
                                      currentVisibility:
                                        visibleColumns[columnField],
                                      allVisibility: visibleColumns,
                                    }
                                  ),
                                  void toggleColumnState(columnField)
                                )
                                var columnField
                              },
                              size: 'small',
                              children: (0, jsx_runtime.jsx)(ShowHideEye.A, {
                                visible: isVisible,
                              }),
                            }),
                          ],
                        },
                        index
                      )
                    )
                  }),
                }),
                (0, jsx_runtime.jsx)(Button.A, {
                  text: 'Save',
                  backgroundcolor: palette.Ql.main,
                  variant: 'contained',
                  fontcolor: palette.ON.main,
                  fontvariant: 'merriparagraph',
                  sx: { mt: 0 },
                  fullWidth: !0,
                  onClick: onSaveColumnView,
                }),
              ],
            }),
          })
        }
        const ManageColumn = ManageColumns
        ManageColumns.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ManageColumns',
          props: {
            open: {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
              defaultValue: { value: 'false', computed: !1 },
            },
            handleClose: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
              defaultValue: { value: '() => {}', computed: !1 },
            },
            columns: {
              required: !0,
              tsType: {
                name: 'Array',
                elements: [{ name: 'ColumnDef' }],
                raw: 'ColumnDef[]',
              },
              description: '',
            },
          },
        }
        var Footer_console = __webpack_require__(
          './node_modules/console-browserify/index.js'
        )
        function CustomFooter({
          page,
          pageSize,
          rowCount,
          onPageChange,
          onPageSizeChange,
          columns,
        }) {
          const [isOpen, setIsOpen] = (0, react.useState)(!1),
            [checkboxWidth] = (0, react.useState)(45),
            isTabletOrBelow = (0, useMediaQuery.A)('(max-width:900px)'),
            totalPages = Math.ceil(rowCount / pageSize)
          return (0, jsx_runtime.jsxs)(Box.A, {
            className: 'custom-footer-container',
            sx: {
              width: '100%',
              minWidth: '100%',
              height: isTabletOrBelow ? 'auto' : '56px',
              position: 'sticky',
              left: 0,
              marginLeft: isTabletOrBelow ? 0 : `${checkboxWidth}px`,
            },
            children: [
              (0, jsx_runtime.jsxs)(Box.A, {
                sx: {
                  display: 'flex',
                  flexDirection: isTabletOrBelow ? 'column' : 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                  px: 2,
                },
                children: [
                  (0, jsx_runtime.jsxs)(Box.A, {
                    sx: {
                      display: 'flex',
                      alignItems: 'center',
                      mb: isTabletOrBelow ? '4px' : 0,
                    },
                    className: 'left-box',
                    children: [
                      (0, jsx_runtime.jsx)(Box.A, {
                        sx: {
                          display: 'flex',
                          alignItems: 'center',
                          mr: isTabletOrBelow ? '5px' : '10px',
                        },
                        children: (0, jsx_runtime.jsx)(VerticalDivider, {}),
                      }),
                      (0, jsx_runtime.jsx)(Box.A, {
                        sx: {
                          display: 'flex',
                          alignItems: 'center',
                          gap: isTabletOrBelow ? '5px' : '8px',
                          pr: isTabletOrBelow ? '5px' : '8px',
                        },
                        children: (0, jsx_runtime.jsx)(Button.A, {
                          onClick: () => {
                            Footer_console.log('Footer handleOpen'),
                              setIsOpen(!0)
                          },
                          text: 'Manage Columns',
                          fontvariant: 'merriparagraph',
                          fontcolor: 'black',
                          backgroundcolor: 'none',
                          icon: (0, jsx_runtime.jsx)(ShowHideEye.A, {
                            visible: !0,
                          }),
                          iconcolor: 'black',
                          iconlocation: 'left',
                          disableButton: 'false',
                          sx: {
                            minWidth: 'unset',
                            padding: '8px',
                            '& .MuiTypography-root': { marginLeft: '16px' },
                          },
                        }),
                      }),
                      (0, jsx_runtime.jsx)(Box.A, {
                        sx: {
                          display: 'flex',
                          alignItems: 'center',
                          ml: isTabletOrBelow ? '5px' : '10px',
                          mr: isTabletOrBelow ? '5px' : '10px',
                        },
                        children: (0, jsx_runtime.jsx)(VerticalDivider, {}),
                      }),
                    ],
                  }),
                  (0, jsx_runtime.jsx)(Box.A, {
                    sx: {
                      display: 'flex',
                      alignItems: 'center',
                      mt: isTabletOrBelow ? '4px' : 0,
                      justifyContent: isTabletOrBelow ? 'center' : 'flex-end',
                      ml: isTabletOrBelow ? 0 : 'auto',
                    },
                    className: 'right-box',
                    children: (0, jsx_runtime.jsx)(TablePagination.A, {
                      component: 'div',
                      count: rowCount,
                      page,
                      onPageChange: (_, newPage) => {
                        onPageChange(newPage)
                      },
                      rowsPerPage: pageSize,
                      onRowsPerPageChange: event => {
                        const newPageSize = parseInt(event.target.value, 10)
                        onPageSizeChange(newPageSize)
                      },
                      rowsPerPageOptions: [10, 25, 50, 100],
                      slotProps: {
                        actions: {
                          previousButton: { disabled: 0 === page },
                          nextButton: { disabled: page >= totalPages - 1 },
                        },
                      },
                      showFirstButton: !0,
                      showLastButton: !0,
                      labelDisplayedRows: ({ from, to, count }) =>
                        `${from}-${to} of ${-1 !== count ? count : `more than ${to}`}`,
                    }),
                  }),
                ],
              }),
              (0, jsx_runtime.jsx)(ManageColumn, {
                open: isOpen,
                handleClose: () => {
                  Footer_console.log('Footer handleClose'), setIsOpen(!1)
                },
                columns,
              }),
            ],
          })
        }
        const Footer = CustomFooter
        CustomFooter.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'CustomFooter',
          props: {
            page: { required: !0, tsType: { name: 'number' }, description: '' },
            pageSize: {
              required: !0,
              tsType: { name: 'number' },
              description: '',
            },
            rowCount: {
              required: !0,
              tsType: { name: 'number' },
              description: '',
            },
            onPageChange: {
              required: !0,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(newPage: number) => void',
                signature: {
                  arguments: [{ type: { name: 'number' }, name: 'newPage' }],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            onPageSizeChange: {
              required: !0,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(newPageSize: number) => void',
                signature: {
                  arguments: [
                    { type: { name: 'number' }, name: 'newPageSize' },
                  ],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            columns: {
              required: !0,
              tsType: {
                name: 'Array',
                elements: [{ name: 'ColumnDef' }],
                raw: 'ColumnDef[]',
              },
              description: '',
            },
          },
        }
        var useToolbarSearchbar_console = __webpack_require__(
          './node_modules/console-browserify/index.js'
        )
        function toLowerCaseString(value) {
          if (null == value) return ''
          if ('object' == typeof value)
            try {
              return JSON.stringify(value).toLowerCase()
            } catch (e) {
              return ''
            }
          return 'string' == typeof value
            ? value.toLowerCase()
            : 'number' == typeof value || 'boolean' == typeof value
              ? String(value).toLowerCase()
              : ''
        }
        var useManageRow_console = __webpack_require__(
          './node_modules/console-browserify/index.js'
        )
        var useInitializeGrid_console = __webpack_require__(
          './node_modules/console-browserify/index.js'
        )
        function DataGrid({
          columns,
          rows: providedRows,
          buttons,
          dropdowns,
          searchbarProps,
          error = null,
          onDuplicate,
          onDelete,
          onManage,
          onShow,
          onSelectionChange,
        }) {
          const [rows, setRows] = (0, react.useState)(providedRows || []),
            [selectedRows, setSelectedRows] = (0, react.useState)([]),
            [page, setPage] = (0, react.useState)(0),
            [pageSize, setPageSize] = (0, react.useState)(10)
          !(function useInitializeGrid({ columns, providedRows, setRows }) {
            const setColumns = (0, esm_react.Xr)(columnsAtom),
              columnVisibility = (0, esm_react.md)(columnVisibilityAtom),
              updateVisibility = (0, esm_react.Xr)(columnVisibilityActions),
              initialized = (0, react.useRef)(!1)
            ;(0, react.useEffect)(() => {
              setRows(providedRows || [])
            }, [providedRows, setRows]),
              (0, react.useEffect)(() => {
                if (!initialized.current) {
                  useInitializeGrid_console.log(
                    'Initializing columns and visibility:',
                    columns
                  ),
                    setColumns(columns.map(col => col.field))
                  const initialVisibility = {}
                  columns.forEach(column => {
                    void 0 === columnVisibility[column.field] &&
                      (initialVisibility[column.field] = !0)
                  }),
                    Object.keys(initialVisibility).length > 0 &&
                      (useInitializeGrid_console.log(
                        'Setting initial visibility for columns:',
                        initialVisibility
                      ),
                      updateVisibility({
                        type: 'save',
                        newState: { ...columnVisibility, ...initialVisibility },
                      })),
                    (initialized.current = !0)
                }
              }, [columns, columnVisibility, setColumns, updateVisibility])
          })({ columns, providedRows, setRows })
          const handleSelectionChange = newSelectedIds => {
              setSelectedRows(newSelectedIds),
                null == onSelectionChange || onSelectionChange(newSelectedIds)
            },
            { filteredRows, updatedSearchbarProps } = (({
              columns,
              rows,
              searchbarProps,
              updateVisibility,
            }) => {
              const [searchValue, setSearchValue] = (0, react.useState)(''),
                [tags, setTags] = (0, react.useState)([])
              ;(0, react.useEffect)(() => {
                setTags(
                  searchValue.trim() ? searchValue.toLowerCase().split(' ') : []
                )
              }, [searchValue])
              const handleSearchChange = (0, react.useCallback)(event => {
                  setSearchValue(event.target.value)
                }, []),
                filteredRows = (0, react.useMemo)(() => {
                  if (!searchValue.trim()) return rows
                  const searchTerms = searchValue
                    .toLowerCase()
                    .trim()
                    .split(' ')
                  return rows.filter(row =>
                    searchTerms.some(term =>
                      columns.some(column => {
                        var _column_headerName
                        const headerMatch =
                            null === (_column_headerName = column.headerName) ||
                            void 0 === _column_headerName
                              ? void 0
                              : _column_headerName.toLowerCase().includes(term),
                          fieldMatch = column.field
                            .toLowerCase()
                            .includes(term),
                          cellMatch = toLowerCaseString(
                            row[column.field]
                          ).includes(term)
                        return headerMatch || fieldMatch || cellMatch
                      })
                    )
                  )
                }, [rows, searchValue, columns]),
                visibleColumns = (0, react.useMemo)(() => {
                  if (!searchValue.trim())
                    return new Set(columns.map(col => col.field))
                  const searchTerms = searchValue
                    .toLowerCase()
                    .trim()
                    .split(' ')
                  return new Set(
                    columns
                      .filter(col =>
                        searchTerms.some(term => {
                          var _col_headerName
                          const headerMatch =
                              null === (_col_headerName = col.headerName) ||
                              void 0 === _col_headerName
                                ? void 0
                                : _col_headerName.toLowerCase().includes(term),
                            fieldMatch = col.field.toLowerCase().includes(term),
                            hasMatchingData = filteredRows.some(row =>
                              toLowerCaseString(row[col.field]).includes(term)
                            )
                          return headerMatch || fieldMatch || hasMatchingData
                        })
                      )
                      .map(col => col.field)
                  )
                }, [columns, searchValue, filteredRows])
              ;(0, react.useEffect)(() => {
                if (!updateVisibility) return
                if (0 === tags.length) return
                const newVisibility = {}
                columns.forEach(column => {
                  newVisibility[column.field] = visibleColumns.has(column.field)
                }),
                  useToolbarSearchbar_console.log(
                    'Updating column visibility from search:',
                    newVisibility
                  ),
                  updateVisibility({ type: 'save', newState: newVisibility })
              }, [tags, columns, visibleColumns, updateVisibility])
              const updatedSearchbarProps = {
                ...searchbarProps,
                value: searchValue,
                onChange: handleSearchChange,
                backgroundcolor: palette.Yb.main,
                shrunkfontcolor: palette.ON.main,
                unshrunkfontcolor: palette.ON.main,
                shrunklabelposition: 'onNotch',
                label: 'Search DataGrid',
              }
              return {
                searchValue,
                setSearchValue,
                handleSearchChange,
                filteredRows,
                visibleColumns,
                tags,
                updatedSearchbarProps,
              }
            })({ columns, rows, searchbarProps }),
            { handleManageRowClose, handleManage } = (function useManageRow({
              onManage,
              selectedRows,
              handleSelectionChange,
            }) {
              return {
                handleManageRowClose: (0, react.useCallback)(() => {
                  onManage || handleSelectionChange([])
                }, [onManage, handleSelectionChange]),
                handleManage: (0, react.useCallback)(() => {
                  useManageRow_console.log(
                    'DataGrid handleManage with selectedRows:',
                    selectedRows
                  ),
                    null == onManage || onManage()
                }, [onManage, selectedRows]),
              }
            })({ onManage, selectedRows, handleSelectionChange }),
            startIndex = page * pageSize,
            visibleRows = filteredRows.slice(startIndex, startIndex + pageSize),
            allRowsSelected =
              rows.length > 0 &&
              rows.every(r => {
                var _r__id
                return selectedRows.includes(
                  String(
                    null !== (_r__id = r._id) && void 0 !== _r__id
                      ? _r__id
                      : r.id
                  )
                )
              }),
            someRowsSelected =
              rows.length > 0 &&
              selectedRows.length > 0 &&
              selectedRows.length < rows.length
          return (0, jsx_runtime.jsxs)(Box.A, {
            sx: {
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              height: 'calc(100vh - 60px)',
              overflow: 'auto',
              backgroundColor: palette.yR.main,
            },
            children: [
              error &&
                (0, jsx_runtime.jsx)(Alert.A, {
                  severity: 'error',
                  sx: { mb: 2 },
                  children: error.message,
                }),
              (0, jsx_runtime.jsx)(Toolbar.A, {
                buttons,
                dropdowns: (null == dropdowns ? void 0 : dropdowns[0])
                  ? [dropdowns[0]]
                  : void 0,
                searchbarProps: updatedSearchbarProps,
                rightCenterProps:
                  selectedRows.length > 0
                    ? {
                        selectedRows,
                        rows,
                        onDuplicate: onDuplicate
                          ? () => onDuplicate(selectedRows)
                          : void 0,
                        onDelete: onDelete
                          ? () => onDelete(selectedRows)
                          : void 0,
                        onManage: handleManage,
                        onShow,
                        handleClose: handleManageRowClose,
                      }
                    : void 0,
              }),
              (0, jsx_runtime.jsxs)(Box.A, {
                sx: {
                  flexGrow: 1,
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                },
                children: [
                  (0, jsx_runtime.jsx)(DataGrid_Table, {
                    columns,
                    rows: visibleRows,
                    selectedRowIds: selectedRows,
                    onRowClick: row => {
                      !(function selectRow(
                        row,
                        selectedRows,
                        onSelectionChange
                      ) {
                        if (!onSelectionChange) return
                        var _row__id
                        const rowId =
                          null !== (_row__id = row._id) && void 0 !== _row__id
                            ? _row__id
                            : row.id
                        if (!rowId) return
                        onSelectionChange(
                          selectedRows.includes(rowId)
                            ? selectedRows.filter(id => id !== rowId)
                            : [...selectedRows, rowId]
                        )
                      })(row, selectedRows, handleSelectionChange)
                    },
                    allRowsSelected,
                    someRowsSelected,
                    onHeaderCheckboxChange: () => {
                      !(function selectAllRows(
                        rows,
                        selectedRows,
                        onSelectionChange
                      ) {
                        if (!onSelectionChange) return
                        onSelectionChange(
                          rows.length > 0 &&
                            rows.every(r => selectedRows.includes(getRowId(r)))
                            ? []
                            : rows.map(r => getRowId(r))
                        )
                      })(rows, selectedRows, handleSelectionChange)
                    },
                    onRowCheckboxChange: rowId => {
                      selectedRows.includes(rowId)
                        ? handleSelectionChange(
                            selectedRows.filter(id => id !== rowId)
                          )
                        : handleSelectionChange([...selectedRows, rowId])
                    },
                  }),
                  (0, jsx_runtime.jsx)(Footer, {
                    page,
                    pageSize,
                    rowCount: filteredRows.length,
                    onPageChange: setPage,
                    onPageSizeChange: setPageSize,
                    columns,
                  }),
                ],
              }),
            ],
          })
        }
        const components_DataGrid = DataGrid
        DataGrid.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'DataGrid',
          props: {
            columns: {
              required: !0,
              tsType: {
                name: 'Array',
                elements: [{ name: 'ColumnDef' }],
                raw: 'ColumnDef[]',
              },
              description: '',
            },
            rows: {
              required: !0,
              tsType: {
                name: 'Array',
                elements: [{ name: 'RowData' }],
                raw: 'RowData[]',
              },
              description: '',
            },
            buttons: {
              required: !1,
              tsType: {
                name: 'Array',
                elements: [{ name: 'CustomButtonProps' }],
                raw: 'CustomButtonProps[]',
              },
              description: '',
            },
            dropdowns: {
              required: !1,
              tsType: {
                name: 'Array',
                elements: [{ name: 'DropdownProps' }],
                raw: 'DropdownProps[]',
              },
              description: '',
            },
            searchbarProps: {
              required: !1,
              tsType: { name: 'SearchbarProps' },
              description: '',
            },
            error: {
              required: !1,
              tsType: {
                name: 'union',
                raw: 'Error | null',
                elements: [{ name: 'Error' }, { name: 'null' }],
              },
              description: '',
              defaultValue: { value: 'null', computed: !1 },
            },
            onManage: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            onShow: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            onDuplicate: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(selectedIds: string[]) => void',
                signature: {
                  arguments: [
                    {
                      type: {
                        name: 'Array',
                        elements: [{ name: 'string' }],
                        raw: 'string[]',
                      },
                      name: 'selectedIds',
                    },
                  ],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            onDelete: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(selectedIds: string[]) => void',
                signature: {
                  arguments: [
                    {
                      type: {
                        name: 'Array',
                        elements: [{ name: 'string' }],
                        raw: 'string[]',
                      },
                      name: 'selectedIds',
                    },
                  ],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            onSelectionChange: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(selectedIds: string[]) => void',
                signature: {
                  arguments: [
                    {
                      type: {
                        name: 'Array',
                        elements: [{ name: 'string' }],
                        raw: 'string[]',
                      },
                      name: 'selectedIds',
                    },
                  ],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
          },
        }
        var datagrid_stories_console = __webpack_require__(
          './node_modules/console-browserify/index.js'
        )
        function randomUUID() {
          return Math.random().toString(36).substring(2, 9)
        }
        const sampleColumns = [
            { field: '_id', headerName: 'ID', width: 80 },
            { field: 'name', headerName: 'Name', width: 180 },
            { field: 'status', headerName: 'Status', width: 120 },
            {
              field: 'description',
              headerName: 'Description',
              renderCell: ({ value }) => {
                const displayValue = 'string' == typeof value ? value : ''
                return (0, jsx_runtime.jsx)('i', {
                  style: { color: 'blue' },
                  children: displayValue,
                })
              },
            },
          ],
          sampleRows = [
            {
              _id: randomUUID(),
              name: 'Alpha',
              status: 'Active',
              description: 'First row item',
            },
            {
              _id: randomUUID(),
              name: 'Beta',
              status: 'Inactive',
              description: 'Second row item',
            },
            {
              _id: randomUUID(),
              name: 'Gamma',
              status: 'Active',
              description: 'Third row item',
            },
            {
              _id: randomUUID(),
              name: 'Delta',
              status: 'Active',
              description: 'Fourth row item',
            },
            {
              _id: randomUUID(),
              name: 'Epsilon',
              status: 'Inactive',
              description: 'Fifth row item',
            },
          ]
        const largeRows = (function createManyRows(count) {
            const arr = []
            for (let i = 1; i <= count; i++)
              arr.push({
                _id: randomUUID(),
                name: `Row #${i}`,
                status: i % 2 == 0 ? 'Active' : 'Inactive',
                description: `Item number ${i} with random text`,
              })
            return arr
          })(55),
          sampleButtons = [
            {
              text: 'Refresh',
              onClick: () => datagrid_stories_console.log('Refresh clicked'),
            },
            {
              text: 'New Item',
              onClick: () => datagrid_stories_console.log('New Item clicked'),
            },
          ],
          sampleDropdowns = [
            {
              label: 'Filter Status',
              options: [
                { value: 'all' },
                { value: 'active' },
                { value: 'inactive' },
              ],
              defaultValue: 'all',
              onChange: e => {
                datagrid_stories_console.log(
                  'Dropdown changed =>',
                  e.target.value
                )
              },
            },
          ],
          datagrid_stories = {
            title: 'Components/DataGrid',
            component: components_DataGrid,
            parameters: {
              a11y: { disable: !1 },
              docs: {
                description: { component: '5) Default Storybook metadata' },
              },
            },
          },
          Empty = {
            name: 'Empty Grid',
            args: {
              columns: sampleColumns,
              rows: [],
              onSelectionChange: ids =>
                datagrid_stories_console.log('Selection =>', ids),
            },
            play: ({ canvasElement }) => {
              const canvas = (0, dist.ux)(canvasElement)
              ;(0, dist.E3)(
                canvas.getByText(/No data available/i)
              ).toBeInTheDocument()
            },
          },
          Basic = {
            args: {
              columns: sampleColumns,
              rows: sampleRows,
              onSelectionChange: ids =>
                datagrid_stories_console.log('Selection =>', ids),
            },
            play: async ({ canvasElement }) => {
              const canvas = (0, dist.ux)(canvasElement)
              ;(0, dist.E3)(canvas.getByText('Alpha')).toBeInTheDocument(),
                (0, dist.E3)(canvas.getByText('Beta')).toBeInTheDocument(),
                await dist.Q4.click(canvas.getByText('Alpha'))
            },
          },
          WithToolbar = {
            args: {
              columns: sampleColumns,
              rows: sampleRows,
              buttons: sampleButtons,
              dropdowns: sampleDropdowns,
              searchbarProps: {
                label: 'Search rows',
                placeholder: 'Type to filter rows',
                value: '',
                onChange: () => {},
              },
            },
            play: async ({ canvasElement }) => {
              const canvas = (0, dist.ux)(canvasElement)
              ;(0, dist.E3)(canvas.getByText('Refresh')).toBeInTheDocument()
              const searchField = canvas.getByLabelText('Search rows')
              await dist.Q4.type(searchField, 'Alpha'),
                (0, dist.E3)(searchField).toHaveValue('Alpha')
            },
          },
          RowSelectionManage = {
            args: {
              columns: sampleColumns,
              rows: sampleRows,
              onSelectionChange: ids =>
                datagrid_stories_console.log('RowSelection =>', ids),
              onManage: () =>
                datagrid_stories_console.log('Manage clicked with single row'),
              onShow: () =>
                datagrid_stories_console.log('Show clicked with single row'),
              onDuplicate: ids =>
                datagrid_stories_console.log('Duplicating rows =>', ids),
              onDelete: ids =>
                datagrid_stories_console.log('Deleting rows =>', ids),
            },
            play: async ({ canvasElement }) => {
              const canvas = (0, dist.ux)(canvasElement)
              await dist.Q4.click(canvas.getByText('Beta')),
                await dist.Q4.click(canvas.getByText('Gamma')),
                (0, dist.E3)(
                  canvas.getByText(/2 items selected/i)
                ).toBeInTheDocument(),
                await dist.Q4.click(canvas.getByText('Delete'))
            },
          },
          PaginationAndLargeData = {
            args: {
              columns: sampleColumns,
              rows: largeRows,
              onSelectionChange: ids =>
                datagrid_stories_console.log('Large data selection =>', ids),
            },
            play: async ({ canvasElement }) => {
              const nextPageButton = (0, dist.ux)(canvasElement).getByRole(
                'button',
                { name: 'Go to next page' }
              )
              await dist.Q4.click(nextPageButton)
            },
          },
          WithError = {
            args: {
              columns: sampleColumns,
              rows: sampleRows,
              error: new Error('Something went wrong'),
            },
            play: ({ canvasElement }) => {
              const canvas = (0, dist.ux)(canvasElement)
              ;(0, dist.E3)(
                canvas.getByText('Something went wrong')
              ).toBeInTheDocument()
            },
          },
          FullFeatures = {
            args: {
              columns: sampleColumns,
              rows: sampleRows,
              buttons: sampleButtons,
              dropdowns: sampleDropdowns,
              searchbarProps: {
                label: 'Search everything',
                placeholder: 'Try searching "Beta" or "Delta"',
                value: '',
                onChange: () => {},
              },
              onSelectionChange: ids =>
                datagrid_stories_console.log('Full selection =>', ids),
              onManage: () =>
                datagrid_stories_console.log('Manage row pressed'),
              onShow: () => datagrid_stories_console.log('Show row pressed'),
              onDuplicate: ids =>
                datagrid_stories_console.log('Full-Feature: Duplicate =>', ids),
              onDelete: ids =>
                datagrid_stories_console.log('Full-Feature: Delete =>', ids),
            },
            play: async ({ canvasElement }) => {
              const canvas = (0, dist.ux)(canvasElement)
              ;(0, dist.E3)(canvas.getByText('Refresh')).toBeInTheDocument(),
                (0, dist.E3)(canvas.getByText('New Item')).toBeInTheDocument(),
                (0, dist.E3)(
                  canvas.getByText('Filter Status')
                ).toBeInTheDocument(),
                await dist.Q4.click(canvas.getByText('Gamma')),
                (0, dist.E3)(
                  canvas.getByText(/1 item selected/i)
                ).toBeInTheDocument(),
                await dist.Q4.click(canvas.getByText('Manage'))
            },
          },
          __namedExportsOrder = [
            'Empty',
            'Basic',
            'WithToolbar',
            'RowSelectionManage',
            'PaginationAndLargeData',
            'WithError',
            'FullFeatures',
          ]
        ;(Empty.parameters = {
          ...Empty.parameters,
          docs: {
            ...Empty.parameters?.docs,
            source: {
              originalSource:
                "{\n  name: 'Empty Grid',\n  args: {\n    columns: sampleColumns,\n    rows: [],\n    onSelectionChange: ids => console.log('Selection =>', ids)\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // No rows => \"No data available\" text might appear\n    expect(canvas.getByText(/No data available/i)).toBeInTheDocument();\n  }\n}",
              ...Empty.parameters?.docs?.source,
            },
            description: {
              story:
                '6) Stories\n1) Empty scenario\r\n   - No actual `await` usage, so remove `async`.',
              ...Empty.parameters?.docs?.description,
            },
          },
        }),
          (Basic.parameters = {
            ...Basic.parameters,
            docs: {
              ...Basic.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    columns: sampleColumns,\n    rows: sampleRows,\n    onSelectionChange: ids => console.log('Selection =>', ids)\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Confirm we see \"Alpha\", \"Beta\", etc.\n    expect(canvas.getByText('Alpha')).toBeInTheDocument();\n    expect(canvas.getByText('Beta')).toBeInTheDocument();\n\n    // Example: click \"Alpha\" row's checkbox (or row text, depending on your DataGrid usage)\n    await userEvent.click(canvas.getByText('Alpha'));\n    // The console logs \"Selection => [theAlphaID]\" (no direct assertion here)\n  }\n}",
                ...Basic.parameters?.docs?.source,
              },
              description: {
                story:
                  '2) Basic usage with data\r\n   - Uses `await` for userEvent interaction => keep `async`.',
                ...Basic.parameters?.docs?.description,
              },
            },
          }),
          (WithToolbar.parameters = {
            ...WithToolbar.parameters,
            docs: {
              ...WithToolbar.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    columns: sampleColumns,\n    rows: sampleRows,\n    buttons: sampleButtons,\n    dropdowns: sampleDropdowns,\n    searchbarProps: {\n      label: 'Search rows',\n      placeholder: 'Type to filter rows',\n      value: '',\n      onChange: () => {} // No-op to fix TS error\n    }\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Check for \"Refresh\" button\n    expect(canvas.getByText('Refresh')).toBeInTheDocument();\n    // Type in the searchbar labeled \"Search rows\"\n    const searchField = canvas.getByLabelText('Search rows');\n    await userEvent.type(searchField, 'Alpha');\n    expect(searchField).toHaveValue('Alpha');\n    // \"Alpha\" might remain, others might hide if your search logic is triggered\n  }\n}",
                ...WithToolbar.parameters?.docs?.source,
              },
              description: {
                story:
                  '3) With toolbar: Buttons, Dropdown, and Search\r\n   - We do have `await userEvent.type(...)`.',
                ...WithToolbar.parameters?.docs?.description,
              },
            },
          }),
          (RowSelectionManage.parameters = {
            ...RowSelectionManage.parameters,
            docs: {
              ...RowSelectionManage.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    columns: sampleColumns,\n    rows: sampleRows,\n    onSelectionChange: ids => console.log('RowSelection =>', ids),\n    onManage: () => console.log('Manage clicked with single row'),\n    onShow: () => console.log('Show clicked with single row'),\n    onDuplicate: ids => console.log('Duplicating rows =>', ids),\n    onDelete: ids => console.log('Deleting rows =>', ids)\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // For multiple row selection: click \"Beta\" row, then \"Gamma\"\n    await userEvent.click(canvas.getByText('Beta'));\n    await userEvent.click(canvas.getByText('Gamma'));\n\n    // The ManageRow bar appears with \"2 items selected\"\n    expect(canvas.getByText(/2 items selected/i)).toBeInTheDocument();\n\n    // Attempt a \"Delete\" operation\n    await userEvent.click(canvas.getByText('Delete'));\n  }\n}",
                ...RowSelectionManage.parameters?.docs?.source,
              },
              description: {
                story: '4) Row Selection + Manage actions',
                ...RowSelectionManage.parameters?.docs?.description,
              },
            },
          }),
          (PaginationAndLargeData.parameters = {
            ...PaginationAndLargeData.parameters,
            docs: {
              ...PaginationAndLargeData.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    columns: sampleColumns,\n    rows: largeRows,\n    onSelectionChange: ids => console.log('Large data selection =>', ids)\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // We can confirm we see row #1, row #2, ...\n    // The console logs will show pagination events if we click next page.\n\n    // For example, user clicks next page:\n    const nextPageButton = canvas.getByRole('button', {\n      name: 'Go to next page'\n    });\n    await userEvent.click(nextPageButton);\n    // No direct assertion here, just confirming no crash\n  }\n}",
                ...PaginationAndLargeData.parameters?.docs?.source,
              },
              description: {
                story: '5) Pagination example with a larger dataset',
                ...PaginationAndLargeData.parameters?.docs?.description,
              },
            },
          }),
          (WithError.parameters = {
            ...WithError.parameters,
            docs: {
              ...WithError.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    columns: sampleColumns,\n    rows: sampleRows,\n    error: new Error('Something went wrong')\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // We see the error alert with \"Something went wrong\"\n    expect(canvas.getByText('Something went wrong')).toBeInTheDocument();\n  }\n}",
                ...WithError.parameters?.docs?.source,
              },
              description: {
                story:
                  '6) Error scenario\r\n   - No actual `await` usage, so remove `async`.',
                ...WithError.parameters?.docs?.description,
              },
            },
          }),
          (FullFeatures.parameters = {
            ...FullFeatures.parameters,
            docs: {
              ...FullFeatures.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    columns: sampleColumns,\n    rows: sampleRows,\n    buttons: sampleButtons,\n    dropdowns: sampleDropdowns,\n    searchbarProps: {\n      label: 'Search everything',\n      placeholder: 'Try searching \"Beta\" or \"Delta\"',\n      value: '',\n      onChange: () => {} // No-op to fix TS error\n    },\n    onSelectionChange: ids => console.log('Full selection =>', ids),\n    onManage: () => console.log('Manage row pressed'),\n    onShow: () => console.log('Show row pressed'),\n    onDuplicate: ids => console.log('Full-Feature: Duplicate =>', ids),\n    onDelete: ids => console.log('Full-Feature: Delete =>', ids)\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Confirm all UI elements are present\n    expect(canvas.getByText('Refresh')).toBeInTheDocument();\n    expect(canvas.getByText('New Item')).toBeInTheDocument();\n    expect(canvas.getByText('Filter Status')).toBeInTheDocument();\n\n    // Rows are displayed, plus search, row manage, etc.\n    await userEvent.click(canvas.getByText('Gamma'));\n    expect(canvas.getByText(/1 item selected/i)).toBeInTheDocument();\n\n    // There's a \"Manage\" button for single-row actions\n    await userEvent.click(canvas.getByText('Manage'));\n    // Logs \"Manage row pressed\"\n  }\n}",
                ...FullFeatures.parameters?.docs?.source,
              },
              description: {
                story:
                  '7) All features combined\r\n   - Uses `await` for userEvent click => keep `async`.',
                ...FullFeatures.parameters?.docs?.description,
              },
            },
          })
      },
      './src/components/Checkbox/index.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
        })
        var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/next/dist/compiled/react/jsx-runtime.js'
            ),
          _barrel_optimize_names_Checkbox_mui_material__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/@mui/material/Checkbox/Checkbox.js'
            ),
          _styles_palette__WEBPACK_IMPORTED_MODULE_2__ =
            (__webpack_require__(
              './node_modules/next/dist/compiled/react/index.js'
            ),
            __webpack_require__('./src/styles/palette.ts')),
          console = __webpack_require__(
            './node_modules/console-browserify/index.js'
          )
        function DataGridCheckbox({
          onClick,
          checked,
          indeterminate,
          onChange,
          disabled,
          ...props
        }) {
          console.log('DataGridCheckbox render:', {
            checked,
            indeterminate,
            disabled,
          })
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _barrel_optimize_names_Checkbox_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,
            {
              sx: {
                color: _styles_palette__WEBPACK_IMPORTED_MODULE_2__.B3.main,
                '&.Mui-checked': {
                  color: _styles_palette__WEBPACK_IMPORTED_MODULE_2__.B3.main,
                },
                '&.Mui-indeterminate': {
                  color: _styles_palette__WEBPACK_IMPORTED_MODULE_2__.B3.main,
                },
                '&.Mui-disabled': {
                  color: _styles_palette__WEBPACK_IMPORTED_MODULE_2__.Oh.main,
                },
                '&:hover': {
                  backgroundColor:
                    _styles_palette__WEBPACK_IMPORTED_MODULE_2__.B3.light,
                  opacity: 0.1,
                },
              },
              checked,
              indeterminate,
              onClick: event => {
                console.log('Checkbox clicked:', {
                  checked,
                  indeterminate,
                  eventTarget: event.target,
                }),
                  onClick && onClick(event)
              },
              onChange: event => {
                event.stopPropagation(),
                  console.log('Checkbox changed:', {
                    newChecked: event.target.checked,
                    previousChecked: checked,
                    indeterminate,
                  }),
                  onChange && onChange(event)
              },
              disabled,
              ...props,
            }
          )
        }
        const __WEBPACK_DEFAULT_EXPORT__ = DataGridCheckbox
        DataGridCheckbox.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'DataGridCheckbox',
          props: {
            onClick: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(event: React.MouseEvent) => void',
                signature: {
                  arguments: [
                    {
                      type: {
                        name: 'ReactMouseEvent',
                        raw: 'React.MouseEvent',
                      },
                      name: 'event',
                    },
                  ],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            checked: {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
            },
            indeterminate: {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
            },
            onChange: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(event: React.ChangeEvent<HTMLInputElement>) => void',
                signature: {
                  arguments: [
                    {
                      type: {
                        name: 'ReactChangeEvent',
                        raw: 'React.ChangeEvent<HTMLInputElement>',
                        elements: [{ name: 'HTMLInputElement' }],
                      },
                      name: 'event',
                    },
                  ],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            disabled: {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
            },
          },
        }
      },
      './src/components/Icons/ShowHideEye.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
        })
        var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/next/dist/compiled/react/jsx-runtime.js'
            ),
          _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_2__ =
            (__webpack_require__(
              './node_modules/next/dist/compiled/react/index.js'
            ),
            __webpack_require__(
              './node_modules/@mui/icons-material/esm/Visibility.js'
            )),
          _mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/@mui/icons-material/esm/VisibilityOff.js'
            )
        const ShowHideEyeIcon = ({ visible = !1 }) => {
            const iconStyle = { color: 'black' }
            return visible
              ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_2__.A,
                  { style: iconStyle }
                )
              : (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_3__.A,
                  { style: iconStyle }
                )
          },
          __WEBPACK_DEFAULT_EXPORT__ = ShowHideEyeIcon
        ShowHideEyeIcon.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ShowHideEyeIcon',
          props: {
            visible: {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
              defaultValue: { value: 'false', computed: !1 },
            },
          },
        }
      },
      './src/components/Tooltip/index.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
        })
        var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/next/dist/compiled/react/jsx-runtime.js'
            ),
          _barrel_optimize_names_Tooltip_tooltipClasses_mui_material__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/@mui/material/Tooltip/Tooltip.js'
            ),
          _barrel_optimize_names_Tooltip_tooltipClasses_mui_material__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              './node_modules/@mui/material/Tooltip/tooltipClasses.js'
            ),
          _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__('./node_modules/@mui/material/styles/styled.js')
        __webpack_require__('./node_modules/next/dist/compiled/react/index.js')
        const __WEBPACK_DEFAULT_EXPORT__ = (0,
        _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.Ay)(
          ({ className, tooltipplacement, offsetX, offsetY, ...props }) =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _barrel_optimize_names_Tooltip_tooltipClasses_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,
              {
                ...props,
                classes: { popper: className },
                placement: tooltipplacement,
                PopperProps: {
                  popperOptions: {
                    modifiers: [
                      {
                        name: 'offset',
                        options: { offset: [offsetX, offsetY] },
                      },
                    ],
                  },
                },
              }
            )
        )(({ tooltipcolor }) => ({
          [`& .${_barrel_optimize_names_Tooltip_tooltipClasses_mui_material__WEBPACK_IMPORTED_MODULE_4__.A.tooltip}`]:
            {
              backgroundColor: tooltipcolor,
              fontSize: '16px',
              fontFamily: 'Merriweather',
              fontWeight: 400,
              padding: '5px 8px',
            },
          [`& .${_barrel_optimize_names_Tooltip_tooltipClasses_mui_material__WEBPACK_IMPORTED_MODULE_4__.A.arrow}`]:
            { color: tooltipcolor },
        }))
      },
    },
  ]
)
