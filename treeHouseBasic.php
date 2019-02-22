
 # LEARNING PHP



<?php
 
 

/*


 * dock blocks 
 * dock blocks 
 * AUTHOR - BENJAMIN KAUFMAN



 */
 
 # this is a comment line
// this is a comment line
/* 
this is a comment block

BLOCK
*/


echo 'Hello World';
echo 'this is me typing a string'
?>


variables in PHP start with a 
$_variable
$variable
$5day  >>> IS NOT A VALID variables


<?php
$score=5;
echo 'SCORE IS ';
echo $score;
?>

<?php
$score=5;
echo 'SCORE IS ';
echo $score+15;
?>

<?php
$score=5;
echo 'SCORE IS ';
echo $score-20;
?>

<?php
$score=5;
echo 'SCORE IS ';
$score-=10;
echo $score;
?>

<?php 
$num_1=1;
$num_2=2;
$num_3=3;

echo $num_1;
echo 1;
echo '1';
?>



var_dump() can be used to let us know the value type of the variable



<?php 

var_dump( $num_1);
var_dump(1);
var_dump('1');
var_dump($num_1+$num_2);
var_dump($num_1-$num_2);

?>

floats


<?php
$distance_home=1.2;

$distance_work=2.5;

var_dump($distance_home+$distance_work+.3);

var_dump($distance_home+$distance_work+3);

?>

<?php 

$a=5;
$b=10;
var_dump($a*$b);

var_dump($a/$b);
$a=$a+1;
var_dump($a);
$a++;
var_dump($a);
$a--;
var_dump($a);
var_dump(++$a);
$a+=5;
var_dump($a);

?>


$lb_to_kg = 0.453592;
$mile_to_km = 1.60934;


<?php

//number we want to convert to kg

$pounds=140;

//floating point value for pound to kg conversion

$lb_to_kg=0.453592;

//calculate pounds * kg conversion floating point

$kilogram_conversion=$pounds*$lb_to_kg;

//display pounds to kg

echo "Weight is ";

echo $kilogram_conversion;
echo '     ';

//number in miles you want to convert
$milesKm=1.6;
$miles=2.5;

//floating point value for the mile to km conversion


//calculate miles*mile to km conversion

echo $milesKm;
echo $miles;
$to_km_conversion=$miles*$milesKm;


echo " Kilometers are ";

echo $to_km_conversion;
echo '     ';

?>


celcius to farenheit


<?php 
$celcius=10;
$farenheit_ration=33.8;
$celcius_to_farenheit=$celcius*$farenheit_ration;
echo ' temperature in American is  ';
echo $celcius_to_farenheit;
echo '   '

?>

....