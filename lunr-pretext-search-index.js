var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "chapter-testing",
  "level": "1",
  "url": "chapter-testing.html",
  "type": "Chapter",
  "number": "1",
  "title": "Derivative RulesDerivatives of Polynomials and Exponential Functions",
  "body": " Derivative Rules  Derivatives of Polynomials and Exponential Functions   The Power Rule  If is any realy number, then    I can find the derivative of a function using the limit definition. Need to know       This is problem with Question ID 154765.     This is a problem with Question ID 110324.     This is a problem with Question ID 111923.    "
},
{
  "id": "chapter-testing-5",
  "level": "2",
  "url": "chapter-testing.html#chapter-testing-5",
  "type": "Example",
  "number": "1.1",
  "title": "",
  "body": "  "
},
{
  "id": "chapter-testing-6",
  "level": "2",
  "url": "chapter-testing.html#chapter-testing-6",
  "type": "Example",
  "number": "1.2",
  "title": "",
  "body": " This is problem with Question ID 154765.   "
},
{
  "id": "chapter-testing-7",
  "level": "2",
  "url": "chapter-testing.html#chapter-testing-7",
  "type": "Example",
  "number": "1.3",
  "title": "",
  "body": " This is a problem with Question ID 110324.   "
},
{
  "id": "chapter-testing-8",
  "level": "2",
  "url": "chapter-testing.html#chapter-testing-8",
  "type": "Example",
  "number": "1.4",
  "title": "",
  "body": " This is a problem with Question ID 111923.   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
