 
$('#fname').keyup(function(){
      var fname =$('#fname').val();

      $('#res1').text(fname);
});

$('#lname').keyup(function(){
      var lname =$('#lname').val();

      $('#res2').text(lname);
});
$('#lname').keyup(function(){
      var fname =$('#fname').val();
      var lname=$('#lname').val();
      var result = fname+' '+lname

      $('#res3').text(result);
});
