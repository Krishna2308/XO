var arrIds = [];
function lb(){
  //testing for entry
  console.log("we in the lb");
  var ref = database.ref('LB');
  ref.on('value', gotLB, errLB);
}
function gotLB(data){
  console.log("In here lb");
  var stats = data.val();
  var keys = Object.keys(stats);
  var content = '';
  //console.log(keys);
  var ref1 = database.ref('LB');
  ref1.on('child_added', function(snapshot, prevChildKey){
    if(!(arrIds.includes(snapshot.key))){
    arrIds.push(snapshot.key);
    console.log("current key: " + snapshot.key + "; prev key: "+ prevChildKey);
    console.log(snapshot.key);
    var newPost = snapshot.val();
    var tempid = snapshot.key;
    content += '<tr>';
        content += '<td>' + newPost.name + '</td>'; //column1
        content += '<td>' + newPost.HighScore + '</td>';//column2
        content += '<td>' + newPost.HighLevel + '</td>';//column3
        content += '</tr>';
      } 
  });
  $('#ex-table').append(content);
}
function errLB(err){
  console.log(err);
}
window.onload = function(){
  lb();
}