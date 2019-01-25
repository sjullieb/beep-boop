# _Beep Boop_
#### _The application returns a range of numbers from 0 to the user's inputted number by specific rules, 01/25/2019_
#### By _**Yulia Shidlovskaya**_
## Description
This is a web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:

* Numbers that contain a 0 are replaced (all digits) with "Beep!"
* Numbers that contain a 1 are replaced (all digits) with "Boop!"
* Numbers divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that."

These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third. So, for example, in your finished program the number 10 should be replaced with "Boop!", and the number 30 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."

## Specifications
| Behavior                            | Input Examples | Output Examples  |
|-------------------------------------|----------------|------------------|
| Returns a number itself if it doesn't contain 0 or 1, and it is not divisible by 3                             | 4              | 4                |
| Returns "Beep!" if a number contains 0, but not 1, and it is not divisible by 3                          | 0              | "Beep!"          |
| Returns "Boop!" if a number contains 1, and it is not divisible by 3                          | 1              | "Boop!"          |
| Returns "I'm sorry..." if a number is divisible by 3                       | 3              | "I'm sorry..."   |
| Returns "Boop!" if a number contains 0 and 1, and it is not divisible by 3                    | 10             | "Boop!"          |
| Returns "I'm sorry..." if a number contains 0 and 1, and is divisible by 3 | 30             | "I'm sorry..."   |

## Setup/Installation Requirements

* Click the green button "Clone or download" on the repository page.
* To download the repository choose "Open in Desktop" or "Download Zip".
* To clone the repository use the provided web URL to run the command "git clone [web URL]" in the terminal
(note: git should be installed on your PC).  For more information visit GitHub Help section Cloning a repository from GitHub:
https://help.github.com/articles/cloning-a-repository-from-github/
* Open index.html in any web browser.

## Support and contact details

_Please contact me: sjullieb@gmail.com_

## Technologies Used

_HTML, CSS, Bootstrap, JavaScript, jQuery_

### License
MIT

Copyright (c) 2019 **_Yulia Shidlovskaya_**
