# General

Frontend part of the project only. (Server was left alone, aside from minor fix to a util function suggested by other students.)

Core functionality implemented.

# Remaining issues:

1. Just displaying the chapter contents removed all formatting, so instead chapter contents are rendered using `<pre>` tags, which preserve the paragraphs but cause the font to be incongruous with the CSS for the rest of the app. I'm sure this could be solved another way which preserves both format and style.

2. Clicking the "Table of Contents" link on the nav sidebar reloads the entire page in order to restore the homepage, rather than changing just the main display. This could be given a click handler that would change the display dynamically without reloading the page.

3. The nav sidebar is always present, and the button that would normally open and close it does not work (no event handler attached). This could instead be togglable hidden/visible when clicking on the sidebar menu button.

# Verdict:

None of these issues hinder the core functionality of the app, as laid out in the requirements. This was also more of a smaller practice app on the way to the more substantial React Todo-List Application which will be submitted for review. Putting this together was indeed helpful in preparing me for that larger task.

Rather than polish this project, I will spend that time instead building and polishing a high quality submission for the React Todo-List Application.
