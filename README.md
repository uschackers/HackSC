# HackSC
Sometimes colloquially, and appropriately, referred to as SnackSC.

##HTML/CSS Style Guide
+ Avoid inline CSS if possible.
+ Avoid '!important' if possible -- we all have those days though.
+ Adding classes for styling is preferred over ids.
+ Keep the Style sheet tidy.
	+ Place 1 newline between each selector section.
	+ Alphabetize the style rules within each selector section.
	+ Order the selector sections by where they apply in the html page.
	+ All smaller screen or mobile rules belong in their proper section at the bottom of the page.


##Code Review
####When Getting Code Reviewed
1. Create branch and commit your changes.
1. QA test.
1. Merge master into branch first and resolve all conflicts.
1. Create a pull request to merge your branch to master.
1. Get your code reviewed by at least one other person.  
	+ Create an issue called CODE REVIEW: *Name of branch* with a short description of the change and assign your code reviewer(s).
	+ Respond to any comments from your code reviewer and make appropriate changes.
+ Get LGTM from code reviewer.
1. Merge pull request and delete your branch.

####When Reviewing Code
1. Checkout their branch and test their changes.
	+ If UI change, look to see that it looks like the mocks that Steven made if they exist or just make sure it looks nice.
1. Look at the code diffs.
	+ Make sure that the code is readable.  Proper indentation, variable/function naming, styling, etc.
	+ Make sure the code makes sense (i.e. Make sure their isn't a bunch of unused css, if there is a better way to do something let them know, etc).
	+ Write comments with feedback on the pull request.
	+ LGTM if the changes look good.

##QA Testing
Please make sure to test your changes to make sure they are compatible on the following platforms.
+ Chrome
+ Chrome Mobile
+ Firefox
+ Firefox Mobile // There are a lot of issues on Firefox Mobile.  It doesn't have to look the same as the other sites but make sure it looks usable.
+ Safari
+ Safari Mobile

As well, please do a quick QA test to make sure that your changes have not broken any of the current sites functionality. Easiest to just pull up current master branch and compare side by side.

Add to this list as needed.

####TOP OF PAGE
+ Logo, date, and email subscribe animate down from the top of the page.
+ Robots and Computers animate in from side.
+ On mobile and smaller screens
   + Robots animate from top and computers are hidden.  
   + Robots are scrollable and centered at the blue robot.
+ Robots pulse on hover.

####NAVBAR
+ On desktop, centers w/o logo on top screen. On scrolling below the top section, changes to showing the logo and right aligning the menu options.
+ On small screens and mobile: Doesn't display nav/topbar until scrolling below top section.  Then displays as logo and menu button.
	+ Clicking the menu button slides open the menu from the right.  The screen should freeze in place until the nav drawer is closed.  Clicking outside the nav drawer or clicking the menu button should close the menu.
