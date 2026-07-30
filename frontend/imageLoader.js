'use strict'
module.exports = function imageLoader({ src }) {
  return src.startsWith('http') ? src : `/Showcase${src}`
}
