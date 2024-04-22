function highlight(id)
{
  // Remove the "highlight" class from all content elements
  for ( element of document.querySelectorAll(".content") )
  {
  element.classList.remove('highlight');
  }
  // Add the "highlight" class to the corresponding element
  document.getElementById(id).classList.add('highlight');
}
// Which content to highlight
let content_highlight;
switch ( Math.floor(Math.random() * 3) )
{
  case 0:
  content_highlight = "#content_first";
  break;
  case 1:
  content_highlight = "#content_second";
  break;
  case 2:
  content_highlight = "#content_third";
  break;
}
// Highlight the selected div
document.querySelector(content_highlight).classList.add("highlight");
