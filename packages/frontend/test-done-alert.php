#!/usr/bin/env php

<?php

// finds content (nodes and files) created by supplied username and deletes it

$short_options = "e:a";
$long_options = ["env:", "alert-when-done"];
$options = getopt($short_options, $long_options);

// set environment string
if (isset($options["e"]) || isset($options["env"])) {
  $env = isset($options["e"]) ? $options["e"] : $options["env"];
} else {
  $env = 'local';
}

// set alert style
if (isset($options["a"]) || isset($options["alert-when-done"])) {
  $job_done_file = "./job_done.mp3";

  if (is_file($job_done_file)) {
    if (`which afplay`) {
      $job_done_alert = "afplay $job_done_file";
    } elseif (`which aplay`) {
      $job_done_alert = "aplay $job_done_file";
    } elseif (`which mpg123`) {
      $job_done_alert = "mpg123 -q $job_done_file";
    } elseif (`which mplayer`) {
      $job_done_alert = "mplayer $job_done_file > /dev/null 2>&1";
    }
  } else {
    if (`which say`) {
      $job_done_alert = 'say "Job\'s done"';
    } else {
      $job_done_alert = "printf '\a'";
    }
  }
} else {
  $job_done_alert = ' ';
}

echo exec($job_done_alert);
