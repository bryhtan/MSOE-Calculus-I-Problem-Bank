var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "chapter-testing",
  "level": "1",
  "url": "chapter-testing.html",
  "type": "Chapter",
  "number": "1",
  "title": "Exam 2 Review",
  "body": " Exam 2 Review    1. I can find the derivative of a function using the limit definition.    Need to know              2. I can interpret the derivative as an instantaneous rate of change and as the slope of a tangent line.    Textbook problems Section 2.7: 49 - 56;  Textbook problems Section 2.8: 12 - 15, 36 - 40    3. I can find an equation for a tangent line to a function at a point using the derivative.       I can use the graph of a function to determine the behavior of its derivative, including constructing a graph of the dereivative and identifying points of non-differentiability.  Textbook problems Section 2.8: 1 - 11, 41 - 44  I can determine the behavior of a function given the graph of its derivative, including identifying points of non-differentiability.  Problems from review worksheet.  I can find the derivative of algebraic, trigonometric, exponential, logarithmic, and inverse trigonometric functions.                 I can apply basic differentiation rules including power, product, quotient and chain rules to find derivatives of a given function.     I can find higher-order derivatives.  I can find derivatives using implicit differentitation.  I can find derivatives using logarithmic differentiation.  "
},
{
  "id": "chapter-testing-2",
  "level": "2",
  "url": "chapter-testing.html#chapter-testing-2",
  "type": "Objectives",
  "number": "1",
  "title": "",
  "body": "  1. I can find the derivative of a function using the limit definition.   "
},
{
  "id": "chapter-testing-4",
  "level": "2",
  "url": "chapter-testing.html#chapter-testing-4",
  "type": "Example",
  "number": "1.1",
  "title": "",
  "body": "  "
},
{
  "id": "chapter-testing-5",
  "level": "2",
  "url": "chapter-testing.html#chapter-testing-5",
  "type": "Example",
  "number": "1.2",
  "title": "",
  "body": "  "
},
{
  "id": "chapter-testing-6",
  "level": "2",
  "url": "chapter-testing.html#chapter-testing-6",
  "type": "Example",
  "number": "1.3",
  "title": "",
  "body": "  "
},
{
  "id": "chapter-testing-7",
  "level": "2",
  "url": "chapter-testing.html#chapter-testing-7",
  "type": "Objectives",
  "number": "1",
  "title": "",
  "body": "  2. I can interpret the derivative as an instantaneous rate of change and as the slope of a tangent line.    Textbook problems Section 2.7: 49 - 56;  Textbook problems Section 2.8: 12 - 15, 36 - 40    3. I can find an equation for a tangent line to a function at a point using the derivative.   "
},
{
  "id": "chapter-testing-8",
  "level": "2",
  "url": "chapter-testing.html#chapter-testing-8",
  "type": "Example",
  "number": "1.4",
  "title": "",
  "body": "  "
},
{
  "id": "chapter-testing-14",
  "level": "2",
  "url": "chapter-testing.html#chapter-testing-14",
  "type": "Example",
  "number": "1.5",
  "title": "",
  "body": "  "
},
{
  "id": "chapter-testing-15",
  "level": "2",
  "url": "chapter-testing.html#chapter-testing-15",
  "type": "Example",
  "number": "1.6",
  "title": "",
  "body": "  "
},
{
  "id": "chapter-testing-16",
  "level": "2",
  "url": "chapter-testing.html#chapter-testing-16",
  "type": "Example",
  "number": "1.7",
  "title": "",
  "body": "  "
},
{
  "id": "chapter-testing-17",
  "level": "2",
  "url": "chapter-testing.html#chapter-testing-17",
  "type": "Example",
  "number": "1.8",
  "title": "",
  "body": "  "
},
{
  "id": "chapter-testing-18",
  "level": "2",
  "url": "chapter-testing.html#chapter-testing-18",
  "type": "Example",
  "number": "1.9",
  "title": "",
  "body": "  "
},
{
  "id": "chapter-testing-20",
  "level": "2",
  "url": "chapter-testing.html#chapter-testing-20",
  "type": "Example",
  "number": "1.10",
  "title": "",
  "body": "  "
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
