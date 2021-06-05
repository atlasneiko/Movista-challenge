<?php

function longestWord($string){

  $wordArray  = explode(' ', $string);
  
  $result = '';
  $maxLength = 0;
  
  foreach ($wordArray as $word) {
    if (strlen($word) > $maxLength) {
        $maxLength = strlen($word);
        $result = $word;
    }
  }
  
  return $result;
}

echo longestWord("I love Cats")
?>