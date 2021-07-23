This is mostly a scratch sheet, to put out thoughts on organizing this app.


# MAIN REQUIREMENTS

There are 2 main use cases:
- Add items to an inbox
- Process an inbox

as a PWA, this should sync on all platforms, and be available offline if needed.

# DESIGN

2 components: processInbox, Inbox

# User Experience
- User logs in
- The default opens a blank inbox entry. 
- Hitting return opens a new one, and stores the old.
- A button at the bottom switches to processing view, starting from the earliest note taken
