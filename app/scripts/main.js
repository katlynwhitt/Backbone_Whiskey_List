// Create an instance of my Collection
var whiskey_list = new WhiskeyCollection();


// Grab all my data from my server
// After it's complete, create a new view with data
whiskey_list.fetch().done( function (){
  new WhiskeyListView({ collection: whiskey_list });
});