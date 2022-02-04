var query = "give me suggestions"
var stringResponse = UrlFetchApp.fetch("http://suggestqueries.google.com/complete/search?client=firefox&q=" + encodeURIComponent(query)).getContentText();
var parsedResponse = JSON.parse(stringResponse);
var searchString = parsedResponse[0];
Logger.log("search string: " + searchString);
var suggestions = parsedResponse[1];
for (var i=0; i<suggestions.length; i++) {
  Logger.log("Suggestion: " + suggestions[i]);
}