<?php

namespace App\Http\Controllers;

abstract class Controller
{
  /**
   * Page / Layout words
   * 
   * @var array
   */
  protected array $translateWords = [];

  /**
   * Push new array of words to page / layout words.
   * 
   * @param array $words
   * @return array
   */
  protected function pushTranslateWords(array $words = []): array
  {
    $this->translateWords = array_unique(
      array_merge($this->translateWords, $words)
    );
    return $this->translateWords;
  }
}
