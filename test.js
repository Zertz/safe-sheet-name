import test from 'ava'
import safeSheetName from './'

test('" [/?*unicorns & rainbows*?\\]   unicorns" -> "unicorns  rainbows"', t => {
  t.is(safeSheetName(' [/?*unicorns & rainbows*?\\] '), 'unicorns  rainbows')
})
