# _Ping Pong_

#### _A game for the week 3 code review at Epicodus, June 10, 2016_

#### By _**Julia Dickey**_

## Description

This game allows users to submit a number, and in return will see all of the numbers between zero and their number as well as some "pings" and "pongs".

## Setup/Installation Requirements

* Clone the github repository. The site can be found [here](https://github.com/JuliaDickey/wk3-Ping-Pong) on GitHub, or [click here] (http://juliadickey.github.io/wk3-Ping-Pong/ ) to view it on the web.
* Open index.html in the browser of your choice.
* Enter a number
* Click the submit button to see your results.

## Specifications

* When a user enter a number, the game will return a list of numbers between 1 and the user's number.
  Example Input: 5
  Example Output: 1, 2, 3, 4, 5

* When a user enter a value that is not a number, an alert will pop up asking them to, "Please enter a number."
  Example Input: sandwich
  Example Output: "Please enter a number"

* Every returned number that is a multiple of 5 will be replaced with the word "pong."
  Example Input: 12
  Example Output: 1, 2, ping, 4, pong, ping, 7, 8, ping, pong, 11, ping

* Every returned number that is a multiple of 3 will be replaced with the word "ping."
  Example Input: 5
  Example Output: 1, 2, ping, 4, 5

* Every returned number that is a multiple of both 3 and 5 will be replaced with the word "pingpong."
  Example Input: 15
  Example Output: 1, 2, ping, 4, pong, ping, 7, 8, ping, pong, 11, ping, 13, 14, pingpong

## Known Bugs

There are no known bugs, but if you do encounter one, please email [Tech Support](techsupport@gmail.com)_

## Support and contact details

For additional questions or comments, email [Julia](julia@email.com).

## Technologies Used

HTML, CSS, Bootstrap, JavaScript, jQuery

Copyright (c) 2016 **_Julia Dickey_**
