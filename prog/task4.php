<?php

$f = fopen( 'php://stdin', 'r' );
$stdout = fopen('php://stdout', 'w');

$x = fgets( $f );
$n = fgets( $f );
$count = $x;
$c = 0;

for ($i = 0; $i < $n; $i++) {
  $newC = fgets($f);
  $c += $newC;
 
  if ($newC == 0 && 0 < $c && $c < $x) {
    $c += 1;
  }
 
  if ($count < $c) {
   $count += $x;
  }
}

fwrite($stdout, $count / $x);