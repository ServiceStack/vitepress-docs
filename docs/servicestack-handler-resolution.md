---
slug: servicestack-handler-resolution
---
This document explains how the handlers are resolved in ServiceStack, the moment the Context is passed on to the ServiceStackHttpHandlerFactory, and all the actions that happen along with it.

The order of execution is as below, and the first one to be match is executed.

1. Iterates through the RawHttpHandlers in the order they were added to EndpointConfig.
1. If its a root request ("/"):
    * Correct requests "/default.aspx" and "/Default.aspx" to "/", as WebDav Server automatically appends them. 
    * Iterate through CatchAllHandlers for a match, and if no match is found return DefaultHandler.
(Note: DefaultHandler is DefaultHttpHandler if its hosted on the root path or running in a Mono environment. If not, it translates to NonRootModeDefaultHttpHandler)
    * Check if a file exists with the name DefaultRootFileName mentioned in the EndpointConfig.
        * If it doesn't exist, return IndexPageHttpHandler
        * If exists, DefaultHttpHandler is invoked to serve the file if its an allowed extension. If not, ForbiddenHttpHandler is invoked.
1. Searches the Service Route Collection for the path. If found, RestHandler is invoked.
1. If its a file system path, and no matches so far:
    * If its a directory, and it exists, but the path does not have the "/" suffix, RedirectHttpHandler invoked with the trailing "/".
    * CatchAllHanders are checked for matches.
    * If file doesn't exist, NotFoundHttpHandler is invoked.
    * If exists, DefaultHttpHandler is invoked to serve the file if its an allowed extension. If not, ForbiddenHttpHandler is invoked.
1. CatchAllHanders are checked for matches.
1. If FallbackRestPath is configured RestHander is invoked.
1. Resolution fails.

TODO: This document is not complete, and is just a rough draft. There are still a few more attempts left in the resolution process.
 
